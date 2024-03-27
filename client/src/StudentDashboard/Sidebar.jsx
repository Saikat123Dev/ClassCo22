
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
  
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title flex bg-[#0605333e] '>
  <div className='sidebar-brand bg-[#06053300] rounded-full h-[70px] w-[70px] '>
    
    PROFILE
   
  </div>
   <div className='icon close_icon ' onClick={OpenSidebar}>X</div>
</div>


      <ul className='sidebar-list bg-[#0605333e] '>
        <li className='sidebar-list-item'>
          <a href="/Stud" className='flex'>
            <BsGrid1X2Fill className='icon' />
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/notes"  className='flex'>
            <BsFillGrid3X3GapFill className='icon' />
            Take Notes
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/quiz "  className='flex'>
            <BsPeopleFill className='icon' />
            Attempt Quiz
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/assignment"  className='flex'>
            <BsListCheck className='icon' />
            Assignment
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Voca"  className='flex'>
            <BsGrid1X2Fill className='icon' />
            Word Challenge
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/Stud"  className='flex'>
            <BsMenuButtonWideFill className='icon' />
            Update Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings"  className='flex'>
            <BsFillGearFill className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;