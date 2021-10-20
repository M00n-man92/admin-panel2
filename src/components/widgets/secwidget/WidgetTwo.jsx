import './widgettwo.scss'

export default function WidgetTwo() {
    return (
        <div className="two">
            <div className="twotitle">
                <span>Transactions</span>

            </div>
            <div className="tableing">
                <table className="firstone">
                    <tr className="row">
                        <th className="theyuphere">
                            Customer
                        </th>
                        <th className="theyuphere">
                            Date
                        </th>
                        <th className="theyuphere">
                            Amount
                        </th>
                        <th className="theyuphere">
                           Status
                        </th>
                    </tr>
                    <tr className="row">
                        <td className="theyuphere">
                            <div className="userstuff">
                                <div className="guessitsgood">
                                    <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" />
                                </div>
                                <div className="userinfomation">
                                    <span>user Name</span>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="theyuphere">
                            1jan1999
                        </td>
                        <td className="theyuphere">
                            $5655
                        </td>
                        <td className="theyuphere">
                           <button className={"buttonstatus " + "approved"}>Approved</button>
                        </td>
                    </tr>
                    <tr className="row">
                    <td className="theyuphere">
                            <div className="userstuff">
                                <div className="guessitsgood">
                                    <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" />
                                </div>
                                <div className="userinfomation">
                                    <span>user Name</span>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="theyuphere">
                            1jan1999
                        </td>
                        <td className="theyuphere">
                            $3453
                        </td>
                        <td><button className={"buttonstatus " + "pending"}>Pending</button></td>
                    </tr>
                    <tr className="row">
                    <td className="theyuphere">
                            <div className="userstuff">
                                <div className="guessitsgood">
                                    <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" />
                                </div>
                                <div className="userinfomation">
                                    <span>user Name</span>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="theyuphere">
                            1jan1999
                        </td>
                        <td className="theyuphere">
                            $35345
                        </td>
                        <td> <button className={"buttonstatus " + "declined"}>Declined</button></td>
                       
                    </tr>
                    <tr className="row">
                    <td className="theyuphere">
                            <div className="userstuff">
                                <div className="guessitsgood">
                                    <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" />
                                </div>
                                <div className="userinfomation">
                                    <span>user Name</span>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="theyuphere">
                            1jan1999
                        </td>
                        <td className="theyuphere">
                            $35345
                        </td>
                        <td> <button className={"buttonstatus " + "declined"}>Declined</button></td>
                       
                    </tr>
                </table>
            </div>
        </div>
    )
}
