var a=document.querySelectorAll("input-group")
var b=document.querySelectorAll("innput-field")

var icon=document.getElementById("icon")
var pass=document.getElementById("pass")
var but=document.getElementById("signupbt")
  icon.addEventListener("click",()=>{
	           
		   if(pass.type==="password"){
			   pass.type="text"
			   icon.setAttribute("class","fa fa-eye")
		   }
		   else{
			   pass.type="password"
			    icon.setAttribute("class","fa fa-eye-slash")
			   
		   }		  
	   })
	   var form=document.querySelector("form")
	  var button=document.getElementById("signinbt")
	     button.addEventListener("click",()=>{
			  form.classList.toggle("form")
		 })
		   var inpu=document.getElementById("email")
		   var but1=document.getElementById("signinbt")
		       but1.addEventListener("click",()=>{
				     if(inpu==="toUpperCase()"){
						 inpu==="toLowerCase()"
					 }
					 console.log("poornimashanmugaraj")
			   })
	  