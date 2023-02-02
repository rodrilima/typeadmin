import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export function ListUsers() {
  const navigate = useNavigate()

  function logout() {
    Cookies.remove('token')
    navigate('/')
  }

  return <div>Listagem de Usuários <button onClick={logout}>Sair</button></div>
}