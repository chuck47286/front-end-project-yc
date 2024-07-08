import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const a = 10;

  // const list = [
  //   {username:"shuangyue",name:"双越"},
  //   // {username:"zhangsan",name:"张三"},
  //   {username:"lisi",name:"李四"},
  // ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* 注释在 TSX 中的写法 */}
        {/* 获取循环结构 */}
        {/* <ul>
          {list.map(user => {
            const {username, name} = user
            return <li key={username}>{name}</li>
          })}
        </ul> */}

        {/* <div>
          <label htmlFor="input1">姓名</label>
          <input id="input1"/>
        </div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          // style={{color:"red", backgroundColor: "white"}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
