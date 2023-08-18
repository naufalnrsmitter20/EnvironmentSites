    // Tambahkan kode JavaScript kalian di file ini 
    //soal 6 
    function handleGetFormData() { 
        const name = document.getElementById('name').value; 
        const email = document.getElementById('email').value; 
        const city = document.getElementById('city').value; 
        const zipCode = document.getElementById('zip-code').value; 
        const status = document.getElementById('status').checked; 
    const formData = { 
        name, 
        email, 
        city, 
        zipCode, 
        status 
        } 
    return formData; 
    } 
    function isNumber(input) { 
        const regex = /^[0-9]+$/; 
    if (regex.test(input)) { 
        return true; 
        } 
        return false; 
    } 
    function checkboxIsChecked() { 
        const checkbox = document.getElementById('status'); 
    if (checkbox.checked) { 
        return true; 
        } 
        return false; 
    } 
    function validateFormData(formData) { 
        if (formData && isNumber(formData.zipCode) && checkboxIsChecked()) { 
        return true; 
        } 
        return false; 
    } 
    function submit() {  
        if (validateFormData(handleGetFormData())) warning.innerText = "";  
        else warning.innerText = "Periksa form anda sekali lagi";  
    }