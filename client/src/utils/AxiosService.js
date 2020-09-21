import axios from 'axios'

class AxiosService {
  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }
  handleSuccess(res) {
    return res
  }
  handleError(error) {
    return Promise.reject(error)
  }
  get(url) {
    return this.instance.get(url)
  }
}

export default new AxiosService()