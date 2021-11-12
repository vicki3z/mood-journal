import {MoodOptions} from "./types";
import {moodState} from "../states/mood-state";

class MoodInput {
    constructor() {
        this.configure()
    }

    moodClicked(event: Event) {
        event.preventDefault()
        const buttonElement  = event.target as HTMLButtonElement

        if (buttonElement) {
            const buttonID = buttonElement.id
            const moodOption = buttonID.split('-')[1]
            console.log('add mood: ', moodOption)
            moodState.addMood(new Date(), moodOption as MoodOptions)
        }
    }

    configure() {
        const allMoodButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('mood-button')

        for (let i = 0; i < allMoodButtons.length; i++) {
            allMoodButtons[i].addEventListener('click', this.moodClicked.bind(this))
        }
    }
}

export default MoodInput;