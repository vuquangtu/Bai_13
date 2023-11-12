// Bài 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. Ví dụ có mảng chuỗi như sau: myColor = ["Red", "Green",
// let myColor = ["Red", "Green", "White", "Black"];
// // data = "";
// // for (i = 0; i < myColor.length; i++) {
// //   data += myColor[i] + ",";
// // }
// document.write(myColor.toString());

// // Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.

// let num = prompt("nhap so");
// let str = num.toString();
// let data = [str[0]];
// for (i = 1; i < str.length; i++) {
//   if (str[i] % 2 == 0 && str[i - 1] % 2 == 0) {
//     data.push("-", str[i]);
//   } else {
//     data.push(str[i]);
//   }
// }
// document.write(data.join(""));

let text = "The Quick Brown Fox";
let str = text.toString();
let data = [];
for (i = 0; i < str.length; i++) {
  if (
    str[i] == str[i].toLocaleUpperCase() &&
    str[i] != str[i].toLocaleLowerCase()
  ) {
    data += str[i].toLocaleLowerCase();
  } else {
    data += str[i].toUpperCase();
  }
}
document.write(data);
