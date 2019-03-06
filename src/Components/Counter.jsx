import React, { Component } from 'react';   


class Counter extends Component {
    /
    
    renderNames(){
       // if(this.state.names.length === 0) return <p>"No names"</p>;
        return <ul>{this.state.names.map( name => <li key={name}>{name}</li>)}</ul>;
        
     
    }
    
    render(){
        
        return(
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
                
                <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">Increment
                </button>
                
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-3">Delete
                </button>
            </div>
    );
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatvalue(){
        const {value} = this.props.counter;
       return value === 0 ? "Zero" : value;
    }
}

export default Counter;
