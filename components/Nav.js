import classes from "../styles/Nav.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState, useContext, useEffect } from "react";
import MovieContext from "../store/movieContext";
import Image from "next/image";

const Nav = () => {

  const { inputValue, value } = useContext(MovieContext);

  const [clicked, setClicked] = useState();
  const router = useRouter();

  const formSubmit = (e) => {
    e.preventDefault();
  };


  const myLoader = ({ src }) => {
    return "https://www.pngmart.com/files/13/Avengers-A-Letter-Logo-Transparent-PNG.png";
  };
  useEffect(() => {
    clicked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [clicked]);
  /*kad se nav otvori da ne mozemo da skrolujemo kad je otvorena*/

  return (
    <>
      <nav className={classes.nav}>
        <Image
          loader={myLoader}
          unoptimized
          src="https://www.pngmart.com/files/13/Avengers-A-Letter-Logo-Transparent-PNG.png"
          alt="FONT-AWESOME ICON"
          width={80}
          height={80}
        />
        {/* da nema ovog div-a ispod ne mozemo hamburget napraviti jer ovako mozemo samo ovaj div display none ne moramo cijeli nav */}
        <div
          className={
            clicked ? classes.displayHamburgerMenu : classes.hideHamburgerMenu
          }
        >
          <Link href="/">
            <a
              className={
                router.pathname === "/" ? classes.active : classes.link
              }
            >
              Home
            </a>
          </Link>
          <Link href="/movies">
            <a
              className={
                router.pathname === "/movies" ? classes.active : classes.link
              }
            >
              Movies
            </a>
          </Link>
          {/* <Link href="/news">
            <a
              className={
                router.pathname === "/news" ? classes.active : classes.link
              }
            >
              News
            </a>
          </Link> */}
          <Link href="/about">
            <a
              className={
                router.pathname === "/about" ? classes.active : classes.link
              }
            >
              About
            </a>
          </Link>
          <Link href="/watchlist">
            <a
              className={
                router.pathname === "/watchlist" ? classes.active : classes.link
              }
            >
              Watch List
            </a>
          </Link>
        </div>
        <form onClick={formSubmit} className={classes.navForm}>
          <button className={classes.searchIcon} type="submit">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
          <input
            value={value ? value : ""}
            autoFocus={router.pathname === "/movies"} 
            onChange={inputValue}
            onClick={() => router.push("/movies")}
            placeholder="search for movie..."
          />
        </form>

        {/* <FontAwesomeIcon onClick={() => setClicked(!clicked)} className={clicked ? classes.hamburgerButtonClicked : classes.hamburgerButton} icon={clicked ? faTimes : faBars}></FontAwesomeIcon> */}

        <div
          onClick={() => setClicked(!clicked)}
          id={classes.hamburgerButton}
          className={clicked ? classes.open : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
