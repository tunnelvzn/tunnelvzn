import React from "react";
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react';
import stories from '../../data/stories.json'
import NavBar from '../../comps/NavBar'
import Footer from '../../comps/Footer'
import styles from './StoryContent.module.scss'
import Image from 'next/image'
import { GlobalContext } from '../../comps/Global/useGlobalContext'
import Link from 'next/link'
import { Icon } from '@iconify/react';


export const Anxiety = () => { 

    return (
        <div className="mt-5">
        <h1 className="mt-5">ahhhhh so anxious</h1>
        <h1 className="mt-5">ahhhhh so anxious</h1>
        <h1 className="mt-5">ahhhhh so anxious</h1>
        <h1 className="mt-5">ahhhhh so anxious</h1>
        <h1 className="mt-5">ahhhhh so anxious</h1>

        </div>
    )
}

export default Anxiety
