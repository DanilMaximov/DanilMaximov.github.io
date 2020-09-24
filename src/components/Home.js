import React from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { GrLinkedinOption } from 'react-icons/gr'
import { FaTelegramPlane } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

export default function Home(){
    const {t , i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return(
        <header id="home">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">{t('nav.home')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">{t('nav.about')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">{t('nav.resume')}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#works">{t('nav.works')}</a>
                        </li>
                        <li className="nav-item">
                            <select className="language-select" onChange= {(e) => changeLanguage(e.target.value)}>
                                <option value="en">English</option>
                                <option value="cz">Czech</option>
                                <option value="ru">Russian</option>
                            </select>
                        </li>
                    </ul>
            </nav>
            <div className="banner">
                <div className="banner-text">
                <h1 className="display-1">{t('home.title')}</h1>
                <p><Trans i18nKey="home.introduction" components={{bold: <strong />}}/></p>
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