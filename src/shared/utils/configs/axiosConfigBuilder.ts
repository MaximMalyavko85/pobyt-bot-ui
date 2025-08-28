import axios from "axios";

const refreshInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

class BaseService {
  baseURL: string | undefined;
  baseServiceInstance;
  isRetry: boolean = false;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL;

    this.baseServiceInstance = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
    });

    this.baseServiceInstance.defaults.withCredentials = true;
  }
}

export class ApiService extends BaseService {
  constructor() {
    super();

    this.baseServiceInstance.interceptors.request.use(this.authInterceptor);
    this.baseServiceInstance.interceptors.response.use(
      this.handleResponseInterceptor.bind(this)
    );
  }

  authInterceptor(config: any) {
    const setHeaders = () => {
      const contentType = "application/json";

      const isFormData =
        config.headers["Content-Type"] === "multipart/form-data" && true;

      const headers: any = {
        Authorization: `Bearer ${localStorage.getItem("_accessToken")}`,
        //["CSRF-Token"]: `${getCookie("XSRF-TOKEN") || ""}`,
      };

      if (!isFormData) {
        headers["Accept"] = contentType;
        headers["Content-Type"] = contentType;
      }

      return headers;
    };

    config.headers = setHeaders();

    return config;
  }

  handleResponseInterceptor(response: any) {
    return response;
  }
}
