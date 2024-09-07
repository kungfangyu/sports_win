/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 13:16:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 21:35:00
 * @FilePath: /sports_win/src/App.js
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import SiteList from "./page/VenueList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/basketball" element={<SiteList />} />
        {/* <Route exact path="/basketball" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
