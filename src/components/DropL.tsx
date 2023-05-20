import { useEffect, useState } from 'react';

import { Checkbox } from '@mui/material';
import "../index.css"
const DropL = (props: any) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [items,setitems]=useState<number>(0)
    useEffect(() => {
        setIsChecked(props.allChecked)
    }, [props.allChecked])

useEffect(()=>{

    props.list.sub_departments.length===items?(setIsChecked(true),props.setAll(true)):(props.setAll(false))
},[items])

    return (
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
            {props.list.sub_departments.map((subDepartments: string, i: number) => {
                return (
                    <List items={items} setitems={setitems} checked={isChecked} subDepartments={subDepartments} key={`subDeps${i}`} />
                )
            })}
        </div>
    )
}





const List = (props: any) => {
    const [selected, setSelected] = useState<boolean>(false)
    useEffect(() => {
        setSelected(props.checked)
    }, [props.checked])
    return (
        <>
            <span >
                <Checkbox  style={{color:"white"}} checked={selected} onChange={() =>{return( setSelected(!selected),selected?props.setitems(props.items-1):props.setitems(props.items+1) )}} />
                {props.subDepartments}
            </span>
        </>
    )
}
export { List, DropL }
