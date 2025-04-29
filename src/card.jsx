export default function Card(items){

  let {detail:{img,name,color,rate,offer,stock}} = items;
  console.log(items)
  return(
    <>
    <div className="card" onClick={()=>items.send(items.detail)}>
      <div className="card-inner">
      <img src={img} alt="" />
      <div className="shadow" ></div>
      <h2 style={{fontFamily:"system-ui",fontSize:"15px",textAlign:"center"}}>Man {name}</h2>
      </div>
    </div>
    </>
  )
}