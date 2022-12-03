import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react';
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { GlobalContext } from '../../comps/Global/useGlobalContext'

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

    // Was trying to do a horizontal progress bar (below video) but i dunno why code no work:/
    // https://www.youtube.com/watch?v=POZloZyJEgk&ab_channel=ChrisCooper
    // const onScroll = () => {
    //     let pixelsFromTop = window.scrollY;
    //     let documentHeight = document.body.clientHeight;
    //     let windowHeight = window.innerHeight;
    //     let difference = documentHeight - windowHeight;
    //     let percentage = (100 * pixelsFromTop) / difference;
    //     // document.getElementById("bar").style.width = `${percentage}%`;
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // });

    return (
        <div>
            <div className={`${styles.arrow} ${styles.bounce}`}>
                <h1 className="theArrow">▿</h1>
            </div>
            <div>
                <button className={`${styles.return}`} onClick={() => {
                    setRoute('/')
                    sessionStorage.setItem("route", "/");
                    setNav(false)
                    console.log('trigger, to route: ', route)
                }}>return to home </button>
            </div>
            <div className={styles.container}>
                <div className={styles.section}>

                    <div className={styles.section}>
                        <Image src="/lonelinessImages/cover.png" className={styles.storyImg} height={400} width={600} />
                        <p className={styles.words}>
                            <span className={styles.storyTitle}>Loneliness</span>
                            <br />
                            <br />
                            <span className={styles.storySynopsis}>Synopsis:</span>
                            <br />
                            Believing the commute is robbing his time to build relationships with people, John Ethel decides to live on-campus, however, it wasn't what he had expected.
                            <br />
                            <br />
                            <br />
                            <br />
                            Scroll down to read the full story...
                        </p>
                    </div>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/lightRail.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John Ethel found himself staring out at the surroundings from the light rail during his usual commute to the University of Washington. He felt isolated. What infuriated him was that it wasn't his choice. <br /><br />In the distant past, John made efforts to initiate conversations. Yet, despite his commitment, he came off as disingenuine, which turned people away. So, he gave up and forced himself to live a quiet life.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/uwStation.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John hopped off the light rail feeling drained of enthusiasm and emotionlessly made his way to his first class while loathing the lecture-packed day ahead of him. John strolled into the lecture room and sat in his usual spot at the back to observe his classmates engage in seemingly amusing conversations. <br /><br />Due to his observations, every day, John waited for someone to converse with him one day so he could finally have the same company. However, the combination of people talking around him and fantasizing about his social interactions made him feel cold and unwanted.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/lectureRoom.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        Unable to pay attention in class, John wondered whether commuting robbed him of opportunities to connect with people at certain events, which excluded him from conversations. <br /><br />The people who were often laughing and having a good time seemed to talk about the latest happenings on and off campus. They discussed their club activities or how they would eat out with their friends daily. John yearned for that lifestyle daily until he couldn’t bear it any longer.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        That was a year ago. Now, things in John’s life may be looking up. After applying for on-campus housing the prior year, John can move in and finally have company.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/dormStart.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        Or so he thought. His two roommates knew each other, which meant he was already the outcast of the group. The two preferred hanging out with their friends. They never bothered to invite John. Evening after evening, John's roommates have an outing with their friends, leaving John to fend for himself. <br /><br />Understandably, John was frustrated. After waiting a year in anticipation, he was already off to a bad start. His new home felt like his lecture room. He blamed his roommates, thought they were scum and debated going to the resident advisor to complain. Maybe she could do something.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/floor.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        In the end, he never complained. He was hopeful the situation would change. Weeks flew by, and John found himself at the end of another uneventful wet, cloudy Seattle day. He was about to get up from his seat and leave the room like everyone else. <br /><br />However, upon standing up, his eyes drifted onto an umbrella on the concrete floor. He knew the umbrella belonged to a student sitting in front of him, and they were walking out the door without it.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/staircase.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John contemplated what to do. Part of him felt terrible because it was supposed to rain later in the day. He grabbed the umbrella and went to catch up with the classmate already going down the stairs. When he did, John uttered hello and asked if they had forgotten an umbrella.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/walking.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        The classmate, a bit surprised, responded with a confirmation, and John handed it over but not before an appreciation from the classmate. As John was about to leave, the classmate asked him why he sat in the back. To John, the answer was obvious. However, he couldn't admit that he liked observing people from a distance because that would be weird. <br /><br />So, John said he could drift off to sleep without getting noticed. The classmate thought it was understandable, and John felt he could connect with this classmate. Thus, the two continued their conversation as they headed out of the building and into the gray day.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/redSquare.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John joked about why anyone would need an umbrella when living in Seattle. The classmate laughed off and clarified that they were new to the area. The two went on to talk about the classes they were taking and what their goals were after graduation. <br /><br />As the conversation winded down, the classmate asked to exchange discord handles, which John quickly agreed to. After a bit more walking and chatting, the two friends parted ways, and John decided to grab some food at the Hub before heading back to his room.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/hub.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John stood in line to make his order while pondering the events that had transpired. John reminisced about the times he tried to initiate conversations and failed. Out of all the days he has lived through, today, John felt accepted by society. After some time waiting, John made his order and got his food.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/hubExit.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        Just as he was about to leave the Hub, he spotted his roommates exit ahead of him. After being reminded of the situation between him and his roommates, John contemplated talking to them this evening. John had a bit of confidence. He felt invigorated due to the casual conversation between him and his new friend.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/johnThink.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        However, the thought didn’t make sense to John. After all, the most he had ever interacted with his roommates was the usual greetings followed by the two talking between each other and John watching from the side. He felt that if he jumped in, it would disrupt their conversation. <br /><br />Even if he used the dead space, it would seem awkward because John had never done that before, and if he suddenly said something, his roommates would think something was off, and they would start to judge. John didn’t want that.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/dormRoom.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        Eventually, John arrived at his dorm room door. He could hear his roommates talking through a closed door. When he peeked through the entrance, he found his roommates on their laptops, gossiping about how their TA put the section to sleep in the first five minutes. Probably not a good time to interrupt them, John thought. <br /><br />He felt sad but relieved he wouldn’t need to face the dilemma of talking to his roommates today. However, John had good momentum. If he ignores this opportunity, he might fall back into his old cycle again. It was a risk he was not willing to take.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/mccarty.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John entered the room. However, when he attempted to say something, he couldn’t say anything other than a greeting, which his roommates acknowledged briefly but continued their conversation. John stared awkwardly at the two of them for several seconds wanting to say something but never did. <br /><br />That night, John found the day bitter-sweet. Although he couldn’t get a conversation going with his roommates, he got to know one person, which was a big step forward. Who knows? Maybe tomorrow would be the day.
                    </p>
                </div>
                <div className={styles.section}>
                    <div className="text-center">
                        <Image src="/lonelinessImages/goals.svg" className={styles.storyImg} height={400} width={600} />
                        <h1 className={styles.endText}>A story may end, but another will begin...</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StoryContent