import Head from "next/head";
import Link from "next/link";

export default function FooterInfo() {
  return (
    <>
      {/* <Head>
        <title>Footer page</title>
      </Head> */}

      <footer className="pt-4 my-md-5 pt-md-5 ">
        <div className="row">
          <div className="col-4 col-md">
            <aside className="widget">
              <h3>About Us</h3>
              <div>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </p>
                <p>
                  <span>Hello@theme.org</span>
                </p>
                <p>
                  <span>+(84)123456789</span>
                </p>
              </div>
            </aside>
          </div>
          <div className="col-4 col-md">
            <aside className="widget">
              <h3>for business</h3>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a>office coffee</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>food service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>affiliate program</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-4 col-md">
            <aside className="widget">
              <h3>fllow us</h3>
              <div>
                <p>Follow Origin on the following social network sites.</p>
              </div>
            </aside>
          </div>
        </div>

        <div className="coppyright">
          <p>
            Copyright &copy; 2015
            {/* <Link href="http://themeforest.net/user/mtheme_market">
              <a>mTheme</a>. All Rights Reserved.
            </Link> */}
          </p>
        </div>
      </footer>
    </>
  );
}
