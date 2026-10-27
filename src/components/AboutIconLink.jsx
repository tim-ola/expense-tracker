import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <Link
      className="about-link"
      aria-label="About"
      to="/about"
      style={{ textDecoration: "none", color: "var(--text)" }}
    >
      <FaQuestion />
    </Link>
  );
}

export default AboutIconLink;
