var to = "click đi cậu:3";
var gift_url = "https://www.youtube.com/watch?v=wN83dn07TUw";
var gift_image_url =
  "https://media2.giphy.com/media/UWUvp1dntT4U9LO6ER/giphy.webp?cid=790b7611jqz7ejy1jrgkte00c54lk5b4yio50bzuhqz3twpv&ep=v1_gifs_search&rid=giphy.webp&ct=g";
var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("card").classList.add("card-show");
    },
    false
  );

  nametag.innerText = to;
}

init();
