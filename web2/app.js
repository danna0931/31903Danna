function generarQR(){
    
     let input1= document.getElementById('input1');
     let input2= document.getElementById('input2');
     let input3= document.getElementById('input3');
     let input4= document.getElementById('input4');

     //let textoConcatenado= input1 + "," + input2 + "," + input3 + ","+ input4 + ",";
     let textoConcatenado= input1 + "," + input2 + "," + input3 + ","+ input4 + ",";
        console.log(textoConcatenado);

        if(textoConcatenado===",,,"){
            alert("Los datos estan vacios")

        }

        var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

        let qrImg=document.createElement('img');
        qrImg.src=qrCodeURL;
        qrImg.alt="CodigoQR";

        qrImg.classList.add('qr-code');

        document.getElementById('qr-code').appendChild(qrImg);
    
}