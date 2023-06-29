import {
	Container, Row, Col
} from "react-bootstrap";
import {
    FaPython,
    FaGolang,
    FaJava,
    FaHtml5,
    FaCss3,
    FaJs,
    FaLinux,
    FaApple,
    FaWindows,
    FaDocker,
    FaGitAlt,
    FaJira,
    FaGitlab,
    FaGithub
} from "react-icons/fa6"

import { 
    SiAnsible,
    SiCisco,
    SiJunipernetworks,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPrometheus,
    SiTerraform,
    SiCplusplus 
} from "react-icons/si";

function Skills() {
    return(
        <Container fluid className="skills-section">
            <Container>
                <Row style={{ justifyContent: "center", paddingTop: "70px" }}><h1 className="project-heading">Languages</h1></Row>
                <Row style={{ justifyContent: "center"}}>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaPython/></div>
                        <p>Python</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaGolang/></div>
                        <p>Go</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><SiCplusplus/></div>
                        <p>C++</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaJava/></div>
                        <p>Java</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaHtml5/></div>
                        <p>HTML</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaCss3/></div>
                        <p>CSS</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaJs/></div>
                        <p>JavaScript</p>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "70px" }}><h1 className="project-heading">Operating Systems</h1></Row>
                <Row style={{ justifyContent: "center"}}>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaLinux/></div>
                        <p>Linux</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <div className="tech-icons-icon"><FaApple/></div>
                        <p>MacOS</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiCisco/></div>
                        <p>Cisco IOS</p>
                    </Col>
                    {/* <Col xs={4} md={2} className="tech-icons">
                        <img src={aristaImg} alt="" box-sizing="border-box" />
                        Arista OS
                    </Col> */}
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiJunipernetworks/></div>
                        <p>Juniper OS</p>
                    </Col>
                    {/* <Col xs={4} md={2} className="tech-icons">
                        Palo Alto Firewall OS
                    </Col> */}
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaWindows/></div>
                        <p>Windows</p>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "70px" }}><h1 className="project-heading">DevOps</h1></Row>
                <Row style={{ justifyContent: "center"}}>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaDocker/></div>
                        <p>Docker</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaGitAlt/></div>
                        <p>Git</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaJira/></div>
                        <p>Jira</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiTerraform/></div>
                        <p>Terraform</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaGitlab/></div>
                        <p>Gitlab</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><FaGithub/></div>
                        <p>Gitlab</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiKubernetes/></div>
                        <p>Kubernetes</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiPrometheus/></div>
                        <p>Prometheus</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiAnsible/></div>
                        <p>Ansible</p>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingTop: "70px" }}><h1 className="project-heading">Databases</h1></Row>
                <Row style={{ justifyContent: "center"}}>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiMongodb/></div>
                        <p>MongoDB</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiPostgresql/></div>
                        <p>Postgres</p>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <div className="tech-icons-icon"><SiMysql/></div>
                        <p>Mysql</p>
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <h1 className="project-heading">Experiences</h1>
                    <p>Installed linux on a chromebook laptop to learn about all the requirements needed to have a slimmed down Linux OS.</p>
                    <p></p>
                </Row>
            </Container> */}
        </Container>
    );
}

export default Skills;