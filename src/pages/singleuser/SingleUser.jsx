import './singleuser.scss'
import { LineStyle,  Timeline, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, PermIdentityOutlined, StorefrontOutlined, AttachMoney, PhoneAndroidOutlined, UpdateOutlined, PublishRounded, PublishOutlined,  } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function SingleUser() {
    return (
        <div className="singleuser">
            <div className="singletitle">
                <div className="singleleft">
                    <span>Edit User</span>
                </div>
                <div className="bollleright">
                    <div className="rightbutton">
                        <Link to="/newuser"><button>Create</button></Link>
                        
                    </div>
                </div>
            </div>
            <div className="singleness">
                <div className="singleacuqntance">

                    <div className="singleprob">
                        <div className="userstuff">
                            <div className="inmagecontainnre">

                            </div>
                            <div className="singleinfo">
                                <span>
                                    Mac Miller
                                </span>
                                <span>
                                    Software Engineer
                                </span>
                            </div>
                        </div></div>
                    <div className="acocunt">
                        <span>Account Details</span>
                    </div>
                    <div className="userallstugg">
                        <div className="individualstuff">
                            <PermIdentityOutlined />
                            <span>Mack miller</span>
                        </div>
                        <div className="individualstuff">
                            <MailOutline />
                            <span>Mack miller@email.com</span>
                        </div>
                        <div className="individualstuff">
                            <WorkOutline />
                            <span>+245234534</span>
                        </div>

                        <div className="individualstuff">
                            <PhoneAndroidOutlined />
                            <span>095435345345</span>
                        </div>
                    </div>



                </div>
                <div className="marginnes"></div>
                <div className="winglehestiatation">
                    <div className="singletitle">
                        <span>Edit</span>
                    </div>
                    <div className="wingleedittor">
                        <div className="wingletextarea">
                            <div className="textarea">
                                <label>User Name</label>
                                <input type="text" placeholder="Mac Miller"/>
                            </div>
                            <div className="textarea">
                                <label>Full Name</label>
                                <input type="text" placeholder="Mac Miller"/>
                            </div>
                            <div className="textarea">
                                <label>Email</label>
                                <input type="email" placeholder="Mac Miller@gmail.com"/>
                            </div>
                            <div className="textarea">
                                <label>Phonne nO</label>
                                <input type="number" placeholder="093523466123"/>
                            </div>
                        </div>
                        <div className="imagearea">
                            <div className="holeoln">
                                <div className="areacontain">
                                    <img src="assets/An entry from , powered by Tumblr.com.jpg" alt="" />
                                </div>
                                <label htmlFor="file"><PublishOutlined /></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <div className="holonbutton">
                                <button>Update</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
