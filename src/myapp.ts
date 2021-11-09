import Mood from "./mood";

const allMoodButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('mood-button')
const myMood = new Mood();

const moodClicked = (event: Event) => {
    event.preventDefault()

    const buttonElement  = event.target as HTMLButtonElement

    if (buttonElement) {
        const buttonID = buttonElement.id
        const moodOption = buttonID.split('-')[1]

        myMood.addTodayMood(moodOption)
        console.log(myMood.getAllMood())
    }
}

for (let i = 0; i < allMoodButtons.length; i++) {
    allMoodButtons[i].addEventListener('click', moodClicked)
}

console.log(myMood.getAllMood())