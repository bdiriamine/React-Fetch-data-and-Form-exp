import { useEffect, useRef, useState } from "react"

// ------- UseState with forms -----> not optimise 
/*export default function Form() {

    const [formValue , setFormValue] = useState({
        name:'',
        age:'' ,
        country:'',
        select: false
    })
   const handleForm = (e)=>{
    const currentTarget = e.target 
    let id = e.target.id
    let value = e.target.value
    if(currentTarget.type==="checkbox"){
        value = e.target.checked
    }
    setFormValue( prevState =>{
        return {...prevState,...{[id] : value}}
    })
   }
    return  <div className="container mp-4">
                { JSON.stringify(formValue) }
                <div className="form-group">
                <label className="form-check-label"> name</label>
                    <input type="text"  id="name" onChange={handleForm} />
                </div>
                <div className="form-group">
                <label className="form-check-label"> age </label>
                    <input type="number"   id="age"   onChange={handleForm} />
                </div>
                <div className="form-group">
                <label className="form-check-label">Country </label>
                <select   id="country"  onChange={handleForm} > 
                    <option value="Ma"> Maroc</option>
                    <option value="Tn"> Tunisia</option>
                    <option value="Other"> Other</option>
                </select>
                </div>
                <div className="form-group">
                    <input type="checkbox" className="form-check-input"  id="select"   onChange={handleForm} />
                    <label htmlFor="select" className="form-check-label">  next step</label>
                </div>
    </div>
    

}*/

//  the best methode for performance to use useRef
export default function Form() {
   const inputNameRef =useRef()
   const inputAgeRef=useRef()
   const inputDateRef=useRef()
   const inputCountryRef=useRef()
   const inputSelectRef=useRef()
   const [formValue, setFormValue] = useState({
    name:'',
    age:'',
    date:undefined,
    country:'',
    select:false

   })
 //  make initial Value 
    useEffect(()=>{
       inputNameRef.current.value = "aaaa"
       inputDateRef.current.value= new Date().toISOString().substring(0,10)
       inputCountryRef.current.selectedIndex = 2

    })
    // take value using arrows function 
    const HandleRef = (e)=>{
        e.preventDefault();
        setFormValue(
           { name: inputNameRef.current.value,
            age: inputAgeRef.current.value,
            date : inputDateRef.current.value,
            country: inputCountryRef.current.value,
            select:inputSelectRef.current.checked
           }

        )
        
    }
    return <div className="container my-4">
        <label > value : </label> <br />
        {JSON.stringify(formValue)}
        <hr />
        <div className="form-group">
          <label className="form-check-label"> Name :   </label>
            <input type="text" id="name" ref={inputNameRef}   />
        </div>
        <div className="form-group">
          <label className="form-check-label"> Age :   </label>
            <input type="number" id="age" ref={inputAgeRef}   />
        </div>
        <div className="form-group">
          <label className="form-check-label"> Date  :  </label>
            <input type="date" id="date" ref={inputDateRef}   />
        </div>
        <div className="form-group">
          <label className="form-check-label" > Country :   </label>
            <select  id="country" ref={inputCountryRef} >
                <option value="Ma"> Maroc</option>
                <option value="Tn"> Tunisie</option>
                <option value="Al"> Algerie</option>
            </select>
        </div>
        <div className="form-group">
                    <input type="checkbox" className="form-check-input"  id="select" ref={inputSelectRef}    />
                    <label htmlFor="select" className="form-check-label">  next step</label>
        </div>
            <input type="submit" value="Save" className="btn btn-primary" onClick={HandleRef}/>
    </div>

}