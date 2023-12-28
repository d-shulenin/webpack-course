import { Link } from "react-router-dom";
import "./homepage.scss";

const Homepage = () => {
  return (
    <section className="homepage">
      <div>
        <h2 className="homepage__subtitle">
          With an outstanding style, only for you
        </h2>
        <h1 className="homepage__title">Exclusively designed for you</h1>
      </div>
      <div className="homepage__cta">
        <div>
          <Link to="/women">For Her</Link>
        </div>
        <div>
          <Link to="/men">For Him</Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
