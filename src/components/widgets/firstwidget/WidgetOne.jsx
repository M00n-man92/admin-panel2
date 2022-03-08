import { SmartDisplay, Visibility } from '@mui/icons-material'
import { useEffect } from 'react'
import { useState } from 'react'
import { userRequest } from '../../../requestMethods'
import './widgetone.scss'

export default function WidgetOne() {
    const [user, setUser] = useState([])
    useEffect(() => {
        const trail = async () => {
            try {
               const res = await userRequest.get("user/find")
                setUser(res.data.data)
              
            }
            catch (e) {
                console.log("error appeaers" ,e)
            }


        }
        trail()
    }, [])
    return (
        <div className="one">
            <div className="widgettitle">
                <span>New Members Joined</span>
            </div>
            {user.map((item) => (<div className="containment" key={item._id}>

                <div className="widgetusercontainer">
                    <div className="imagecontainer">
                        <img src={item.profilepic} alt="" />
                    </div>
                    <div className="userinfo"><div className="username">
                        <span>{item.name}</span>
                    </div>
                        <div className="job">
                            <span>
                                {item.email}
                            </span>
                        </div></div>

                    <div className="divfobutton"><button> Display <Visibility className="holup" /></button></div>

                </div>
            </div>))}


        </div>
    )
}
