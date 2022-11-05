import { useRouter } from 'next/router'
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'


const StoryContent = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(stories, id)
    const story = stories.find(story => story.id == id)

    // Was trying to do a horizontal progress bar (below video) but i dunno why code no work:/
    // https://www.youtube.com/watch?v=POZloZyJEgk&ab_channel=ChrisCooper
    const onScroll = () => {
        let pixelsFromTop = window.scrollY;
        let documentHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;
        let difference = documentHeight - windowHeight;
        let percentage = (100 * pixelsFromTop) / difference;
        document.getElementById("bar").style.width = `${percentage}%`;
    };
    useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <div className={styles.page}>
            <NavBar/>
            <div className="progress_wrapper">
                <div className="progress_bar" id="bar"></div>
            </div>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/rail.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John Ethel once again finds himself staring out at the surroundings from the light rail during his usual commute to the University of Washington.
                        He felt isolated. <br /><br />What infuriated him even more is that it wasn't his choice. In the past, John made efforts to initiate conversations.
                        Yet, despite his commitment, he came off as disingenuine, which turned people away. So, he gave up and embraced the quiet life.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/class.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John hops off the light rail feeling drained of enthusiasm and loathing the lecture-packed day ahead of him. As John sat in his lecture room, he began observing his classmates engage in seemingly amusing conversations.<br /><br />
                        Many times, he yearns for that one day someone would converse with him so that he could finally have some company. However, the combination of seeing people talk all around him and his fantasizing of his own social interactions made him feel cold.
                    </p>
                </div>
                <div className={styles.section}>
                    <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
                    <p className={styles.words}>
                        John wonders whether commuting has robbed him of opportunities to connect with people in certain events, which led to him being left out of conversations. The people who are often laughing and having a good time seem to mainly talk about the latest happenings on and off-campus. They talk about their club activities or how they would eat out with their friends daily.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default StoryContent