import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export function List() {
  const url = "http://localhost:4000";

  const [list, setList] = useState([]);

  async function fetchList() {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
        <p>Menu Items</p>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item,index) => {
                return(
                    <div key={index} className="list-table-format">
                        <img src={`${url}/images/`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <FontAwesomeIcon icon={faX}className="cursor"/>
                    </div>
                )
            })}
        </div>
    </div>
  );
}
