const Reducer = (state = 
    {name:'john',balance:55}
    , action )=>{
    switch(action.type){
    
    case "FETCH_DATA":
      return state

    default:
      return state;
    }}
  
    export default Reducer