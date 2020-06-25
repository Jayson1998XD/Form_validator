// get element 获取元素
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

// show input error message 展示验证失败
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success 验证成功
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// checkRequired input 修饰空值提示
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getKeyWords(input)}为必填项`);
    } else {
      showSuccess(input);
    }
  });
}

// check email is valid 邮箱正则表达式（邮箱是否有效）
function checkEmail(input) {
  const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (re.test(input.value.trim())) { //trim去首尾空格
    showSuccess(input);
  } else {
    showError(input, "邮箱格式错误");
  }
}

// function checkEmail(email){
//   const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   return re.test(String(email));
// }



// get keyWords 
function getKeyWords(input) {
  return input.placeholder.slice(3); //slice(3)从第三个数组元素开始检测
}

// check password match 确认密码检测
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "密码不匹配");
  }
}

// //checkLength 字符检测
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getKeyWords(input)}至少${min}个字符`);
  } else if (input.value.length > max) {
    showError(input, `${getKeyWords(input)}少于${max}个字符`);
  } else {
    showSuccess(input);
  }
}


//event listener 监听内容
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // if(username.value === "") {
  //   showError(username,"用户名为必填项")
  // }else{
  //   showSuccess(username);
  // }

  // if(email.value === ""){
  //   showError(email,"邮箱为必填项")
  // }else if(!checkEmail(email.value)){
  //   showError(email,"邮箱格式错误")
  // }else{
  //   showSuccess(email);
  // }

  // if(password.value === ""){
  //   showError(password,"密码为必填项")
  // }else{
  //   showSuccess(password);password1
  // }

  // if(password1.value === ""){
  //   showError(password1,"邮箱为必填项")
  // }else{
  //   showSuccess(password1);
  // }



  checkRequired([username, email, password, password1]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPasswordsMatch(password, password1);
});