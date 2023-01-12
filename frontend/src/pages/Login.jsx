import style from './Login.module.css'

export function Login() {
  return <div className={style.container}>
    <div className={style.main}>
      <div className={style.content}>
        <h2>Bem vindo de volta!</h2>
        <p className='fs-paragraph-2'>Insira suas informações abaixo para acessar seu painel</p>
        <form>
          <div className={style.inputGroup}>
            <label className='fs-paragraph-1'>Email</label>
            <input type="email" />
          </div>
          <div className={style.inputGroup}>
            <label className='fs-paragraph-1'>Senha</label>
            <input type="password" />
          </div>
          <div className={style.checkboxGroup}>
            <input type="checkbox" /> <label>Lembrar de mim</label>
          </div>
          <div>
            <button>Entrar</button>
          </div>
        </form>
      </div>
    </div>

    <div className={style.background}>
      <div className={style.img}></div>
    </div>
  </div>
}