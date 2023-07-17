'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);





document.addEventListener('DOMContentLoaded', function() {
  var facilities = [
    { name: 'Emergency Room', description: '24/7 emergency care', color: '#ff7f50', image: './images/emergency.png' },
    { name: 'Operation Rooms', description: 'State-of-the-art surgical facilities', color: '#87cefa', image: './images/operations.png' },
    { name: 'Intensive Care Unit', description: 'Specialized care for critical patients', color: '#ff69b4', image: './images/icu.png' },
    { name: 'Laboratory', description: 'Diagnostic testing and analysis', color: '#90ee90', image: './images/lab.png' },
    { name: 'Radiology ', description: 'X-rays, CT-scan, MRI', color: '#ffd700', image: './images/radiology.png' },
    { name: 'Pharmacy', description: 'Prescription medications', color: '#00bfff', image: './images/pharmacy.png' },
    { name: 'Maternity Ward', description: 'Prenatal and postnatal care', color: '#ff6347', image: './images/maternity.png' },
    { name: 'Pediatric Unit', description: 'Specialized care for children', color: '#9370db', image: './images/Pediatric.png' },
    { name: 'Physical Therapy', description: 'Rehabilitation services', color: '#3cb371', image: './images/Physical_Therapy.png' },
    { name: 'Cafeteria', description: 'Food and beverage services', color: '#ff8c00', image: './images/Cafeteria.png' }
  ];
  
  var facilityList = document.getElementById('facility-list');
  
  facilities.forEach(function(facility) {
    var facilityDiv = document.createElement('div');
    facilityDiv.classList.add('facility');
    facilityDiv.style.backgroundColor = facility.color;
    
    var facilityImg = document.createElement('img');
    facilityImg.src = facility.image;
    facilityImg.alt = facility.name;
    
    var facilityName = document.createElement('h3');
    facilityName.textContent = facility.name;
    
    var facilityDesc = document.createElement('p');
    facilityDesc.textContent = facility.description;
    
    facilityDiv.appendChild(facilityImg);
    facilityDiv.appendChild(facilityName);
    facilityDiv.appendChild(facilityDesc);
    
    facilityList.appendChild(facilityDiv);
  });
});


document.getElementById("appointment-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  alert("Appointment Details:\n\nName: " + name + "\nEmail: " + email + "\nDate: " + date + "\nTime: " + time);

  document.getElementById("appointment-form").reset();
});
