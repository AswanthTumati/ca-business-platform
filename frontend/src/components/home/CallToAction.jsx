import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-dark text-white text-center py-5">

      <Container>

        <h2>
          Need Professional Tax Consultation?
        </h2>

        <p>
          Contact us today and get expert financial guidance.
        </p>

        <Button
          as={Link}
          to="/contact"
          variant="warning"
        >
          Get In Touch
        </Button>

      </Container>

    </section>
  );
}

export default CallToAction;