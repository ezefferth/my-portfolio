import fundo from '../../../public/img/fundo.png';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';

import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

import React from 'react'

export default function Presentation() {
  return (
    <div className={styles.presentation} id='home' >
      <Image
        src={fundo}
        alt='fundo'
        layout='fill'
        objectFit='cover'
        className={styles.background}
      />


      <div className={styles.titles}>
        <h3>PORTFOLIO</h3>
        <h1>Ezéfferth Chlysman</h1>
        <p>FULL-STACK DEVELOPER</p>

      </div>


      <div className={styles.iconsDiv}>
        <FaGithub
          size={30}
          onClick={() => window.open('https://github.com/ezefferth', '_blank')}
          className={styles.icon}
        />
        <FaLinkedinIn
          size={30}
          className={styles.icon}
          onClick={() => window.open('https://www.linkedin.com/in/ezefferth/', '_blank')}
        />
      </div>
    </div>
  )
}
