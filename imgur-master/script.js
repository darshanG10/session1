function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
	
}

function onSignIn(googleUser){
	window.location="/imgur/Homepage.html";

}


function signOut(){

	var auth2=gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){
  
     alert("you have been successfully signed Out");

     $(".g-signin2").css("display","block");	
     $(".data").css("display","none");
	});
}





function myFunction(){
	var html ="";
var x = document.getElementById('myinput').value;
document.getElementById('demo').innerHTML=x;
const Http = new XMLHttpRequest();
const Http2 = new XMLHttpRequest();
const url="https://api.imgur.com/3/image/"+x;
Http.open("GET", url);
Http.setRequestHeader('Authorization',"Client-ID 3b0e4e6cc62eeb4")
Http.send();
Http.onreadystatechange=(e)=>{
 console.log(Http.response)
var sumit;
sumit = JSON.parse(Http.response);
 console.log('JSON SUMIT', sumit.data.link);
html = '<img src="'+sumit.data.link+'"/>';
$('#image').html(html);

// image QtJ914p

}

var url2= "https://api.imgur.com/3/image/"+x+"/comments";

		Http2.open("GET",url2);
		Http2.setRequestHeader('Authorization', "client-ID 3b0e4e6cc62eeb4")
		Http2.send();
		Http2.onreadystatechange=(e)=>{
			if(e.currentTarget.readyState == 4){
		var comments = JSON.parse(Http2.response);
		document.getElementById('span1').innerHTML = "<h1>Comments</h1>";
				var comment = comments.data;
				var html2 = "";
				for(let i=0; i<=comment.length-1; i++){
					html += "<li><p>"+comment[i].comment+"</p></li>";
				}
				$('#image_comments').html(html);
		
 }
}


}

function postcomments(){
	var postcomment = document.getElementById('mydata').value;
	var id = document.getElementById('myinput').value;
	var form = {};
form["image_id"] = id;
form["comment"] = postcomment;

	$.ajax({
  type: "POST",
  url: "https://api.imgur.com/3/comment",
  data: form,
  headers: {
        'Authorization':'Bearer d8151777b32bb2cb4d1ae18d2f0f0a0342a35a0c',
    },
  success: function(res,data){
  	console.log("res", res)
  	console.log("data", data)
  },
  error: function(res,data){
  	console.log("res", res)      
  	console.log("data", data)
  },
  dataType: "multipart/form-data",
});
		
}

