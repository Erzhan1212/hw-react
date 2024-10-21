import { useReducer } from "react";
import { TOUR_REDUCER_TYPE } from "../utils/constans";
import { reducer } from "../utils/generals/reducer";

import { initialState } from "../utils/generals/initialState";

export const useDispachTour = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const titleChangeHandler = (e) => {
    dispatch({ type: TOUR_REDUCER_TYPE.TITLE, payload: e.target.value });
  };

  const imageChangeHandler = (e) => {
    dispatch({ type: TOUR_REDUCER_TYPE.IMAGE_URL, payload: e.target.value });
  };

  const priceChangeHandler = (e) => {
    dispatch({ type: TOUR_REDUCER_TYPE.PRICE, payload: e.target.value });
  };

  const dateChangeHandler = (e) => {
    dispatch({ type: TOUR_REDUCER_TYPE.DATE, payload: e.target.value });
  };

  const descriptionChangeHandler = (e) => {
    dispatch({ type: TOUR_REDUCER_TYPE.DESCRIPTION, payload: e.target.value });
  };
 

  return [  state,
    dispatch,
    titleChangeHandler,
    imageChangeHandler,
    priceChangeHandler,
    dateChangeHandler,
    descriptionChangeHandler,]
    
  
   
  
};
