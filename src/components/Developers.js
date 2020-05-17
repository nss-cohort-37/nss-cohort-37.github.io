import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { cohort } from "../data/cohort.json";

export default function Developers() {
  const createCardTextMarkup = (text) => {
    return { __html: text };
  };

  const [activeDemoStudent, setActiveDemoStudent] = useState();
  const toggle = (student) => setActiveDemoStudent(student);

  return (
    <div>
      <a id="thedevelopers" name="thedevelopers" className="section-header"></a>
      <nav
        id="jumbheader"
        className="navbar navbar-light bg-light section__header"
      >
        <span className="header-text">
          <h2 className="title-font">The Developers</h2>
        </span>
      </nav>

      <div className="container" style={{ padding: "64px 32px" }}>
        <h3 id="demo-date">
          <a href="http://nashss.com/demoday" target="_blank">
            Come see us demo on May 21, 2020!
          </a>
        </h3>
        <div id="cohort"></div>
      </div>

      <div className="container">
        <iframe
          width="100%"
          title="podcasts"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1046419258%3Fsecret_token%3Ds-Qu4gQDYxNbG&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>

      <div className="container">
        <div className="row justify-content-start">
          {cohort.map((student) => (
            <div
              key={student.id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2"
            >
              <Card className="developers__card cohortMems mx-2">
                <CardImg
                  top
                  width="100%"
                  src={`images/classmates/${student.proImg}`}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    <h5 className="text-center">
                      {student.firstName} {student.lastName}
                    </h5>
                  </CardTitle>
                  <CardText>
                    <span
                      dangerouslySetInnerHTML={createCardTextMarkup(
                        student.reelThemIn
                      )}
                    ></span>
                  </CardText>
                </CardBody>
                <CardFooter className="contact">
                  <div className="row">
                    <ButtonGroup>
                      {student.capstoneUrl && (
                        <Button
                          outline
                          color="warning"
                          onClick={() => toggle(student)}
                        >
                          Capstone
                        </Button>
                      )}
                      {student.resume && (
                        <Button outline color="warning">
                          <a
                            rel="noopener noreferrer"
                            className="button-group__link"
                            target="_blank"
                            href={`/resumes/${student.resume}`}
                          >
                            Resume
                          </a>
                        </Button>
                      )}
                    </ButtonGroup>
                  </div>
                </CardFooter>
                <CardFooter className="contact">
                  {student.portfolio && (
                    <a href={student.portfolio}>
                      <i
                        className="fas fa-globe fa-2x contact__icon"
                        title="Student Website"
                      ></i>
                    </a>
                  )}
                  <a href={student.github}>
                    <i
                      className="fab fa-github fa-2x contact__icon"
                      title="Github"
                    ></i>
                  </a>
                  <a href={`mailto:${student.email}`}>
                    <i
                      className="fas fa-envelope fa-2x contact__icon"
                      title="Email"
                    ></i>
                  </a>
                  <a href={student.linkedIn}>
                    <i
                      className="fab fa-linkedin fa-2x contact__icon"
                      title="LinkedIn"
                    ></i>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {!!activeDemoStudent && (
        <Modal
          isOpen={!!activeDemoStudent}
          toggle={toggle}
          className="capstone__modal"
        >
          <ModalHeader
            className="capstone__modal-header"
            toggle={() => toggle(null)}
          >
            {activeDemoStudent.firstName} {activeDemoStudent.lastName} Final
            Capstone
          </ModalHeader>
          <ModalBody className="capstone__modal-body">
            <div className="iframe-container">
              <iframe
                className="capstone__modal-iframe"
                title="Capstone"
                width="100%"
                height="100%"
                src={activeDemoStudent.capstoneUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
