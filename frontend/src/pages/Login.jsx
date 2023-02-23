import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import style from './Login.module.css'
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { Snackbar } from '../components/Snackbar';

export function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [lembrar, setLembrar] = useState(false)
  const [showSnackbarError, setShowSnackbarError] = useState(false)

  const navigate = useNavigate()

  async function authenticate(e) {
    e.preventDefault()
    
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth`,
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

        <Snackbar
          message="Usuário ou senha incorretos. Por favor, tente novamente."
          showSnackbarError={showSnackbarError}
          setShowSnackbarError={setShowSnackbarError}
        />

        <form onSubmit={authenticate}>
          <Input
            id='email'
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            label='Email'
            className={style.inputGroup}
            required
            autoComplete="username"
          />
          <Input 
            id='password'
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            label='Senha'
            className={style.inputGroup}
            autoComplete="current-password"
            required
          />
          <Checkbox 
            type="checkbox" checked={lembrar} 
            onChange={(e) => setLembrar(e.target.checked)} 
            label="Lembrar de mim"
          /> 
          <div>
            <Button>Entrar</Button>
          </div>
        </form>
      </div>
    </div>

    <div className={style.background}>
      <div className={style.img}></div>
    </div>
  </div>
}