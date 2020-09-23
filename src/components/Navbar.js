import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar(){
    const {t , i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return ( 
    <>
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
    </>
    )
}

