import { useState } from "react"

export default function Forms() {

    const [formValue,setFormValue] = useState({
        name :'',
        country:'',
        age:'',
        accept:''
    })
    const handleForm = (e)=> {
        let currentTarget = e.currentTarget
        const id =  e.currentTarget.id 
        let  value =  currentTarget.value
        console.log(currentTarget.type)
        if(currentTarget.type === "checkbox") {
                value = currentTarget.checked
        }

        setFormValue( prevState =>{
            return {...prevState, ...{[id]:value}}       
        })
       console.log(formValue)

    }

    

    return  <div className="container my-4">
        {JSON.stringify(formValue)}
    <form >
                <div className="form-group my-2">
                    <label > Name</label>
                    <input type="text" placeholder="Enter ur Name" id="name" onChange={handleForm} />
                </div>
                <div className="form-group my-2" >
                    <label > Country</label>
                    <label htmlFor="Country" > Country</label>
                    <select className="form-controle"  id="country" onChange={handleForm}>
                        <option value="Ma">Maroc</option>
                        <option value="Tn">Tunisia</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group my-2">
                    <label > Age</label>
                    <input type="number my-2" placeholder="Enter ur Age" id="age"  onChange={handleForm} />
                </div>
                <div className="form-group my-2">
                    <input type="checkbox" id="accept" className="form-check-input"  onChange={handleForm} />
                    <label htmlFor="accept" className="form-check-label"> Accept </label>
                </div>
                  
            </form>
    </div>

       
}