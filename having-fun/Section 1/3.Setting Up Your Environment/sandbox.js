const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if(pattern.test(username)){
        //feedback good info
        feedback.textContent = 'Username is valid!';
    }
    else{
        //feedback help info
        feedback.textContent = 'Username must containt only letters and should be between 6 and 12 characters';
    }
});

//live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    //console.log(e.target.value, form.username.value);
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    } else {
        form.username.setAttribute('class','error');
    }
});
