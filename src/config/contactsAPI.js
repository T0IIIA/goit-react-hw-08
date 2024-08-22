import axios from "axios";

export const contactsAPI = axios.create({
  baseURL: 'https://connections-api.goit.global/',
})

export const setToken = (token) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  contactsAPI.defaults.headers.common.Authorization = ``
}