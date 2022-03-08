import { Link } from 'react-router-dom'
import Chart from '../chart/Chart';
import './product.scss'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../fireBase'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PublishOutlined, } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';
import { userRequest } from '../../requestMethods';
import { updateProduct } from '../../redux/apiCall'
import { useDispatch } from 'react-redux'
import { async } from '@firebase/util';
export default function Product() {
    const dispatch = useDispatch()
    const Months = useMemo(() => [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ], [])
    const location = useLocation()
    const locate = location.pathname.split("/")[2]
    console.log(locate)
    const produceing = useSelector(state => state.products.products.data.find((item) => item._id === locate))
    const [file, setFile] = useState(null)
    const [jio, setJio] = useState([])
    const [tammy, setTammy] = useState(false)
    const [cat, setCat] = useState({})
    const [petty,setPetty]=useState([{}])

    const [input, setInput] = useState({})


    // ////////// /////////////////
    const intouch = async (id, payload) => {
        const reply = await userRequest.put(`/product/update/${id}`, payload)

        console.log(reply.data)
        if (reply.data.success === true) {
            setTammy(true)
        }

    }
    const turn_the_other_chick = () => {

        const { catagory, size, } = cat

        const { discription, price, title, color } = input
        const associate_color=petty
        console.log(associate_color)
        
            return { catagory, color, size, discription, price, title,associate_color }
        

    }

    const update_handler = async (e) => {
        e.preventDefault()
        // var proupdata


        //     // if (file) {
        //     //     turn_the_other_chick()
        //     // }


        //     const { catagory, color, size } = cat

        //     const { discription, price, title } = input
        // console.log(jio)
        // if (jio.length > 0) {
        //     console.log(jio)
        //     console.log("serveyears")
        //     proupdata = { catagory, color, size, discription, price, title, img: jio }

        // }

        // else { proupdata = { catagory, color, size, discription, price, title } }
        //     proupdata = { catagory, color, size, discription, price, title }


        // console.log(proupdata)
        const people = turn_the_other_chick()


        intouch(locate, people)




    }

    // 
    // console.log(proupdate)


    const handleInput = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    const handleCat = (e) => {
        setCat((prev) => {
            return { ...prev, [e.target.name]: e.target.value.split(",") }
        })
    }
    const handleShoot=(e)=>{
        const missincalls=e.target.value.split(",")
        var iani=[{}]
        missincalls.map(item=>iani.push({id:item.split(" ")[0],coloring:item.split(" ")[1]}))
        console.log(iani)
        // console.log(iani.findIndex(0))
        iani.shift()
        // iani.map(item=>)
        // console.log(missincalls)
        setPetty(iani)
        // console.log(petty)
        
}
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
    const [productStat, setProductStat] = useState([])
    useEffect(() => {
        const somethingInTheWaySheLooks = async () => {
            try {
                const res = await userRequest.get("order/income?pid=" + locate)
                res.data.data.map((item) => setProductStat((prev) => [...prev, { name: Months[item._id - 1], Sales: item.total }]))
            }
            catch (e) {
                console.log(e)
            }
        }
        somethingInTheWaySheLooks()


    }, [locate, Months])
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
                                data={productStat}
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
                                <div className="imgjkille"><img src={produceing.img[0] ? produceing.img[0] : produceing.img} alt="" /></div>
                                <span>{produceing.title}</span>

                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan"> id: </span>
                                <span>{produceing._id}</span>
                            </div>
                            <div className="shitfullofitems">
                                <span className="oterspan">sales: </span>
                                <span>2342345</span>
                            </div>

                            <div className="shitfullofitems">
                                <span className="oterspan">inStock: </span>
                                <span>{produceing.inStock}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="brkuhhh">
                    <div className="golgotatitle">
                        <span>Update</span>
                        {tammy ? <span className="mslaurenhill">Updated Successfully</span> : <span></span>}
                    </div>
                    <div className="golgog">
                        <div className="tartartarea">
                            <div className="polandarea">
                                <label>Product Name</label>
                                <input name="title" type="text" placeholder={produceing.title} className="yeheylhe" onChange={handleInput} />
                            </div>
                            <div className="polandarea">
                                <label>Product Name</label>
                                <input name="title" type="text" placeholder={produceing.title} className="yeheylhe" onChange={handleInput} />
                            </div>
                            <div className="polandarea">
                                <label>Product discription</label>
                                <input type="text" name="discription" placeholder={produceing.discription} className="yeheylhe" onChange={handleInput} />
                            </div>
                            <div className="polandarea">
                                <label>In Stock</label>
                                <select name="instock" id="instock" className="yeheylhe" onChange={handleInput}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="polandarea">
                                <label>Product Price</label>
                                <input type="text" name="price" placeholder={produceing.price} className="yeheylhe" onChange={handleInput} />
                            </div>
                            <div className="polandarea">
                                <label>Product Catagory</label>
                                <input type="text" name="catagory" placeholder={produceing.catagory} className="yeheylhe" onChange={handleCat} />
                            </div>
                            <div className="polandarea">
                                <label>Assoiated Products</label>
                                <input type="text" name="associate_color" placeholder={produceing.associate_color} className="yeheylhe" onChange={handleShoot} />
                            </div>
                            <div className="polandarea">
                                <label>Product Size</label>
                                <input type="text" name="size" placeholder={produceing.size} className="yeheylhe" onChange={handleCat} />
                            </div>
                            <div className="polandarea">
                                <label>Product Color</label>
                                <input type="text" name="color" placeholder={produceing.color} className="yeheylhe" onChange={handleInput} />
                            </div>


                        </div>

                        <div className="mollol">
                            <div className="poliska">
                                <div className="rolioingstonescontain">
                                    <img src={jio ? jio : produceing.img[0] ? produceing.img[0] : produceing.img} alt="" />
                                </div>
                                <label htmlFor="file"><PublishOutlined /></label>
                                <input type="file" id="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                            </div>
                            <div className="colonialbutton">
                                <button onClick={update_handler}>Update</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
