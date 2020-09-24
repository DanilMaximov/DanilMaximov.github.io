import React from 'react'
import { useTranslation } from 'react-i18next';
import {FaDownload} from 'react-icons/fa';
import MyResume from '../cv/Resume24-09.pdf';
export default function About(){
    const insertLineBrakes = (translation) => translation.split('\n').map(line => <p>{line}</p>);
    const {t} = useTranslation();
    return(
        <section id="about">
        <div className="container">
            <div className="about-text">
                <h3>{t('about.title')}</h3>
                <p>{insertLineBrakes(t('about.intro'))}</p>
                <div className="row">
                    <div class="col-sm">
                        <h3>{t('about.contacts.title')}</h3>
                        <p>{insertLineBrakes(t('about.contacts.content'))}</p>
                    </div>
                    <div class="col-sm">
                        <a href={MyResume} class="btn btn-outline-light  btn-lg" download='Resume_Danil_Maksimov.pdf'><FaDownload /> <span>{t('about.resume')}</span></a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}