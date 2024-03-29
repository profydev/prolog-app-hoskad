import React from "react";
import styles from "./spinner.module.scss";
export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <svg
        width="1160git "
        height="300"
        viewBox="0 0 1160 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.spinner}
      >
        <path
          d="M609 150C609 153.808 608.25 157.579 606.793 161.098C605.335 164.616 603.199 167.813 600.506 170.506C597.813 173.199 594.616 175.335 591.098 176.793C587.579 178.25 583.808 179 580 179C576.192 179 572.421 178.25 568.902 176.793C565.384 175.335 562.187 173.199 559.494 170.506C556.801 167.813 554.665 164.616 553.207 161.098C551.75 157.579 551 153.808 551 150C551 146.192 551.75 142.421 553.207 138.902C554.665 135.384 556.801 132.187 559.494 129.494C562.187 126.801 565.384 124.665 568.902 123.207C572.421 121.75 576.192 121 580 121C583.808 121 587.579 121.75 591.098 123.207C594.616 124.665 597.813 126.801 600.506 129.494C603.199 132.187 605.335 135.384 606.793 138.902C608.25 142.421 609 146.192 609 150L609 150Z"
          stroke="#F9F5FF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M580 121C583.808 121 587.579 121.75 591.098 123.207C594.616 124.665 597.813 126.801 600.506 129.494C603.199 132.187 605.335 135.384 606.793 138.902C608.25 142.421 609 146.192 609 150"
          stroke="#7F56D9"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
