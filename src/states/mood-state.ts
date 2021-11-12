import State from './state'
import { MoodInfo, MoodOptions } from '../mood-input/types'

export class MoodState extends State<MoodInfo> {
	private moods: MoodInfo[] = []
	private static instance: MoodState

	private constructor () {
		super()
	}

	static getInstance () {
		if (this.instance) {
			return this.instance
		}
		this.instance = new MoodState()
		return this.instance
	}

	addMood (date: Date, mood: MoodOptions) {
		const newMood = <MoodInfo>{
			date: date,
			mood: mood
		}
		this.moods.push(newMood)
		this.updateListeners()
	}

	private updateListeners () {
		for (const listenerFn of this.listeners) {
			listenerFn(this.moods.slice())
		}
	}
}

export const moodState = MoodState.getInstance()