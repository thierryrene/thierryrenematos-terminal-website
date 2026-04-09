/* =========================================
 * 1. DATA DICTIONARIES (Mock Data Schema)
 * ========================================= */
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

const lastFmEndpoint = 'https://ws.audioscrobbler.com/2.0/';

function getLastFmConfig() {
    return {
        endpoint: lastFmEndpoint,
        user: String(window.__LASTFM_USER__ || 'thierryrenematos').trim(),
        apiKey: String(window.__LASTFM_API_KEY__ || '').trim()
    };
}

const contacts = [
    { platform: 'E-mail', link: 'mailto:thierryrenesantosmatos+website@gmail.com', display: 'thierryrenesantosmatos+website@gmail.com', icon: '📧' },
    { platform: 'GitHub', link: 'https://github.com/thierryrene', display: 'github.com/thierryrene', icon: '🐙' },
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/thierryrene', display: 'linkedin.com/in/thierryrene', icon: '🔗' },
    { platform: 'Instagram', link: 'https://instagram.com/thierryrenematos', display: '@thierryrenematos', icon: '📸' }
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
        { name: 'Node.js / Express', level: 8 },
        { name: 'Go (Golang)', level: 7 },
        { name: 'PostgreSQL & MySQL', level: 8 },
        { name: 'Redis / Memcached', level: 7 }
    ]},
    { category: 'Front-End & Engenharia de UI', skills: [
        { name: 'JavaScript / TypeScript', level: 9 },
        { name: 'React.js / Next.js', level: 8 },
        { name: 'Vue.js 3 / Composition API', level: 8 },
        { name: 'Tailwind CSS', level: 9 }
    ]},
    { category: 'DevOps, Cloud & Dados', skills: [
        { name: 'AWS & Cloud Architecture', level: 8 },
        { name: 'Linux Server (Ubuntu)', level: 8 },
        { name: 'Docker / Containers', level: 8 },
        { name: 'Google Analytics (GA4) / SEO', level: 9 }
    ]}
];

const aboutData = [
    'Com mais de 15 anos de experiência no desenvolvimento web, sou apaixonado por criar soluções inovadoras e funcionais para o ecossistema digital. Minha missão é aplicar conhecimentos profundos em desenvolvimento back-end, dados e arquitetura para entregar produtos escaláveis que superem as expectativas de clientes e usuários.',
    'Atualmente atuo como Desenvolvedor Web Sênior no Steal The Look, uma plataforma líder em moda e lifestyle. Lá, sou o responsável integral pela área de Tecnologia com foco absoluto em ambientes web e digital de alta performance. Administro e mantemos infraestruturas de servidores na nuvem AWS, além de realizar otimizações estruturais tanto no Front-End quanto no Back-End.',
    'Minha principal frente de atuação engloba performance (resolvendo gargalos de Core Web Vitals), SEO e integração avançada de novas ferramentas, garantindo arquiteturas seguras, confiáveis e que acompanham a velocidade de crescimento do negócio.'
];

const aboutDataEn = [
    'With over 15 years of experience in web development, I am passionate about building innovative and reliable solutions for the digital ecosystem. My mission is to apply deep knowledge in back-end development, data, and architecture to deliver scalable products that exceed expectations.',
    'I currently work as a Senior Web Developer at Steal The Look, a leading fashion and lifestyle platform. I am responsible for the entire Technology area focused on high-performance web and digital environments, including AWS cloud infrastructure and structural optimizations on both Front-End and Back-End.',
    'My main focus includes performance optimization (solving Core Web Vitals bottlenecks), SEO, and advanced integration of new tools, ensuring secure, reliable architectures that keep up with business growth.'
];

const blogPosts = [
    { 
        id: 1, 
        slug: 'explorando-o-high-performance-com-frankenphp',
        date: '2024-03-20', 
        title: 'Explorando o High-Performance com FrankenPHP', 
        tags: ['PHP', 'DevOps', 'Performance Tuning'],
        content: '<p>O FrankenPHP chegou recentemente para mudar drasticamente as regras do jogo no vasto ecossistema PHP. Construído inteiramente em Go operando como um wrapper sobre o robusto e seguro servidor web Caddy, ele permite que as tradicionais aplicações PHP corram com uma performance que desafia linguagens compiladas, eliminando de vez a necessidade de gerenciar um servidor FastCGI (FPM) separado em processos complexos.</p><br><p>Neste artigo técnico, exploramos em grande profundidade como o "Worker Mode" do Laravel Octane tira o máximo proveito dessa arquitetura multithreaded inovadora, mantendo a aplicação inteiramente bootada e acessível em memória, reduzindo assim o overhead massivo de boot (framework bootstrapping) que ocorria tradicionalmente a cada requisição HTTP isolada. Em resumo: Adeus PHP-FPM, olá alta concorrência assíncrona.</p>'
    },
    { 
        id: 2, 
        slug: 'configurando-o-ubuntu-server-para-workloads-de-producao',
        date: '2024-02-15', 
        title: 'Configurando o Ubuntu Server para Workloads de Produção', 
        tags: ['Linux', 'Server Setup', 'Security', 'SysAdmin'],
        content: '<p>Muitos desenvolvedores juniores frequentemente perguntam a razão fundamental pela qual o Ubuntu Server continua a ser, ano após ano, o padrão indiscutível e de facto da indústria de infraestrutura cloud. A resposta repousa numa tríade irrefutável: na sua vasta e acessível documentação da comunidade, na estabilidade quase inquebrável de longo prazo (LTS releases), e na sua forte postura rigorosa em relação à segurança arquitetural por omissão (secure by default).</p><br><p>Neste extenso guia passo a passo, documentei a minha rotina pessoal e inegociável de <i>setup</i> de uma nova VPS bare-metal (como as geridas pelo ecossistema Coolify): cobrimos desde o estabelecimento das regras estritas base de firewall de rede (UFW), desativação forçada de logins via senha SSH mudando para chaves Ed25519, implementação do Fail2Ban, até à afinação complexa dos parâmetros da pilha TCP/IP da rede diretamente a nível de kernel (sysctl.conf) para conseguir acomodar workloads intensas de APIs modernas sob picos massivos de tráfego.</p>'
    },
    { 
        id: 3, 
        slug: 'a-magia-indomavel-do-tailwind-css-no-ecossistema-laravel',
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

const i18n = {
    'pt-BR': {
        inputTitle: 'Comando',
        runCommandAria: 'Executar comando {cmd}',
        helpTitle: 'Comandos Disponiveis',
        helpMeta: 'Clique em um comando para executar automaticamente.',
        helpDesc: {
            help: 'Lista todos os comandos',
            home: 'Recarrega o terminal e abre a tela inicial',
            about: 'Sobre mim e resumo profissional',
            ls: 'Lista o diretorio atual',
            projects: 'Portfolio open-source',
            experience: 'Historico profissional',
            skills: 'Matriz de habilidades',
            blog: 'Artigos tecnicos',
            contact: 'Minhas redes e conexoes',
            theme: 'Muda cor (dracula, monokai...)',
            shortcuts: 'Teclas de atalho',
            clear: 'Limpa o console'
        },
        shortcutsTitle: 'Atalhos de Teclado Disponiveis:',
        shortcutsMeta: 'Combinacoes para navegar e editar no terminal.',
        shortcutsMap: [
            { k: 'ArrowUp', d: 'Carrega o comando anterior do historico' },
            { k: 'ArrowDown', d: 'Avanca no historico de comandos' },
            { k: 'Tab', d: 'Autocompleta o comando sugerido' },
            { k: 'Ctrl + L', d: 'Limpa a tela do terminal (clear)' },
            { k: 'Ctrl + C', d: 'Cancela a digitacao atual e pula linha' },
            { k: 'Ctrl + U', d: 'Apaga toda a linha digitada' },
            { k: 'Ctrl + W', d: 'Apaga a ultima palavra digitada' }
        ],
        neofetchTitle: 'System Snapshot',
        neofetchMeta: 'Resumo rapido do ambiente e stack ativa.',
        lastFmTitle: 'Now Playing',
        lastFmLoading: 'Carregando atividade musical...',
        lastFmNowPlaying: 'Tocando agora',
        lastFmLastPlayed: 'Ultima tocada {elapsed}',
        lastFmUnavailable: 'Nao foi possivel consultar o Last.fm agora.',
        lastFmNoData: 'Nenhuma musica recente encontrada.',
        lastFmUnknownTrack: 'Faixa desconhecida',
        lastFmUnknownArtist: 'Artista desconhecido',
        lastFmUnknownAlbum: 'Album desconhecido',
        lastFmArtistLink: 'Artista no Last.fm',
        lastFmAlbumLink: 'Album no Last.fm',
        lsTitle: 'Directory Listing',
        lsMeta: 'Itens navegaveis do portfolio no contexto atual.',
        experienceTitle: 'Experiencia',
        experienceMeta: 'Linha do tempo profissional e principais entregas.',
        projectsTitle: 'Projetos',
        projectsMeta: 'Selecao de projetos e tecnologias utilizadas.',
        aboutTitle: 'About',
        aboutMeta: 'Resumo profissional e foco atual de atuacao.',
        skillsMeta: 'Matriz de habilidades por categoria com progresso em estilo terminal.',
        blogTitle: 'Blog',
        blogMeta: 'Lista de artigos tecnicos. Use setas para navegar e Enter para abrir.',
        blogHint: 'Dica: digite read <slug> para abrir direto.',
        blogNavHint: 'Dica: Use as setas (CIMA/BAIXO) para navegar e ENTER para ler o post selecionado.',
        contactTitle: 'Contato',
        contactMeta: 'Canais oficiais para conexao e networking.',
        readHint: 'Dica: use blog para voltar para a lista de artigos.',
        readBack: '[ ↩ Voltar para o indice ]',
        readArgError: 'Bash: read: Esperava o argumento <slug>',
        readNotFound: "Bash: read: Artigo com slug '{slug}' nao encontrado.",
        urlNotFoundTitle: '404 Not Found',
        urlNotFoundMeta: 'A URL solicitada nao existe neste terminal.',
        urlNotFoundBody: "A rota '{url}' nao foi encontrada.",
        urlNotFoundHint: "Use 'help' para ver comandos validos ou abra links no formato /#read/<slug>.",
        readAuthor: 'Autor',
        themeSupported: 'Temas suportados: {themes}. Uso: theme <nome>',
        themeNotFound: "Tema '{theme}' nao localizado.",
        didYouMean: " Voce quis dizer '{suggestion}'?",
        themeActivated: 'Tema ativado: {theme}',
        bootReady: "<i>Ambiente pronto. Digite 'help' para iniciar.</i>",
        langButton: 'PT-BR',
        langButtonTitle: 'Alternar idioma',
        modeDark: 'Dark',
        modeLight: 'Light',
        modeButtonTitle: 'Alternar tema claro/escuro'
    },
    en: {
        inputTitle: 'Command',
        runCommandAria: 'Run command {cmd}',
        helpTitle: 'Available Commands',
        helpMeta: 'Click a command to execute it automatically.',
        helpDesc: {
            help: 'List all commands',
            home: 'Reload terminal and open the initial screen',
            about: 'About me and professional summary',
            ls: 'List current directory',
            projects: 'Open-source portfolio',
            experience: 'Professional history',
            skills: 'Skills matrix',
            blog: 'Technical articles',
            contact: 'My networks and connections',
            theme: 'Change colors (dracula, monokai...)',
            shortcuts: 'Keyboard shortcuts',
            clear: 'Clear console'
        },
        shortcutsTitle: 'Available Keyboard Shortcuts:',
        shortcutsMeta: 'Combinations to navigate and edit inside the terminal.',
        shortcutsMap: [
            { k: 'ArrowUp', d: 'Load previous command from history' },
            { k: 'ArrowDown', d: 'Move forward in command history' },
            { k: 'Tab', d: 'Autocomplete suggested command' },
            { k: 'Ctrl + L', d: 'Clear terminal screen (clear)' },
            { k: 'Ctrl + C', d: 'Cancel current typing and go to new line' },
            { k: 'Ctrl + U', d: 'Delete the entire current line' },
            { k: 'Ctrl + W', d: 'Delete the previous word' }
        ],
        neofetchTitle: 'System Snapshot',
        neofetchMeta: 'Quick overview of environment and active stack.',
        lastFmTitle: 'Now Playing',
        lastFmLoading: 'Loading listening activity...',
        lastFmNowPlaying: 'Now playing',
        lastFmLastPlayed: 'Last played {elapsed}',
        lastFmUnavailable: 'Unable to fetch Last.fm right now.',
        lastFmNoData: 'No recent tracks found.',
        lastFmUnknownTrack: 'Unknown track',
        lastFmUnknownArtist: 'Unknown artist',
        lastFmUnknownAlbum: 'Unknown album',
        lastFmArtistLink: 'Artist on Last.fm',
        lastFmAlbumLink: 'Album on Last.fm',
        lsTitle: 'Directory Listing',
        lsMeta: 'Navigable portfolio items in current context.',
        experienceTitle: 'Experience',
        experienceMeta: 'Professional timeline and key outcomes.',
        projectsTitle: 'Projects',
        projectsMeta: 'Selected projects and technologies used.',
        aboutTitle: 'About',
        aboutMeta: 'Professional summary and current focus.',
        skillsMeta: 'Skills matrix by category with terminal-style progress.',
        blogTitle: 'Blog',
        blogMeta: 'List of technical posts. Use arrow keys to navigate and Enter to open.',
        blogHint: 'Tip: type read <slug> to open directly.',
        blogNavHint: 'Tip: Use UP/DOWN arrows to navigate and ENTER to read the selected post.',
        contactTitle: 'Contact',
        contactMeta: 'Official channels for connection and networking.',
        readHint: 'Tip: use blog to return to the post list.',
        readBack: '[ ↩ Back to index ]',
        readArgError: 'Bash: read: Expected argument <slug>',
        readNotFound: "Bash: read: Post with slug '{slug}' was not found.",
        urlNotFoundTitle: '404 Not Found',
        urlNotFoundMeta: 'The requested URL does not exist in this terminal.',
        urlNotFoundBody: "Route '{url}' was not found.",
        urlNotFoundHint: "Type 'help' to list valid commands or use /#read/<slug> links.",
        readAuthor: 'Author',
        themeSupported: 'Supported themes: {themes}. Usage: theme <name>',
        themeNotFound: "Theme '{theme}' not found.",
        didYouMean: " Did you mean '{suggestion}'?",
        themeActivated: 'Theme activated: {theme}',
        bootReady: "<i>Environment ready. Type 'help' to start.</i>",
        langButton: 'EN',
        langButtonTitle: 'Switch language',
        modeDark: 'Dark',
        modeLight: 'Light',
        modeButtonTitle: 'Toggle dark/light mode'
    }
};

function t(key, vars = {}) {
    const locale = state.language in i18n ? state.language : 'en';
    const source = i18n[locale];
    const fallback = i18n.en;
    const raw = key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), source)
        ?? key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), fallback)
        ?? key;

    if (typeof raw !== 'string') return raw;
    return raw.replace(/\{(\w+)\}/g, (_, name) => (vars[name] !== undefined ? vars[name] : `{${name}}`));
}

function isLightTheme(themeName) {
    return themeName.endsWith('-light');
}

function getThemeFamily(themeName) {
    return themeName.replace(/-light$/, '');
}

function getThemeFamilies() {
    return [...new Set(Object.keys(themesConfig).map(getThemeFamily))];
}

function getDateLocale() {
    return state.language === 'pt-BR' ? 'pt-BR' : 'en-US';
}

function formatDisplayDate(dateValue) {
    return new Intl.DateTimeFormat(getDateLocale(), { dateStyle: 'medium' }).format(new Date(dateValue));
}

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatElapsedFromUnix(uts) {
    if (!uts) return '';
    const diffSeconds = Math.round((Number(uts) * 1000 - Date.now()) / 1000);
    const abs = Math.abs(diffSeconds);
    const rtf = new Intl.RelativeTimeFormat(getDateLocale(), { numeric: 'auto' });

    if (abs < 60) return rtf.format(diffSeconds, 'second');
    if (abs < 3600) return rtf.format(Math.round(diffSeconds / 60), 'minute');
    if (abs < 86400) return rtf.format(Math.round(diffSeconds / 3600), 'hour');
    return rtf.format(Math.round(diffSeconds / 86400), 'day');
}

function buildLastFmUrl(artist, album = '') {
    const artistPart = encodeURIComponent((artist || '').trim());
    if (!artistPart) return 'https://www.last.fm';
    if (!album) return `https://www.last.fm/music/${artistPart}`;
    return `https://www.last.fm/music/${artistPart}/${encodeURIComponent(album.trim())}`;
}

function pickLastFmImage(images = []) {
    const preferred = ['extralarge', 'large', 'medium', 'small'];
    for (const size of preferred) {
        const found = images.find(img => img.size === size && img['#text']);
        if (found) return found['#text'];
    }
    return '';
}

async function fetchLastFmRecentTrack() {
    if (window.__ENV_READY__) {
        try { await window.__ENV_READY__; } catch {}
    }

    const lastFmConfig = getLastFmConfig();
    if (!lastFmConfig.apiKey || !lastFmConfig.user) return { unavailable: true };

    const params = new URLSearchParams({
        method: 'user.getrecenttracks',
        user: lastFmConfig.user,
        api_key: lastFmConfig.apiKey,
        format: 'json',
        limit: '1'
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    try {
        const response = await fetch(`${lastFmConfig.endpoint}?${params.toString()}`, {
            signal: controller.signal
        });
        if (!response.ok) return { unavailable: true };

        const payload = await response.json();
        const rawTrack = Array.isArray(payload?.recenttracks?.track)
            ? payload.recenttracks.track[0]
            : payload?.recenttracks?.track;

        if (!rawTrack) return { empty: true };

        const artistName = rawTrack?.artist?.['#text'] || rawTrack?.artist?.name || t('lastFmUnknownArtist');
        const albumName = rawTrack?.album?.['#text'] || t('lastFmUnknownAlbum');
        const trackName = rawTrack?.name || t('lastFmUnknownTrack');
        const isNowPlaying = rawTrack?.['@attr']?.nowplaying === 'true';

        return {
            isNowPlaying,
            trackName,
            artistName,
            albumName,
            albumImage: pickLastFmImage(rawTrack?.image || []),
            trackUrl: rawTrack?.url || '',
            artistUrl: buildLastFmUrl(artistName),
            albumUrl: buildLastFmUrl(artistName, albumName),
            elapsed: isNowPlaying ? '' : formatElapsedFromUnix(rawTrack?.date?.uts)
        };
    } catch {
        return { unavailable: true };
    } finally {
        clearTimeout(timeoutId);
    }
}

function renderLastFmBlock(container, data) {
    const loading = data?.loading;
    const unavailable = data?.unavailable;
    const empty = data?.empty;

    const statusText = loading
        ? t('lastFmLoading')
        : unavailable
            ? t('lastFmUnavailable')
            : empty
                ? t('lastFmNoData')
                : data.isNowPlaying
                    ? t('lastFmNowPlaying')
                    : t('lastFmLastPlayed', { elapsed: data.elapsed || '' });

    const statusClass = loading
        ? 'text-term-comment'
        : unavailable || empty
            ? 'text-term-yellow'
            : data.isNowPlaying
                ? 'text-term-green'
                : 'text-term-yellow';

    if (loading || unavailable || empty) {
        container.innerHTML = `
            <div>
                <div class="text-[10px] uppercase tracking-wide text-term-purple mb-1">LAST.FM · ${escapeHtml(t('lastFmTitle'))}</div>
                <div class="text-xs sm:text-sm ${statusClass}">${escapeHtml(statusText)}</div>
            </div>
        `;
        return;
    }

    const albumCover = data.albumImage
        ? `<img src="${escapeHtml(data.albumImage)}" alt="${escapeHtml(data.albumName)}" class="w-[73px] h-[73px] sm:w-[83px] sm:h-[83px] rounded object-cover border border-white/10 shrink-0" loading="lazy" referrerpolicy="no-referrer" />`
        : `<div class="w-[73px] h-[73px] sm:w-[83px] sm:h-[83px] rounded border border-white/10 bg-black/20 flex items-center justify-center text-term-purple shrink-0">♫</div>`;

    const trackHref = data.trackUrl || data.albumUrl || 'https://www.last.fm';
    const artistHref = data.artistUrl || 'https://www.last.fm';

    container.innerHTML = `
        <div>
            <div class="text-[10px] uppercase tracking-widest font-bold text-term-purple mb-2">LAST.FM · ${escapeHtml(t('lastFmTitle'))}</div>
            <div class="flex items-start gap-3">
                ${albumCover}
                <div class="min-w-0 flex-1 flex flex-col justify-center">
                    <div class="text-xs sm:text-sm ${statusClass} mb-1">${escapeHtml(statusText)}</div>
                    <a href="${escapeHtml(trackHref)}" target="_blank" rel="noopener noreferrer" class="text-term-fg font-bold text-sm sm:text-base leading-tight break-words hover:underline hover:text-term-green mb-0.5">${escapeHtml(data.trackName)}</a>
                    <div>
                        <a href="${escapeHtml(artistHref)}" target="_blank" rel="noopener noreferrer" class="text-term-fg opacity-80 text-xs sm:text-sm break-words hover:underline hover:text-term-blue">${escapeHtml(data.artistName)}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function hydrateLastFmBlock(container) {
    renderLastFmBlock(container, { loading: true });
    const trackData = await fetchLastFmRecentTrack();
    if (!container.isConnected) return;
    renderLastFmBlock(container, trackData);
}

/* =========================================
 * 3. STATE MACHINE / PROXY
 * ========================================= */
const initialState = {
    theme: localStorage.getItem('terminal_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dracula' : 'dracula-light'),
    language: localStorage.getItem('terminal_language') || (navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'),
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
        if (property === 'language') {
            localStorage.setItem('terminal_language', value);
            const languageChanged = new CustomEvent('languageChanged', { detail: value });
            window.dispatchEvent(languageChanged);
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
const langToggleBtn = document.getElementById('lang-toggle-btn');
const modeToggleBtn = document.getElementById('mode-toggle-btn');

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
const availableCommands = ['help', 'home', 'about', 'ls', 'projects', 'experience', 'skills', 'blog', 'contact', 'theme', 'shortcuts', 'clear'];
const quickActionCommands = availableCommands.filter(cmd => cmd !== 'ls');
const commandAliases = {
    sobre: 'about',
    neofetch: 'home'
};

function resolveCommandName(cmd) {
    return commandAliases[cmd] || cmd;
}
const actionsBar = document.getElementById('quick-actions');

function renderQuickActions() {
    if (!actionsBar) return;
    actionsBar.innerHTML = '';
    quickActionCommands.forEach(cmd => {
        const btn = document.createElement('button');
        btn.className = 'bg-white/10 hover:bg-term-green/20 hover:text-term-green text-term-fg px-3 py-1 rounded text-xs transition-colors shrink-0 outline-none focus:ring-1 focus:ring-term-green';
        btn.textContent = cmd;
        btn.setAttribute('aria-label', t('runCommandAria', { cmd }));
        btn.onclick = () => { executeCommandVisual(cmd); };
        actionsBar.appendChild(btn);
    });
}

function toggleLanguage() {
    state.language = state.language === 'pt-BR' ? 'en' : 'pt-BR';
}

function toggleThemeMode() {
    const family = getThemeFamily(state.theme);
    const targetTheme = isLightTheme(state.theme) ? family : `${family}-light`;
    if (themesConfig[targetTheme]) {
        state.theme = targetTheme;
        return;
    }

    state.theme = isLightTheme(state.theme) ? 'dracula' : 'dracula-light';
}

function updateLayoutControlLabels() {
    document.documentElement.lang = state.language;
    if (inputElem) inputElem.title = t('inputTitle');

    if (langToggleBtn) {
        langToggleBtn.textContent = t('langButton');
        langToggleBtn.title = t('langButtonTitle');
        langToggleBtn.setAttribute('aria-label', t('langButtonTitle'));
    }

    if (modeToggleBtn) {
        const modeLabel = isLightTheme(state.theme) ? t('modeLight') : t('modeDark');
        modeToggleBtn.textContent = modeLabel;
        modeToggleBtn.title = t('modeButtonTitle');
        modeToggleBtn.setAttribute('aria-label', t('modeButtonTitle'));
    }
}

if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
if (modeToggleBtn) modeToggleBtn.addEventListener('click', toggleThemeMode);

window.addEventListener('languageChanged', () => {
    renderQuickActions();
    updateLayoutControlLabels();
    rerenderCurrentViewForLanguage();
});

window.addEventListener('themeChanged', () => {
    updateLayoutControlLabels();
});

renderQuickActions();
updateLayoutControlLabels();

// Analytics: Track command execution as a pageview
function trackCommand(cmd, routePath = '') {
    if (typeof gtag !== 'function') return;
    const cleanCmd = cmd.trim().split(' ')[0].toLowerCase();
    
    // Ignore meta-commands like clear or invalid ones
    const ignored = ['clear', 'sudo', 'ls', 'exit'];
    if (ignored.includes(cleanCmd)) return;

    gtag('event', 'screen_view', {
        app_name: 'TerminalPortfolio',
        screen_name: cleanCmd,
        page_location: window.location.href,
        page_path: routePath || '/#' + cleanCmd,
        page_title: `Terminal - ${cleanCmd.charAt(0).toUpperCase() + cleanCmd.slice(1)}`
    });
}

function getRouteForCommand(cmd, args = []) {
    if (cmd === 'read' && args.length > 0) {
        return `/#read/${encodeURIComponent(args[0])}`;
    }
    if (cmd === 'blog') {
        return '/#blog';
    }
    return `/#${cmd}`;
}

function safeDecode(value) {
    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
}

function parseRouteFromLocation() {
    const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (cleanPath && cleanPath !== 'index.html') {
        const parts = cleanPath.split('/').map(safeDecode);
        const first = parts[0].toLowerCase();

        if (first === 'blog') {
            if (parts.length === 1 || !parts[1]) {
                return { cmd: 'blog', args: [], route: window.location.pathname };
            }

            return { cmd: 'read', args: [parts.slice(1).join('/')], route: window.location.pathname };
        }

        return { invalid: true, route: window.location.pathname };
    }

    const hash = window.location.hash.replace('#', '').trim();
    if (!hash) return null;

    const hashParts = hash.split('/');
    const cmd = hashParts[0].toLowerCase();
    const args = hashParts.slice(1).map(safeDecode);
    return { cmd, args, route: `/#${hash}` };
}

function renderUrlNotFound(route) {
    const { section, body } = createTerminalSection({
        title: t('urlNotFoundTitle'),
        meta: t('urlNotFoundMeta'),
        hint: t('urlNotFoundHint')
    });

    const art = document.createElement('pre');
    art.className = 'text-term-red text-xs sm:text-sm leading-tight opacity-90';
    art.textContent = String.raw`  _  _    ___  _  _
 | || |  / _ \| || |
 | || |_| | | | || |_
 |__   _| |_| |__   _|
    |_|  \___/   |_|`;
    body.appendChild(art);

    const msg = document.createElement('p');
    msg.className = 'text-term-fg opacity-80 text-sm sm:text-base';
    msg.textContent = t('urlNotFoundBody', { url: route || '/' });
    body.appendChild(msg);

    outputElem.appendChild(section);
}

// Deep Linking: Execute command from URL/hash or path
function handleDeepLink({ excludedCommands = [] } = {}) {
    const parsed = parseRouteFromLocation();
    if (!parsed) return;

    if (parsed.invalid) {
        renderUrlNotFound(parsed.route);
        return;
    }

    const normalized = resolveCommandName(parsed.cmd);
    const args = parsed.args || [];
    const routeableCommands = [...availableCommands, 'read'];
    const isBlocked = excludedCommands.includes(normalized);
    const isValid = routeableCommands.includes(normalized);

    if (isValid && !isBlocked) {
        if (normalized === 'read' && args.length === 0) {
            renderUrlNotFound(parsed.route || '/');
            return;
        }
        const fullCmd = args.length > 0 ? `${normalized} ${args.join(' ')}` : normalized;
        setTimeout(() => { executeCommandVisual(fullCmd); }, 500);
        return;
    }

    if (!isBlocked) renderUrlNotFound(parsed.route || '/');
}

function rerenderCurrentViewForLanguage() {
    const parsed = parseRouteFromLocation();
    if (!parsed) return;

    if (parsed.invalid) {
        commandsStrategy.clear();
        commandsStrategy.homeSnapshot();
        renderUrlNotFound(parsed.route || '/');
        return;
    }

    const normalized = resolveCommandName(parsed.cmd);
    const args = parsed.args || [];
    if (!commandsStrategy[normalized]) return;

    state.blogInteractive = false;
    commandsStrategy.clear();
    commandsStrategy.homeSnapshot();

    if (normalized === 'clear' || normalized === 'home') return;
    commandsStrategy[normalized](args);
}

// Write simple line
function writeLine(html, cssClass = '') {
  const div = document.createElement('div');
  div.className = `slide-in my-0.5 ${cssClass}`;
  div.innerHTML = html;
  outputElem.appendChild(div);
  return div;
}

function createTerminalSection({ title, meta = '', hint = '' }) {
    const section = document.createElement('section');
    section.className = 'terminal-section slide-in my-4';

    const titleEl = document.createElement('div');
    titleEl.className = 'terminal-section-title text-term-yellow font-bold uppercase border-b border-white/10 pb-1 inline-block pr-6';
    titleEl.textContent = title;
    section.appendChild(titleEl);

    if (meta) {
        const metaEl = document.createElement('div');
        metaEl.className = 'terminal-section-meta text-term-fg opacity-60 text-xs mt-2 mb-2';
        metaEl.innerHTML = meta;
        section.appendChild(metaEl);
    }

    const body = document.createElement('div');
    body.className = 'terminal-section-body space-y-2 text-term-fg';
    section.appendChild(body);

    if (hint) {
        const hintEl = document.createElement('div');
        hintEl.className = 'terminal-section-hint text-term-comment text-xs italic mt-2';
        hintEl.innerHTML = hint;
        section.appendChild(hintEl);
    }

    return { section, body };
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
            const postSlug = blogPosts[state.blogIndex].slug;
            state.blogInteractive = false;
            executeCommandVisual(`read ${postSlug}`);
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
        const { section, body } = createTerminalSection({
            title: t('helpTitle'),
            meta: t('helpMeta')
        });
        const container = document.createElement('div');
        container.className = 'grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 w-full my-2';
        const map = [
            {c: 'help', e: '🛟', d: t('helpDesc.help')},
            {c: 'home', e: '🏠', d: t('helpDesc.home')},
            {c: 'about', e: '📖', d: t('helpDesc.about')},
            {c: 'ls', e: '📂', d: t('helpDesc.ls')},
            {c: 'projects', e: '💻', d: t('helpDesc.projects')},
            {c: 'experience', e: '👔', d: t('helpDesc.experience')},
            {c: 'skills', e: '🛠️', d: t('helpDesc.skills')},
            {c: 'blog', e: '📝', d: t('helpDesc.blog')},
            {c: 'contact', e: '📞', d: t('helpDesc.contact')},
            {c: 'theme', e: '🎨', d: t('helpDesc.theme')},
            {c: 'shortcuts', e: '⌨️', d: t('helpDesc.shortcuts')},
            {c: 'clear', e: '🗑️', d: t('helpDesc.clear')}
        ];
        map.forEach(item => {
            const elDiv = document.createElement('div');
            elDiv.className = 'flex items-center gap-2 cursor-pointer hover:underline';
            elDiv.onclick = () => executeCommandVisual(item.c);
            elDiv.innerHTML = `<span class="text-term-yellow w-24">${item.c}</span> <span>${item.e}</span> <span class="text-term-fg opacity-70">${item.d}</span>`;
            container.appendChild(elDiv);
        });
        body.appendChild(container);
        outputElem.appendChild(section);
    },
    'shortcuts': () => {
        const { section, body } = createTerminalSection({
            title: t('shortcutsTitle'),
            meta: t('shortcutsMeta')
        });
        const shortcutsMap = t('shortcutsMap');
        const cont = document.createElement('div');
        cont.className = 'space-y-1';

        shortcutsMap.forEach(s => {
            const row = document.createElement('div');
            row.innerHTML = `<span class="text-term-purple font-bold inline-block w-28 text-right pr-4">${s.k}</span> <span class="text-term-fg opacity-70">→ ${s.d}</span>`;
            cont.appendChild(row);
        });
        body.appendChild(cont);
        outputElem.appendChild(section);
    },
    'about': () => {
        const { section, body } = createTerminalSection({
            title: t('aboutTitle'),
            meta: t('aboutMeta')
        });
        const textData = state.language === 'en' ? aboutDataEn : aboutData;
        textData.forEach(p => {
            const pElem = document.createElement('p');
            pElem.textContent = p;
            pElem.className = 'mb-2 text-term-fg opacity-80 leading-relaxed text-sm sm:text-base';
            body.appendChild(pElem);
        });
        outputElem.appendChild(section);
    },
    'sobre': () => commandsStrategy['about'](),
    'clear': () => {
        outputElem.innerHTML = '';
    },
    'home': async () => {
        bootControl.canceled = false;
        await startBootSequence({ replayDeepLink: false });
    },
    'neofetch': async () => {
        await commandsStrategy.home();
    },
    'homeSnapshot': () => {
        const { section, body } = createTerminalSection({
            title: t('neofetchTitle'),
            meta: t('neofetchMeta')
        });
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
            const vk = document.createElement('div'); vk.className = 'text-term-purple font-bold text-left sm:text-right pt-[2px]'; vk.textContent = k;
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

        const lastFmBlock = tpl.querySelector('.lastfm-block-container');
        if (lastFmBlock) {
            hydrateLastFmBlock(lastFmBlock);
        }

        // Espelhando o efeito do bloco principal no painel secundário 
        if (['typewriter', 'matrix'].includes(chosen)) {
            hd.classList.add('anim-pulse'); // base light
            applyTextNodeAnimation(hd, chosen);
        } else {
            hd.classList.add(`anim-${chosen}`);
        }

          body.appendChild(tpl);
          outputElem.appendChild(section);
    },
    'ls': () => {
            const { section, body } = createTerminalSection({
                title: t('lsTitle'),
                meta: t('lsMeta')
            });
            const cont = document.createElement('div');
            cont.className = 'flex flex-wrap gap-4 my-2';
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
         body.appendChild(cont);
         outputElem.appendChild(section);
    },
    'experience': () => {
        const { section, body } = createTerminalSection({
            title: t('experienceTitle'),
            meta: t('experienceMeta')
        });
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
        body.appendChild(tpl);
        outputElem.appendChild(section);
    },
    'projects': () => {
        const { section, body } = createTerminalSection({
            title: t('projectsTitle'),
            meta: t('projectsMeta')
        });
        const cont = document.createElement('div');
        cont.className = 'my-4 space-y-6';

        projects.forEach(p => {
            const item = document.createElement('div');
            item.className = 'border-l-2 border-term-purple pl-4 ml-2 space-y-2';

            const stackLine = p.tags.join(' · ');
            const linkLine = p.link && p.link !== '#'
                ? `<a href="${p.link}" target="_blank" class="text-term-blue hover:underline">${p.link.replace(/^https?:\/\//, '')}</a>`
                : '<span class="text-term-fg opacity-50">private / coming soon</span>';

            item.innerHTML = `
                <div class="font-bold text-term-cyan">${p.title}</div>
                <div class="text-term-fg opacity-50 font-mono">Stack · ${stackLine}</div>
                <p class="text-term-fg opacity-80 mt-1">${p.description}</p>
                <div class="text-term-fg opacity-70 mt-2">> Link: ${linkLine}</div>
            `;

            cont.appendChild(item);
        });

        body.appendChild(cont);
        outputElem.appendChild(section);
    },
    'skills': async () => {
        const { section, body } = createTerminalSection({
            title: 'Skills',
            meta: t('skillsMeta')
        });
        const cont = document.createElement('div');
        cont.className = 'space-y-4';
        const skillsToAnimate = [];
        
        skills.forEach(c => {
            const block = document.createElement('div');
            let h = `<div class="text-term-cyan font-bold mb-3 uppercase border-b border-white/10 pb-1 inline-block pr-6">${c.category}</div><div class="space-y-1">`;
            c.skills.forEach(s => {
                const skillId = `skill-${Math.random().toString(36).substr(2, 9)}`;
                h += `<div class="w-full sm:w-1/2 mb-1">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-1">
                            <span class="text-term-fg opacity-80 text-sm whitespace-nowrap overflow-hidden text-ellipsis pr-2">${s.name}</span>
                            <span class="text-term-green font-mono text-[10px] sm:text-xs shrink-0" id="${skillId}">
                                <span class="hidden sm:inline">[</span><span class="tracking-widest">░░░░░░░░░░</span><span class="hidden sm:inline">] 0/10</span>
                                <span class="sm:hidden ml-1 text-xs">0/10</span>
                            </span>
                        </div>
                      </div>`;
                skillsToAnimate.push({ id: skillId, level: s.level });
            });
            h += `</div>`;
            block.innerHTML = h;
            cont.appendChild(block);
        });
        
        body.appendChild(cont);
        outputElem.appendChild(section);
        
        // Animate each skill bar progressively
        for (let skillItem of skillsToAnimate) {
            const elem = document.getElementById(skillItem.id);
            if (!elem) continue;
            
            const targetLevel = skillItem.level;
            for (let i = 0; i <= targetLevel; i++) {
                const bar = '█'.repeat(i) + '░'.repeat(10 - i);
                elem.innerHTML = `<span class="hidden sm:inline">[</span><span class="tracking-widest">${bar}</span><span class="hidden sm:inline">] ${i}/10</span><span class="sm:hidden ml-1 text-xs">${i}/10</span>`;
                await sleep(25);
            }
        }
    },
    'blog': () => {
        const { section, body } = createTerminalSection({
            title: t('blogTitle'),
            meta: t('blogMeta'),
            hint: t('blogHint')
        });
        const cont = document.createElement('div');
        cont.className = 'space-y-2';
        
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
                                  <span class="text-term-comment text-xs shrink-0 w-24">${formatDisplayDate(dateReal)}</span>
                                  <span class="${isSel ? 'text-term-green font-bold' : 'text-term-fg opacity-80'} truncate">${p.title}</span>`;
                 
                 row.onclick = () => {
                     state.blogInteractive = false;
                     executeCommandVisual(`read ${p.slug}`);
                 };
                 cont.appendChild(row);
            });
            const hint = document.createElement('div');
            hint.className = 'text-term-comment text-xs italic mt-2 ml-2 animate-pulse';
            hint.textContent = `↓ ${t('blogNavHint')}`;
            cont.appendChild(hint);
        };
        
        state.updateBlogList = renderList;
        renderList();
        body.appendChild(cont);
        outputElem.appendChild(section);
    },
    'contact': () => {
        const { section, body } = createTerminalSection({
            title: t('contactTitle'),
            meta: t('contactMeta')
        });
        const cont = document.createElement('div');
        cont.className = 'my-2 space-y-2';
        contacts.forEach(c => {
            const row = document.createElement('div');
            row.className = 'grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1 sm:gap-2 border-l-2 border-term-purple/60 pl-3 py-1';

            const label = document.createElement('div');
            label.className = 'text-term-cyan sm:text-right sm:pr-2 text-sm font-mono';
            label.textContent = `${c.icon} ${c.platform}`;

            const value = document.createElement('div');
            const link = document.createElement('a');
            link.href = c.link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'hover:underline text-term-fg opacity-80 hover:text-term-green hover:opacity-100 break-all';
            link.textContent = c.display;

            value.appendChild(link);
            row.appendChild(label);
            row.appendChild(value);
            cont.appendChild(row);
        });
        body.appendChild(cont);
        outputElem.appendChild(section);
    },
    'read': (args) => {
        if(!args || args.length === 0) {
            writeLine(t('readArgError'), 'text-term-red font-bold');
            return;
        }
        const slug = args[0];
        const post = blogPosts.find(p => p.slug === slug);
        if(!post) {
            writeLine(t('readNotFound', { slug: args[0] }), 'text-term-red font-bold');
            return;
        }
        const { section, body } = createTerminalSection({
            title: post.title,
            meta: `<span>${formatDisplayDate(post.date)}</span><span class="opacity-40">|</span><span>${t('readAuthor')}: Thierry Rene Matos</span>`,
            hint: t('readHint')
        });

        const tagsEl = document.createElement('div');
        tagsEl.className = 'flex gap-2 mb-3 text-xs';
        tagsEl.innerHTML = post.tags.map(tag => `<span class="bg-term-purple/20 text-term-purple px-2 py-0.5 rounded">${tag}</span>`).join('');

        const contentEl = document.createElement('div');
        contentEl.className = 'leading-relaxed text-term-fg opacity-80 text-sm sm:text-base mb-4';
        contentEl.innerHTML = post.content;

        const backBtn = document.createElement('button');
        backBtn.className = 'px-4 py-2 bg-white/10 hover:bg-white/20 rounded font-mono text-xs transition-colors text-term-fg';
        backBtn.textContent = t('readBack');
        backBtn.onclick = () => executeCommandVisual('blog');

        body.appendChild(tagsEl);
        body.appendChild(contentEl);
        body.appendChild(backBtn);
        outputElem.appendChild(section);
    },
    'theme': (args) => {
        const families = getThemeFamilies();
        if(!args || args.length === 0) {
            writeLine(t('themeSupported', { themes: families.join(', ') }), 'text-term-fg opacity-70');
            return;
        }

        const requested = args[0].toLowerCase();
        const themeFamily = getThemeFamily(requested);

        if(!families.includes(themeFamily)) {
            const best = getClosestMatch(themeFamily, families);
            let out = t('themeNotFound', { theme: requested });
            if(best) out += t('didYouMean', { suggestion: best });
            writeLine(out, 'text-term-red');
        } else {
            const nextTheme = isLightTheme(state.theme) ? `${themeFamily}-light` : themeFamily;
            state.theme = themesConfig[nextTheme] ? nextTheme : themeFamily;
            writeLine(t('themeActivated', { theme: themeFamily }), 'text-term-green');
        }
    }
};

function processCommand(raw) {
    const parts = raw.split(' ').filter(p => p.trim());
    const cmd = parts[0].toLowerCase();
    const normalizedCmd = resolveCommandName(cmd);
    const args = parts.slice(1);

    if(cmd.startsWith('sudo')) {
        writeLine('[ERROR] thierry is not in the sudoers file. This incident will be reported to the sysadmin.', 'text-term-red font-bold bg-term-red/10 px-2 py-1 inline-block mt-2 rounded');
        return;
    }

    if(commandsStrategy[normalizedCmd]) {
        // Track analytics and update URL for meaningful content commands
        const trackable = ['blog', 'projects', 'skills', 'experience', 'contact', 'help', 'home', 'about', 'shortcuts', 'theme'];
        const trackableWithArgs = ['read'];
        const routePath = getRouteForCommand(normalizedCmd, args);
        if (trackable.includes(normalizedCmd) || trackableWithArgs.includes(normalizedCmd)) {
            const currentRoute = `${window.location.pathname}${window.location.hash}`;
            if (currentRoute !== routePath) {
                history.pushState(null, null, routePath);
            }
            trackCommand(normalizedCmd, routePath);
        }
        
        commandsStrategy[normalizedCmd](args);
    } else {
        const suggestion = getClosestMatch(normalizedCmd, availableCommands);
        let msg = `bash: ${normalizedCmd}: command not found.`;
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

async function startBootSequence({ replayDeepLink = true } = {}) {
    state.blogInteractive = false;
    state.blogIndex = 0;

    const lines = [
        "Initializing BIOS Configuration... [ OK ]",
        "Loading CPU Microcode Updates... [ OK ]",
        "Mounted /home/thierry/workspace... [ OK ]",
        "Loading Kernel Modules... [ OK ]",
        "Fetching Remote Containers (Docker)... [ OK ]",
        "Starting FrankenPHP/Octane Daemon... [ OK ]",
        "Initializing Tailwind JIT Engine... [ OK ]",
        "Loading Matrix Weights & AI Subroutines... [ OK ]",
        "Fetching Last.fm API Data... [ OK ]",
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
    commandsStrategy.homeSnapshot();
    writeLine(t('bootReady'), "text-term-fg opacity-40 text-xs sm:text-sm my-4");
    
    // Suporte a Deep Linking (executa comando se houver hash na URL)
    if (replayDeepLink) {
        handleDeepLink({ excludedCommands: ['home'] });
    }
    
    // Remove cancel listeners so real clicks work
    window.removeEventListener('keydown', abortBoot);
    window.removeEventListener('click', abortBoot);
    
    // Trigger focus
    inputElem.focus();
}

// Launch
window.onload = startBootSequence;
