const models = require('../models')
const Task = models.Task

exports.tasks_create = async (req, res) => {
  try {
    Task.create(req.body).then(o => res.send(o.dataValues))
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.tasks_get_all = async (req, res) => {
  try {
    const lista = await Task.findAll()
    return res.send(lista)
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.tasks_get = async (req, res) => {
  try {
    const tarefa = await Task.findByPk(req.params.id)

    if (tarefa) {
      return res.send(tarefa)
    } else {
      return res.status(400).json({ error: 'tarefa não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}

exports.tasks_delete = async (req, res) => {
  try {
    const cidadao = await Task.findByPk(req.params.id)
    if (cidadao) {
      await cidadao.destroy()
      return res.send({
        mensagem: 'tarefa deletada'
      })
    } else {
      return res.status(400).json({ error: 'tarefa não existe' })
    }
  } catch (error) {
    return res.status(400).json({ error: error })
  }
}
