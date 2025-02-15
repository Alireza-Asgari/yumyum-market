// scroll typing handler
const typingHandler = document.querySelector("#typing-with-scroll");
const scrollHeight = typingHandler.clientHeight;
const startOffsetSection = typingHandler.parentElement.offsetTop;
const endSection = startOffsetSection + scrollHeight;
const textForTyping = document.getElementById("text-typing").textContent;
const textTypeLength = textForTyping.length;
document.getElementById("text-typing").textContent = textForTyping.substring(
  0,
  100
);
const imgSection1 = document.querySelectorAll("#scroll-container .pic")[0];
const imgSection2 = document.querySelectorAll("#scroll-container .pic")[1];
const imgSection3 = document.querySelectorAll("#scroll-container .pic")[2];
const startSectionCart = document.querySelector("#section-cart").offsetTop;
const heightSectionCart = document.querySelector("#section-cart").clientHeight;
const endSectionCart = startSectionCart + heightSectionCart;
window.addEventListener("scroll", (event) => {
  // get the scroll position
  const scrollTop = window.scrollY;
  if (scrollTop > startOffsetSection && scrollTop < endSection) {
    // offsetsroll section      const scrollSection = scrollTop - startOffsetSection;
    const percentageScroll = (scrollSection + 800) / scrollHeight;
    document.getElementById("text-typing").textContent =
      textForTyping.substring(0, textTypeLength * percentageScroll); // convert percentage scroll to number of characters    }
    if (
      scrollTop + 200 > imgSection1.offsetTop &&
      scrollTop + 200 < imgSection2.offsetTop
    ) {
      document.getElementById("title1").style.display = "flex";
      document.getElementById("title2").style.display = "none";
      document.getElementById("title3").style.display = "none";
    } else if (
      scrollTop + 200 > imgSection2.offsetTop &&
      scrollTop + 200 < imgSection3.offsetTop
    ) {
      document.getElementById("title1").style.display = "none";
      document.getElementById("title2").style.display = "flex";
      document.getElementById("title3").style.display = "none";
    } else if (
      scrollTop + 200 > imgSection3.offsetTop &&
      scrollTop + 200 < endSection
    ) {
      document.getElementById("title1").style.display = "none";
      document.getElementById("title2").style.display = "none";
      document.getElementById("title3").style.display = "flex";
    }
    // section cart    if (scrollTop > startSectionCart && scrollTop < endSectionCart) {
    const cartScrollTop = scrollTop - startSectionCart;
    const partCartSection = heightSectionCart / 30;
    const numberOfScroll = parseInt(cartScrollTop / partCartSection);
    document.getElementById("pic-cart").src = `/Images/carts/c${
      numberOfScroll < 1 ? 1 : numberOfScroll > 15 ? 15 : numberOfScroll
    }.png`;
  }
});
