const x = void 0;
console.log(x);

void (function foo() {
  console.log("foo");
})();

undefined = 10;

console.log(undefined == 10);
