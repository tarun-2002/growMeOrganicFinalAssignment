
import Accordian from "./Accordian"
import "../index.css"
const DropDown = () => {
  const section2 = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
]
  return (
    <div className="login-box2" style={{ color: 'white',
    fontFamily: 'Montserrat, sans-serif'}}>
      {section2.map((departments:any,i:number)=>{
        return(
          <Accordian key={`acc${i}`} departments={departments}/>
        )
      })}
    </div>
  )
}

export default DropDown
