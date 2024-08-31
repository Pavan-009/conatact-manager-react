import React from "react";

class AddContact extends React.Component{
    count = 0
     add = (e)=>{

        e.preventDefault();
        if(this.state.name=== "" || this.state.email === ""){
            alert("Please fill all the fields!!!");
            return;
        }
        else{
            this.count +=1
            this.props.addContactHandler(this.state);
            console.log(this.count);
            this.setState({id : 0,name:"",email:""});
        }
      }
    
    state = {
        id : this.count,
        name:"",
        email:""
    }
    render(){
        return(

            <div className= "ui main">
            <h2>Add Contact</h2>
            <form onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})} type = "text" name = "name" placeholder="Enter name"/>
                </div>
                <div className="field">
                <label>Email</label>
                <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} type = "email" placeholder="Enter Email"/>
                <button  className="ui button blue">Add</button>
            </div>
            </form>
            </div>
        )
    }   
}

export default AddContact;