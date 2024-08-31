import React from "react";
import  image from '../images/image.jpg'
const ContactCard = ({ele} )=>{
    return (
        <div id = {ele.id} className="content">
        <img className="ui avatar image" src={image} alt = "avatar"/>
                <div className="content">
                    <div className="header">
                        {ele.name}    
                    </div>
                    <div>{ele.email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red"}}></i>
            </div>

    )
}

export default ContactCard;