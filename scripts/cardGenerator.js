const newData = [
  {
    title: "Grocery Web App",
    image: "./public/grocery_app.png",
    caption: "A visual JavaSript grocery application",
    lesson: "Keep things modular, and plan before you execute",
    blog:
      "Time to combined my knowelege once again! A rebuild of my first app and the best one yet! I got the opertunity to combined all of the technologies that I have been learning about and rebuild my old clunky app while adding visuals! It doesnt take files yet but it does take images in URL format. The backend talks to both the frontend and to the mobile applications. Even though I didn't do much in the mobile that fact that the user could create a meal on the desktop and check a list on the mobile is increadable!",
  },
  {
    title: "Firefox Extension",
    image: "./public/firefoxExtension.png",
    caption: "A todo app for firefox",
    lesson:
      "a walkthough by cleverprogrammer this was a bit painful to set up as they were using chrome but I wanted to use firefox. after a bit of debugging i was finally able to get my feet of the ground",
    blog:
      "Learning how to get this started was a bit of a pain but the app is actually a pretty handy concept. I should probably set back and finish this as it would definatly help me oragnize my thoughts and get mind focused on the task at hand. The hardest thing to figure out was getting the broswer history to work. wait is it cache localhistory or system memory?",
  },
  {
    title: "Accessibility App",
    image: "./public/accessiblity.png",
    caption: "a quick app on accessibility",
    lesson:
      "This was a awesome little app that I build that makes really good use of react componets. The entire page and links are made so that they could be tabbed to and I encorporated information on how to help those with impairments and even educated my audiance on the importance of writing code that is accessible to everyone!",
  },
  {
    title: "Bug Hunting",
    image: "./public/fp.png",
    caption: "a professional work environment",
    lesson:
      "My first up close expeirence in the workplace. This was so confusing for me at first. Communication is vital when you work with many people.",
    blog:
      "I had a hard time grasping this at first. Nobody prepares you to be slapped in the face with Ui teams, Testing teams, System Admins, Tech leads, System Archetects, Buissness intelegence, and not to mention what is it like to work on code that isn't yours! After my head finally settled down from all the chaos I was able to get a grasp on what was going on. Planning and organizing is just as important as writing the code thats for sure.",
  },
  {
    title: "Firestone Clone",
    image: "./public/firestone.png",
    caption: "Clone of the firestone webapp",
    lesson:
      "react hooks and react lifecycle played a big role in when and how I should get and update my data from node",
    blog: "",
  },
  {
    title: "pyRPGGame",
    image: "./public/pygame.png",
    caption: "An RPG adventure in rpg creation",
    lesson:
      "A lot of time and effort goes into making a quality game and python was not the way to go about that. It taught me alot about object orientation and how data flows and gets passed around. My favorite thing about this project was learning how to import and export modules to have smaller files, wait whats a circular import?",
    blog:
      "Oh My GOODNESS, How much work goes into makeing an rpg? this is taking forever! After programming on this for about 12 to 14 hours a day for 3 months I got exhausted and wanted to move on to something else. Looking back on this project I definatly should have made a requiments.txt or some kind of read me beacuse It wont run anymore.",
  },
  {
    title: "Command Line Groceries",
    image: "./public/clg.png",
    caption: "Using python to automate shopping lists",
    lesson:
      "First large project that allowed me to quickly generate my weekly gocerylist and turning my code into something more tangable!",
    blog:
      "This was my very first project that I built on my own after learning python. This task was very large and I had to collaborate to find out what all went into each meal. After sitting down and setting this up it no longer took my family half hour to an hour of picky descisions. A quick 2 minutes in the command line and I could print out a oragnized grocery list! If only this came with graphics... ",
  },
];

const cardGenerator = () => {
  let showcase = ``;
  newData.forEach((meta) => {
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
    `;
  });
  document.getElementById("projectShowcase").innerHTML = showcase;
};

cardGenerator();
