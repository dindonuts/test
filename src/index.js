import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";
import UpdateList from "./UpdateList";


var destination = document.querySelector('#container');


ReactDOM.render(
  <div>
	<TodoList/>
  <UpdateList/>
  </div>, 
  destination
);
