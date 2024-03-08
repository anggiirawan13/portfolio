import { Card, Col } from "react-bootstrap";

function CardComponent({ image, title, detail }) {
  return (
    <Col lg="3" md="3" sm="12">
    <Card className="mx-auto mt-2" style={{ width: "18rem"}} >
    <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">
          {detail}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default CardComponent;
