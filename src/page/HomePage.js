/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 16:33:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 17:55:34
 * @FilePath: /sports_win/src/page/HomePage.js
 */
import { Box, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import BaseCard from "../components/card/BaseCardStyle";
import { Wrapper } from "../components/utility/LayoutStyle";
import { theme } from "../style/theme";

const sportsType = [
  {
    name: "籃球",
    icon: "",
  },
  {
    name: "羽球",
    icon: "",
  },
  {
    name: "桌球",
    icon: "",
  },
  {
    name: "排球",
    icon: "",
  },
];
const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Grid container spacing={2}>
          {sportsType.map((item) => (
            <Grid item xs={6} key={item.name}>
              <BaseCard sx={{ textAlign: "center", height: "76px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="/icons/icon_location.svg" width="30px" alt="" />
                  <Typography variant="bodySemiBold" mt={1}>
                    {item.name}
                  </Typography>
                </Box>
              </BaseCard>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </ThemeProvider>
  );
};

export default HomePage;
