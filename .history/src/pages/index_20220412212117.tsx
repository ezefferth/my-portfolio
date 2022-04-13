import React from 'react'

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Resumo from './texts/resumo';


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
          <div className={`row`}>
            <img
              className={styles.profilePic}
              width='20px'
              height='30px'
              src='../../public/img/FotoPerfil.jpg'
            />
          </div>
          <div className={`row`}>
            <Resumo />
          </div>

        </div>
      </div>

    </div>
  )
}
