// import css
import "./App.css";

// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Layout from "./pages/Layout";
import Overview from "./pages/Overview";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Overview />} />
                    <Route path="revenue" element={<p> Revenue </p>} />
                    <Route path="clients" element={<p> Clients </p>} />
                    <Route path="profits" element={<p> Profits </p>} />
                    <Route path="expenses" element={<p> Expenses </p>} />
                    <Route path="*" element={<p> 404 </p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
