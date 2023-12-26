// import React from "react";
import styles from "./Prepare.module.scss";
import Confidental from "../../components/Confidental/Confidental.tsx";
import Hello from "../../components/Hello/Hello.tsx";

export default function Prepare() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.prepare}>
        <Confidental />
        <Hello />
        <div></div>
      </div>
    </div>
  );
}
