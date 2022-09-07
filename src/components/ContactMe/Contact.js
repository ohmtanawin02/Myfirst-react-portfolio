import { Col, Row } from "react-bootstrap";
import "./Contact.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
            <a href="https://github.com/ohmtanawin02" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/profile.php?id=100075221682481" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-facebook"></i> Facebook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        <div className="contact-name">
        Email : tanawin_ohm@hotmail.com OR
        Tel : 0870029817
        </div>
      </Jumbotron>
    </div>
  );
};

export default Contact;