import {Block} from "../../core";

interface InputProps {
  placeholder: string,
  color: string,
  value: string,
  type: string,
  name: string
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  _render() {
    return
  }
}
