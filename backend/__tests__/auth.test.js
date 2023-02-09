import { test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'

test('', async () => {
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