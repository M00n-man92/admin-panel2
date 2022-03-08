import './productList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';
import {Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { methodMan, protectYaNeck } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
import { userRequest } from '../../requestMethods';
export default function ProductList(){
  const [produce,setProduce]=useState([])
 const dispatch=useDispatch()
 const location=useLocation()
  const page=location.pathname.split('/')[1]
  
  // useEffect(async()=>{
  //   const responce=await userRequest.get('/product/find')
  //   people=responce.data.data
  //   console.log(people)
  // },[page])
  useEffect(()=>{
    const youDont=async ()=>{
      try{
        protectYaNeck(dispatch)
      
      }
      catch(e){

      }

    }
    youDont()
  },[page])
  const oldpeople =  localStorage.getItem("persist:root")
    
  const youngpeople= JSON.parse(oldpeople).products

  const people=JSON.parse(youngpeople).products.data


    
    
      const handleUser=(id)=>{
        methodMan(dispatch,id)
      }
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'productName',
          headerName: 'item',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className="cellimage">
                    <img src={params.row.img[0]?params.row.img[0]:params.row.img}/>
                    {params.row.title}
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
                       <Link to={"/product/" + params.row._id}>
                        <button> Edit</button>
                        </Link>
                        <DeleteOutline className="thisbitch" onClick={()=> handleUser(params.row._id) }/>
                    </div>
                )
            }

        }
      ];
    return (
        <div className="user">
            





    <div className="gridd">
      <DataGrid
        rows={people}
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
 
        </div>
    )
}
