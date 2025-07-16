let parent = document.getElementById("parent");

fetch("https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let div = document.createElement("div");

      div.classList.add("box");
      div.innerHTML = ` 
       <div class="forImg">
         <img src=${item.image} alt="" />
       </div>
        <h4 class="box-h1">${item.title}</h4>
        <p></p>
        <div class="child">
          <p>$${item.price}</p>
          <button onclick="resultFunc('${item.title}, ${item.price}')" id="btn">Sotib olish</button>
        </div>
      `;
      parent.appendChild(div);
    });
  });

let yigindi = document.getElementById("yigindi");

let resultFunc = function (name, price) {
  alert("Mahsulot qo'shildi");
  console.log(name, price);

  // let mahsulot = document.createElement("div");

  // mahsulot.textContent = product.title;

  // yigindi.appendChild(mahsulot);
};
