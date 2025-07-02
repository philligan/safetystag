import Graphic from "./graphic.component";
import styles from "./hero.module.css";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";

const HeroInfo = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className={styles.heroInfo}>
        <span className={styles.heroPill}>
          <HiCalendar />
          4-6 July 2025
        </span>
        <span className={styles.heroPill}>
          <HiLocationMarker />
          Amsterdam
        </span>
      </div>
    </div>
  );
};

const HeroGraphic = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Graphic />
    </div>
  );
};

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroHeader}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Safety Stag</h1>
          <span className={styles.heroStrap}>
            Safety First. Followed Closely by Questionable Decisions.
          </span>
          <HeroInfo className={styles.heroInfoDesktop} />
        </div>
        <HeroGraphic className={styles.heroGraphicMobile} />
      </div>
      <HeroGraphic className={styles.heroGraphicDesktop} />
      <HeroInfo className={styles.heroInfoMobile} />
    </header>
  );
};

export default Hero;
