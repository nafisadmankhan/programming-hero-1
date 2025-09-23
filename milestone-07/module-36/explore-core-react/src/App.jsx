import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./Todo";
import Actor from "./Actor"
import Singer from "./singer";
import Library from "./Library"


function App() {
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar'];
  const singers = [
    { id: 1, name: 'Dr. Mahfuz', age: 68 },
    { id: 2, name: 'Tahsan', age: 45 },
    { id: 3, name: 'Shuvro Dev', age: 57 },
  ]
  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Chemistry', price: 350},
    {id: 3, name: 'Math', price: 255},
    {id: 4, name: 'Biology', price: 290},
  ]
  return (
    <>
      <h1>React Core concepts</h1>
      <Library books={books}></Library>
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      {/* {
        actors.map(actor => <Actor actor={actor}></Actor>)
      } */}
    </>
  );
}

function Player({ name, runs, respect = 0 }) {
  // console.log(props);
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
      <p>Respect: {respect}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 17;
  const name = "Jolil";
  const personStyle = {
    color: "red",
    textAlign: "left",
  };

  return (
    <p style={personStyle}>
      I am a person.{name} {age}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

export default App;
