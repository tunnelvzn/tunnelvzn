import { runTransaction, doc, addDoc, collection,getDoc, setDoc} from "firebase/firestore";
import Image from "next/image";
import styles from "../pages/StoryContent/StoryContent.module.scss";

/**
 * change the button style and update attribute counts when onclick, upload new count to firebase based on story name
 * @param {*} db - a firebase db object
 * @param {*} storyName the name of the story, get passed in using context
 * @param {*} setLike the setter of the attribute from useState
 * @param {*} like the accessor of the attribute from useState
 * @param {*} attribute the name of the attribute ('like love relatable or insightful')
 * @param {*} btn the button object to change the style when on click
 */
const addLike = async (
  document,
  db,
  storyName,
  setLike,
  like,
  attribute,
  btn
) => {
  if (btn === undefined) return;
  console.log(like, setLike);
  let setAttribute;
  console.log(attribute);
  switch (attribute) {
    case "like":
      setAttribute = "likes";
      break;
    case "love":
      setAttribute = "loves";
      break;
    case "relatable":
      setAttribute = "relatable";
      break;
    case "insightful":
      setAttribute = "insightful";
      break;
    default:
      console.log("Sorry, that is not a valid fruit.");
      break;
  }

  console.log(like);
  let updateValue = 0;
  let likebtn = btn;

  if (likebtn.classList.contains(styles.liked)) {
    setLike(like - 1);
    likebtn.classList.remove(styles.liked);
    updateValue = like - 1;
  } else {
    if (like === undefined) {
      setLike(1);
      updateValue = 1;
    } else {
      setLike(like + 1);
      updateValue = like + 1;
    }

    likebtn.classList.add(styles.liked);
  }

  const sfDocRef = doc(db, "likes", storyName.toLowerCase());
  console.log(sfDocRef.firestore === db);
  console.log("doc ref", sfDocRef, storyName);
  const docSnap = await getDoc(sfDocRef);
  if (!docSnap.exists()) {
    // Create new document with storyName.toLowerCase()
    await setDoc(sfDocRef, {
      // Add data to the new document
      insightful: 0,
      likes: 0,
      loves: 0,
      relatable: 0,
    });
  }
  try {
    await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef);
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }

      const newLike = updateValue;
      console.log(newLike);
      const uploadData = { [setAttribute]: newLike }; // use object key syntax to specify the field to update
      transaction.update(sfDocRef, uploadData); // pass the document reference and field to update
    });
    console.log("Transaction successfully committed!");
  } catch (e) {
    console.log("Transaction failed: ", e);
  }
};

import React, { useState, useContext } from "react";
import { GlobalContext } from "./Global/useGlobalContext";

export function addViewCount() {}

export function StoryForm(props) {
  const { upLoadToFirebase } = props;
  const { db, setRoute, storyName, setStoryName, makeNoise } =
    useContext(GlobalContext);
  const styles = props.styles;

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    console.log(userInput, userInput.length);
    if (userInput.length == 0) {
      setError(true);
      return;
    }
    try {
      await runTransaction(db, async (transaction) => {
        const docRef = await addDoc(collection(db, "story_feedback"), {
          name: storyName,
          feedback: userInput,
        });
      });
      console.log("Transaction successfully committed!");
      props.onSubmit();
      document.getElementById("feedback").value = "";
      setUserInput("");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  };

  return (
    <>
      <div>
        <label className={`${styles.question} mb-1`}>
          Any feedback about the story? What should be changed? What do you want
          to see added? Anything at all!
        </label>
        <textarea
          id="feedback"
          onInput={(e) => {
            setUserInput(e.target.value);
            setError(false);
          }}
          type="text"
          placeholder="Spill your mind here..."
          className={`${styles.input} ${styles.largeInput} w-100`}
        ></textarea>
        {error && (
          <div class="alert alert-danger" role="alert">
            You forgot to write something :P
          </div>
        )}
      </div>
      <div className={`${styles.buttonContainer} text-center mt-3`}>
        <button
          className={`${styles.button}`}
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export const SuccessModal = (props) => {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  return (
    <div
      className={`${
        isOpen ? props.styles.modalDivOpen : props.styles.modalDivClose
      } p-5`}
    >
      <div
        className={`${
          isOpen ? props.styles.modalDivContent : "d-none"
        } w-auto `}
      >
        <div className={styles.submitImage}>
          <Image src="/shootingStars.svg" layout="fill" />
        </div>
        <h2 className={styles.submitText}>{props.message}</h2>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className={styles.button}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default addLike;
