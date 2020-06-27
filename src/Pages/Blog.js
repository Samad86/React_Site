import React, { Component } from "react";
import { Container, Row, Col, Media, Card, Accordion } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="post_photo"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="post_photo"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Neque porro quisquam est, qui dolorem
                  ipsum, quia dolor sit amet consectetur adipiscing velit, sed
                  quia non numquam do eius modi tempora incididunt.
                </p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="post_photo"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt.
                </p>
              </Media.Body>
            </Media>

            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="post_photo"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Ut labore et dolore magnam aliquam quaerat
                  voluptatem. Quis autem vel eum iure reprehenderit, qui in ea
                  voluptate velit esse, quam nihil molestiae consequatur, vel
                  illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                </p>
              </Media.Body>
            </Media>
          </Col>

          <Col md="3">
            <h5 className="text-center mt-5 mb-3">Categories</h5>
            <Accordion>
              <Card style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  HTML/CSS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div>
                      HTML is the standard markup language for documents
                      designed to be displayed in a web browser. It can be
                      assisted by technologies such as CSS.
                    </div>
                    <div>
                      CSS is designed to enable the separation of presentation
                      and content, including layout, colors, and fonts.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  JavaScript
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    JavaScript is a programming language that conforms to the
                    ECMAScript specification. JavaScript is high-level, often
                    just-in-time compiled, and multi-paradigm. It has
                    curly-bracket syntax, dynamic typing, prototype-based
                    object-orientation, and first-class functions.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  React
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    React is an open-source JavaScript library for building user
                    interfaces. It is maintained by Facebook and a community of
                    individual developers and companies. React can be used as a
                    base in the development of single-page or mobile
                    applications.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Vue
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Vue is an open-source model–view–viewmodel JavaScript
                    framework for building user interfaces and single-page
                    applications. It was created by Evan You, and is maintained
                    by him and the rest of the active core team members coming
                    from various companies such as Netlify and Netguru.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card style={{ cursor: "pointer" }}>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Git
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    Git is a distributed version-control system for tracking
                    changes in source code during software development. It is
                    designed for coordinating work among programmers, but it can
                    be used to track changes in any set of files.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Card className="mt-3" text="white" bg="info">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
