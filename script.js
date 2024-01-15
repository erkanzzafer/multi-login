const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkBoxPass= document.querySelector('.checkbox-pass');
const passwordInput= document.querySelector('.password');
const loginTitle=document.querySelector('.loginTitle-text');
const emailValue=document.querySelector('#email');

btnNext.onclick=(e)=>{
	e.preventDefault();
	pageBox.classList.add('active-pass');
	setTimeout(()=>passwordInput.focus(),500);
loginTitle.innerHTML="Welcome";
document.querySelector('.emailValue').innerHTML=emailValue.value;
}

btnBack.onclick=(e)=>{
	e.preventDefault;
	pageBox.classList.remove('active-pass');
loginTitle.innerHTML="Login";
}

checkBoxPass.onclick=()=>{
checkBoxPass.checked? passwordInput.type="text" : passwordInput.type="password";

}