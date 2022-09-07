import React from "react";
// import { ProjectDetails } from "./ProjectDetails";
import { Card, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Project.scss";
function Maz() {
  return (
    <div>
      <Col>
        <Row>
          <div className="project-card-details">
            <ProjectCard
              image="images/Project1.png"
              title="Project Network Dashboard"
              body="Using python flask and pysnmp to make network
              dashboard to config network devices"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image="images/notesflix.jpg"
              title="Project Mobile Chatapp using Flutter"
              body="Using Flutter and firebase to make chat Application"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image="images/notesflix.jpg"
              title="Project Natural Language Processing"
              body="Using python genism and TF-idf find Bag-of-words."
            />
          </div>
        </Row>
      </Col>
    </div>
  );
}

function ProjectCard(props) {
  return (
    <div>

        <Card style={{ width: "25rem",margin:"1rem" }} className="project-card">
          <Card.Body>
            <Card.Title className="project-title">{props.title}</Card.Title>
            <Card.Text className="project-body">{props.body}</Card.Text>
          </Card.Body>
        </Card>

    </div>
  );
}

export default Maz;
