import style from './Button.module.css'

export default function Button({ className = '', title = '' }) {
    return (
        title !== '' && (
            <button className={`${style.button} ${style[`button_${title.toLowerCase()}`]}`}> {title}</button >
        )
    )
}