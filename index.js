



let score = prompt("당신의 나이를 입력하세요");
console.log(parseInt(score))
console.log(score)
if(score != null)
 {
  if (parseInt(score) >= 65) {
    alert("노년");
  } 
  else if (parseInt(score) >= 50) {
    alert("장년"); }
    else if (parseInt(score) >= 30) {
      alert("중년"); }
      else if (parseInt(score) >= 19) {
        alert("청년"); }
        else if (parseInt(score) >= 13) {
          alert("청소년"); }
          else if (parseInt(score) >=6) {
            alert("아동"); }

        

         else if (isNaN(parseInt(score))){
          alert("nan")
         }









  else {
    alert("영‧유아");
  }
}
 
 