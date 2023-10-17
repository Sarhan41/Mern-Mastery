import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CreateBook, DeleteBook, EditBook, Home, ShowBook } from "./Pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}
