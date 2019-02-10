const createNode = createContext => (name, attrs = {}, content = '') => {
  const baseCtx = { name, attrs, content };
  baseCtx.renderAttrs = ctx => Object.keys(ctx.attrs).map(key => ` ${key}=${attrs[key]}`).join('');
  baseCtx.isShort = ctx => ctx.toString().length > 10;
  return createContext(baseCtx);
};

export const createPairedTag = createNode((ctx) => {
  ctx.toString = () => {
    const {
      name, content, renderAttrs,
    } = ctx;
    return `<${name}${renderAttrs(ctx)}>${content}</${name}>`;
  };
  return ctx;
});

export const createUnpairedTag = createNode((ctx) => {
  ctx.toString = () => {
    const { name, renderAttrs } = ctx;
    return `<${name}${renderAttrs(ctx)} />`;
  };
  return ctx;
});
