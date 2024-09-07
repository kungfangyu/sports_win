/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 13:16:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 16:38:09
 * @FilePath: /sports_win/src/App.js
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/librarylist" element={<LibraryList />} />
        {/* <Route exact path="librarydetail/:id" element={<LibraryDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
