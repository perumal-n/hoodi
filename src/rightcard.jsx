import Card from "./card";

export default function Shop(d){
  let {setcard:{img,name,color,rate,offer,stock,mrp}}=d
  return(
    <>
   <div className="shopcard" style={{backgroundColor:color,color:"white",fontSize:"18px"}}>
    <img src={img} alt="" />
    <div className="shopcon">
      <h3 style={{fontWeight:"700",fontFamily:"system-ui",width:"350px",textAlign:"center"}}>{name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at!</p>

      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
      <h3 style={{border:"2px solid black",padding:"7px",borderRadius:"10px"}}><span style={{fontSize:"35px"}}>$ </span><span style={{fontSize:"30px"}}>{rate}</span></h3>
      <h3 style={{display:"flex",gap:"10px"}}><span>M.R.P : <span style={{textDecoration:"line-through"}}>{mrp}</span></span><span>{offer}</span></h3>
      </div>

        <div style={{display:"flex",gap:"50px",alignItems:"center"}}>
         <div style={{display:"flex",gap:"20px",alignItems:"center",flexDirection:"column"}}>
         <p>Choose Size:</p>
          <div style={{display:"flex",gap:"10px"}}>
          <span style={{border:"1px solid black",padding:"7px",backgroundColor:"white",borderRadius:"2px",color:"black"}}>S</span>
          <span style={{border:"1px solid black",padding:"7px",backgroundColor:"white",borderRadius:"2px",color:"black"}}>M</span>
          <span style={{border:"1px solid black",padding:"7px",backgroundColor:"white",borderRadius:"2px",color:"black"}}>L</span>
          <span style={{border:"1px solid black",padding:"7px",backgroundColor:"white",borderRadius:"2px",color:"black"}}>XL</span>
          </div>
         </div>

         <div style={{display:"flex",gap:"20px",alignItems:"center",flexDirection:"column"}}>
         <p>Choose Color:</p>
          <div style={{display:"flex",gap:"10px"}}>
          <span style={{padding:"7px",backgroundColor:"rgb(51, 51, 51)",borderRadius:"50%",border:"1px solid black"}}></span>
          <span style={{padding:"7px",backgroundColor:"rgb(82, 64, 112)",borderRadius:"50%",border:"1px solid black"}}></span>
          <span style={{padding:"7px",backgroundColor:"rgb(91, 89, 76)",borderRadius:"50%",border:"1px solid black"}}></span>
          <span style={{padding:"7px",backgroundColor:"rgb(174, 174, 174)",borderRadius:"50%",border:"1px solid black"}}></span>
          </div>
         </div>
        </div>
      <div className="btn">
        <button className="button-24">Add to Card</button>
        <button className="button-24">Buy Now</button>
      </div>

    </div>
   </div>
    </>
  )
}