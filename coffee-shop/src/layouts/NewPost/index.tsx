import react from "react";
import Link from "next/link";

import Image from "next/image";

import styles from "./NewPost.module.css";
import Entry from "../../components/Entry";
// import Post from "../../components/Post";

type Props = {
  src?: string;
  alt?: string;
  text?: string;
};

const NewPost = ({ src = "", alt = "", text = "", newsEventsData }) => {
  const { id, image, date, title, description, note } = newsEventsData;

  return (
    <div className={styles.newPost}>
      <div className="container">
        <Link href={`/news/[id]`} as={`/news/${id}`}>
          <div className={`${styles.post} row`}>
            <div className="col-md-6">
              <Image
                className=""
                src={image.src}
                alt={image.alt}
                width={552}
                height={322}
                objectFit="cover"
              />
            </div>
            <div className="col-md-6">
              <Entry date={date} title={title} text={description} note={note} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewPost;
