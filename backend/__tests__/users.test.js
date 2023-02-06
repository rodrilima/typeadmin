import { beforeAll, expect, it } from "vitest";
import request from "supertest";
import { app } from "./app";
import jwt from 'jsonwebtoken'

let authorization;

beforeAll(async () => {
  const token = jwt.sign({}, process.env.JWT_TOKEN)
  authorization = `Bearer ${token}`
})

it('should be able to get users', async () => {
  const response = await request(app)
  .get('/users')
  .set('Authorization', authorization)

  expect(response.status).toEqual(200)
  expect(response.body).toMatchObject(
    expect.arrayContaining([
      expect.objectContaining({
        email: expect.any(String)
      })
    ])
  )
})