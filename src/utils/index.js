import axios from "axios";

const teamUpUrl = 'http://localhost:8080/api';

export const customFetch = axios.create({
  baseURL: teamUpUrl,
});