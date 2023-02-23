import { it, vi, expect } from 'vitest'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Login } from '../pages/Login'

let navigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigate
}))

globalThis.fetch = vi.fn(() => ({
  status: 200,
  json: () => ({
    token: ''
  })
}))

it('should be able to login', async () => {
  const loginPage = render(<Login />)
  const emailInput = await loginPage.findByLabelText('Email')
  const passwordInput = await loginPage.findByLabelText('Senha')
  const button = await loginPage.findByText('Entrar')

  fireEvent.change(emailInput, { target: { value: 'contato@type.dev.br' } })
  fireEvent.change(passwordInput, { target: { value: '123456' } })
  fireEvent.click(button)

  expect(globalThis.fetch).toBeCalledWith(
    `${import.meta.env.VITE_API_URL}/auth`,
    expect.objectContaining({
      body: JSON.stringify({
        email: 'contato@type.dev.br',
        senha: '123456'
      })
    })
  )

  await waitFor(() => {
    expect(navigate).toBeCalledWith('/app')
  })
})