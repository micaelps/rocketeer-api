const models = require('../models')
const Project = models.Project

exports.projects_create = async (req, res, next) => {
  Project.create(req.body).then(o => {
    res.send(o.dataValues)
  })
}

exports.projects_get_all = async (req, res, next) => {
  await Project.findAll().then(o => res.send(o.dataValues))
}

exports.projects_get = async (req, res) => {
  await Project.findByPk(req.params.id).then(o => res.send(o.dataValues))
}

exports.projects_delete = async (req, res) => {
  const cidadao = await Project.findByPk(req.params.id)
  await cidadao.destroy()
}
