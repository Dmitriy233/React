import React from "react";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Task1 from "./components/Task_1/Task1";
import Task2 from "./components/Task_2/Task2";
import Task3 from "./components/Task_3/Task3";
import Task4 from "./components/Task_4/Task4";
import Task5 from "./components/Task_5/Task5";
import { MainPage } from "./components/Task_6/Main_page";
import { TaskDescriptionList } from "./components/Task_6/Task_Description_List";
import { TaskDescription } from "./components/Task_6/Task_Description";
import { Layout } from "./components/Task_6/Layout";

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="task_description" element={<TaskDescriptionList />}>
            <Route path=":taskID" element={<TaskDescription />} />
          </Route>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
          <Route path="task5" element={<Task5 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
