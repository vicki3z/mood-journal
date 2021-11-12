import {MoodInfo} from "../mood-input/types";
import {moodState} from "../states/mood-state";

class MoodHistory {
    constructor() {
        this.configure()
    }

    configure() {
        const moodHistoryElement = document.getElementById('mood-history')!

        moodState.addListener((moods: MoodInfo[]) => {
            moodHistoryElement.innerHTML = `
                <ul class="list-none">
                    ${moods.map(mood => (
                    `<li>Date: ${mood.date} - ${mood.mood}</li>`
                ))}
                </ul>
            `
        })
    }

}

export default MoodHistory;