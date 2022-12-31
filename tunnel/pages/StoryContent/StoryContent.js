import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react';
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { GlobalContext } from '../../comps/Global/useGlobalContext'
import Link from 'next/link'
import { Icon } from '@iconify/react';

const StoryContent = () => {
    const {
        intro,
        setIntro,
        audio,
        route,
        setRoute,
        setNav
    } =
        useContext(GlobalContext);
    const router = useRouter()
    const { id } = router.query
    const story = stories.find(story => story.id == id)

    return (
        <div>
            {/* once we roll out button component, we can revisit this */}
            {/* <div>
                <button className={`${styles.return}`} onClick={() => {
                    setRoute('/')
                    sessionStorage.setItem("route", "/");
                    setNav(false)
                    console.log('trigger, to route: ', route)
                }}><span className={`${styles.returnText}`}>Back</span></button>
            </div> */}

            <section className={`${styles.arrow} ${styles.bounce} text-center`}>
                <h6>Scroll/Arrow Key Down</h6>
                <h1 className={styles.theArrow}>▿</h1>
            </section>
            
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/cover.png" className={styles.storyImg} layout="fill" alt="a dude named John walking past a bench looking downwards"/>
                    </div>
                    <p className={styles.words}>
                        <span className={styles.storyTitle}>Loneliness</span>
                        <br />
                        <br />
                        <span className={styles.storySynopsis}>Synopsis:</span>
                        <br />
                        Believing the commute is robbing his time to build relationships with people, John decides to live on-campus, however, it wasn't what he had expected...
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/lightRail.png" className={styles.storyImg} layout="fill" alt="John sitting on the lightrail train and looking out the window"/>
                    </div>
                    <p className={styles.words}>
                        John found himself staring out at the surroundings from the light rail during his usual commute to the University of Washington. He felt isolated. What infuriated him was that it wasn't his choice. <br/><br/>In the distant past, John made efforts to initiate conversations. Yet, despite his commitment, he came off as disingenuine, which turned people away. So, he gave up and forced himself to live a quiet life. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/uwStation.png" className={styles.storyImg} layout="fill" alt="John leaving the lightrail car and walking on the platform towards the exit"/>
                    </div>
                    <p className={styles.words}>
                        John hopped off the light rail feeling drained of enthusiasm and emotionlessly made his way to his first class while loathing the lecture-packed day ahead of him. John strolled into the lecture room and sat in his usual spot at the back to observe his classmates engage in seemingly amusing conversations. <br/><br/>Due to his observations, every day, John waited for someone to converse with him one day so he could finally have the same company. However, the combination of people talking around him and fantasizing about his social interactions made him feel cold and unwanted.  
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/lectureRoom.png" className={styles.storyImg} layout="fill" alt="John alone in his lecture room"/>
                    </div>    
                    <p className={styles.words}>
                        Unable to pay attention in class, John wondered whether commuting robbed him of opportunities to connect with people at certain events, which excluded him from conversations. <br/><br/>The people who were often laughing and having a good time talked about the latest happenings on and off campus. They discussed their club activities or how they would eat out with their friends daily. John yearned for that lifestyle daily until he couldn’t bear it any longer. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus"/>
                    </div>
                    <p className={styles.words}>
                        Thankfully, that was a year ago. Now, things in John’s life may be looking up. After applying for on-campus housing the prior year, John can move in and finally have company. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/dormStart.png" className={styles.storyImg} layout="fill" alt="John's new roommates talk while John is left in the background"/>
                    </div>
                    <p className={styles.words}>
                        Or so he thought. His two roommates knew each other, which meant he was already the outcast of the group. The two preferred hanging out with their friends. They never bothered to invite John. Evening after evening, John's roommates have an outing with their friends, leaving John to fend for himself. <br/><br/>Understandably, John was frustrated. After waiting a year in anticipation, he was already off to a bad start. His new home felt like his lecture room from last year. He blamed his roommates, thought they were scum and debated going to the resident advisor to complain. Maybe she could do something. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/floor.png" className={styles.storyImg} layout="fill" alt="John discovers an umbrella on his lecture room floor"/>
                    </div>
                    <p className={styles.words}>
                        In the end, he never complained. He was hopeful his life would change drastically just by living on campus, but it did not. Like last year, John still sat in the back of all his lectures. He felt invisible. No professor would ever call on him (whether positive or negative, he didn’t know either), and none of his classes during this quarter was group work, so he had a low chance of interacting with his classmates. <br/><br/>Four weeks fly by, and John found himself at the end of another uneventful wet, cloudy Seattle day. He was about to get up from his seat and leave the Savery Hall classroom like everyone else. However, upon standing up, his eyes drifted onto an umbrella on the concrete floor. He knew the umbrella belonged to a student sitting in front of him, and they were walking out the door without it.
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/staircase.png" className={styles.storyImg} layout="fill" alt="John catches up with his classmate at the stairwell to give back the umbrella"/>
                    </div>
                    <p className={styles.words}>
                        John contemplated what to do. Part of him felt terrible because it was supposed to rain later in the day. He grabbed the umbrella and went to catch up with the classmate already going down the stairs. When he did, John uttered hello and asked if they had forgotten an umbrella.
                        The classmate, a bit surprised, responded with confirmation and appreciation, and John handed it over. <br/><br/>As John was about to leave, she asked him why he sat in the back when everyone preferred to sit near the front. To John, the answer was obvious. However, he couldn't admit that he liked observing people from a distance because that would be weird. So, John said he could drift off to sleep without getting noticed. The classmate thought it was understandable, and John felt he could connect with this classmate. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/walking.png" className={styles.storyImg} layout="fill" alt="John and his classmate walk out of the building while talking"/>
                    </div>
                    <p className={styles.words}>
                        Thus, the two continued their conversation as they headed out of the building and into the gray day. 
                        As they exited Savery Hall, John joked about why anyone would need an umbrella when living in Seattle. The classmate laughed off and clarified that she was new to the area. The two went on to talk about the classes they were taking and what their goals were after graduation. 
                        <br/><br/>The classmate told John about herself and how her first quarter was going and asked if he could give any words of wisdom. John didn’t feel like he was in a position to provide any sort of advice. He thought of pointing them toward an academic counselor. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/redSquare.png" className={styles.storyImg} layout="fill" alt="John and his new friend part ways at red square"/>
                    </div>
                    <p className={styles.words}>
                        Yet, because he felt indebted to his classmate in that they were the ones who reached out to him first, John dug deep into his mind to find some sort of logical answer that would make him seem intelligent.
                        The two stopped at the entrance of Red Square, where John gave his suggestion. <br/><br/>The classmate seemed to like his “advice,” so John was thrilled with himself, though part of him was still a bit confused as to why anyone would ask him for advice. As the conversation winded down, the classmate asked to exchange discord handles, which John quickly agreed to. After chatting more, the two friends parted ways. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/hub.png" className={styles.storyImg} layout="fill" alt="John waits in line at the hub to get food"/>
                    </div>
                    <p className={styles.words}>
                        John decided to get some food at the Hub before returning to his dorm room. He stood in line to make his order while pondering the events that had transpired. John reminisced about the times he tried to initiate conversations and failed. Today, John felt accepted by society. He also felt good and warm that he was able to help out his new friend in some way. After some time waiting, John made his order and got his food. 
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/hubExit.png" className={styles.storyImg} layout="fill" alt="John spots his two roommates leave the hub"/>
                    </div>
                    <p className={styles.words}>
                        By chance, just as he was about to leave the Hub after finishing his meal, he spotted his roommates exit ahead of him. The sight of them broke his illusion that he was in a good place in his life and reminded him of the situation between him and his roommates. John contemplated talking to them this evening. But, because John made a new friend today, he had a bit of confidence. He felt invigorated.
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/johnThink.png" className={styles.storyImg} layout="fill" alt ="John walks back to his dorm hall in thought"/>
                    </div>
                    <p className={styles.words}>
                        However, the thought of talking to his roommates now didn’t make sense to John. After all, the most he had ever interacted with them was the usual greetings followed by the two talking between each other while John watched from the sidelines. He felt that if he jumped in, it would disrupt their conversation. <br/><br/>Even if he used the dead space, it would seem awkward because John had never done that before, and if he suddenly said something, his roommates would think something was off, and they would start to judge. John didn’t want that.
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/dormRoom.png" className={styles.storyImg} layout="fill" alt="John gets home but does not know how to talk to his roommates"/>
                    </div>
                    <p className={styles.words}>
                        Inevitably, John arrived at his dorm room door. He could hear his roommates talking through a closed door. When he peeked through the entrance, he found his roommates on their laptops, gossiping about how their TA put the section to sleep in the first five minutes. Not a good time to interrupt them, John thought. <br/><br/>He felt sad but relieved he wouldn’t need to face the dilemma of talking to his roommates today. However, John had good momentum. If he ignores this opportunity, he might fall back into his old cycle again. It was a risk he was not willing to take.
                    </p>
                </div>
                <div className={`${styles.section} ${styles.normSection}`}>
                    <div className={styles.block}></div>
                    <div className={styles.imgFrame}>
                        <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} layout="fill" alt="mccarty hall, a dorm building on the UW's campus"/>
                    </div>
                    <p className={styles.words}>
                    John entered the room. However, when he attempted to say something, he couldn’t say anything other than a greeting, which his roommates acknowledged briefly but continued their conversation. John stared awkwardly at the two of them for several seconds wanting to say something but never did. <br/><br/>That night, John found the day bitter-sweet. Although he couldn’t get a conversation going with his roommates, he got to know one person, which was a big step forward. Who knows? Maybe tomorrow would be the day.
                    </p>
                </div>

                {/* Final section of story deal with this last */}
                <div className={`${styles.section} ${styles.normSection} text-center`}>
                    <div className={styles.block}></div>
                    <div className={styles.block}></div>
                    <div className={`${styles.endHalf}`}>
                        <h1 className={styles.endText}>A chapter may end, but the story continues...</h1>
                        <div className={styles.buttonContainer}>
                            <div className={styles.endStoryBtn}>
                                <h6><Link href="https://docs.google.com/forms/d/1DrB0tHjeUPldV7PZQyn4FFgA_QMIl7GePdfUEoLUAo4/viewform?edit_requested=true"><a target="_blank">Thoughts On This Story? <Icon icon="gg:external" width="27" height="27" /></a></Link></h6>
                            </div>
                            <div className={styles.endStoryBtn}>
                                <h6><Link href="/"><a>Next Story <Icon icon="material-symbols:arrow-forward" width="27" height="27" /></a></Link></h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default StoryContent