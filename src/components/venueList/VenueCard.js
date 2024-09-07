/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-05 08:48:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 01:23:54
 * @FilePath: /sports_win/src/components/venueList/VenueCard.js
 */

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import BaseCard from "../card/BaseCardStyle";
import { BaseChips } from "../utility/ChipsStyle";

const VenueCard = ({ info, isFree }) => {
  const { id, name, image, address, reserve_status } = info;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <BaseCard>
      <CardActionArea onClick={() => navigate(`${location.pathname}/${id}`)}>
        <Box
          sx={{
            borderRadius: "8px",
            overflow: "hidden",
            margin: "0px 16px ",
          }}
        >
          <CardMedia
            sx={{
              width: "100%",
            }}
            component="img"
            image="/images/sport.jpg"
            alt={name}
          />
        </Box>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              mb: "4px",
            }}
          >
            <Typography gutterBottom variant="h3SemiBold" component="div">
              {name}
            </Typography>
            {!isFree && (
              <BaseChips
                sx={{
                  marginLeft: "8px",
                  color: "success.main",
                  fontWeight: "800",
                }}
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FiberManualRecordIcon
                      fontSize="10px"
                      sx={{ marginRight: "4px" }}
                    />
                    尚有空位
                  </Box>
                }
              />
            )}
          </Box>
          <Link
            component="a"
            variant="body"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.secondary",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
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
        </CardContent>
      </CardActionArea>
    </BaseCard>
  );
};

export default VenueCard;
