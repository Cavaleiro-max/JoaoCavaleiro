async function loadProfile(){

    const response =
    await fetch(
        "data/profile.json"
    );

    const profile =
    await response.json();

    document.getElementById(
        "name"
    ).textContent =
    profile.name;

    document.getElementById(
        "subtitle"
    ).textContent =
    profile.subtitle;

    document.getElementById(
        "avatar"
    ).src =
    profile.avatar;

    document.getElementById(
        "cvBtn"
    ).href =
    profile.cv;

}

loadProfile();
