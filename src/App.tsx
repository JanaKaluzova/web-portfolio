import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
