// import React from 'react'

// const Products = ({data}) => {
//     return (
//         <div>
//             <div className="row">
//                 {data.map(data =>  
//                 <div className="col-md-4">
//                     <div class="card" style={{"width": "18rem"}}>
//                     <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
//                     <div class="card-body">
//                     <center>
//                         <h5 class="card-title">{data.recipe.label}</h5>
//                         <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
//                         <a href="#" class="btn btn-primary">Buy</a>
//                         </center>
//                     </div>
//                     </div>
//                 </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Products
// import React from 'react';

// const Products = ({ data }) => {
//   return (
//     <div>
//       <div className="row">
//         {data.map((item, index) => (
//           <div key={index} className="col-md-4">
//             <div className="card" style={{ width: "18rem" }}>
//               <img className="card-img-top" src={item.recipe.image} alt="Card image cap" />
//               <div className="card-body">
//                 <h5 className="card-title">{item.recipe.label}</h5>
//                 <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
//                 <p className="card-text">Ingredients:</p>
//                 <ul>
//                   {item.recipe.ingredients.map((ingredient, idx) => (
//                     <li key={idx}>{ingredient.text}</li>
//                   ))}
//                 </ul>
//                 <center>
//                   <a href="#" className="btn btn-primary">Buy</a>
//                 </center>
//                 <p color='red'>Total Time {data.recipe.totalNutrients.totalTime}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

// import React from 'react';

// const Products = ({ data }) => {
//   return (
//     <div>
//       <div className="row">
//         {data.map((item, index) => (
//           <div key={index} className="col-md-4">
//             <div className="card" style={{ width: "18rem" }}>
//               <img className="card-img-top" src={item.recipe.image} alt="Card image cap" />
//               <div className="card-body">
//                 <h5 className="card-title">{item.recipe.label}</h5>
//                 <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
//                 <p className="card-text" color='blue'>Ingredients:</p>
//                 <ul>
//                   {item.recipe.ingredients.map((ingredient, idx) => (
//                     <li key={idx}>{ingredient.text}</li>
//                   ))}
//                 </ul>
//                 <center>
//                   <a href="#" className="btn btn-primary">Buy</a>
//                 </center>
//                 <p style={{color: 'red'}}>Total Time: {item.recipe.totalNutrients?.totalTime || 'Not available'}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

// import React, { useState } from 'react';
// import './index.css';

// const Products = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className='bg'>
//       <div className="row">
//         {data.map((item, index) => (
//           <div key={index} className="col-md-4">
//             <div 
//               className="card" 
//               style={{ width: "18rem" }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img className="card-img-top" src={item.recipe.image} alt="Card image cap" />
//               {hoveredIndex === index && (
//                 <div className="card-body">
//                   <p className="card-text" color='blue'>Ingredients:</p>
//                   <ul>
//                     {item.recipe.ingredients.map((ingredient, idx) => (
//                       <li key={idx}>{ingredient.text}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               <div className="card-body">
//                 <h5 className="card-title">{item.recipe.label}</h5>
//                 <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
//                 <center>
//                   <a href="#" className="btn btn-primary">Buy</a>
//                 </center>
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

import React, { useState } from 'react';
import './index.css';

const Products = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg'>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4"> {/* Added mb-4 class for margin bottom */}
            <div 
              className="card" 
              style={{ width: "18rem" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img className="card-img-top" src={item.recipe.image} alt="Card image cap" />
              {hoveredIndex === index && (
                <div className="card-body">
                  <p className="card-text" color='blue'>Ingredients:</p>
                  <ul>
                    {item.recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient.text}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>
                <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
                <center>
                  <a href="#" className="btn btn-primary">Buy</a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

