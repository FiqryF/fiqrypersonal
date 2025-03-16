// Navigasi Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {  
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden"); 
        });
    } else {
        console.error("Elemen menu-toggle atau mobile-menu tidak ditemukan!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#A31D1D"; 
            item.style.color = "white"; 
            item.style.transform = "scale(1.05)"; 
            item.style.transition = "all 0.3s ease"; 
            item.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)"; 
        });

        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "transparent"; 
            item.style.color = "black"; 
            item.style.transform = "scale(1)"; 
            item.style.boxShadow = "none"; 
        });

        item.addEventListener("click", () => {
            item.style.backgroundColor = "#650F0F"; 
            item.style.transition = "all 0.2s ease";
            setTimeout(() => {
                item.style.backgroundColor = "#A31D1D"; 
            }, 300); 
        });
    });
});

// Navigasi Desktop

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".fade");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".more-info");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Informasi lebih lanjut akan segera tersedia!");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const header = document.querySelector("header");

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); 
        mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".latest-project-item");

    const observerOptions = {
        root: null,
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in"); 
            }
        });
    }, observerOptions);

    projectItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".latest-project-item");

    const observerOptions = {
        root: null, 
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-animation"); 
            } else {
                entry.target.classList.remove("active-animation"); 
            }
        });
    }, observerOptions);

    projectItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        setInterval(() => {
            bar.style.background = "linear-gradient(90deg, darkred 0%, red 50%, darkred 100%)";
            bar.style.backgroundSize = "200% 100%";
            bar.style.animation = "shine 2s infinite linear";
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("mainButton");
    const options = document.getElementById("options");
    
    let isOpen = false;

    mainButton.style.transition = "transform 0.3s ease";

    mainButton.addEventListener("click", function () {
        isOpen = !isOpen;
        
        if (isOpen) {
            mainButton.classList.add("open");
            options.classList.add("show");
            mainButton.innerHTML = "+"; 
            mainButton.style.transform = "rotate(45deg)"; 
        } else {
            mainButton.classList.remove("open");
            options.classList.remove("show");
            mainButton.innerHTML = "+"; 
            mainButton.style.transform = "rotate(0deg)"; 
        }
    });

    options.style.transition = "opacity 0.3s ease, transform 0.3s ease";
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutButton = document.querySelector(".about");

    aboutButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        showPopup();
    });

    function showPopup() {
        const popupOverlay = document.getElementById("popupOverlay");
        popupOverlay.classList.add("show");

        const closeButton = popupOverlay.querySelector(".close-btn");
        closeButton.addEventListener("click", function () {
            popupOverlay.classList.remove("show");
        });

        popupOverlay.addEventListener("click", function (event) {
            if (event.target === popupOverlay) {
                popupOverlay.classList.remove("show");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; 
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { 
            scrollToTopBtn.classList.add("show");
            scrollToTopBtn.classList.remove("hide"); 
        } else {
            if (scrollToTopBtn.classList.contains("show")) { 
                scrollToTopBtn.classList.add("hide"); 
                setTimeout(() => {
                    scrollToTopBtn.classList.remove("show"); 
                }, 400); 
            }
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
