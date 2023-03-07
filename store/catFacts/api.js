import axios from "axios"
const catFacts = axios.create({
  baseURL: "https://catfact.ninja/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function catfacts_get_fact_read(payload) {
  return catFacts.get(`/fact`)
}
export const apiService = { catfacts_get_fact_read }
