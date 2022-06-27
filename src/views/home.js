import { html, until } from '../lib.js';
import { categories } from '../util.js';
import { quizTemplate } from './common/quiz-preview.js';
import { getMostRecent, getMostRecent2, getMostRecent3, getMostRecent4, getMostRecent5, getStats, countQuest } from '../api/data.js';
import { cubeLoader, lineLoader } from './common/loader.js';

const template = (isLogged) => html`
    <section id="welcome">
        <div class="hero layout">
            <div class="splash right-col"><i class="fas fa-clipboard-list"></i></div>
            <div class="glass welcome">
                <h1>Welcome to psmgmcs!</h1>
                ${until(loadStats(), lineLoader())} ${isLogged ? null : html`<a class="action cta" href="/login">Sign in to create a quiz</a>`}
            </div>
        </div>
        ${until(loadRecent(), cubeLoader())}
    </section>
`;

async function loadStats() {
    const stats = await getStats();
    const quesStats = await countQuest();

    return html`<p>
        Home to <b> ${quesStats} MCQs </b> in ${stats} Topics in ${Object.keys(categories).length} categories.<br />
        <a href="/browse">Browse all quizzes</a>.
    </p>`;
}

async function loadRecent() {
    const recent = await getMostRecent();
    const recent2 = await getMostRecent2();
    const recent3 = await getMostRecent3();
    const recent4 = await getMostRecent4();
    const recent5 = await getMostRecent5();

    return html`
        <div class="pad-large alt-page">
            <h2>Latest five Quizzes :</h2>
            ${recent ? quizTemplate(recent) : html` <p>No quizzes yet. Be the first to create one!</p>`}
        </div>
        <div class="pad-large alt-page">${recent ? quizTemplate(recent2) : html` <p>No quizzes yet. Be the first to create one!</p>`}</div>
        <div class="pad-large alt-page">${recent ? quizTemplate(recent3) : html` <p>No quizzes yet. Be the first to create one!</p>`}</div>
        <div class="pad-large alt-page">${recent ? quizTemplate(recent4) : html` <p>No quizzes yet. Be the first to create one!</p>`}</div>
        <div class="pad-large alt-page">
            ${recent ? quizTemplate(recent5) : html` <p>No quizzes yet. Be the first to create one!</p>`}
            <div>
                <a class="action cta" href="/browse">Browse all quizzes</a>
            </div>
        </div>
    `;
}

export default function homePage(ctx) {
    ctx.render(template(sessionStorage.getItem('auth')));
}
