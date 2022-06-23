import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: "grid",
          title: "Interactive UI design",
          desc: "We help to develop the UI of project more interactive.",
        },
        {
          icon: "edit",
          title: "Easy to customize",
          desc: "We make delivery project in a way to become more easy to customize it by you.",
        },
        {
          icon: "headphones",
          title: "Awesome Support",
          desc: "We offer you a option to opt for support and maintenace if project go live.",
        },
        {
          icon: "layers",
          title: "Your Tech Stack",
          desc: "We built project of your technology.",
        },
        {
          icon: "code",
          title: "Quality Code",
          desc: "We make delivery of the project with more clean, readible code of production level .",
        },
        {
          icon: "tablet",
          title: "Responsive layout",
          desc: "We make the UI to be more responsive to fit across all devices.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              subtitle="Services"
              title="Services We Provide"
              desc="All services from our side is client oriented. We develop as you want"
            />

            <Row>
              <ServiceBox services={this.state.services} />
            </Row>

            <Row className="mt-4">
              <Col lg={12}>
                <div className="text-center">
                  <Link to="#" className="btn btn-success">
                    View more
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
