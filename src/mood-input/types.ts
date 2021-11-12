export enum MoodOptions {
    AWESOME = 'awesome',
    MEH = 'meh',
    CRAPPY = 'crappy'
}
export type MoodInfo = {
    date: Date;
    mood: MoodOptions;
}