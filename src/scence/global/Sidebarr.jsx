import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import { sideBarData } from "../../data/mockData";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import profileImage from "../../data/images/IMG_9071.jpg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapsed } = useProSidebar();
  return (
    <Link to={to}>
      <MenuItem
        className="menuItems"
        active={selected === title}
        style={{
          color: colors.greenAccent[500],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        {collapsed ? "" : <Typography>{title}</Typography>}
      </MenuItem>
    </Link>
  );
};

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
          paddingLeft={collapsed ? "" : "40px"}
        >
          <Menu
            style={{
              height: "100%",
              minHeight: "100vh",
              display: "flex",
            }}
          >
            <MenuOutlinedIcon
              onClick={() => collapseSidebar()}
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
                    marginLeft: "25px",
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
                <Typography variant="h3">Zeyghami</Typography>
              </Box>
            )}
            <Box style={{ marginTop: "20px" }}>
              {sideBarData.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </Box>
          </Menu>
        </Box>
      </Sidebar>
    </div>
  );
};

export default Sidebarr;
