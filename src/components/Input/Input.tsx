import React from "react";
import styles from "./Input.module.scss";

export default function Input({
  change,
  placeholder,
}: {
  change: (s: string) => void;
  placeholder: string;
}) {
  const input = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");
  const [place, setPlace] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <input
        autoComplete="none"
        type="text"
        className={place ? styles.input + " " + styles.active : styles.input}
        ref={input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          change(e.target.value);
        }}
        onFocus={() => {
          if (place !== placeholder) {
            setValue(place);
            setPlace(placeholder);
          } else {
            setPlace("");
            setValue("");
          }
        }}
        onBlur={() => {
          if (value) {
            setPlace(value);
            setValue("");
          } else {
            setPlace("");
          }
        }}
      />
      <div
        className={styles.placeholder}
        onClick={() => {
          if (input.current) {
            input.current.focus();
          }
        }}
      >
        {place ? place : placeholder}
      </div>
    </div>
  );
}
