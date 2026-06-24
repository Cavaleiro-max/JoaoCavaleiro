async function loadBuilding() {

    const response =
    await fetch(
        "data/building.json"
    );

    const items =
    await response.json();

    const container =
    document.getElementById(
        "buildingContainer"
    );

    if(!container) return;

    container.innerHTML = "";

    items.forEach(item => {

        container.innerHTML += `

        <div class="building-card">

            ✓ ${item.title}

        </div>

        `;

    });

}

loadBuilding();
