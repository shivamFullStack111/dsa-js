let findMethod = (n, s, h, d) => {
  if (n == 0) return;

  findMethod(n - 1, s, d, h);

  console.log(`${s} => ${d}`);

  findMethod(n - 1, h, s, d);
};

findMethod(4, "A", "B", "C");

//            S -> Source       H -> Helper     D -> Destination
