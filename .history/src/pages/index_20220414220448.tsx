import React, { useState } from 'react'

import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

import loginFirebase from '../../public/img/loginFirebase.gif';
import loginFirebaseStatic from '../../public/img/loginFirebaseStatic.png';

import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaBriefcase,
  FaWhatsapp,
  FaInstagram
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'


import Resumo from './texts/resumo';
import FotoPerfil from '../../public/img/FotoPerfil.jpg';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
//import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {


  const [stateLogin, setStateLogin] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>

      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className='collapse' id='navbarToggleExternalContent'>
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div> */}

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

      </div>{/* fim about */}

      <div className={styles.resumoQuali}>
        <h5>Resumo</h5>
        <h1>Minhas Qualificações</h1>

        <h4>Experiência Profissional</h4>
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Técnico em Tecnologia da Informação</h6>
            <FaBriefcase
              className={styles.icon}
            />
            <p>2022</p>
            <p>Atualmente</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>Desenvolver, projetar, implantar e realizar
              manutenção de sistemas e aplicações; Assessorar de
              atividades de ensino, pesquisa e extensão; Manutenção de computadores.</p>
          </div>

        </div>{/* fim row */}
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Assistente de Suporte</h6>
            <FaBriefcase
              className={styles.icon}
            />
            <p>2021-2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>heimdallr.com.br</h6>
            <p>Assistente de Suporte de Segurança da Informação, atuando na área de suporte à redes de
              computadores, segurança da informação, firewalls.</p>
            <p>Fortinet / NSE-1 / NSE-2 / NSE-3</p>
          </div>
        </div>{/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Freelancer</h6>
            <FaBriefcase
              className={styles.icon}
            />
            <p>2019-2022</p>
            <p>Atualmente</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Autônomo</h6>
            <p>Desenvolvimento em React; Aplicações mobile com React Native; Frameworks NextJS, SCSS,
              Bootstrap; Banco de Dados MongoDB, Firebase, Postgres e MySQL; Mapas com Leaflet.
            </p>
            <p> React / React Native / MongoDB / Firebase / Leaflet / SCSS</p>
          </div>

        </div>{/* fim row */}
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Monitor de Estrutura de Dados</h6>
            <FaBriefcase
              className={styles.icon}
            />
            <p>2019</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>Monitor de estrutura de dados com carga horária de 600h, monitorias em algoritmos de listas
              (ordenadas, encadeadas), pilhas, filas, árvores (AVL, B), busca e ordenação e suas respectivas
              aplicações.
            </p>
          </div>
        </div>{/* fim row */}

        <h4>Educação</h4>
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>MBA em Engenharia de Software</h6>
            <FaGraduationCap
              className={styles.iconE}
              size='1.35em'
            />
            <p>Pós-graduando em Engenharia de Software</p>
            <p>2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Tecnológica Federal do Paraná</h6>
            <p>Métodos ágeis de desenvolvimento de software;
              avaliação e melhoria de processo de software;
              gestão de processos de negócio;
              gestão de pessoas e liderança;
              padrões de projeto e arquitetura de software;
              gestão de requisitos de software;
              gestão de projetos de software;
              planejamento e gestão de testes de software;
              gestão de configuração de software;
              métricas e estimativas de projetos de software.

            </p>
          </div>
        </div>{/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Governança de TI</h6>
            <FaGraduationCap
              className={styles.iconE}
              size='1.35em'
            />
            <p>Pós-graduando em Governaça de TI</p>
            <p>2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Gran Cursos Online</h6>
            <p>Gestão estratégica corporativa e de TI;
              Gestão de segurança Da informação - normas 27001-27002 e 27005;
              legislação aplicada à informação digital;
              gestão de projetos - PMBOK;
              sistemas de informação em governança de TI;
              gestão de processos - Cbok;
              gestão de serviços itil, Iso 20000 e continuidade de negócios e serviços de ti
              gestão de qualidade De Software;
              gestão de TI Cobit.
            </p>
          </div>
        </div>{/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Engenharia de Computação</h6>
            <FaGraduationCap
              className={styles.iconE}
              size='1.35em'
            />
            <p>Graduado em Engenharia de Computação</p>
            <p>2015-2021</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>Colocar resumo aki</p>
          </div>
        </div>{/* fim row */}

        <div className={`row justify-content-center ${styles.profEduFinal}`}>
          <div className={`col-4 ${styles.language}`}>
            <h6>Languages</h6>
            <div className={styles.divLanguage}>
              <p>Português - Nativo</p>

            </div>

            <p>Inglês - Intermediário</p>
            <p>Espanhol - Básico</p>
          </div>
          <div className={`col-4 ${styles.hobbie}`}>
            <h6>Hobbies</h6>
            <p>Amo tocar guitarra, ouvir músicas,
              e curtir uma gameplay com minha
              esposa nos horários vagos.</p>
          </div>
          <div className={`col-4 ${styles.profit}`}>
            <h6>Non profit</h6>
            <p>Professor voluntário de Física
              Mecânica no projeto de extensão
              EduCursinho da UFMT.</p>
          </div>
        </div>{/* fim row */}


      </div> {/* fim resumo */}


      {/* img */}
      <div className={styles.portfolio}>
        <h5>Portfólio</h5>
        <h1>Projetos realizados</h1>

        <div className={`row justify-content-center ${styles.projetos}`}>




          <div className={`col-4 ${styles.colLeft}`}>
            <div className={`${styles.divImage}`}>
              <h6>Login page with firebase</h6>
              <Image
              /* stateLogin ? (loginFirebase) : (loginFirebaseStatic) */
                src={loginFirebase}
                width={426}
                height={240}
                
                objectFit='cover'
                className={styles.image}
                onMouseEnter={() => setStateLogin(true)}
                onMouseLeave={() => setStateLogin(false)}
              //onMouseEnter={}
              />
            </div>

          </div>
          <div className={`col-4 ${styles.colRight}`}>

          </div>
        </div>
      </div>{/* fim portfolio */}

      <footer>
        <div className={`row justify-content-center ${styles.divIconFooter}`}>
          <div className={`col-4 ${styles.iconFooter}`}>
            <HiOutlineLocationMarker
              color='#fff'
              size='2.5em'
              className={styles.icon}
            />
            <h5>Localização</h5>
            <h6 >Cuiabá-MT</h6>
            <h6>Brasil</h6>
          </div>
          <div className={`col-4 ${styles.iconFooter}`}>
            <HiOutlineMail
              color='#fff'
              size='2.5em'
              className={styles.icon}
            />
            <h5>Envie um email</h5>
            <h6>ezefferth@gmail.com</h6>
          </div>
          <div className={`col-4 ${styles.iconFooter}`}>
            <HiOutlinePhone
              color='#fff'
              size='2.5em'
              className={styles.icon}
            />
            <h5>Contato</h5>
            <h6><FaWhatsapp /> 65 99649 3590</h6>
          </div>
        </div>
        <div className={styles.icons}>
          <FaGithub
            color='#fff'
            size='1.5em'
            className={styles.icon}
          />
          <FaLinkedinIn
            color='#fff'
            size='1.5em'
            className={styles.icon}
          />
          <FaInstagram
            color='#fff'
            size='1.5em'
            className={styles.icon}
          />
        </div>

        <div className={styles.copyright}>
          <p>Copyright &copy;Todos os direitos reservados - Ezéfferth A F Fernandes</p>
          <p>Disign by <a>@ezefferth</a></p>
        </div>

      </footer>
    </div>
  )
}
