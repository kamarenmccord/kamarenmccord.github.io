const newData = [
    {
        'title': 'Grocery Web App',
        'image': './public/grocery_app.png',
        'caption': "A visual JavaSript grocery application",
        'lesson': 'Keep things modular, and plan before you execute',
        "blog": "Time to combined my knowelege once again! A rebuild of my first app and the best one yet! I got the opertunity to combined all of the technologies that I have been learning about and rebuild my old clunky app while adding visuals! It doesnt take files yet but it does take images in URL format. The backend talks to both the frontend and to the mobile applications. Even though I didn't do much in the mobile that fact that the user could create a meal on the desktop and check a list on the mobile is increadable!",
    },
    {
        'title': 'Accessibility App',
        'image': './public/accessiblity.png',
        'caption': 'a quick app on accessibility',
        'lesson': 'This was a awesome little app that I build that makes really good use of react componets. The entire page and links are made so that they could be tabbed to and I encorporated information on how to help those with impairments and even educated my audiance on the importance of writing code that is accessible to everyone!',
    },
    {
        'title': 'pyRPGGame',
        'image': './public/pygame.png',
        'caption': 'An RPG adventure in rpg creation',
        'lesson': 'A lot of time and effort goes into making a quality game and python was not the way to go about that. It taught me alot about object orientation and how data flows and gets passed around. My favorite thing about this project was learning how to import and export modules to have smaller files, wait whats a circular import?',
        "blog":'Oh My GOODNESS, How much work goes into makeing an rpg? this is taking forever! After programming on this for about 12 to 14 hours a day for 3 months I got exhausted and wanted to move on to something else. Looking back on this project I definatly should have made a requiments.txt or some kind of read me beacuse It wont run anymore.',
    }
]

const getTwo = ()=>{
    let showcase = ``;
    newData.forEach(meta=>{
        showcase += `
        <div class='cardWrapper'>
            <div class='upperCard'>
                <div class='card__header'>
                    <div class='card__headerTitle'>${meta.title}</div>
                </div>
                <img class='card__image'
                    src="${meta.image}"
                    alt=''
                >
                <div class='card__footer'>
                    ${meta.caption}
                </div>
            </div>
            <div class='lowerCard'>
                <a class='lowerCard__wrapper' href='./projectboard.html'>
                    <div class='card__lesson'>${meta.lesson}</div>
                    <button class='card__more'>See more +</button>
                </a>
            </div>
        </div>
    `})
    document.getElementById('projectShowcase').innerHTML = showcase;
}

getTwo();