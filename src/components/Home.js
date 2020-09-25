import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { Navbar, Nav, NavItem }from 'react-bootstrap';
import Scroll from 'react-scroll';

export default function Home(){
    const {t , i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    const Link = Scroll.Link;
  
    return(
        <header id="home" data-spy="scroll" data-target="scrollSpy" data-offset="20">
            <div className="react-nav center">
                <Navbar dark expand="lg" fixed="top">
                    <Navbar.Toggle id="nav-toggle" aria-controls="basic-navbar-nav center" />
                    <Navbar.Collapse id="light-navbar-nav" className="toggle-items center">
                        <Nav className="mx-auto" id="scrollSpy">
                            <NavItem  eventKey={1}  href="#home">
                              <Link to="home" spy={true} smooth={true} duration={500}>
                                <span>{t('nav.home')}</span>
                              </Link>
                            </NavItem>

                            <NavItem  eventKey={1}  href="#about">
                              <Link to="about" spy={true} smooth={true} duration={500}>
                                <span>{t('nav.about')}</span>
                              </Link>
                            </NavItem>
                            <NavItem  eventKey={1}  href="#resume">
                              <Link to="resume" spy={true} smooth={true} duration={500}>
                                <span>{t('nav.resume')}</span>
                              </Link>
                            </NavItem>
                            <NavItem  eventKey={1}  href="#works">
                              <Link to="works" spy={true} smooth={true} duration={500}>
                                <span>{t('nav.works')}</span>
                              </Link>
                            </NavItem>
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
                  
                  
                    <Link to="about" spy={true} smooth={true} duration={1000}>
                      <IoIosArrowDropdownCircle  className="scroll-button"/>
                    </Link>
                 
                </div>
            </div>
        </header>
    )
}