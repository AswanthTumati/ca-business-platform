import { Card, Col, Container, Row } from "react-bootstrap";

const services = [
  "Income Tax Filing",
  "GST Registration",
  "GST Returns",
  "Accounting",
  "Company Registration",
  "ROC Filing",
  "Audit",
  "Business Consultancy",
];

function Services() {
  return (
    <Container className="py-5">

      <h1 className="mb-4">
        Our Services
      </h1>

      <Row>

        {services.map((service) => (

          <Col
            md={4}
            className="mb-4"
            key={service}
          >

            <Card className="h-100">

              <Card.Body>

                <Card.Title>

                  {service}

                </Card.Title>

                <Card.Text>
                  Professional {service} services for businesses and individuals.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Services;