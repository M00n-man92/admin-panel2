import './newProduct.scss'

export default function NewProduct() {
    return (
        <div className="newproduct">
            <div className="newproducttitle">
                <span>New Product</span>
            </div>
            <div className="projectotrrr">
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Image</span>
                    </div>
                    <div className="ollio">
                        <input type="file" />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Name</span>
                    </div>
                    <div className="ollio">
                        <input type="text" placeholder="Macbook pro" className="shitpluscrack" />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Stock</span>
                    </div>
                    <div className="ollio">
                        <input type="text" placeholder="1" className="shitpluscrack" />
                    </div>
                </div>
                <div className="productitemplus">
                    <div className="laketitle">
                        <span>Active</span>
                    </div>
                    <div className="ollio">
                        <select name="active" id="active">
                            <option value="">Yes</option>
                            <option>NO</option>
                        </select>
                    </div>

                </div>
                <div className="jidbutton">
                    <button>Create</button>
                </div>
            </div>
        </div>
    )
}
