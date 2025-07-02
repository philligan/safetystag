import styles from "./page.module.css";
import Hero from "@/components/hero";
import Agenda from "@/components/agenda";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />        
        <Agenda />
      </main>
      <footer className={styles.footer}>
        &copy; 2025 Safety Stag. All Rights Reserved.
      </footer>
    </div>
  );
}
