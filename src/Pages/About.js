import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="design">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="design">Design</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="team">Team</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="programming">Programming</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="libraries">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="design">
                  <img
                    src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
                    alt="design_photo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="team">
                  <img
                    src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg"
                    alt="team_photo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="programming">
                  <img
                    src="https://i.pinimg.com/originals/df/c7/ce/dfc7ce51d62017d5bcec72972f1c97e0.jpg"
                    alt="programming_photo"
                  />
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="frameworks">
                  <img
                    src="https://bilabil.com/wp-content/uploads/2019/12/framework-javascript-terbaik.jpg"
                    alt="frameworks_photo"
                  />
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="libraries">
                  <img
                    src="https://coderseye.com/wp-content/uploads/Jquery-Libraries-vs-Frameworks-vs-APIS.jpg"
                    alt="libraries_photo"
                  />
                  <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
                    aut odit aut fugit, sed quia consequuntur magni dolores eos,
                    qui ratione voluptatem sequi nesciunt...
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
