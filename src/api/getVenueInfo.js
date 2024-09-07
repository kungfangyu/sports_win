/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 02:27:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 02:33:04
 * @FilePath: /sports_win/src/api/getVenueInfo.js
 */
import service from "./axios";

export const getVenueInfo = async (id) => {
  return await service({
    url: `/court_one`,
    method: "get",
    params: { id },
  });
};
