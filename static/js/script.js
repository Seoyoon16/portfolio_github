// modal
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// modal content
const modalData = {
    1: {
        title: "Developed a Poke Ordering Website",
        content: `
            <img src="static/images/poke1.webp" alt="Poke Ordering"><br />
            <img src="static/images/poke2.webp" alt="Poke Ordering"><br />
            <p>This project involved developing an online poke ordering system with user authentication, real-time order tracking, and an intuitive UI.</p>
            <a href="https://github.com/juniahn-dev/react-final-project">Source Code</a>
        `,
    },
    2: {
        title: "Created a Christmas Play Website",
        content: `
            <img src="static/images/xmas1.webp" alt="Christmas"><br />
            <img src="static/images/xmas2.webp" alt="Christmas"><br />
            <img src="static/images/xmas3.webp" alt="Christmas"><br />
            <p>A dedicated website for showcasing a Christmas play! Listen to beautiful Christmas music to earn points, and then use them to decorate your own Christmas tree!</p>
            <a href="https://github.com/jin2nim/christmasTree">Source Code - Front</a>
        `,
    },
    3: {
        title: "Built a Prototype for a Subway Guide Robot",
        content: `
            <video controls>
                <source src="static/images/demo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <a href="https://drive.google.com/file/d/1QpzGSl5_P_SW49CBJUEM-pGs2CR5a0WA/view?usp=drive_link">Able to check the video here</a>
            <p>This robot prototype assists visually impaired commuters in navigating subway systems, providing real-time directions and updates using ROS technology.</p>
        `,
    },
    4: {
        title: "Conducted an AGV Dual-Line Tracing Project",
        content: `
            <video controls>
                <source src="static/images/line_tracing.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p>The AGV(Automated Guided Vehicle) follows two yellow lines along its designated path and stops when it detects a red line.</p>
        `,
    },
    5: {
        title: "Performed palletizing with a robotic arm",
        content: `
            <video controls>
                <source src="static/images/palletizing.mov" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <a href="https://drive.google.com/file/d/1QpzGSl5_P_SW49CBJUEM-pGs2CR5a0WA/view?usp=drive_link">Able to check the video here</a>
            <p>The robotic arm stacks blocks based on their colors, and it discards blocks of a specific color - In this case, it's red.</p>
        `,
    },
    6: {
        title: "Developed a Simple Voice Command Robot Project",
        content: `
            <video controls>
                <source src="static/images/robot_voice.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p>The robot performs tasks based on voice commands. In this video, it follows the commands in order: 'Greet,' 'Shake hands,' 'Dance,' and 'Turn off the lights</p>
        `,
    },

};

// each modal
const grapes = document.querySelectorAll(".grape");

grapes.forEach(grape => {
    grape.addEventListener("click", function () {
        const id = grape.getAttribute("data-id");
        const data = modalData[id];

        if (data) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;

            modal.style.display = "flex";
        }
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Splash Screen
window.addEventListener('load', () => {
    const splash = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');

    setTimeout(() => {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
    }, 4000);
});

// leaves
const header = document.querySelector('.background');
for (let i = 0; i < 10; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${Math.random() * 3 + 5}s`;
    leaf.style.animationDelay = `${Math.random()}s`;
    header.appendChild(leaf);
}

// Intersection Observer - tree
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // One time
        }
    });
}, {
    threshold: 0.3 // 몇 퍼센트가 보이면 실행될 지
});

document.querySelectorAll('.fade-in-element').forEach(element => {
    observer.observe(element);
});
