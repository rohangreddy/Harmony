import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';



/* rfce using VSC es7 extension to create functional component */
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>Satoshi</h3>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>
                {/* addChannel will allow for adding channel functionality */}
                <AddIcon className="sidebar__addChannel" />
            </div>

            <div className="sidebar__channelsList">
            {/* Component that will allow for adding of channels */}
            <SidebarChannel />
            </div>
            
        </div>
        <div className="sidebar__voice">
            <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                    <p>Stream</p>
            </div>

            <div className="sidebar__voiceIcons">
                <InfoIcon />
                <CallIcon />
            </div>
        </div>
        
        <div className="sidebar__profile">
            <Avatar />
            <div className="sidebar__profileInfo">
                <h3>@satoshi</h3>
                <p>#thisMyID</p>
            </div>

            <div className="sidebar__profileIcons">
                <HeadphonesIcon />
                <MicIcon />
                <SettingsIcon />

            </div>
        </div>
    </div>
  )
}

export default Sidebar