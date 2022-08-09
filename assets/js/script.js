const calculateTemp = () => {
    const numberTemp = document.getElementById('p2').value;
    // console.log(numTemp)
    const tempSelected = document.getElementById('p3');
    // console.log(tempSelected)
    const valueTemp = p3.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel* 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel = (Fah) =>{
        let celsius = Math.round((Fah -32 )* 5/9);
        return celsius ;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp)
        document.getElementById('resultContainer').innerHTML= ` =  ${result}  ° Fahrenheit `;
    }
    else{
        result = fahToCel(numberTemp)
        document.getElementById('resultContainer').innerHTML= ` =  ${result}  ° Celcius `;
    }

}