import { expect, it } from "vitest";
import request from "supertest";
import { app } from "./app"

it('should be able to authenticate', async () => {
  const credentials = {
    email: 'contato@type.dev.br',
    senha: '123456'
  }

  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    token: expect.any(String)
  })
})

it('should not be able to authenticate with wrong credentials', async () => {
  const credentials = {
    email: 'contato@type.dev.br',
    senha: '1234567'
  }
  
  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(401)
  expect(response.body).toEqual({
    error: 'Erro nos dados de autenticação'
  })
})

it('should not be able to authenticate if user is not a admin', async () => {
  const credentials = {
    email: 'rodrigo@type.dev.br',
    senha: '123456'
  }
  
  const response = await request(app)
    .post('/auth')
    .send(credentials)

  expect(response.status).toEqual(403)
  expect(response.body).toEqual({
    error: 'User not authorized'
  })
})