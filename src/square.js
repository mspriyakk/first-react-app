import React, {Component} from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {value: null };
    }
    handleClick() {
        console.log(this);
        this.setState({value: "x"});
    }    
    render() {
        //console.log(this.props);

        return (
            <button className="square" 
            onClick={ ()=>this.handleClick()}>      
            {this.state.value}         
            </button>
        );
    }
}

export default Square;