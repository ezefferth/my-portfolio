import React from 'react'

import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Resumo from './texts/resumo';
import FotoPerfil from '../../public/img/FotoPerfil.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div className={styles.presentation}>

        <h1>Ezéfferth Chlysman</h1>
        <h6>FULL-STACK DEVELOPER</h6>

        <div className={styles.iconsDiv}>
          <FaGithub
            size={30}
            className={styles.icon}
          />
          <FaLinkedinIn
            size={30}
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.about}>

        <h5 className={styles.sobreH5}>Sobre</h5>

        <h1>Um pouco sobre meu trabalho...</h1>

        <div className={`row ${styles.resumo}`}>
          <div className={`col ${styles.colLeft}`}>
            <Image
              width={120}
              height={120}
              src={FotoPerfil}
              objectFit='cover'
              className={styles.fotoPerfil}

            />
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <Resumo />
          </div>
        </div>{/* fim div row */}

        <div className={`row ${styles.profile}`}>
          <div className={`col ${styles.colLeft}`}>

          </div>
          <div className={`col ${styles.colRight}`}>

          </div>
        </div>


      </div>{/* fim about */}

    </div>
  )
}
