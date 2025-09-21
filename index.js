const conversionFactor = 0.01;

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY',
}

function getClassificationDetail(classification) {
    switch(classification) {
        case IMC_STATUS_DICT.UNDERWEIGHT:
            return 'Abaixo do peso.';
        case IMC_STATUS_DICT.REGULAR:
            return 'Peso normal.';
        case IMC_STATUS_DICT.OVERWEIGHT:
            return 'Acima do peso.';
        case IMC_STATUS_DICT.OBESITY:
            return 'Obesidade.';
        default:
            return 'Falha ao encontrar a descrição do status.';
    }
}

function classificateIMC(imc) {
    if(imc < 18.5) {
        return IMC_STATUS_DICT.UNDERWEIGHT;
    }
    else if(imc >= 18.5 && imc <25) {
        return IMC_STATUS_DICT.REGULAR;
    }
    else if(imc >= 25 && imc <30) {
        return IMC_STATUS_DICT.OVERWEIGHT;
    }
    else {
        return IMC_STATUS_DICT.OBESITY;
    }
}

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;

    height *= conversionFactor;

    let imc = weight / (height * height);

    const classification = classificateIMC(imc);
    const classificationDetail = getClassificationDetail(classification);
    const result = "O resultado do IMC é de " + imc;

    return {
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
    }
}

const person = {
    name: 'Fabio',
    weight: 70,
    height: 170,
}

const person2 = {
    name: 'Laryssa',
    weight: 60,
    height: 160,
}

console.log(calculateIMC(person));
console.log(calculateIMC(person2));