export const getLimit = (text: string) => {
  if (text.length > 3) {
    return text.slice(0, 3);
  }
  return text;
};
