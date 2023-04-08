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
import StoryReaction from "../../comps/StoryReaction/StoryReaction";
export const Envy = () => {
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
    const toAddLike = (attribute, setState, state, iconId) => {
        const ids = ['likeIcon', 'loveIcon', 'relateIcon', 'insightIcon']
        let selectedId
        let selectedAttribute
        let resetState
        let resetSetState
        for (const id of ids) {
            const icon = document.getElementById(id)
            console.log(icon.classList)
            if (Array.from(icon.classList).includes(styles.liked)) {
                selectedId = id
                switch (iconId) {
                    case 'likeIcon':
                        selectedAttribute = 'like'
                        resetState = like
                        resetSetState = setLike
                        break;
                    case 'loveIcon':
                        selectedAttribute = 'love'
                        resetState = love
                        resetSetState = setLove
                        break;
                    case 'relateIcon':
                        selectedAttribute = 'relatable'
                        resetState = relate
                        resetSetState = setRelate
                        break;
                    case 'insightIcon':
                        selectedAttribute = 'insightful'
                        resetState = insight
                        resetSetState = setInsight
                        break;
                }
            }
        }

        if (selectedId) {
            const resetIcon = document.getElementById(selectedId)
            addLike(document, db, storyName, resetSetState, resetState, selectedAttribute, resetIcon)
        }

        const icon = document.getElementById(iconId)
        addLike(document, db, storyName, setState, state, attribute, icon)
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.container}>
            <SuccessModal className="mt-5"
                styles={styles}
                message={'Thank you! Your feedback has been sent!'}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
            <div className={styles.section}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/cover.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <div className={styles.words}>
                    <h1 className={styles.storyTitle}>Envy</h1>
                    <StoryReaction
                        view={view}
                        like={like}
                        love={love}
                        relate={relate}
                        insight={insight}
                    />

                    <br />
                    <br />
                    <h2 className={styles.storySynopsis}>Preview:</h2>
                    <br />
                    <p>Rao compared himself to others so frequently that it drove him to ruin. Yet, it was difficult to break the habit because successful people surrounded him.</p>
                </div>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/leanBack.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I remember writing in my personal statement that I aspired to be someone great. 
                    A person who would contribute to curing some of the world’s most incurable diseases, saving lives, and being humble about it. 
                    <i>What have I become now? Where had that motivation gone?</i> While waiting for the seconds until 6:00 AM, I ponder restlessly.
                    <br/><br/> 
                    It’s registration day for the Spring quarter, and I am ready to spam the registration button with my two groggy roommates. 
                    “Bruh, the site is frozen!” Jami exclaims impatiently. My other roommate, John, lets out a heavy sigh and slumps back into his chair, defeated. 
                    By some stroke of luck, I manage to get through. <i>I wish this luck had applied to other aspects of my life instead.</i>
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/deskThink.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    Presently, I find myself in a disheartening situation. Though I’m a Sophomore, I must declare a major soon or risk hitting the credit limit and getting locked from future registrations. 
                    Sadly, I haven’t settled on anything, and it troubles me. I ultimately lost interest in Bioengineering after getting destroyed in gen chem. 
                    <br/><br/>
                    I took a shot at a Computer Science class last quarter, and my performance was dismal even though I studied a lot by myself and with others. 
                    After those failed exploits, it became challenging to be interested in anything. I became a one-day-only member of several clubs and explorer of many fields of study. 
                    However, I only gained hits to my GPA and mental state.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/jamiSleep.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I register for more seemingly intriguing classes, yet it’s a gamble. 
                    It was clear that I’d been lying to myself that I would find something that would click. 
                    “Well, I’m going back to bed,” Jami announces. I’ve known Jami for over a year. 
                    He's a bright individual who secured direct admission into Computer Science and is currently attempting to obtain an internship. 
                    <i>How does he do it? And how can I be like him?</i>
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/johnGood.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    “John, what are you doing?” I ask. “I’m looking for an alternative class and then sleeping until ten,” John replies. 
                    “Oh, ok,” I respond, having not much else to say. John is doing well. He has goals of getting his masters and is a forward-thinker. 
                    <i>I wish that were me.</i>
                    <br/><br/>
                    The future is impossible to plan when I’m already busy with coursework. I often feel like the odd one out in this group. 
                    Now that I think about it, all my friends seem absorbed in their fields of study and are finding success. <i>What even is success to me?</i>
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/whatToTake.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I realize I’m procrastinating on finishing my homework because instead of opening Google Docs and Canvas, I spend an hour browsing LinkedIn out of habit. 
                    I despise the platform, but I couldn’t resist the algorithm as it bombarded me with an endless stream of job and internship announcements so it would tell me how big of a failure I was. 
                    <br/><br/>
                    I have nothing against those individuals, yet, they remind me of my shortcomings. <i>Where is my life update? What do I want to intern for? I don’t know!</i> I have no one to blame but myself for looking in the first place.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/goingOut.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    In an attempt to clear my head, I decided to take a walk around campus. My roommates were asleep, so I gathered my things and ventured outside. 
                    I’d say it’s a beautiful day, with fresh air and a slight breeze. But it didn’t matter to me. 
                    <br/><br/>
                    I worm my way to the quad with a blank expression. 
                    Sometimes, my mind opens, giving me the empowerment that I would be able to find a passion soon and endless opportunities would present themselves. 
                    Other times, I feel utterly defeated.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/staringTrees.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    I sit on the bench near the flowerless and bare cherry trees. As I stared at them, I realized I had more in common with those cherry trees than any of the people on LinkedIn or my successful roommates.  
                    <i>Once, the trees were blooming, so pink and pretty. Now, they are but a shell of their former selves. Just like my life up to this point, the pinnacle of its life has passed.</i> 
                    <br/><br/>
                    I laugh at myself, proud of making such a dumb comparison. As I come to this realization, I understand that the trees will soon burst forth with new flowers, captivating crowds once more. 
                    Meanwhile, I will remain unable to impress anyone.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/parentsCall.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    As my self-deprecation dissipates, I lean back on the bench so my watery eyes wouldn’t turn the clear day into a rainy one. 
                    My parents were proud when they took my picture under the cherry trees. My parents knew about my plans for success and were eager to brag about them to their friends. 
                    It’s a far cry from what I’m telling them these days. Our video chats always end with me saying: “I’ll figure something out soon.” I never did. 
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/usingPhone.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    Perhaps to motivate me, they kept bringing up their friend’s daughter and how she majors in Business and does great things for her community. 
                    It doesn’t make me feel good. I hate the sinking feeling deep in my chest. Eventually, I started to resent talking to them because I didn’t want the reminder. 
                    <i>How in the world did things go so wrong?</i>
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/sunUp.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    Having seen enough of the scenery, I head back to McCarty Hall. By now, more people are roaming about. 
                    All are pursuing their goals and dreams. <i>What’s so appealing about others? How can I be myself?</i> My thoughts trailed off. 
                    <br/><br/>
                    I catch the sun ascending above the campus with my eyes. <i>What even am I here for?</i> I wonder. Now, I’m back in my room with more questions than answers. 
                    John has already left for class, whereas Jami is still asleep. I view my schedule again, brain empty. “It will be another wasteful quarter,” I muttered. 
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/hereForU.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    “Hey, what happened? What are you taking?” a voice behind me asks. Jami peeks over my shoulder. “I didn’t realize you were awake—just these classes. 
                    I can’t think of much else,” I say with annoyance. 
                    <br/><br/>
                    “Aww, that's not good. I’m sure it would work out sooner or later,” Jami comforts. “I hope so,” I reply, wanting to give up. 
                    “Life surprises you,” Jami continues. “Maybe,” I respond disbelievingly, yet it makes me feel better since it came from him. “I’m here if you need to talk,” Jami assures.
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/weCanTalk.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words}`}>
                    “Yeah?” I reply, turning away from Jami and staring back at the schedule. I’m unsure what to feel or do. 
                    Looking back at what transpired this morning, it was clear that living in my mind tore me down. I realize I need to get some things off my chest. Maybe then, I’ll feel better. 
                    “Can I talk to you about something? We can get coffee on the way,” I turn to ask Jami. He readily agrees. 
                </p>
            </div>

            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/envyImages/greaterThings.png" className={styles.storyImg} layout="fill" alt="text coming soon" />
                </div>
                <p className={`${styles.words} ${styles.offset}`}>
                    "Oh, a surprisingly nice day," Jami notes. Preoccupied with my current situation, I jump to the point. "Hey, Jami, what got you interested in CS?" I solicit.  
                    "It's a pretty long story. Where do I even start?" Jami thinks. "From the beginning?" I suggest. Jami playfully responds, "Well, it all started when I was born." I can't help but chuckle at Jami's witty remark. 
                    <br/><br/>
                    As I listen to him and discuss each other's uncertainties, I realize that we aren’t so different after all, making me feel a sense of warmth, compelling me to look toward the sun. 
                    <i>Perhaps, it is a beautiful day - a day I should relish by taking pleasure in life's small joys. After all, the future remains unpredictable.</i>
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
                    </div>
                </div>
            </div>

            {/* THE BELOW IS THE CODE FOR THE CREDIT PANEL */}
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={styles.words}>
                    This story was written by Eddy, illustrated by Anna, and peer-reviewed by 24 UW Students.
                    <br />
                    <br />
                    Also, special thanks to members of the <Link href="https://www.instagram.com/writersinprogressuw/"><a className={styles.partnerLink} target="_blank">Writers In Progress</a></Link> club for providing additional feedback!
                </p>
            </div>
        </div>
    )
}

export default Envy