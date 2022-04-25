import React, { useState } from 'react'

import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';


//import loginFirebase from '../../public/img/loginFirebase.gif';
import FotoPerfil from '../../public/img/FotoPerfil.jpg';

import ToggleBar from './components/ToggleBar';


import format from 'date-fns/format';


import {
  FaGithub,
  FaLinkedinIn,
  FaGraduationCap,
  FaBriefcase,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'


import Resumo from './texts/resumo';


import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

//import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {



  const date = format(new Date(), 'yyyy');

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <ToggleBar />

      <div className={styles.presentation} id='home'>

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
      <div className={styles.about} id='about'>

        <h5 className={styles.sobreH5}>Sobre</h5>

        <h1 className={styles.sobreH1}>Um pouco sobre meu trabalho...</h1>

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
        <div id='experiencia'>
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
              <h6>Heimdallr</h6>
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
        </div>
        <div id='educacao'>
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
              <p>Engenharia; algoritmos e estrutura de dados; projeto e análise de algoritmos;
                circuitos e eletronica; banco de dados; microcontroladores e sistemas embarcados; redes de computadores;
                inteligência artificial; instrumentação e automação industrial; sinais e sistemas, processamento de sinais.


              </p>
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
        </div>


      </div> {/* fim resumo */}


      {/* img */}
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


      </div>{/* fim portfolio */}

      <footer id='contato'>
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
        <p className={styles.followme}>Follow-me</p>
        <div className={styles.icons}>
          <FaGithub
            //color='#fff'
            size='1.5em'
            className={styles.icon}
            onClick={() => window.open('https://github.com/ezefferth', '_blank')}
          />
          <FaLinkedinIn
            //color='#fff'
            size='1.5em'
            className={styles.icon}
            onClick={() => window.open('https://www.linkedin.com/in/ezefferth/', '_blank')}
          />
          <FaInstagram
            //color='#fff'
            size='1.5em'
            className={styles.icon}
            onClick={() => window.open('https://www.instagram.com/ezefferth/', '_blank')}
          />
          <FaTwitter
            //color='#fff'
            size='1.5em'
            className={styles.icon}
            onClick={() => window.open('https://www.twitter.com/ezefferth/', '_blank')}
          />
        </div>

        <div className={styles.copyright}>
          <p>&copy;{date} - Ezéfferth A F Fernandes</p>
          <p>Disign by <a>@ezefferth</a></p>
        </div>

      </footer>
    </div>
  )
}
