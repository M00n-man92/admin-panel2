import './topbar.scss'
import { NotificationsOutlined, Settings} from '@mui/icons-material'
import { Badge } from '@mui/material'
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="gio">
                <div className="left">

                </div>
                <div className="center"></div>
                <div className="right">
                    <div className="badge"><Badge color="primary" badgeContent="3"> <NotificationsOutlined/></Badge></div>
                   <div className="badge"><Badge badgeContent="4"><Settings/></Badge></div>
                   
                    <div className="imagetran">
                        <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" className="colo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
