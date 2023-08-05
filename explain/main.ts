let number1: string = "5";
let number2 = 10;

const add = function (a: number, b: number) {
  return a + b;
};

console.log(add(number1, number2));

//
// Ts => compiler; (一回Jsのコードに変更され、その実行されちゃいます。)
// Js => interpreter; (コードはそのまま実行されます。)
