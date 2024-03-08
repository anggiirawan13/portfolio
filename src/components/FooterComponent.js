import Card from "react-bootstrap/Card";

function FooterComponent() {
  return (
    <Card id="footer" className="bg-dark" data-bs-theme="dark">
      <Card.Header className="text-center mt-4">
        <p>Copyright &copy; 2024. Created With Love &hearts;.</p>
      </Card.Header>
    </Card>
  );
}

export default FooterComponent;
