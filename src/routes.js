import { Routes, Route } from 'react-router-dom';
import App from './App';
import Chart from './components/charts/chart';
import NavBar from './components/navbar.component';
import TodoNote from './components/todoDetails/todoNote';


const RoutesAll = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/src/components/charts/chart.js" element={<Chart />} />
                <Route path="todo/:id" element={<TodoNote />} />
            </Routes>
        </>
    );
}

export default RoutesAll;