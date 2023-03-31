import React from "react";
import { useRouter } from 'next/router'
import { useState, useEffect, useContext, componentDidMount } from 'react';
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { GlobalContext } from '../../comps/Global/useGlobalContext'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { collection, addDoc, getDocs, runTransaction, doc } from "firebase/firestore";
import { async } from "@firebase/util";
import { setConfig } from "next/config";
import addLike from "../../comps/Story_Util";
import { StoryForm, SuccessModal } from "../../comps/Story_Util";
export const Anxiety = () => {
    const [like, setLike] = useState(0)
    const [love, setLove] = useState(0)
    const [relate, setRelate] = useState(0)
    const [insight, setInsight] = useState(0)
    const [view, setView] = useState(0)
    const {
        db,
        storyName,
        makeNoise
    } =
        useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "likes"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                if (storyName.toLowerCase() == doc.id) {
                    console.log('data', doc.data().likes)
                    setLike(doc.data().likes ? doc.data().likes : 0)
                    setLove(doc.data().loves ? doc.data().loves : 0)
                    setRelate(doc.data().relatable ? doc.data().relatable : 0)
                    setInsight(doc.data().insightful ? doc.data().insightful : 0)
                }
            });
            console.log(storyName)
            const sfDocRef = doc(db, "viewCounts", storyName.toLowerCase());
            console.log('doc ref', sfDocRef, storyName)

            try {
                await runTransaction(db, async (transaction) => {
                    const sfDoc = await transaction.get(sfDocRef);
                    if (!sfDoc.exists()) {
                        throw "Document does not exist!";
                    }

                    const newCount = sfDoc.data().count + 1;
                    transaction.update(sfDocRef, { count: newCount });
                });
                // console.log("Transaction successfully committed!");
            } catch (e) {
                console.log("Transaction failed: ", e);
            }

            const querySnapshot_view = await getDocs(collection(db, "viewCounts"));
            querySnapshot_view.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                if (storyName.toLowerCase() == doc.id) {
                    console.log('data', doc.data().count)
                    setView(doc.data().count)
                }
            });
            console.log(view)
        }

        fetchData().catch(console.log('hey'))


    }, [])
    const toAddLike = (attribute, setLike, like, iconId) => {
        const icon = document.getElementById(iconId)
        addLike(document, db, storyName, setLike, like, attribute, icon)
    }
    // const addLike = async () => {
    //     let updateValue = 0
    //    const likebtn = document.getElementById('likeIcon')
    //     if(likebtn.classList.contains(styles.liked))  {
    //         setLike(like - 1)
    //         likebtn.classList.remove(styles.liked)
    //         updateValue = like - 1
    //     } else {
    //         setLike(like + 1)
    //         likebtn.classList.add(styles.liked)
    //         updateValue = like + 1
    //     }

    //     const sfDocRef = doc(db, "likes", storyName.toLowerCase());
    //     console.log('doc ref', sfDocRef, storyName)

    //     try {
    //         await runTransaction(db, async (transaction) => {
    //             const sfDoc = await transaction.get(sfDocRef);
    //             if (!sfDoc.exists()) {
    //                 throw "Document does not exist!";
    //             }

    //             const newLike = updateValue
    //             transaction.update(sfDocRef, { likes: newLike });
    //         });
    //         // console.log("Transaction successfully committed!");
    //     } catch (e) {
    //         console.log("Transaction failed: ", e);
    //     }
    // }

    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={styles.container}>
            <SuccessModal className="mt-5"
                styles={styles}
                message={'Your comment has been sent :)'}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
            <div className={styles.section}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/cover.png" className={styles.storyImg} layout="fill" alt="A girl named mia walking with a cup of coffee in her hand while chaos rages in her head" />
                </div>
                <div className={styles.words}>
                    <h1 className={styles.storyTitle}>Anxiety</h1>

                    <div className={`${styles.reactionContain} d-flex`}>

                        {/* Old reaction counter code */}
                        {/* <small className="me-4">Likes: {like}</small>
                        <small>Views: {view}</small> */}

                        {/* New reaction counter code */}
                        <div className={styles.viewCount}>
                            <span className={styles.circle}><Icon icon="mdi:eye-outline" color="#212121" /></span>
                            <small>{view}</small>
                        </div>
                        <div className={styles.reactionCount}>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="material-symbols:thumb-up-outline" hFlip={true} />
                                <span className={styles.tooltiptext}>Like: {like}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="mdi:cards-heart-outline" />
                                <span className={styles.tooltiptext}>Love: {love}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="mdi:people-check-outline" />
                                <span className={styles.tooltiptext}>Relatable: {relate}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="majesticons:lightbulb-shine-line" />
                                <span className={styles.tooltiptext}>Insightful: {insight}</span>
                            </span>
                            <small>{like + love + relate + insight}</small>
                        </div>
                    </div>

                    <br />
                    <br />
                    <h2 className={styles.storySynopsis}>Preview:</h2>
                    <br />
                    <p>Far from home, separated from her friends, and picking up the pieces after her computer science midterm, Mia struggles to put her mind at ease...</p>
                </div>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/wakingUp.png" className={styles.storyImg} layout="fill" alt="mia waking up and looks out the window from her bed" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I wake up at 10 AM on a chilly, overcast morning to stare out the window of my U-district apartment. My relatively new surroundings jolt my memory, and I recall getting my CSE midterm results yesterday. The harsh reality sweeps through my mind like a wave, giving me chills.
                    <br /><br />
                    Despite my initial reluctance, I push myself out of bed to start the day. I need to get my usual Starbucks order on the way to class but noticed that my lecture was going to start in forty-five minutes. Consulting the clock, I quickly grab my stuff and head out.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/cafe.png" className={styles.storyImg} layout="fill" alt="mia waiting for her starbucks drink and the people engaged in conversation make her reminisce about her past" />
                </div>
                <p className={styles.words}>
                    As I enter the bustling U-District Starbucks, I find a seat to await my drink. While waiting, my gaze inadvertently fixates upon a group of conversing students. The scene evokes memories of my close-knit friend group from high school.
                    <br /><br />
                    My friends stayed in California to attend UC Berkeley, but I got rejected. Although it was heartbreaking, I knew it wasn’t the end of the world for me, and I maintain that perspective to this day.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/familyPhoto.png" className={styles.storyImg} layout="fill" alt="A picture stand containing an image of mia and her family at the quad" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    In the aftermath of the decision, I found myself increasingly drawn to UW. The university had already left a lasting impression on me during a visit as a high school freshman, where my family and I traveled to UW for a photo shoot with the cherry blossoms. I’ve cherished those photos ever since. So, here I am.
                    <br /><br />
                    I pull myself back into reality after realizing that twenty minutes have passed and my drink was probably long done to the point that it had gotten cold. I head to the counter to receive my drink.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/walking.png" className={styles.storyImg} layout="fill" alt="mia walking to class with her coffee in hand" />
                </div>
                <p className={styles.words}>
                    I hasten to my first class of the day, my computer science lecture in Kane Hall. This class is a nerve-racking experience because I need to do well. Unfortunately, I didn’t get into the CS major as a direct admit.
                    <br /><br />
                    I had also heard from a high school classmate, who also attends UW, that admittance to the CS program is ridiculously competitive, and if I didn’t get in as a DA, I should probably go elsewhere. I remain undaunted.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/lectureTalking.png" className={styles.storyImg} layout="fill" alt="mia sitting with her seat mate in lecture" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    Upon arriving at the lecture hall, I take my seat near the stairs among a sea of students. My seatmate greets me as I unpack my laptop. “I gotta study harder, it’s confusing,” he utters in a defeated tone. “Yeah, it’s sad,” I respond in agreement. His words inadvertently remind me of my disappointing midterm results, and a sense of unease washes over me.
                    <br /><br />
                    <i>I studied for many hours and days. I went to TA office hours like it was my hobby. I did tons of practice problems. So, how in the world did I still have a rough time on the exam?</i> 55% does not make me feel good. Although the midterm made a sizable dent in my confidence, I attempt to put it in the back of my mind to focus on the new content, or else my knowledge and grades would lag even further behind.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/clouds.png" className={styles.storyImg} layout="fill" alt="mia struggling to focus because her mind is in the clouds" />
                </div>
                <p className={styles.words}>
                    However, as the professor delves into the introduction of new concepts, I find myself struggling to keep pace, and eventually, I subconsciously began to lose interest. Due to disengagement, I feel my eyes getting heavier, and a strong sense of sleepiness begins to set in. Not even my Matcha Latte can cure the fatigue.
                    <br /><br />
                    Thankfully, having my terrible midterm results lingering over me like a dark cloud, drives me to resist sleepiness. <i>I have to make sense of this information or have a high chance of failing the class.</i> I did not equate a number to my worth as a person, but it seemed believable with every result I got.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/goingMad.png" className={styles.storyImg} layout="fill" alt="mia stressing out" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    With each passing moment, I know that the finals would creep closer to deciding my fate. Every second I spend pondering an unrelated topic, my goal of majoring in CS slips further away. From the financial burden of tuition to my lack of support, it’s too much for me.
                    <br /><br />
                    <i>What if I don’t make it? What will happen to me? Where will I go?</i> The thought of not succeeding and the subsequent ramifications causes my heart to beat even faster. My mind spirals out of control, and my consciousness is thrown back to random moments of my past.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/walls.png" className={styles.storyImg} layout="fill" alt="mia thinking about how she is now away from her friends and feels isolated" />
                </div>
                <p className={styles.words}>
                    Among those memories is lurking in my old friend group’s Discord. They would talk about their shared struggles, and I saw them overcome their obstacles together and celebrate. In contrast, I find myself alone in my current predicament. <i>I guess my friends moved on without me.</i>
                    <br /><br />
                    On the rare occasions when they pinged me and asked how I was doing, I answered: “alright.” <i>How would they understand anyways? They most likely didn’t put up with a competitive-major system.</i> Moments like these have stacked up to create walls that continuously close in on me, leaving no room to breathe nor an exit in sight.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/leaving.png" className={styles.storyImg} layout="fill" alt="mia's seatmate saying goodbye to her as the lecture ends" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    As the lecture concludes, my seatmate turns to me and says, "I gotta head to my next class. See you." I simply nod in response, still flabbergasted that I had learned nothing. Throughout the day, the CS class was at the back of my mind slowly eating away at my sanity. In the blink of an eye, I’m in my last class of the day: a mere elective. <i>Not a chance I would pay any attention.</i>
                    <br /><br />
                    The temptation to skip my remaining classes and immerse myself fully in CS arises, but I realize that it would do me more harm. My desire to return home and re-watch the recording of today's lecture and begin working on the new assignment drives me crazy.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/umbrella.png" className={styles.storyImg} layout="fill" alt="a classmate giving mia her umbrella that she dropped" />
                </div>
                <p className={styles.words}>
                    As the class dismisses, I make a beeline for the exit, eager to return home as soon as possible. I’m halfway down the stairs when a classmate approaches me, handing me my forgotten umbrella. We talk a bit about the classes we are taking and post-graduation plans.
                    <br /><br />
                    Though the exchange serves as a brief respite from my feelings of depression, it becomes evident that my inner thoughts have taken a toll on me and I find myself unloading some of my worries and concerns onto my classmate.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/goingMadTwo.png" className={styles.storyImg} layout="fill" alt="mia stressing out again" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I can't help but express, “I miss California and, above all, my friends. I wish I had heeded the warning from my high school classmate, but now, it’s too late to turn back. Now, I’m trapped in weed-out hell and I believe no one will understand my suffering” I say, which surprises even me. <i>Why did I even tell him that? What good would it do? My problems, my fault, right? This situation is so dumb.</i> I pause, awaiting my classmate's response.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/connecting.png" className={styles.storyImg} layout="fill" alt="mia exchanging discord contacts with the classmate" />
                </div>
                <p className={styles.words}>
                    The classmate offers a suggestion, “Maybe you could try forming a study group.” He points out how I have been facing the challenges alone and having difficulties with the course content. I respond with a realization, "I haven't done that yet."
                    <br /><br />
                    In the past, I was accustomed to studying with my friend group, but now, with them no longer by my side, I study by myself and never bothered to ask anyone else because I wasn’t comfortable asking them. I thank him for understanding and for the advice. After talking a bit more, we decide to exchange Discord handles before parting ways at Red Square.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/wayHome.png" className={styles.storyImg} layout="fill" alt="mia walking back home" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I walk back to my apartment, and my thoughts are in a state of turmoil. I am fortunate to have met someone willing to listen to my problems and offer suggestions. But now, someone else knows about my problems. <i>Will he be let down if I fail? Will he laugh at me when that happens?</i> These thoughts weigh heavily on my mind.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/home.png" className={styles.storyImg} layout="fill" alt="mia thinking about what to do next" />
                </div>
                <p className={styles.words}>
                    Back at my place, I devote several hours to attempting to grasp the lecture material. Although I start to make progress, the concepts remain hazy. It’s overwhelming, and I decide to leave it for tomorrow. Maybe I will ask my seatmate to join my study group.
                    <br /><br />
                    Being so far from home, and having lost touch with my friend group, today's encounter has reminded me that there are good people out there who I can form new friendships with. <i>Maybe if we help each other out, we will all be successful.</i> Regardless, having a plan has provided me with a sense of relief that allowed me to quiet my anxieties for the time being.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection} text-center`}>
                <div className={styles.block}></div>
                <div className={styles.formContents}>
                    <div className={styles.formContainer}>
                        <h2>What do you think?</h2>
                        <div className={styles.choiceContainer}>
                            <div className={styles.endStoryBtn} aria-label="like" role="button" tabIndex="0" onClick={() => {
                                console.log('add like')
                                toAddLike('like', setLike, like, "likeIcon")
                            }}>
                                <h6><Icon id="likeIcon" icon="material-symbols:thumb-up-outline" hFlip={true} width="25" height="25" className={styles.reactIcon} />Like</h6>
                            </div>
                            <div className={styles.endStoryBtn} aria-label="love" role="button" tabIndex="0" onClick={() => {
                                toAddLike('love', setLove, love, "loveIcon")
                            }}>
                                <h6><Icon id="loveIcon" icon="mdi:cards-heart-outline" width="25" height="25" className={styles.reactIcon} />Love</h6>
                            </div>
                            <div className={styles.endStoryBtn} aria-label="relatable" role="button" tabIndex="0" onClick={() => {

                                toAddLike('relatable', setRelate, relate, "relateIcon")
                            }}>
                                <h6><Icon id="relateIcon" icon="mdi:people-check-outline" width="25" height="25" className={styles.reactIcon} />Relatable</h6>
                            </div>
                            <div className={styles.endStoryBtn} aria-label="insightful" role="button" tabIndex="0" onClick={() => {
                                toAddLike('insightful', setInsight, insight, "insightIcon")
                            }}>
                                <h6><Icon id="insightIcon" icon="majesticons:lightbulb-shine-line" width="25" height="25" className={styles.reactIcon} />Insightful</h6>
                            </div>
                        </div>
                        <StoryForm styles={styles} onSubmit={() => { setIsOpen(true) }} />
                    </div>
                </div>
            </div>

            {/* THE BELOW IS THE CODE FOR THE CREDIT PANEL */}
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    This story was written by Eddy, illustrated by Anna, edited by Sylvia and Augene, and peer-reviewed by 15 UW Students.
                    <br />
                    <br />
                    Also, special thanks to members of the <Link href="https://www.instagram.com/writersinprogressuw/"><a className={styles.partnerLink} target="_blank">Writers In Progress</a></Link> club for providing additional feedback!
                </p>
            </div>
        </div>
    )
}

export default Anxiety