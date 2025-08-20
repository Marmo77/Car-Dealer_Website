//Browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import ListingPage from "./ListingPage";
import { company } from "./data/company";

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
        </Route>
      </Routes>
    </Router>
    // <Layout />
  );
};

export default App;
