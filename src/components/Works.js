import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import telegram from "../assets/images/projects/telegram-512.webp";
import kidsClub from "../assets/images/projects/kids-club.png";
import miniProjects from "../assets/images/projects/mini-projects.png";
import telegram_project from "../assets/images/projects/telegram_project.png";
import kidsClub_project from "../assets/images/projects/kidsClub_project.png";
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
        kidsClub : kidsClub_project,
        miniProjects : miniProjects_project,
        skamvut : skamvut_project
    }
    const projectLinks = {
        telegram: "https://github.com/Nerbyk/Telegram-Bot-Exam-Papers-Sender-v2.0",
        kidsClub : "https://github.com/Nerbyk/Kids-Club",
        miniProjects : "https://github.com/Nerbyk/mini-projects-js",
        skamvut : "https://github.com/Nerbyk/accommodation-bot"
    }

    const handleClose = () => setShow(false);
    const handleShow = (e) => setShow(e.target.id);
    return (
        <section id="works">
            <div className="container">
                <Row className="projects center">
                    <Col>
                        <div className="project-logo">
                            <img src={vut}/>
                            <div className="about-project" id="skamvut" onClick={handleShow}>
                                <h3>{t('works.skamvut.title')}</h3>
                                <h4>{t('works.skamvut.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo" >
                             <img src={telegram}/>
                            <div className="about-project" id="telegram" onClick={handleShow}>
                                <h3>{t('works.telegram.title')}</h3>
                                <h4>{t('works.telegram.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">
                            <img src={kidsClub}/>
                            <div className="about-project" id="kidsClub" onClick={handleShow}>
                                <h3>{t('works.kidsClub.title')}</h3>
                                <h4>{t('works.kidsClub.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">

                            <img src={miniProjects} className="miniProjects" />

                            <div className="about-project" id="miniProjects" onClick={handleShow}>
                                <h3>{t('works.miniProjects.title')}</h3>
                                <h4>{t('works.miniProjects.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>

                    <Modal show={show} onHide={handleClose} className="modal-project">
                        {show &&
                            <>
                            <Modal.Body>
                                <img src={projectImages[show]} />
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