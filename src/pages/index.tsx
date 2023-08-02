import { GetStaticProps } from 'next';

import React from 'react'

import Head from 'next/head';

import styles from '../styles/Home.module.scss';


//import loginFirebase from '../../public/img/loginFirebase.gif';


import ToggleBar from './components/ToggleBar';

import Presentation from './components/presentation'
import About from './components/about'
import ResumoQuali from './components/resumoQuali'
import Portfolio from './components/portfolio'
import Footer from './components/footer'



export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Portfolio</title>
        <link rel='icon' type="image/png" href='/logo2.png' sizes='32x32'/>

      </Head>

      <ToggleBar />
      
      <Presentation />
      <About />
      <ResumoQuali />
      <Portfolio />
      <Footer />
    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
    },
    revalidate: 60 * 60 * 24
  };
};