import React from "react";
import ContactCard from './contactCard';
const ContactList= (props)=>{
    const {contacts} = props;
    const data = contacts.map(ele=>{
        return (
           <ContactCard key = {ele.id} ele = {ele}/>          
        )
    })
    return(

        <div className="ui celled list">
        
           {data}

        </div>
    )
}

export default ContactList;