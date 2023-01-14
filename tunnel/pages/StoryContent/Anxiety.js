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

export const Anxiety = () => {
    const [like, setLike] = useState(0)
    const [view, setView] = useState(0)
    const {
        db,
        storyName
    } =
        useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "likes"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                if (storyName.toLowerCase() == doc.id) {
                    console.log('data', doc.data().likes)
                    setLike(doc.data().likes)
                }
            });

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

    const addLike = async () => {
        console.log('add likes')
        setLike(like + 1)
        const sfDocRef = doc(db, "likes", storyName.toLowerCase());
        console.log('doc ref', sfDocRef, storyName)

        try {
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(sfDocRef);
                if (!sfDoc.exists()) {
                    throw "Document does not exist!";
                }

                const newLike = sfDoc.data().likes + 1;
                transaction.update(sfDocRef, { likes: newLike });
            });
            // console.log("Transaction successfully committed!");
        } catch (e) {
            console.log("Transaction failed: ", e);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/cover.png" className={styles.storyImg} layout="fill" alt="a dude named John walking past a bench looking downwards" />
                </div>
                <div className={styles.words}>
                    <h1 className={styles.storyTitle}>Anxiety</h1>
                    <div className="d-flex">
                        <small className="me-4">Likes: {like}</small>
                        <small>Views: {view}</small>
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
                <p className={styles.words}>
                    I wake up at 10 AM on a cold, cloudy morning to stare out the window of my U-district apartment. It is six weeks past the first day of the Autumn quarter. My relatively new surroundings jolt my memory, and I remember getting the CSE midterm results yesterday.
                    <br/><br/> 
                    The harsh reality sweeps through my mind like a wave, giving me chills. I force myself out of my bed to start the day. I need my usual Starbucks order. So, I have to be quick because my lecture is in forty-five minutes. I grab my bag and umbrella and head out the door.                
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/wakingUp.png" className={styles.storyImg} layout="fill" alt="John sitting on the lightrail train and looking out the window" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/cafe.png" className={styles.storyImg} layout="fill" alt="John leaving the lightrail car and walking on the platform towards the exit" />
                </div>
                <p className={styles.words}>
                    The U-District Starbucks is relatively crowded. I take a seat to wait for my drink. While waiting, my eyes fixate on a group of conversing students. The scene makes me recall my close friend group back in high school. My friends stayed in California to attend UC Berkeley. Meanwhile, I got rejected. Although heartbreaking, I knew it wasn’t the end of the world for me (I hold that as fact even today).                
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    In the weeks following the decision, I took a greater interest in UW. The university had already made an impression on me when I was a high school freshman. My family and I traveled to UW for a photo shoot with the cherry blossoms. I cherish that family photo. So, here I am. 
                    <br/><br/>
                    I pull myself back into reality after realizing that twenty minutes have gone by and my drink was probably long done to the point that it had gotten cold. I go to the service area to receive my drink. 
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/familyPhoto.png" className={styles.storyImg} layout="fill" alt="John alone in his lecture room" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/walking.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus" />
                </div>
                <p className={styles.words}>
                    I then proceed to speed off to my first class: my computer science lecture in Kane Hall. The lecture is a nerve-racking experience because I need to do well. I wasn’t fortunate enough to get into the CS major as a direct admit. And I had heard from a high school classmate, who also attends UW, that admittance to the CS program is ridiculously competitive, and if I didn’t get in as a DA, I should probably go elsewhere. I wasn’t deterred. 
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    After arriving at the lecture room, I take a seat in the large hall near the stairs. My seatmate greets me as I get my laptop out. “I gotta study harder. It’s confusing,” he says. “Yeah, it is,” I say in agreement. He unintentionally reminds me of my unpleasant midterm result, and I immediately feel uneasy. I studied for many hours and days. I went to TA office hours like it was my hobby. I did tons of practice problems. 
                    <br/><br/>
                    So, how in the world did I still have a rough time on the exam? 55% does not make me feel good. Although the midterm made a sizable dent in my confidence, I attempt to put it in the back of my mind to focus on the new content, or else my knowledge and grades would lag even further behind. 
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/lectureTalking.png" className={styles.storyImg} layout="fill" alt="John's new roommates talk while John is left in the background" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/clouds.png" className={styles.storyImg} layout="fill" alt="John discovers an umbrella on his lecture room floor" />
                </div>
                <p className={styles.words}>
                    However, as the professor introduces the new concepts, I start getting confused, and eventually, I subconsciously lose interest. Due to feeling bored, my eyes start getting heavy, and a strong sense of sleepiness set in. Not even my Matcha Latte can cure it.
                    <br/><br/>
                    However, having my terrible midterm results hang over me like a dark cloud makes me resist sleepiness. I have to make sense of this information or have a high chance of failing the class. I did not equate a number to my worth as a person, but it seems believable with every result I got. 
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    The stakes are high. With every tick of the clock, I know finals would eventually arrive to decide my fate. With every second I spent pondering an unrelated topic, my goal of majoring in CS slips further away. Tuition is expensive, and I have no one to lean on for support. What if I don’t make it? What will happen to me? Where will I go? That line of thought causes my heart to beat even faster. My mind loses control, and my consciousness is brought to relive random moments.
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/goingMad.png" className={styles.storyImg} layout="fill" alt="John catches up with his classmate at the stairwell to give back the umbrella" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/walls.png" className={styles.storyImg} layout="fill" alt="John and his classmate walk out of the building while talking" />
                </div>
                <p className={styles.words}>
                    One of those moments included lurking in my old Discord friend group, they talked about their shared struggles, and I saw them overcome their obstacles together. Here, I have no one. I guess my friends moved on without me. 
                    <br/><br/>
                    On the rare occasions when they pinged me and asked how I was doing, I answered: “alright.” How would they understand anyways? They most likely didn’t put up with a competitive-major system. Moments like these have stacked up to create walls that continuously close in on me, leaving no room to breathe nor an exit in sight.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    “I gotta head to my next class. See you,” says the seatmate. I nod, still flabbergasted that the lecture had ended without me learning anything. Throughout the day, the CS class was on my mind slowly eating away at my sanity. 
                    <br/><br/>
                    In the blink of an eye, I’m in my last class of the day: a mere elective. Not a chance I would pay any attention. I debated skipping all my classes to focus on CS but came to the conclusion that it would do me more harm. I want to rush home to rewatch today’s CS lecture recording and start on the new assignment.  
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/leaving.png" className={styles.storyImg} layout="fill" alt="John and his new friend part ways at red square" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/umbrella.png" className={styles.storyImg} layout="fill" alt="John waits in line at the hub to get food" />
                </div>
                <p className={styles.words}>
                    When class was dismissed, I set my sights on getting home as fast as possible. I’m halfway down the stairs when a classmate tells me that I had forgotten my umbrella and hands it to me. We talk a bit. My first actual human interaction of the day. It’s quite sad really. 
                    <br/><br/>
                    In the exchange, we chat about the classes we are taking and post-graduation plans. The conversation takes my mind off the depression. Yet, some of that depression spills over into the conversation, and I start semi-trama dumping.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    “I miss California and, above all, my friends. I wish I had listened to my high school classmate, but it felt too late to turn back. 
                    Now, trapped in weed-out hell, I believe no one will understand my suffering” I say, which surprises even me. Why did I even tell him that? What good would it do? My problems, my fault, right? This situation is so dumb. With that, I pause to see what my classmate would say.
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/goingMad.png" className={styles.storyImg} layout="fill" alt="John spots his two roommates leave the hub" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/connecting.png" className={styles.storyImg} layout="fill" alt="John walks back to his dorm hall in thought" />
                </div>
                <p className={styles.words}>
                    “Maybe you could try forming a study group.” The classmate follows up with how I had no one to lean on and was struggling with course content. “Huh, I haven’t done that yet,” I say. Back when I had my friend group, we had the habit of studying together. 
                    <br/><br/>
                    Now, they aren’t around anymore, so I study by myself and never bothered to ask anyone else because I don’t know them. I thank him for understanding and for the advice. After talking a bit more, we exchange Discord handles and split off at Red Square.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    I walk back to my apartment, unsure of what to think anymore. I got lucky today. I met someone who listened to my problems and tried to help. But now, someone else knows about my problems. Will he be let down if I fail? Will he laugh at me when that happens? 
                </p>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/walking.png" className={styles.storyImg} layout="fill" alt="John gets home but does not know how to talk to his roommates" />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/anxietyImages/home.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus" />
                </div>
                <p className={styles.words}>
                    Back at my place, I spent a couple of hours trying to understand the lecture content. Although I started to figure things out, the concepts are still hazy. It’s overwhelming, and I decide to leave it for tomorrow. Maybe I will ask my seatmate to form a study group.
                    <br/><br/>
                    I’m far from home, and I have drifted away from my friend group. After today I know there are good people I can be friends with. Maybe if we help each other out, we will all be successful. No matter what, having a plan made me feel better, and I could finally put the anxiety at bay.
                </p>
            </div>

            {/* Final section of story deal with this last */}
            <div className={`${styles.section} ${styles.normSection} text-center`}>
                <div className={styles.block}></div>
                <div>
                    <h1 className={styles.endText}>A chapter may end, but the story continues...</h1>
                    <div className={styles.buttonContainer}>
                        <div className={styles.endStoryBtn} aria-label="like" role="button" tabindex="0" onClick={() => addLike()}>
                            <h6>Like {like} <Icon icon="mdi:cards-heart-outline" width="25" height="25" /></h6>
                        </div>
                        <div className={styles.endStoryBtn}>
                            <h6><Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_IHh0iCPXc0ZmqulyAWzyGA5WeospP4UJjAjOO0N6PfCUUw/viewform?usp=sf_link"><a target="_blank">Thoughts? <Icon icon="gg:external" width="27" height="27" /></a></Link></h6>
                        </div>
                    </div>
                    <div className={styles.partnership}>
                        <h5>Interested in telling your story?</h5>
                        <h6>Submit it to our friends <Link href="https://www.instagram.com/officialhumansofuw/"><a className={styles.partnerLink} target="_blank">@officialhumansofuw</a></Link>!</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Anxiety