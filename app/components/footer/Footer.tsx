import { getCurrentYear } from '@/app/utils/GetCurrentYear';

import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <div className={styles.container}>
      <p className={styles.contactText}>
        Contact:&nbsp;
        <a className={styles.contactLink} href="mailto:janzaion@gmail.com">
          janzaion@gmail.com
        </a>
      </p>
      <p className={styles.footerText}>
        ©&nbsp;
        {currentYear}
        &nbsp;ChordPrinter. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
