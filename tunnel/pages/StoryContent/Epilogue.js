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
export const Epilogue = (props) => {

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
        const icon = document.getElementById(iconId).parentNode;
        addLike(document, db, storyName, setState, state, attribute, icon)
    }

    const [isOpen, setIsOpen] = useState(false)
    console.log('ref',  props.ref)
    return (
        <div className={`${styles.container}  storyDiv`} ref={props.ref}>
            <div className={`${styles.section}`}> 
                <div className={styles.block}></div>
                <div className={`${styles.words} ${styles.fadeIn} text-center`}>
                    <h1 className={styles.storyTitle}>Epilogue</h1>
                    <br />
                    <br />
                    <p>
                        Three years later...
                    </p>
                    <br />
                    <br />
                </div>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={`${styles.words} ${styles.offset}`}>
                    Somewhere in the Husky Stadium...
                    <br /><br />
                    John proudly holds his diploma. Graduating from university marks the end of an era. At the UW, he met his two best friends (his once-distant roommates) and formed a tight-knit friend group. The awkward greetings in the dorm room have transformed into shared laughter. 
                    <br /><br />
                    The quiet observer who once struggled to initiate conversations now finds comfort and confidence in speaking first, seizing opportunities, and taking the initiative. As he embraces the next chapter of his life, John carries the warmth of friendship, the lessons of perseverance, and the joy of newfound connections.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={`${styles.words}`}>
                    Somewhere in U-district...
                    <br /><br />
                    Mia, now an incoming Senior majoring in Computer Science, reflects on schoolwork from years ago in her apartment. She can’t help but think back to the worries that once consumed her. Though it was pretty bad back then, those struggles shaped her into a resilient individual today. 
                    <br /><br /> 
                    She learned to reach out for help and embrace the camaraderie that comes with shared challenges. Despite being far from home, she has formed close bonds with a supportive group of friends and enjoys studying together. As her time at the university is nearing its end, she is sad that these study groups will not last much longer. 
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={`${styles.words}`}>
                    Somewhere outside the Husky Stadium...
                    <br /><br />
                    Rao takes graduation pictures with his friends and family. He finds solace in going at his own pace as he navigates the post-grad landscape. He has learned valuable lessons from those a bit further ahead on their paths, like his two roommates. Listening to their stories, Rao gains insight into their journey. 
                    <br /><br />
                    The only person he should be competing with is himself. Rao acknowledges that as long as there is progress, he will get where he needs to go. Embracing this newfound wisdom, Rao takes life one step at a time, cherishing each moment and safeguarding life’s joy from being lost.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={`${styles.words} ${styles.offset}`}>
                    Somewhere in an office building...
                    <br /><br />
                    Sarah has transitioned from the whirlwind of university life to the eventful rhythm of a full-time job as a product management professional. Her mind often wanders back to those annoying university days. The memories of carrying her team on projects and the internal debates about her priorities shaped her approach to work today. 
                    <br /><br />
                    Amidst these reflections, the most transformative lesson was prioritizing self-care. Sarah learned to put her well-being first, unafraid to say no when necessary. This newfound assertiveness enhanced her professional performance and ensured a healthier work-life balance.
                </p>
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <p className={`${styles.words} ${styles.offset}`}>
                    Readers Note:
                    <br /><br />
                    On behalf of the Tunnel_vzn team, we thank you for sticking with us as we explored several challenges confronting students. Some may have noticed that we have only covered four when there are way more obstacles that students tackle daily. We had to prioritize which topics to cover first and thread in some elements from other challenges we have researched if convenient. Ultimately, we hope you’ve taken something away from these stories and carry with you the sense that you are never alone in your endeavors.
                    <br /><br />
                    Lastly, since our project discusses mental health topics, it would be a shame not to mention the campus resources available to students. 
                    We are linking <Link href="http://livewell.uw.edu/"><a className={styles.partnerLink} target="_blank">Livewell</a></Link> and the <Link href="https://www.washington.edu/counseling/"><a className={styles.partnerLink} target="_blank">Counseling Center</a></Link> as great resources, depending on the type of care you need!
                </p>
            </div>
            <div className={`${styles.section}`}>
                <div className={styles.block}></div>
                <br /><br />
                <p className={`${styles.words} text-center`}>
                    Tunnel_vzn team signing-off.
                </p>
                <br /><br />
            </div>
            <div className={`${styles.section} ${styles.normSection}`}>
                <div className={styles.block}></div>
                <div className={styles.imgFrame}>
                    <Image src="/epilogueImages/cover.png" className={styles.storyImg} layout="fill" alt="" />
                </div>
                <div className={styles.block}></div>
                <div className={styles.block}></div>
            </div>
        </div>
    )
}

export default Epilogue