// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// //console.log(modal , overlay, btnCloseModal, btnsOpenModal)

// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   };

// const closeModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// for(let i = 0; i < btnsOpenModal.length; i ++)
//     btnsOpenModal[i].addEventListener('click' , function(){
//         //console.log("button clicked");
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });

//     btnCloseModal.addEventListener('click', function(){
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
//     });





// 'use strict';

// const modal = document.querySelector('.modal')
// const closeModal = document.querySelector('.close-modal');
// const overlay = document.querySelector('.overlay');
// const openModal = document.querySelectorAll('.show-modal');
// //alert('ok');

// const btnOpenModal = function(){
//     //console.log('clicked')
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const btnCloseModal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for(let i = 0; i<openModal.length; i++) {
//     //console.log(openModal[i].textContent);
//    openModal[i].addEventListener('click', btnOpenModal);

    
//     closeModal.addEventListener('click', btnCloseModal);
//     overlay.addEventListener('click', btnCloseModal);
// }

// document.addEventListener('keydown', function(e){
//     //alert('You pressed a key');
//     console.log(e.key);
// })