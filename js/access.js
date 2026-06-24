function openAccessModal(project){

    document
    .getElementById(
        "accessModal"
    )
    .classList
    .remove(
        "hidden"
    );

    document
    .getElementById(
        "projectName"
    )
    .value =
    project;

}

function closeAccessModal(){

    document
    .getElementById(
        "accessModal"
    )
    .classList
    .add(
        "hidden"
    );

}

document
.getElementById(
    "closeModal"
)
?.addEventListener(
    "click",
    closeAccessModal
);
