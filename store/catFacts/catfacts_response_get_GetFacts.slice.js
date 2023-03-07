import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const catfacts_get_fact_read = createAsyncThunk(
  "catfacts_response_get_GetFacts/catfacts_get_fact_read",
  async payload => {
    const response = await apiService.catfacts_get_fact_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const catfacts_response_get_GetFactsSlice = createSlice({
  name: "catfacts_response_get_GetFacts",
  initialState,
  reducers: {},
  extraReducers: {
    [catfacts_get_fact_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [catfacts_get_fact_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [catfacts_get_fact_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  catfacts_get_fact_read,
  slice: catfacts_response_get_GetFactsSlice
}
