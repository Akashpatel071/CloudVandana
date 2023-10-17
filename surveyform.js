function validate()
{
    inputValue1=document.getElementById('fname').value;
    inputValue2=document.getElementById('lname').value;
    inputValue3=document.getElementById('dob').value;
    inputValue4=document.getElementById('country').value;
    inputValue5=document.getElementById('mcheck').value;
    inputValue6=document.getElementById('fcheck').value;
    inputValue7=document.getElementById('pro').value;
    inputValue8=document.getElementById('email').value;
    inputValue9=document.getElementById('phnnum').value;
    res1=document.getElementById('res1');
    res2=document.getElementById('res2');
    res3=document.getElementById('res3');
    res4=document.getElementById('res4');
    res5=document.getElementById('res5');
    res6=document.getElementById('res6');
    res7=document.getElementById('res7');
    res8=document.getElementById('res8');

    if(inputValue1=="")
    {
        res1.innerHTML='please enter First name';
        res1.style.color='red';
    }
    if(inputValue2=="")
    {
        res2.innerHTML='please enter Last name';
        res2.style.color='red';

    }
    if(inputValue3=="")
    {
        res3.innerHTML='please Enter Date of Birth';
        res3.style.color='red';
    }
    if(inputValue4=="")
    {
        res4.innerHTML='Please Select Your country';
        res4.style.color='red';
    }
    if(inputValue5=="" && inputValue6=="")
    {
        res5.innerHTML='please select your gender ';
        res5.style.color='red';
    }
    if(inputValue7=="")
    {
        res6.innerHTML='please enter your profession';
        res6.style.color='red';
    }
    if(inputValue8=="")
    {
        res7.innerHtml='please enter your email ';
        res7.style.color='red';
    }
    if(inputValue9=="")
    {
        res8.innerHTML='please enter your phone num';
        res8.style.color='red';
    }
}
function reset()
{
    inputValue1=document.getElementById('fname').value;
    inputValue2=document.getElementById('lname').value;
    inputValue3=document.getElementById('dob').value;
    inputValue4=document.getElementById('country').value;
    inputValue5=document.getElementById('mcheck').value;
    inputValue6=document.getElementById('fcheck').value;
    inputValue7=document.getElementById('pro').value;
    inputValue8=document.getElementById('email').value;
    inputValue9=document.getElementById('phnnum').value;
    
    inputValue1="";
    inputValue2="";
    inputValue3="";
    inputValue4="";
    inputValue5="";
    inputValue6="";
    inputValue7="";
    inputValue8="";
    inputValue9="";

}