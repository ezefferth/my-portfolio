
import styles from '../../styles/Home.module.scss';

import React from 'react'

export default function Portfolio() {
  return (
    <div className={styles.portfolio} id='portfolio'>
      <h5>Portfólio</h5>
      <h1>Projetos realizados</h1>

      <div className={` ${styles.projetos}`}>


        <div className={styles.projeto}>
          <h6 onClick={() => window.open('https://github.com/ezefferth/login-page-firebase', '_blank')}>Login page with firebase</h6>

          <p>
            Tem como objetivo demonstrar uma página de login responsivo
            abordando alguns elementos de SASS, usando Firebase Authenticator
            para realização do login.
          </p>
        </div>


        <div className={styles.projeto}>
          <h6 onClick={() => window.open('http://desvendandocientifico.com.br/', '_blank')}>Desvendando o Científico</h6>
          <p>O site foi criado com intúito de ajudar alunos de graduação sobre iniciação científica.
            Projeto desenvolvido em parceria com <a>@jhemilly</a>, estudante de Medicina na UniCesumar.
          </p>
        </div>
        <div className={styles.projeto}>
          <h6 onClick={() => window.open('https://github.com/ezefferth/distance-between-leaflet', '_blank')}>Distance Between</h6>
          <p>Com a biblioteca OpenSource Leaflet e nextjs, foi desenvolvido uma onepage
            com intúito de calcular uma distância e tempo de trajeto
            entre dois pontos a partir da da cidade selecionada.

          </p>
        </div>
        <div className={styles.projeto}>
          <h6 onClick={() => window.open('https://github.com/ezefferth/nlw5-podcastr', '_blank')}>NLW5 Podcastr</h6>
          <p>
            Este projeto foi desenvolvido em conjunto com a RocketSeat, Next Level Week 5.
            Nele é abordado o desenvolvimento de uma aplicação podcast web com React, framework NextJS, SASS, entre outros.
          </p>
        </div>

        <div className={styles.outrosProjetos}>
          <h6>Outros projetos</h6>
          <div className={styles.p}>
            <p>Outros projetos pode ser econtrados no meu repositório </p>
            <p onClick={() => window.open('https://github.com/ezefferth', '_blank')}>&nbsp;git.</p>
          </div>

        </div>
      </div>


    </div>
  )
}
