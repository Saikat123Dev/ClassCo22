import React, { useState } from 'react';
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import '../StudentApp.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarStyle = {
    backgroundColor: isHovered ? '#2826713e' : '#2826713e', // Updated background color
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} style={sidebarStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className='sidebar-title flex bg-[#2826713e] '>
        <div className='sidebar-brand bg-[#06053300] rounded-full h-[70px] w-[70px] '>
          PROFILE
        </div>
        <div className='icon close_icon' onClick={OpenSidebar}>X</div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/Teach" className='flex'> {/* Updated href */}
            <BsGrid1X2Fill className='icon' />
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="teachquiz" className='flex'> {/* Updated href */}
            <BsFillGrid3X3GapFill className='icon' />
            Upload Quiz
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="uploadAssign" className='flex'> {/* Updated href */}
            <BsFillGrid3X3GapFill className='icon' />
            Upload Assignments
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex'> {/* Updated href */}
            <BsPeopleFill className='icon' />
            Manage Students
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="QRCodegenerator" className='flex'> {/* Updated href */}
            <BsListCheck className='icon' />
            Track Attendance
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex'> {/* Updated href */}
            <BsMenuButtonWideFill className='icon' />
            Update Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex'> {/* Updated href */}
            <BsFillGearFill className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
