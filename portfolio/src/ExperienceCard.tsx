import React from "react";
import image1 from "./assets/images/image1.png";
import cbc from "./assets/images/cbc_logo.png";
import pupilate from "./assets/images/pupilate.jpeg";
import khumbaa from "./assets/images/khumbaa.svg";
import st_mary from "./assets/images/st_mary.jpeg";
import gtbsvg from "./assets/images/gtblogo.svg";

const cardDetails = [

  {
     icon: gtbsvg,
    title: "Full stack developer",
    description: "I am part of the team that developed chatbot using whatsapp, CRM as well as NLP. This is a GTB webservices that enable customer solve their problems. In this website below( bottom right) is the web widget for the chatbot",
    company: "GTB",
    address:"Lekki, Lagos Nigeria",
    date: "June 2023",
  },
  {
    icon: cbc,
    title: "Full stack developer",
    description: " I was part of a team that designed and developed Data and Attendance management system and I implemented APIs, creating react reusable components as well consuming the APIs.",

    company: "CBCEmea Gedu Tech",
    address:"Lekki, Lagos Nigeria",
    date: "March. 2022 - Present",
  },
  {
    icon: pupilate,
    title: "Full stack developer",
    description: "I worked in a team that developed learning management software as a service SaaS.",
    company: "Pupilate",
    address:"Vintage City Estate, 40 Ahmadu Bello Way, Garki 900103, Abuja Nigeria",
    date: "March 2021 - Feb. 2022",
  },
  {
    icon: khumbaa,
    title: "Full stack developer",
    description: "E-commerce web application for arts and craft products. I worked in a team that developed the application. I implemented APIs, created react reusable components as well consuming the APIs.",
    company: "Khumbaa",
    address:"Lagos Nigeria",
    date: "July 2020 - Nov. 2021",
  },
  {
    icon: st_mary,
    title: "Software developer",
    description: "I designed and implemented pharmaceutical and inventory management software for a hospital. I also worked as an ICT adminsitrator for the hospital.",
    company: "St. Mary Hospital,",
    address:"Benue State",
    date: "April 2019 - Nov. 2020",
  },

];
function Card() {
  return (
    <>
    {cardDetails.map((card:any, index:number)=>(
      <div className="card mb-3" key={index}>
        <div className="row experience-card">
          <div className="col-md-2">
            <img src={card.icon} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">
                {card.description}
              </p>
           
                <strong className="card-text">
                 {card.company} 
                </strong>
           
              <small className="text-muted"> {card.address}</small>
              <p className="card-text">
                <small className="text-muted">{card.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

    ))}
    </>
  );
}

export default Card;
