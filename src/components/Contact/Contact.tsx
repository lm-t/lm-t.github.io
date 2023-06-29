import {
	Container, Row
} from "react-bootstrap";

function Contact() {
    return(
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <p className="contact-contents">If you would like to get a hold of me please fill out the form or connect with me through <a href="https://linkedin.com/in/luis-torres-tech">Linkedin</a>. Thank You!</p>
                </Row>
                <Row style={{ justifyContent: "center", padding: "70px" }}>
                    <form action="https://send.pageclip.co/SWfLeZztht551EGOu9ellJkrRPq6SmdX" className="pageclip-form" method="post">

                        <input className="form-control" type="text" name="name" placeholder="John Doe"/>
                        <input className="form-control" type="email" name="email" placeholder="John@example.com" />

                        <button type="submit" className="btn btn-primary pageclip-form__submit">
                            <span>Send</span>
                        </button>
                    </form>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;