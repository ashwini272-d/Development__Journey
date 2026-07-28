/* ==========================
   STICKY HEADER SHADOW
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
        header.style.background = "#ffffff";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================
   FADE-IN ANIMATION
========================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.querySelector("input[type='text']").value.trim();

    const email=document.querySelector("input[type='email']").value.trim();

    const phone=document.querySelector("input[type='tel']").value.trim();

    if(name==="" || email==="" || phone===""){

        alert("Please fill all required fields.");

        return;

    }

    alert("Thank you! Your appointment request has been submitted.");

    form.reset();

});


/* ==========================
   GALLERY IMAGE POPUP
========================== */

const images=document.querySelectorAll(".gallery-item img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const popup=document.createElement("div");

        popup.className="popup";

        popup.innerHTML=`
            <div class="popup-content">
                <img src="${img.src}">
            </div>
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click",()=>{

            popup.remove();

        });

    });

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.className="top-btn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        btn.style.display="block";

    }

    else{

        btn.style.display="none";

    }

});

btn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};