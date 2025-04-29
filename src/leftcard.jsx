import Card from "./card";
import img1 from "./assets/hoodie1.png";
import img2 from "./assets/hoodie2.png";
import img3 from "./assets/hoodie3.png";
import img4 from "./assets/hoodie4.png";
import img5 from "./assets/hoodie5.png";
import img6 from "./assets/hoodie6.png";
import { FcLike } from "react-icons/fc";;


export default function Product(data){
  let {setproduct}=data

  let products=[
    {
      img:img1,
      name:"ADRO Hoodies for Men",
      color:"rgb(83, 83, 83)",
      rate:"21.87",
      offer:"(12% off)",
      stock:"10",
      mrp:"25.87"
    },
    {
      img:img2,
      name:"ADRO Men Hooded Fleece Sweatshirt",
      color:"rgb(106, 135, 117)",
      rate:"25.67",
      offer:"(11% off)",
      stock:"11",
      mrp:"29.87"
    },
    {
      img:img3,
      name:"crazymonk Unisex Adult Cotton Hooded Sweatshirt",
      color:"rgb(174, 174, 174)",
      rate:"22.89",
      offer:"(14% off)",
      stock:"20",
      mrp:"25.87",
    },
    {
      img:img4,
      name:"Jujutsu Kaisen Ora Ora Gojo SatoruUnisex Anime Hoodie",
      color:"rgb(82, 64, 112)",
      rate:"23.12",
      offer:"(13% off)",
      stock:"12",
      mrp:"24.70"
    },
    {
      img:img5,
      name:"ADRO Men's Cotton Hooded Hoodie",
      color:"rgb(91, 89, 76)",
      rate:"29.01",
      offer:"(11% off)",
      stock:"10",
      mrp:"30.87"
    },
    {
      img:img6,
      name:"TAGDO Men's Letter Printed Pocket Front Drawstring Hoodie",
      color:"rgb(102, 102, 100)",
      rate:"22,89",
      offer:"(12% off)",
      stock:"10",
      mrp:"25.90"
    }
  ]
  return(
    <>
    <div className="product">
    <div className="head">
      <div>
        <h2>Shop</h2>
      </div>
      <div className="link">
        <a href="#">Catalog</a>
        <a href="#">Product</a>
        <a href="#">Company</a>
        <a href="#">Services</a>
      </div>
      <div className="like">
        <h4 style={{display:"flex",alignItems:"center",gap:"10px"}}><FcLike/>Saved Product</h4>
      </div>
    </div>

    <div className="carddiv">
        <Card detail={products[0]} send={setproduct}/>
        <Card detail={products[1]} send={setproduct}/>
        <Card detail={products[2]} send={setproduct}/>
        <Card detail={products[3]} send={setproduct}/>
        <Card detail={products[4]} send={setproduct}/>
        <Card detail={products[5]} send={setproduct}/>
    </div>
    </div>
    </>
  )
}