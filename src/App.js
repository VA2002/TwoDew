import logo from "./TwoDew.png";
import aud from "./Chill.mp3";
import { useReducer, useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  var [checked, setChecked] = useReducer(checked => !checked, false);
  const [strike, strikeThrough] = useReducer(
    strike => !strike,
    "text-decoration: line-through;"
  );

  var [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  //when submitted
  const submit = e => {
    e.preventDefault();
    const taskItem = {
      id: Math.random(),
      name: task,
      description: desc
    };

    setList([...list, taskItem]);
    setTask("");
    setDesc("");

    console.log(taskItem.id);
    console.log(taskItem.name);
    console.log(taskItem.description);
    console.log(list);
    // }
  };


  const deleteAll = (e) => {
    setList([]);
  };

  const checkboxChangeHandler = e => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == e.id) {
        document.getElementById(`${list[i].id}`).style.textDecoration =
          "line-through";
        document.getElementById(`${list[i].id}`).style.color = "#484849";
        document.getElementById(`${list[i].id}`).style.fontStyle = "italic";
        console.log(list[i].name + " & " + e.name + " are bros");
      }
      if ((checked = false)) {
        document.getElementById(`${list[i].id}`).style.textDecoration = "none";
        document.getElementById(`${list[i].id}`).style.color = "black";
        document.getElementById(`${list[i].id}`).style.fontStyle = "normal";
      } else {
        console.log(list[i].name + " & " + e.name + " are NOT bros");
      }
    }
    console.log("We shall end it with " + e);
  };

  const checkboxHandler = e => {
    console.log("NOW THE NEXT VERSION");
    console.log(list);
    checkboxChangeHandler(e);
  };

  //The App Part
  return (
    <div className="App">
      <div className="Tasklist">
        <img id="TheLogo" src={logo}></img>
        <br></br>
        <div className="Form">
          <form onSubmit={submit}>
            <table cellSpacing="25" id="Formbegins">
              <tr>
                <input
                  id="TName"
                  type="text"
                  value={task}
                  onChange={e => setTask(e.target.value)}
                  placeholder="Task Name"
                  required
                ></input>
              </tr>
              <tr>
                <input
                  id="TDes"
                  type="text"
                  style={{ height: "110px" }}
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Task Description"
                  required
                ></input>
              </tr>
              <tr>
                <button id="Add" type="submit">
                  Add Task
                </button>
              </tr>
            </table>
            <button id="Delete" onClick={() => deleteAll()}>
                  Delete All Tasks
                </button>
          </form>
        </div>
        <div class="Seperator"></div>
        <div className="To-do-list">
          <table cellSpacing="20">
            {list.map(taskItem => (
              <tr key={taskItem.id} className="Taskcontainer">
                <input
                  type="checkbox"
                  value={checked}
                  onChange={() => checkboxHandler(taskItem)}
                ></input>
                <label
                  className="Task"
                  id={taskItem.id}
                  style={
                    !checked
                      ? {
                          textDecoration: "none",
                          color: "black",
                          fontStyle: "normal"
                        }
                      : {
                          textDecoration: "line-through",
                          color: "gray",
                          fontStyle: "italic"
                        }
                  }
                >
                  {taskItem.name}
                </label>
                <br />
                <label id="Abouttask">&nbsp;&nbsp;{taskItem.description}</label>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <embed src= {aud} autostart="true" loop="true" height="0" width="0"></embed>
    </div>
  );
}

export default App;

