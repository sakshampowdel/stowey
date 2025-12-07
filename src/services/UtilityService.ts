export const generateId = (): string => {
  const timestamp: string = Date.now().toString(36);
  const random: string = Math.random().toString(36).substring(2, 7);
  return timestamp + random;
};
