import { useReducer } from "react";
import CategoryContext from "../context/CategroyContext";
import { CategoryReducer, initialState } from "../reducers/CategoryReducer";




// Cateogry context provider
const CategoryContextProvider = ({ children }) => {

    // reducer state
    const [CategoryState, dispatch] = useReducer(CategoryReducer, initialState);

    return (
        <CategoryContext.Provider value={{ CategoryState, dispatch }}>
            { children }
        </CategoryContext.Provider>
    );

}


export default CategoryContextProvider;


