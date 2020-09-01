$(document).ready(function () {
    const modalText = {
        willPizzeria: {
            title: "Will's Pizzeria",
            detail: "Will's Pizzeria is a personal app that lets you order a pizza. Please note the app is only for personal project use not for commercial use. The application is built in React, Node, and MongoDB.",
            link: "https://willspizzeria.herokuapp.com/",
            imageSlides: ["./media/pizza/menu.webp", "./media/pizza/orders.webp", "./media/pizza/checkout.webp"]
        },
        devHub: {
            title: "Developers Hub",
            detail: "Developers Hub is a social media platform for developers. Users can write posts, visit profiles, and create an account. The application is built in React, Redux, Node, and MongoDB.",
            link: "https://developershub.herokuapp.com/",
            imageSlides: ["./media/devhub/home.webp", "./media/devhub/profile.webp", "./media/devhub/profiles.webp"]
        },
        ufvManager: {
            title: "UFV Appointment Manager",
            detail: "UFV Appointment Manager is an online appointment system by University of the Fraser Valley. Students use it to book appointments with Academic and Career Advisors and Faculty Staff. The application is built in Angular, PHP Laravel, and MySQL.",
            link: "https://am.ufv.ca/amonline/",
            imageSlides: ["./media/ufv/advisor.webp", "./media/ufv/login.webp", "./media/ufv/qualify.webp"]
        },
        relentless: {
            title: "Relentless Conference",
            detail: "Relentless is a registration and payment system for the conference organized by Singles For Christ. The application is built in React, Redux, Node, and MongoDB.",
            link: "http://relentless-sfcbc.herokuapp.com/",
            imageSlides: ["./media/relentless/reg1.webp", "./media/relentless/reg2.webp", "./media/relentless/reg3.webp"]
        },
        idl: {
            title: "Instituto de Defensa Legal",
            detail: "Instituto de Defensa Legal (English: Institute of Legal Defense) is an institution of civil society founded in 1983, which aims to promote and defend human rights, democracy and peace in Peru and Latin America. The application is built in React and PHP Laravel framework.",
            link: "https://idl.org.pe/",
            imageSlides: ["./media/idl/areas.webp", "./media/idl/noticas.webp", "./media/idl/videoclip.webp"]
        },
        titan22: {
            title: "Titan 22",
            detail: "Titan 22 is the leading e-commerce website in the Philippines when it comes to basketball-oriented products from a wide selection of brands like Nike, Jordan, Adidas,  Under Armour, and more. The e-commerce website is built in jQuery, PHP Magento, and MySQL.",
            link: "https://www.titan22.com/",
            imageSlides: ["./media/titan22/home.webp", "./media/titan22/products.webp", "./media/titan22/products2.webp", "./media/titan22/blog.webp"]
        },
        bcitProject: {
            title: "Advanced Web Design Final Project",
            detail: "This final project was a proposal for the new page layout of COMP 1950's course page.",
            "link": "https://comp1950final.netlify.app/",
            imageSlides: ["./media/bcit/bcit.webp", "./media/bcit/bcit2.webp", "./media/bcit/bcit3.webp", "./media/bcit/bcit4.webp"]
        },
        bigOrange: {
            title: "Big Orange Food Express",
            detail: "Big Orange lets users order food from a wide selection of restaurants in Los Angeles, CA. This app is not intended for commercial use but rather educational. The application is built in Angular, Node on Express, and MySQL.",
            link: "http://bigorange.herokuapp.com/",
            imageSlides: ["./media/bigorange/login.webp", "./media/bigorange/register.webp"]
        },
        nodeMessenger: {
            title: "Node Messenger",
            detail: "Node Messenger is a chat application that lets users chat in real time. The app is integrated with Socket.io. The application is built in Javascript ES6, Node on Express, and Socket.io",
            link: "https://nodesocketmessenger.herokuapp.com/",
            imageSlides: ["./media/chat/chat.webp", "./media/chat/home.webp"]
        },
        itunesApp: {
            title: "iTunes Search App",
            detail: "iTunes Search App lets you search for songs, albums, podcasts, and movies - based on the artist. The application is built in Angular and Node on Express.",
            link: "http://itunesapisearch.herokuapp.com/",
            imageSlides: ["./media/itunes/movies.webp", "./media/itunes/songs.webp", "./media/itunes/albums.webp"]
        }
    };

    $('#portfolio .button').on('click', function () {
        fillModal(this.id);
        $('.modal-container').addClass('visible');
    });

    $('.close').on('click', function () {
        $('.modal-container').removeClass('visible');
    });

    $('.mask').on('click', function () {
        $('.modal-container').removeClass('visible');
    });

    $('#left').on('click', function () {
        changeBackground(-1);
    });

    $('#right').on('click', function () {
        changeBackground(1);
    });

    var modal;
    var selectedIndex = 0;

    function fillModal(id) {
        modal = modalText[id];

        $('#modal .title').text(modalText[id].title);
        $('#modal .info').text(modalText[id].detail);
        if (modalText[id].link) {
            $('#modal .button')
                .parent()
                .attr('href', modalText[id].link);
        }

        $('#modal .carousel').css('background-image', 'url(' + modalText[id].imageSlides[0] + ')');
        $('#modal .carousel').addClass('visible');
    }

    function changeBackground(n) {
        var images = modal.imageSlides;

        selectedIndex += n;

        if (selectedIndex > images.length - 1) {
            selectedIndex = 0;
        }

        if (selectedIndex < 0) {
            selectedIndex = images.length - 1;
        }

        $('#modal .carousel').css('background-image', 'url(' + modal.imageSlides[selectedIndex] + ')');
    }
});