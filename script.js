// В js объявляйте, создайте массив с ссылками на картинки.
//  На основе этого массива формируйте множество маленьких
//  картинок в верхней части интерфейса.
//  Пользователь нажимая на маленькие картинки видит их отображение
//  в большем размере(только ту картинку, на которую он нажимал).
////////////////////////////////////////////////////////////////////
const linksToPictures = [
  {
    img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649332068_2-vsegda-pomnim-com-p-karibskoe-more-plyazh-foto-2.jpg",
  },

  {
    img: "https://vsegda-pomnim.com/uploads/posts/2022-03/1647611636_18-vsegda-pomnim-com-p-karibskoe-more-foto-20.jpg",
  },

  {
    img: "https://vsegda-pomnim.com/uploads/posts/2022-03/1647611603_14-vsegda-pomnim-com-p-karibskoe-more-foto-16.jpg",
  },

  {
    img: "https://www.onetwotrip.com/ru/blog/wp-content/uploads/2016/10/caribbean-island.jpg",
  },

  {
    img: "https://sportishka.com/uploads/posts/2022-11/1667559845_52-sportishka-com-p-ostrov-san-mari-v-karibskom-more-krasivo-55.jpg",
  },
  {
    img: "https://republica-dominikana.ru/wp-content/uploads/2018/08/38-1024x683.jpg",
  },
  {
    img: "https://sportishka.com/uploads/posts/2022-03/thumbs/1646719176_44-sportishka-com-p-bereg-karibskogo-morya-turizm-krasivo-foto-56.jpg",
  },
];
for (let i = 0; i < linksToPictures.length; i++) {
  const pic = document.createElement("img");
  pic.setAttribute("src", linksToPictures[i].img);
  const div = document.getElementById("block1");

  div.append(pic);

  pic.onclick = (evt) => {
    document.querySelector("#picture").src = evt.target.src;
  };
}
