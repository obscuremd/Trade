import React from "react"

interface props{
  title : string, 
  description : string, 
  color: string, 
  textColor: string,
}


const InstrumentCard: React.FC<props> = ({title, description, color, textColor}) => {
  return (
    <div
        style={{
            backgroundColor: `${color}`,
            color: `${textColor}`
        }} 
        className="md:w-[25%] p-7 flex flex-col gap-7">
        <p className="text-[22px]">{title}</p>
        <p className="text-[15px]">{description}</p>
      
    </div>
  )
}

export default InstrumentCard
