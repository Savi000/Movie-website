import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import MovieContext from "../store/movieContext";
import classes from "../styles/News.module.css";
import Image from "next/image";

/**NOT ACTIVE*/
const Article = ({ article }) => {
  const router = useRouter();
  const { author, title, content, urlToImage } = article;

  const { newsDetail } = useContext(MovieContext);

  const myLoader = ({ src }) => {
    return urlToImage;
  };
  console.log(urlToImage);
  return (
    <div className={classes.oneArticle}>
      {/* ne mozes ovdje display flex jer je samo jedna slika  treba da radis dje su sve odjednom odje isto kao da jednoj slici das display flex to nista ne znaci */}
      {urlToImage && (
        <Image
          unoptimized
          onClick={() => newsDetail(title, article)}
          loader={myLoader}
          className={classes.articleImage}
          src={urlToImage}
          alt="da li radi hmmmmm"
          width={200}
          height={200}
        />
      )}
      <p>{title}</p>
    </div>
  );
};

export default Article;
