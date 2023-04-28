import styles from "./Feedback/Feedback.module.scss";
import Footer from "/comps/Footer";
import Head from "next/head";
import { useState, useContext, React, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "../comps/Global/useGlobalContext";
import { Button } from "../comps/Button";
import { doc, setDoc, Timestamp, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { CSSTransition } from "react-transition-group";
import { useRouter } from 'next/router';
export const Feedback = ({}) => {
  const router = useRouter()
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const { setRoute, db } = useContext(GlobalContext);
  const emailRef = useRef();
  const ratingRef = useRef();
  const elaborationRef = useRef();


  const upLoadToFirebase = async () => {
    event.preventDefault();
    console.log(emailRef.current)
    let hasError = false;
    console.log("upLoadToFirebase");
    const email = document.getElementById("userEmail").value;
   
    if (!email) {
        console.log( document.getElementsByClassName("email")[0])
        emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setError("email");
      hasError = true;
      return false;
    }
    const ratingOption = document.querySelector(
      'input[name="overall-rating"]:checked'
    );

    const ratingOptionValue = ratingOption?.value ? ratingOption.value : null;

    if (!ratingOption) {
        ratingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setError("overall");
      hasError = true;
      return false;
    }

    const Elaborate = document.getElementById("elaboration").value;
    console.log(Elaborate, Elaborate.length);
    if (Elaborate.length <= 10) {
        elaborationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (Elaborate.length == 0) {
        setError("Elaborate");
      } else {
        setError("Elaborate more");
      }

      hasError = true;
      return false;
    }

    const advice = document.getElementById("advice")?.value;
    const otherThoughts = document.getElementById("otherThoughts")?.value;
    if (!hasError) {
      const collectionRef = collection(db, "feedbacks");
      const newDocRef = doc(collectionRef); // creates a new document with a random ID
      const newDocId = newDocRef.id; // get the ID of the new documentnew document
      // add to firebase
      const docData = {
        overall_rating: ratingOptionValue,
        rating_explaination: Elaborate,
        email: email,
        advice: advice ?? "",
        other_ideas: otherThoughts ?? "",
        feedback_date: new Date(),
      };
      setDoc(newDocRef, docData)
        .then(() => {
          console.log(`Data uploaded successfully to document ${newDocId}`);
        })
        .catch((error) => {
          console.error(
            `Error uploading data to document ${newDocId}: ${error}`
          );
        });
      setSubmit(true);
    }
  };

  return (
    <>
      <Head>
        <title>Tunnel_vzn | Feedback</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {!submit && (
        <div className={styles.feedbackContent}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={`${styles.header} text-center`}>
            <h1 className={styles.feedbackTitle}>Feedback</h1>
            <h6>
              We value your ideas! Thank you in advance for filling out this
              form!
            </h6>
          </div>
          <div className="mt-4" ref={emailRef}>
            <label className={`${styles.question} mb-1`}>
              1. Your preferred email.*
            </label>
            {error == "email" && (
              <div className="alert alert-danger">Please put in your email</div>
            )}
            <input
              id="userEmail"
              type="email"
              placeholder="email123@email.com"
              className={`${styles.input} w-100`}
              onInput={() => {
                setError("");
              }}
            ></input>
          </div>
          <div className={`${styles.multi} mt-4`} ref={ratingRef}>
            <label className={`${styles.question} mb-1`}>
              2. What do you think about the project?*
            </label>
            {error == "overall" && (
              <div className="alert alert-danger" >Please select one option</div>
            )}
            <div className="mt-2">
              <input
                className="me-2"
                type="radio"
                id="Awesome"
                name="overall-rating"
                value="5"
                onInput={() => {
                  setError("");
                }}
              ></input>
              <label htmlFor="Awesome">Awesome</label>
            </div>

            <div className="mt-2">
              <input
                className="me-2"
                type="radio"
                id="Good"
                name="overall-rating"
                value="4"
                onInput={() => {
                  setError("");
                }}
              ></input>
              <label htmlFor="Good">Good</label>
            </div>

            <div className="mt-2">
              <input
                className="me-2"
                type="radio"
                id="Decent"
                name="overall-rating"
                value="3"
                onInput={() => {
                  setError("");
                }}
              ></input>
              <label htmlFor="Decent">Decent</label>
            </div>

            <div className="mt-2">
              <input
                className="me-2"
                type="radio"
                id="Bad"
                name="overall-rating"
                value="2"
                onInput={() => {
                  setError("");
                }}
              ></input>
              <label htmlFor="Bad">Bad</label>
            </div>

            <div className="mt-2">
              <input
                className="me-2"
                type="radio"
                id="Terrible"
                name="overall-rating"
                value="1"
                onInput={() => {
                  setError("");
                }}
              ></input>
              <label htmlFor="Terrible">Terrible</label>
            </div>
          </div> 
          <div className="mt-4" ref={elaborationRef}>
            <label className={`${styles.question} mb-1`}>
              3. Elaborate on your answer to the previous question.*
            </label>
            {error == "Elaborate" && (
              <div className="alert alert-danger">
                Please answer this question
              </div>
            )}
            {error == "Elaborate more" && (
              <div className="alert alert-danger " >
                {"Please give us a longer answer :)"}
              </div>
            )}
            <textarea
              onInput={() => {
                setError("");
              }}
              id="elaboration"
              type="text"
              placeholder="I believe this because..."
              className={`${styles.input} ${styles.largeInput} w-100`}
            ></textarea>
          </div>

          <div className="mt-4">
            <label className={`${styles.question} mb-1`}>
              4. Is there anything you want us to add to the project? Tell us
              more!
            </label>
            <textarea
              id="advice"
              type="text"
              placeholder="I want you to add..."
              className={`${styles.input} ${styles.largeInput}  w-100`}
            ></textarea>
          </div>

          <div className="mt-4">
            <label className={`${styles.question} mb-1`}>
              5. Is there anything else you want us to know? Feel free to say
              it!
            </label>
            <textarea
              id="otherThoughts"
              type="text"
              placeholder="Something I want to bring to your attention is..."
              className={`${styles.input} ${styles.largeInput}  w-100`}
            ></textarea>
          </div>
          <div className={`${styles.buttonContainer} text-center mt-3`}>
            <button
              className={`${styles.button}`}
              onClick={() => {
                console.log("submit");
                upLoadToFirebase();
              }}
            >
              Submit
            </button>
          </div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
      )}

      {submit && (
        <div className={styles.submitScreenContent}>
          <div className={styles.block}></div>
          <div className="text-center">
            <div className={styles.submitImage}>
              <Image src="/shootingStars.svg" layout="fill" />
            </div>
            <div className={styles.submitText}>
              <h2>Thank you for your feedback!</h2>
              <h3>
                If we end up using your ideas, we will contact you to see how we
                can give you credit! Have a nice day!
              </h3>
            </div>
            <button
              className={`${styles.button} ${styles.submitScreenBtn}`}
              onClick={() => {
                setRoute("/");
                router.push('/')
              }}
            >
              <h6>Go Back Home</h6>
            </button>
          </div>
          <div className={styles.block}></div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Feedback;
