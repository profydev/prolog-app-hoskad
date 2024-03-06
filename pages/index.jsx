import { Routes } from "@config/routes";
import Image from "next/image";
import styles from "./index.module.scss";
import * as Dialog from "@radix-ui/react-dialog";

const IssuesPage = () => {
  function handleMailSubmission() {
    window.location.href =
      "mailto:support@prolog.com?subject=Support&body=Please enter your message here";
  }

  return (
    <>
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
      </div>
      <Dialog.Root>
        <Dialog.Trigger className={styles.contactButton}>
          <Image
            src="/icons/message.svg"
            alt="Contact"
            width="24"
            height="24"
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.modalOverlay} />
          <Dialog.Content className={styles.modalContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12M44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12M44 12L24 26L4 12"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Dialog.Title className={styles.modalTitle}>
              Contact Us Via Email
            </Dialog.Title>
            <Dialog.Description className={styles.modalDescription}>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </Dialog.Description>
            <div className={styles.modalActions}>
              <Dialog.Close className={styles.modalCancel}>Cancel</Dialog.Close>
              <Dialog.Close
                onClick={handleMailSubmission}
                className={styles.modalEmail}
              >
                Open Email App
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default IssuesPage;
