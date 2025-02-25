import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import SalesIcon from "@mui/icons-material/AttachMoney";
import CreditIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "bisque",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#1976d2",
            cursor: "default",
          }}
        >
          <ShoppingCartIcon />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginLeft: "5px" }}
          >
            Grocery Log
          </Typography>
        </div>

        <div style={{ flexGrow: 1 }}></div>

        {isSmallScreen ? (
          <Tooltip title="Menu" arrow>
            <IconButton
              style={{ color: "#1976d2" }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <div className="desktop-options">
            <Tooltip title="Dashboard" arrow>
              <IconButton
                component={Link}
                to="/"
                style={{ color: "#388e3c" }}
              >
                <DashboardIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Inventory" arrow>
              <IconButton
                component={Link}
                to="/inventory"
                style={{ color: "#ff5722" }}
              >
                <InventoryIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Sales Log" arrow>
              <IconButton
                component={Link}
                to="/sales"
                style={{ color: "#673ab7" }}
              >
                <SalesIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Credits" arrow>
              <IconButton
                component={Link}
                to="/credits"
                style={{ color: "#FF9800" }}
              >
                <CreditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Profile" arrow>
              <IconButton
                component={Link}
                to="/profile"
                style={{
                  color: "#FF5722",
                  marginRight: "10px",
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Logout" arrow>
              <IconButton
                component={Link}
                to="/logout"
                style={{
                  color: "#f44336",
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem
            component={Link}
            to="/"
            onClick={handleMenuClose}
          >
            <DashboardIcon style={{ color: "#388e3c", marginRight: "10px" }} />
            Dashboard
          </MenuItem>
          <MenuItem
            component={Link}
            to="/inventory"
            onClick={handleMenuClose}
          >
            <InventoryIcon style={{ color: "#ff5722", marginRight: "10px" }} />
            Inventory
          </MenuItem>
          <MenuItem
            component={Link}
            to="/sales"
            onClick={handleMenuClose}
          >
            <SalesIcon style={{ color: "#673ab7", marginRight: "10px" }} />
            Sales Log
          </MenuItem>
          <MenuItem
            component={Link}
            to="/credits"
            onClick={handleMenuClose}
          >
            <CreditIcon style={{ color: "#FF9800", marginRight: "10px" }} />
            Credits
          </MenuItem>
          <MenuItem
            component={Link}
            to="/profile"
            onClick={handleMenuClose}
          >
            <AccountCircleIcon
              style={{ color: "#FF5722", marginRight: "10px" }}
            />
            Profile
          </MenuItem>
          <MenuItem
            component={Link}
            to="/logout"
            onClick={handleMenuClose}
          >
            <LogoutIcon style={{ color: "#f44336", marginRight: "10px" }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
