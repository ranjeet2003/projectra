import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Card,
} from "reactstrap";

//Import Images
import bg1 from "../../assets/images/bg-1.png";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section-2"
          id="home"
          style={{ background: `url(${bg1}) center center` }}
        >
          <Container>
            <Row className="vertical-content justify-content-center">
              <Col lg={{ size: 4 }}>
                <Card className="mx-auto p-4 rounded mt-5 mt-lg-0">
                  <div className="text-center">
                    {/* <p className="text-muted mb-2 font-13 text-uppercase">
                      Login To Projectra
                    </p> */}
                    <h5 className="form-title mb-4">Create Your Account</h5>
                  </div>
                  <Form className="registration-form">
                    <FormGroup className="mb-4">
                      <Label className="font-15">Your Name*</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Label className="font-15">Your Email*</Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=""
                        required
                      />
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label className="font-15">Mobile No.*</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder=""
                        required
                      />
                    </FormGroup>
                    <Button type="submit" color="primary" size="sm" block>
                      Get OTP <i className="mdi mdi-telegram ml-2 mb-4"></i>
                    </Button>
                    <FormGroup className="mb-3">
                      <Label className="font-15 mt-4">OTP*</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="otp"
                        placeholder=""
                        required
                      />
                    </FormGroup>
                    <Button type="submit" color="primary" size="sm" block>
                      Sign Up <i className="mdi mdi-login ml-2"></i>
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
