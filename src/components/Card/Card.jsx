import style from './Card.module.css'


export default function Card({ language }) {
    return (
        <div className={style.card}>
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