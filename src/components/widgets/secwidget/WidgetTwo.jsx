import { useEffect, useState } from 'react'
import { userRequest } from '../../../requestMethods'
import './widgettwo.scss'
import {format} from "timeago.js"

export default function WidgetTwo() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const something = async () => {
            const res = await userRequest.get("order/find")
            setOrders(res.data.data)
        }
        something()
    }, [])
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
                    {orders.map((items) => (<tr className="row">
                        <td className="theyuphere">
                            <div className="userstuff">
                                <div className="guessitsgood">
                                    <img src="assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg" alt="" />
                                </div>
                                <div className="userinfomation">
                                    <span>{items.userId}</span>
                                    
                                </div>
                            </div>
                        </td>
                        <td className="theyuphere">
                            {format(items.createdAt)}
                        </td>
                        <td className="theyuphere">
                            {items.amount}
                        </td>
                        <td className="theyuphere">
                            <button className={"buttonstatus "}>{items.status}</button>
                        </td>
                    </tr>))}

                   
                </table>
            </div>
        </div>
    )
}
