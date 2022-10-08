import React from 'react'
import styles from './Fullpage.module.scss'
import Image from 'next/image'
import NavBar from '../../comps/NavBar';

const Fullpage = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <div>
        <Image src="/lonelinessImages/sample.png" className={styles.storyImg} height={400} width={600} />
        <p className={styles.words}>
          John Ethel once again finds himself staring out at the surroundings from the light rail during his usual commute to the University of Washington. 
          He felt isolated. <br/><br/>What infuriated him even more is that it wasn't his choice. In the past, John made efforts to initiate conversations. 
          Yet, despite his commitment, he came off as disingenuine, which turned people away. So, he gave up and embraced the quiet life.
        </p>
      </div>
      <div>Second Page</div>
      <div>Third Page</div>
      <div>Fourth Page</div>
    </div>
    </>
  )
}

export default Fullpage;