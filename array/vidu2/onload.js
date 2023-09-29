var women = [
  {
    id: 1,
    name: "Quần jean nữ",
    price: 269.0,
    discount: 350.0,
    img: "https://pos.nvncdn.net/888555-3379/ps/20190410_0dOyOUqiuqcPzIWVgxV0Ow5X.jpg",
  },
  {
    id: 2,
    name: "Áo khoác nữ",
    price: 249.0,
    discount: 369.0,
    img: "https://thoitrangteenthienphuc.vn/upload/news/ao-khoa-kaki-nu-5156.jpg",
  },
  {
    id: 3,
    name: "Áo phông nữ",
    price: 159.0,
    discount: 399.0,
    img: "https://dongphuchaianh.vn/wp-content/uploads/2022/07/ao-phong-co-co-nu-form-rong.jpg",
  },
];
var man = [
  {
    id: 1,
    name: "The combo (đen) quần short kaki",
    price: 250.0,
    img: "https://salt.tikicdn.com/cache/280x280/ts/product/78/1a/b4/e10dfd273ab6cb38b1b580cf82f07cb2.jpg",
  },
  {
    id: 2,
    name: "The combo (đen) quần short kaki",
    price: 250.0,
    img: "https://vn-live-01.slatic.net/p/62bae86d857356e3be1800665ba2df29.jpg",
  },
  {
    id: 3,
    name: "The combo (đen) quần short kaki",
    price: 250.0,
    img: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-rjchzzy6niov5a_tn",
  },
];
function myFunction() {
  for (var i = 0; i <= women.length - 1; i++) {
    var demo = `<div class="col-3">
      <div class="card" style="width: 30rem; ">
      <img class="card-img-top" src=${women[i].img} alt="Card image cap"width="200px">
      <div class="card-body" style="padding-left : 10px">
         <h5 class="card-title">${women[i].name}</h5>
         <p class="card-text">${women[i].price}</p>
         <p class="card-text">Giá gốc ${women[i].discount}</p>
         <button type=button style = "color : black; padding :10px; onclick="order()""> Đăt Hàng </button>
       </div>
     </div>
     </div>`;
    document.getElementById("women").innerHTML += demo;
  }
  for (var i = 0; i <= man.length; i++) {
    var demo = ` <div class="col-3">
    <div class="card" style="width: 30rem;">
        <img class="card-img-top" src=${man[i].img} alt="Card image cap" width="200px">
        <div class="card-body" style="padding-left :10px">
          <h5 class="card-title">${man[i].name}</h5>
          <p class="card-text">${man[i].price}</p>
          <button type=button style = "color : black; padding :10px; "> Đăt Hàng </button>
        </div>
      </div>
      </div>`;
    document.getElementById("man").innerHTML += demo;
  }
}
