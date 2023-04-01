import Block from './Block';
import Handlebars, {HelperOptions} from 'handlebars';

interface BlockComponent<P> {
  new (props?: P): Block<P>;
  componentName: string;
}

type BlockConstructable<P> = BlockComponent<P> & (new (props?: P) => Block<P>);
export default function registerComponent<Props extends any>(Component: BlockConstructable<Record<string, unknown>>) {
  const componentName = Component.componentName || Component.name;
  Handlebars.registerHelper(componentName, function (this: Props, {hash: {ref, ...hash}, data, fn}: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    if (!data.root.refs) {
      data.root.refs = {};
    }

    const {children, refs} = data.root;

    /**
     * Костыль для того, чтобы передавать переменные
     * внутрь блоков вручную подменяя значение
     */
    (Object.keys(hash) as any).forEach((key: keyof Props) => {
      if (this[key] && typeof this[key] === 'string') {
        hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}`, 'i'), this[key]);
      }
    });

    const component = new Component(hash);

    children[component.id] = component;

    if (ref) {
      refs[ref] = component;
    }

    const contents = fn ? fn(this) : '';

    return `<div data-id="${component.id}">${contents}</div>`;
  })
}
