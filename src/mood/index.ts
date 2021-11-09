import {MoodInfo, MoodOptions} from "./types";

class Mood {
    moodList: MoodInfo[]

    constructor() {
        this.moodList = [{
            date: '2021-11-06',
            mood: MoodOptions.MEH
        }, {
            date: '2021-11-07',
            mood: MoodOptions.AWESOME
        }, {
            date: '2021-11-08',
            mood: MoodOptions.AWESOME
        }]
    }

    addTodayMood(moodOption: MoodOptions) {
        this.moodList.push({
            date: '2021-11-09',
            mood: moodOption
        })
    }

    getAllMood() {
        return this.moodList
    }
}

export default Mood;