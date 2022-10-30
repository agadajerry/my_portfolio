import { AiFillGithub } from "react-icons/ai";
import ExperienceCard from "../ExperienceCard";
import Layout from "../Layout";

function Experiences() {
  return (
    <Layout>
      <div className="experiences-container">
        <h3 className="experiences-title">Experiences</h3>
        <div className="row g-2 row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
           <ExperienceCard/>
        </div>
      </div>
    </Layout>
  );
}

export default Experiences;
