/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 13:16:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 22:59:21
 * @FilePath: /sports_win/src/App.js
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import VenueDetail from "./page/VenueDetail";
import VenueList from "./page/VenueList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/basketball" element={<VenueList />} />
        <Route exact path="/detail" element={<VenueDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
