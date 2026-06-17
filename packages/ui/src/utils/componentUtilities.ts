export const extractStyles = <T extends { className?: string }>(
  componentStyles: string,
  nativeProps: T,
): [string, Omit<T, "className">] => {
  const { className, ...restNativeProps } = nativeProps;

  return [
    typeof className === "string" && className.length > 0
      ? `${className} ${componentStyles}`
      : componentStyles,
    restNativeProps,
  ];
};
