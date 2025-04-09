export const capitalizeFirstLetter = (word: string): string => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const getLastSegmentURLPath = (url: string): string => {
  if (!url) return "";
  return url.split("/").pop() ?? "";
};
