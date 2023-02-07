import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import profileImage from "../../data/images/IMG_9071.jpg";

const Sidebarr = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Box
          backgroundColor={colors.primary[400]}
          paddingLeft={collapsed ? "25px" : "40px"}
        >
          <Menu
            onClick={() => collapseSidebar()}
            style={{
              height: "100vh",
              display: "flex",
            }}
          >
            <MenuOutlinedIcon
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "100%",
                marginTop: "10px",
                cursor: "pointer",
              }}
            />
            {!collapsed && (
              <Typography
                variant="h3"
                color={colors.grey[100]}
                textAlign="center"
                marginY="15px"
              >
                Admin
              </Typography>
            )}

            {!collapsed && (
              <Box display="flex" marginBottom="20px" flexDirection="column">
                <img
                  alt="profile-img"
                  src={profileImage}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                />
              </Box>
            )}
            {!collapsed && (
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0 " }}
                >
                  Mohammad
                </Typography>
                <Typography variant="h3" color={colors.greenAccent[500]}>
                  Zeyghami
                </Typography>
              </Box>
            )}
            <Box></Box>
          </Menu>
        </Box>
      </Sidebar>
    </div>
  );
};

export default Sidebarr;
