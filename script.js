const songs = ["Kitty", "Malas Decisiones", "Los Santos", "Se Fue la Luz", "VIP", "La OG", "Toy Toy", "Morir de Amor",
     "Año Sabático", "La Invitación"];
const container = document.querySelector('.container__tags');
const albums = ['songs--cambios', 'songs--k23', 'songs--pinkaura'];

songs.forEach(song => {
    const tag = document.createElement('DIV');
    tag.textContent = song;

    tag.style.background = "lightblue";
    tag.style.display = "flex";
    tag.style.alignItems = "center";
    tag.style.padding = "0.5rem 1rem";
    tag.style.borderRadius = "8px";
    tag.style.cursor = "grab";
    tag.style.height = "2.5rem";
    tag.style.width = "fit-content";

    container.appendChild(tag);
});

new Sortable(container, {
    group: 'shared',
    animation: 150,
    fallbackOnBody: true,
    chosenClass: 'song--chosen',
    dragClass: 'song--drag'
});

albums.forEach((albumState) => {
    const album = document.getElementById(albumState);

    new Sortable(album, {
        group: 'shared',
        animation: 150,
        fallbackOnBody: true,
        chosenClass: 'song--chosen',
        dragClass: 'song--drag'
    });
});