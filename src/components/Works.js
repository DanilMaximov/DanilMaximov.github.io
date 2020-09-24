import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import telegram from "../assets/images/projects/telegram-512.webp";
import kidsClub from "../assets/images/projects/kids-club.png";
import miniProjects from "../assets/images/projects/mini-projects.png";
import vut from "../assets/images/projects/vut.jpg";
import { useTranslation } from 'react-i18next';
import {GoPlus} from 'react-icons/go'



export default function Works() {
    const {t} = useTranslation();
    return (
        <section id="works">
            <div className="container">
                <Row className="projects center">
                    <Col>
                        <div className="project-logo">
                            <img src={vut}/>
                            <div className="about-project">
                                <h3>{t('works.skamvut.title')}</h3>
                                <h4>{t('works.skamvut.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">
                             <img src={telegram}/>
                            <div className="about-project">
                                <h3>{t('works.telegram.title')}</h3>
                                <h4>{t('works.telegram.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">
                            <img src={kidsClub}/>
                            <div className="about-project">
                                <h3>{t('works.kidsClub.title')}</h3>
                                <h4>{t('works.kidsClub.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="project-logo">
                            <img src={miniProjects}/>
                            <div className="about-project">
                                <h3>{t('works.miniProjects.title')}</h3>
                                <h4>{t('works.miniProjects.role')}</h4>
                                <GoPlus className="plus-icon"/>
                            </div>
                        </div>

                    </Col>


                </Row>
            </div>
        </section>
    )
}