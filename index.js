const bttn = document.querySelector("button");
console.log(bttn)

bttn.onclick = ()  =>   {
  document.body.classList.toggle("dark");
  bttn.innerText==="다크 모드로 바꾸기"? 
  bttn.innerText = "라이트 모드로 바꾸기" :
  bttn.innerText = "다크 모드로 바꾸기"

}




const letter = document.querySelector("#contents")
console.log(letter)

letter.onclick = ()  =>   {
  letter.classList.toggle("red");
}





