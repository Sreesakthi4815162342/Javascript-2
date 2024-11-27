const Signupform=document.getElementById("signupform")
Signupform.addEventListener("submit",(event)=>{
event.preventDefault()

const username=Signupform.username.value;
const email=Signupform.email.value;
const password=Signupform.password.value;
const confirmPassword=Signupform.confirmPassword.value;

const emailRegex="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
const passwordRegex='^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$'


const isvalid=true;
if(username.trim().length<3)
{
    document.getElementById("usernameError").innerText="Username should contain 3 letters"
    isvalid=false;
}
if(!email.match(emailRegex))
{
    document.getElementById("emailError").innerText="Enter a valid emial address"
    isvalid=false;
}
if(!password.match(passwordRegex))
    {
        document.getElementById("passwordError").innerText="Password must have at least 6 characters, one uppercase letter, and one special character."
        isvalid=false;
    }
    if(confirmPassword!=password)
        {
            document.getElementById("confirmpasswordError").innerText="Password does not match"
            isvalid=false;
        }

        if(isvalid)
        {
            Signupform.submit()
            Signupform.reset()
        }
})

let showStatus=false;
const showHideButton=document.getElementById("icon")
showHideButton.addEventListener("click",()=>{
    showStatus=!showStatus
    document.getElementById("password").type=showStatus ?"text":"password"
    showHideButton.innerHTML=showStatus? '<i class="bi bi-eye-slash"></i>':'<i class="bi bi-eye"></i>'
})

let confirmPasswordshowStatus=false;
const showHideButtonConfirmpassword=document.getElementById("icon-confirmpassword")
showHideButtonConfirmpassword.addEventListener("click",()=>{
    confirmPasswordshowStatus=!confirmPasswordshowStatus
    document.getElementById("confirmPassword").type=confirmPasswordshowStatus ?"text":"password"
    showHideButtonConfirmpassword.innerHTML=confirmPasswordshowStatus? '<i class="bi bi-eye-slash"></i>':'<i class="bi bi-eye"></i>'
})