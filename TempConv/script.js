const TempCal = () => {
    const data = document.getElementById('temp').value;
    // console.log(data);
    const tempselected = document.getElementById('temptype');
    const unit = temptype.options[tempselected.selectedIndex].value;
    // console.log(unit);
    const celtofah = (celcius) => {
        let fahrenheit  = Math.round((celcius * 9/5) + 32);
        return fahrenheit;
    }
    const fahtocel = (fahrenheit)=> {
        let celcius = Math.round((fahrenheit - 32) * 5/9);
        return celcius;
    }
    let result;
    if(unit == 'cel'){
        result = celtofah(data);
        document.getElementById('resultbox').innerHTML = `${result}°Fahrenheit`;
    }
    else{
        result = fahtocel(data);
        document.getElementById('resultbox').innerHTML = `${result}°Celcius`;
    }
}