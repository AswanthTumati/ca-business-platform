import { Card, Container } from "react-bootstrap";

function TestimonialsPreview() {
  return (
    <section className="py-5">
      <Container>

        <h2 className="mb-4">
          Testimonials
        </h2>

        <Card className="shadow-sm">

          <Card.Body>

            <p>
              "Excellent service with timely response. Highly recommended."
            </p>

            <strong>- Happy Client</strong>

          </Card.Body>

        </Card>

      </Container>
    </section>
  );
}

export default TestimonialsPreview;