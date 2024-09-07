/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-07 16:27:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-08 01:31:22
 * @FilePath: /sports_win/src/page/VenueList.js
 */
import dayjs from "dayjs";

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import ColorButton from "../components/button/ColorButton";
import { Wrapper } from "../components/utility/LayoutStyle";
import VenueCard from "../components/venueList/VenueCard";
import { venueListData } from "../data/fakeData";
import { theme } from "../style/theme";

import { BaseSelect } from "../components/utility/SelectStyle";
import { taipeiDistricts, timeSlots } from "../data/data";

const VenueList = () => {
  const [value, setValue] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSiteType, setSelectedSiteType] = useState("");
  const [dateValue, setDateValue] = useState(dayjs());

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSiteTypeChange = (event) => {
    setSelectedSiteType(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Box sx={{ width: "100%", color: theme.palette.white.main }}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary.main"
              indicatorColor="primary.main"
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: "space-between",
                },
                "& .MuiTab-root": {
                  flex: 1,
                  maxWidth: "none",
                  color: theme.palette.text.secondary,
                },
                "& .Mui-selected": {
                  color: theme.palette.primary.main,
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <Tab value={1} label="付費場地" />
              <Tab value={0} label="免費場地" />
            </Tabs>
          </Box>
        </Box>
        {value === 1 ? (
          <>
            <Box mt={4}>
              <FormControl fullWidth>
                <InputLabel id="district-select-label">選擇行政區</InputLabel>
                <BaseSelect
                  labelId="district-select-label"
                  id="district-select"
                  value={selectedDistrict}
                  label="選擇行政區"
                  onChange={handleDistrictChange}
                >
                  <MenuItem value="全部">全部</MenuItem>
                  {taipeiDistricts.map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </BaseSelect>
              </FormControl>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="日期"
                      value={dateValue}
                      onChange={(newValue) => {
                        setDateValue(newValue);
                      }}
                      format="YYYY/MM/DD"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            "& .MuiInputBase-root": {
                              borderRadius: "10px",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="site-type-select-label">
                      選擇時間
                    </InputLabel>
                    <BaseSelect
                      labelId="site-type-select-label"
                      id="site-type-select"
                      value={selectedSiteType}
                      label="選擇時間"
                      onChange={handleSiteTypeChange}
                    >
                      {timeSlots.map((time) => {
                        return <MenuItem value={time}>{time}</MenuItem>;
                      })}
                    </BaseSelect>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <ColorButton mt={2}>查詢</ColorButton>
            <Box>
              {venueListData.map((item) => {
                return <VenueCard key={item.id} info={item} isFree={false} />;
              })}
            </Box>
          </>
        ) : (
          <>
            <Box mt={4}>
              <FormControl fullWidth>
                <InputLabel id="district-select-label">選擇行政區</InputLabel>
                <BaseSelect
                  labelId="district-select-label"
                  id="district-select"
                  value={selectedDistrict}
                  label="選擇行政區"
                  onChange={handleDistrictChange}
                >
                  <MenuItem value="全部">全部</MenuItem>
                  {taipeiDistricts.map((district) => (
                    <MenuItem key={district} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </BaseSelect>
              </FormControl>
              <ColorButton mt={2}>查詢</ColorButton>
              <Box>
                {venueListData.map((item) => {
                  return <VenueCard key={item.id} info={item} isFree={true} />;
                })}
              </Box>
            </Box>
          </>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default VenueList;
