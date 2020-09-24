import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Home(){
    const {t , i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return(
        <header id="home">
            <div className="react-nav center">
                <Navbar dark expand="lg" fixed="top">

                    <Navbar.Toggle aria-controls="basic-navbar-nav center" />
                    <Navbar.Collapse id="light-navbar-nav center">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home"><span>{t('nav.home')}</span></Nav.Link>
                            <Nav.Link href="#about"><span>{t('nav.about')}</span></Nav.Link>
                            <Nav.Link href="#resume"><span>{t('nav.resume')}</span></Nav.Link>
                            <Nav.Link href="#works"><span>{t('nav.works')}</span></Nav.Link>
                            <Nav className="language-select" >
                                <select onChange= {(e) => changeLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="cz">Czech</option>
                                    <option value="ru">Russian</option>
                                </select>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="banner">
                <div className="banner-text">
                <h1 className="display-1">{t('home.title')}</h1>
                <p><Trans i18nKey="home.introduction" components={{span: <span />}}/></p>
                <hr></hr>
                <ul className="social-icons center">
                    <li><a href="https://www.linkedin.com/in/nerbyk/"><GrLinkedinOption /></a></li>
                    <li><a href="https://t.me/nerby1"><FaTelegramPlane /></a></li>
                    <li><a href="https://github.com/Nerbyk"><GoMarkGithub /></a></li>
                </ul>

                </div>
            </div>
        </header>
    )
}