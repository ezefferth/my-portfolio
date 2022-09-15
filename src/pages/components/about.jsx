
import FotoPerfil from '../../../public/img/FotoPerfil.jpg';

import styles from '../../styles/Home.module.scss';
import Image from 'next/image';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


import React from 'react'

export default function About() {
  return (
    <div className={styles.about} id='about'>

      <h5 className={styles.sobreH5}>Sobre</h5>

      <h1 className={styles.sobreH1}>Um pouco sobre meu trabalho...</h1>


      <div className={`row ${styles.resumo}`}>
        <div className={`col-4 ${styles.colLeft}`}>
          <Image
            width={120}
            height={120}
            src={FotoPerfil}
            objectFit='cover'
            className={styles.fotoPerfil}
            alt='perfil'

          />
        </div>
        <div className={`col-4 ${styles.colRight}`}>
          <p className={styles.resumoText}>
            Formado em engenharia de computação e técnico em tecnologia da informação na
            UFMT. Pós-graduando em MBA em engenharia de software e governança de TI.
            FullStack Developer como freelancer. Desenvolvimento web com react, nextjs,
            mongodb, firebase, leaflet.
          </p>
        </div>
      </div>


      <div className={`row ${styles.profile}`}>
        <div className={`col ${styles.colLeft}`}>
          <h5>Perfil</h5>
          <p>Apaixonado por programação,
            amante em desenvolvimento web

          </p>

          <h5>Nome</h5>
          <p>Ezéfferth Chlysman Araujo Fernandes</p>

          <h5>Email</h5>
          <p>ezefferth@gmail.com</p>

          <h5></h5>
          <p></p>

        </div>
        <div className={`col ${styles.colRight}`}>
          <h5>Skills</h5>
          <p>Minhas especialidades</p>

          <div className={styles.skills}>
            <h6>Front-end</h6>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.linear}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant='determinate'
                  value={75}
                  valueBuffer={84}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  75%
                </Typography>
              </Box>
            </Box>

            <h6>Back-end</h6>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.linear}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant='determinate'
                  value={84}
                  valueBuffer={84}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  84%
                </Typography>
              </Box>
            </Box>

            <h6>Web</h6>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.linear}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant='determinate'
                  value={86}
                  valueBuffer={86}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  86%
                </Typography>
              </Box>
            </Box>

            <h6>Mobile</h6>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.linear}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant='determinate'
                  value={63}
                  valueBuffer={63}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  63%
                </Typography>
              </Box>
            </Box>

            <h6>Desktop</h6>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className={styles.linear}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                  variant='determinate'
                  value={60}
                  valueBuffer={60}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  60%
                </Typography>
              </Box>
            </Box>

            {/* <h6>Web</h6>
              <p></p> */}
          </div> {/* fim col skills */}
        </div>{/* fim col right */}

      </div>{/* fim profile */}

    </div>
  )
}
