window.onload = () =>{
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip(){
    var amount = document.querySelector('#amount').value;
    var persons = document.querySelector('#persons').value;
    var service = document.querySelector('#services').value;
    
    console.log(service);
    if(amount === '' && service === 'Select'){
        alert("Please enter valid values");
        return;
    }

    if(persons === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }

    var tipshare = (amount * service) / persons;
    console.log(tipshare);
    tipshare = Math.round(tipshare * 100)/ 100;
    tipshare = tipshare.toFixed(2);
    console.log(tipshare);

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#tipshare').innerHTML = tipshare;
}