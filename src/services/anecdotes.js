import axios from 'axios'

const baseUrl = 'https://floating-hollows-11561.herokuapp.com/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const obj = { content, votes: 0 }
  const response = await axios.post(baseUrl, obj)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const exportedObject = {
  getAll,
  create,
  update
}

export default exportedObject
