import './topbar.scss'
import { NotificationsOutlined, Settings, Logout } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { userLogout } from '../../redux/apiCall'
import { useDispatch } from 'react-redux'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Login from '../../pages/login/Login'
export default function Topbar() {
    const dispatch = useDispatch()
    const user = localStorage.getItem("persist:root")
    var sumalies
    var commonPeople
    if (user) {
        commonPeople = JSON.parse(user).user
        sumalies = JSON.parse(commonPeople).currentUser


    }

    const logoutHandler = () => {
        userLogout(dispatch)
    }

    return (
        <>
        <Router>
            <Switch>
                {!sumalies ? <Redirect to="/login" />:<div className="topbar">
                    <div className="gio">
                        <div className="left">
                            <div className="letonewithyou"><span>
                                Admin Panel
                            </span></div>

                        </div>
                        <div className="center"></div>
                        <div className="right">
                            <div className="badge"><Badge color="primary" badgeContent="3"> <NotificationsOutlined /></Badge></div>
                            <div className="badge"><Badge badgeContent="4"><Settings /></Badge></div>
                            {sumalies ? <div className="onurbody" onClick={logoutHandler}><Logout /></div> : <div></div>}

                            <div className="imagetran">
                                <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" className="colo" />
                            </div>
                        </div>
                    </div>
                </div>}
            </Switch>
        </Router>
</>
    )
}
