export function inherits(element, base, baseAttrsOverride = {}) {
  return (attrs, children) =>
    element(attrs, base({ ...attrs, ...baseAttrsOverride }, children));
}
