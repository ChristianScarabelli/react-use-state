import Card from './Card/Card.jsx'
import Button from './ui/Button/Button.jsx'
import languages from '../data/languages.js'
import { useState } from 'react';

export default function Main() {
    // selectedWebLang contiene il linguaggio (null di default) che posso aggiornare con la sua funzione di stato
    // con il null viene mostrato poi il messaggio di default, perchè di base nessun linguaggio è selezionato
    const [selectedWebLang, setSelectedWebLang] = useState(null)
    // funzione per aggiornare lo stato del linguaggio selezionato al click
    // alla funzione di stato passo il linguaggio corrente
    // se l'id è uguale, la condizione è vera ritorna null per deselezionare il linguaggio e mostrare lo stato di default
    // se la condizione è falsa ritorna l'id passato al toggle, cioè l'id dell'elemento corrente (che è il linguaggio cliccato, per selezionarlo.)
    const toggleSelectedWebLang = (id) => {
        setSelectedWebLang((currentLang) => (currentLang === id ? null : id))
    }
    return (
        <>
            <main>
                <section className='buttons-section'>
                    <div className="container">
                        <div className='row'>
                            {
                                languages.map((language) =>
                                    <Button
                                        key={language.id}
                                        title={language.title}
                                        isActive={selectedWebLang === language.id}
                                        onClick={() => toggleSelectedWebLang(language.id)} // al click invoco la funzione che cambia l'id con quello del linguaggio corrente dell'array ciclato
                                    />
                                )
                            }
                        </div>
                    </div>
                </section>
                <section className='card-section'>
                    <div className="container">
                        {/* come props di language, cerco tra l'array il linguaggio il cui id è uguale a quello della variabile di stato  */}
                        <Card language={languages.find((lang) => lang.id === selectedWebLang)}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}