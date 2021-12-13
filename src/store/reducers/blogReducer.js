
const blogReducer = (state = [], action) => {

    switch(action.type) {

        case "ADD_BLOG":
            return [...state, action.payload];
        
        case "DELETE_BLOG":
            return state.filter(blog => blog.id !== action.payload)

        default:
            return state; 
    }

}


export default blogReducer;