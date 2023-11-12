let tutiengviet = ["xin chao", "chao buoi sang", "ban khoe khong"];
let tienganh = ["hello", "good moring", "how are you?"];

function dicH() {
  let tucandich = document.getElementById("nhaptu").value;
  console.log(tucandich);
  let index = tienganh.indexOf(tucandich);
  document.getElementById("nhaptu").value = tutiengviet[index];
}
