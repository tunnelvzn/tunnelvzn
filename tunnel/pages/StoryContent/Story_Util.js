import { runTransaction, doc } from "firebase/firestore";
import styles from './StoryContent.module.scss'

/**
 * change the button style and update attribute counts when onclick, upload new count to firebase based on story name
 * @param {*} db - a firebase db object 
 * @param {*} storyName the name of the story, get passed in using context 
 * @param {*} setLike the setter of the attribute from useState
 * @param {*} like the accessor of the attribute from useState 
 * @param {*} attribute the name of the attribute ('like love relatable or insightful')
 * @param {*} btnId the button id to change the style when on click 
 */
const addLike = async (db, storyName, setLike, like, attribute, btnId) => {

    console.log(like, setLike,)
    let setAttribute
    console.log(attribute)
    switch (attribute) {
        case 'like': setAttribute = 'likes'
            break;
        case 'love': setAttribute = 'loves'
            break;
        case 'relatable': setAttribute = 'relatable'
            break;
        case 'insightful': setAttribute = 'insightful'
            break;
        default:
            console.log('Sorry, that is not a valid fruit.');
            break;
    }


    console.log(like)
    let updateValue = 0
    let likebtn;
    if(document){
        likebtn = document.getElementById(btnId)
    } else {
        return 
    }
   
    if (likebtn.classList.contains(styles.liked)) {
        setLike(like - 1)
        likebtn.classList.remove(styles.liked)
        updateValue = like - 1
    } else {
        if (like === undefined) {
            setLike(1)
            updateValue = 1
        } else {
            setLike(like + 1)
            updateValue = like + 1
        }

        likebtn.classList.add(styles.liked)
    }

    const sfDocRef = doc(db, "likes", storyName.toLowerCase());
    console.log(sfDocRef.firestore === db);
    console.log('doc ref', sfDocRef, storyName)

    try {
        await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(sfDocRef);
            if (!sfDoc.exists()) {
                throw "Document does not exist!";
            }

            const newLike = updateValue
            console.log(newLike)
            const uploadData = { [setAttribute]: newLike } // use object key syntax to specify the field to update
            transaction.update(sfDocRef, uploadData); // pass the document reference and field to update
        });
        console.log("Transaction successfully committed!");
    } catch (e) {
        console.log("Transaction failed: ", e);
    }
}

export default addLike