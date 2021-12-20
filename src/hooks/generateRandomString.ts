export const generateRandomString = (stringSize: number): string => {
  return process.hrtime()[0] + Math.random().toString(stringSize).slice(2);
};


