import Card from './Card/Card.jsx'
import Button from './ui/Button/Button.jsx'
import languages from '../data/languages.js'
import { useState } from 'react';

export default function Main() {
    // selectedWebLang contiene il linguaggio (null di default) che posso aggiornare con la sua funzione di stato
    const [selectedWebLang, setSelectedWebLang] = useState(null) // con il null viene mostrato poi il messaggio di default, perchè di base nessun linguaggio è selezionato

    // funzione per aggiornare lo stato del linguaggio selezionato al click
    // SE ESISTE UN LINGUAGGUAGGIO SELEZIONATO (vero), guardo se il suo ID corrisponde a quello del linguaggio cliccato
    // se è la condizione è vera ritorna null per deselezionare il linguaggio e mostrare lo stato di default
    // se la condizione è falsa ritorna lang, che è il linguaggio cliccato, per selezionarlo.
    const toggleSelectedLanguage = (lang) => {
        setSelectedWebLang(selectedWebLang && selectedWebLang.id === lang.id ? null : lang)
    }

    return (
        <>
            <main>
                <section className='buttons-section'>
                    <div className="container">
                        <div className='row'>
                            {languages.map((lang) => (
                                <Button
                                    key={lang.id}
                                    title={lang.title}
                                    // isActive={selectedWebLang?.id === lang.id}
                                    isActive={selectedWebLang && selectedWebLang.id === lang.id}
                                    // lang è l'oggetto corrente dell'array, che viene passato alla funzione che al click aggiorna il linguaggio
                                    onClick={() => toggleSelectedLanguage(lang)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className='card-section'>
                    <div className="container">
                        {/* // inserisco la variabile che contiene il linguaggio, adesso aggiornato dal click*/}
                        <Card language={selectedWebLang} />
                    </div>
                </section>
            </main>
        </>
    )
}