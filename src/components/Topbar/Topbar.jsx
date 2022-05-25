import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';




export default function Topbar() {
    return (
      <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          
        
          <span className="logo">Healing Chi </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          
          <img src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?cs=srgb&dl=pexels-dziana-hasanbekava-7275385.jpg&fm=jpg" alt="User Profile" className="topbarProfilePic" />
        
        </div>
      </div>
    </div>
  );
}
