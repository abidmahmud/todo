import { Routes, Route } from 'react-router-dom';
import App from './App';
import Chart from './components/chart';
import NavBar from './components/navbar.component';
import Pie from './components/pieChart.component';

const RoutesAll = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/src/components/chart.js" element={<Chart />} />
            </Routes>
        </>
    );
}

export default RoutesAll;