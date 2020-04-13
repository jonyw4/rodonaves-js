/* eslint-disable max-classes-per-file */

// TODO: Create doc
// TODO: Create test
class RodonavesFetchError extends Error {
  constructor(message) {
    super(message);
    this.message = 'Rodonaves Fetch Error: ';
  }
}

class RodonavesFetchServerError extends RodonavesFetchError {
  constructor(status) {
    super();
    this.name = 'RodonavesFetchServerError';
    this.message = `${this.message}${status}Server error status `;
  }
}

class RodonavesFetchClientError extends RodonavesFetchError {
  constructor() {
    super();
    this.name = 'RodonavesFetchClientError';
    this.message = `${this.message}Client error`;
  }
}

class RodonavesFetchOtherError extends RodonavesFetchError {
  constructor() {
    super();
    this.name = 'RodonavesFetchOtherError';
    this.message = `${this.message}Client error`;
  }
}

export {
  RodonavesFetchServerError,
  RodonavesFetchClientError,
  RodonavesFetchOtherError,
};
