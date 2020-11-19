const models = require('../models')
const Member = models.Member

exports.members_create = async (req, res) => {
  try {
    Member.create(req.body).then(o => res.send(o.dataValues))
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.members_get_all = async (req, res) => {
  try {
    const lista = await Member.findAll()
    return res.send(lista)
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.members_get = async (req, res) => {
  try {
    const membro = await Member.findByPk(req.params.id)

    if (membro) {
      return res.send(membro)
    } else {
      return res.status(400).json({ error: 'membro não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.members_delete = async (req, res) => {
  try {
    const cidadao = await Member.findByPk(req.params.id)
    if (cidadao) {
      await cidadao.destroy()
      return res.send({
        mensagem: 'membro deletado'
      })
    } else {
      return res.status(400).json({ error: 'membro não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}
