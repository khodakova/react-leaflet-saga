import { combineReducers } from "redux";

import applicationReducer from "./application/reducer";
import pointReducer from "./points/reducer";

const rootReducer = combineReducers({
    application: applicationReducer,
    point: pointReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
