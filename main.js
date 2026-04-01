/** 
 * @typedef {Object} Profile
 * @property {string} name - Full Name
 * @property {string} role - Professional Role
 * @property {string} host - Infrastructure info
 * @property {string} stack - Tech stack list
 */
const profileData = {
    name: 'Thierry Rene Matos',
    user: 'thierry',
    hostname: 'ubuntu-server',
    os: 'Ubuntu 24.04 LTS / Linux',
    host: 'VPS on Digital Ocean / Coolify',
    role: 'Senior Web Dev — PHP / Python / JS',
    work: '@stealthelook',
    workInstagram: 'https://instagram.com/stealthelook',
    workUrl: 'https://stealthelook.com.br',
    stack: 'PHP, JavaScript, React.js, Laravel, Vue.js, AWS, GA4'
};

/** @type {Object} Biography data for the SDD pattern */
const aboutData = {
    title: 'Sobre Thierry Rene Matos',
    content: `Sou um desenvolvedor Full-Stack com mais de 15 anos de experiência, especializado em arquiteturas de alta performance e ecossistemas PHP moderno. Atualmente lidero a frente de tecnologia no Steal The Look, onde gerencio infraestrutura AWS e otimizações críticas de performance. Minha paixão reside em transformar desafios complexos em interfaces fluidas e sistemas escaláveis.`,
    curiosities: [
        'Entusiasta de Terminais e Automação',
        'Fã de Minimalismo Digital',
        'Mestre em Debugging sob pressão',
        'Adepto de Vanilla JS quando a performance é lei'
    ]
};

const contacts = [
    { platform: 'E-mail', link: 'mailto:contato@thierryrene.com', display: 'contato@thierryrene.com', icon: '📧' },
    { platform: 'GitHub', link: 'https://github.com/thierryrene', display: 'github.com/thierryrene', icon: '🐙' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/thierryrene', display: 'linkedin.com/in/thierryrene', icon: '🔗' },
    { platform: 'Instagram', link: 'https://instagram.com/thierryrene', display: '@thierryrene', icon: '📸' }
];

const experiences = [
    { 
        role: 'Senior Web Developer', 
        company: 'Steal The Look', 
        period: 'Set 2016 - Presente',
        description: 'Responsável por toda área de Tecnologia no STEAL THE LOOK, com foco no ambiente web/digital. Administração e manutenção dos servidores na AWS, reparos e otimizações tanto no front quanto back end do website, e proposição de novas soluções tecnológicas.',
        achievements: [
            'Gestão de servidores em nuvem (AWS) focando em alta disponibilidade e performance.',
            'Otimizações intensivas front-end e back-end mirando SEO e métricas do Core Web Vitals (CWV).',
            'Desenvolvimento focado em estabilidade multiplataforma e adoção de novas stacks.'
        ]
    },
    { 
        role: 'Senior Web Developer', 
        company: 'Freelance', 
        period: 'Jan 2009 - Presente',
        description: 'Desenvolvimento Web Independente/Full-Stack atuando na construção de arquiteturas escaláveis.',
        achievements: [
            'Team Management e coordenação ágil em projetos paralelos.',
            'Ampla experiência em resolução de problemas técnicos complexos (Resolving Issues) sistêmicos.',
            'Criação de soluções personalizadas e e-commerces B2B integrando múltiplas linguagens e tecnologias.'
        ]
    },
    { 
        role: 'Analista de Suporte Técnico', 
        company: 'Sonda IT', 
        period: 'Dez 2013 - Fev 2016',
        description: 'Suporte técnico interno alocado diretamente nas operações do Banco PAN.',
        achievements: [
            'Habilidades analíticas (Analytical Skills) investigando chamados técnicos recorrentes.',
            'Resolução de issues corporativos de missão crítica em ambiente bancário restrito.'
        ]
    },
    { 
        role: 'Assistente de Suporte', 
        company: 'Connectcom', 
        period: 'Dez 2012 - Dez 2013',
        description: 'Suporte técnico interno de Nível 1 alocado no Banco PAN.',
        achievements: [
            'Assistência técnica generalista voltada para softwares internos e fluxos operacionais de agência.'
        ]
    },
    { 
        role: 'Assistente de Service Desk', 
        company: 'Scopus Soluções em TI (Grupo Bradesco)', 
        period: 'Jun 2012 - Ago 2012',
        description: 'Responsável pelo atendimento técnico externo presencial aos caixas eletrônicos da rede Bradesco.',
        achievements: [
            'Atuação massiva em um projeto de atualização sistêmica vigente na malha de caixas do banco.',
            'Manutenção pesada substitutiva de hardware e reconfiguração segura das máquinas na rede bancária.'
        ]
    }
];

const projects = [
    { 
        title: 'Terminal Portfolio (Vanilla Edition)', 
        description: 'Um portfólio interativo baseado na web que simula de forma realista e imersiva um ambiente de terminal Ubuntu. Construído inteiramente com as APIs nativas do navegador, sem dependência de bibliotecas reativas, focando em performance absurda e manipulação de DOM inteligente.', 
        tags: ['Vanilla JS', 'Tailwind CSS', 'Web Components', 'HTML5', 'CSS Proxies'], 
        link: 'https://github.com/thierryrene/terminal-portfolio' 
    },
    { 
        title: 'High-Performance Octane API', 
        description: 'Microserviço de API REST escalável construída especificamente para suportar cargas maciças de concorrência. Utiliza o worker mode do Laravel Octane, operando nativamente sobre a infraestrutura do servidor Caddy/FrankenPHP para manter a aplicação bootada em memória.', 
        tags: ['Laravel', 'FrankenPHP', 'PostgreSQL', 'Redis', 'Go'], 
        link: '#' 
    },
    { 
        title: 'Sistema de Gestão Escolar (SGE Cloud)', 
        description: 'Plataforma SaaS multi-tenant focada na gestão integral académica de instituições de ensino, contemplando módulos pesados de emissão de notas, controle de presenças por biometria virtual e gestão de faturas recorrentes.', 
        tags: ['Vue.js 3', 'Inertia.js', 'Tailwind', 'PHP 8.2'], 
        link: '#' 
    }
];

const skills = [
    { category: 'Back-End & Bancos de Dados', skills: [
        { name: 'PHP / Laravel Ecosystem', level: 9 },
        { name: 'Node.js / Express', level: 7 },
        { name: 'PostgreSQL & MySQL', level: 8 },
        { name: 'Redis / Memcached caching', level: 7 }
    ]},
    { category: 'Front-End & Engenharia de UI', skills: [
        { name: 'JavaScript (ESNext/ES2022+)', level: 9 },
        { name: 'Vue.js 3 / Composition API', level: 8 },
        { name: 'Tailwind CSS / JIT Engine', level: 9 },
        { name: 'HTML5 & Web Components', level: 8 }
    ]},
    { category: 'DevOps & Infraestrutura Nuvem', skills: [
        { name: 'Linux Server Administration (Ubuntu)', level: 8 },
        { name: 'Docker / Containers Orchestration', level: 8 },
        { name: 'FrankenPHP / Caddy / Nginx', level: 7 },
        { name: 'CI/CD Pipelines (GitHub Actions)', level: 7 }
    ]}
];

const blogPosts = [
    { 
        id: 1, 
        date: '2024-03-20', 
        title: 'Explorando o High-Performance com FrankenPHP', 
        tags: ['PHP', 'DevOps', 'Performance Tuning'],
        content: '<p>O FrankenPHP chegou recentemente para mudar drasticamente as regras do jogo no vasto ecossistema PHP. Construído inteiramente em Go operando como um wrapper sobre o robusto e seguro servidor web Caddy, ele permite que as tradicionais aplicações PHP corram com uma performance que desafia linguagens compiladas, eliminando de vez a necessidade de gerenciar um servidor FastCGI (FPM) separado em processos complexos.</p><br><p>Neste artigo técnico, exploramos em grande profundidade como o "Worker Mode" do Laravel Octane tira o máximo proveito dessa arquitetura multithreaded inovadora, mantendo a aplicação inteiramente bootada e acessível em memória, reduzindo assim o overhead massivo de boot (framework bootstrapping) que ocorria tradicionalmente a cada requisição HTTP isolada. Em resumo: Adeus PHP-FPM, olá alta concorrência assíncrona.</p>'
    },
    { 
        id: 2, 
        date: '2024-02-15', 
        title: 'Configurando o Ubuntu Server para Workloads de Produção', 
        tags: ['Linux', 'Server Setup', 'Security', 'SysAdmin'],
        content: '<p>Muitos desenvolvedores juniores frequentemente perguntam a razão fundamental pela qual o Ubuntu Server continua a ser, ano após ano, o padrão indiscutível e de facto da indústria de infraestrutura cloud. A resposta repousa numa tríade irrefutável: na sua vasta e acessível documentação da comunidade, na estabilidade quase inquebrável de longo prazo (LTS releases), e na sua forte postura rigorosa em relação à segurança arquitetural por omissão (secure by default).</p><br><p>Neste extenso guia passo a passo, documentei a minha rotina pessoal e inegociável de <i>setup</i> de uma nova VPS bare-metal (como as geridas pelo ecossistema Coolify): cobrimos desde o estabelecimento das regras estritas base de firewall de rede (UFW), desativação forçada de logins via senha SSH mudando para chaves Ed25519, implementação do Fail2Ban, até à afinação complexa dos parâmetros da pilha TCP/IP da rede diretamente a nível de kernel (sysctl.conf) para conseguir acomodar workloads intensas de APIs modernas sob picos massivos de tráfego.</p>'
    },
    { 
        id: 3, 
        date: '2024-01-10', 
        title: 'A magia indomável do Tailwind CSS no ecossistema Laravel', 
        tags: ['Frontend', 'Laravel', 'CSS Architecture', 'Inertia.js'],
        content: '<p>A explosão de produtividade e velocidade iterativa que o Tailwind CSS traz ao ciclo de vida do desenvolvimento de UI, quando combinado habilmente com o motor de templates Blade ou ferramentas de ponte como o Inertia.js (alimentando Vue/React), roça o domínio do absurdo. Definitivamente, é o momento de esquecer para sempre ficheiros CSS gigantescos de milhares de linhas, o medo de classes globais vazadas corrompendo o design, e a temida pergunta existencial: "Será que posso apagar com segurança esta classe sem partir o site numa página que eu já não visito há meses?".</p><br><p>A abordagem e o foco purista no "utility-first" permite uma prototipagem e construção visual diretamente à velocidade do pensamento. Ao manter o estilo e a responsividade intimamente acoplados e contextualizados à própria marcação (ficheiros HTML/Vue), a refatoração e manutenção de componentes torna-se altamente previsível, localizada e segura. A performance final gerada em produção, graças à compilação instantânea e purga automática de classes não utilizadas pelo implacável motor JIT (Just-In-Time) do Tailwind, garante um pacote de folhas de estilo que raramente excede meros kilobytes, superando de longe qualquer biblioteca de componentes CSS monolítica tradicional.</p>'
    }
];

/* =========================================
 * 2. THEMES CONFIGURATION
 * ========================================= */
const themesConfig = {
  'dracula':       { bg: '#282a36', fg: '#f8f8f2', green: '#50fa7b', blue: '#8be9fd', purple: '#bd93f9', yellow: '#f1fa8c',   header: '#1e2030', border: 'rgba(255,255,255,0.07)' },
  'dracula-light': { bg: '#f8f8f2', fg: '#282a36', green: '#1a9a3b', blue: '#067ea2', purple: '#6b3fa0', yellow: '#b89209',   header: '#e2e8f0', border: 'rgba(0,0,0,0.10)' },
  'monokai':       { bg: '#272822', fg: '#f8f8f2', green: '#a6e22e', blue: '#66d9ef', purple: '#ae81ff', yellow: '#e6db74',   header: '#1c1c18', border: 'rgba(255,255,255,0.07)' },
  'monokai-light': { bg: '#fafafa', fg: '#272822', green: '#7db90b', blue: '#0594ab', purple: '#8e4aff', yellow: '#d2b610',   header: '#e8e8e4', border: 'rgba(0,0,0,0.10)' }
};

/* =========================================
 * 3. STATE MACHINE / PROXY
 * ========================================= */
const initialState = {
    theme: localStorage.getItem('terminal_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dracula' : 'dracula-light'),
    history: [],
    historyIndex: -1,
    currentPath: '~'
};

const state = new Proxy(initialState, {
    set(target, property, value) {
        target[property] = value;
        if (property === 'theme') {
            localStorage.setItem('terminal_theme', value);
            const themeTheme = new CustomEvent('themeChanged', { detail: value });
            window.dispatchEvent(themeTheme);
        }
        return true;
    }
});

// Theme logic bindings
window.addEventListener('themeChanged', (e) => {
    const themeVals = themesConfig[e.detail];
    if(!themeVals) return;
    const root = document.querySelector('terminal-window');
    const macWin = document.querySelector('.mac-window');
    const winHeader = document.querySelector('.win-header');
    const quickActions = document.querySelector('quick-actions');

    for (const [key, val] of Object.entries(themeVals)) {
        root.style.setProperty(`--term-${key}`, val);
    }
    
    // Propaga header e border para toda a janela
    if (macWin) macWin.style.setProperty('--term-header', themeVals.header);
    if (winHeader) {
        winHeader.style.backgroundColor = themeVals.header;
        winHeader.style.borderBottomColor = themeVals.border;
    }
    if (quickActions) {
        quickActions.style.backgroundColor = themeVals.header;
        quickActions.style.borderTopColor = themeVals.border;
    }
    
    // Adapta o wrapper .mac-window bg para combinar com o tema
    if (macWin) macWin.style.backgroundColor = themeVals.bg;
});

// Initialize Theme immediately to prevent FOUC
window.dispatchEvent(new CustomEvent('themeChanged', { detail: state.theme }));

/* =========================================
 * 4. CORE TERMINAL APIS
 * ========================================= */
const outputElem = document.getElementById('output');
const inputElem = document.getElementById('cmd-input');
const ghostElem = document.getElementById('ghost-text');

// Auto Scroll logic using Mutation Observer
const observer = new MutationObserver(() => {
    outputElem.scrollTop = outputElem.scrollHeight;
});
observer.observe(outputElem, { childList: true, subtree: true });

// Focus Hack
window.addEventListener('click', (e) => {
    // Prevent if clicking a link or a button
    if(!e.target.closest('a') && !e.target.closest('button')) {
        inputElem.focus();
    }
});

function typeCharVisual(char) {
  inputElem.value += char;
  const ev = new Event('input', { bubbles: true});
  inputElem.dispatchEvent(ev);
}

function executeCommandVisual(cmdStr) {
  inputElem.value = cmdStr;
  setTimeout(() => {
    const ev = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    inputElem.dispatchEvent(ev);
  }, 50);
}

// Quick Actions Builder
const availableCommands = ['help', 'about', 'neofetch', 'ls', 'projects', 'experience', 'skills', 'blog', 'contact', 'theme', 'shortcuts', 'clear'];
const actionsBar = document.getElementById('quick-actions');

availableCommands.forEach(cmd => {
    const btn = document.createElement('button');
    btn.className = 'bg-white/10 hover:bg-term-green/20 hover:text-term-green text-term-fg px-3 py-1 rounded text-xs transition-colors shrink-0 outline-none focus:ring-1 focus:ring-term-green';
    btn.textContent = cmd;
    btn.setAttribute('aria-label', `Executar comando ${cmd}`);
    btn.onclick = () => { executeCommandVisual(cmd); };
    actionsBar.appendChild(btn);
});

// Analytics: Track command execution as a pageview
function trackCommand(cmd) {
    if (typeof gtag !== 'function') return;
    const cleanCmd = cmd.trim().split(' ')[0].toLowerCase();
    
    // Ignore meta-commands like clear or invalid ones
    const ignored = ['clear', 'sudo', 'ls', 'exit'];
    if (ignored.includes(cleanCmd)) return;

    gtag('event', 'screen_view', {
        app_name: 'TerminalPortfolio',
        screen_name: cleanCmd,
        page_location: window.location.href,
        page_path: '/#' + cleanCmd,
        page_title: `Terminal - ${cleanCmd.charAt(0).toUpperCase() + cleanCmd.slice(1)}`
    });
}

// Deep Linking: Execute command from URL hash
function handleDeepLink() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && availableCommands.includes(hash)) {
        setTimeout(() => { executeCommandVisual(hash); }, 500);
    }
}

// Write simple line
function writeLine(html, cssClass = '') {
  const div = document.createElement('div');
  div.className = `slide-in my-0.5 ${cssClass}`;
  div.innerHTML = html;
  outputElem.appendChild(div);
  return div;
}

// Levenshtein / Did you mean
function getClosestMatch(target, candidates) {
  const distances = candidates.map(str => {
    const tLen = target.length; const sLen = str.length;
    const matrix = Array(sLen + 1).fill().map(() => Array(tLen + 1).fill(0));
    for(let i=0; i<=sLen; i++) matrix[i][0] = i;
    for(let j=0; j<=tLen; j++) matrix[0][j] = j;
    for(let i=1; i<=sLen; i++){
      for(let j=1; j<=tLen; j++){
        if(str[i-1] === target[j-1]) matrix[i][j] = matrix[i-1][j-1];
        else matrix[i][j] = Math.min(matrix[i-1][j-1]+1, Math.min(matrix[i][j-1]+1, matrix[i-1][j]+1));
      }
    }
    return {str, dist: matrix[sLen][tLen]};
  });
  distances.sort((a,b) => a.dist - b.dist);
  return distances[0].dist <= 2 ? distances[0].str : null;
}

// Ghost Auto-complete logic
inputElem.addEventListener('input', () => {
    const val = inputElem.value;
    if (!val) { ghostElem.textContent = ''; return; }
    const match = availableCommands.find(c => c.startsWith(val));
    if (match) {
        ghostElem.textContent = match;
    } else {
        ghostElem.textContent = '';
    }
});

// History and Keys
inputElem.addEventListener('keydown', (e) => {
    // Blog Interactive Mode
    if (state.blogInteractive) {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.blogIndex > 0) { state.blogIndex--; state.updateBlogList(); }
            return;
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (state.blogIndex < blogPosts.length - 1) { state.blogIndex++; state.updateBlogList(); }
            return;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const postId = blogPosts[state.blogIndex].id;
            state.blogInteractive = false;
            executeCommandVisual(`read ${postId}`);
            return;
        } else if (e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Meta' && e.key !== 'Alt') {
            state.blogInteractive = false; // abort interactive mode
        }
    }

    // Linux Native Shortcuts
    if (e.ctrlKey) {
        const k = e.key.toLowerCase();
        if (k === 'l') { // Clear screen
            e.preventDefault();
            executeCommandVisual('clear');
            return;
        } else if (k === 'c') { // Cancel line
            e.preventDefault();
            writeLine(`<span class="hidden sm:inline"><span class="text-term-green font-bold">thierry</span><span class="text-term-fg opacity-40">@</span><span class="text-term-blue">thierryrenematos.tec.br</span><span class="text-term-fg opacity-40">:</span><span class="text-term-purple font-bold">~</span></span><span class="text-term-fg text-term-green sm:text-term-fg font-bold sm:font-normal"> $</span> ${inputElem.value}^C`);
            inputElem.value = '';
            inputElem.dispatchEvent(new Event('input'));
            return;
        } else if (k === 'u') { // Clear line before cursor
            e.preventDefault();
            inputElem.value = '';
            inputElem.dispatchEvent(new Event('input'));
            return;
        } else if (k === 'w') { // Delete previous word
            e.preventDefault();
            const words = inputElem.value.trimEnd().split(' ');
            words.pop();
            inputElem.value = words.join(' ') + (words.length > 0 ? ' ' : '');
            inputElem.dispatchEvent(new Event('input'));
            return;
        }
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        if (ghostElem.textContent && ghostElem.textContent.length > inputElem.value.length) {
            inputElem.value = ghostElem.textContent;
            ghostElem.textContent = '';
        }
    } else if (e.key === 'Enter') {
        const raw = inputElem.value.trim();
        inputElem.value = '';
        ghostElem.textContent = '';
        if (raw) {
            writeLine(`<span class="hidden sm:inline"><span class="text-term-green font-bold">thierry</span><span class="text-term-fg opacity-40">@</span><span class="text-term-blue">thierryrenematos.tec.br</span><span class="text-term-fg opacity-40">:</span><span class="text-term-purple font-bold">~</span></span><span class="text-term-fg text-term-green sm:text-term-fg font-bold sm:font-normal"> $</span> ${raw}`);
            state.history.push(raw);
            state.historyIndex = state.history.length;
            processCommand(raw);
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (state.historyIndex > 0) {
            state.historyIndex--;
            inputElem.value = state.history[state.historyIndex];
            inputElem.dispatchEvent(new Event('input'));
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (state.historyIndex < state.history.length - 1) {
            state.historyIndex++;
            inputElem.value = state.history[state.historyIndex];
        } else {
            state.historyIndex = state.history.length;
            inputElem.value = '';
        }
        inputElem.dispatchEvent(new Event('input'));
    }
});

/* =========================================
 * 5. COMMAND PROCESSORS MODULES
 * ========================================= */

// DOM Text Node Scrambler (for safe text animation over HTML tags)
function applyTextNodeAnimation(element, type) {
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    let n;
    while (n = walk.nextNode()) {
        if (n.nodeValue.trim().length > 0) {
            nodes.push({ node: n, original: n.nodeValue });
            n.nodeValue = ' '; // hide initially
        }
    }

    if (type === 'typewriter') {
        let nIdx = 0;
        let charIdx = 0;
        const iv = setInterval(() => {
            if (nIdx >= nodes.length) { clearInterval(iv); return; }
            let cur = nodes[nIdx];
            cur.node.nodeValue = cur.original.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx > cur.original.length) { nIdx++; charIdx = 0; }
        }, 5);
    } else if (type === 'matrix') {
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*';
        let iter = 0;
        const totalLen = nodes.reduce((a, c) => a + c.original.length, 0);

        const iv = setInterval(() => {
            let globalRevealed = 0;
            nodes.forEach(item => {
                let mapped = '';
                for (let i = 0; i < item.original.length; i++) {
                    const c = item.original[i];
                    if (c === ' ' || c === '\n') { mapped += c; globalRevealed++; continue; }
                    if (globalRevealed < iter) { mapped += c; globalRevealed++; continue; }
                    mapped += chars[Math.floor(Math.random() * chars.length)];
                    globalRevealed++;
                }
                item.node.nodeValue = mapped;
            });
            if (iter >= totalLen) clearInterval(iv);
            iter += 3;
        }, 20);
    }
}

const commandsStrategy = {
    'help': () => {
        const tpl = document.getElementById('tpl-cmds').content.cloneNode(true);
        const container = tpl.querySelector('div');
        const map = [
            {c: 'help', e: '🛟', d: 'Lista todos os comandos'},
            {c: 'about', e: '👤', d: 'Sobre mim / Biografia'},
            {c: 'neofetch', e: '🐧', d: 'Informações do sistema/perfil'},
            {c: 'ls', e: '📂', d: 'Lista o diretório atual'},
            {c: 'projects', e: '💻', d: 'Portfólio open-source'},
            {c: 'experience', e: '👔', d: 'Histórico profissional'},
            {c: 'skills', e: '🛠️', d: 'Matriz de habilidades'},
            {c: 'blog', e: '📝', d: 'Artigos técnicos'},
            {c: 'contact', e: '📞', d: 'Minhas redes e conexões'},
            {c: 'theme', e: '🎨', d: 'Muda cor (dracula, monokai...)'},
            {c: 'shortcuts', e: '⌨️', d: 'Teclas de atalho'},
            {c: 'clear', e: '🗑️', d: 'Limpo o console'}
        ];
        map.forEach(item => {
            const elDiv = document.createElement('div');
            elDiv.className = 'flex items-center gap-2 cursor-pointer hover:underline';
            elDiv.onclick = () => executeCommandVisual(item.c);
            elDiv.innerHTML = `<span class="text-term-yellow w-24">${item.c}</span> <span>${item.e}</span> <span class="text-term-fg opacity-70">${item.d}</span>`;
            container.appendChild(elDiv);
        });
        outputElem.appendChild(tpl);
    },
    'about': () => {
        const d = aboutData;
        writeLine(d.title, 'text-term-cyan font-bold text-lg mt-4 mb-2');
        writeLine(d.content, 'text-term-fg opacity-80 leading-relaxed mb-4');
        writeLine('Curiosidades:', 'text-term-yellow font-bold mb-2');
        d.curiosities.forEach(c => writeLine(`> ${c}`, 'text-term-fg opacity-70 ml-2'));
        writeLine('<br>');
    },
    'sobre': () => commandsStrategy.about(),
    'shortcuts': () => {
        writeLine('Atalhos de Teclado Disponíveis:', 'text-term-yellow font-bold mt-4 mb-2');
        
        const shortcutsMap = [
            { k: 'ArrowUp', d: 'Carrega o comando anterior do histórico' },
            { k: 'ArrowDown', d: 'Avança no histórico de comandos' },
            { k: 'Tab', d: 'Autocompleta o comando sugerido' },
            { k: 'Ctrl + L', d: 'Limpa a tela do terminal (clear)' },
            { k: 'Ctrl + C', d: 'Cancela a digitação atual e pula linha' },
            { k: 'Ctrl + U', d: 'Apaga toda a linha digitada' },
            { k: 'Ctrl + W', d: 'Apaga a última palavra digitada' }
        ];

        shortcutsMap.forEach(s => {
            writeLine(`<span class="text-term-purple font-bold inline-block w-28 text-right pr-4">${s.k}</span> <span class="text-term-fg opacity-70">→ ${s.d}</span>`);
        });
        writeLine('<br>');
    },
    'clear': () => {
        outputElem.innerHTML = '';
    },
    'neofetch': () => {
        const tpl = document.getElementById('tpl-neofetch').content.cloneNode(true);
        const art = String.raw`
  _   _     _                      
 | |_| |__ (_) ___ _ __ _ __ _   _ 
 | __| '_ \| |/ _ \ '__| '__| | | |
 | |_| | | | |  __/ |  | |  | |_| |
  \__|_| |_|_|\___|_|  |_|   \__, |
                             |___/ `;
        const logoEl = tpl.querySelector('.logo-art');
        
        // Efeito Fixo: Matrix
        const chosen = 'matrix';

        if (chosen === 'typewriter') {
            logoEl.textContent = '';
            logoEl.classList.add('anim-pulse');
            let i = 0;
            const iv = setInterval(() => {
                if(i < art.length) { logoEl.textContent += art.charAt(i); i++; }
                else clearInterval(iv);
            }, 2); // typing speed
        } else if (chosen === 'matrix') {
            logoEl.textContent = art;
            logoEl.classList.add('anim-pulse');
            const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*';
            let iter = 0;
            const iv = setInterval(() => {
                logoEl.textContent = art.split('').map((c, i) => {
                    if (c === ' ' || c === '\n') return c;
                    if (i < iter) return c;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                if (iter >= art.length) clearInterval(iv);
                iter += 4;
            }, 20); // matrix decode speed
        } else {
            logoEl.textContent = art;
            logoEl.classList.add(`anim-${chosen}`);
        }
        const hd = tpl.querySelector('.host-data');
        const d = profileData;
        const addRow = (k, v, isLink) => {
            const vk = document.createElement('div'); vk.className = 'text-term-purple font-bold text-right pt-[2px]'; vk.textContent = k;
            const vv = document.createElement('div'); vv.className = 'text-term-fg opacity-80';
            if(isLink) vv.innerHTML = `<a href="${v}" target="_blank" class="hover:underline text-term-blue">${v}</a>`;
            else vv.innerHTML = v;
            hd.appendChild(vk); hd.appendChild(vv);
        };
        
        addRow('OS', d.os); 
        addRow('Host', d.host); 
        
        // Formata "User"
        const userHTML = `<span class="text-term-green font-bold">thierry</span>@ubuntu`;
        addRow('User', userHTML);
        
        // Work: @instagram | website.com.br — em linha única com dois links
        const workHTML = `<a href="${d.workInstagram}" target="_blank" class="hover:underline text-term-yellow font-bold">${d.work}</a><span class="text-term-fg opacity-30 mx-2">|</span><a href="${d.workUrl}" target="_blank" class="hover:underline text-term-blue">${d.workUrl.replace('https://', '')}</a>`;
        addRow('Work', workHTML);
        
        // Mobile: Role completo. Desktop: título em destaque + sufixo.
        const roleHighlight = `<span class="text-term-fg font-bold">Senior Web Dev</span>`;
        const roleSuffix = d.role.replace('Senior Web Dev', '').trim(); // "— PHP / Python / JS"
        
        // Linha única mobile (só o título)
        const combinedHTML = `<span class="sm:hidden">${roleHighlight}</span>`;
        // Desktop: título + sufixo completo
        const roleHTML = `${roleHighlight}<span class="hidden sm:inline"> ${roleSuffix}</span>`;
        
        addRow('Role', `${combinedHTML}<span class="hidden sm:inline">${roleHTML}</span>`);
        

        // Renderiza micro-tags (badges) — menores no mobile
        const stackHTML = d.stack
            .split(', ')
            .map(tag => `<span class="bg-white/10 px-1 sm:px-1.5 py-0.5 rounded text-[10px] sm:text-xs text-term-blue mr-0.5 sm:mr-1 mt-0.5 sm:mt-1 inline-block border border-white/5 shadow-sm shadow-black/20">${tag}</span>`)
            .join('');
        addRow('Stack', stackHTML);

        // Paleta de cores do tema ativo
        const currentTheme = themesConfig[state.theme];
        const paletteColors = [
            { color: currentTheme.bg,     label: 'bg' },
            { color: currentTheme.fg,     label: 'fg' },
            { color: currentTheme.green,  label: 'green' },
            { color: currentTheme.blue,   label: 'blue' },
            { color: currentTheme.purple, label: 'purple' },
            { color: currentTheme.yellow, label: 'yellow' },
        ];
        const paletteHTML = paletteColors.map(p =>
            `<span data-palette-key="${p.label}" 
                   title="Clique para alternar o tema (${p.label})" 
                   style="background: var(--term-${p.label}); border: 1px solid rgba(255,255,255,0.15);" 
                   class="inline-block w-5 h-5 rounded-sm mr-1 align-middle cursor-pointer hover:scale-110 active:scale-95 shadow-sm transition-all duration-200"
                   onclick="const themes=Object.keys(themesConfig); const idx=(themes.indexOf(state.theme)+1)%themes.length; state.theme=themes[idx];"></span>`
        ).join('');
        
        const paletteHeader = `<div class="text-[10px] uppercase opacity-40 mb-1">Active Theme Palette</div>`;
        const paletteFooter = `<div class="text-[10px] opacity-20 italic mt-1 font-sans">Click on blocks to switch colors</div>`;
        addRow('Colors', paletteHeader + paletteHTML + paletteFooter);

        // Espelhando o efeito do bloco principal no painel secundário 
        if (['typewriter', 'matrix'].includes(chosen)) {
            hd.classList.add('anim-pulse'); // base light
            applyTextNodeAnimation(hd, chosen);
        } else {
            hd.classList.add(`anim-${chosen}`);
        }

        outputElem.appendChild(tpl);
    },
    'ls': () => {
         const tpl = document.getElementById('tpl-ls').content.cloneNode(true);
         const cont = tpl.querySelector('div');
         const files = [
            {n:'projects/', t:'d', c:'projects'},
            {n:'skills/', t:'d', c:'skills'},
            {n:'blog/', t:'d', c:'blog'},
            {n:'experience.log', t:'f', c:'experience'},
            {n:'contact.txt', t:'f', c:'contact'}
         ];
         files.forEach(f => {
             const s = document.createElement('span');
             s.className = `cursor-pointer hover:underline ${f.t==='d' ? 'text-term-blue font-bold' : 'text-term-green'}`;
             s.textContent = f.n;
             s.onclick = () => executeCommandVisual(f.c);
             cont.appendChild(s);
         });
         outputElem.appendChild(tpl);
    },
    'experience': () => {
        const tpl = document.getElementById('tpl-experience').content.cloneNode(true);
        const cont = tpl.querySelector('.experience-container');
        experiences.forEach(e => {
            const item = document.createElement('div');
            item.className = 'border-l-2 border-term-purple pl-4 ml-2 space-y-2';
            let html = `<div class="font-bold text-term-cyan">${e.role}</div>
                        <div class="text-term-fg opacity-50 font-mono">${e.company} · ${e.period}</div>
                        <p class="text-term-fg opacity-80 mt-1">${e.description}</p>
                        <ul class="text-term-fg opacity-70 mt-2 space-y-1">`;
            e.achievements.forEach(a => { html += `<li>> ${a}</li>`; });
            html += `</ul>`;
            item.innerHTML = html;
            cont.appendChild(item);
        });
        outputElem.appendChild(tpl);
    },
    'projects': () => {
        const tpl = document.getElementById('tpl-projects').content.cloneNode(true);
        const cont = tpl.querySelector('.projects-container');
        projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'border border-white/10 p-4 rounded bg-white/5 flex flex-col justify-between';
            let tagsHtml = p.tags.map(t => `<span class="rounded-full px-2 py-1 text-[10px] bg-white/10 text-term-fg opacity-70">${t}</span>`).join('');
            card.innerHTML = `
                <div>
                    <a href="${p.link}" target="_blank" class="font-bold text-term-green hover:underline">${p.title}</a>
                    <p class="text-term-fg opacity-70 mt-2 mb-4 leading-relaxed">${p.description}</p>
                </div>
                <div class="flex flex-wrap gap-1 mt-auto shrink-0">${tagsHtml}</div>
            `;
            cont.appendChild(card);
        });
        outputElem.appendChild(tpl);
    },
    'skills': () => {
        const tpl = document.getElementById('tpl-skills').content.cloneNode(true);
        const cont = tpl.querySelector('.skills-container');
        skills.forEach(c => {
            const block = document.createElement('div');
            let h = `<div class="text-term-yellow font-bold mb-2 uppercase border-b border-white/10 pb-1 inline-block">${c.category}</div><div class="space-y-1">`;
            c.skills.forEach(s => {
                const bar = '█'.repeat(s.level) + '░'.repeat(10 - s.level);
                h += `<div class="flex justify-between max-w-sm">
                        <span class="text-term-fg opacity-80">${s.name}</span>
                        <span class="text-term-blue font-mono">[${bar}] ${s.level}/10</span>
                      </div>`;
            });
            h += `</div>`;
            block.innerHTML = h;
            cont.appendChild(block);
        });
        outputElem.appendChild(tpl);
    },
    'blog': () => {
        const tpl = document.getElementById('tpl-blog-list').content.cloneNode(true);
        const cont = tpl.querySelector('.blog-container');
        const dFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' });
        
        state.blogInteractive = true;
        state.blogIndex = 0;

        const renderList = () => {
            cont.innerHTML = '';
            blogPosts.forEach((p, idx) => {
                 const row = document.createElement('div');
                 const dateReal = new Date(p.date);
                 const isSel = idx === state.blogIndex;
                 
                 row.className = `cursor-pointer transition-colors p-2 rounded flex items-center gap-4 border ${isSel ? 'bg-white/10 border-white/20 scale-[1.01]' : 'bg-transparent border-transparent hover:bg-white/5'} transform`;
                 
                 row.innerHTML = `<span class="${isSel ? 'text-term-green' : 'text-term-yellow'} w-8 shrink-0 font-bold">${isSel ? '▶' : '#'} ${p.id}</span>
                                  <span class="text-term-comment text-xs shrink-0 w-24">${dFormat.format(dateReal)}</span>
                                  <span class="${isSel ? 'text-term-green font-bold' : 'text-term-fg opacity-80'} truncate">${p.title}</span>`;
                 
                 row.onclick = () => {
                     state.blogInteractive = false;
                     executeCommandVisual(`read ${p.id}`);
                 };
                 cont.appendChild(row);
            });
            const hint = document.createElement('div');
            hint.className = 'text-term-comment text-xs italic mt-2 ml-2 animate-pulse';
            hint.textContent = "↓ Dica: Use as setas (CIMA/BAIXO) para navegar e ENTER para ler o post selecionado.";
            cont.appendChild(hint);
        };
        
        state.updateBlogList = renderList;
        renderList();
        outputElem.appendChild(tpl);
    },
    'contact': () => {
        const tpl = document.getElementById('tpl-contact').content.cloneNode(true);
        const cont = tpl.querySelector('.contact-container');
        contacts.forEach(c => {
             cont.innerHTML += `<div class="text-right pr-2 text-term-cyan">${c.icon} ${c.platform}</div>`;
             cont.innerHTML += `<div><a href="${c.link}" target="_blank" class="hover:underline text-term-fg opacity-80 hover:text-term-green hover:opacity-100">${c.display}</a></div>`;
        });
        outputElem.appendChild(tpl);
    },
    'read': (args) => {
        if(!args || args.length === 0) {
            writeLine('Bash: read: Esperava o argumento <id>', 'text-term-red font-bold');
            return;
        }
        const pId = parseInt(args[0]);
        const post = blogPosts.find(p => p.id === pId);
        if(!post) {
            writeLine(`Bash: read: Artigo com ID '${args[0]}' não encontrado.`, 'text-term-red font-bold');
            return;
        }
        const tpl = document.getElementById('tpl-post').content.cloneNode(true);
        tpl.querySelector('.title-el').innerHTML = post.title;
        tpl.querySelector('.tags-el').innerHTML = post.tags.map(t => `<span class="bg-term-purple/20 text-term-purple px-2 py-0.5 rounded">${t}</span>`).join('');
        tpl.querySelector('.content-el').innerHTML = post.content;
        tpl.querySelector('.btn-back').onclick = () => executeCommandVisual('blog');
        outputElem.appendChild(tpl);
    },
    'theme': (args) => {
        if(!args || args.length === 0) {
            writeLine(`Temas suportados: ${Object.keys(themesConfig).join(', ')}. Uso: theme <nome>`, 'text-term-fg opacity-70');
            return;
        }
        const t = args[0].toLowerCase();
        if(!themesConfig[t]) {
            const best = getClosestMatch(t, Object.keys(themesConfig));
            let out = `Tema '${t}' não localizado.`;
            if(best) out += ` Você quis dizer '${best}'?`;
            writeLine(out, 'text-term-red');
        } else {
            state.theme = t;
            writeLine(`Tema ativado: ${t}`, 'text-term-green');
        }
    }
};

function processCommand(raw) {
    const parts = raw.split(' ').filter(p => p.trim());
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if(cmd.startsWith('sudo')) {
        writeLine('[ERROR] thierry is not in the sudoers file. This incident will be reported to the sysadmin.', 'text-term-red font-bold bg-term-red/10 px-2 py-1 inline-block mt-2 rounded');
        return;
    }

    if(commandsStrategy[cmd]) {
        // Track analytics and update URL for meaningful content commands
        const trackable = ['blog', 'projects', 'skills', 'experience', 'contact', 'help', 'neofetch', 'shortcuts', 'theme'];
        if (trackable.includes(cmd)) {
            if (window.location.hash !== `#${cmd}`) {
                history.pushState(null, null, `#${cmd}`);
            }
            trackCommand(cmd);
        }
        
        commandsStrategy[cmd](args);
    } else {
        const suggestion = getClosestMatch(cmd, availableCommands);
        let msg = `bash: ${cmd}: command not found.`;
        if (suggestion) {
            msg += ` Did you mean '${suggestion}'?`;
        }
        writeLine(msg, 'text-term-red');
    }
}

/* =========================================
 * 6. BOOT SEQUENCE (Immersive Simulation)
 * ========================================= */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Allow cancellation of boot animation
const bootControl = { canceled: false };
const abortBoot = () => { bootControl.canceled = true; };
window.addEventListener('keydown', abortBoot, {once:true});
window.addEventListener('click', abortBoot, {once:true});

async function startBootSequence() {
    const lines = [
        "Initializing BIOS Configuration... [ OK ]",
        "Loading CPU Microcode Updates... [ OK ]",
        "Mounted /home/thierry/workspace... [ OK ]",
        "Loading Kernel Modules... [ OK ]",
        "Fetching Remote Containers (Docker)... [ OK ]",
        "Starting FrankenPHP/Octane Daemon... [ OK ]",
        "Initializing Tailwind JIT Engine... [ OK ]",
        "Loading Matrix Weights & AI Subroutines... [ OK ]",
        "Reached target Graphical Interface... [ OK ]"
    ];
    
    for(let line of lines) {
        if(bootControl.canceled) break;
        const formatted = line.replace('[ OK ]', '<span class="text-term-green font-bold">[ OK ]</span>');
        writeLine(formatted, 'text-term-fg opacity-50 text-xs sm:text-sm mb-1');
        await sleep(30 + Math.random() * 120);
    }

    if(!bootControl.canceled) {
        let barElem = writeLine("", 'text-term-yellow text-xs sm:text-sm font-mono mt-2 mb-4 opacity-90');
        const barLen = 25;
        for(let i = 0; i <= 100; i += Math.floor(Math.random() * 10) + 2) {
            if(bootControl.canceled) break;
            if(i > 100) i = 100;
            const filled = Math.floor((i / 100) * barLen);
            const empty = barLen - filled;
            const barHTML = '█'.repeat(filled) + '░'.repeat(empty);
            barElem.innerHTML = `Booting Shell Environment... <span class="text-term-green">[${barHTML}]</span> ${i}%`;
            await sleep(30 + Math.random() * 40);
        }
        await sleep(400);
    }
    
    commandsStrategy.clear();
    commandsStrategy.neofetch();
    writeLine("<i>Ambiente pronto. Digite 'help' para iniciar.</i>", "text-term-fg opacity-40 text-xs sm:text-sm my-4");
    
    // Suporte a Deep Linking (executa comando se houver hash na URL)
    handleDeepLink();
    
    // Remove cancel listeners so real clicks work
    window.removeEventListener('keydown', abortBoot);
    window.removeEventListener('click', abortBoot);
    
    // Trigger focus
    inputElem.focus();
}

// Launch
window.onload = startBootSequence;
