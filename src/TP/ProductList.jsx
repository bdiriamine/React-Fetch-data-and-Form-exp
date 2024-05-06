import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [productList, setProductList] =useState([])
    const [categoriesList, setCategoriesList] =useState([])
    const [currentCategory, setCurrentCategory] = useState()
    const [SearchInput, setSearchInput] = useState('')

   const displayProducts = () =>{

        let productsTemp = productList.filter(product =>{
            return product.title.includes(SearchInput) || product.id.toString().startsWith(SearchInput) || product.description.includes(SearchInput)
        })
        if (SearchInput !== undefined) {
            productsTemp = productList.filter(product =>
                product.title.includes(SearchInput) || product.id.toString().startsWith(SearchInput) || product.description.includes(SearchInput)
            )
        }
        if (currentCategory !== undefined) {
            productsTemp = productList.filter(product => {
                return product.category === currentCategory
            })
        }
    if(productsTemp.length>0){
        return productsTemp.map((product,key)=>{
       
            return <Product product={product} key={key}/>
        })
    }
        return <tr>
    <td colSpan={7}> No Items</td>
</tr>
   } 
   const displayCategories = () =>{
       return categoriesList.map((categorie,key) => 
        
        <button className={'btn ' + (currentCategory === categorie ? 'btn-dark' : 'btn-secondary')} key={key}
        onClick={(e) => {
            e.preventDefault()
            setCurrentCategory(categorie)
        }}>
    {categorie}
    </button>
       )
   }
   
   const getProducts =()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(response=>setProductList(response))
   }
   const getCategories =()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=> response.json())
    .then(response =>setCategoriesList(response))
   }
    useEffect(() => {
        getProducts();
        getCategories()  
    }, []);
    const handleSearch = (e)=>{
        e.preventDefault()
        const ValueInput = document.querySelector('#search').value
        setSearchInput(ValueInput)
       
    }
    return <div className="container-fluix mx-auto w-75 my-3">
                    <h2>Search:</h2>
            <form>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <input className='btn btn-dark mx-2' type="submit" value='Search' onClick={handleSearch}/>
                        <input className='btn btn-dark mx-2' type="submit" value='Reset' onClick={()=>{ setSearchInput(undefined)}}/>
                    </div>
                    <hr />
                    <h5>Categorie :</h5>
                    
                    <div className="row g-3 align-items-center">
                            <div className="btn-group">
                            {displayCategories()}
                            </div>
                    </div>
                </div>
                <hr/>

            </form>
        <h1>Liste des Produits</h1>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>                      
                        <th>image</th> 
                        <th>rating</th> 
                    </tr>
                </thead>
                <tbody>
                 {displayProducts()}
                </tbody>
            </table>
    </div>
}