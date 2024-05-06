import { useState } from "react";
//1-fuction with input
// export default function Fruit({ fruits }) {
//   const [fruitName,setFruits] = useState('')
//   const handleInput = ()=>{
//     const fruitName = document.querySelector('#fruits').value
//     setFruits(fruitName)
//   }
//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log({fruitName})
//   }
//   const displayFruits = function () {
//     return fruits.map(function (fruit) {
//       return <li>{fruit}</li>;
//     });
//   };
//   return (
//     <>
//     <span>
//        <form >
//         <input type="text" id="fruits" placeholder='fruit name' onChange={handleInput}  />
//         <input type="submit" value="Add Fruit" onClick={handleSubmit} />
//        </form>
//     </span>
//       <h1>Fruits</h1>
//       {displayFruits()}
//     </>
//   );
// }
//2 fuction without input
export default function Fruit(){
  const [fruit,setFruits] = useState('')
  const [fruitList,setfruitList] =useState([])
  const handleInput = ()=>{
    const fruitName = document.querySelector('#fruits').value
    setFruits(fruitName)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setfruitList([...fruitList,fruit])
  }
  const displayFruits =  () => fruitList.map( (fruit,keyFruit) =>   <li key={keyFruit}>{fruit}</li>);
          

  return <div>
     <span>
        <form >
       <input type="text" id="fruits" placeholder='fruit name' onChange={handleInput}  />
       <input type="submit" value="Add Fruit" onClick={handleSubmit} />
      </form>
      <h1>Fruits</h1>
   {displayFruits()}
   </span>
  </div>
}