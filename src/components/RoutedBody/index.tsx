import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../scenes/Home";

export const RoutedBody: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
