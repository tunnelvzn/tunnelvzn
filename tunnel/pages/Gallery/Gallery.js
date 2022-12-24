import Story from "../../comps/Story"
import styles from './Gallery.module.scss'
import React from "react"
import stories from '../../data/stories.json'
import Footer from '/comps/Footer';

const Gallery = () => {

    let ret = (
        <>
        <div className={styles.galleryMain}>
            <div id="horiscroll" className={styles.horizontalScroll}>
                {stories.map(story => {
                    return (
                        <Story id={ story.id} name={story.name} contentImage={story.image} />
                    )
                })}

            </div>
        </div>
        <Footer/>
        </>
    )

    React.useEffect(() => {
        const scrollContainer = document.querySelector("#horiscroll");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
      }, []);

    return (
        ret
    )
}

export default Gallery