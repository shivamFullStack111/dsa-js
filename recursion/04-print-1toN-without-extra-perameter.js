let increasing = (n) => {
  if (n == 0) return;

  increasing(n - 1);
  console.log(n);

  return;
};

increasing(10);
