enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

type Options = {
  method: METHOD;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: METHOD.GET});
  };

  post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: METHOD.POST});
  };

  put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: METHOD.PUT});
  };

  delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, {...options, method: METHOD.DELETE});
  };

  _request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
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

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
