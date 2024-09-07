/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 00:37:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 02:27:56
 * @FilePath: /sports_win/src/api/axios.js
 */
import axios from "axios";

const service = axios.create({
  baseURL: "https://8172-211-23-28-230.ngrok-free.app/api/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

export default service;
