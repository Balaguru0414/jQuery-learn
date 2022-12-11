// ----- animation --------

// $("button").on("click",function(){
// 		$("h1").animate({"margin":"5%"}).fadeOut().show().hide().fadeIn().slideUp().slideDown();
// 		});

// $("button").on("click",function(){
// 		$("h1").hide();
// 		});

// $("button").on("click",function(){
// 		$("h1").show();
// 		});

// $("button").on("click",function(){
// 		$("h1").toggle();
// 		});

// $("button").on("click",function(){
// 		$("h1").fadeOut({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").fadeIn({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").fadeoToggle({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").slideUp({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").slideDown({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").slideToggle({"margin":"5%"});
// 		});

// $("button").on("click",function(){
// 		$("h1").animate({"margin":"5%"});
// 		});




// -------    Add , remove Element   --------

//  ----   add  ----

// $("h1").before("<h2>Hello</h2>");

// $("h1").after("<h2>Hello</h2>");

// $("h1").prepend("<button>Hello</button>");

// $("h1").append("<button>Hello</button>");

//  ----   remove   -----

// $("h1").remove();


// -------    mouse over in jQuery    --------

// $("h1").on("mouseover",function () {
// 	$("h1").addClass("big-head");
// });


// --------addeventlistener -- keypress chage text     ------

// $(document).keypress(function (event) {
// 	$("h1").text(event.key);
// });


//-------- jQuery -- addeventlistener    --------

// $("button").click(function () {
//     $("h1").text("I am your Best Friend");
// 		$("h1").addClass("big-head");
// });

//-------- DOM -- addeventlistener -- with -- if else    --------



// 	for (let i = 0; i < 6; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function () {if (i%2===0) {
//         document.querySelector("h1").classList.add("big-head");document.querySelector("h1").innerHTML="Surya";
//     } else {
//       document.querySelector("h1").classList.add("big-head");document.querySelector("h1").innerHTML="Suppi";  
//     }
        
//     });
    
// }