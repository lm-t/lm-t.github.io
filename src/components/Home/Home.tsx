import {
	Container,
	Row,
	Col
} from "react-bootstrap";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import homeBust from "../../assets/bust.jpg";

const disciplines = ['Infrastructure Engineer', 'Cloud Engineer', 'Security Engineer', 'Automation Engineer', 'Network Engineer'];

function Home() {
	let date = new Date();
  	let years_working = date.getFullYear() - 2017;

	const [disciplineIndex, setDisciplineIndex] = useState(0);
	useEffect(() => {
		const id = setTimeout(() => {
			setDisciplineIndex((disciplineIndex + 1) % disciplines.length);
		}, 2 * 1000);
		return () => {
			clearInterval(id);
		};
	  },[disciplineIndex, setDisciplineIndex]);

	const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);

	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Container className="home-content">
					<Row>
						<Col md={5} style={{ paddingBottom: 20 }}>
							<img src={homeBust} alt="home pic" className="rounded img-fluid" style={{maxHeight: "350px"}} />
						</Col>
						<Col md={7} className="home-header">
								<h1 className="heading-name">
									<strong className="main-name">Luis Torres</strong>
								</h1>
								{/* <motion.div>
									<motion.span className="disciplines" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: disciplineIndex * 0.1 }}>
										{disciplines[disciplineIndex]}
									</motion.span>
								</motion.div> */}
								<AnimatePresence>
									<motion.span className="disciplines" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0}} key={currentDiscipline} transition={{y: { type: "spring", stiffness: 300, damping: 200 }, opacity: { duration: 0.3 }}}>
									{/* <motion.span className="disciplines" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}} key={disciplineIndex} transition={{ opacity: { duration: 0.5 }}}> */}
										{disciplines[disciplineIndex]}
									</motion.span>
								</AnimatePresence>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="home-about-section" id="about">
				<Container>
					<Row>
						<Col md={8} className="home-about-description">
							<p className="home-about-body">
								I've been working in the tech industry for about {years_working} years now in various disciplines within engineering and security.
								As a successful technologist, I have helped many organization large and small with operationalizing their security. 
								<br />
								My focus is to work on interesting technology that will make the world a better place for all. 
								I bring unique perspectives, knowledge, and my ability to quickly learn what is needed to make systems come to fruition.
								<br />
								Feel free to look around and learn more about me or my skills ☻
							</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;