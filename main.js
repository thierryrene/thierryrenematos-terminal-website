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
        user: 'robotstxts', // Todo: reverter para process.env.LASTFM_USERNAME futuramente
        apiKey: 'ffb3ce347a2aa289d15ae854f79e1184' // Todo: reverter para process.env.LASTFM_API_KEY futuramente
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
  'dracula': { bg: '#282a36', fg: '#f8f8f2', green: '#50fa7b', blue: '#8be9fd', purple: '#bd93f9', yellow: '#f1fa8c', header: '#1e2030', border: 'rgba(255,255,255,0.07)' },
  'monokai': { bg: '#272822', fg: '#f8f8f2', green: '#a6e22e', blue: '#66d9ef', purple: '#ae81ff', yellow: '#e6db74', header: '#1c1c18', border: 'rgba(255,255,255,0.07)' }
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
        lastFmRetry: 'Tentar novamente',
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
        bootSkipHint: 'pressione qualquer tecla para pular',
        langButton: 'PT-BR',
        langButtonTitle: 'Alternar idioma',
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
        lastFmRetry: 'Retry',
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
        bootSkipHint: 'press any key to skip',
        langButton: 'EN',
        langButtonTitle: 'Switch language',
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

function getThemeFamilies() {
    return Object.keys(themesConfig);
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

const lastFmCache = { data: null, ts: 0, ttl: 60_000 };

async function fetchLastFmRecentTrack() {
    if (lastFmCache.data && Date.now() - lastFmCache.ts < lastFmCache.ttl) {
        return lastFmCache.data;
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

        if (!rawTrack) {
            lastFmCache.data = { empty: true };
            lastFmCache.ts = Date.now();
            return lastFmCache.data;
        }

        const artistName = rawTrack?.artist?.['#text'] || rawTrack?.artist?.name || t('lastFmUnknownArtist');
        const albumName = rawTrack?.album?.['#text'] || t('lastFmUnknownAlbum');
        const trackName = rawTrack?.name || t('lastFmUnknownTrack');
        const isNowPlaying = rawTrack?.['@attr']?.nowplaying === 'true';

        const result = {
            isNowPlaying,
            trackName,
            artistName,
            albumName,
            albumImage: pickLastFmImage(rawTrack?.image || []),
            trackUrl: rawTrack?.url || '',
            artistUrl: buildLastFmUrl(artistName),
            albumUrl: buildLastFmUrl(artistName, albumName),
            elapsed: isNowPlaying ? '' : formatElapsedFromUnix(rawTrack?.date?.uts),
            rawTimestamp: rawTrack?.date?.uts ? Number(rawTrack.date.uts) : null
        };
        lastFmCache.data = result;
        lastFmCache.ts = Date.now();
        return result;
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
        const retryBtn = (unavailable || empty)
            ? `<button type="button" class="lastfm-retry text-[10px] mt-1 px-2 py-1 rounded border border-white/15 hover:border-term-green hover:text-term-green transition-colors" aria-label="Retry Last.fm">${escapeHtml(t('lastFmRetry'))}</button>`
            : '';
        container.innerHTML = `
            <div>
                <div class="text-[10px] uppercase tracking-wide text-term-purple mb-1">LAST.FM · ${escapeHtml(t('lastFmTitle'))}</div>
                <div class="text-xs sm:text-sm ${statusClass}">${escapeHtml(statusText)}</div>
                ${retryBtn}
            </div>
        `;
        const btn = container.querySelector('.lastfm-retry');
        if (btn) {
            btn.addEventListener('click', () => {
                lastFmCache.data = null;
                lastFmCache.ts = 0;
                hydrateLastFmBlock(container);
            });
        }
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
function loadStoredHistory() {
    try {
        const raw = localStorage.getItem('terminal_history');
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr.slice(-100) : [];
    } catch { return []; }
}

const initialHistory = loadStoredHistory();

const initialState = {
    theme: localStorage.getItem('terminal_theme') || 'dracula',
    language: localStorage.getItem('terminal_language') || (navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'),
    history: initialHistory,
    historyIndex: initialHistory.length,
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

// Theme logic bindings — propagates CSS vars at :root so backdrop-blur on quick-actions stays alive
window.addEventListener('themeChanged', (e) => {
    const themeVals = themesConfig[e.detail];
    if (!themeVals) return;

    for (const [key, val] of Object.entries(themeVals)) {
        document.documentElement.style.setProperty(`--term-${key}`, val);
    }

    const macWin = document.querySelector('.mac-window');
    if (macWin) macWin.style.backgroundColor = themeVals.bg;

    syncToggleState();
});

function syncToggleState() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.setAttribute('aria-pressed', state.language === 'en' ? 'true' : 'false');
}

// Initialize Theme immediately to prevent FOUC
window.dispatchEvent(new CustomEvent('themeChanged', { detail: state.theme }));

/* =========================================
 * 4. CORE TERMINAL APIS
 * ========================================= */
const outputElem = document.getElementById('output');
const inputElem = document.getElementById('cmd-input');
const ghostElem = document.getElementById('ghost-text');
const langToggleBtn = document.getElementById('lang-toggle-btn');

// Auto Scroll logic using Mutation Observer (childList only at root for perf)
let scrollScheduled = false;
const observer = new MutationObserver(() => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(() => {
        outputElem.scrollTop = outputElem.scrollHeight;
        scrollScheduled = false;
    });
});
observer.observe(outputElem, { childList: true });

// Focus Hack — preserve text selection and avoid keyboard popup on touch
window.addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    if (e.target.closest('terminal-output')) return;
    const sel = window.getSelection && window.getSelection();
    if (sel && sel.toString().length > 0) return;
    inputElem.focus();
});

// Renders the prompt prefix consistently across all callsites
function renderPromptHTML(cmd = '') {
    const safe = escapeHtml(cmd);
    return `<span class="hidden sm:inline"><span class="text-term-green font-bold">thierry</span><span class="text-term-fg opacity-40">@</span><span class="text-term-blue">thierryrenematos.tec.br</span><span class="text-term-fg opacity-40">:</span><span class="text-term-purple font-bold">~</span></span><span class="text-term-fg text-term-green sm:text-term-fg font-bold sm:font-normal"> $</span>${safe ? ' ' + safe : ''}`;
}

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
const availableCommands = ['help', 'home', 'about', 'ls', 'projects', 'experience', 'contact', 'theme', 'shortcuts', 'clear'];
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

function updateLayoutControlLabels() {
    document.documentElement.lang = state.language;
    if (inputElem) inputElem.title = t('inputTitle');

    if (langToggleBtn) {
        langToggleBtn.textContent = t('langButton');
        langToggleBtn.title = t('langButtonTitle');
        langToggleBtn.setAttribute('aria-label', t('langButtonTitle'));
    }

    syncToggleState();
}

function updateDocumentTitle(cmd) {
    const baseSuffix = 'Thierry Rene Matos — Senior Web Dev';
    if (!cmd || cmd === 'home' || cmd === 'neofetch' || cmd === 'clear') {
        document.title = `${baseSuffix} | Terminal Portfolio`;
        return;
    }
    const label = cmd.charAt(0).toUpperCase() + cmd.slice(1);
    document.title = `${label} · ${baseSuffix}`;
}

if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);

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

function getRouteForCommand(cmd) {
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
    const isBlocked = excludedCommands.includes(normalized);
    const isValid = availableCommands.includes(normalized);

    if (isValid && !isBlocked) {
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
    if (val !== tabCycleBase) resetTabCycle();
    if (!val) { ghostElem.textContent = ''; return; }
    const match = availableCommands.find(c => c.startsWith(val));
    if (match) {
        ghostElem.textContent = match;
    } else {
        ghostElem.textContent = '';
    }
});

// Reverse-search (Ctrl+R) state
let reverseSearchActive = false;
let reverseSearchQuery = '';
let reverseSearchMatch = '';
let reverseSearchBar = null;

function openReverseSearch() {
    if (reverseSearchActive) return;
    reverseSearchActive = true;
    reverseSearchQuery = '';
    reverseSearchMatch = '';
    reverseSearchBar = document.createElement('div');
    reverseSearchBar.className = 'reverse-search-bar';
    reverseSearchBar.textContent = '(reverse-i-search)`\': ';
    outputElem.parentElement.insertBefore(reverseSearchBar, outputElem.nextSibling);
}

function updateReverseSearch() {
    const q = reverseSearchQuery;
    let match = '';
    for (let i = state.history.length - 1; i >= 0; i--) {
        if (state.history[i].includes(q)) { match = state.history[i]; break; }
    }
    reverseSearchMatch = match;
    if (reverseSearchBar) {
        reverseSearchBar.textContent = `(reverse-i-search)\`${q}\': ${match}`;
    }
    inputElem.value = match;
    inputElem.dispatchEvent(new Event('input'));
}

function closeReverseSearch() {
    reverseSearchActive = false;
    reverseSearchQuery = '';
    if (reverseSearchBar && reverseSearchBar.parentElement) {
        reverseSearchBar.parentElement.removeChild(reverseSearchBar);
    }
    reverseSearchBar = null;
}

function commitReverseSearch() {
    closeReverseSearch();
    // Re-dispatch Enter so the existing handler picks it up next tick
    setTimeout(() => {
        const ev = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
        inputElem.dispatchEvent(ev);
    }, 0);
}

// Tab cycle bookkeeping
let tabCycleMatches = [];
let tabCycleIndex = 0;
let tabCycleBase = '';

function resetTabCycle() {
    tabCycleMatches = [];
    tabCycleIndex = 0;
    tabCycleBase = '';
}

// History and Keys
inputElem.addEventListener('keydown', (e) => {
    // Reverse search interception
    if (reverseSearchActive) {
        if (e.key === 'Escape') { e.preventDefault(); closeReverseSearch(); inputElem.value = ''; inputElem.dispatchEvent(new Event('input')); return; }
        if (e.key === 'Backspace') { e.preventDefault(); reverseSearchQuery = reverseSearchQuery.slice(0, -1); updateReverseSearch(); return; }
        if (e.key === 'Enter') { /* handled below */ }
        else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            reverseSearchQuery += e.key;
            updateReverseSearch();
            return;
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
            if (reverseSearchActive) closeReverseSearch();
            writeLine(`${renderPromptHTML(inputElem.value)}^C`);
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
        } else if (k === 'r') { // Reverse search
            e.preventDefault();
            openReverseSearch();
            return;
        }
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        const cur = inputElem.value;
        if (tabCycleMatches.length === 0 || tabCycleBase !== cur) {
            tabCycleBase = cur;
            tabCycleMatches = availableCommands.filter(c => c.startsWith(cur));
            tabCycleIndex = 0;
            if (tabCycleMatches.length === 1) {
                inputElem.value = tabCycleMatches[0];
                ghostElem.textContent = '';
                resetTabCycle();
                return;
            }
            if (tabCycleMatches.length > 1) {
                inputElem.value = tabCycleMatches[0];
                tabCycleIndex = 0;
                ghostElem.textContent = '';
                return;
            }
        } else {
            tabCycleIndex = (tabCycleIndex + 1) % tabCycleMatches.length;
            inputElem.value = tabCycleMatches[tabCycleIndex];
            ghostElem.textContent = '';
            return;
        }
    } else if (e.key === 'Enter') {
        if (reverseSearchActive) { commitReverseSearch(); return; }
        const raw = inputElem.value.trim();
        inputElem.value = '';
        ghostElem.textContent = '';
        if (raw) {
            writeLine(renderPromptHTML(raw));
            if (state.history[state.history.length - 1] !== raw) {
                state.history.push(raw);
                state.history = state.history.slice(-100);
                try { localStorage.setItem('terminal_history', JSON.stringify(state.history)); } catch {}
            }
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

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// DOM Text Node Scrambler (for safe text animation over HTML tags), driven by rAF
function applyTextNodeAnimation(element, type) {
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    let n;
    while (n = walk.nextNode()) {
        if (n.nodeValue.trim().length > 0) {
            nodes.push({ node: n, original: n.nodeValue });
            n.nodeValue = ' ';
        }
    }

    if (prefersReducedMotion()) {
        nodes.forEach(item => { item.node.nodeValue = item.original; });
        return;
    }

    if (type === 'typewriter') {
        let nIdx = 0;
        let charIdx = 0;
        let last = 0;
        function step(ts) {
            if (ts - last < 5) { requestAnimationFrame(step); return; }
            last = ts;
            if (nIdx >= nodes.length) return;
            const cur = nodes[nIdx];
            cur.node.nodeValue = cur.original.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx > cur.original.length) { nIdx++; charIdx = 0; }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    } else if (type === 'matrix') {
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*';
        let iter = 0;
        const totalLen = nodes.reduce((a, c) => a + c.original.length, 0);
        let last = 0;
        function step(ts) {
            if (ts - last < 20) { requestAnimationFrame(step); return; }
            last = ts;
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
            if (iter >= totalLen) return;
            iter += 3;
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
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
            {c: 'contact', e: '📞', d: t('helpDesc.contact')},
            {c: 'theme', e: '🎨', d: t('helpDesc.theme')},
            {c: 'shortcuts', e: '⌨️', d: t('helpDesc.shortcuts')},
            {c: 'clear', e: '🗑️', d: t('helpDesc.clear')}
        ];
        map.forEach(item => {
            const elDiv = document.createElement('div');
            elDiv.className = 'flex items-center gap-2 cursor-pointer hover:underline';
            elDiv.onclick = () => executeCommandVisual(item.c);
            elDiv.innerHTML = `<span class="text-term-yellow w-24">${escapeHtml(item.c)}</span> <span aria-hidden="true">${item.e}</span> <span class="text-term-fg opacity-70">${escapeHtml(item.d)}</span>`;
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

        if (prefersReducedMotion()) {
            logoEl.textContent = art;
        } else if (chosen === 'typewriter') {
            logoEl.textContent = '';
            logoEl.classList.add('anim-pulse');
            let i = 0;
            let last = 0;
            (function tick(ts) {
                if (ts - last < 2) { requestAnimationFrame(tick); return; }
                last = ts;
                if (i < art.length) { logoEl.textContent += art.charAt(i); i++; requestAnimationFrame(tick); }
            })(0);
        } else if (chosen === 'matrix') {
            logoEl.textContent = art;
            logoEl.classList.add('anim-pulse');
            const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*';
            let iter = 0;
            let last = 0;
            (function tick(ts) {
                if (ts - last < 20) { requestAnimationFrame(tick); return; }
                last = ts;
                logoEl.textContent = art.split('').map((c, i) => {
                    if (c === ' ' || c === '\n') return c;
                    if (i < iter) return c;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                if (iter < art.length) { iter += 4; requestAnimationFrame(tick); }
            })(0);
        } else {
            logoEl.textContent = art;
            logoEl.classList.add(`anim-${chosen}`);
        }
        const hd = tpl.querySelector('.host-data');
        const d = profileData;
        const addRow = (k, v, isLink) => {
            const vk = document.createElement('div'); vk.className = 'text-term-purple font-bold text-left sm:text-right pt-[2px]'; vk.textContent = k;
            const vv = document.createElement('div'); vv.className = 'text-term-fg opacity-80';
            if(isLink) vv.innerHTML = `<a href="${escapeHtml(v)}" target="_blank" rel="noopener noreferrer" class="hover:underline text-term-blue">${escapeHtml(v)}</a>`;
            else vv.innerHTML = v;
            hd.appendChild(vk); hd.appendChild(vv);
        };
        
        addRow('OS', d.os); 
        addRow('Host', d.host); 
        
        // Formata "User"
        const userHTML = `<span class="text-term-green font-bold">thierry</span>@ubuntu`;
        addRow('User', userHTML);
        
        // Work: @instagram | website.com.br — em linha única com dois links
        const workHTML = `<a href="${escapeHtml(d.workInstagram)}" target="_blank" rel="noopener noreferrer" class="hover:underline text-term-yellow font-bold">${escapeHtml(d.work)}</a><span class="text-term-fg opacity-30 mx-2">|</span><a href="${escapeHtml(d.workUrl)}" target="_blank" rel="noopener noreferrer" class="hover:underline text-term-blue">${escapeHtml(d.workUrl.replace('https://', ''))}</a>`;
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
            let html = `<div class="font-bold text-term-cyan">${escapeHtml(e.role)}</div>
                        <div class="text-term-fg opacity-50 font-mono">${escapeHtml(e.company)} · ${escapeHtml(e.period)}</div>
                        <p class="text-term-fg opacity-80 mt-1">${escapeHtml(e.description)}</p>
                        <ul class="text-term-fg opacity-70 mt-2 space-y-1">`;
            e.achievements.forEach(a => { html += `<li>> ${escapeHtml(a)}</li>`; });
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
                ? `<a href="${escapeHtml(p.link)}" target="_blank" rel="noopener noreferrer" class="text-term-blue hover:underline">${escapeHtml(p.link.replace(/^https?:\/\//, ''))}</a>`
                : '<span class="text-term-fg opacity-50">private / coming soon</span>';

            item.innerHTML = `
                <div class="font-bold text-term-cyan">${escapeHtml(p.title)}</div>
                <div class="text-term-fg opacity-50 font-mono">Stack · ${escapeHtml(stackLine)}</div>
                <p class="text-term-fg opacity-80 mt-1">${escapeHtml(p.description)}</p>
                <div class="text-term-fg opacity-70 mt-2">> Link: ${linkLine}</div>
            `;

            cont.appendChild(item);
        });

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
    'theme': (args) => {
        const families = getThemeFamilies();
        const activeFamily = state.theme;
        if(!args || args.length === 0) {
            const annotated = families.map(f => f === activeFamily ? `> ${f} [active]` : `  ${f}`).join('\n');
            writeLine(`<pre class="whitespace-pre-wrap font-mono text-term-fg opacity-80 text-sm">${escapeHtml(annotated)}</pre>`, 'text-term-fg opacity-70');
            return;
        }

        const requested = args[0].toLowerCase();
        const themeFamily = requested;

        if(!families.includes(themeFamily)) {
            const best = getClosestMatch(themeFamily, families);
            let out = t('themeNotFound', { theme: requested });
            if(best) out += t('didYouMean', { suggestion: best });
            writeLine(out, 'text-term-red');
        } else {
            state.theme = themeFamily;
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
        const trackable = ['projects', 'experience', 'contact', 'help', 'home', 'about', 'shortcuts', 'theme'];
        const trackableWithArgs = [];
        const routePath = getRouteForCommand(normalizedCmd, args);
        if (trackable.includes(normalizedCmd) || trackableWithArgs.includes(normalizedCmd)) {
            const currentRoute = `${window.location.pathname}${window.location.hash}`;
            if (currentRoute !== routePath) {
                history.pushState(null, null, routePath);
            }
            trackCommand(normalizedCmd, routePath);
            updateDocumentTitle(normalizedCmd);
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

// Allow cancellation of boot animation — both listeners disarm together
const bootControl = { canceled: false };
const abortBoot = () => {
    bootControl.canceled = true;
    window.removeEventListener('keydown', abortBoot);
    window.removeEventListener('click', abortBoot);
};
window.addEventListener('keydown', abortBoot);
window.addEventListener('click', abortBoot);

async function startBootSequence({ replayDeepLink = true } = {}) {
    outputElem.setAttribute('aria-live', 'off');

    let skipHint = null;
    if (!prefersReducedMotion()) {
        skipHint = document.createElement('div');
        skipHint.className = 'boot-skip-hint';
        skipHint.textContent = t('bootSkipHint');
        document.body.appendChild(skipHint);
    }

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

    if (skipHint && skipHint.parentElement) skipHint.parentElement.removeChild(skipHint);
    outputElem.setAttribute('aria-live', 'polite');

    // Trigger focus
    inputElem.focus();
}

// Launch
window.onload = startBootSequence;

// Particles resize coordination (cross-breakpoint awareness)
let lastIsDesktop = window.innerWidth >= 640;
window.addEventListener('resize', () => {
    const nowDesktop = window.innerWidth >= 640;
    if (nowDesktop === lastIsDesktop) return;
    lastIsDesktop = nowDesktop;
    const particlesEl = document.getElementById('particles-js');
    if (!particlesEl) return;
    if (!nowDesktop) {
        particlesEl.innerHTML = '';
    } else if (typeof particlesJS === 'function' && !prefersReducedMotion()) {
        particlesEl.innerHTML = '';
        particlesJS('particles-js', {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 900 } },
                color: { value: ['#50fa7b', '#8be9fd', '#bd93f9', '#f1fa8c', '#ff79c6', '#ffb86c', '#ff5555'] },
                opacity: { value: 0.35, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 140, color: '#ffffff', opacity: 0.12, width: 1 },
                move: { enable: true, speed: 1.2 }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.35 } } }
            },
            retina_detect: true
        });
    }
});
