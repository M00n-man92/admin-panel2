import { useState } from 'react'
import './newProduct.scss'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import app from '../../fireBase'
import { userRequest } from '../../requestMethods';
import { CircularProgress } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
export default function NewProduct() {
	const [file, setFile] = useState()
	const [fileName, setFileName] = useState([])
	const [input, setInput] = useState({})
	const [cat, setCat] = useState({})
	const [done, setDone] = useState(false)
	const [love, Setlove] = useState([null])

	const [petty, setPetty] = useState([{}])
	var sub_array = []
	var super_array = []

	// trigger for setting if the images failed to load or are success ful
	const [isLoading, setIsLoading] = useState(false);
	const [hasFailed, setHasFailed] = useState(false);

	///  function that saves the inputed properties as strings
	const handleInput = (e) => {
		setInput((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})

	}

	/// function that saves the inputed properties as arrays
	const handleCat = (e) => {
		setCat((prev) => {
			return { ...prev, [e.target.name]: e.target.value.split(",") }
		})
	}

	/// function to call on the create product route
	const aemani_suits = async (product) => {
		const reply = await userRequest.post("/product/newproduct", product)
		// console.log(product)
		const res = reply.data
		if (res.success) {
			setDone(true)
		}
	}

	/// function to upload the pictures
	const handleClick = async (e) => {
		// e.prev""entDefault()
		var streetsofafruce = {}

		streetsofafruce = e.target.files[0]
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
				setIsLoading(true);
			},
			(error) => {
				setIsLoading(false);
				setHasFailed(false);
				// Handle unsuccessful uploads
			},
			() => {
				setIsLoading(false);
				setHasFailed(false);
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					// const { catagory, size } = cat

					// const { discription, price, title, color } = input
					sub_array.push(downloadURL)
					console.log(downloadURL)
					var lio = downloadURL
					console.log(lio)
					// if (file){ setFile("")}
					setFileName(oldone => [...oldone, { lio }])

					// console.log(sub_array)
					// setUrl(downloadURL)
					// const produce={discription,price,title,catagory,color,size,img:downloadURL};
					// console.log(produce)
					// aemani_suits(produce)


				});
				// const ipraisethelord=sub_array[0]
				fileName.map((item, index)=>{
					if(!item.lio){
						fileName.slice(index)
					}
				})
				super_array.push(sub_array)

			}
		);

	}
	
	const handleShoot = (e) => {
		const missincalls = e.target.value.split(",")
		var iani = [{}]
		missincalls.map(item => iani.push({ id: item.split(" ")[0], coloring: item.split(" ")[1], img: item.split(" ")[2] ? item.split(" ")[2] : "" }))
		console.log(iani)
		// console.log(iani.findIndex(0))
		iani.shift()
		// iani.map(item=>)
		// console.log(missincalls)
		setPetty(iani)

		console.log(petty)

	}
	const paperback = () => {
		let img = [];
		fileName.map((item)=>{
			if(!item.lio){

			}
else{
	img.push(item.lio);
}
			
		})
		// console.log(img)
		const { catagory, size } = cat
		
		const { discription, price, title, link, color } = input
		const produce = { discription, price, title, catagory, color, size, img, associate_color: petty };
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
					<div className="fetchspinning" style={{ display: "flex", alignItems:"center", justifyContent: "center" }}>
						{isLoading ? (<div style={{marginRight:"1%"}}>
							<CircularProgress />
						</div>) : (<></>)}
						{hasFailed ? (<span style={{ fontSize: "12px", color: "red" }}> Error. Try to upload the file again</span>) : (<></>)}
						<div className="iplayedmyfair" style={{display:"flex", flexDirection:"row"}}>
							{fileName.length>=1 ? fileName.map((item, index) => 
							(<div style={{display:"flex", flexDirection:"row"}} key={index+33}>
							<img src={item.lio} alt="" style={{ height: "100px", width: "100px", backgroundColor: "#555",objectFit:"cover", marginRight:"2%" }} />
							 <DeleteOutline style={{position: "relative", color:"red", fontSize:"25px", left: "-10%", cursor: "pointer"}} onClick={(e)=>{
								
								fileName.splice(index)
								console.log(fileName.length)}} /></div>)) : <span></span>}
							
							
						</div>

					</div>

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
				{/* <div className="productitemplus">
					<div className="laketitle">
						<span>Image</span>
					</div>
					<div className="ollio">
						<textarea name="img" type="text" className="shitpluscrack" onChange={handleCat} column={5} />
					</div>
				</div> */}
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
						<input name="size" type="text" placeholder="XL(12),L(10),M(8),S(6)..." className="shitpluscrack" onChange={handleCat} />
					</div>
				</div>
				<div className="productitemplus">
					<div className="laketitle">
						<span>Color</span>
					</div>
					<div className="ollio">
						<input name="color" type="text" placeholder="red,blue,pink,multicolor..." className="shitpluscrack" onChange={handleInput} />
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
				<div className="productitemplus">
					<div className="laketitle">
						<label>Assoiated Products</label>

					</div>
					<div className="ollio">
						<textarea type="text" name="associate_color" placeholder="6229e3333979751c24938054'id' red(muticolor)'color' https://firebasestorage.googleapis.com/v0/b/bang-clothing.appspot.com'imagelink if it is muti colored', do it all over separated by comma" className="lhe" onChange={handleShoot} />
					</div></div>
				<div className="productitemplus">
					<div className="laketitle">
						<span>Link</span>
					</div>
					<div className="ollio">
						<input name="link" type="text" placeholder="" className="shitpluscrack" onChange={handleInput} />
					</div>
				</div>

				<div className="jidbutton">
					<button onClick={paperback}>Create</button>
				</div>
			</div>
		</div>
	)
}
