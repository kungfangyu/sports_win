/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 22:51:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 02:01:47
 * @FilePath: /sports_win/src/page/VenueDetail.js
 */
import { Box, Divider, Link, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import {
  InfoCardNormal,
  InfoCardNormalLarge,
} from "../components/card/InfoCard";
import ToggleCard from "../components/card/ToggleCard";
import { Wrapper } from "../components/utility/LayoutStyle";
import { theme } from "../style/theme";

const VenueDetail = () => {
  const title = "場館介紹";
  const content = "本場館興建於民國91年，可進行籃球、排球、羽球活動。";
  const subtitle = "場館隸屬機關屬性";
  const subcontent =
    "單一功能型運動場館（非前三項運動場館型態，且運動場館僅含一項運動設施）";

  return (
    <ThemeProvider theme={theme}>
      <Wrapper sx={{ backgroundColor: "#fff" }}>
        <Box my={2}>
          <Typography
            variant="h2SemiBold"
            sx={{
              color: "text.primary",
            }}
          >
            東吳大學體育館
          </Typography>
        </Box>
        <Link
          component="a"
          variant="body"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            "臺北市中正區貴陽街一段56號"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            marginLeft: "8px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/icons/icon_location.svg"
            alt="位置"
            style={{ marginRight: "8px" }}
          />
          臺北市中正區貴陽街一段56號
        </Link>
        <Link
          component="a"
          variant="body"
          href={`tel:${encodeURIComponent("(02)28819471#5606")}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            marginLeft: "8px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/icons/icon_phone.svg"
            alt="電話"
            style={{ marginRight: "8px" }}
          />
          (02)28819471#5606
        </Link>
        <Link
          component="a"
          variant="body"
          href={"http://www.scu.edu.tw/physical/"}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            marginLeft: "8px",
            textDecoration: "underline",
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src="/icons/icon_web.svg"
            alt="官網"
            style={{ marginRight: "8px" }}
          />
          http://www.scu.edu.tw/physical/
        </Link>
        <Divider />
        <Box
          py={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          <InfoCardNormal>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "primary.main",
              }}
            >
              開放情形
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.second",
                paddingLeft: "8px",
              }}
            >
              付費對外開放使用
            </Typography>
          </InfoCardNormal>
          <InfoCardNormal>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "primary.main",
              }}
            >
              開放時間
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.second",
                paddingLeft: "8px",
              }}
            >
              付費對外開放使用
            </Typography>
          </InfoCardNormal>
        </Box>
        <Divider />
        <Box
          py={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <InfoCardNormalLarge>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "text.primary",
              }}
            >
              開放情形
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.secondary",
                paddingLeft: "8px",
              }}
            >
              本場地以東吳大學教學、活動優先使用，如需辦理大型賽會活動，仍需先與管理單位借用。
            </Typography>
          </InfoCardNormalLarge>
          <InfoCardNormalLarge>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "text.primary",
              }}
            >
              停車場種類
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.secondary",
                paddingLeft: "8px",
              }}
            >
              一般停車場
            </Typography>
          </InfoCardNormalLarge>
        </Box>
        <ToggleCard
          title={title}
          subtitle={subtitle}
          content={content}
          subcontent={subcontent}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default VenueDetail;
