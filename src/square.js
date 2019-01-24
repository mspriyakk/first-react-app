import React, {Component} from 'react';

class Square extends Component {
    render() {
        //console.log(this.props.onClick);
        return (
            <button className="square" 
            onClick={this.props.onClick}>      
            {this.props.value}         
            </button>
        );
    }
}
export default Square;