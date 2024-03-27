import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title flex bg-[#0605333e] '>
            <div className='sidebar-brand'>
                 PROFILE
            </div>
            <div className='icon close_icon' onClick={OpenSidebar}>X</div>
        </div>

        <ul className='sidebar-list bg-[#0605333e] '>
            <li className='sidebar-list-item'>
                <a href="/Teach" className='flex'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="teachquiz" className='flex'>
                    <BsFillGrid3X3GapFill className='icon'/> Upload Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="uploadAssign" className='flex'>
                    <BsFillGrid3X3GapFill className='icon'/> Upload Assignments
                </a>
            </li>
            <li className='sidebar-list-item flex flex-row'>
                <a href="" className='flex'>
                    <BsPeopleFill className='icon'/> Manage Students
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="QRCodegenerator" className='flex'>
                    <BsListCheck className='icon'/> Track Attendance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='flex'>
                    <BsMenuButtonWideFill className='icon'/> Update Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='flex'>
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar