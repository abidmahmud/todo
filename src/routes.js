import { Routes, Route } from 'react-router-dom';
import App from './App';
import Chart from './components/charts/chart';
import NavBar from './components/navbar.component';


const RoutesAll = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/src/components/charts/chart.js" element={<Chart />} />
            </Routes>
        </>
    );
}

export default RoutesAll;