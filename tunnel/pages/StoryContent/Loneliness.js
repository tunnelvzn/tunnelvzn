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
import {StoryForm, SuccessModal } from "../../comps/Story_Util";
import StoryReaction from "../../comps/StoryReaction/StoryReaction";
export const Loneliness = () => {

    const [like, setLike] = useState(0)
    const [love, setLove] = useState(0)
    const [relate, setRelate] = useState(0)
    const [insight, setInsight] = useState(0)
    const [view, setView] = useState(0)
    const {
        db,
        storyName,
        setRoute,
        setStoryName,
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

    const toAddLike = (attribute, setState, state, iconId) => {
        const icon = document.getElementById(iconId)
        addLike(document, db, storyName, setState, state, attribute, icon)
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.container}>
            <SuccessModal className="mt-5"
                styles={styles}
                message={'Your feedback has been received!'}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
            <div className={styles.section}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/cover.png" className={styles.storyImg} layout="fill" alt="a dude named John walking past a bench looking downwards" />
                </div>
                <div className={styles.words}>
                    <h1 className={styles.storyTitle}>Loneliness</h1>
                    <p className={styles.storyFacts}>10.17.2022 · 10 min read</p>
                    <StoryReaction
                        view={view}
                        like={like}
                        love={love}
                        relate={relate}
                        insight={insight}
                    />

                    <br />
                    <br />
                    <p>John chose to reside on campus because his commute prevented him from developing meaningful connections with others. However, he was in for a surprise.</p>
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/lightRail.png" className={styles.storyImg} layout="fill" alt="John sitting on the lightrail train and looking out the window" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    During my usual commute to the University of Washington on the light rail, I couldn't help but stare out at the surroundings wishing my life was more vibrant. I realized that I wanted some company, but felt frustrated that I didn't have any.
                    <br /><br />
                    In the past, I made great efforts to initiate conversations with others, but despite my commitment, I must have come across as insincere, which turned people away. So, I decided to accept it and enjoy my quiet time alone.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/uwStation.png" className={styles.storyImg} layout="fill" alt="John leaving the lightrail car and walking on the platform towards the exit" />
                </div>
                <p className={styles.words}>
                    I stepped off the light rail feeling a bit drained and made my way to my first class with a bit of reluctance. As I sat in my usual spot at the back of the lecture room, I couldn't help but notice my classmates engaging in lively conversations around me.
                    <br /><br />
                    I found myself wishing that someone would talk to me and make me feel more alive. Although I daydreamed about all the social interactions I wanted to have, it left me feeling disconnected.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/lectureRoom.png" className={styles.storyImg} layout="fill" alt="John alone in his lecture room" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    As I sat in class, I found myself struggling to pay attention. I wondered if my daily commute had robbed me of opportunities to connect with others. I noticed my classmates laughing and having a good time as they chatted about all the latest events on and off campus, their club activities, and plans to hang out with friends. It made me realize how much I longed to have that same experience in my own life. It was a feeling that I couldn't shake off.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus" />
                </div>
                <p className={styles.words}>
                    It's been a year since I had those thoughts, and now I'm in my Sophomore year and things are looking up. I'm excited to move into my on-campus dorm and finally have roommates to keep me company. It's a change I've been looking forward to for a while now.
                    <br /><br />
                    I thought things were finally looking up when I moved in, but it turned out to be a bit more complicated than I had hoped.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/dormStart.png" className={styles.storyImg} layout="fill" alt="John's new roommates talk while John is left in the background" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    My roommates already knew each other and it quickly became clear that I was the outsider. Night after night, they would go out with their friends, leaving me feeling left out. I couldn't help but feel frustrated.
                    <br /><br />
                    My new home felt just like my old lecture room, and I couldn't help but blame my roommates. I even considered complaining to the resident advisor in hopes that she could help me get out of this situation.
                    <br /><br />
                    In the end, I never complained. I was hopeful that not wasting time on the commute would drastically change my life, but it didn't. Just like last year, I found myself sitting in the back of all my lectures, feeling invisible. None of my classes had group work, which meant that I had very few opportunities to interact with my classmates.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/floor.png" className={styles.storyImg} layout="fill" alt="John discovers an umbrella on his lecture room floor" />
                </div>
                <p className={styles.words}>
                    Four weeks have flown by and here I am at the end of another uneventful, wet, and cloudy Seattle day. As I'm getting ready to leave the Savery Hall classroom, I notice an umbrella on the floor. I assume it must have belonged to a student who was sitting in front of me.
                    <br /><br />
                    I contemplate on what to do. A part of me feels terrible knowing that it might rain later and my classmate who left the umbrella behind might get caught in the rain. I decide to grab the umbrella and catch my classmate halfway down the stairs. I ask her if she had forgotten an umbrella by any chance.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/staircase.png" className={styles.storyImg} layout="fill" alt="John catches up with his classmate at the stairwell to give back the umbrella" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    The classmate, who looks a bit surprised, thanks me with appreciation as I hand them the umbrella. As I am about to leave, she asks a strange question about why I always sit in the back of the class when most people prefer sitting near the front.
                    <br /><br />
                    I don't want to admit that I like observing people from a distance, as I think it will come across as weird. So, I tell her that I sit in the back for sleeping purposes, and she nods understandingly. We continue our conversation outside the building.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/walking.png" className={styles.storyImg} layout="fill" alt="John and his classmate walk out of the building while talking" />
                </div>
                <p className={styles.words}>
                    I start to joke about the need for an umbrella when living in Seattle, and my classmate laughs it off and mentions that she is new to the area. We start talking about the classes we're taking and our post-graduation plans. My classmate tells me about herself and how her first quarter is going, and she wants to hear my thoughts about course content and stress.
                    <br /><br />
                    I don't feel like I'm in a great position to provide any advice, but I feel indebted to my classmate who reached out to me first. I try to think of something helpful to say, hoping to come across as intelligent.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/redSquare.png" className={styles.storyImg} layout="fill" alt="John and his new friend part ways at red square" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    We stop at the entrance of Red Square, and I share my thoughts with my classmate. They seem to appreciate my “advice”, so I feel pretty satisfied with myself. As our conversation comes to a close, my classmate asks if we can exchange Discord handles, which I happily agree to. We chat some more before going our separate ways.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/hub.png" className={styles.storyImg} layout="fill" alt="John waits in line at the hub to get food" />
                </div>
                <p className={styles.words}>
                    I decide to grab food at the Hub before returning to my room. As I stand in line to place my order, I can't help but reflect on the events of the day. I reminisce about the times when I struggled to initiate conversations and how badly I failed. Today, I feel accepted by society, and I'm also happy that I was able to help out my new friend in some way. It's a warm feeling that I can't help but smile about.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/hubExit.png" className={styles.storyImg} layout="fill" alt="John spots his two roommates leave the hub" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    As I'm getting ready to leave the Hub after finishing my meal, I spot my roommates walking out ahead of me. Seeing them breaks my illusion that I’m in a good position and reminds me of the ongoing tension between us. I contemplate how to approach them.
                    <br /><br />
                    The idea of talking to my roommates right now doesn't seem like the best idea. After all, the most interaction I've had with them so far has been simple greetings followed by them having conversations with each other while I watch from the sidelines.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/johnThink.png" className={styles.storyImg} layout="fill" alt="John walks back to his dorm hall in thought" />
                </div>
                <p className={styles.words}>
                    I feel like if I try to jump in, it might disrupt their conversation, and even if I try to use the silence it might be awkward because I've never done anything like that before. I'm afraid that if I suddenly say something, my roommates would think something is wrong.
                    <br /><br />
                    Inevitably, I arrive at the dorm. I can hear my roommates' voices through the closed door.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/dormRoom.png" className={styles.storyImg} layout="fill" alt="John gets home but does not know how to talk to his roommates" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    When I open the door, I see that they are both on their laptops, chatting about how their TA put the section to sleep in the first five minutes. I realize that now isn't the best time to interrupt them.
                    <br /><br />
                    I feel a mix of disappointment and relief that I don't have to face the dilemma of talking to my roommates today. But I also know that I have a good momentum going and if I don't take advantage of this opportunity, I might never get my chance again. It's a risk I am not willing to take.
                    <br /><br />
                    I enter the room, but as I try to start a conversation, the only thing that comes out is a greeting. My roommates acknowledge me briefly before going back to their conversation.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus" />
                </div>
                <p className={styles.words}>
                    I stand there awkwardly for a few seconds, wanting to say something but not a word came out. I find today to be bittersweet. Even though I wasn't able to have a conversation with my roommates, I made a new friend, which is a big step forward. Who knows? Maybe tomorrow would be the day.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    This story was written and illustrated by Eddy, edited by Sylvia, Augene, and Sami, and peer-reviewed by 23 UW Students.
                    <br />
                    <br />
                    Images of McCarty Hall from the loneliness story were from <Link href="https://hfs.uw.edu/live-on-campus/Undergraduate-Housing/McCarty-Hall"><a className={styles.partnerLink} target="_blank">hfs.uw.edu</a></Link>.
                    <br />
                    <br />
                    Also, special thanks to members of the <Link href="https://www.instagram.com/writersinprogressuw/"><a className={styles.partnerLink} target="_blank">Writers In Progress</a></Link> club for providing additional feedback!
                    <div className={styles.importantContainer}>
                        <Image src="/mostImportant.svg" layout="fill" />
                    </div>
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
                        <div className={styles.textboxContainer}>
                            <StoryForm styles={styles} onSubmit={() => { setIsOpen(true) }} />
                        </div>
                        <div className={styles.block}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loneliness