async function buildStats(profile){

    const skillsResponse =
    await fetch("data/skills.json");

    const skills =
    await skillsResponse.json();

    const projectsResponse =
    await fetch("data/projects.json");

    const projects =
    await projectsResponse.json();

    const year =
    new Date().getFullYear();

    const experience =
    year - profile.startYear;

    const stats = [

        {
            value: experience + "+",
            label:"Anos de Evolução"
        },

        {
            value: projects.length,
            label:"Projetos"
        },

        {
            value: skills.length,
            label:"Competências"
        },

        {
            value:"∞",
            label:"Curiosidade"
        }

    ];

    const container =
    document.getElementById(
        "statsContainer"
    );

    container.innerHTML = "";

    stats.forEach(item => {

        container.innerHTML += `

        <div class="stat-card">

            <div class="stat-number">

                ${item.value}

            </div>

            <div class="stat-label">

                ${item.label}

            </div>

        </div>

        `;

    });

}
