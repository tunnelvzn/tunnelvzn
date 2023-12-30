import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect, useContext, componentDidMount } from "react";
import stories from "../../data/stories.json";
import NavBar from "../../comps/NavBar";
import Footer from "../../comps/Footer";
import styles from "./StoryContent.module.scss";
import Image from "next/image";
import { GlobalContext } from "../../comps/Global/useGlobalContext";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  collection,
  addDoc,
  getDocs,
  runTransaction,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import { async } from "@firebase/util";
import { setConfig } from "next/config";
import addLike from "../../comps/Story_Util";
import { StoryForm, SuccessModal } from "../../comps/Story_Util";
import StoryReaction from "../../comps/StoryReaction/StoryReaction";
import Button from '/comps/Button';


export const Burnout = () => {
  const [like, setLike] = useState(0);
  const [love, setLove] = useState(0);
  const [relate, setRelate] = useState(0);
  const [insight, setInsight] = useState(0);
  const [view, setView] = useState(0);
  const { db, storyName, makeNoise } = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "likes"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        if (storyName.toLowerCase() == doc.id) {
          console.log("data", doc.data().likes);
          setLike(doc.data().likes ? doc.data().likes : 0);
          setLove(doc.data().loves ? doc.data().loves : 0);
          setRelate(doc.data().relatable ? doc.data().relatable : 0);
          setInsight(doc.data().insightful ? doc.data().insightful : 0);
        }
      });
      console.log(storyName);
      const sfDocRef = doc(db, "viewCounts", storyName.toLowerCase());
      console.log("doc ref", sfDocRef, storyName);
      const docSnap = await getDoc(sfDocRef);
      if (!docSnap.exists()) {
        // Create new document with storyName.toLowerCase()
        await setDoc(sfDocRef, {
          // Add data to the new document
         count: 0
        });
      }

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
        if (storyName.toLowerCase() == doc.id) {
          console.log("data", doc.data().count);
          setView(doc.data().count);
        }
      });
      console.log(view);
    };

    fetchData().catch(console.log("hey"));
  }, []);
  const toAddLike = (attribute, setState, state, iconId) => {
    const icon = document.getElementById(iconId).parentNode;
    addLike(document, db, storyName, setState, state, attribute, icon);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <SuccessModal
        className="mt-5"
        styles={styles}
        message={"Your feedback has been received!"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={styles.section}>
        <div className={styles.block}></div>
        <div className={`${styles.imgFrame} ${styles.fadeIn}`}>
          <Image
            src="/burnoutImages/cover.png"
            className={styles.storyImg}
            layout="fill"
            alt="A girl named Sarah sitting on some library chairs"
          />
        </div>
        <div className={`${styles.words} ${styles.fadeIn}`}>
            <h1 className={styles.storyTitle}>Burn Out</h1>
            <p className={styles.storyFacts}>12.30.2023 · 10 min read</p>
            <StoryReaction
              view={view}
              like={like}
              love={love}
              relate={relate}
              insight={insight}
            />

          <br />
          <br />
          <p>
          Sarah’s typical day is crammed with events, requiring great sacrifices to keep her day flexible. 
          At times, it gets messy, especially when her teammates are unpredictable.
          </p>
        </div>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/pondering.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah at her laptop while thinking"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
          I read my email to my mentor before I hit send: “Hi Jesse, can we postpone 
          our meeting from tomorrow morning to next week? I have an urgent team 
          meeting that conflicts.” I let out a sigh of disappointment because this 
          wouldn’t have happened if my three teammates stepped up their game, but I 
          guess that was too much to ask for. All quarter long, my teammates from 
          one of my classes seemingly dragged their feet, and I pulled their weight. 
          <br />
          <br />
          After waiting and hoping they would make their contributions, they finally 
          swore to show up tomorrow at Odegaard Library at 10 am. “Man, we have to 
          give the presentation in 3 days, and we are nowhere near finished,” I say 
          to myself while coping with a headache after thinking about all the work we 
          have left and all the events I had to cancel for tomorrow’s potentially 
          busy day. 
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/walkingOde.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah walking to the library"
          />
        </div>
        <p className={`${styles.words}`}>
          <i>Did I tell the other club officers that I’ll be busy the whole day tomorrow? 
          Have I canceled my dinner plans with my friends? Did I tell my start-up 
          partners I would be too busy to attend the meeting? More importantly, I 
          thought, will my team be there tomorrow?</i> I thought about that and what to 
          do if they weren’t present all night until I fell asleep after hours of 
          pondering, and during my walk to Odegaard in the morning, the question 
          became: <i>Will they be there today?</i> 
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/enterOde.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah enters the library"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
          I spared no time in the library and began wandering around while looking 
          madly around, hoping my team would already be at a table with their laptops 
          out. Ode was buzzing with dead week activity. The voices of many students 
          created an energetic murmur that made it easy to focus. However, I could 
          not care. “Where are they???” I growl inside my head. <i>Wait, I can just 
          message them to see if they are there.</i> As I reach into my pocket to get 
          out my phone, I feel the tremble of several notifications.
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/insideOdeOnPhone.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah in the library looking at her phone"
          />
        </div>
        <p className={`${styles.words}`}>
         They were from a couple of my teammates. “Sorry, something came up,” and 
         “Me too,” they say. At that moment, I felt a wave of fire travel through 
         my soul as my stomach lurched. <i>How could they do this to me? After what I 
         have been through this quarter and my sacrifices, they stood me up again.</i> 
         “Is anyone going to show up today?? You agreed to be available, and I’m 
         already at Ode. You guys need to show up,” I lash out through text.  
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/seesTeammate.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah sees her teammate"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
         I thought about my desperate texts. I tried to be as accommodating and 
         sympathetic as possible, but I found it harder and harder to maintain my 
         composure with these people. <i>Life doesn’t revolve around them. I don’t 
         revolve around them. If they don’t pull their weight, things won’t get done. 
         They can present their empty slide. I’ll say we divided and conquered.</i> 
         I’ve done all I ca- my internal rant stops as my eyes fixate on a familiar 
         face. IT’S ONE OF MY TEAMMATES! “Mia, you’re here! It’s just you and me 
         today,” I say while a bit out of breath after making my way to her near 
         the staircase.
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/teamMeet.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah and her teammate sits down to do work"
          />
        </div>
        <p className={`${styles.words}`}>
          “Yea, that sucks. Let’s find somewhere to sit and get working because I 
          have class in 45 minutes,” Mia says. <i>Mia is the only other person who cares. 
          Why would I lump her with the other two?</i> “Oh, I see a spot over there!” 
          I say, pointing to the back of the library in front of the doors that says, 
          “Do not block.” The most Mia and I could do was to start dividing the 
          presentation into parts for each group member and hope that the absentees 
          pull through. 
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/teammateLeaves.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah watching her teammate leave"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
          To me, it felt like a waste of a morning. Imagine how productive we would 
          have been if everyone cared more and showed up. I can’t get this out of my 
          mind. “I’ve finished my parts at least, and I have to go to class now,” 
          Mia proclaims. “Yup, see you later,” I respond. And then there was one. 
          <br/>
          <br/>
          Focusing on the task at hand was difficult. <i>Dang, 45 minutes, and I still 
          don’t feel like doing my portion.</i> My eyes glanced at the team chat every 
          five minutes, lying to myself that my teammates would respond. “Mia and 
          I gave you guys the remaining slides to do. Please have them done ASAP so 
          we can hopefully practice before our presentation,” I write to the team chat.  
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/thenThereWasOne.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah tries to go back to work"
          />
        </div>
        <p className={`${styles.words}`}>
         Eventually, I gave up staring at the dead chat and accepted that my team 
         wasn’t present when I needed them the most. However, I will always be 
         there to cover for them without a speck of gratitude like this was a given 
         that there will always be a person who cares more and is willing to go the 
         extra mile. “Truly a thankless job,” I mutter. <i>I’ll go to my first class 
         early so I can clear my head on the walk there, and maybe, just maybe, 
         the two absentees will have responded when I get there.</i>
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/leavingOde.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah leaves the library"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
         Walking out of Ode, I felt like I was about to collapse, yet still 
         hanging on. <i>Was I in control of my life? Or were other people 
         controlling how I lived my life? Do I let people control mine?</i> I could 
         study for my calculus final. Should I finish the assignments from my two 
         other classes? Or I could brush up on the lesson plan I have to give during 
         my quiz section tomorrow. Isn’t it pretty unfair? Even though I eliminated 
         some things from my schedule, I still can’t seem to catch my breath.
         <br/>
         <br/>
         On top of that, I have to be the one who cares more about the class. <i>Was it 
         possible for one person to do all this? Wouldn’t it be nice if there were 
         multiple of myself so we could share my responsibilities? Maybe then I would 
         be more in control and have free time. Well, that isn’t possible. So, I’ll 
         settle for dropping everything and running away.</i> I could daydream all day, 
         but in the end, I’ll only delay the inevitable.
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/outsideOdeOnPhone.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah outside the library looking at her phone"
          />
        </div>
        <p className={`${styles.words}`}>
         Another tremble in my pocket had me reach for my phone again. It’s my 
         teammates. “That sounds fine to me. I can take the last topic and create 
         the slides right now,” one says. “And I’ll take what’s left,” the other 
         chimes in. Hearing that relieved me, and I even felt joy that my teammates 
         would pull through. Though one of my problems seemed to be at an end, it 
         felt like the pieces were finally falling into place, and I couldn’t help 
         but smile. <i>Maybe I was wrong about my team.</i>
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/denny.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah walking by Denny Hall"
          />
        </div>
        <p className={`${styles.words} ${styles.offset}`}>
         My mind flashes back to when I gave up so much to cover others this quarter. 
         I recall when I wanted to go to the football game with my friends but had 
         to sell my tickets because I had to help my teammate finish their part due 
         to them slacking off all week. I remember how I almost got sick twice as a 
         result of exhaustion. 
         <br/>
         <br/>
         And yesterday evening I had to cancel my dinner plans 
         because I thought I had to cover others again. <i>Today must be the turning point. 
         Could I go out for dinner with friends? I should just go. After all, there will 
         always be work waiting for me. Or not? Should I see that the task gets done 
         before I relieve myself?</i>
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <div className={styles.imgFrame}>
          <Image
            src="/burnoutImages/lectureHall.png"
            className={styles.storyImg}
            layout="fill"
            alt="Sarah in her lecture room"
          />
        </div>
        <p className={`${styles.words}`}>
         I debated until I sat in my lecture room for my first class and opened my 
         laptop. I glance at the team chat, which was dead silent. <i>Ah, those two 
         must be on the slide deck, working! Wait, ARE they working?</i> I navigated 
         to the tab and saw only myself. <i>Ah, I must refresh the browser to see the new 
         changes!</i> 
         <br/>
         <br/>
         I hit the button several times, eventually accepting the reality 
         and understanding my impatience. <i>I’ve been waiting around, worrying about 
         others for too long, and neglecting myself.</i> “See you guys at the meeting 
         place for dinner tonight,” I text to my friend group, briefly tossing away 
         my responsibilities.
        </p>
      </div>

      <div className={`${styles.section} ${styles.normSection}`}>
        <div className={styles.block}></div>
        <p className={styles.words}>
            This story was written and illustrated by Eddy and peer-reviewed by 9 UW Students.
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
              <div
                className={styles.endStoryBtn}
                aria-label="like"
                role="button"
                tabIndex="0"
                onClick={() => {
                  console.log("add like");
                  toAddLike("like", setLike, like, "likeIcon");
                }}
              >
                <h6>
                  <Icon
                    id="likeIcon"
                    icon="material-symbols:thumb-up-outline"
                    hFlip={true}
                    width="25"
                    height="25"
                    className={styles.reactIcon}
                  />
                  Like
                </h6>
              </div>
              <div
                className={styles.endStoryBtn}
                aria-label="love"
                role="button"
                tabIndex="0"
                onClick={() => {
                  toAddLike("love", setLove, love, "loveIcon");
                }}
              >
                <h6>
                  <Icon
                    id="loveIcon"
                    icon="mdi:cards-heart-outline"
                    width="25"
                    height="25"
                    className={styles.reactIcon}
                  />
                  Love
                </h6>
              </div>
              <div
                className={styles.endStoryBtn}
                aria-label="relatable"
                role="button"
                tabIndex="0"
                onClick={() => {
                  toAddLike("relatable", setRelate, relate, "relateIcon");
                }}
              >
                <div>
                  <Icon
                    id="relateIcon"
                    icon="mdi:people-check-outline"
                    width="25"
                    height="25"
                    className={styles.reactIcon}
                  />
                 Relatable
                </div>
              </div>
              <div
                className={styles.endStoryBtn}
                aria-label="insightful"
                role="button"
                tabIndex="0"
                onClick={() => {
                  toAddLike("insightful", setInsight, insight, "insightIcon");
                }}
              >
                <h6>
                  <Icon
                    id="insightIcon"
                    icon="majesticons:lightbulb-shine-line"
                    width="25"
                    height="25"
                    className={styles.reactIcon}
                  />
                 Insightful
                </h6>
              </div>
            </div>
            <div className={styles.textboxContainer}>
              <StoryForm
                styles={styles}
                onSubmit={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
          {/* <div className={styles.block}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Burnout;
