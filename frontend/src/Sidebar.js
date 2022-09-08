import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

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
    </div>
  )
}

export default Sidebar