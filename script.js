$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | ayushi";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }
// document.addEventListener('contextmenu', event => event.preventDefault());  
// document.addEventListener('keydown', event => {  
//     if (event.ctrlKey && (event.key === 'U' || event.key === 'I' || event.key === 'J' || event.key === 'S')) {  
//         event.preventDefault();  
//     }  
// });

  function downloadResume() {
    setTimeout(() => {
    //   window.location.href = "https://drive.google.com/uc?export=download&id=1titoqwquA1kEVuZLGMjyZZOIf6IAsCSv";
    window.location.href = "https://raw.githubusercontent.com/Skiee9/Ayushi_Resume/main/Ayushi-FrontendDeveloper(React)-9Ss0.pdf"
}); 
  }



const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
// srtop.reveal('.home .twitter', { interval: 1000 });
// srtop.reveal('.home .telegram', { interval: 600 });
// srtop.reveal('.home .instagram', { interval: 600 });
// srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
// srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
// srtop.reveal('.experience .timeline', { delay: 400 });
// srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// project
  // Example JSON data
  const projects = [
    {
      name: "Weather App",
      desc: "A web app that provides real-time weather updates using OpenWeather API.",
      repo: "https://github.com/Skiee9/weatherapp",
      tech: "Tech Stack : Html, CSS, JS",
      liveDemo: "https://skiee9.github.io/weatherapp/",
      image: "mo.png"
    },
    {
      name: "To-Do App",
      desc: "A simple to-do list app to manage daily tasks with local storage support.",
      tech: "Tech Stack : Html, CSS, JS",
      repo: "https://github.com/Skiee9/todoapp",
      liveDemo: "https://skiee9.github.io/todoapp/",
      image:"todopic.png"
    //   image :"https://th.bing.com/th/id/OIP.Tai24BuXPmuSiOsItwzedgHaFj?w=258&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: "Movie Site",
      desc: "A modern and responsive movie web browsing app that allows users to search for movies.Built with react and API for the intergration and real time loading",
      tech: "Tech Stack : Html, CSS, JS, React",
      repo: "https://github.com/Skiee9/Sample-prooject",
      liveDemo: "https://skiee9.github.io/Sample-prooject/",
      image : "mv.png" },
      {
        name: "Password Generator",
        desc: "The Password Generator is a web application designed to help users create strong passwords. It allows users to customize the length and complexity of the passwords generated.",
        tech: "Tech Stack : Html, CSS, JS",
        repo: "https://github.com/Skiee9/PasswordGenerator",
        liveDemo: "https://skiee9.github.io/PasswordGenerator/",
        image: "pg.png"
      }
  ];

  // Get the specific .box-container within the #work section
  const container = document.querySelector("#work .box-container");

  // Generate and add project cards dynamically
  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
  
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.name} Demo" class="project-image">
      <h3>${project.name}</h3>
      <p class="project-desc">${project.desc}</p>
      <p class="project-tech">${project.tech}</p>
      <br>
     <p>
  <a href="${project.repo}" target="_blank">
    <i class="fab fa-github fa-2x"></i>
  </a> |  
  <a href="${project.liveDemo}" target="_blank">
    <i class="fas fa-external-link-alt fa-2x"></i>
  </a>
</p>



    `;
  
    container.appendChild(projectCard);
  });
