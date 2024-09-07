/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 22:51:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 23:00:55
 * @FilePath: /sports_win/src/page/VenueDetail.js
 */
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Wrapper } from "../components/utility/LayoutStyle";
import { theme } from "../style/theme";

const VenueDetail = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Grid container spacing={2}></Grid>
      </Wrapper>
    </ThemeProvider>
  );
};

export default VenueDetail;
