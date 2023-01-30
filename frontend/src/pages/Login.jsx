import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'
import blockIcon from '../assets/block-icon.png'
import closeIcon from '../assets/close-icon.png'

export function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [lembrar, setLembrar] = useState(false)
  const [showSnackbarError, setShowSnackbarError] = useState(true)

  const navigate = useNavigate()

  async function authenticate(e) {
    e.preventDefault()
    
    const response = await fetch(
      'http://localhost:3001/auth',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          senha
        }),
        headers: {
          'content-type': 'application/json'
        }
      }
    )

    const data = await response.json()

    if(response.status === 200){
      Cookies.set('token', data.token, {
        expires: lembrar ? 30 : null
      })
  
      navigate('/app')
    }

    if(response.status === 401){
      setShowSnackbarError(true)
    }
  }

  return <div className={style.container}>
    <div className={style.main}>
      <div className={style.content}>
        <h2>Bem vindo de volta!</h2>
        <p className='fs-paragraph-2'>Insira suas informações abaixo para acessar seu painel</p>
        
        <div className={`${style.snackbar} ${showSnackbarError ? "" : style.snackbarHide}`}>
          <div className={style.snackbarContent}>
            <img src={blockIcon} />
            <p className='fs-paragraph-1'>Usuário ou senha incorretos. Por favor, tente novamente.</p>
          </div>
          <div className={style.snackbarClose} onClick={() => {setShowSnackbarError(false)}}>
            <img src={closeIcon} />
          </div>
        </div>

        <form onSubmit={authenticate}>
          <div className={style.inputGroup}>
            <label className='fs-paragraph-1'>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className={style.inputGroup}>
            <label className='fs-paragraph-1'>Senha</label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required
            />
          </div>
          <div className={style.checkboxGroup}>
            <input 
              type="checkbox" checked={lembrar} 
              onChange={(e) => setLembrar(e.target.checked)} 
            /> 
            <label>Lembrar de mim</label>
          </div>
          <div>
            <button type='submit'>Entrar</button>
          </div>
        </form>
      </div>
    </div>

    <div className={style.background}>
      <div className={style.img}></div>
    </div>
  </div>
}