import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import { submitEnquiry } from "../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await submitEnquiry(formData);

      setSuccess(response.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container className="py-5">

      <Row>

        <Col lg={7}>

          <h1 className="mb-4">
            Contact Us
          </h1>

          {success && (
            <Alert variant="success">
              {success}
            </Alert>
          )}

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>

              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>

              <Form.Control
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>

              <Form.Control
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>

          </Form>

        </Col>

        <Col lg={5}>

          <div className="mt-5 mt-lg-0">

            <h3>Office Address</h3>

            <p>
              Your Office Address
            </p>

            <h5>Email</h5>

            <p>
              info@example.com
            </p>

            <h5>Phone</h5>

            <p>
              +91 9876543210
            </p>

          </div>

        </Col>

      </Row>

      <hr className="my-5" />

<iframe
  title="Google Map"
  src="https://www.google.com/maps?q=Hyderabad&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
/>

    </Container>
  );
}

export default Contact;