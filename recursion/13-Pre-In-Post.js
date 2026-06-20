let PreInPost = (n) => {
  if (n == 0) return;

  process.stdout.write(`${n}`);

  PreInPost(n - 1);
    process.stdout.write(`${n}`);

  PreInPost(n - 1);
    process.stdout.write(`${n}`);


  return;
};

PreInPost(3);
