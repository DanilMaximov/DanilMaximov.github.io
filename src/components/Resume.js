import React from 'react'
import { useTranslation } from 'react-i18next';

function List({ data = [], renderEmpty, renderItem, className}) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul className={className    }>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}



export default function About(){ 
    const {t} = useTranslation();
    return(
        <section id="resume">
            <div className="container">
                <div className="resume-text">
                <div className="row">
                    <div className="col-4">
                        <h3><span>{t('resume.education.title')}</span></h3>
                    </div>
                    <div className="col-8">
                        <div className="element">
                        <h4>{t('resume.education.university.title')}</h4>
                        <i>{t('resume.education.university.status')}</i>&bull;
                        <span>{t('resume.education.university.graduateDate')}</span>
                        </div>
                        <div className="element">
                        <h4>{t('resume.education.school.title')}</h4>
                        <i>{t('resume.education.school.status')}</i>&bull;
                        <span>{t('resume.education.school.graduateDate')}</span>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-4">
                        <h3><span>{t('resume.experience.title')}</span></h3>
                    </div>
                    <div className="col-8">
                        <div className="element">
                        <h4>{t('resume.experience.university.title')}</h4>
                        <i>{t('resume.experience.university.position')}</i>&bull;
                        <span>{t('resume.experience.university.range')}</span>
                            <p>{t('resume.experience.university.intro')}</p>
                        </div>
                        <div className="element">
                            <h4>{t('resume.experience.backend.title')}</h4>
                            <i>{t('resume.experience.backend.position')}</i>&bull;
                            <span>{t('resume.experience.backend.range')}</span>
                            <p>{t('resume.experience.backend.intro')}</p>
                        </div>
                        <div className="element">
                            <h4>{t('resume.experience.fullstack.title')}</h4>
                            <i>{t('resume.experience.fullstack.position')}</i>&bull;
                            <span>{t('resume.experience.fullstack.range')}</span>
                            <p>{t('resume.experience.fullstack.intro')}</p>
                        </div>
                        <div className="element">
                            <h4>{t('resume.experience.disivo.title')}</h4>
                            <i>{t('resume.experience.disivo.position')}</i>&bull;
                            <span>{t('resume.experience.disivo.range')}</span>
                            <p>{t('resume.experience.disivo.intro')}</p>
                        </div>

                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-4">
                        <h3><span>{t('resume.skills.title')}</span></h3>
                    </div>
                    <div className="col-8">
                        <div className="element">
                            <h4>{t('resume.skills.languages.title')}</h4>
                            <List data={t('resume.skills.languages.content').split(';')}
                                  renderEmpty={<p>This list i empty</p>}
                                  renderItem = {item => item } className={'languages'} />

                        </div>
                        <div className="element">
                            <h4>{t('resume.skills.tools.title')}</h4>
                            <List data={t('resume.skills.tools.content').split(';')}
                                  renderEmpty={<p>This list i empty</p>}
                                  renderItem = {item => item } className={'tools'}/>

                        </div>
                        <div className="element">
                            <h4>{t('resume.skills.technologies.title')}</h4>
                            <List data={t('resume.skills.technologies.content').split(';')}
                                  renderEmpty={<p>This list i empty</p>}
                                  renderItem = {item => item } className={'technologies'} />

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}