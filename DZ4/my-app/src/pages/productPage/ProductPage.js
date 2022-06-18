import React from "react";

class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name:"", surname:"", age: 0, address:""}
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        const data = {
            name: this.state.name,
            surname: this.state.name,
            age: this.state.name,
            address: this.state.name

        }
        console.log(data)
    }

    render() {
        return (
          <div>
              <input type="text" placeholder="name" name="name" onChange={this.handleInput}/>
              <input type="text" placeholder="suranme" name="surname" onChange={this.handleInput}/>
              <input type="number" placeholder="age" name="age" onChange={this.handleInput}/>
              <input type="text" placeholder="adress" name="address" onChange={this.handleInput}/>
              <button onClick={this.onSubmit}>OK</button>
          </div>

        )
    }
}




export default ProductPage;