//this will be an class component
import React from "react"
class AddContact extends React.Component{
    state = {
        name:"",
        email:""
    }

    add= (e)=>{
        e.preventDefault();
        if(this.state.name===""||this.state.email===""){
            alert("All fields are mandatory");
            return;
        }
        this.props.AddContactHandler(this.state);
        this.setState({name:"",email:""})
        console.log(this.state);
        
    }

    // updateState=(e)=>{
    //     this.setState(name:e.target.value)
    // }

    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>

                    <div className="field">
                        <label>Name : </label>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})}></input>
                    </div>

                    <div className="field">
                        <label>Email : </label>
                        <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e)=>this.setState({email : e.target.value})}></input>
                        <button className="ui button blue">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;