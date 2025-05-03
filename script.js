const infoPage = document.getElementById("info-page");
const infoBtn = document.getElementById("info");
const closeInfo = document.getElementById("closeInfoBtn");
const generate = document.getElementById("generator");
const output = document.getElementById("output");
const main = document.getElementById("main");

const generateHexColor = () => {
  let char = "0123456789abcdef";
  let result = "";
  for (i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * char.length);
    result += char[randomValue];
  }
  result = "#" + result;
  return result;
};
const generateFunc = () => {
  generate.addEventListener("click", (event) => {
    let colorCode = generateHexColor();
    main.style.setProperty('background-color',colorCode)
    output.style.setProperty('display','flex')
    output.textContent = "Background Color Code : "+  colorCode;

  });
};


const PageOpenClose = () => {
  infoBtn.addEventListener("click", (event) => {
    infoPage.style.setProperty("display", "flex");
  }),
    closeInfo.addEventListener("click", (event) => {
      infoPage.style.removeProperty("display");
    });
};
PageOpenClose();
generateFunc();