import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function MyFooter() {
    return (
        <footer className="bg-black mt-5">
            <Container className="d-flex flex-column">
                <Row className="mt-3 mb-3 g-3">
                    <Col xs={1} className="text-center">
                        <FaFacebook className="text-light me-2" size={16} />
                        <FaTwitter className="text-light me-2" size={16} />
                        <FaInstagram className="text-light me-2" size={16} />
                        <FaYoutube className="text-light" size={16} />
                    </Col>
                </Row>
                <Row className="justify-content-center g-0">
                    <Col md={4} className="p-0">
                        <ul className="list-unstyled text-light fs-small">
                            <li>Audio and Subtitles</li>
                            <li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col md={4} className="p-0">
                        <ul className="list-unstyled text-light fs-small">
                            <li>Audio Description</li>
                            <li>Investor Relations</li>
                            <li>Legal Notices</li>
                        </ul>
                    </Col>
                    <Col md={4} className="p-0">
                        <ul className="list-unstyled text-light fs-small">
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-1 mb-3 ms-1">
                    <Col xs={1} className="border border-light text-light align-items-center px-0 py-1">
                        <p className="fs-supersmall mb-0 text-center">Service Code</p>
                    </Col>
                </Row>
                <Row className="mt-1 mb-3">
                    <Col xs={4}>
                        <p className="text-light fs-supersmall m-0">©1997-2019 Netflix, inc. (i-dsgjk5689fkhbs)</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MyFooter;
