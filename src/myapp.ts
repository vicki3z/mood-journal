import Mood from "./mood";

const allMoodButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('mood-button')
const moodHistoryElement = document.getElementById('mood-history')!
function startApp() {

    const myMood = new Mood();
    let moodHistory;

    const showHistory = () => {
        moodHistory = myMood.getAllMood()
        moodHistoryElement.innerHTML = `
            <ul class="list-none">
                ${moodHistory.map(mood => (
                    `<li>Date: ${mood.date} - ${mood.mood}</li>`
                ))}
            </ul>
        `
    }

    const updateContent = (moodOption: string) => {
        const moodContent = document.getElementById('mood-content')!;
        let text = ''
        switch (moodOption) {
            case 'awesome':
                text = `You're feeling { <span class="text-primary">Awesome!</span> } today. <br />That's great!!!`
                break;
            case 'meh':
                text = `You're feeling { <span class="text-primary">Meh...</span> } today. <br />I guess it's just another normal day`
                break;
            case 'crappy':
                text = `You're feeling { <span class="text-primary">Crappy</span> } today. <br />Aww... I hope you'll feel better tomorrow`
                break;
        }

        moodContent.innerHTML = text;
        showHistory()
    }

    const moodClicked = (event: Event) => {
        event.preventDefault()

        const buttonElement  = event.target as HTMLButtonElement

        if (buttonElement) {
            const buttonID = buttonElement.id
            const moodOption = buttonID.split('-')[1]

            myMood.addTodayMood(moodOption)

            updateContent(moodOption)
        }
    }

    for (let i = 0; i < allMoodButtons.length; i++) {
        allMoodButtons[i].addEventListener('click', moodClicked)
    }

    showHistory()
}

startApp()