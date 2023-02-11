import { it, expect, beforeAll } from 'vitest'
import request from 'supertest'
import { app } from '../app.js'
import jwt from 'jsonwebtoken'

let token;
beforeAll(() => {
  token = jwt.sign({}, process.env.JWT_TOKEN)
})

it('should be able to list users', async () => {
  const response = await request(app)
    .get('/users')
    .set('Authorization', `Bearer ${token}`)

  expect(response.status).toEqual(200)
  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        email: expect.any(String)
      })
    ])
  )
})

it('should not be able to list users if user is not authenticated', async () => {
  const response = await request(app)
    .get('/users')

  expect(response.status).toEqual(401)
})