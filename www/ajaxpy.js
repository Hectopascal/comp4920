function post_courses(type,query){
    var limit = 10;
    if(type==MAIN){
        $.ajax({
            url: '/cgi-bin/index.cgi/courses',
            async: false,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify({"limit":limit,"offset":offset}),
            success: function(response) {
                display_courses(response);
                
                hitbottom=true;
                offset+=limit;
            }, error: function(result,ts,err) {
                console.log([result,ts,err]);
            }
        });
    	   
    } else if (type == SEARCH){
        $.ajax({
            url: '/cgi-bin/index.cgi/search',
            async: false,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({'term':query, 'offset':offset}),
            success: function(response) {
                console.log(response);
				display_courses(response);
				
                last_query = query;
				curpage = SEARCH;
                offset+=limit;
                hitbottom=true;
            }, error: function(result,ts,err) {
                console.log([result,ts,err]);
            }
        }); 
        
    } else if (type ==FILTER){
        $.ajax({
            url: '/cgi-bin/index.cgi/filter',
            async: false,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify({'term':query, 'offset':offset}),
            success: function(response) {
				display_courses(response);
				
                last_query = query;
				curpage = FILTER;
                offset+=limit;
                hitbottom=true;
            }, error: function(result,ts,err) {
                console.log(result);
                console.log([result,ts,err]);
            }
        });
    }

}
document.addEventListener("DOMContentLoaded", main);
function submitReviewListener(){
    $(".submitReview" ).click(function(e) {
        e.preventDefault();
        c_code = $(this).attr("course"); 
        $.ajax({
            url: '/cgi-bin/index.cgi/submit',
            async: false,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: $('#reviewform_'+c_code).serialize(),
            success: function(response) {
                console.log(response);
                console.log("review success");
                $('#nBox_'+c_code).val('');
                $('#rBox_'+c_code).val('');
                $('#rList_'+c_code).val(1);
				$("#review-success").fadeTo(2000, 500).slideUp(500, function(){
                 	$("#review-success").slideUp(500);
                });

            },
            error: function(result,ts,err) {
                console.log([result,ts,err]);
                console.log("review failure");
                $("#success-failure").fadeTo(2000, 500).slideUp(500, function(){
                 	$("#success-failure").slideUp(500);
                });

            }
        });

    });
}

function showReviewListener()
{
	$('.showReviews').click(function(e) {
		e.preventDefault();
        c_code = $(this).attr("course"); 
		console.log('showing reviews for ' + c_code);
		$.ajax({
			url: '/cgi-bin/index.cgi/get_reviews',
			async: false,
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			data: c_code,
			success: function(response) {
				console.log(response);
				display_reviews(c_code, response);

			}, error: function(result,ts,err) {
				console.log([result,ts,err]);
			}
		});
	});
}

$(document).ready(function(){
	$(window).scroll(function() { //if scrolled to bottom, ajax post and buffer more
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && hitbottom){
            hitbottom=false; //flag to prevent event from firing too many times
            console.log(offset);
            
            if(curpage == MAIN){
                post_courses(MAIN);
            } else if(curpage==SEARCH) {
                post_courses(SEARCH,last_query); 
            } else if (curpage == FILTER){
                post_courses(FILTER,last_query);
            }
		}
	});

    $("[data-toggle=popover]").popover({
        html: true, 
        content: function() {
            return $('#popover-content').html();
        }
    });

    $('#review-success').hide();
    $('#review-failure').hide();
    $("#searchButton" ).click(function(e) {
        var search = $('#searchField').val();
        offset=0;
		clear_main();
        e.preventDefault();
        post_courses(SEARCH,search);      
    });

    $(".filter").click(function(e) {
        var filter = $(this).attr('id');
        offset=0;
		clear_main();
        e.preventDefault();
        post_courses(FILTER,filter);
        
    });

	$("#loginButton" ).click(function(e) {
        e.preventDefault();
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
        console.log("username: "+username);
        console.log("password: "+password);
        $.ajax({
            url: '/cgi-bin/index.cgi/login',
            async: false,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({"user":username, "pass":password}),
            success: function(response) {
				console.log("login success");
				//login_success();
            }, error: function(result,ts,err) {
				console.log("login failed");
                console.log([result,ts,err]);
            }
        });
    });

	$("#register-submit").click(function(e) {
        e.preventDefault();

        $("#signupModal .form-feedback").removeClass('invalid');

        var password = $("#signupModal input[name=password]").val()
        var passwordConfirm = $("#signupModal input[name=confirm-password]").val() 
        if (password === passwordConfirm) {
            var data = {
                user: $("#signupModal input[name=username]").val(),
                pass: $("#signupModal input[name=password]").val(),
                name: $("#signupModal input[name=nickname]").val()
            }

            $.ajax({
                url: '/cgi-bin/index.cgi/signup',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(response) {
                    if (response.success) {
                        $("#signupModal").trigger('click');
                    } else {
                        $("#signupModal .form-feedback").html(response.message);
                        $("#signupModal .form-feedback").addClass("invalid");
                    }
                }, error: function(result,st,err) {
                    console.log("login failed");
                    console.log([result,st,err]);
                }
            });
        } else {
            $("#signupModal .form-feedback").html("Passwords do not match!");
            $("#signupModal .form-feedback").addClass("invalid");
        }
    });
});

