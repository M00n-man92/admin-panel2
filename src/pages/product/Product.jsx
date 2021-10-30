import { Link } from 'react-router-dom'
import Chart from '../chart/Chart';
import './product.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PublishOutlined, } from '@mui/icons-material'

export default function Product() {
    const prodata = [
        {
            name: 'Jan',
            "Sales": 4000,


        },
        {
            name: 'Feb',
            "Sales": 3000,


        },

        {
            name: 'Mar',
            "Sales": 2780,


        },
        {
            name: 'Apr',
            "Sales": 1890,


        },
        {
            name: 'May',
            "Sales": 2390,


        },
        {
            name: 'Jun',
            "Sales": 3490,


        },
        {
            name: 'Jul',
            "Sales": 3490,


        },
        {
            name: 'Aug',
            "Sales": 3490,


        },
        {
            name: 'Sep',
            "Sales": 3490,


        },
        {
            name: 'Oct',
            "Sales": 3490,


        },
        {
            name: 'Nov',
            "Sales": 3490,


        },
        {
            name: 'Dec',
            "Sales": 3490,


        },
    ];

    return (
        <div className="product">
            <div className="topshitt">
                <div className="tileofshit">
                    <span>Product</span>
                </div>
                <div className="shitofbutton">
                    <Link to="/newproduct" ><button>Create</button></Link>
                </div>
            </div>
            <div className="lowdhitt">
                <div className="peaceofshitleft">

                    <div className="shartchart">

                        <div className="passageofshit">
                            <span>sales performance</span>
                        </div>
                        <ResponsiveContainer width="100%" aspect={4 / 1}>
                            <LineChart
                                width={500}
                                height={400}
                                data={prodata}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid stroke="#34" />
                                <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />

                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    <div className="someothershit">
                        <div className="holeroftheshit">
                            <div className="ikalotofshithumor">
                                <div className="imgjkille"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU" alt="" /></div>
                                <span>Item name</span>

                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan"> id: </span>
                                <span>2342345</span>
                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan">sales: </span>
                                <span>2342345</span>
                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan">active: </span>
                                <span>yes</span>
                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan">inStock: </span>
                                <span>no</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="brkuhhh">
                   <div className="golgotatitle">
                       <span>Update</span>
                   </div>
                    <div className="golgog">
                        <div className="tartartarea">
                            <div className="polandarea">
                                <label>Product Name</label>
                                <input type="text" placeholder="Mac book pro" className="yeheylhe"/>
                            </div>
                            <div className="polandarea">
                                <label>In Stock</label>
                                <select name="instock" id="instock" className="yeheylhe">
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className="polandarea">
                                <label>Active</label>
                                <select name="instock" id="instock" className="yeheylhe">
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            
                        </div>

                        <div className="mollol">
                            <div className="poliska">
                                <div className="rolioingstonescontain">
                                    <img src="data:image/jpeg;base64,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" alt="" />
                                </div>
                                <label htmlFor="file"><PublishOutlined /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <div className="colonialbutton">
                                <button>Update</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
