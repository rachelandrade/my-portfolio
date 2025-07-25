import { Route, Routes } from "react-router-dom";
import Contact from './Contact';
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}