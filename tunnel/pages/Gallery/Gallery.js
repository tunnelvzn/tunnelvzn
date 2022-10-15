import Story from "../../comps/Story"
import styles from './Gallery.module.scss'
import React from "react"

const Gallery = () => {
    const stories = [{
        name: 'story1',
        image: 'loneliness.svg'
    },
    {
        name: 'coming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'coming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'comming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'comming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'comming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'comming soon',
        image: 'comingSoon.svg'
    },
    {
        name: 'comming soon',
        image: 'comingSoon.svg'
    }]

    let ret = (
        <div className={styles.galleryMain}>
            <div id="horiscroll" className={styles.horizontalScroll}>

                {stories.map(story => {
                    return (
                        <Story contentImage={story.image} />
                    )
                })}

            </div>
        </div>
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