import style from './Card.module.css'


export default function Card({ language }) {
    return (
        <div className={style.card}>
            {/* se il linguaggio non è null, ossia la variabile che lo contiene è stata richiamata dal click, genero la card, altrimenti c'è il messaggio di default */}

            {language ? (
                <>
                    <h2>{language.title}</h2>
                    <p>{language.description}</p>
                </>
            ) : (
                <p>nessun linguaggio selezionato</p>
            )}
        </div>
    )
}