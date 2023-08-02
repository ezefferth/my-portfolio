import styles from "../../styles/Home.module.scss";

import React from "react";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function ResumoQuali() {
  return (
    <div className={styles.resumoQuali}>
      <h5>Resumo</h5>
      <h1>Minhas Qualificações</h1>
      <div id="experiencia">
        <h4>Experiência Profissional</h4>
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Analista de Tecnologia da Informação</h6>
            <FaBriefcase className={styles.icon} />
            <p>2023</p>
            <p>Atualmente</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Prefeitura Municipal de Dourados</h6>
            <p>
              Desenvolver, projetar, implantar e realizar manutenção de sistemas
              e aplicações; Gestão de TI;.
            </p>
          </div>
        </div>
        {/* fim row */}
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Técnico em Tecnologia da Informação</h6>
            <FaBriefcase className={styles.icon} />
            <p>2022-2023</p>
            {/* <p>Atualmente</p> */}
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>
              Desenvolver, projetar, implantar e realizar manutenção de sistemas
              e aplicações; Assessorar de atividades de ensino, pesquisa e
              extensão; Manutenção de computadores.
            </p>
          </div>

          <div className={`row justify-content-center ${styles.profEdu}`}>
            <div className={`col-4 ${styles.colLeft}`}>
              <h6>Professor de Ensino Superior</h6>
              <FaBriefcase className={styles.icon} />
              <p>2022-2023</p>
              {/* <p>Atualmente</p> */}
            </div>
            <div className={`col-4 ${styles.colRight}`}>
              <h6>Faculdade de Ciências e Tecnologia</h6>
              <p>
                Professor de Algoritmos e Linguagem de Programação, Estrutura de
                Dados, Programação Web I e II, Programação para Dispositivos
                Móveis I e II
              </p>
            </div>
          </div>
          {/* fim row */}
          <div className={`row justify-content-center ${styles.profEdu}`}>
            <div className={`col-4 ${styles.colLeft}`}>
              <h6>Professor Substituto</h6>
              <FaBriefcase className={styles.icon} />
              <p>2023</p>
              {/* <p>Atualmente</p> */}
            </div>
            <div className={`col-4 ${styles.colRight}`}>
              <h6>Universidade Federal de Mato Grosso</h6>
              <p>
                Professor de Algoritmos e Estrutura de Dados I, Introdução a
                Programação
              </p>
            </div>
          </div>
          {/* fim row */}
        </div>
        {/* fim row */}
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Assistente de Suporte</h6>
            <FaBriefcase className={styles.icon} />
            <p>2021-2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Heimdallr</h6>
            <p>
              Assistente de Suporte de Segurança da Informação, atuando na área
              de suporte à redes de computadores, segurança da informação,
              firewalls.
            </p>
            <p>Fortinet / NSE-1 / NSE-2 / NSE-3</p>
          </div>
        </div>
        {/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Freelancer</h6>
            <FaBriefcase className={styles.icon} />
            <p>2019</p>
            <p>Atualmente</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Autônomo</h6>
            <p>
              Desenvolvimento em React; Aplicações mobile com React Native;
              Frameworks NextJS, SCSS, Bootstrap; Banco de Dados MongoDB,
              Firebase, Postgres e MySQL; Mapas com Leaflet.
            </p>
            <p> React / React Native / MongoDB / Firebase / Leaflet / SCSS</p>
          </div>
        </div>
        {/* fim row */}
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Monitor de Estrutura de Dados</h6>
            <FaBriefcase className={styles.icon} />
            <p>2019</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>
              Monitor de estrutura de dados com carga horária de 600h,
              monitorias em algoritmos de listas (ordenadas, encadeadas),
              pilhas, filas, árvores (AVL, B), busca e ordenação e suas
              respectivas aplicações.
            </p>
          </div>
        </div>
        {/* fim row */}
      </div>
      <div id="educacao">
        <h4>Educação</h4>
        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>MBA em Engenharia de Software</h6>
            <FaGraduationCap className={styles.iconE} size="1.35em" />
            <p>Pós-graduando em Engenharia de Software</p>
            <p>2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Tecnológica Federal do Paraná</h6>
            <p>
              Métodos ágeis de desenvolvimento de software; avaliação e melhoria
              de processo de software; gestão de processos de negócio; gestão de
              pessoas e liderança; padrões de projeto e arquitetura de software;
              gestão de requisitos de software; gestão de projetos de software;
              planejamento e gestão de testes de software; gestão de
              configuração de software; métricas e estimativas de projetos de
              software.
            </p>
          </div>
        </div>
        {/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Governança de TI</h6>
            <FaGraduationCap className={styles.iconE} size="1.35em" />
            <p>Pós-graduado em Governaça de TI</p>
            <p>09/2022</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Faculdade Educamais - UNIMAIS</h6>
            <p>
              Gestão estratégica corporativa e de TI; Gestão de segurança Da
              informação - normas 27001-27002 e 27005; legislação aplicada à
              informação digital; gestão de projetos - PMBOK; sistemas de
              informação em governança de TI; gestão de processos - Cbok; gestão
              de serviços itil, Iso 20000 e continuidade de negócios e serviços
              de ti gestão de qualidade De Software; gestão de TI Cobit.
            </p>
          </div>
        </div>
        {/* fim row */}

        <div className={`row justify-content-center ${styles.profEdu}`}>
          <div className={`col-4 ${styles.colLeft}`}>
            <h6>Engenharia de Computação</h6>
            <FaGraduationCap className={styles.iconE} size="1.35em" />
            <p>Graduado em Engenharia de Computação</p>
            <p>2015-2021</p>
          </div>
          <div className={`col-4 ${styles.colRight}`}>
            <h6>Universidade Federal de Mato Grosso</h6>
            <p>
              Engenharia; algoritmos e estrutura de dados; projeto e análise de
              algoritmos; circuitos e eletronica; banco de dados;
              microcontroladores e sistemas embarcados; redes de computadores;
              inteligência artificial; instrumentação e automação industrial;
              sinais e sistemas, processamento de sinais.
            </p>
          </div>
        </div>
        {/* fim row */}

        <div className={`row justify-content-center ${styles.profEduFinal}`}>
          <div className={`col-4 ${styles.language}`}>
            <h6>Languages</h6>
            <p>Português - Nativo</p>

            <p>Inglês - Intermediário</p>
            <p>Espanhol - Básico</p>
          </div>
          <div className={`col-4 ${styles.hobbie}`}>
            <h6>Hobbies</h6>
            <p>
              Amo tocar guitarra, ouvir músicas, e curtir uma gameplay com minha
              esposa nos horários vagos.
            </p>
          </div>
          <div className={`col-4 ${styles.profit}`}>
            <h6>Non profit</h6>
            <p>
              Professor voluntário de Física Mecânica no projeto de extensão
              EduCursinho da UFMT.
            </p>
          </div>
        </div>
        {/* fim row */}
      </div>
    </div>
  );
}
