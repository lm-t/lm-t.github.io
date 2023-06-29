import {
	Container, Row, Col
} from "react-bootstrap";
import aboutImg from "../../assets/about-img.png";
import datacenterImg from "../../assets/datacenter.jpg";
import securityImg from "../../assets/cybersecurity.webp";

function About() {
    return (
      <Container fluid className="about-section">
        <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About Me
                </h1>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I'm life-long learner who has always been interested in how technology works. My curiosity has lead me to become involved in various aspects of the current software industry.  
                    With an engineering degree in Computer Science and Electrical Engineering, I have been able to gain unique perspectives which have allowed me to understand complex systems and come up with unique solutions.
                  </p>
                </blockquote>
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={aboutImg} alt="about" className="rounded img-fluid" />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", padding: "10px"}}>
            <Col
                md={5}
                style={{ paddingTop: "50px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={datacenterImg} alt="data center" className="rounded img-fluid" />
            </Col>
            <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "150px",
                  paddingBottom: "50px",
                }}
              >
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Through my work experience I have had the ability to travel across the world performing Data Center installations, designing data ingestion pipelines for network devices, and establishing a security baseline by building security controls across cloud infrastructure.
                  </p>
                </blockquote>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", padding: "10px"}}>
            <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "200px",
                  paddingBottom: "50px",
                }}
              >
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    What I love most about the work I do is seeing the satifasction from peers, colleagues, and managers when I'm helping organizations large and small to be better equiped the the tools, solutions, and understanding of their technologies. 
                    I'm looking for the next opportunity to assist in making the software solutions safe, reliable, and robust.
                  </p>
                </blockquote>
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={securityImg} alt="security" className="rounded img-fluid" />
              </Col>
            </Row>
        </Container>
      </Container>
    );
  }
  
  export default About;