export const capitalizeString = (value: string) =>
  value[0]?.toUpperCase() + value.slice(1);

type TypographyStyleMapper<
  TTree extends Record<string, Record<string, unknown>>,
> = {
  [K1 in keyof TTree as `${K1 & string}${Capitalize<keyof TTree[K1] & string>}`]: TTree[K1][keyof TTree[K1]];
};

export const createTypographyStyleMapper = <
  TTree extends Record<string, Record<string, unknown>>,
>(
  tree: TTree,
) => {
  const result = {} as TypographyStyleMapper<TTree>;

  for (const key in tree) {
    const value = tree[key];

    for (const key2 in value) {
      const mappedKey =
        `${key}${capitalizeString(key2)}` as keyof TypographyStyleMapper<TTree>;
      result[mappedKey] = value[
        key2
      ] as TypographyStyleMapper<TTree>[typeof mappedKey];
    }
  }

  return result;
};
