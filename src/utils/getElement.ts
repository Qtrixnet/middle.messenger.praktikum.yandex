const getElement = (element: HTMLElement | null, inputName: string): HTMLInputElement => element?.querySelector(`input[name=${inputName}]`) as HTMLInputElement;

export default getElement;
