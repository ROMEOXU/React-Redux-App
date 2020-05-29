const initialState = {
    quote:'',
    isFetching:false,
    error:''
}
export const reducer =(state=initialState,action)=>{
 switch(action.type){
     case 'FETCH_START':
         return{
             ...state,
             isFetching:true,
             error:''
         }
     case 'FETCH_SUCCESS':
         return {
             ...state,
             isFetching:false,
             quote:action.payload,
             error:''
         }
     case 'FETCH_NOWORKING':
         return {
             ...state,
             error:action.payload
         }
 default:
     return state;
}
}