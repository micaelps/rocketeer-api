const Yup = require('yup')
const models = require('../models')
const User = models.User
const jwt = require('jsonwebtoken')

exports.users_create = async (req, res) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string().required(),
      teamName: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6)
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'falha na validacao' })
    }

    const userExists = await User.findOne({ where: { email: req.body.email } })
    if (userExists) {
      return res.status(400).json({ error: 'Usuario ja existe.' })
    }

    User.create(req.body).then(o => res.send(o.dataValues))
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.users_get_all = async (req, res) => {
  try {
    console.log(req.user)
    const lista = await User.findAll()
    return res.send(lista)
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.users_get = async (req, res) => {
  try {
    const userExists = await User.findByPk(req.params.id)
    console.log(userExists)
    if (userExists) {
      return res.send(userExists)
    } else {
      return res.status(400).json({ error: 'Usuario não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.users_delete = async (req, res) => {
  try {
    const cidadao = await User.findByPk(req.params.id)
    if (cidadao) {
      await cidadao.destroy()
      return res.send({
        mensagem: 'usuario deletado'
      })
    } else {
      return res.status(400).json({ error: 'Usuario não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.users_login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        mensagem: 'erro na autenticacao'
      })
    }
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    console.log(user.password)

    if (user.password === req.body.password) {
      const token = jwt.sign(
        { id_usuario: user.id, email: user.email },
        'tokensecreto',
        // {
        //   expiresIn: '24h'
        // }
      )
      return res.status(200).send({
        mensagem: 'autenticado com sucesso!',
        token: token
      })
    } else {
      return res.status(400).send({
        mensagem: 'erro na autenticacao'
      })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}
