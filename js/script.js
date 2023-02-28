
const calculate = document.getElementById('calculate');


function fill () {

    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    
        if (name === '' || height ===  '' || weight === '') {
        result.textContent = 'Preencha todos os campos'
    }

}


calculate.addEventListener('click', fill);


function calculateImc () {

    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== ''){
        
        const valueImc = (weight / (height * height)).toFixed(2)

        let classification = '';

        if (valueImc < 17) {
            classification = 'muito abaixo do peso';
            name = '';
            height = '';
            weight = '';
        }

        else if (valueImc <= 18.49) {
            classification = 'abaixo do peso'
        }

        else if (valueImc < 24.99) {
            classification = 'com o peso normal'
        }

        else if (valueImc < 29.99) {
            classification = 'acima do peso'
        }

        else if (valueImc < 34.99) {
            classification = 'com obesidade tipo1'
        }

        else if (valueImc < 39.99) {
            classification = 'com obesidade tipo2 (SEVERA)'
        }

        else if (valueImc > 40) {
            classification = 'com obesidade tipo3 (MORBIDA)'
        }

        result.textContent = `${name} seu IMC é: ${valueImc} voce esta ${classification}`

        
        
    }


}

calculate.addEventListener('click', calculateImc);

