import { AxiosResponse, AxiosRequestConfig } from 'axios';

class AxiosTestError extends Error {
  config: any;
  code: any;
  request: any;
  response: any;
  isAxiosError: boolean;
  constructor({
    message = 'Axios Test Error',
    config = '',
    code = '',
    request = '',
    response = ''
  }: {
    message?: any;
    config?: any;
    code?: any;
    request?: any;
    response?: any;
    isAxiosError?: boolean;
  }) {
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class AxiosError<T> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | undefined,
    request?: any,
    response?: AxiosResponse<T>
  ) {
    super(message);
    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
  }
}

class RodonavesFetchServerError<T> extends AxiosError<T> {
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code: string | undefined,
    request: any,
    response: AxiosResponse<T>
  ) {
    super(message, config, code, request, response);
    this.name = 'RodonavesFetchServerError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class RodonavesFetchClientError<T> extends AxiosError<T> {
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code: string | undefined,
    request: any
  ) {
    super(message, config, code, request);
    this.name = 'RodonavesFetchClientError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class RodonavesFetchOtherError<T> extends AxiosError<T> {
  constructor(message: string, config: AxiosRequestConfig) {
    super(message, config);
    this.name = 'RodonavesFetchOtherError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export {
  AxiosTestError,
  RodonavesFetchServerError,
  RodonavesFetchClientError,
  RodonavesFetchOtherError
};
