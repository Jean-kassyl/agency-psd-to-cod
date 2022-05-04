
let hamburger = document.getElementById("hamburger");
let nav = document.querySelector("nav");






hamburger.addEventListener("click", function(){
		nav.classList.toggle("show");
	

	});
let titles = ["<h1>Your <span>service</span> ready to launch</h1>", "<h1>Our <span>experience</span> right at your hand</h1>", "<h1>Your <span>designs</span> coming to life</h1>"];
let dots = document.querySelectorAll(".hero .dots label");


window.addEventListener("DOMContentLoaded", function(){
	dots[0].style.background = "black";
	
})

dots.forEach( dot => {
	dot.addEventListener("click", function(e){
			let parent = e.currentTarget.parentNode.parentNode;
			let title = parent.querySelector("h1");
			switch(e.currentTarget){
				case dots[1]:
						title.innerHTML = titles[1];
						e.currentTarget.style.background = "black";
						break;
				case dots[2]:
						title.innerHTML = titles[2];
						e.currentTarget.style.background = "black";
						break;
				default:
						title.innerHTML = titles[0];
						e.currentTarget.style.background = "black";
						break;			
			}

			dots.forEach( label => {
				if(e.currentTarget !== label){
					label.style.background = "#dcdcdc";
				}
			})
	})
})