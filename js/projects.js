loadSkills();
loadProjects();
loadRoadmap();


// =========================
// COMPETÊNCIAS
// =========================

async function loadSkills(){

    const response =
    await fetch(
        "data/skills.json"
    );

    const skills =
    await response.json();

    const container =
    document.getElementById(
        "skillsContainer"
    );

    container.innerHTML = "";

    skills.forEach(skill => {

        container.innerHTML += `

        <div class="skill-card">

            ${skill}

        </div>

        `;

    });

}


// =========================
// PROJETOS
// =========================

async function loadProjects(){

    const response =
    await fetch(
        "data/projects.json"
    );

    const projects =
    await response.json();

    const container =
    document.getElementById(
        "projectsContainer"
    );

    container.innerHTML = "";

    projects.forEach(project => {

        container.innerHTML += `

        <div class="project-card">

            <img
            src="${project.image}"
            alt="${project.name}">

            <h3>

                ${project.name}

            </h3>

            <p>

                ${project.description}

            </p>

            <div class="project-actions">

                <a
                class="demo-btn"
                href="#">

                Ver Demo

                </a>

                <a
                class="request-btn"
                href="#">

                Solicitar Acesso

                </a>

            </div>

        </div>

        `;

    });

}


// =========================
// ROADMAP
// =========================

async function loadRoadmap(){

    const response =
    await fetch(
        "data/roadmap.json"
    );

    const roadmap =
    await response.json();

    const container =
    document.getElementById(
        "roadmapContainer"
    );

    container.innerHTML = "";

    roadmap.forEach(item => {

        const state =
        item.completed
        ? "done"
        : "pending";

        const icon =
        item.completed
        ? "✓"
        : "○";

        container.innerHTML += `

        <div
        class="road-card ${state}">

            ${icon}
            ${item.title}

        </div>

        `;

    });

}
