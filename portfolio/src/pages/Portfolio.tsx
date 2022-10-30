import { AiFillGithub } from "react-icons/ai";
import Card from "../Card";
import Layout from "../Layout";

function Portfolio() {
  return (
    <Layout>
      <div className="container portfolio-container">
        <h3 className="portfolio-title">Portfolio</h3>
        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
           <Card/>
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
