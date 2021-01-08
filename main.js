const targetBlankElement = document.querySelector(".test-link a");

if(targetBlankElement.hasAttribute("target")){
    console.log(targetBlankElement.getAttribute("target"));
}

else{
    targetBlankElement.setAttribute("target","_blank");
}