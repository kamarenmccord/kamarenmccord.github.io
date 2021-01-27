const newData = [
    {
        'title': 'Pizza planet',
        'image': 'https://images.unsplash.com/photo-1611315017238-fda57c0128a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'caption': 'subtext',
        'lesson': 'lesson',
    },
    {
        'title': 'Arcitecture',
        'image': 'https://images.unsplash.com/photo-1611702700098-dec597b27d9d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'caption': 'subtext',
        'lesson': 'lesson',
    },
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