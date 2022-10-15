enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

type Options = {
  method: Method;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: Method.GET});
  };

  post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: Method.POST});
  };

  put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: Method.PUT});
  };

  delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: Method.DELETE});
  };

  _request(url: string, options: Options = { method: Method.GET }): Promise<XMLHttpRequest> {
    const {method, data} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
