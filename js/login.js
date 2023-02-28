var data=[];
 const onFormSubmit=()=>{

    let userame= document.getElementById("username").value; 
    console.log("user Name:", userame);
    let password=document.getElementById("password").value;
    console.log("password:", password);
    if(validate() && loginValidate()){
        console.log("form validation succeeded")
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
    if(document.getElementById("username").value ==""){
        isValid=false;
        document.getElementById("usernameValidationError").classList.remove("hide");
    } else{
        isValid=true
        if(!document.getElementById("usernameValidationError").classList.contains("hide")){
            document.getElementById("usernameValidationError").classList.add("hide")
        }
    }




    if(document.getElementById("password").value ==""){
        isValid=false;
        document.getElementById("passwordValidationError").classList.remove("hide");
    }else{
        isValid=true
        if(!document.getElementById("passwordValidationError").classList.contains("hide")){
            document.getElementById("passwordValidationError").classList.add("hide")
        }
    }

    return isValid;


 };

 const readFormData=()=>{
    // get data from input fields
    var formData = {};
    formData.username=document.getElementById("username").value;
    formData.password=document.getElementById("password").value;
    return formData;

 };

 function resetForm(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
 };


 const loginValidate=()=>{
    if (document.getElementById("username").value ==="admin" && document.getElementById("password").value ==="admin"){
        console.log("valid");
        return true;
    } else(
        document.getElementById("usernameWrong").classList.remove("hide"),
        document.getElementById("passwordWrong").classList.remove("hide")
        ) 
 }