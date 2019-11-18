import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: "https://acessaude-api.herokuapp.com/"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  }
};
export function getCep(cep) {
  return Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
