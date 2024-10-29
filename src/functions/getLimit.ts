export const getLimit = (text: string) => {
  if (text.length > 18) {
    return text.slice(0, 18);
  }
  return text;
};
