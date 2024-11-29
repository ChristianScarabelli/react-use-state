import style from './Button.module.css';

export default function Button({ title = '', isActive = false, onClick }) {
    // creo la variabile className messa in minuscolo e senza punti, per dare lo stile dinamico tramite il nome del title
    const className = title.toLowerCase().replace('.', '')

    return (
        title !== '' &&
        <button
            className={`${style.button} ${isActive ? style[`active_${className}`] : ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
