import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { darkTheme } from "../../theme/theme";

export const fetchThemeJSON = createAsyncThunk(
  "theme/fetchthemes",
  async () => {
    const response = await fetch("theme.json");
    return await response.json();
  }
);

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    selectedThemeValue: "light",
    pallets: null,
    themes : null,
  },
  reducers: {
    setTheme: {
      reducer: (state, action) => {
        return {
          ...state,
          selectedThemeValue: action.payload,
        };
      },
    },
    addTheme: {
      reducer: (state, action) => {

        return {
          ...state,
          themes: {...state.themes,...action.payload}
        };
      },
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchThemeJSON.fulfilled, (state, action) => {
      
      return {
        ...state,
        pallets: action.payload,
      };
    });

    builder.addCase(fetchThemeJSON.pending, (state, action) => {
      return { ...state, pallets: null };
    });

    builder.addCase(fetchThemeJSON.rejected, (state, action) => {
      return { ...state, pallets: null };
    });
  },
});

export const { setTheme, addTheme } = themeSlice.actions;

export default themeSlice.reducer;
