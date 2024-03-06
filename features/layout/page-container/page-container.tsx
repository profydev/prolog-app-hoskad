import Head from "next/head";
import { SidebarNavigation } from "../sidebar-navigation";
import styles from "./page-container.module.scss";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export function PageContainer({ children, title, info }: PageContainerProps) {
  const documentTitle = `ProLog - ${title}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.info}>{info}</div>
          {children}
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <span>Version: 14.5.1</span>
              <div className={styles.footerLinks}>
                <a href="#">Docs</a>
                <a href="#">API</a>
                <a href="#">Help</a>
                <a href="#">Community</a>
              </div>
              <div className={styles.logo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="34"
                  viewBox="0 0 23 34"
                  fill="none"
                >
                  <g clip-path="url(#clip0_19967_69)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 33.5V0.5H4V33.5H0Z"
                      fill="#219EBC"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 33.5L19 29.5L23 29.5L23 33.5L19 33.5Z"
                      fill="#219EBC"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2679 4.51786H6.93408V0.5H16.7411C18.1465 0.5 19.2858 1.63928 19.2858 3.04464V21.4318C19.2858 22.8372 18.1465 23.9765 16.7411 23.9765H6.93408V19.9586H15.2679V4.51786Z"
                      fill="#E63946"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19967_69">
                      <rect
                        width="23"
                        height="33"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
