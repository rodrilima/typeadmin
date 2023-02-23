import style from './Button.module.css'

export function Button({ children, ...params }) {
  return <button className={style.button} {...params}>{children}</button>
}