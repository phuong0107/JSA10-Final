//NAVBAR
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


//SIGNIN
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let userArr = JSON.parse(localStorage.getItem('login02')) || [];

const displayStoredUsers = () => {
    console.log('Current users in localStorage:', userArr);
};

const submit = document.getElementById('dangky');
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let email1 = document.getElementById('emailsignup').value;
    let password1 = document.getElementById('passwordsignup').value;

    console.log('Registering user...');
    console.log('emailsignup =', email1);
    console.log('passwordsignup =', password1);

    function addUser() {
        const user = { email: email1, password: password1 };
        userArr.push(user);
        localStorage.setItem('login02', JSON.stringify(userArr));
        alert('Đăng ký thành công!');
        location.replace('login.html');
        displayStoredUsers(); 
    }

    if (password1.trim().length < 6) {
        alert('Mật khẩu phải tối thiểu 6 ký tự');
    } else if (password1.trim() === password1.toLowerCase()) {
        alert('Mật khẩu phải có ký tự in hoa');
    } else {
        let duplicate = userArr.some(user => user.email === email1);
        if (duplicate) {
            alert('Tài khoản đã tồn tại');
        } else {
            addUser();
        }
    }
});

const submitlogin = document.getElementById('dangnhap');
submitlogin.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('emaillogin').value;
    let password = document.getElementById('passwordlogin').value;

    console.log('Logging in user...');
    console.log('emaillogin =', email);
    console.log('passwordlogin =', password);

    let user = JSON.parse(localStorage.getItem('login02')) || [];

    let checkEmail = user.some(i => i.email === email && i.password === password);
    console.log(checkEmail);

    if (checkEmail) {
        alert('Đăng nhập thành công!');
        location.replace('home.html');
    } else {
        alert('Đăng nhập thất bại');
    }
});
displayStoredUsers();
