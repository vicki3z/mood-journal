import MoodInput from "./mood-input";
import MoodHistory from "./mood-history";

function startApp() {

    new MoodInput();
    new MoodHistory();

    const updateContent = (moodOption: string) => {
        const moodContent = document.getElementById('mood-input-content')!;
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
    }
}

startApp()