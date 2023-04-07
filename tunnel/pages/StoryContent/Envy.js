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
                    <Image src="/anxietyImages/cover.png" className={styles.storyImg} layout="fill" alt="A girl named mia walking with a cup of coffee in her hand while chaos rages in her head" />
                </div>
                <div className={styles.words}>
                    <h1 className={styles.storyTitle}>Anxiety</h1>
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
                    This story was written by Eddy, illustrated by Anna, edited by Sylvia and Augene, and peer-reviewed by 15 UW Students.
                    <br />
                    <br />
                    Also, special thanks to members of the <Link href="https://www.instagram.com/writersinprogressuw/"><a className={styles.partnerLink} target="_blank">Writers In Progress</a></Link> club for providing additional feedback!
                </p>
            </div>
        </div>
    )
}

export default Envy