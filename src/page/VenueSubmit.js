/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-08 01:43:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 04:09:09
 * @FilePath: /sports_win/src/page/VenueSubmit.js
 */
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Wrapper } from "../components/utility/LayoutStyle";

import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { InfoCardMain, InfoCardNormalLarge } from "../components/card/InfoCard";
import { images } from "../data/data";
import { theme } from "../style/theme";

const VenueSubmit = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    if (touchEnd - touchStart > 75) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

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
        <Box py={2}>
          <InfoCardNormalLarge>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/icons/icon_info.svg"
                alt="配置"
                style={{ marginRight: "8px" }}
              />
              <Typography
                variant="body"
                sx={{
                  color: "text.third",
                  whiteSpace: "nowrap",
                }}
              >
                請選擇您的身份來預約運動場
              </Typography>
            </Box>
          </InfoCardNormalLarge>
          <CardMedia
            sx={{
              width: "100%",
              paddingTop: "16px",
            }}
            component="img"
            image={images[currentImageIndex]}
            alt="card"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
          }}
        >
          <InfoCardMain>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "primary.main",
              }}
            >
              預約日期
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.second",
              }}
            >
              2024/09/14
            </Typography>
          </InfoCardMain>
          <InfoCardMain>
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "primary.main",
              }}
            >
              預約時段
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "text.second",
              }}
            >
              10:00-11:00
            </Typography>
          </InfoCardMain>
        </Box>
        <InfoCardMain sx={{ margin: "16px 0px" }}>
          <Box
            sx={{
              display: "flex",
              Width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3SemiBold"
              sx={{
                color: "primary.main",
              }}
            >
              我要招募球友
            </Typography>
            <Checkbox />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/icons/icon_info.svg"
              alt="配置"
              style={{ marginRight: "8px" }}
            />
            <Typography
              variant="body"
              sx={{
                color: "text.third",
              }}
            >
              還在煩惱找不到球友嗎？有球必IN幫你快速媒合，輕鬆組隊打球！
            </Typography>
          </Box>
        </InfoCardMain>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "text.secondary",
            }}
          >
            場地金額
          </Typography>
          <Typography
            variant="h3SemiBold"
            sx={{
              color: "primary.main",
            }}
          >
            500元
          </Typography>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 2,
            backgroundColor: "background.paper",
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              color: "white !important",
              borderRadius: "8px",
              padding: "12px",
              boxShadow: "none",
            }}
            onClick={() => {
              console.log();
            }}
          >
            預定場地
          </Button>
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
};

export default VenueSubmit;
