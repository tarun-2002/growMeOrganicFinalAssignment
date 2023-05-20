import { useEffect, useState } from "react";
import "../index.css"
function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setIsVisible(isVisible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className={`foot ${isVisible ? "" : "hidden"}`}>
      <p>© Tarun Jaiswal {year}</p>
    </footer>
  );
}

export default Footer;