export function Element(constructor) {
  return (attrs, children) => Reflect.construct(constructor, [attrs, children]);
}
