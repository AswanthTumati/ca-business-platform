import { Card, Container } from "react-bootstrap";

const testimonials = [
  {
    name: "Client One",
    review: "Excellent CA services."
  },
  {
    name: "Client Two",
    review: "Very professional and responsive."
  },
  {
    name: "Client Three",
    review: "Highly recommended."
  },
];

function Testimonials() {
  return (
    <Container className="py-5">

      <h1 className="mb-4">
        Testimonials
      </h1>

      {testimonials.map((item, index) => (

        <Card
          className="mb-3"
          key={index}
        >

          <Card.Body>

            <p>{item.review}</p>

            <strong>{item.name}</strong>

          </Card.Body>

        </Card>

      ))}

    </Container>
  );
}

export default Testimonials;