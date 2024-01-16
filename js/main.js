console.log('walidacja-formularza-zapisu-do-newslettera');

let newsletterForm = document.getElementById('newsletter-form');

let allAgreeChx = document.getElementById('all-agree');
const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agre1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'wpisz imie i nazwisko!';
        errors.appendChild(liError);
        console.log('wpisz imie i nazwisko');
    }
        if (txtEmail.value.trim() === '') {
            let liError = document.createElement('li');
            liError.innerText = 'wpisz  adres email';
            errors.appendChild(liError);
            console.log('liError');
        }
        if (!txtEmail.value.includes('@')) {
            let liError = document.createElement('li');
            liError.innerText = '  adres email musi zawierać @';
            errors.appendChild(liError);
            // console.log('liError');
        }
        if (!agre1.checked) {
            let liError = document.createElement('li');
            liError.innerText = 'Nie wyraziłes zgody 1';
            errors.appendChild(liError);
            
        }

        if (errors.children.length > 0) {
            event.preventDefault();

        }

        event.preventDefault();
        // console.log('validate()');
    }
    const allAgree = () => {
        let agre1 = document.getElementById('agree-1');
        let agre2 = document.getElementById('agree-2');

        agre1.checked = event.target.checked;
        agre2.checked = event.target.checked;

        agre1.disabled = event.target.checked;
        agre2.disabled = event.target.checked;
        // console.log('event.target.checked');
    }



    newsletterForm.addEventListener('submit', validate);
    allAgreeChx.addEventListener('change', allAgree);