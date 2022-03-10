export const randomDate = () => {
  const start = new Date(2019, 1, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
