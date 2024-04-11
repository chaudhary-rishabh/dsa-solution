import React from 'react'
import ListView from '../components/ListView'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Solution from './Solution';
import CategoryList from './CategoryList';

const Dsa = () => {

  const location = useLocation();
  const isCategory = location.pathname === '/dsa/categorylist';
  const isSolution = location.pathname === '/dsa/categorylist/solution';
  const isListView = location.pathname === '/dsa';

  return (
    <div>
      {isListView ? (
        <ListView />
      ) : (
        <main>
          {isSolution && <Solution />}
          {isCategory && <Outlet />}
        </main>
      )}
    </div>
  )
}

export default Dsa