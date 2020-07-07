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

class RodonavesFetchServerError extends Error {
  /**
   * Creates an instance of RodonavesFetchServerError.
   *
   * @param status Status Code passed from the server
   */
  constructor(status: number) {
    super(`Server error status ${status} `);
    this.name = 'RodonavesFetchServerError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class RodonavesFetchClientError extends Error {
  /**
   * Creates an instance of RodonavesFetchClientError.
   */
  constructor() {
    super('Client error');
    this.name = 'RodonavesFetchClientError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class RodonavesFetchOtherError extends Error {
  /**
   * Creates an instance of RodonavesFetchOtherError.
   */
  constructor() {
    super('Other Error');
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
