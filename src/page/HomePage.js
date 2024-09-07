/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 16:33:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 00:47:05
 * @FilePath: /sports_win/src/page/HomePage.js
 */
/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 16:33:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-07 22:49:59
 * @FilePath: /sports_win/src/page/HomePage.js
 */
import { Box, Grid, Link, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import BaseCard from "../components/card/BaseCardStyle";
import { Wrapper } from "../components/utility/LayoutStyle";
import { theme } from "../style/theme";

const sportsType = [
  {
    name: "籃球",
    path: "basketball",
  },
  {
    name: "羽球",
    path: "badminton",
  },
  {
    name: "桌球",
    path: "tabletennis",
  },
  {
    name: "排球",
    path: "volleyball",
  },
];
const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Grid container spacing={2}>
          {sportsType.map((item) => (
            <Grid item xs={6} key={item.name}>
              <Link href={`/${item.path}`}>
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
              </Link>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </ThemeProvider>
  );
};

export default HomePage;
