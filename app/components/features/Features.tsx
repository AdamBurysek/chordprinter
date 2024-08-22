import Chords from '../hero/Chords';

import styles from './Features.module.css';

type Feature = {
  header: string;
  text: string;
};

const features: Feature[] = [
  {
    header: 'Easy to Use, but Rich with Features',
    text: 'Harness the power of randomness. Create chord progressions from up to 8 chords within a scale of your choice. Preview & print chords as fast as possible, to get to the desired vibe. Lock them in place once you are satisfied and tweak them further.',
  },
  {
    header: 'Set direction to the random generation',
    text: "Random doesn't mean chaos. Select whether you want to generate triads or 7th chords. Decide whether chords should repeat within a progression or not. Augment your chords with bass notes. Open them up to increase sonic variety.",
  },
  {
    header: 'Tweak voicing of each chord',
    text: "Don't just leave your chords in their basic position. Squish them to create the smoothest flow from one chord to another. Or choose from one of 24 voicing algorithms to push the voicing to the next level, at a click of a single button.",
  },
  {
    header: "Don't settle for basic triads",
    text: 'Use dozens of advanced chords to modify each chord in your progression. Give your track the unique vibe only advanced chords can.',
  },
  {
    header: 'Get comfortable with an easy-to-learn workflow',
    text: 'Toggle between basic and advanced views of Chordprinter. Get right down to business by modifying a few key features of your progression in basic, or get down and dirty with the advanced view and modify all the advanced stuff.',
  },
  {
    header:
      'Create your chords with the instrument you aim to use in your track',
    text: "No intermediate preview step necessary. Chordprinter interacts directly with Ableton's Live, which means that you are able to hear the final sound of your progression right away.",
  },
];

const Features = () => (
  <div className={styles.sectionContainer}>
    <div className={styles.chordContainer}>
      <Chords />
      <Chords />
    </div>
    <div className={styles.contentContainer}>
      <h2 className={styles.header}>Easy to Use, but Rich with Features</h2>
      <div className={styles.boxContainer}>
        {features.map((feature) => (
          <div key={feature.header} className={styles.box}>
            <p className={styles.text}>
              <b>{feature.header}</b>
              <br />
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.videoContainer}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
          src="https://www.youtube.com/embed/BuIXvKKtVSw?si=gsWLbb-qLo7Shsox"
          title="YouTube video player"
        />
      </div>
    </div>
  </div>
);

export default Features;
