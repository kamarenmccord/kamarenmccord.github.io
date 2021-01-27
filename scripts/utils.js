
const toggleColors = (dark) =>{
    // dark is the default and is boolean
    console.log( dark ? 'dark' : 'light')
}

const toggleTheme = (elemRef) =>{
    var side;
    if (elemRef.style.justifyContent === 'flex-end'){
        side = 'flex-start'
    } else {
        side = 'flex-end'
    }

    // change theme
    toggleColors(side === 'flex-start')

    // set the toggle switch to the correct side
    elemRef.style.justifyContent = side;
}