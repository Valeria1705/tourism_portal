$(document).ready(function() {
    $(".news-item button").click(function() {
        let modalId = $(this).attr("data-modal");
        $("#" + modalId).fadeIn();
    });

    $(".close").click(function() {
        $(this).closest(".modal").fadeOut();
    });


    // Завантаження новин
    let newsData = [
        "Новина 1: Відкрили новий туристичний маршрут",
        "Новина 2: ТОП-10 місць для подорожей у 2025 році",
        "Новина 3: Нові правила для мандрівників"
    ];

    let newsList = $("#news-list");
    newsData.forEach(news => {
        newsList.append(`<p>${news}</p>`);
    });

    // Функції модального вікна
    $(".news-item button").click(function() {
        let modalId = $(this).data("modal");
        $("#" + modalId).show();
    });

    $(".close").click(function() {
        $(this).closest(".modal").hide();
    });
});

// Функція ініціалізації карти Google
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 5
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.4501, lng: 30.5234 }, // Київ, Україна
        zoom: 10
    });
}

