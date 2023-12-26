import React from "react";
import styles from "./Hello.module.scss";
import Input from "../Input/Input.tsx";
import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Привет</div>
      <div className={styles.desc}>
        <div className={styles.info}>Нам нужно немного узнать о тебе </div>
        <Link to="/" className={styles.link}>
          Узнать подробнее
        </Link>
      </div>
      <div className={styles.inputs}>
        <div className={styles.top}>
          <Input change={(e) => console.log(e)} placeholder="Фамилия" />
          <Input change={(e) => console.log(e)} placeholder="Имя" />
        </div>
        <Input change={(e) => console.log(e)} placeholder="Номер телефона" />
      </div>
      <div className={styles.btns}></div>
    </div>
  );
}
