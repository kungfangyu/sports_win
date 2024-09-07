/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 22:51:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 03:07:04
 * @FilePath: /sports_win/src/page/VenueDetail.js
 */
import {
  Box,
  CircularProgress,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { getVenueInfo } from "../api/getVenueInfo";
import {
  InfoCardNormal,
  InfoCardNormalLarge,
} from "../components/card/InfoCard";
import ToggleCard from "../components/card/ToggleCard";
import { Wrapper } from "../components/utility/LayoutStyle";
import { theme } from "../style/theme";

const ColoredCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

const VenueDetail = () => {
  const { id } = useParams();
  const [venueInfo, setVenueInfo] = useState(null);

  useEffect(() => {
    const fetchVenueInfo = async () => {
      try {
        const { data } = await getVenueInfo(id);
        console.log(data);
        const {
          name,
          address,
          availability_status,
          official_website,
          manager_phone,
          opening_days,
          pay_use,
          venue_description,
          affiliated_property,
          opening_closure_notice,
          parking_type,
          affiliated_agency,
        } = data;
        setVenueInfo({
          name,
          address,
          availability_status,
          official_website,
          manager_phone,
          opening_days,
          pay_use,
          venue_description,
          affiliated_property,
          opening_closure_notice,
          parking_type,
          affiliated_agency,
        });
      } catch (error) {
        console.error("fetchVenueInfo failed:", error);
      }
    };
    fetchVenueInfo();
  }, [id]);

  if (!venueInfo) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ColoredCircularProgress />
      </Box>
    );
  }

  const {
    name,
    address,
    availability_status,
    official_website,
    manager_phone,
    opening_days,
    venue_description,
    affiliated_property,
    opening_closure_notice,
    parking_type,
    affiliated_agency,
  } = venueInfo;

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
            {name}
          </Typography>
        </Box>
        <Link
          component="a"
          variant="body"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${address}`
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
          {address}
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
          {manager_phone}
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
          {official_website}
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
              {availability_status}
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
              {opening_days}
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
              {opening_closure_notice}
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
              {parking_type}
            </Typography>
          </InfoCardNormalLarge>
        </Box>
        <ToggleCard
          title="運動場館介紹"
          subtitle={affiliated_agency}
          content={venue_description}
          subcontent={affiliated_property}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default VenueDetail;
