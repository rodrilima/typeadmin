import style from './Input.module.css'

export function Input({ label, ...params }) {
  return <div className={style.inputGroup}>
  <label className='fs-paragraph-1' htmlFor={params.id}>{label}</label>
  <input {...params} />
</div>
}