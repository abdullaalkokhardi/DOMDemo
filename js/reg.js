//console.log("hello from reg");

//const element= document.getElementById("headerid");

//element[0].innerHTML="abdulla"
// element: hold specific element from html page

//document: it is a dom tree for your page 

// getElementById: will choose the element using its id
// tagname css class , id, selectors (.form input),  etc

//element.innerHTML="Register page";
// <start>inner html</end>


//let h1element=document.getElementsByTagName("h1");

 //h1element[0].innerHTML="hello h1";
 //h1element[1].innerHTML='abc'

 //h1element[2].innerHTML='new register'
 //h1element[3].innerHTML='something'
var data=[];
 const onFormSubmit=()=>{

    let fullName= document.getElementById("fullName").value; 
    //console.log("full Name:", fullName);
    let email=document.getElementById("email").value;
    //console.log("email:", email);
    let salary=document.getElementById("salary").value;
    //console.log("salary:", salary);
    let city=document.getElementById("city").value;
    //console.log("city:", city);
    if(validate()){
        console.log("form valdation succeeded")
        let formData= readFormData();
        data.push(formData);
        console.log(formData);
        resetForm();

    } else{
        console.log("failed validation")
    }
     

    console.log("form submitted");
 };

 // validation of data

 const validate=()=>{
    let isValid=true;
    if(document.getElementById("fullName").value ==""){
        isValid=false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else{
        isValid=true
        if(!document.getElementById("fullNameValidationError").classList.contains("hide")){
            document.getElementById("fullNameValidationError").classList.add("hide")
        }
    }


    if(document.getElementById("email").value ==""){
        isValid=false;
        document.getElementById("emailValidationError").classList.remove("hide");
    }else{
        isValid=true
        if(!document.getElementById("emailValidationError").classList.contains("hide")){
            document.getElementById("emailValidationError").classList.add("hide")
        }
    }


    if(document.getElementById("salary").value ==""){
        isValid=false;
        document.getElementById("salaryValidationError").classList.remove("hide");
    }else{
        isValid=true
        if(!document.getElementById("salaryValidationError").classList.contains("hide")){
            document.getElementById("salaryValidationError").classList.add("hide")
        }
    }


    if(document.getElementById("city").value ==""){
        isValid=false;
        document.getElementById("cityValidationError").classList.remove("hide");
    }else{
        isValid=true
        if(!document.getElementById("cityValidationError").classList.contains("hide")){
            document.getElementById("cityValidationError").classList.add("hide")
        }
    }

    return isValid;


 };

 const readFormData=()=>{
    // get data from input fields
    var formData = {};
    formData.fullName=document.getElementById("fullName").value;
    formData.email=document.getElementById("email").value;
    formData.salary=document.getElementById("salary").value;
    formData.city=document.getElementById("city").value;
    return formData;

 };

 function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("email").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
 };


 
