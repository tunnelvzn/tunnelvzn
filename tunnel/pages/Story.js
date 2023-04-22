import { useState, useContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import StoryContent from './StoryContent/StoryContent'
import NavBar from '../comps/NavBar'
import { GlobalContext } from '../comps/Global/useGlobalContext.js'

export default function Story() {
  const router = useRouter();
  const { story } = router.query;
  const {
    intro, 
    setIntro,
    audio,
    route,
    setRoute,
    nav, 
    setNav,
    setStoryName, 
    storyName
  } = 
  useContext(GlobalContext);
  setStoryName(story)


  return (
   <>
   {/* I commented out the navbar on the story pages because interacting with it basically crashes the whole site */}
    {/* <NavBar /> */}
    <StoryContent/>
   </>
  );
}