import Card from './Card/Card.jsx'
import Button from './ui/Button/Button.jsx'
import languages from '../data/languages.js'
import { useState } from 'react';

export default function Main() {
    const [selectedWebLang, setSelectedWebLang] = useState(null)

    const handleSelectedLanguage = (language) => {
        setSelectedWebLang(language)
    }
    return (
        <>
            <section className='buttons-section'>
                <div className="container">
                    <div className='row'>
                        {languages.map((lang) => (
                            <Button
                                key={lang.id}
                                title={lang.title}
                                isActive={selectedWebLang?.id === lang.id}
                                onClick={() => handleSelectedLanguage(lang)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className='card-section'>
                <div className="container">
                    <Card language={selectedWebLang} />
                </div>
            </section>
        </>
    )
}