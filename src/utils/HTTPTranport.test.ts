import {expect} from "chai";
import HTTPTransport from "./HTTPTransport";
import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from "sinon";

describe("HTTPTransport", () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport("/auth");
  });

  afterEach(() => {
    requests.length = 0;
  });

  it("Method 'get' should send a GET request", () => {
    instance.get("/user");

    const [request] = requests;

    expect(request.method).to.eq("Get");
  });

  it("Method 'post' should send a POST request", () => {
    instance.post("/signin");

    const [request] = requests;

    expect(request.method).to.eq("Post");
  });
});