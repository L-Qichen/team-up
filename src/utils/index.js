import axios from "axios";

const teamUpUrl = 'http://localhost:8004';

export const customFetch = axios.create({
  baseURL: teamUpUrl,
});