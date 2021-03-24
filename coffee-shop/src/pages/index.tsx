import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

import { navigationData } from "../constants";

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo url='' alt='' />

      <Navigation menu={navigationData} />
      {/* <Navigation menu={navigationData} classNames="" /> */}
    </div>
  );
}
