import styles from '../../styles/Home.module.scss';
import format from 'date-fns/format';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from 'react-icons/hi'

import React from 'react'

export default function Footer() {

  const date = format(new Date(), 'yyyy');

  return (
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
  )
}
