/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 13:16:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 03:34:35
 * @FilePath: /sports_win/src/App.js
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import VenueDetail from "./page/VenueDetail";
import VenueJoin from "./page/VenueJoin";
import VenueList from "./page/VenueList";
import VenueSubmit from "./page/VenueSubmit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:sport" element={<VenueList />} />

        <Route path="/:sport/:id" element={<VenueDetail />} />
        <Route path="/:sport/:id/submit" element={<VenueSubmit />} />
        <Route path="/:sport/detail/:id/join" element={<VenueJoin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
