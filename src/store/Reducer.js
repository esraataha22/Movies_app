const InitialValues = {
    addtofav : "not added" ,
    list: [] ,
    favourits: [],
    counter: 0

}

export default function Reducers(state = InitialValues, action) {
    switch (action.type){
        case "ADDTOFAV":
            return {
                ...state ,
                addtofav: action.payload
            }
        case "ADD":
            return {
                ...state ,
                favourits: [...state.favourits , action.payload]
            }
        case "REMOVE":
            return {
                 ...state ,
                favourits: [...state.favourits , action.payload]
            }
        case "COUNTER":
            return {
                ...state ,
                counter: action.payload
            }
        case "MOVIES":
            return {
                ...state ,
                list: action.payload
            }
        default:
            return state
    }
    
}