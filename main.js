document.addEventListener('DOMContentLoaded', function () {
	const faqsContents = document.querySelectorAll('.faqs-content');
	const faqsBodies = document.querySelectorAll('.faqs-body');

	// Ẩn tất cả nội dung của các phần tử faqs-body ban đầu
	faqsBodies.forEach(function (body) {
		body.style.display = 'none';
	});

	// Xử lý sự kiện click cho từng phần tử faqs-content
	faqsContents.forEach(function (content, index) {
		content.addEventListener('click', function () {
			// Kiểm tra trạng thái hiển thị của faqs-body tương ứng
			const isBodyVisible = faqsBodies[index].style.display === 'block';

			// Ẩn tất cả các phần tử faqs-body
			faqsBodies.forEach(function (body, bodyIndex) {
				if (bodyIndex === index) {
					// Nếu đúng là phần tử tương ứng, hiển thị/ẩn nội dung
					body.style.display = isBodyVisible ? 'none' : 'block';
				} else {
					// Nếu không phải là phần tử tương ứng, ẩn nội dung
					body.style.display = 'none';
				}
			});

			// Hiển thị faqs-body tương ứng nếu chưa hiển thị, và ngược lại
			if (!isBodyVisible) {
				faqsBodies[index].style.display = 'block';
			}
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const menuItems = document.querySelectorAll('.main-menu-item');
	const clickCheckbox = document.getElementById('click');

	menuItems.forEach(function (item) {
		item.addEventListener('click', function () {
			clickCheckbox.checked = false;
		});
	});
});

// hidden.forEach(function(item) {
//     console.log(item);
//     item.onclick = function(){
//         const element = document.getElementsByClassName("faqs-body");
//         element.forEach(item2=>{
//             item2.classList.toggle("active");
//         })
// }
// })

//magic scoll
// document.getElementById
// document.getElementsByClassName
// document.querySelector
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else{
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".hidden")
// hiddenElements.forEach((el)=>observer.observe(el));
