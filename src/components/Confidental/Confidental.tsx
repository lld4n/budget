import styles from "./Confidental.module.scss";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Confidental() {
  return (
    <Link to="/about" className={styles.wrapper}>
      <div className={styles.icon}>
        <ShieldCheck color="#ffffff" />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Мы не сохраняем ваши личные данные</div>
        <div className={styles.subtitle}>Нажмите, чтобы узнать подробнее</div>
      </div>
    </Link>
  );
}
