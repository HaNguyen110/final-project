import Link from "next/link";

import styles from "./Footer.module.css";

type Item = {
  text: string;
};

type footerData = {
  title: string;
  items: Item[];
};

type Props = {
  footerData: footerData;
};

const Footer = ({ footerData }: Props) => {
  const { title, items } = footerData || {};
  console.log("footerData", footerData);

  return (
    <>
      <div className={styles.footer}>
        <footer className="container">
          <div className="row">
            <div className="col-md-4">
              <aside className="widget">
                <h3 className={styles.title}>{title}</h3>
                <div>
                  <p>{items}</p>
                </div>
              </aside>
            </div>

            {/* <div className={styles.copyright}>
              <p>Copyright &copy; 2015</p>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
