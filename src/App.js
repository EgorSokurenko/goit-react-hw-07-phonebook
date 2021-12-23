import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
const ContactForm = lazy(() => import("./components/ContactForm"));
const Filter = lazy(() => import("./components/Filter/"));
const ContactList = lazy(() => import("./components/ContactList/"));

export default function App() {
  return (
    <div>
      <h1>header</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}
