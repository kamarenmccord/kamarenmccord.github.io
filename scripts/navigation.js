const target = "header__navigationIcons";

const iconData = [
    {
        title: "LinkedIn",
        image: 'http://www.capillaryconsulting.com/wp-content/uploads/2016/02/linkedin-logo.png',
        link:'http://Linkedin.com/in/Kamaren-McCord'
    },
    {
        title: 'Github',
        image: 'https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png',
        link: 'https://github.com/kamarenmccord'
    },
    {
        title:" Facebook",
        image: 'https://img.talkandroid.com/uploads/2016/01/facebook-app-logo-450x450.png',
        link: 'https://www.facebook.com/kamaren.mccord/'
    },
    {
        title: 'Youtube',
        image: 'http://www.westwoodband.org/wp-content/uploads/2016/12/Icon-YouTube-on-White.png',
        link: 'https://www.youtube.com/channel/UC9tx98FnTyrq1hAKBxTlpUQ'
    },
    {
        title: 'twitter',
        image: 'https://amysmartalpha.files.wordpress.com/2013/03/twitter_logo_volt.png',
        link: 'https://twitter.com/kamaren1'
    },
]

const uploadData = () =>{
    console.log('navs');
    let navs='';

    iconData.forEach(icon=>{
        navs+=`
        <a href="${icon.link}"><img alt='' src='${icon.image}' /></a>
        `
    })

    document.getElementById(target).innerHTML = navs;
}

uploadData();