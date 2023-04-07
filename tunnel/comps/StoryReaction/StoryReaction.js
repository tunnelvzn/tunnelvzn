import styles from './StoryReaction.module.scss'
import { Icon } from '@iconify/react';
const StoryReaction = (props) => {
    const like = props.like
    const love = props.love
    const relate = props.relate
    const insight = props.insight
    const view = props.view
    return (
        <div className={`${styles.reactionContain} d-flex`}>
                        <div >
                            <span className={styles.circle}><Icon icon="mdi:eye-outline" color="#212121" /></span>
                            <small>{view}</small>
                        </div>
                        <div className={styles.reactionCount}>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="material-symbols:thumb-up-outline"  hFlip={true} />
                                <span className={styles.tooltiptext}>Like: {like}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="mdi:cards-heart-outline" />
                                <span className={styles.tooltiptext}>Love: {love}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="mdi:people-check-outline" />
                                <span className={styles.tooltiptext}>Relatable: {relate}</span>
                            </span>
                            <span className={`${styles.circle} ${styles.tooltip}`}>
                                <Icon icon="majesticons:lightbulb-shine-line" />
                                <span className={styles.tooltiptext}>Insightful: {insight}</span>
                            </span>
                            <small>{like + love + relate + insight}</small>
                        </div>
                    </div>
    )
}

export default StoryReaction