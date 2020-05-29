import axios from "axios";

export const getQuote = ()=>dispatch=>{
    dispatch({type:'FETCH_START'});
    axios
    .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
    .then(res => {
      console.log("CAT res", res);
      dispatch({type:'FETCH_SUCCESS',payload:res.data.text})
    })
    .catch(err=>dispatch({type:'FETCH_NOWORKING',payload:'romeo say it is not wroking'}) )
}