/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 01:43:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 01:46:48
 * @FilePath: /sports_win/src/page/VenueSubmit.js
 */
import { ThemeProvider } from "@mui/material/styles";
import { Wrapper } from "../components/utility/LayoutStyle";

import { theme } from "../style/theme";

const VenueJoin = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
};

export default VenueJoin;
