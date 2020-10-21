import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import telegram from "../assets/images/projects/telegram-512.webp";
import webScraper from "../assets/images/projects/web-scraper.png";
import miniProjects from "../assets/images/projects/mini-projects.png";
import telegram_project from "../assets/images/projects/telegram_project.png";
import webScraper_project from "../assets/images/projects/web-scraper_project.png";
import miniProjects_project from "../assets/images/projects/miniProjects_project.png";
import skamvut_project from "../assets/images/projects/skamvut_project.png";
import vut from "../assets/images/projects/vut.jpg";
import { useTranslation } from 'react-i18next';
import {GoPlus} from 'react-icons/go'
import {GrStackOverflow} from 'react-icons/gr'



export default function Works() {
    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const projectImages = {
        telegram: telegram_project,
        webScraper : webScraper_project,
        miniProjects : miniProjects_project,
        skamvut : skamvut_project
    }
    const projectLinks = {
        telegram: "https://github.com/Nerbyk/Telegram-Bot-Exam-Papers-Sender-v2.0",
        webScraper : "https://github.com/Nerbyk/Web-Scraper",
        miniProjects : "https://github.com/Nerbyk/mini-projects-js",
        skamvut : "https://github.com/Nerbyk/accommodation-bot"
    }

    const handleClose = () => setShow(false);
    const handleShow = (e) => setShow(e.target.id);
    return (
        <section id="works">
            <div className="container">
                <h4>{t('works.heading')}</h4>
                <Row className="projects center">
                    <Col>
                        <div className="project-logo">
                            <img src={vut} alt="VUT logo"/>
                            <div className="about-project" id="skamvut" onClick={handleShow}>
                                <h3>{t('works.skamvut.title')}</h3>
                                <h4>{t('works.skamvut.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo" >
                             <img src={telegram} alt="Telegram Logo"/>
                            <div className="about-project" id="telegram" onClick={handleShow}>
                                <h3>{t('works.telegram.title')}</h3>
                                <h4>{t('works.telegram.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">
                            <img src={webScraper} alt="Web-Scraper logo"/>
                            <div className="about-project" id="webScraper" onClick={handleShow}>
                                <h3>{t('works.webScraper.title')}</h3>
                                <h4>{t('works.webScraper.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo" >

                            <img src={miniProjects} alt="JS logo" className="miniProjects"/>

                            <div className="about-project" id="miniProjects" onClick={handleShow}  >
                                <h3>{t('works.miniProjects.title')}</h3>
                                <h4>{t('works.miniProjects.role')}</h4>
                                <GoPlus className="plus-icon" />
                            </div>
                        </div>
                    </Col>

                    <Modal show={show} onHide={handleClose} className="modal-project">
                        {show &&
                            <>
                            <Modal.Body>
                                <img src={projectImages[show]} alt="project_image" />
                                <div className="modal-text">
                                    <h3>{t(`works.${show}.title`)}</h3>
                                    <p>{t(`works.${show}.content`)}</p>
                                    <h4><GrStackOverflow/> {t(`works.${show}.technologies`)}</h4>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <a onClick={handleClose}>Close</a>
                                <a href={projectLinks[show]}
                                   rel="noopener noreferrer"
                                   target="_blank">
                                Details
                                </a>
                            </Modal.Footer>
                        </>
                        }
                    </Modal>


                </Row>
            </div>
        </section>
    )
}