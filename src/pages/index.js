
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.subheading}>WALLET COLLECTIONS</h3>
        <h1 className={styles.heading}>MILANESE PRESENTS</h1>

        <div className={styles.btn_row}>
          <button>
            WALLET
            <br /> COLLECTION
          </button>
          <button>PREMIUM BAGS</button>
        </div>
      </div>
      <h1 className={styles.mainheading}>STYLE WITH MACEDONA</h1>
    </div>
  );
}
