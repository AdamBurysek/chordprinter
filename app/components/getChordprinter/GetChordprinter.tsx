import styles from './GetChordprinter.module.css';
import Testimonial from './Testimonial';

const GetChordprinter = () => (
  <div className={styles.backgroundContainer}>
    <div className={styles.sectionContainer}>
      <Testimonial />
      <div className={styles.getContainer}>
        <h3>Get ChordPrinter</h3>
        <p>Reqs:</p>
        <ol>
          <li>
            Ableton Live 10/11, Suite licence or higher (with Max 8 or higher)
          </li>
          <li>MacOS or Windows</li>
          <li>Installation size: 1.15 MB</li>
        </ol>
        <div className={styles.buttonContainer}>
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
        </div>
      </div>
    </div>
  </div>
);

export default GetChordprinter;
