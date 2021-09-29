const form = () => {
    const form = document.querySelector('.form-about-ys');

    const select = function () {
        const selectHeader = document.querySelector('.select__header'),
            selectItem = document.querySelectorAll('.select__item');

        selectHeader.addEventListener('click', selectToggle);

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            selectHeader.style.color = '#303030';
            valideSelect = true;
            stapsForm();
            select.classList.remove('is-active');

        }

    };

    let valideSelect = false;
    select();
    
    const name = form.querySelector('#name'),
            gender = form.querySelector('#gender'),
            country = form.querySelector('#country'),
            city = form.querySelector('#city'),
            dateOfBirth = form.querySelector('#date-of-birth'),
            formAboutYsSecond = form.querySelector('#form-about-ys-second'),
            dlgDocument = form.querySelector('.dlg-document'),
            btnDlgDocument = form.querySelector('.btn-dlg-document'),
            uploadedFile = form.querySelector('.uploaded-file'),
            btnSendForm = form.querySelector('.btn-send-form'),
            complite = form.querySelector('.complite');

    const stapsForm = () => {
        complite.classList.add('invisible');
        formAboutYsSecond.classList.add('invisible');
        dlgDocument.classList.add('invisible');
        btnSendForm.disabled = true;
        if((name.value !== null && name.value !== "") && valideSelect) {
            formAboutYsSecond.classList.remove('invisible');
            if((country.value !== null && country.value !== "") && (city.value !== null && city.value !== "") && (dateOfBirth.value !== null && dateOfBirth.value !== "")) {
                dlgDocument.classList.remove('invisible');
                btnDlgDocument.addEventListener('click', () => {
                    uploadedFile.classList.remove('invisible');
                });
                btnSendForm.disabled = false;
            } 
        }
    }

    form.querySelectorAll('input').forEach(item => item.addEventListener('change', stapsForm));
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(name.value);
        console.log(gender.innerText);
        console.log(country.value);
        console.log(city.value);
        console.log(dateOfBirth.value);
        complite.classList.remove('invisible');
        btnSendForm.disabled = true;
    })
}

form();