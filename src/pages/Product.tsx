import {useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataGrid} from '@mui/x-data-grid';
import axios from 'axios'
import DropD from '../components/DropD';
import "../index.css"

const DataTable= (props:any)=>{
    const navigate  =useNavigate();
    const [rows , set_rows] = useState([]);
    

    const columns =[
        {field : 'id' , headerName : 'SNo.' , width:50},
        {field : 'title' , headerName : 'Title' , width:150},
        {field : 'price' , headerName : 'Price' , width:100},
        {field : 'category' , headerName : 'Category' , width:150},
    ]

    console.log(localStorage)

    useEffect(()=>{

        setTimeout(()=>{
            let name =  localStorage.getItem("name");
            let phone =  localStorage.getItem("phone");
            let email =  localStorage.getItem("email");
            console.log(name , phone , email)
        if ((name=== null)&&(phone=== null)&&(email=== null)){
        props.toaster({
            open:true,msg:"Please Login to Proceed"
        })
        console.table(localStorage)
        navigate("/");
    }
    localStorage.clear()
} , 100)

    axios.get('https://fakestoreapi.com/products').then(
        data=>{
            set_rows(data.data)
        }
    )



    },[])

    return(<> 
        <div className="full_page">
            <h1 className="heading" style={{marginBottom:"30px",marginLeft:"auto",marginRight:"auto"}}>Data Table</h1>
            <div><DataGrid sx={{height: '400px',
    width: '480px',
    
    marginLeft: "auto",
    marginRight: "auto"
    ,  color: 'white',
    fontFamily: 'Montserrat, sans-serif'}} 
            rows = {rows} columns={columns} 
            
            /> 
            </div>
            <DropD/>
        </div>
        </>
    );
}


export default DataTable;
