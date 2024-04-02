document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출을 막아줍니다.

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log("로그인 시도: ", email, password);
  // 여기서 AJAX를 사용하여 서버에 로그인 정보를 보낼 수 있습니다.
  // 예시: 
  // fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({email: email, password: password}),
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('에러:', error));
});
