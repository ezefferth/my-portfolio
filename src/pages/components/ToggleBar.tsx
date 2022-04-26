
import React, { useState } from 'react'

import styles from './styles.module.scss';

export default function ToggleBar() {

  const [distance, setDistance] = useState<number>(0);


  function onScroll() {
    setDistance(window.scrollY);
  }

  if (typeof window !== "undefined") {//corrige o erro de windows undefined
    window.addEventListener('scroll', onScroll);
  }


  function scrollingTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

  }

  //scrollingTo('home')

  return (



    <div className={styles.toggle}>
      <div className={distance < 550 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('home')}>Home</p>
      </div>
      <div className={distance > 550 && distance < 1420 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('about')}>Sobre</p>
      </div>
      <div className={distance > 1420 && distance < 2400 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('experiencia')}>Experiência</p>
      </div>
      <div className={distance > 2400 && distance < 3300 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('educacao')}>Educação</p>
      </div>
      <div className={distance > 3300 && distance < 4300 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('portfolio')}>Portfólio</p>
      </div>
      <div className={distance > 4300 ? styles.itemCurrent : styles.item} >
        <p onClick={() => scrollingTo('contato')}>Contato</p>
      </div>

    </div>
  )
}