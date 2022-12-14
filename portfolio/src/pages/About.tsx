import React from "react";
import Layout from "../Layout";
import image1 from "../assets/images/my_picture.jpeg";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import {skills,interest} from "../mockdata"


function About() {
  return (
    <Layout>
      <section className="container pt-4 about-container">
        <div className="content">
          <img src={image1} />
          <h4 className="my-name">
            <span>Idoko</span> Agada Jerry
          </h4>
          <h3 className="my-address">Lagos,Nigeria</h3>
          <h3 className="hobby">Software developer</h3>
          <div className="icon-container mt-3">
            <a href="mailto:idoko.jerry@hotmail.com">
              <AiOutlineMail />
            </a>
            <a href="https://www.github.com/agadajerry">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/idoko-agada-jerry-8b6886166/details/experience/">
              <AiFillLinkedin />
            </a>
            <a>
              <BsLink45Deg />
            </a>
          </div>
        </div>
      </section>
      <div className="container mt-5 about-me-container">
        <h3 className="title">About me</h3>
        <p>Hey, I'm Jerry! Nice meeting me here on the internet.</p>
        <p>
          Life and the world around us is so much bigger and deep than we can
          ever fully imagine. I'm thankful to have found a few areas that I am
          passionate about, intrigued by and find meaningful.
        </p>
        <p>
          I enjoy thinking and questioning. It's how you get to the root to
          really learn and understand things in all areas of life. I believe
          that work was designed as a good thing, both for others and ourselves.
          I am a lover of all things tech. I'm passionate about building great
          software that improves the lives of those around me. I'm also a big
          fan of learning and sharing what I learn with others. I'm always
          looking for new opportunities to learn and grow. If you have any
          questions or just want to say hi, feel free to reach out. I'd love to
          hear from you!
        </p>
        <i className="conclusion">Thanks for stopping by!</i>
      </div>
      <section className="container mt-5 skills-container text-center">
        <div className="row gx-4">
          <div className="col-md-6 skill-content">
            <h3 className="title">Skills</h3>
            <p>Related to software development</p>
            <div className="skill-items">
              {skills?.map((val: any,index:number) => (
                  <span className={`icon ${val.color}`} key={index}>
                    {val.icon} {val.name}
                  </span>
             
              ))}
            </div>
          </div>
          <div className="col-md-6 skill-content">
          <h3 className="title">Interest</h3>
          <p> A few other things I occupy myself with...</p>
            <div className="skill-items">
              {interest?.map((val: any,index:number) => (
                  <span className={`icon ${val.color}`}  key={index}>
                    {val.icon} {val.name}
                  </span>
              ))}
            </div>
          </div>
      
        </div>
      </section>
    </Layout>
  );
}

export default About;
