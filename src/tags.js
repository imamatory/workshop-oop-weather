const createNode = createContext => (name, attrs = {}, content = '') => {
  const baseCtx = {
    renderAttrs: attrsObj => Object.keys(attrsObj).map(key => ` ${key}=${attrs[key]}`).join(''),
  };
  return createContext({
    ...baseCtx, name, attrs, content,
  });
};

export const createPairedTag = createNode(ctx => ({
  toString: () => {
    const {
      name, attrs, content, renderAttrs,
    } = ctx;
    return `<${name}${renderAttrs(attrs)}>${content}</${name}>`;
  },
}));

export const createUnpairedTag = createNode(ctx => ({
  toString: () => {
    const { name, attrs, renderAttrs } = ctx;
    return `<${name}${renderAttrs(attrs)} />`;
  },
}));
