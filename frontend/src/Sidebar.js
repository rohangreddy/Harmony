import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/* rfce using VSC es7 extension to create functional component */
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>Satoshi</h3>
            <ExpandMoreIcon />
        </div>



    </div>
  )
}

export default Sidebar