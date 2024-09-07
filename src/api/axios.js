/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 00:37:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 00:38:40
 * @FilePath: /sports_win/src/api/axios.js
 */
import axios from "axios";

const service = axios.create({
  baseURL: "https://4645-2001-b400-e246-50fe-d67-f8b-90cd-d72c.ngrok-free.app/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

export default service;
