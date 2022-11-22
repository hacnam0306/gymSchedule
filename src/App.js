import React from "react";
import "./App.css";
import { BsFilter } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import WorkoutSchedule from "./components/Workout/WorkoutSchedule";
import Instruction from "./components/Instuction/Instruction";
import { useState } from "react";
const App = () => {
  const navigate = useNavigate();

  return (
    <div classname='App container-fluid'>
      <div className='row'>
        <ul className=' navbar'>
          <li onClick={() => navigate("/")}>Schedule</li>
          <li>
            <BsFilter />
          </li>
        </ul>
      </div>
      <div className='row week-days'>
        <ul className=''>
          <NavLink
            className='text-muted '
            activeClassName='active'
            to='/monday/1'>
            Mon
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/tuesday/2'>
            Tue
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/wednesday/3'>
            Wed
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/thursday/4'>
            Thu
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/friday/5'>
            Fri
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/saturday/6'>
            Sat
          </NavLink>
          <NavLink
            className='text-muted'
            activeClassName='active'
            to='/sunday/0'>
            Sun
          </NavLink>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path=':day/:id' exact element={<WorkoutSchedule />} />
          <Route path='/' exact element={<WorkoutSchedule />} />
          <Route path=':day/:id/:ex' exact element={<Instruction />} />
          <Route path='*' element={<WorkoutSchedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
