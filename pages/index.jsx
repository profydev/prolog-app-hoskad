import { Routes } from "@config/routes";
import styles from "./index.module.scss";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <nav className={styles.navigation}>
          <div className={styles.linkContainer}>
            <a href={Routes.home}>Home</a>
            <a href={Routes.products}>Products</a>
            <a href={Routes.documentation}>Documentation</a>
            <a href={Routes.pricing}>Pricing</a>
          </div>
          <button className={styles.dashboardButton}>
            <a href={Routes.projects} className={styles.dashboardLink}>
              Open Dashboard
            </a>
          </button>
        </nav>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
