async function loadProfile() {

    const response =
    await fetch("data/profile.json");

    const profile =
    await response.json();

    document.getElementById("name")
        .textContent =
        profile.name;

    document.getElementById("subtitle")
        .textContent =
        profile.subtitle;

    buildContact(profile);

    buildStats(profile);
}

function buildContact(profile){

    const container =
    document.getElementById(
        "contactContainer"
    );

    container.innerHTML = `

    <a class="contact-link"
    href="${profile.github}"
    target="_blank">

    GitHub

    </a>

    <a class="contact-link"
    href="${profile.linkedin}"
    target="_blank">

    LinkedIn

    </a>

    <a class="contact-link"
    href="mailto:${profile.email}">

    ${profile.email}

    </a>

    <a class="contact-link"
    href="https://wa.me/${profile.whatsapp.replace('+','')}">

    WhatsApp

    </a>

    `;
}

loadProfile();
