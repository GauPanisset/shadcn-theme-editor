const debounce = <T extends Function>(cb: T, waitInMs: number) => {
  let h: NodeJS.Timeout;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), waitInMs);
  };
  return <T>(<any>callable);
};

export { debounce };
