import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-primary text-white py-5">
      <Container className="text-center">
        <h1 className="display-4 fw-bold">
          Chartered Accountant Services
        </h1>

        <p className="lead mt-3">
          Income Tax | GST | Accounting | Audit | Business Registration
        </p>

        <Button
          as={Link}
          to="/contact"
          variant="light"
          size="lg"
          className="mt-3"
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
}

export default Hero;