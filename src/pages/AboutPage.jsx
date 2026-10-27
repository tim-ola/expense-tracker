import { FaHome } from "react-icons/fa";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h2>About this project</h2>
      <p className="text-start">
        This expense tracker app was developed by Tim Olushola for Techury Dev.
        <br />
        Version 1.1.0
      </p>
      <div className="text-start">
        <Link to="/" className=" home ">
          <FaHome />
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
