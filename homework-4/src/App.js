import React from "react";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import { MainPage } from "../src/pages/MainPage";
import { TaskDescriptionList } from "./components/Task_6/Task_Description_List";
import { TaskDescription } from "./components/Task_6/Task_Description";
import { Layout } from "./components/Task_6/Layout";

function App() {
  return (

    <div>
        <Layout />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/description" element={<TaskDescriptionList />}>
            <Route path=":taskId" element={<TaskDescription />} />
          </Route>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
