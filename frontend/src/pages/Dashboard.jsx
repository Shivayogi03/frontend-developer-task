import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // 🔹 FETCH TASKS (READ)
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks", { headers })
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔹 CREATE TASK
  const addTask = async () => {
    if (!title) return;

    const res = await axios.post(
      "http://localhost:5000/tasks",
      { title },
      { headers }
    );

    setTasks([...tasks, res.data]);
    setTitle("");
  };

  // 🔹 DELETE TASK
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`, { headers });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  // 🔹 UPDATE TASK (DONE / UNDO)
  const toggleComplete = async (id, completed) => {
    const res = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      { completed: !completed },
      { headers }
    );

    setTasks(
      tasks.map((task) =>
        task._id === id ? res.data : task
      )
    );
  };

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center p-3 border rounded"
            >
              <span
                className={
                  task.completed ? "line-through text-gray-400" : ""
                }
              >
                {task.title}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    toggleComplete(task._id, task.completed)
                  }
                  className="text-green-600"
                >
                  {task.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
