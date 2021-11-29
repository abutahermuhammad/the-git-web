import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Link from 'next/link'


const legal = [
    {
        _id: "LG154",
        title: "Terms of use",
        url: "/terms-of-use"
    },
    {
        _id: "LG155",
        title: "Privacy policy",
        url: "/privacy-policy"
    },
    {
        _id: "LG156",
        title: "Interest-Based ad",
        url: "/terms-of-use"
    },
    {
        _id: "LG157",
        title: "Privacy rights",
        url: "/terms-of-use"
    },
]

const ourSites = [
    {
        _id: "LG1544",
        title: "GIsthive Home",
        url: "/terms-of-use"
    },
    {
        _id: "LG1556",
        title: "Book a Trip",
        url: "/privacy-policy"
    },
    {
        _id: "LG1565",
        title: "Buy Maps",
        url: "/terms-of-use"
    },
    {
        _id: "LG1257",
        title: "Inspire Your Kids",
        url: "/terms-of-use"
    },
    {
        _id: "LG1857",
        title: "Gisthive Shop",
        url: "/terms-of-use"
    },
    {
        _id: "LG1457",
        title: "Gist  Meseum",
        url: "/terms-of-use"
    },
    {
        _id: "LG1857",
        title: "Gist Impect",
        url: "/terms-of-use"
    },
    {
        _id: "LG1577",
        title: "Support Our Mission",
        url: "/terms-of-use"
    },
    {
        _id: "LG1576",
        title: "Gisthive Partners",
        url: "/terms-of-use"
    },
    {
        _id: "LG1557",
        title: "Press Room",
        url: "/terms-of-use"
    },
    {
        _id: "LG1100",
        title: "Advertise With Us",
        url: "/terms-of-use"
    },
]

const joinUs = [
    {
        _id: "LG1541",
        title: "Subscribe",
        url: "/terms-of-use"
    },
    {
        _id: "LG1545",
        title: "Customer Service",
        url: "/privacy-policy"
    },
    {
        _id: "LG1564",
        title: "Renew Subscription",
        url: "/terms-of-use"
    },
    {
        _id: "LG1574",
        title: "Work at Gisthive",
        url: "/terms-of-use"
    },
    {
        _id: "LG1577",
        title: "Sign up for Our Newslatter",
        url: "/terms-of-use"
    },
    {
        _id: "LG1578",
        title: "Contribute to Protect the Planet",
        url: "/terms-of-use"
    },
    {
        _id: "LG1577",
        title: "Pitch a Story",
        url: "/terms-of-use"
    },
]

const Footer = () => {
    return (
        <>
            <footer>
                <div className="gh-footer-top">
                    <Container>
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <div className="gh-footer-wgt">
                                    <h3 className="gh-brand-title">The Gisthive</h3>
                                    <p className="gh-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </Col>

                            <Col lg={8} md={8} sm={12}>
                                <Row>
                                    <Col lg={4} md={4} sm={12}>
                                        <div className="gh-footer-wgt">
                                            <h3 className="--wgt-title">LEGAL</h3>

                                            <Stack gap={1}>
                                            {legal?.map(item => (
                                                <p key={item._id}>
                                                    <Link href={item.url}>
                                                        <a>
                                                            {item.title}
                                                        </a>
                                                    </Link>
                                                </p>
                                                ))}
                                            </Stack>
                                        </div>
                                    </Col>
                                    
                                    <Col lg={4} md={4} sm={12}>
                                        <div className="gh-footer-wgt">
                                            <h3 className="--wgt-title">OUR SITES</h3>
                                            <Stack gap={1}>
                                            {ourSites?.map(item => (
                                                    <p key={item._id}>
                                                        <Link href={item.url}>
                                                            <a>
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                    </p>
                                                ))}
                                            </Stack>
                                        </div>
                                    </Col>
                                    
                                    <Col lg={4} md={4} sm={12}>
                                        <div className="gh-footer-wgt">
                                            <h3 className="--wgt-title">JOIN US</h3>
                                            <Stack gap={1}>
                                            {joinUs?.map(item => (
                                                    <p key={item._id}>
                                                        <Link href={item.url}>
                                                            <a>
                                                                {item.title}
                                                            </a>
                                                        </Link>
                                                    </p>
                                                ))}
                                            </Stack>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="gh-footer-copy">
                    <p className="text-center">Copyright © 2021 The Gisthive. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
