import React from 'react';
import ReactDOM from 'react-dom/client';
import ListItem from './list/listItem';
import Header from './components/header';
import Footer from './components/footer';
import List from './list/list';


const a = <h1 id="my_hello">i locve</h1>
const b = ["af", "gh"]
const clr = {
  backgroundColor: "green"
}

const fun = function () {
  console.log("hyyy");

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>

    <Header />
    <div className='app-body'>
     <List/>
    </div>
    <Footer/>
  </div>

);

