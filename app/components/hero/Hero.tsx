'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import chAdvImage from '../../../public/images/chordprinterAdv.png';
import chBasImage from '../../../public/images/chordprinterBasic.png';

import Chords from './Chords';
import chordsStyles from './Chords.module.css';
import styles from './Hero.module.css';

const Hero = () => (
  <>
    <Chords />
    <div className={styles.container}>
      <div className={chordsStyles.container}>
        <motion.h1
          animate={{ opacity: 1 }}
          className={styles.title}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          ChordPrinter
        </motion.h1>
        <motion.p
          animate={{ x: 0, opacity: 1 }}
          className={styles.titleIntroducing}
          initial={{ x: -500, opacity: 0 }}
          transition={{ duration: 2, type: 'spring' }}
        >
          Introducing
        </motion.p>
        <motion.p
          animate={{ x: 0, opacity: 1 }}
          className={styles.titleInfo}
          initial={{ x: 500, opacity: 0 }}
          transition={{ duration: 2, delay: 1, type: 'spring' }}
        >
          Chord Progressions Just Became Easy
        </motion.p>
        <div className={styles.bottomContainer}>
          <Image
            alt="Chordprinter Advanced Image"
            className={styles.chAdvImage}
            priority
            src={chAdvImage}
          />
          <Image
            alt="Chordprinter Basic Image"
            className={styles.chBasImage}
            priority
            src={chBasImage}
          />
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Generate chord progressions instantly inside Ableton Live&apos;s
            clips. Create loops that vibe with this Max for Live device!
          </motion.div>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className={styles.buttonContainer}
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <a
              className={styles.button}
              href="https://www.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Try demo
            </a>
            <a
              className={styles.button}
              href="https://www.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Buy
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
