
import React, { useState } from 'react'

import styles from './styles.module.scss';

export default function ToggleBar() {

  const [distance, setDistance] = useState<number>(0);


  function onScroll() {
    setDistance(window.scrollY);
  }

  window.addEventListener('scroll', onScroll);

  function scrollingTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

  }

  //scrollingTo('home')

  return (
    <div className={styles.toggle}>
      <div className={distance < 570 ? styles.itemCurrent : styles.item}>
        <p onClick={() => scrollingTo('home')}>Home</p>
      </div>
      <div className={distance > 570 && distance < 1420 ? styles.itemCurrent : styles.item}>
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