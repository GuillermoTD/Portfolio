import { useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const navbarRef = useRef(null);
  const headerRef = useRef(null)

  function ToggleMenu() {
    navbarRef.current.classList.toggle("MenuToggleActive");
  }

// animation for menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        headerRef.current.classList.add("Header_Scroll");
      } else {
        headerRef.current.classList.remove("Header_Scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Header" ref={headerRef}>
      <div className="Header_Top">
        <Link to="/">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Guillermo Tapia",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Link>
        <div className="Header_Toggle" onClick={ToggleMenu}>
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <nav className="Header_Links" ref={navbarRef}>
        <Link className="Header_Links_Item" to="/projects">
          Projects
        </Link>
        <Link className="Header_Links_Item" to="/about">
          About
        </Link>
        <Link className="Header_Links_Item" to="/contacts">
          Contact
        </Link>
      </nav>
    </div>
  );
};
export default Header;
