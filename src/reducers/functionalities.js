const initialState = {
    list: [],
  };
  export const userAdd = (state = initialState, action) => {
    switch (action.type) {
        default:
        return state;
        case "ADD_USER":
        const {  data } = action.payload;
        return { 
          //...state is wriiten to return the already existing task
          ...state ,
          //the data: here reprresents the new data that is added
          list:[
              ...state.data,
              {
                  data:data
              }
          ]
      };
      
    }
}