import React from 'react'
import styles from './Fullpage.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';



// The below link could be useful for a reading progress bar that would be under the fixed navbar
// https://webomnizz.com/how-to-display-progress-bar-on-page-scroll-with-reactjs/


const Fullpage = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <div>
        <Image src="/lonelinessImages/rail.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John Ethel once again finds himself staring out at the surroundings from the light rail during his usual commute to the University of Washington. 
          He felt isolated. <br/><br/>What infuriated him even more is that it wasn't his choice. In the past, John made efforts to initiate conversations. 
          Yet, despite his commitment, he came off as disingenuine, which turned people away. So, he gave up and embraced the quiet life.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/class.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John hops off the light rail feeling drained of enthusiasm and loathing the lecture-packed day ahead of him. As John sat in his lecture room, he began observing his classmates engage in seemingly amusing conversations.<br/><br/> 
          Many times, he yearns for that one day someone would converse with him so that he could finally have some company. However, the combination of seeing people talk all around him and his fantasizing of his own social interactions made him feel cold.  
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John wonders whether commuting has robbed him of opportunities to connect with people in certain events, which led to him being left out of conversations. The people who are often laughing and having a good time seem to mainly talk about the latest happenings on and off-campus. They talk about their club activities or how they would eat out with their friends daily.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John yearns for that lifestyle. Maybe instead of wasting time in the commute, he could use that wasted time to grow his non-existent social circle. And what about roommates?<br/><br/>
          John didn't have anyone to dorm with or anyone to ask really. In his mind, as long as he was fortunate enough to get some roommates, it would be a good start. Unfortunately, this was Autumn quarter and dorms no longer accepted new residents. He had to idle until the next academic year to have a chance of getting one. 
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John put his life on an endless loop until summer had ended and it was time for him to move into his room. Since his roommates would be strangers, he wanted to put on a good first impression. He had heard that roommates usually became the closest friends. He hoped that it would be true. 
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
        John's expectations could not have been more wrong. For one, his two roommates knew each other which meant he was already the outcast of the group. The two would rather go off on their own to hang out with their friends, never bothering to invite John.<br/><br/>
        Evening after evening, John's roommates go have dinner with their friends leaving John to fend for himself. Understandably, John was frustrated. After waiting a year in anticipation, he was already off to a bad start. His new home felt like his lecture room.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/huh.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          Weeks flew by and John found himself at the end of another uneventful cloudy Seattle day. He was about to get up from his seat and head to his dorm room. However, as he walked out, his eyes drifted onto an umbrella on the concrete floor. He has seen the umbrella with the student many times and now they are walking out the door without it.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/hall.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John contemplated what to do. Part of him felt bad because it was supposed to rain heavily later in the day. He grabbed the umbrella and caught up with the student who was already going down the stairs. "Hey, you forgot your umbrella" said John quickly and a bit out of breath.<br/><br/>
          "Oh yeah, that is mine. Thanks" the student replied. “They said it will rain pretty hard later today, so having this would come in handy! You sit all the way in the back right?” “Yeah,” John replied. “I sit there because I like seeing the bigger picture.” John didn’t want to say that he likes to observe people from a high vantage point. 
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          “Huh, that doesn’t make much sense to me but I might join you in the back tomorrow because I have been occupying my whole row alone.” “Haha, sure!” John said a bit surprised at the fact that there was someone so similar to him.<br/><br/>
          As the two students made their way home, the classmate asked to exchange discord handles to keep in touch, which John quickly agreed to. After a bit more walking and chatting, the two friends parted ways and John decided to grab some food at Center Table before heading back to his room.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          As John stood in line to make his order, he pondered the events that transpired today. If he had not spoken up, he would have never known his new friend at all. He thought back to the many times where he tried so hard to initiate conversations and failed. Out of all the days he has lived through, today, John for once felt accepted by society.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          After some time waiting, John made his order and got his dinner. Just as he was about to leave Center Table, he spots his roommates walk out of the door presumably to head to the room. “Maybe tonight I’ll talk to them”, John thought. “Or maybe I shouldn’t bother. 
          They have been going out on their own without me. I don’t think they like me. What would they think if their roommate suddenly wants to talk to them? They would feel something is off. They would start judging.” John didn’t want that.
        </p>
      </div>
      <div>
        <Image src="/lonelinessImages/fakeave.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          Eventually, John is at his dorm room door. It was quiet. Normally, he could hear his roommates talking through a closed door. When he peeked through the entrance, he found his roommates on their laptops. Probably not a good time to interrupt them, John thought. He felt sad but relieved that once again, he couldn’t talk to his roommates. Yet, if he forgoes this opportunity, would he fall back into his old cycle again? What has he got to lose?<br/><br/> 
          “Hello, how did your guys’ day go?” John said with slight hesitation. “Hey John, mine was okay,” one of the roommates responds. “John, did something good happen?” the other roommate asks. “Yea, something happened today,” John replies and starts telling them the story. He feels his walls crumble and begins to warm up to his new home.
        </p>
      </div>
      <div>
        <h1>Next Story →</h1>
      </div>
    </div>
    </>
  )
}

export default Fullpage;