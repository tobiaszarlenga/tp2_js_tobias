let j = 500;
let rep = 0;

for (let i = 1; i <= j; i++) {
  document.write(i);
  if (i % 4 == 0) {
    document.write("multiplo de 4");
  }
  if (i % 9 == 0) {
    document.write("multiplo de 9");
  }
  document.write("<br>");
}
if (i % 5) {
  document.write("<hr>");
}
