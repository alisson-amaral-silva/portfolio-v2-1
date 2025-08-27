export const getLabel = (
  t: (k: string) => string,
  label?: string,
  labelKey?: string
) => (labelKey ? t(labelKey) : label ?? "");
