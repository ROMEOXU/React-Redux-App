import React from 'react'
import { connect } from "react-redux";
import {getQuote} from './action';
function Quotes(props) {
console.log('quotes',props) ;
    return (
        <div>
         <h2>CAT FACTS</h2>
        <button onClick={props.getQuote}>click</button>   
        {props.isFetching && (<p>loading....</p>)}
        <div className="quote">{props.quote}</div>
        <div>{props.error}</div>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        quote:state.quote,
        isFetching:state.isFetching,
        error:state.error
    }
}
export default connect(mapStateToProps,{getQuote})(Quotes);