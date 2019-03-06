import React, { Component } from 'react';
import Counter from "./Counter";


class Counters extends Component {
    
/*
Counter props ----> value={counter.value}
                    id={counter.id}
Instead of polluting the props space(key&Id are same),
replace the props with the mapped counter ie counter={counter}
*/
    render() { 
       const {onReset, counters, onDelete, onIncrement} = this.props;
        
       return ( 
            <div>
                <button onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset
                </button>
                {counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={onDelete}
                onIncrement={onIncrement} 
                counter={counter}
                />
                ))}
            </div> 
        );
    }
}
 
export default Counters; 