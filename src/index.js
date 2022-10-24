import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import CharactersList from './pages/CharactersList';
import CharacterDetail from './pages/CharacterDetail';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar brandTitle="Ricky and Monty" />

                <Routes>
                    <Route path="/" element={<CharactersList />} />
                    <Route
                        path="/character/:id"
                        element={<CharacterDetail />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const container = document.getElementById('root');
const app = ReactDOM.createRoot(container);
app.render(<App />);
