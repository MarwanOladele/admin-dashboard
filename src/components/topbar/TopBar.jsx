import React from "react";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from '@mui/icons-material/Settings';
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topleft">
          <span className="logo">Marwan</span>
        </div>
        <div className="topright">
          <div className="topbar-icons-container">
            <NotificationsNone />
            <span className="topicon-badge">1</span>
          </div>
          <div className="topbar-icons-container">
            <LanguageIcon />
            <span className="topicon-badge">1</span>
          </div>
          <div className="topbar-icons-container">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
