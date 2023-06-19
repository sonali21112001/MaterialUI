import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeReducer/theme.Reducer";

export default configureStore({
  reducer: {
    theme,
    
  },
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
