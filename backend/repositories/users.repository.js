export function getUser(email) {
  const users = [
    {
      email: 'contato@type.dev.br',
      senha: '123456',
      role: 'admin'
    },
    {
      email: 'rodrigo@type.dev.br',
      senha: '123456',
      role: 'customer'
    }
  ]

  return users.find(user => user.email === email)
}