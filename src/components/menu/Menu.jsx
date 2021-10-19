import { LineStyle, TrendingUp, Timeline, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, PermIdentityOutlined, StorefrontOutlined, AttachMoney } from '@mui/icons-material'
import './menu.scss'

export default function Menu() {
    return (
        <div className="menu">
            <div className="menucontainer">
            <div className="allout">
                    <div className="title">
                        <span>DashBoard</span>
                    </div>
                    <div className="objects">
                        <ul className="obtitle">
                            <li className="listitems">
                                <LineStyle />
                                <span>Home</span>

                            </li>
                            <li className="listitems">
                                <TrendingUp />
                                <span>Home</span>
                            </li>
                            <li className="listitems">
                                <Timeline />
                                <span>Home</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="allout">
                    <div className="title">
                        <span>Quick Menu</span>
                    </div>
                    <div className="objects">
                        <ul className="obtitle">
                            <li className="listitems">
                                <PermIdentityOutlined />
                                <span> User</span>

                            </li>
                            <li className="listitems">
                                <StorefrontOutlined />
                                <span>Products</span>
                            </li>
                            <li className="listitems">
                                <AttachMoney />
                                <span>Transactions</span>
                            </li>
                        </ul>
                    </div>

                </div>
                
                <div className="allout">
                    <div className="title">
                        <span>Notifications</span>
                    </div>
                    <div className="objects">
                        <ul className="obtitle">
                            <li className="listitems">
                                <MailOutline />
                                <span> Mail</span>

                            </li>
                            <li className="listitems">
                                <DynamicFeed />
                                <span>Feed Back</span>
                            </li>
                            <li className="listitems">
                                <ChatBubbleOutline />
                                <span> Messages</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="allout">
                    <div className="title">
                        <span>DashBoard</span>
                    </div>
                    <div className="objects">
                        <ul className="obtitle">
                            <li className="listitems">
                                <WorkOutline />
                                <span>Manage</span>

                            </li>
                            <li className="listitems">
                                <TrendingUp />
                                <span>Analysis</span>
                            </li>
                            <li className="listitems">
                                <Report />
                                <span>Report</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


    )
}
