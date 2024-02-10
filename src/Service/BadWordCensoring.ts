export function BadWordCensoring(word: string): string {
  const badWordList = [
    "ajg",
    "ngentot",
    "kontol",
    "pepek",
    "bajingan",
    "ng3nt0t",
    "ngent0t",
    "ng3ntot",
    "k0nt0l",
    "kont0l",
    "k0ntol",
    "p3p3k",
    "pep3k",
    "p3pek",
    "ktl",
    "ppk",
    "p3pk",
    "pepk",
    "pp3k",
    "ppek",
    "kt0l",
    "kntol",
    "knt0l",
    "k0tl",
    "kontl",
    "k0ntl",
    "ngnt0t",
    "ngntot",
    "biadab",
    "anjing",
  ];
  const kata = {
    lama: word,
    baru: "",
  };
  badWordList.map((item) => {
    const regEx = new RegExp(item, "i");
    kata.baru = kata.lama.replace(regEx, "*****");
    kata.lama = kata.baru;
  });
  return kata.baru;
}
