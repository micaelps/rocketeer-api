const models = require('../models')
const Project = models.Project

exports.projects_create = async (req, res) => {
  Project.create(req.body).then(o => res.send(o.dataValues))
}

exports.projects_get_all = async (req, res) => {
  const lista = await Project.findAll()
  return res.send(lista)
}

exports.projects_get = async (req, res) => {
  const projeto = await Project.findByPk(req.params.id)

  if (projeto) {
    return res.send(projeto)
  } else {
    return res.status(400).json({ error: 'Projeto não existe' })
  }
}

exports.projects_delete = async (req, res) => {
  const cidadao = await Project.findByPk(req.params.id)
  if (cidadao) {
    await cidadao.destroy()
    return res.send({
      mensagem: 'projeto deletado'
    })
  } else {
    return res.status(400).json({ error: 'proejeto não existe' })
  }
}
