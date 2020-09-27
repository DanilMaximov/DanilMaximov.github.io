import React from 'react'
import {  useTranslation } from 'react-i18next';

import {GrLinkedinOption} from "react-icons/gr";
import {FaTelegramPlane} from "react-icons/fa";
import {GoMarkGithub} from "react-icons/go";
import Scroll from 'react-scroll';
export default function Footer() {
    const {t} = useTranslation();
    const Link = Scroll.Link;
    return (
        <footer id="footer">
            <div className="container">
                <ul className="social-icons center">
                    <li><a href="https://www.linkedin.com/in/nerbyk/"><GrLinkedinOption /></a></li>
                    <li><a href="https://t.me/nerby1"><FaTelegramPlane /></a></li>
                    <li><a href="https://github.com/Nerbyk"><GoMarkGithub /></a></li>
                </ul>
                <p className="center">
                    © Copyright 2020 Danil Maksimov &bull; Realized by <a href="https://www.linkedin.com/in/nerbyk/">Danil Maksimov</a>
                </p>
            </div>

        </footer>

    )
}