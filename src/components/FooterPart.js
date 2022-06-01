import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function FooterPart() {
  return (
    <div className="mt-5">
      <Row className="shadow  bg-light rounded pt-5 mt-2 m-0">
        <Col sm={4}>
          <p className="display-6">AppName</p>
        </Col>
        <Col sm={4}>
          <p className="align-middle">© AppName, 2022. All rights reserved.</p>
        </Col>
        <Col sm={4}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram size={"25%"} color="black" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <AiFillFacebook size={"25%"} color="black" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <AiFillTwitterSquare size={"25%"} color="black" />
          </a>
        </Col>
      </Row>{" "}
    </div>
  );
}

export default FooterPart;
