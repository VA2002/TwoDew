import logo from "./TwoDew.png";
import aud from "./Chill.mp3";
import { useReducer, useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  var [checked, setChecked] = useReducer(checked => !checked, false);
  // const [checked, setChecked] = useState(false);
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

  // const taskDeleter = e => {
  //   for(let i = 0; i < list.length; i++){
  //     if(list[i].id == e.id){
  //       var newList = list.filter((todo) => todo.id != list[i].id);
  //       setList(newList);
  //       console.log(newList);
  //     }
  //   }
  // }

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
      // console.log(list[i]);
    }
    console.log("We shall end it with " + e);
    //  if (e){
    //    console.log()
    //  }
  };

  const checkboxHandler = e => {
    console.log("NOW THE NEXT VERSION");
    // console.log(taskItem.id);
    // console.log(taskItem.name);
    // console.log(taskItem.description);
    console.log(list);
    // console.log(e);
    checkboxChangeHandler(e);
    //taskDeleter(e);
  };

  // const doneChecker = id => {
  //   list.filter(todo => todo.id == id)
  //     ? {
  //         textDecoration: "line-through",
  //         color: "gray",
  //         fontStyle: "italic"
  //       }
  //     : {
  //         textDecoration: "none",
  //         color: "black"
  //       };
  // };

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
                  // onChange={strikeThrough}
                  // style={doneChecker(taskItem.id)}
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
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class = "Delete" onChange={() => taskDeleter(taskItem)}>&nbsp;&times;&nbsp;</button><br/> */}
                <label id="Abouttask">&nbsp;&nbsp;{taskItem.description}</label>
              </tr>
            ))}
            {/* <tr>
              <input
                type="checkbox"
                value={checked}
                onChange={setChecked}
              ></input>
              <label
                className="Task"
                onChange={strikeThrough}
                style={
                  checked
                    ? {
                        textDecoration: "line-through",
                        color: "gray",
                        fontStyle: "italic"
                      }
                    : null
                }
              >
                Text
                <br />
              </label>
              <label id="Abouttask">&nbsp;&nbsp;&nbsp;&nbsp; About it</label>
            </tr> */}
            {/* <tr>
              <input
                type="checkbox"
                value={checked}
                onChange={setChecked}
              ></input>
              <label
                className="Task"
                onChange={strikeThrough}
                style={
                  checked
                    ? {
                        textDecoration: "line-through",
                        color: "gray",
                        fontStyle: "italic"
                      }
                    : null
                }
              >
                Some Text
                <br />
              </label>
              <label id="Abouttask">&nbsp;&nbsp;&nbsp;&nbsp; About it</label>
            </tr> */}
            {/* <tr>
              <input type="checkbox"></input>
              <label
                className="Task"
                onChange={strikeThrough}
                style={
                  checked.done
                    ? {
                        textDecoration: "line-through",
                        color: "gray",
                        fontStyle: "italic"
                      }
                    : null
                }
              >
                Blah
                <br />
              </label>
              <label id="Abouttask">&nbsp;&nbsp;&nbsp;&nbsp; Please Wait</label>
            </tr> */}
          </table>

          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1>We've got nothing here</h1>
            <h3>To display a list, please add tasks</h3>
          </center> */}
        </div>
      </div>
      <embed src= {aud} autostart="true" loop="true" height="0" width="0"></embed>
    </div>
  );
}

export default App;

{
  /* {list.map((todo) => 
                  <tr key = {todo.id}>
                    <input
                type="checkbox"
                value={checked}
                onChange={setChecked}
              ></input>
              <label
                className="Task"
                onChange={strikeThrough}
                style={
                  checked
                    ? {
                        textDecoration: "line-through",
                        color: "gray",
                        fontStyle: "italic"
                      }
                    : null
                }
              >
              {todo.task}<br />
              </label>  
              <label id="Abouttask">{todo.desc}</label>
                )} */
}
