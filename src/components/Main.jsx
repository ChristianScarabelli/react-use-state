import Card from './Card/Card.jsx'
import Button from './ui/Button/Button.jsx'
import languages from '../data/languages.js'

export default function Main() {
    return (
        <>
            <section className='buttons-section'>
                <div className="container">
                    <div className='row'>
                        {languages.map((lang) => (
                            <Button key={lang.id} title={lang.title} />
                        ))}
                    </div>

                </div>
            </section>
            <section className='card-section'>
                <div className="container">
                    <Card />
                </div>
            </section>
        </>
    )
}