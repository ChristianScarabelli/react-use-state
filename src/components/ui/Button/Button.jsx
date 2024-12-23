import style from './Button.module.css';

export default function Button({ title = '', callback = () => { }, isActive = false }) {
    // variabile che prende il title e lo metti n minuscolo e togliendo i punti
    const buttonStyle = title.toLowerCase().replace('.', '');

    return (
        <>
            {title !== '' && (
                <button
                    className={`${style.button} ${isActive ? style[`active_${buttonStyle}`] : ''}`}
                    onClick={callback}
                >
                    {title}
                </button>
            )}
        </>
    )
}
