import Image from 'next/image';

import previewGif from '../../../public/images/chs1.gif';

import styles from './HowItWorks.module.css';

const HowItWorks = () => (
  <div className={styles.backgroundContainer}>
    <div className={styles.contentContainer}>
      <div className={styles.headerContainer}>
        <h2> Instant Chord Progressions</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          alt="Chordprinter preview"
          className={styles.images}
          height={547}
          src={previewGif}
          width={954}
        />
      </div>
      <div className={styles.textContainer}>
        <h3>Creating chord progressions has never been this easy:</h3>
        <ol type="1">
          <li>
            Select a clip in Ableton Live&apos;s session view or arrangement
            view.
          </li>
          <li>
            Edit the setup of Chordprinter to create the desired chord
            progression.
          </li>
          <li> Click &quot;Print&quot; to print the chord progression.</li>
        </ol>
      </div>
      <div className={styles.textContainer}>
        Generate basic triad progressions or advanced progressions composed of
        complex chords. Preview your progressions with any midi instrument or
        synth of your choice. Modify your progressions through advanced voicing
        algorithms and note-augmenting features. Get comfortable with an
        intuitive, easy to learn workflow. No music theory knowledge required to
        get started!
      </div>
      <div
        className={[styles.imageContainer, styles.secondImageContainer].join(
          ' ',
        )}
      >
        <Image
          alt="Chordprinter preview"
          className={styles.images}
          height={547}
          src={previewGif}
          width={954}
        />
      </div>
    </div>
  </div>
);

export default HowItWorks;
