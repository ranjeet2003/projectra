import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/Lost-Found.jpg";
import feature2 from "../../assets/images/features/shortingly.jpg";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallFeatures1: [{ title: "Live" }, { title: "Support & Maintenece" }],
      smallFeatures2: [{ title: "Live" }, { title: "Support & Maintenece" }],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="Live Projects">
          <Container>
            <SectionTitle
              subtitle="Our Projects"
              title="Some previous projects developed by our students"
              desc="It will be as simple as occidental in fact, it will be Occidental."
            />

            <Row>
              <Col lg={5}>
                <div>
                  <FeatureBox
                    icon="file-text"
                    title="Lost-Found"
                    smallFeatures={this.state.smallFeatures1}
                    desc="A live project developed in MERN stack which matches the lost document of user with the found document database by performing OCR (Optical Character Recognition)."
                    link="https://lost-found-doc.herokuapp.com/"
                  />
                </div>
              </Col>

              <Col lg={5} sm={8} className="ml-lg-auto">
                <Card className="border border-light shadow-none mt-5 mt-lg-0">
                  <CardHeader className="border-0 bg-transparent">
                    <div>
                      <i className="mdi mdi-circle text-danger mr-1"></i>
                      <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
                      <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
                    </div>
                  </CardHeader>
                  <CardBody className="bg-light">
                    <div className="box-shadow">
                      <img
                        src={feature1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5 pt-5">
              <Col lg={5} sm={8}>
                <Card className="border border-light shadow-none">
                  <CardHeader className=" border-0 bg-transparent">
                    <div>
                      <i className="mdi mdi-circle text-danger mr-1"></i>
                      <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
                      <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
                    </div>
                  </CardHeader>
                  <CardBody className="bg-light">
                    <div className="box-shadow">
                      <img
                        src={feature2}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={5} className="ml-lg-auto">
                <div className="mt-4 mt-lg-0">
                  <FeatureBox
                    icon="link"
                    title="Shortingly"
                    smallFeatures={this.state.smallFeatures2}
                    desc="It is a web URL shortner application that shorts a long website URL. It also tells the clicks count"
                    link="https://shortingly.herokuapp.com/"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
