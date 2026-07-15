import { Card, Col, Container, Row } from "react-bootstrap";

const services = [
  "Income Tax",
  "GST Services",
  "Company Registration",
  "Accounting",
  "Audit",
  "ROC Compliance",
];

function ServicesPreview() {
  return (
    <section className="bg-light py-5">
      <Container>

        <h2 className="text-center mb-4">
          Our Services
        </h2>

        <Row>

          {services.map((service) => (

            <Col
              md={4}
              className="mb-4"
              key={service}
            >

              <Card className="h-100 shadow-sm">

                <Card.Body>

                  <Card.Title>

                    {service}

                  </Card.Title>

                  <Card.Text>
                    Professional and reliable {service} services.
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default ServicesPreview;