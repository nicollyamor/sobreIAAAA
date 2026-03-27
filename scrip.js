// ======================= ESTRUTURA DA AVENTURA HARRY POTTER =======================
// Cada cena tem: id, descrição, pergunta, opções (texto, próxima cena, efeito de tempo?), e se é final
const scenes = {
    // Cena inicial: recém-formado descobre pergaminho proibido
    start: {
        id: 'start',
        title: '📜 O Pergaminho Proibido',
        desc: 'Você acaba de completar seus estudos em Hogwarts como um dos mais promissores bruxos. Durante uma noite na Sala Precisa, encontra um grimório ancestral escondido: "A Arte da Essência Pura", uma magia capaz de criar vida, memórias e até dobrar a realidade. Nunca algo tão poderoso foi visto desde os tempos dos Fundadores. A comunidade mágica não sabe dessa descoberta. O que você faz?',
        options: [
            { text: '🔮 Estudar o grimório em segredo, quero dominar essa magia primeiro.', nextScene: 'secretStudy', timeEffect: -300 },
            { text: '⚖️ Levar imediatamente ao Ministério da Magia para ser guardado.', nextScene: 'ministry', timeEffect: -120 },
            { text: '🤝 Compartilhar com meus melhores amigos para decidirmos juntos.', nextScene: 'friends', timeEffect: -180 }
        ],
        isEnd: false
    },
    secretStudy: {
        id: 'secretStudy',
        title: '🔮 Estudo Solitário',
        desc: 'Dias se passam enquanto você decifra runas antigas. A magia é incrível, mas você percebe que ela drena energia vital do ambiente. Criaturas na Floresta Proibida estão adoecendo. Um elfo doméstico sussurra sobre "magia negra esquecida". O que fazer agora?',
        options: [
            { text: '🌿 Parar os estudos e buscar ajuda de um professor de confiança.', nextScene: 'teacherHelp', timeEffect: -240 },
            { text: '🔥 Continuar, mas usando apenas fragmentos menores da magia.', nextScene: 'corruptionPath', timeEffect: -400 },
            { text: '🧙‍♂️ Criar um feitiço de contenção para evitar danos colaterais.', nextScene: 'containment', timeEffect: -600 }
        ],
        isEnd: false
    },
    ministry: {
        id: 'ministry',
        title: '🏛️ Ministério da Magia',
        desc: 'No Ministério, alguns aurores ficam interessados, mas o Subsecretário Barty Crouch Jr. (disfarçado?) desvia o pergaminho para um setor obscuro. Você descobre que ele pretende usar a magia para controlar a mente de criaturas mágicas. Agora você se sente culpado. O que fará?',
        options: [
            { text: '🕵️ Invadir o Ministério com a ajuda da Armada de Dumbledore (antigos alunos).', nextScene: 'resistence', timeEffect: -360 },
            { text: '📰 Revelar tudo ao Profeta Diário, causar escândalo público.', nextScene: 'press', timeEffect: -200 },
            { text: '⚔️ Enfrentar Barty diretamente com um duelo.', nextScene: 'duel', timeEffect: -480 }
        ],
        isEnd: false
    },
    friends: {
        id: 'friends',
        title: '👥 Laços de Amizade',
        desc: 'Seus amigos da Grifinória/Lufa-Lufa ficam divididos. Um deles sugere que a magia pode curar doenças incuráveis no Hospital St. Mungus. Outro teme que ela seja usada para criar horcruxes modernas. Vocês decidem por votação:',
        options: [
            { text: '❤️ Usar para fins medicinais com supervisão.', nextScene: 'healingEnd', timeEffect: -150 },
            { text: '🚫 Destruir o grimório no fogo do dragão.', nextScene: 'destroyEnd', timeEffect: -100 }
        ],
        isEnd: false
    },
    teacherHelp: {
        id: 'teacherHelp',
        title: '🧙 Professor(a) McGonagall',
        desc: 'A diretora fica horrorizada e agradece por sua confiança. Convocamos o retrato de Dumbledore, que sugere esconder o grimório em um local onde nem o mal possa alcançar. Mas antes, você tem a chance de aprender um pouco sobre os limites éticos da magia.',
        options: [
            { text: '✨ Concordar em selar a magia para sempre. Fim justo.', nextScene: 'sealedGoodEnd', timeEffect: 0 },
            { text: '😈 Guardar um fragmento escondido para uso futuro.', nextScene: 'temptationEnd', timeEffect: 0 }
        ],
        isEnd: false
    },
    corruptionPath: {
        id: 'corruptionPath',
        title: '💀 Sombra Ascendente',
        desc: 'Ao prosseguir sem limites, a magia começa a alterar sua aparência: seus olhos brilham em vermelho e plantas murcham ao seu redor. Você ganhou poder imenso, mas criaturas da floresta o temem. Em pouco tempo, Lord Voldemort (ressurgido de forma astral) tenta recrutá-lo. Você se torna...',
        options: [
            { text: '👑 O novo Lorde das Trevas, dominando a Grã-Bretanha mágica.', nextScene: 'darkLordEnd', timeEffect: -800 },
            { text: '🌙 Usar o poder para criar um exílio seguro, um novo mundo mágico isolado.', nextScene: 'exileEnd', timeEffect: -600 }
        ],
        isEnd: false
    },
    containment: {
        id: 'containment',
        title: '🛡️ O Escudo de Essência',
        desc: 'Você desenvolve um feitiço de contenção que absorve o dano ambiental, mas consome muito do seu tempo e energia. Com ajuda de uma Corvinal especialista em runas, consegue purificar o grimório. A magia ancestral pode ser usada com moderação. O futuro da magia é mais ético.',
        options: [
            { text: '🏆 Fundar uma nova ordem de pesquisadores da magia responsável.', nextScene: 'goodOrderEnd', timeEffect: -200 }
        ],
        isEnd: true
    },
    resistence: {
        id: 'resistence',
        title: '💪 Resistência Mágica',
        desc: 'A Armada de Dumbledore invade o Ministério, recupera o grimório e expõe a corrupção. A comunidade mágica instaura uma comissão de ética mágica. Você é reconhecido como herói, e a magia ancestral é estudada com responsabilidade.',
        options: [],
        isEnd: true,
        finalMessage: 'Vitória! A magia ancestral agora é protegida e usada para o bem comum. Você provou que coragem e união são mais fortes que qualquer feitiço.'
    },
    press: {
        id: 'press',
        title: "📰 A Voz do Povo",
        desc: "O Profeta Diário publica a história, e a opinião pública força o Ministério a agir. Porém, um grupo de bruxos das trevas rouba parte do grimório durante o caos. O mundo mágico vive uma era de vigilância e medo. Fim ambíguo.",
        options: [],
        isEnd: true,
        finalMessage: "Seu desejo por justiça teve consequências mistas. A magia ancestral está fragmentada, alguns a usam para o bem, outros para o mal. O equilíbrio é frágil."
    },
    duel: {
        id: 'duel',
        title: '⚡ Duelo no Átrio',
        desc: 'Você enfrenta Barty Crouch Jr. em um duelo intenso. No último segundo, a magia ancestral escapa e atinge ambos. Você sobrevive, mas perde suas memórias mágicas mais importantes. O grimório é destruído na explosão. O preço da bravura.',
        options: [],
        isEnd: true,
        finalMessage: 'Você perdeu a memória, mas salvou o mundo mágico de um mal terrível. Em Hogwarts erguem uma estátua em sua homenagem. Paz duradoura.'
    },
    healingEnd: {
        id: 'healingEnd',
        title: '❤️‍🩹 Magia Curativa',
        desc: 'Com supervisão de medi-bruxos, a magia ancestral cura males incuráveis e prolonga vidas. Você se torna um renomado curandeiro. O legado é de compaixão.',
        options: [],
        isEnd: true,
        finalMessage: 'Seu nome é lembrado nas alas de St. Mungus. Você equilibrou poder e humanidade. Fim glorioso.'
    },
    destroyEnd: {
        id: 'destroyEnd',
        title: '🔥 Chamas da Destruição',
        desc: 'O grimório vira cinzas no fogo do dragão. A magia perigosa é eliminada, mas estudiosos lamentam a perda de conhecimento. Você vive uma vida tranquila, sem arrependimentos.',
        options: [],
        isEnd: true,
        finalMessage: 'A segurança acima de tudo. Você impediu que qualquer um usasse tal poder. Um final simples porém honroso.'
    },
    sealedGoodEnd: {
        id: 'sealedGoodEnd',
        title: '🔒 Câmara do Selo',
        desc: 'O grimório é selado em uma câmara atrás de proteções dignas de Dumbledore. Você é condecorado com a Ordem de Merlin, Primeira Classe. A sabedoria prevaleceu.',
        options: [],
        isEnd: true,
        finalMessage: 'Um final digno de um verdadeiro bruxo: responsabilidade e coragem para deixar o poder de lado.'
    },
    temptationEnd: {
        id: 'temptationEnd',
        title: '🍎 Fragmento Proibido',
        desc: 'Você guarda uma réplica da magia. Anos depois, seus descendentes a usam de forma imprudente e começam uma guerra. A história se repete. Um final melancólico.',
        options: [],
        isEnd: true,
        finalMessage: 'A tentação pelo poder sempre retorna. Seu erro ecoa por gerações. Fim sombrio.'
    },
    darkLordEnd: {
        id: 'darkLordEnd',
        title: '👑 Era das Trevas',
        desc: 'Você se torna o novo Lorde das Trevas, mais poderoso que Voldemort. Hogwarts cai, mas há resistência. O futuro é incerto e sombrio.',
        options: [],
        isEnd: true,
        finalMessage: 'Você conquistou poder absoluto, mas perdeu a si mesmo. O mundo mágico geme sob seu jugo. Fim trágico.'
    },
    exileEnd: {
        id: 'exileEnd',
        title: '🌒 Santuário Oculto',
        desc: 'Você cria um reino mágico escondido no Deserto Proibido, distante da corrupção. Seus seguidores vivem em harmonia com a magia ancestral, isolados do resto.',
        options: [],
        isEnd: true,
        finalMessage: 'Um final de renúncia, mas de paz interior. Você se tornou uma lenda misteriosa.'
    },
    goodOrderEnd: {
        id: 'goodOrderEnd',
        title: '🏅 Ordem da Nova Alvorada',
        desc: 'Fundada por você, a ordem promove o uso ético da magia ancestral. O mundo bruxo avança tecnomagicamente com equilíbrio. Todos celebram sua sabedoria.',
        options: [],
        isEnd: true,
        finalMessage: 'Fim perfeito: poder com responsabilidade. Seu nome entra na História da Magia como um exemplo eterno.'
    }
};

// Variáveis de estado
let currentSceneId = 'start';
let remainingSeconds = 6 * 3600; // 6 horas em segundos
let timerInterval = null;
let gameActive = true;

// Elementos DOM
const dynamicDiv = document.getElementById('dynamicContent');
const timerDisplaySpan = document.getElementById('timerDisplay');

// Função para formatar tempo (HH:MM:SS)
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerUI() {
    if (timerDisplaySpan) {
        timerDisplaySpan.innerText = formatTime(remainingSeconds);
    }
    // Se tempo zerar e jogo ativo, game over por tempo
    if (remainingSeconds <= 0 && gameActive) {
        endGameByTime();
    }
}

function endGameByTime() {
    if (!gameActive) return;
    gameActive = false;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    const timeEndHtml = `
        <div class="end-message">
            <h2>⏳ TEMPO ESGOTADO ⏳</h2>
            <p>O grimório ancestral se fechou para sempre, e as energias mágicas se dissiparam. Sem uma decisão definitiva, a magia das trevas adormeceu, mas o mundo bruxo ficou estagnado. Talvez outra alma a encontre no futuro...</p>
            <button class="restart-btn" id="restartBtn">🔄 Recomeçar a Jornada</button>
        </div>
    `;
    dynamicDiv.innerHTML = timeEndHtml;
    document.getElementById('restartBtn')?.addEventListener('click', restartGame);
}

function applyTimeEffect(secondsDelta) {
    if (!gameActive) return;
    remainingSeconds += secondsDelta;
    if (remainingSeconds < 0) remainingSeconds = 0;
    updateTimerUI();
    if (remainingSeconds <= 0) {
        endGameByTime();
    }
}

function renderScene(sceneId) {
    if (!gameActive) return;
    const scene = scenes[sceneId];
    if (!scene) return;

    // Se a cena tem finalMessage própria e é final, usa ela
    let finalMsg = '';
    if (scene.isEnd && scene.finalMessage) {
        finalMsg = scene.finalMessage;
    } else if (scene.isEnd && !scene.finalMessage && scene.options.length === 0) {
        finalMsg = "A história chegou ao fim. O destino da magia ancestral foi decidido.";
    }

    // Se for final ou não tem opções
    if (scene.isEnd || scene.options.length === 0) {
        gameActive = false;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
        let endHtml = `
            <div class="end-message">
                <h2>📖 Epílogo Mágico 📖</h2>
                <p><strong>${scene.title}</strong><br>${scene.desc}</p>
                <p>${finalMsg}</p>
                <button class="restart-btn" id="restartBtn">🪄 Recomeçar em Hogwarts</button>
            </div>
        `;
        dynamicDiv.innerHTML = endHtml;
        document.getElementById('restartBtn')?.addEventListener('click', restartGame);
        return;
    }

    // Monta cena normal com opções
    let optionsHtml = '';
    scene.options.forEach((opt, idx) => {
        const prefixLetter = String.fromCharCode(65 + idx); // A, B, C...
        optionsHtml += `
            <div class="choice-btn" data-next="${opt.nextScene}" data-time="${opt.timeEffect || 0}">
                <span class="choice-prefix">${prefixLetter}</span>
                <span>${opt.text}</span>
            </div>
        `;
    });

    const fullHtml = `
        <div class="story-area">
            <div class="question">⚡ ${scene.title}</div>
            <div class="description">${scene.desc}</div>
        </div>
        <div class="choices" id="choicesContainer">
            ${optionsHtml}
        </div>
    `;
    dynamicDiv.innerHTML = fullHtml;

    // Adicionar eventos nos botões
    const btns = document.querySelectorAll('.choice-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!gameActive) return;
            const nextSceneId = btn.getAttribute('data-next');
            const timeEffect = parseInt(btn.getAttribute('data-time')) || 0;
            applyTimeEffect(timeEffect);
            if (gameActive && nextSceneId && scenes[nextSceneId]) {
                currentSceneId = nextSceneId;
                renderScene(currentSceneId);
            } else if (gameActive && nextSceneId && !scenes[nextSceneId]) {
                console.warn('Cena não encontrada');
            }
        });
    });
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (gameActive && remainingSeconds > 0) {
            remainingSeconds--;
            updateTimerUI();
            if (remainingSeconds === 0) {
                endGameByTime();
            }
        } else if (!gameActive && timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

function restartGame() {
    // Reset global
    if (timerInterval) clearInterval(timerInterval);
    remainingSeconds = 6 * 3600;
    currentSceneId = 'start';
    gameActive = true;
    updateTimerUI();
    renderScene('start');
    startTimer();
}

// Inicialização
renderScene('start');
startTimer();
