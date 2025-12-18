import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [focusMode, setFocusMode] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch('/tasks')
      const data = await response.json()
      setTasks(data)
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (e) => {
    e.preventDefault()
    if (!newTask.trim()) return

    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask.trim() }),
      })
      const task = await response.json()
      setTasks([...tasks, task])
      setNewTask('')
    } catch (error) {
      console.error('Failed to add task:', error)
    }
  }

  const toggleTask = async (id, completed) => {
    try {
      await fetch(`/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed }),
      })
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !completed } : task
      ))
    } catch (error) {
      console.error('Failed to toggle task:', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await fetch(`/tasks/${id}`, { method: 'DELETE' })
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.error('Failed to delete task:', error)
    }
  }

  const displayedTasks = focusMode 
    ? tasks.filter(task => !task.completed) 
    : tasks

  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Board</h1>
          <p className="text-gray-500">Stay organized and get things done</p>
        </header>

        <form onSubmit={addTask} className="flex gap-3 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Task
          </button>
        </form>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {completedCount} of {totalCount} completed
              </span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{progressPercent}%</span>
            </div>
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                focusMode 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {focusMode ? 'Focus Mode ON' : 'Focus Mode'}
            </button>
          </div>

          {displayedTasks.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              {focusMode && tasks.length > 0 
                ? 'All tasks completed! Great job!' 
                : 'No tasks yet. Add one above!'}
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {displayedTasks.map(task => (
                <li 
                  key={task.id} 
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id, task.completed)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className={`flex-1 ${
                    task.completed 
                      ? 'text-gray-400 line-through' 
                      : 'text-gray-700'
                  }`}>
                    {task.title}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="mt-6 text-center text-sm text-gray-400">
          {focusMode && (
            <p>Showing {displayedTasks.length} pending task{displayedTasks.length !== 1 ? 's' : ''}</p>
          )}
        </footer>
      </div>
    </div>
  )
}

export default App
