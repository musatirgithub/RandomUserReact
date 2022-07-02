import { useState, useEffect } from "react";
import axios from "axios";
import { GoMailRead } from "react-icons/go";
import { FaPhone, FaSearchLocation } from "react-icons/fa";
import './Card.scss';

const Card = () => {
const [api, setApi] = useState([]);
const [showUser, setShowUser] = useState(false);

const url = "https://randomuser.me/api/";

useEffect(() => {
    getApi();
}, [])

const getApi = async ()=>{
    try {
        const data = await axios.get(url);
        const person = data.data.results[0];
        console.log(person);
        setApi(person);
        setShowUser(true);
    } catch (error) {
        console.log(error);
    }
}

    
  return (
    
    <article>
        {showUser && (
            <div className="card">
            <div className="card--img-name">
                <img src={api.picture.large} alt={api.name.last} />
                <h3>{api.name.title} {api.name.first} {api.name.last}</h3>
            </div>
            <div className="email">
            <GoMailRead size={25}/>
            <p>{api.email}</p>
            </div>
            <div className="phone">
            <FaPhone />
            <p>{api.phone}</p>
            </div>
            <div className="location">
                <FaSearchLocation />
                <p>{api.location.city} - {api.location.country}</p>
            </div>
            <div className="age">Age: {api.dob.age}</div>
            <div className="register">Register Date:{api.registered.date.slice(0,10)}</div>
        </div>
        )}
        <button onClick={()=>getApi()}>Random User</button>
    </article>
  )
}

export default Card;


