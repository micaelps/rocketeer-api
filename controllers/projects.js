const models = require('../models')
const Project = models.Project

exports.projects_create = async (req, res) => {
  try {
    Project.create(req.body).then(o => res.send(o.dataValues))
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.projects_get_all = async (req, res) => {
  try {
    const lista = await Project.findAll()
    return res.send(lista)
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.projects_get = async (req, res) => {
  try {
    const projeto = await Project.findByPk(req.params.id)

    if (projeto) {
      return res.send(projeto)
    } else {
      return res.status(400).json({ error: 'Projeto não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.projects_delete = async (req, res) => {
  try {
    const cidadao = await Project.findByPk(req.params.id)
    if (cidadao) {
      await cidadao.destroy()
      return res.send({
        mensagem: 'projeto deletado'
      })
    } else {
      return res.status(400).json({ error: 'proejeto não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}
