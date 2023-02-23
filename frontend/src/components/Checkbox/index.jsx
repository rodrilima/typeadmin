import style from './Checkbox.module.css'

export function Checkbox({ label, ...params }) {
  return <div className={style.checkboxGroup}>
  <input {...params} /> 
  <label>{label}</label>
</div>
}