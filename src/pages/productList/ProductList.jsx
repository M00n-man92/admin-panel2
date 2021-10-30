import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';
import {Link } from 'react-router-dom'
import { useState } from 'react';
export default function ProductList() {
    const rows = [
        { id: 1, ProductName: 'Snow',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        { id: 2, ProductName: 'Lannister', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        ,
        { id: 3, ProductName: 'Lannister', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        ,
        { id: 4, ProductName: 'Stark', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        
        { id: 5 ,ProductName: 'Targaryen', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455" , status:"active"},
        { id: 6, ProductName: 'Melisandre',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        { id: 7, ProductName: 'Clifford', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        ,
        { id: 8, ProductName: 'Frances', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        ,
        { id: 9, ProductName: 'Roxie', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwbWRWBH9nh4wJdlJND0_n36oGoInrUsdfw&usqp=CAU",stock:"34",price:"$3455", status:"active"},
        ,
      ];
      const [data,setData]=useState(rows)
      const handleUser=(id)=>{
        setData(data.filter((item)=>item.id!==id))
      }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'productName',
          headerName: 'item',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className="cellimage">
                    <img src={params.row.img}/>
                    {params.row.productName}
                  </div>
              )
          }
          
       }, 
        {
          field: 'stock',
          headerName: 'Stock',
          width: 150,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
            field:'status',
            headerName:'Staus',
            width:150
        },

       
        {
            field:'action',
            headerName:'Action',
            width:200,
            renderCell:(params)=>{
                return(
                    
                    <div className="holeup">
                       <Link to={"/product/" + params.row.id}>
                        <button> Edit</button>
                        </Link>
                        <DeleteOutline className="thisbitch" onClick={()=>handleUser(params.row.id)}/>
                    </div>
                )
            }

        }
      ];
    return (
        <div className="user">
            





    <div className="gridd">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
 
        </div>
    )
}
