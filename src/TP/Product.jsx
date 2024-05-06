import Rate from "./rate";

export default function Product({product}){
      return <tr>
    <td>{product.id}</td>
    <td>{product.title}</td>
    <td>{product.price} $</td>
    <td>{product.description.slice(0,100)}...</td>
    <td><span className="badge badge-pill bg-dark">{product.category}</span></td>
    <td><img width={200} src={product.image} alt={product.title}/></td>
    <td><Rate rate={product.rating.rate} count={product.rating.count} /> </td>
   
   </tr>

}