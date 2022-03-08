import { useState } from 'react'
import './newProduct.scss'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../fireBase'
import { addProduct } from '../../redux/apiCall'
import { useDispatch } from 'react-redux'
import { userRequest } from '../../requestMethods';
export default function NewProduct() {
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState([{}])
    const [input, setInput] = useState({})
    const [cat, setCat] = useState({})
    const [done, setDone] = useState(false)
    const [togetther, setTogether] = useState({})
    const [love,Setlove]=useState([null])
    const [url, setUrl] = useState("")
    const dispatch = useDispatch()
    var sub_array = []
    var super_array = []
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
    const aemani_suits = async (product) => {
        const reply = await userRequest.post("/product/newproduct", product)
        const res = reply.data
        if (res.success) {
            setDone(true)
        }
    }
    console.log("datacome  "+ file)

    const handleClick =async(e) => {
        // e.prev""entDefault()
        var streetsofafruce={}
        
        streetsofafruce=e.target.files[0]
        setFile(streetsofafruce)
        console.log(streetsofafruce)
        // if(file==null){
        //     console.log("tryna duble up")
        //     setFile(streetsofafruce)
        //     console.log(file)
        // }
       
        // console.log(file)
        // for(var c=0;c<file.length;c++){
        //     super_array.push(new Date().getTime()+file[c].name)

        // }
        // setFileName(super_array)
        // console.log(file)
         
        const fileName = new Date().getTime() + streetsofafruce.name
        const storage = getStorage(app)
        const storageReff = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageReff, streetsofafruce);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // const { catagory, size } = cat

                    // const { discription, price, title, color } = input
                    sub_array.push(downloadURL)
                    console.log(downloadURL)
                    var lio=downloadURL
                    console.log(lio)
                    // if (file){ setFile("")}
                    setFileName(oldone=>[...oldone,{lio}])
                    
                    // console.log(sub_array)
                    // setUrl(downloadURL)
                    // const produce={discription,price,title,catagory,color,size,img:downloadURL};
                    // console.log(produce)
                    // aemani_suits(produce)


                });
                // const ipraisethelord=sub_array[0]
              
                super_array.push(sub_array)
                
            }
        ); 
        
    }
    // console.log(fileName)
    console.log(super_array)
    console.log(fileName)
    const paperback = () => {
        const { catagory, size,img, color  } = cat

        const { discription, price, title} = input
        const produce={discription,price,title,catagory,color,size,img};
        // console.log(produce)
        aemani_suits(produce)

        // for (var i = 0; i < r.target.files.length; i++) {
        //     sub_array.push(r.target.files[i])
        // }
        // setFile(sub_array)
        // Setlove((prev)=>{return{...prev,[r.target.name]:r.target.files[0]}})
        // Setlove(r.target.files[0])
    }
// console.log(sub_array)
// console.log(sub_array)
// console.log(sub_array)
// console.log(sub_array)

    return (
        <div className="newproduct">
            <div className="newproducttitle">
                <span>New Product</span>
                {done ? <span className="beatsbydre">Created Successfuly</span> : <span></span>}
            </div>
            <div className="thenigaalookedjustlikeme">
                <div className="iknowmydestunatuin">
                    <div className="productitemplus">

                        <div className="laketitle">
                            <span>Image</span>
                        </div>
                        <div className="ollio">
                            <input type="file" multiple="multiple" onChange={e => handleClick(e) /*paperback(e)setFile(e.target.files[0]) */} />
                        </div>
                    </div>
                    
                </div>
                <div className="iplayedmyfair">
                        {fileName?fileName.map((item)=>(<span>
                            {item.lio}
                        </span>)):<span></span>}
                        {love?<span>{love}</span>:<span></span>}
                    </div>
            </div>

            <div className="projectotrrr">

                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Title</span>
                    </div>
                    <div className="ollio">
                        <input name="title" type="text" placeholder="Macbook pro" className="shitpluscrack" onChange={handleInput} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Image</span>
                    </div>
                    <div className="ollio">
                        <input name="img" type="text" className="shitpluscrack" onChange={handleCat} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Catagory</span>
                    </div>
                    <div className="ollio">
                        <input name="catagory" type="text" placeholder="women,top,..." className="shitpluscrack" onChange={handleCat} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Discription</span>
                    </div>
                    <div className="ollio">
                        <input name="discription" type="text" placeholder="discription" className="shitpluscrack" onChange={handleInput} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Price</span>
                    </div>
                    <div className="ollio">
                        <input name="price" type="text" placeholder="34" className="shitpluscrack" onChange={handleInput} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Size</span>
                    </div>
                    <div className="ollio">
                        <input name="size" type="text" placeholder="XL,L,M,S..." className="shitpluscrack" onChange={handleCat} />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Color</span>
                    </div>
                    <div className="ollio">
                        <input name="color" type="text" placeholder="red,blue,pink..." className="shitpluscrack" onChange={handleCat} />
                    </div>
                </div>

                <div className="productitemplus">
                    <div className="laketitle">
                        <span>InStock</span>
                    </div>
                    <div className="ollio">
                        <select name="inStock" id="active" onChange={handleInput}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>

                        </select>
                    </div>

                </div>
                <div className="jidbutton">
                    <button onClick={paperback}>Create</button>
                </div>
            </div>
        </div>
    )
}
