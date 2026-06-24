async function loadHighlights() {

    const projectsResponse =
    await fetch(
        "data/projects.json"
    );

    const projects =
    await projectsResponse.json();

    const skillsResponse =
    await fetch(
        "data/skills.json"
    );

    const skills =
    await skillsResponse.json();

    const profileResponse =
    await fetch(
        "data/profile.json"
    );

    const profile =
    await profileResponse.json();

    const year =
    new Date().getFullYear();

    const experience =
    year - profile.startYear;

    const container =
    document.getElementById(
        "highlightsContainer"
    );

    if(!container) return;

    container.innerHTML = `

    <div class="highlight-card">

        <span class="big-number">

            +${projects.length}

        </span>

        <p>Projetos</p>

    </div>

    <div class="highlight-card">

        <span class="big-number">

            +${skills.length}

        </span>

        <p>Tecnologias</p>

    </div>

    <div class="highlight-card">

        <span class="big-number">

            ${experience}

        </span>

        <p>Anos de Experiência</p>

    </div>

    <div class="highlight-card">

        <span class="big-number">

            ∞

        </span>

        <p>Curiosidade</p>

    </div>

    `;

}

loadHighlights();
