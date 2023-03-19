import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import { v4 } from 'uuid'
function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [list, setList] = useState([])
  const [user, setUser] = useState({
    id: '',
    title: ''
  })
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setList(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  const handleInput = e => {
    let userCopy = { ...user }
    userCopy[e.target.name] = e.target.value
    setUser({ ...userCopy, id: v4() })
    // console.log(user)
  }
  const handleAdd = () => {
    // setList([...list], user)
    // console.log(list)
    alert('added successfully!!')
    let listCopy = [...list]
    listCopy.push(user)
    setList(listCopy)
    setUser({
      id: '',
      title: ''
    })
  }
  return (
    <>
      <h1>Todo List</h1>
      <input name="title" value={user.title} onChange={e => handleInput(e)} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
export default App