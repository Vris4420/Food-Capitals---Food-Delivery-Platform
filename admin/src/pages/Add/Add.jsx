import './Add.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export function Add(){
    return(
       <div className="add">
        <form className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUpload} />
                    </div>
                </label>
                <input type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea name="description" rows="6" placeholder='Write description here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select name="category">
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
                    <input type="Number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
       </div>
    )
}