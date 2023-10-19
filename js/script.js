

//------------------burger--------------------//
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.page__header-nav').toggleClass('active');
		$('body').toggleClass('lock');

	});
});

//-----------Tabs Product-----------//

let tabNavItem = document.querySelectorAll('.tab-nav__item');
let tabContent = document.querySelectorAll('.tab__content');

tabNavItem.forEach(function (elem) {
	elem.addEventListener('click', activeTab);
})
function activeTab() {
	tabNavItem.forEach(function (elem) {
		elem.classList.remove('active');
	})
	this.classList.add('active');
	let tabName = this.getAttribute('data-tab');

	activeTabContent(tabName);

}

function activeTabContent(tabName) {
	tabContent.forEach(function (item) {
		if (item.classList.contains(tabName)) {
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	})
}


//------------------slider---------------//

window.addEventListener('load', function () {
	baguetteBox.run('.gallery');
});
//---------Hiden Blocks----------//

let TexLinks = document.querySelectorAll(".page__help-bth");

for (let index = 0; index < TexLinks.length; index++) {
	const TexLink = TexLinks[index];
	TexLink.addEventListener("click", function(e) {
		TexLink.classList.toggle("active");
		
		
	})
	
	
}

//------------TeamWork Picture hover INFO -------------//
 

let pageTeamworkPictures = document.querySelectorAll('.page__teamwork-picture');
for (let index = 0; index < pageTeamworkPictures.length; index++) {
	const pageTeamworkPicture = pageTeamworkPictures[index];
	pageTeamworkPicture.addEventListener("mouseenter", function (e) {
		pageTeamworkPicture.classList.add('active');
		console.log(pageTeamworkPicture);
	});
	pageTeamworkPicture.addEventListener("mouseleave", function (e) {
		pageTeamworkPicture.classList.remove('active');
	});
}
