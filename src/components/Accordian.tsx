import { useState } from 'react';

import { DropL } from "./DropL";
import { Checkbox } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import "../index.css"


const Accordian = (props:{departments:any}) => {
    const {departments}=props
    const [isOpen, setisopen] = useState<boolean>(true)
    const [checked,setChecked]=useState<boolean>(false)
    const [allSelected,setAll]=useState<boolean>(false)
    return (
        <>
            <div >
                <span style={{display:'flex',alignItems:"center"}}>
                    <RemoveIcon style={{ cursor: "pointer" }} onClick={()=>setisopen(!isOpen)} />
                    <Checkbox style={{color:"white"}} checked={checked||allSelected} onChange={()=>setChecked(!checked)}/>
                    {departments.department}({departments.sub_departments.length})
                </span>
                {isOpen&&<DropL setAll={setAll} allChecked={checked} list={departments} />}
            </div>
        </>
    )
}

export default Accordian
