import { it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'

it('should be able to authenticate', async () => {
  const credentials = {
    email: 'contato@type.dev.br',
    senha: '123456'
  }

  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(200)
  expect(response.body.token).toEqual(
    expect.any(String)
  )
})

it('should not be able to authenticate if the password is wrong', async () => {
  const credentials = {
    email: 'contato@type.dev.br',
    senha: '123457'
  }

  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(401)
  expect(response.body.error).toEqual('Authentication data error')
})

it('should not be able to authenticate if the user does not have authorization', async () => {
  const credentials = {
    email: 'rodrigo@type.dev.br',
    senha: '123456'
  }

  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(403)
  expect(response.body.error).toEqual('User not authorized')
})