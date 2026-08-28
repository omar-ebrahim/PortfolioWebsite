import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import StudioPage from './pages/studio/StudioPage';

function App() {
    return (
        <BrowserRouter
            basename={
                window.location.pathname.startsWith('/PortfolioWebsite')
                    ? '/PortfolioWebsite'
                    : undefined
            }
        >
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/studio/*" element={<StudioPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
