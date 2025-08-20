//Browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import ListingPage from "./components/ListingPage";
import { company } from "./data/company";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound.tsx";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route element={<HomePage />}></Route>
    //     </Route>
    //   </Routes>
    // </Router>
    // {/* <Route path="/car/:id" element={<CarDetailsPage />} />
    // <Route path="/contact" element={<ContactPage />} /> */}
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={company[0].navigationID[0].id} element={<HomePage />} />
          <Route
            path={company[0].navigationID[1].id}
            element={<ListingPage />}
          />
          <Route path={company[0].navigationID[2].id} element={<About />} />
          <Route path={company[0].navigationID[3].id} element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    // <Layout />
  );
};

export default App;
