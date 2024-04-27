import './Add.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

export function Add(){
    const url = 'http://localhost:4000';

    const [image,setImage] = useState(false)
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"North Indian"
    })
    function onChangeHandler(event){
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    async function onSubmitHandler(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)

        const response = await axios.post(`${url}/api/food/add`, formData)
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"North Indian"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    return(
       <div className="add">
        <form className='flex-col' onSubmit={onSubmitHandler}>

            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    {image ? 
                    (
                        <div className="preview-img">
                            <img src={URL.createObjectURL(image) }  />
                        </div>
                    ):(
                        <div className="icon">
                            <FontAwesomeIcon icon={faUpload} />
                        </div>
                    )}
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>

            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write description here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="North Indian">North Indian</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Rolls">Rolls</option>
                        <option value="South Indian">South Indian</option>
                        <option value="Cakes">Cakes</option>
                        <option value="Shakes">Shakes</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
       </div>
    )
}