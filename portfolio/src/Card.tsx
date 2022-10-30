import image1 from "./assets/images/image1.png";

const cardDetails = [
  {
    icon: image1,
    title: "Data and attendance management system",
    description: "A web application that helps to manage data and attendance of students and  staff in a school. State admin also use the moblile app to manage staff attendance and performance",
    tools: [
      "Node.js",
      "Express.js",
      "Typescript",
      "React.js",
      "MySQL",
      "Bootstrap",
    ],
    github:"private",
      live:"https://www.github.com/agadajerry"
  },
  {
    icon: image1,
    title: "E-Commerce",
    description: "E-commerce web applicaton for art and craft products.",
    tools: [
      "Node.js",
      "Express.js",
      "Typescript",
      "React.js",
      "MySQL",
      "Bootstrap",
    ],
    github:"private",
      live:"https://www.github.com/agadajerry"
  },
  {
    icon: image1,
    title: "Real time video chat",
    description: "Zoom app like application for video conference.",
    tools: [
      "Nest.js",
      "Typescript",
      "React.js",
      "Bootstrap",
      "HTML5",
      "CSS",
     
 
    ],
    github:"https://www.github.com/agadajerry",
    live:"https://www.github.com/agadajerry"
  },
  {
    icon: image1,
    title: "Twitter clone",
    description: " Twitter clone application ",
    tools: [
      "Node.js",
      "Express.js",
      "Typescript",
      "React.js",
      "Mongoddb",
      "Bootstrap",
      "HTML5",
      "CSS",
    ],
    github:"https://github.com/agadajerry/twitterClone",
    live:"https://github.com/agadajerry/twitterCloneFrontend"
  },
  {
    icon: image1,
    title: "Inventory management system",
    description: "Inventory management system for a pharmacy.",
    tools: [
      "Java",
      "Java swing",
      "MySQL",
      "JDBC",
    ],
    github:"https://github.com/agadajerry/hms",
    live:"https://github.com/agadajerry/hms"
  },
  {
    icon: image1,
    title: "Chemistry practical",
    description: "Chemistry practical application for secondary school students.",
    tools: [
      "Java",
      "Native Android",
      "HTML",
      "CSS",
    ],
    github:"https://github.com/agadajerry/ChemistryPracticalGuid",
    live:"https://github.com/agadajerry/ChemistryPracticalGuid"
  },
  {
    icon: image1,
    title: "Text scanner",
    description: "Text scanner application for scanning text from paper to digital format.",
    tools: [
      "Java",
      "Native Android",
    ],
    github:"https://github.com/agadajerry/TextScanner-android",
    live:"https://github.com/agadajerry/TextScanner-android"
  },
];
function Card() {
  return (
    <>
      {cardDetails.map((card: any, index: number) => (
        <div className="col portfolio-content">
          <div className="card">
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
            <div className="tools-users">
              {card.tools.map((tool: any, index: number) => (
                <div className="tools-holder">
                  <span className={`icon`}>{tool}</span>
                </div>
              ))}
            </div>

            <div className="card-body">
              <a href={card.github === "private" ? "/private-repo":card.github} className="card-link ">
               Github
              </a>
              <a href= {card.live} className="card-link">
              Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
