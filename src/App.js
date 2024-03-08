import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import CarouselComponent from "./components/CarouselComponent";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <CarouselComponent />
      <span id="about-scroll"></span>
      <Container className="mt-5">
        <Row className="mb-3">
          <h1 className="text-center">ABOUT ME</h1>
          <Col md="2"></Col>
          <Col>
            <p>
              Saya adalah seorang backend developer berusia 22 tahun dengan
              pengalaman 4 tahun di PT. Paramadaksa Teknologi Nusantara.
              Portofolio saya mencakup proyek-proyek pengembangan aplikasi web
              dan layanan backend untuk berbagai kebutuhan bisnis. Saya fokus
              pada kode bersih, manajemen basis data, dan integrasi layanan
              pihak ketiga. Di luar pekerjaan, saya aktif bermain futsal dan
              badminton, memperkuat keterampilan kepemimpinan dan kerja tim.
              Saya siap memberikan kontribusi yang signifikan dalam setiap
              proyek dengan dedikasi dan keahlian teknis yang saya miliki.
            </p>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
      <span id="skills-scroll"></span>
      <Parallax
        blur={15}
        bgImage={require("./13.jpg")}
        bgImageAlt="the cat"
        strength={1000}
        bgHeight={"500px"}
      >
        <Container className="mt-5" id="skills">
          <Row className="text-center mb-5">
            <h1>SKILLS</h1>
          </Row>
          <Row className="justify-content-center">
            <Col md="2" sm="12" className="mb-5">
              <img
                alt="Client 1"
                src="img/mysql.png"
                style={{ maxWidth: "100%" }}
              />
            </Col>
            <Col md="2" sm="12" className="mb-5">
              <img
                alt="Client 2"
                src="img/java.png"
                style={{ maxWidth: "100%" }}
              />
            </Col>
            <Col md="2" sm="12" className="mb-5">
              <img
                alt="Client 3"
                src="img/go-lang.png"
                style={{ maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Parallax>
      <span id="projects-scroll"></span>
      <Row className="text-center pb-5">
        <h1 className="mt-5">PROJECTS</h1>
        <CardComponent
          image={"img/1.jpg"}
          title={`ATM SERVICE PROVIDER`}
          detail={"Penyedia Layanan Mesin ATM"}
        />
        <CardComponent
          image={"img/2.jpg"}
          title={"CCTV SERVICE PROVIDER"}
          detail={"Penyedia Layanan CCTV"}
        />
        <CardComponent
          image={"img/12.jpg"}
          title={"NETWORK INSTALLATION"}
          detail={"Penyedia Instalasi Jaringan"}
        />
        <CardComponent
          image={"img/13.jpg"}
          title={"WEB DEVELOPMENT"}
          detail={"Penyedia Layanan Web"}
        />
      </Row>
      <span id="contact-scroll"></span>
      <Row className="pb-5" id="contact">
        <h1 className="text-center my-3">CONTACT ME</h1>
        <Col lg="5" md="5" sm="12">
          <Col lg="6" className="ms-auto">
            <Card
              bg="primary"
              text="light"
              className="mx-auto p-2"
              style={{ width: "90%" }}
            >
              <Card.Body>
                <Card.Title className="text-center">
                  <h2>CONTACT</h2>
                </Card.Title>
                <Card.Text>
                  <i className="bi bi-telephone"></i><span className="ms-3">08123456789</span>
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-envelope"></i><span className="ms-3">awan1399@gmail.com</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" className="ms-auto">
            <Card className="mx-auto my-3" style={{ width: "90%" }}>
              <Card.Title className="text-center">
                <i className=""></i>
              </Card.Title>
              <Card.Header>
                <h2>SOCIAL MEDIA</h2>
              </Card.Header>
              <Card.Header>
                <i className="bi bi-github"></i>
                <a
                  href="https://www.github.com/anggiirawan13"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#000"
                  }}
                >
                  <span className="ms-3">Anggi Irawan</span>
                </a>
              </Card.Header>
              <Card.Header>
                <i className="bi bi-instagram"></i>
                <a
                  href="https://www.instagram.com/anggiirawan13"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <span className="ms-3">Anggi Irawan</span>
                </a>
              </Card.Header>
              <Card.Header>
                <i className="bi bi-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/anggi-irawan"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <span className="ms-3">Anggi Irawan</span>
                </a>
              </Card.Header>
            </Card>
          </Col>
        </Col>
        <Col lg="5" md="5" sm="12">
          <Card className="mx-auto" style={{ width: "90%" }}>
            <Form className="p-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="fullname" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="08123456789" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button type="button">
                <i className="bi bi-send"></i> Send
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      <FooterComponent />
    </>
  );
}

export default App;
