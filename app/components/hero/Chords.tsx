'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';

import styles from './Chords.module.css';

const animationDelays: number[] = [0, 0.25, 0.5, 0.75];
const chordNumber: number[] = [1, 2, 3];

const Chords = () => (
  <div className={styles.container}>
    {animationDelays.map((delay) =>
      chordNumber.map((number) => (
        <motion.span
          key={`${number}-${delay}`}
          animate={{ opacity: 1 }}
          className={styles.chord}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25, delay }}
        />
      )),
    )}
  </div>
);

export default Chords;
