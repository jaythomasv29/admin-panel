import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';

import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            En
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <ListAltOutlined />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <NotificationsNoneOutlined />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-avatar" className="avatar"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar