import Block from "./Block";
import isEqual from "../helpers/is-equal";
import render from "./render";

class Route {
  private block: Block | null = null;

  constructor(
    private readonly pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string) {
  }

  public leave() {
    this.block = null;
  }

  public match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  public render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      render(this.query, this.block);
      return;
    }
  }

  public getPath() {
    return this.pathname;
  }
}

export default Route;
