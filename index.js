const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event)=>{
   const xPos = event.offsetX;
   const yPos = event.offsetY;

   const spanEle = document.createElement("span")

   spanEle.style.left = xPos + "px";
   spanEle.style.top = yPos + "px";

   const size = Math.random() * 100;
   spanEle.style.height = size + "px";
   spanEle.style.width = size + "px";
    bodyElement.appendChild(spanEle);

    setTimeout(() => {
        spanEle.remove();
    }, 3000);
})