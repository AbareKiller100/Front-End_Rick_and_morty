import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState={
    myFavorites:[],
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return {
                ...state, 
                myFavorites:[...state.myFavorites, action.payload]
            }
        
        case REMOVE_FAV:
            const arrFav=state.myFavorites.filter((fav)=> fav.id !== Number(action.payload))
            return {
                ...state,
                myFavorites:arrFav
            }

        default:
            return {...state}
    }
}

export default reducer;