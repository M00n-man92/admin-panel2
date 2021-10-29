import './user.scss'
import { DataGrid } from '@mui/x-data-grid';
import { width } from '@mui/system';
import { DeleteOutline } from '@mui/icons-material';
import {Link } from 'react-router-dom'
import { useState } from 'react';
export default function User() {
   
    const rows = [
        { id: 1, userName: 'Snow',age: 35,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        { id: 2, userName: 'Lannister', age: 42 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        ,
        { id: 3, userName: 'Lannister', age: 45 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        ,
        { id: 4, userName: 'Stark', age: 16 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        
        { id: 5 ,userName: 'Targaryen', age: 45,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455" , status:"active"},
        { id: 6, userName: 'Melisandre',age: 150,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        { id: 7, userName: 'Clifford', age: 44 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        ,
        { id: 8, userName: 'Frances', age: 36 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        ,
        { id: 9, userName: 'Roxie', age: 65 ,avatar:"assets/Ariana Grande Pays Tribute to Mac Miller_ 'I'm So Sorry I Couldn't Fix or Take Your Pain Away'.jpg",email:"thisbe theemail@gmail.com",transactions:"$3455", status:"active"},
        ,
      ];
      const [userr,setUser]=useState(rows)
      const handleUser=(id)=>{
        setUser(userr.filter((item)=>item.id!==id))
      }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'userName',
          headerName: 'user',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className="cellimage">
                    <img src={params.row.avatar}/>
                    {params.row.userName}
                  </div>
              )
          }
          
       }, 
        {
          field: 'email',
          headerName: 'email',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
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
          field: 'transactions',
          headerName: 'transactions',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
         
        },
        {
            field:'action',
            headerName:'Action',
            width:200,
            renderCell:(params)=>{
                return(
                    
                    <div className="holeup">
                       <Link to={"/user/" + params.row.id}>
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
        rows={userr}
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
