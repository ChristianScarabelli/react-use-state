import style from './Button.module.css';

export default function Button({ title = '', isActive = false, onClick }) {
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
