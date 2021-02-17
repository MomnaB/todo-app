import React from 'react'
import './index.css'
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
function App() {
  return (
    <div className="App">
     <AddTodo />
     <List />
     <Home/>
     <Navbar />
 
    </div>
  );
}

export default App;
