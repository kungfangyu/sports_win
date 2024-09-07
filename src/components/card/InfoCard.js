/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 01:58:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 01:59:34
 * @FilePath: /sports_win/src/components/card/InfoCard.js
 */
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const InfoCardNormal = styled(Card)(() => {
  return {
    width: "100%",
    borderRadius: "16px",
    padding: "12px",
    boxShadow: "none",
    backgroundColor: "#EDF8FA",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };
});

const InfoCardNormalLarge = styled(Card)(() => {
  return {
    maxWidth: "100%",
    borderRadius: "16px",
    padding: "12px",
    boxShadow: "none",
    backgroundColor: "#F1F3F4",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };
});

export { InfoCardNormal, InfoCardNormalLarge };
