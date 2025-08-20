//Browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route element={<HomePage />}></Route>
    //     </Route>
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/listings" element={<ListingsPage />} />
          <Route path="/car/:id" element={<CarDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </Router>
    // <Layout />
  );
};

export default App;
