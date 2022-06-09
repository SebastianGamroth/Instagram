// json
let posts = [
    {
        'author': 'Kapkörbchen',
        'image': './img/post_',
        'location': 'London, united Kingdom',
        'description': '<b>Die Kapkörbchen</b> (Osteospermum), auch Kapmargeriten oder Paternosterstrauch genannt, sind eine Pflanzengattung in der Familie der Korbblütler (Asteraceae).',
        'likeNumber': 237,
        'comentary': [
            {
                'commentAuthor': 'Bob',
                'comment': 'Sind die aber Farbenfroh.'
            },
            {
                'commentAuthor': 'Lisa',
                'comment': 'Ist geschmack Sache.'
            },
            {
                'commentAuthor': 'Willi',
                'comment': 'Wer sagt das?.'
            },
            {
                'commentAuthor': 'Lisa',
                'comment': 'schnarch.'
            }],
        'profiles': ['Bob', 'Lisa', 'Willi', 'Ron', 'Mili', 'Max', 'Ula', 'Rudy'],
        'width': [700],
        'height':[525,418,418,350,393]
    },
    {
        'author': 'Löwenzahn',
        'image': './img/post_',
        'location': 'London, united Kingdom',
        'description': '<b>Der Löwenzahn</b> ist eine ausdauernde krautige Pflanze, die eine Wuchshöhe von 10 cm bis 30 cm erreicht und in allen Teilen einen weißen Milchsaft enthält. Seine bis zu 1 Meter (selten auch bis 2 Meter) lange, fleischige Pfahlwurzel ist außen dunkelbraun bis schwarz.',
        'likeNumber': 237,
        'comentary': [
            {
                'commentAuthor': 'Willi',
                'comment': 'Bin ich farbenblind.'
            },
            {
                'commentAuthor': 'Lisa',
                'comment': 'Du sagst es.'
            },
            {
                'commentAuthor': 'Bob',
                'comment': 'Wer sagt das?.'
            },
            {
                'commentAuthor': 'Lisa',
                'comment': 'wau wau wau.'
            }]
    },
    {
        'author': 'Sonnenblume',
        'image': './img/post_',
        'location': 'Ganga, Afrika',
        'description': '<b>Die Sonnenblume</b> ist eine einjährige, krautige Pflanze, die Wuchshöhen von meist 1 bis 2, seltener 3 Metern erreicht. Sie bildet keine Knollen. Der Stängel ist rau behaart. Die fast alle wechselständigen am Stängel angeordneten Laubblätter sind in Blattstiel und Blattspreite gegliedert.',
        'likeNumber': 512,
        'comentary': [
            {
                'commentAuthor': 'Max',
                'comment': 'Wo bin ich hier gelandet.'
            },
            {
                'commentAuthor': 'Ron',
                'comment': 'Das frage ich mich auch.'
            },
            {
                'commentAuthor': 'Mili',
                'comment': 'Ist geschmack Sache.'
            }]
    },
    {
        'author': 'Mohn',
        'image': './img/post_',
        'location': 'Tokyo, Japan',
        'description': '<b>Mohn (Papaver)</b> ist eine Pflanzengattung innerhalb der Familie der Mohngewächse (Papaveraceae). Die weltweit 50 bis 120 Arten gedeihen hauptsächlich in den gemäßigten Gebieten der Nordhalbkugel.[1][2][3] Nur eine Art kommt auf der Südhalbkugel in Südafrika vor. Einige Mohnarten werden vielseitig genutzt, beispielsweise wegen der enthaltenen Wirkstoffe und zählen zu den ältesten Heilpflanzen.',
        'likeNumber': 309,
        'comentary': [
            {
                'commentAuthor': 'Ula',
                'comment': 'Sind die aber Lebensfroh.'
            },
            {
                'commentAuthor': 'Max',
                'comment': 'Ist geschmack Sache.'
            },
            {
                'commentAuthor': 'Rudy',
                'comment': 'In welcher Richtung?.'
            }]
    },
    {
        'author': 'Kirschblüte',
        'image': './img/post_',
        'location': 'Tokyo, Japan',
        'description': '<b>Die Kirschblüte</b> ist auch die offizielle Pflanze von Tokio. Die Kirschblüte beginnt in Japan Mitte oder Ende März in Kyūshū und „wandert“ dann nach Nordosten, bis sie etwa Anfang Mai in Hokkaidō ankommt. Während dieser Zeit wird im Rahmen der Wettervorhersage auch die „Kirschblütenfront“ (桜前線 sakura zensen) angekündigt.',
        'likeNumber': 309,
        'comentary': [
            {
                'commentAuthor': 'Ula',
                'comment': 'Das reden nimmt kein end.'
            },
            {
                'commentAuthor': 'Max',
                'comment': 'Ist das so.'
            },
            {
                'commentAuthor': 'Rudy',
                'comment': 'In welcher Richtung?.'
            }]
    }
];
// load localstorage
load();

// Posts anzeigen im Html
function renderPosts() {
    let post = document.getElementById('postContainer');
    post.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];

        post.innerHTML +=
            `
        <ul id="jump${i}">
            <h2>${element.author}</h2>
            <p>${element.location}</p>
            <img src="${element.image}${i}.webp" width="${posts[0].width[0]}" height="${posts[0].height[i]}" alt="post">
            <div class="socialMedia">
                <div class="mediaLeft">
                    <img class="unlike" id="heart${i}" onclick="likeUnlikePost(${i})" src="./img/heart_red.png" alt="heart">
                    <img onclick="showInput(${i})" src="./img/comment.png" alt="comment">
                    <img src="./img/arrow.png" alt="arrow">
                </div>
                <div class="mediaRight">
                    <img src="./img/noteBlack.png" alt="note">
                </div>  
            </div>
            <span class="likes" id="likeNumber${i}">Gefällt ${element.likeNumber} Mal</span>
            <span class="postText" >${element.description}</span>
            <a id="cunterPost${i}" onclick="commentsToggle(${i})">Alle ${element.comentary.length} Komentare ansehen</a>
            <div id="comments${i}" class="comments d-none"></div>
            <div id="commentLast${i}" class="comments"></div>
            </div>
            <div class="inputComments">
                <input id="inputComments${i}" type="text" minlength="3" placeholder="Kommentar hinzufügen ...">
                <button onclick="addComment(${i})">Posten</button>
            </div>
        </ul>
        `;

        renderComments(i);
    }
}

// Profile anzeigen im Html - obere Leiste - rechte Leiste
function renderProfile() {
    let profileBox = document.getElementById('profileBox');

    for (let i = 0; i < posts[0].profiles.length; i++) {
        profileBox.innerHTML +=
            `
        <div class="profileContainer">
            <div class="profileLeft">
                <img src="./img/profile_${posts[0].profiles[i]}.png" alt="profile">
                <h2>${posts[0].profiles[i]}</h2>
            </div>
            <a href="#">Abonnieren</a>
        </div>
        `;
    }

    let profileBar = document.getElementById('profileBar');

    for (let y = 0; y < posts[0].profiles.length; y++) {
        profileBar.innerHTML +=
            `
        <div class="profileContainerTop">
            <img src="./img/profile_${posts[0].profiles[y]}.png" alt="profile">
            <h2>${posts[0].profiles[y]}</h2>
        </div>
        `;
    }
}

//  Like Button - gefält oder nicht
function likeUnlikePost(i) {
    let heart = document.getElementById('heart' + i);
    let like = document.getElementById('likeNumber' + i);

    if (heart.classList.contains('like')) {
        heart.classList.remove('like');
        heart.classList.add('unlike');
        like.innerHTML = `Gefällt ${posts[i].likeNumber} Mal`;
    } else {
        heart.classList.remove('unlike');
        heart.classList.add('like');
        like.innerHTML = `Gefällt ${posts[i].likeNumber + 1} Mal`;
    }
}

// cursor springt ins InputFeld
function showInput(i) {
    document.getElementById('inputComments' + i).focus(); XMLDocument
}

// Alle Kommentare ein oder ausblenden
function commentsToggle(i) {
    let info = document.getElementById('comments' + i);
    info.classList.toggle('d-none');

    if (info.classList.contains('d-none')) {
        document.getElementById('cunterPost' + i).innerHTML = `Alle ${posts[i].comentary.length} Komentare anzeigen`;
        document.getElementById('commentLast' + i).classList.remove('d-none');
    } else {
        document.getElementById('cunterPost' + i).innerHTML = `Alle ${posts[i].comentary.length} Komentare ausblenden`;
        document.getElementById('commentLast' + i).classList.add('d-none');
    }
}

// Kommentar einfügen in Json - min. 3 Zeichen - placeholder anpassen
function addComment(i) {
    let inputComments = document.getElementById('inputComments' + i);

    if (inputComments.value.length < 3) {
        document.getElementById('inputComments' + i).placeholder = "min. 3 Zeichen eingeben!";
    } else {
        posts[i].comentary.push({
            'commentAuthor': 'Sebastian',
            'comment': `${inputComments.value}`
        });
        document.getElementById('inputComments' + i).placeholder = "Kommentar hinzufügen ...";

        lastComments(i);
    }
    inputComments.value = '';
    renderComments(i);

    save();
}

// Letzter Kommentar anzeigen
function lastComments(index) {
    let comments = document.getElementById('commentLast' + index);
    comments.innerHTML = '';

    const element = posts[index].comentary[posts[index].comentary.length - 1];
    comments.innerHTML +=
        `
    <div id="toggleComments">
        <div class="profileImage">
            <img src="./img/profile_${element.commentAuthor}.png">
            <h2>${element.commentAuthor}</h2>
        </div>
        <p id="comment">${element.comment}</p>
    </div>
    `;
}

// Kommentare anzeigen im Html - Kommentare zählen
function renderComments(index) {
    let comments = document.getElementById('comments' + index);
    comments.innerHTML = '';

    for (let i = 0; i < posts[index].comentary.length; i++) {
        const element = posts[index].comentary[i];
        comments.innerHTML +=
            `
            <div id="toggleComments">
                <div class="profileImage">
                    <img src="./img/profile_${element.commentAuthor}.png">
                    <h2>${element.commentAuthor}</h2>
                </div>
                <p id="comment">${element.comment}</p>
            </div>
            `;
    }
    document.getElementById('cunterPost' + index).innerHTML = `Alle ${posts[index].comentary.length} Komentare ansehen`;
}

// Artikel druchsuchen
function searchInput() {
    let search = document.getElementById('searchInput').value;
    search = search.toLowerCase();

    let list = document.getElementById('outputSearch');
    list.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const currentItem = posts[i].author.toLowerCase();

        if (currentItem.toLowerCase().includes(search) && search.length > 0) {
            list.innerHTML +=
                `
                <ul><a onclick="closeSearch()" href="#jump${i}">${currentItem}</a></ul>
                `;
        }

        if (search.length < 0) {
            document.getElementById('outputSearch').innerHTML = '';
            document.getElementById('searchInput').value = '';
        }
    };
}

// Artikel Suche beenden
function closeSearch() {
    document.getElementById('outputSearch').innerHTML = '';
    document.getElementById('searchInput').value = '';
}

// scroll button - nach oben
window.onscroll = function () {
    let scroll = Math.trunc(window.scrollY);

    if (scroll < 240) {
        document.getElementById('arrowUp').style.display='none';
    } 
    if (scroll > 240)  {
        document.getElementById('arrowUp').style.display='flex';;
    }
}

// save localStorage json
function save() {
    let postsAsText = JSON.stringify(posts);

    localStorage.setItem('posts', postsAsText);
}

// load localStorage json
function load() {
    let postsAsText = localStorage.getItem('posts');

    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
}