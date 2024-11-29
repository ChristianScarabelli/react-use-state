import style from './Button.module.css'

export default function Button({ title = '' }) {
    return (
        title !== '' && (
            <button className={style.button}>{title}</button>
        )
    )
}