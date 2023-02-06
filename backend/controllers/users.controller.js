export class UsersController {
  index(req, res) {
    return res.status(200).json([{
      email: 'contato@type.dev.br'
    }])
  }
}