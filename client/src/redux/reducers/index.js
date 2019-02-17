import { combineReducers } from "redux";
import securityReducer from "./security";
import bakeryReducer from "./bakery";

const rootReducer = combineReducers({
    security: securityReducer,
    bakery: bakeryReducer
});

export default rootReducer;