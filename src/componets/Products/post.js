// import React, { useContext, useEffect, useState } from "react";
// import { AllPostContext } from "../../store/allpostContext";
// import PostCards from "./postCards";
// import BarLoading from "../../Loading/BarLoading";


// export default function Post() {
//   const { product, setProduct } = useContext(AllPostContext);
//   const [post, setPost] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get()
//     setLoading(false);
//   }, []);

   

//   let productCard = product.map((data, value) => {
//     return (
//       <PostCards
//         id={value}
//         title={data.title}
//         dec={data.description}
//         price={data.price}
//       />
//     );
//   });
//   return (
//     <div className="">
//       {product && (
//         <div>
//           <h5>Fresh for You!</h5>
//           {loading ? <BarLoading /> : productCard}
//         </div>
//       )}
//     </div>
//   );
// }
