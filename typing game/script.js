// Keyboard Kombat - Ultimate Typing Game
// Modern ES6+ Implementation with Classes and Advanced Features
// Enhanced with Security, Advanced Modes, and Expanded Content

// Security utility class for input sanitization and validation
class SecurityUtils {
    static sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input.replace(/[<>\"'&]/g, '').trim();
    }

    static validateWord(word) {
        if (typeof word !== 'string' || word.length === 0) return false;
        // Only allow alphanumeric characters, spaces, and basic punctuation
        return /^[a-zA-Z0-9\s.,!?-]+$/.test(word);
    }

    static escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    static validateSettings(settings) {
        const validDifficulties = ['easy', 'medium', 'hard', 'insane'];
        const validThemes = ['dark', 'light', 'neon', 'retro'];
        
        return {
            difficulty: validDifficulties.includes(settings.difficulty) ? settings.difficulty : 'medium',
            theme: validThemes.includes(settings.theme) ? settings.theme : 'dark',
            soundEnabled: Boolean(settings.soundEnabled),
            particlesEnabled: Boolean(settings.particlesEnabled)
        };
    }
}

class GameData {
    static WORDS = {
        easy: [
            'cat', 'dog', 'run', 'jump', 'play', 'book', 'tree', 'sun', 'moon', 'star',
            'hat', 'bat', 'mat', 'sit', 'hit', 'big', 'pig', 'cup', 'pup', 'top',
            'hop', 'red', 'bed', 'yes', 'egg', 'map', 'cap', 'tap', 'lap', 'gap',
            'fan', 'man', 'pan', 'can', 'tan', 'van', 'win', 'pin', 'bin', 'fin',
            'box', 'fox', 'mox', 'sox', 'joy', 'boy', 'toy', 'coy', 'key', 'day'
        ],
        medium: [
            'computer', 'keyboard', 'typing', 'speed', 'accuracy', 'challenge', 'practice', 'improve',
            'learning', 'education', 'knowledge', 'experience', 'development', 'technology', 'software',
            'programming', 'algorithm', 'database', 'network', 'security', 'interface', 'application',
            'function', 'variable', 'constant', 'parameter', 'argument', 'statement', 'expression',
            'condition', 'iteration', 'recursion', 'optimization', 'efficiency', 'performance', 'quality',
            'reliability', 'maintainability', 'scalability', 'flexibility', 'compatibility', 'portability',
            'robustness', 'stability', 'consistency', 'clarity', 'simplicity', 'elegance', 'precision'
        ],
        hard: [
            'extraordinary', 'magnificent', 'sophisticated', 'revolutionary', 'unprecedented', 'incomprehensible',
            'philosophical', 'psychological', 'anthropological', 'archaeological', 'astronomical', 'biological',
            'chemical', 'geological', 'mathematical', 'mechanical', 'meteorological', 'neurological', 'physiological',
            'sociological', 'technological', 'theological', 'theoretical', 'experimental', 'fundamental',
            'comprehensive', 'contemporary', 'conventional', 'conversational', 'cooperative', 'coordination',
            'correspondence', 'demonstration', 'determination', 'development', 'environment', 'establishment',
            'extraordinary', 'fundamental', 'governmental', 'hypothetical', 'identification', 'implementation',
            'infrastructure', 'intellectual', 'international', 'interpretation', 'investigation', 'manufacturing'
        ],
        insane: [
            'pneumonoultramicroscopicsilicovolcanoconioses', 'supercalifragilisticexpialidocious',
            'antidisestablishmentarianism', 'floccinaucinihilipilification', 'pseudopseudohypoparathyroidism',
            'electroencephalographically', 'immunoelectrophoretically', 'psychophysicotherapeutics',
            'thyroparathyroidectomized', 'dichlorodifluoromethane', 'tetrahydrocannabinol',
            'trinitrotoluene', 'dihydrogen', 'monoxide', 'deoxyribonucleic', 'acid', 'deoxyribonucleicacid',
            'trichloroethylene', 'tetrachloroethylene', 'dichlorodiphenyltrichloroethane',
            'methylenedioxymethamphetamine', 'dimethyltryptamine', 'lysergic', 'acid', 'diethylamide',
            'phenylpropanolamine', 'pseudoephedrine', 'acetaminophen', 'ibuprofen', 'naproxen', 'aspirin'
        ]
    };

    static SENTENCES = {
        easy: [
            'The quick brown fox jumps over the lazy dog.',
            'Pack my box with five dozen liquor jugs.',
            'How vexingly quick daft zebras jump!',
            'The five boxing wizards jump quickly.',
            'Sphinx of black quartz, judge my vow.',
            'Bright vixens jump; dozy fowl quack.',
            'Jackdaws love my big sphinx of quartz.',
            'The job requires extra pluck and zeal.',
            'Amazingly few discotheques provide jukeboxes.',
            'The quick brown fox jumps over lazy dogs.'
        ],
        medium: [
            'The five boxing wizards jump quickly through the night sky.',
            'Amazingly few discotheques provide jukeboxes for their patrons.',
            'The job requires extra pluck and zeal from every young wage earner.',
            'Pack my box with five dozen liquor jugs and watch the magic happen.',
            'How vexingly quick daft zebras jump over the lazy fox!',
            'The quick brown fox jumps over the lazy dog while zebras graze nearby.',
            'Programming requires logical thinking and systematic problem-solving skills.',
            'The sphinx of black quartz judges my vow with ancient wisdom.',
            'Bright vixens jump; dozy fowl quack in the morning mist.',
            'Jackdaws love my big sphinx of quartz with their vexing buzz.'
        ],
        hard: [
            'Jackdaws love my big sphinx of quartz with their vexing buzz and ancient wisdom.',
            'The quick brown fox jumps over the lazy dog while zebras graze nearby in perfect harmony.',
            'Programming requires logical thinking and systematic problem-solving skills that transcend mere syntax.',
            'The five boxing wizards jump quickly through the night sky, casting spells of digital magic.',
            'Amazingly few discotheques provide jukeboxes for their patrons in this modern age of streaming.',
            'The job requires extra pluck and zeal from every young wage earner in the competitive market.',
            'Pack my box with five dozen liquor jugs and watch the magic happen before your very eyes.',
            'How vexingly quick daft zebras jump over the lazy fox in this extraordinary display of agility.',
            'The sphinx of black quartz judges my vow with ancient wisdom passed down through generations.',
            'Bright vixens jump; dozy fowl quack in the morning mist as nature awakens to a new day.'
        ]
    };

    static CODE_SNIPPETS = [
        'function calculateSum(a, b) { return a + b; }',
        'const array = [1, 2, 3].map(x => x * 2);',
        'if (condition) { console.log("Hello World"); }',
        'class MyClass { constructor() { this.value = 42; } }',
        'const promise = new Promise((resolve) => resolve(data));',
        'import { useState } from "react"; const [state, setState] = useState(0);',
        'async function fetchData() { const response = await fetch(url); return response.json(); }',
        'const filtered = items.filter(item => item.active).map(item => item.name);',
        'try { await riskyOperation(); } catch (error) { console.error(error); }',
        'const debounced = debounce(() => { expensiveOperation(); }, 300);',
        'useEffect(() => { cleanup(); return () => { cleanup(); }; }, [dependency]);',
        'const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);',
        'const context = createContext(); const Provider = ({ children }) => <context.Provider value={value}>{children}</context.Provider>;',
        'const reducer = (state, action) => { switch (action.type) { case "INCREMENT": return { ...state, count: state.count + 1 }; default: return state; } };',
        'const customHook = () => { const [state, setState] = useState(null); useEffect(() => { /* effect logic */ }, []); return { state, setState }; };'
    ];

    static PROGRAMMING_LANGUAGES = {
        javascript: [
            'const', 'let', 'var', 'function', 'class', 'import', 'export', 'async', 'await',
            'Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Date', 'Math',
            'console', 'setTimeout', 'setInterval', 'fetch', 'JSON', 'localStorage'
        ],
        python: [
            'def', 'class', 'import', 'from', 'as', 'if', 'elif', 'else', 'for', 'while',
            'try', 'except', 'finally', 'with', 'lambda', 'yield', 'return', 'pass',
            'True', 'False', 'None', 'print', 'len', 'range', 'list', 'dict', 'set'
        ],
        java: [
            'public', 'private', 'protected', 'static', 'final', 'abstract', 'class', 'interface',
            'extends', 'implements', 'import', 'package', 'new', 'this', 'super', 'void',
            'int', 'String', 'boolean', 'double', 'float', 'char', 'byte', 'short', 'long'
        ],
        cpp: [
            'int', 'float', 'double', 'char', 'bool', 'void', 'class', 'struct', 'enum',
            'public', 'private', 'protected', 'static', 'const', 'virtual', 'template',
            'namespace', 'using', 'include', 'cout', 'cin', 'endl', 'string', 'vector'
        ]
    };

    static KIDS_CONTENT = {
        princess: {
            letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            words: ['cat', 'dog', 'sun', 'fun', 'run', 'hat', 'bat', 'mat', 'sit', 'hit', 'big', 'pig', 'cup', 'pup', 'top', 'hop', 'red', 'bed', 'yes', 'egg'],
            princess_words: ['crown', 'dress', 'castle', 'magic', 'fairy', 'wand', 'pink', 'pretty', 'dance', 'sing', 'jewel', 'tiara', 'royal', 'queen', 'star', 'princess', 'kingdom', 'ball', 'glass', 'slipper', 'mirror', 'mirror', 'spell', 'charm', 'beauty', 'grace'],
            encouragement: ['Great job!', 'Amazing!', 'Perfect!', 'You did it!', 'Wonderful!', 'Fantastic!', 'Super!', 'Excellent!', 'Magical!', 'Enchanting!', 'Royal!', 'Beautiful!', 'Graceful!', 'Charming!']
        },
        dino: {
            letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            words: ['big', 'run', 'eat', 'fly', 'dig', 'hop', 'egg', 'rex', 'long', 'tall', 'fast', 'loud', 'roar', 'jump', 'play', 'green', 'blue', 'huge', 'tiny', 'cool'],
            dino_words: ['dino', 'roar', 'stomp', 'chomp', 'fossil', 'bones', 'scales', 'claws', 'teeth', 'tail', 'spikes', 'horns', 'jungle', 'cave', 'rock', 't-rex', 'triceratops', 'stegosaurus', 'velociraptor', 'brachiosaurus', 'pterodactyl', 'diplodocus', 'ankylosaurus', 'spinosaurus', 'allosaurus'],
            encouragement: ['ROAR-some!', 'Dino-mite!', 'Prehistoric perfect!', 'T-rific!', 'Rawr-mazing!', 'Fossil fantastic!', 'Dino champion!', 'Extinct-ly awesome!', 'Jurassic genius!', 'Cretaceous cool!', 'Mesozoic marvelous!', 'Paleozoic perfect!']
        },
        numbers: {
            numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            number_words: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
            simple_math: ['1+1', '2+1', '3+1', '2+2', '3+2', '4+1', '5+1', '3+3', '4+2', '5+2', '6+1', '4+3', '5+3', '6+2', '7+1', '5+4', '6+3', '7+2', '8+1', '6+4'],
            encouragement: ['Count-tastic!', 'Number ninja!', 'Math magic!', 'Perfect counting!', 'Number star!', 'Amazing addition!', 'Super counter!', 'Number hero!', 'Counting champion!', 'Math master!', 'Number wizard!', 'Arithmetic ace!']
        }
    };

    static ACHIEVEMENTS = [
        // Basic Achievements
        { id: 'first_game', name: 'First Steps', description: 'Play your first game', icon: '🎮', unlocked: false, points: 10 },
        { id: 'speed_demon', name: 'Speed Demon', description: 'Reach 60 WPM', icon: '⚡', unlocked: false, points: 50 },
        { id: 'accuracy_master', name: 'Accuracy Master', description: 'Achieve 95% accuracy', icon: '🎯', unlocked: false, points: 50 },
        { id: 'combo_king', name: 'Combo King', description: 'Get a 20x combo', icon: '🔥', unlocked: false, points: 30 },
        { id: 'perfectionist', name: 'Perfectionist', description: '100% accuracy in a game', icon: '💎', unlocked: false, points: 100 },
        { id: 'marathon_runner', name: 'Marathon Runner', description: 'Play 50 games', icon: '🏃', unlocked: false, points: 75 },
        
        // Kids Achievements
        { id: 'little_learner', name: 'Little Learner', description: 'Complete first kids game', icon: '🌟', unlocked: false, points: 25 },
        { id: 'princess_power', name: 'Princess Power', description: 'Master princess mode', icon: '👸', unlocked: false, points: 40 },
        { id: 'dino_champion', name: 'Dino Champion', description: 'Roar through dino mode', icon: '🦕', unlocked: false, points: 40 },
        { id: 'number_wizard', name: 'Number Wizard', description: 'Count like a pro', icon: '🔢', unlocked: false, points: 40 },
        
        // Advanced Achievements
        { id: 'speed_master', name: 'Speed Master', description: 'Reach 100 WPM', icon: '🚀', unlocked: false, points: 100 },
        { id: 'ultra_accuracy', name: 'Ultra Accuracy', description: 'Achieve 99% accuracy', icon: '🎯', unlocked: false, points: 150 },
        { id: 'combo_master', name: 'Combo Master', description: 'Get a 50x combo', icon: '🔥', unlocked: false, points: 75 },
        { id: 'word_smith', name: 'Word Smith', description: 'Type 1000 words total', icon: '📝', unlocked: false, points: 50 },
        { id: 'sentence_master', name: 'Sentence Master', description: 'Complete 100 sentences', icon: '📖', unlocked: false, points: 60 },
        { id: 'code_ninja', name: 'Code Ninja', description: 'Master code mode', icon: '💻', unlocked: false, points: 80 },
        { id: 'insane_mode', name: 'Insane Mode', description: 'Complete insane difficulty', icon: '😱', unlocked: false, points: 200 },
        { id: 'theme_collector', name: 'Theme Collector', description: 'Try all themes', icon: '🎨', unlocked: false, points: 30 },
        { id: 'daily_player', name: 'Daily Player', description: 'Play for 7 consecutive days', icon: '📅', unlocked: false, points: 100 },
        { id: 'night_owl', name: 'Night Owl', description: 'Play at night (10 PM - 6 AM)', icon: '🦉', unlocked: false, points: 25 },
        { id: 'early_bird', name: 'Early Bird', description: 'Play in the morning (6 AM - 10 AM)', icon: '🐦', unlocked: false, points: 25 },
        { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Play on weekends', icon: '🏆', unlocked: false, points: 30 },
        { id: 'streak_master', name: 'Streak Master', description: 'Maintain 10-day streak', icon: '🔥', unlocked: false, points: 150 },
        { id: 'multi_mode', name: 'Multi-Mode', description: 'Try all game modes', icon: '🎮', unlocked: false, points: 50 },
        { id: 'language_explorer', name: 'Language Explorer', description: 'Try all programming languages', icon: '🌍', unlocked: false, points: 60 }
    ];

    static PROGRESSION_LEVELS = [
        { level: 1, name: 'Novice', minScore: 0, color: '#6c757d' },
        { level: 2, name: 'Apprentice', minScore: 100, color: '#28a745' },
        { level: 3, name: 'Adept', minScore: 300, color: '#17a2b8' },
        { level: 4, name: 'Expert', minScore: 600, color: '#ffc107' },
        { level: 5, name: 'Master', minScore: 1000, color: '#fd7e14' },
        { level: 6, name: 'Grandmaster', minScore: 1500, color: '#dc3545' },
        { level: 7, name: 'Legend', minScore: 2200, color: '#6f42c1' },
        { level: 8, name: 'Mythic', minScore: 3000, color: '#e83e8c' },
        { level: 9, name: 'Divine', minScore: 4000, color: '#20c997' },
        { level: 10, name: 'Transcendent', minScore: 5000, color: '#ff6b6b' }
    ];
}

class AudioManager {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.initSounds();
    }

    initSounds() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            this.soundPatterns = {
                correct: { frequency: 800, duration: 0.1, type: 'sine' },
                wrong: { frequency: 200, duration: 0.3, type: 'square' },
                combo: { frequency: 1000, duration: 0.2, type: 'triangle' },
                levelUp: { frequency: 600, duration: 0.5, type: 'sawtooth' },
                gameOver: { frequency: 150, duration: 1.0, type: 'square' }
            };
        } catch (e) {
            console.warn('Audio not supported');
            this.audioContext = null;
        }
    }

    playSound(soundType) {
        if (!this.enabled || !this.audioContext) return;

        try {
            const pattern = this.soundPatterns[soundType];
            if (!pattern) return;

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.setValueAtTime(pattern.frequency, this.audioContext.currentTime);
            oscillator.type = pattern.type;

            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + pattern.duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + pattern.duration);
        } catch (e) {
            console.warn('Sound playback failed:', e);
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = document.getElementById('particles-container');
        this.enabled = true;
    }

    createParticle(x, y, type = 'success') {
        if (!this.enabled) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const colors = {
            success: '#51cf66',
            error: '#ff6b6b',
            combo: '#00d4ff',
            levelUp: '#ffd43b'
        };

        const size = Math.random() * 8 + 4;
        particle.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[type] || colors.success};
            box-shadow: 0 0 ${size * 2}px ${colors[type] || colors.success};
        `;

        this.container.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }

    createBurst(x, y, count = 10, type = 'success') {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createParticle(
                    x + (Math.random() - 0.5) * 50,
                    y + (Math.random() - 0.5) * 50,
                    type
                );
            }, i * 50);
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) {
            const particles = this.container.querySelectorAll('.particle');
            particles.forEach(p => p.remove());
        }
    }
}

class Statistics {
    constructor() {
        this.data = this.loadStats();
        this.currentStreak = 0;
        this.lastPlayDate = null;
        this.themesUsed = new Set();
        this.modesPlayed = new Set();
        this.languagesTried = new Set();
        this.dailyStats = this.loadDailyStats();
    }

    loadStats() {
        const defaultStats = {
            gamesPlayed: 0,
            bestWPM: 0,
            bestAccuracy: 0,
            highScore: 0,
            totalWordsTyped: 0,
            totalTimeSpent: 0,
            totalScore: 0,
            currentStreak: 0,
            longestStreak: 0,
            lastPlayDate: null,
            themesUsed: [],
            modesPlayed: [],
            languagesTried: [],
            achievements: [...GameData.ACHIEVEMENTS],
            progressionLevel: 1,
            progressionPoints: 0,
            sessionStats: {
                today: { games: 0, words: 0, time: 0, score: 0 },
                week: { games: 0, words: 0, time: 0, score: 0 },
                month: { games: 0, words: 0, time: 0, score: 0 }
            }
        };

        try {
            const saved = localStorage.getItem('keyboardKombatStats');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Validate and sanitize the data
                const validated = this.validateStats(parsed);
                return { ...defaultStats, ...validated };
            }
            return defaultStats;
        } catch (e) {
            console.warn('Could not load stats, using defaults');
            return defaultStats;
        }
    }

    validateStats(stats) {
        // Security: Validate all numeric values
        const validated = {};
        const numericFields = ['gamesPlayed', 'bestWPM', 'bestAccuracy', 'highScore', 'totalWordsTyped', 'totalTimeSpent', 'totalScore', 'currentStreak', 'longestStreak', 'progressionLevel', 'progressionPoints'];
        
        numericFields.forEach(field => {
            const value = Number(stats[field]);
            validated[field] = isNaN(value) || value < 0 ? 0 : value;
        });

        // Validate arrays and objects
        validated.themesUsed = Array.isArray(stats.themesUsed) ? stats.themesUsed : [];
        validated.modesPlayed = Array.isArray(stats.modesPlayed) ? stats.modesPlayed : [];
        validated.languagesTried = Array.isArray(stats.languagesTried) ? stats.languagesTried : [];
        validated.achievements = Array.isArray(stats.achievements) ? stats.achievements : [...GameData.ACHIEVEMENTS];
        
        // Validate session stats
        validated.sessionStats = stats.sessionStats && typeof stats.sessionStats === 'object' ? stats.sessionStats : {
            today: { games: 0, words: 0, time: 0, score: 0 },
            week: { games: 0, words: 0, time: 0, score: 0 },
            month: { games: 0, words: 0, time: 0, score: 0 }
        };

        return validated;
    }

    loadDailyStats() {
        try {
            const saved = localStorage.getItem('keyboardKombatDailyStats');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            return {};
        }
    }

    saveStats() {
        try {
            // Sanitize data before saving
            const dataToSave = {
                ...this.data,
                themesUsed: Array.from(this.themesUsed),
                modesPlayed: Array.from(this.modesPlayed),
                languagesTried: Array.from(this.languagesTried)
            };
            localStorage.setItem('keyboardKombatStats', JSON.stringify(dataToSave));
            localStorage.setItem('keyboardKombatDailyStats', JSON.stringify(this.dailyStats));
        } catch (e) {
            console.warn('Could not save stats');
        }
    }

    updateGameStats(score, wpm, accuracy, wordsTyped, timeSpent, mode = 'unknown', theme = 'dark', language = null) {
        const now = new Date();
        const today = now.toDateString();
        
        // Update basic stats
        this.data.gamesPlayed++;
        this.data.bestWPM = Math.max(this.data.bestWPM, wpm);
        this.data.bestAccuracy = Math.max(this.data.bestAccuracy, accuracy);
        this.data.highScore = Math.max(this.data.highScore, score);
        this.data.totalWordsTyped += wordsTyped;
        this.data.totalTimeSpent += timeSpent;
        this.data.totalScore += score;
        
        // Update progression
        this.data.progressionPoints += Math.floor(score / 10);
        this.updateProgressionLevel();
        
        // Update streaks
        this.updateStreak(today);
        
        // Track themes, modes, and languages
        this.themesUsed.add(theme);
        this.modesPlayed.add(mode);
        if (language) this.languagesTried.add(language);
        
        // Update session stats
        this.updateSessionStats(today, wordsTyped, timeSpent, score);
        
        // Check achievements
        this.checkAchievements(score, wpm, accuracy, mode, theme, language);
        
        this.saveStats();
    }

    updateStreak(today) {
        if (this.data.lastPlayDate === today) {
            // Already played today, don't update streak
            return;
        }
        
        const lastDate = this.data.lastPlayDate ? new Date(this.data.lastPlayDate) : null;
        const todayDate = new Date(today);
        
        if (!lastDate || this.isConsecutiveDay(lastDate, todayDate)) {
            this.data.currentStreak++;
        } else {
            this.data.currentStreak = 1;
        }
        
        this.data.longestStreak = Math.max(this.data.longestStreak, this.data.currentStreak);
        this.data.lastPlayDate = today;
    }

    isConsecutiveDay(lastDate, todayDate) {
        const diffTime = todayDate - lastDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 1;
    }

    updateSessionStats(today, wordsTyped, timeSpent, score) {
        // Update today's stats
        if (!this.dailyStats[today]) {
            this.dailyStats[today] = { games: 0, words: 0, time: 0, score: 0 };
        }
        
        this.dailyStats[today].games++;
        this.dailyStats[today].words += wordsTyped;
        this.dailyStats[today].time += timeSpent;
        this.dailyStats[today].score += score;
        
        // Update weekly and monthly stats
        this.updatePeriodStats();
    }

    updatePeriodStats() {
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        
        let weekStats = { games: 0, words: 0, time: 0, score: 0 };
        let monthStats = { games: 0, words: 0, time: 0, score: 0 };
        
        Object.entries(this.dailyStats).forEach(([dateStr, stats]) => {
            const date = new Date(dateStr);
            if (date >= weekAgo) {
                weekStats.games += stats.games;
                weekStats.words += stats.words;
                weekStats.time += stats.time;
                weekStats.score += stats.score;
            }
            if (date >= monthAgo) {
                monthStats.games += stats.games;
                monthStats.words += stats.words;
                monthStats.time += stats.time;
                monthStats.score += stats.score;
            }
        });
        
        this.data.sessionStats.week = weekStats;
        this.data.sessionStats.month = monthStats;
    }

    updateProgressionLevel() {
        const currentLevel = GameData.PROGRESSION_LEVELS.find(level => 
            this.data.progressionPoints >= level.minScore
        );
        
        if (currentLevel && currentLevel.level > this.data.progressionLevel) {
            this.data.progressionLevel = currentLevel.level;
            this.showLevelUpNotification(currentLevel);
        }
    }

    showLevelUpNotification(level) {
        const notification = document.createElement('div');
        notification.className = 'level-up-notification';
        notification.innerHTML = `
            <div class="level-up-icon">⭐</div>
            <div class="level-up-text">
                <h4>Level Up!</h4>
                <p>${level.name}</p>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    checkAchievements(score, wpm, accuracy, mode, theme, language) {
        const achievements = this.data.achievements;
        
        // Basic achievements
        if (this.data.gamesPlayed >= 1 && !this.isAchievementUnlocked('first_game')) {
            this.unlockAchievement('first_game');
        }
        
        if (wpm >= 60 && !this.isAchievementUnlocked('speed_demon')) {
            this.unlockAchievement('speed_demon');
        }
        
        if (wpm >= 100 && !this.isAchievementUnlocked('speed_master')) {
            this.unlockAchievement('speed_master');
        }
        
        if (accuracy >= 95 && !this.isAchievementUnlocked('accuracy_master')) {
            this.unlockAchievement('accuracy_master');
        }
        
        if (accuracy >= 99 && !this.isAchievementUnlocked('ultra_accuracy')) {
            this.unlockAchievement('ultra_accuracy');
        }
        
        if (accuracy === 100 && !this.isAchievementUnlocked('perfectionist')) {
            this.unlockAchievement('perfectionist');
        }
        
        if (this.data.gamesPlayed >= 50 && !this.isAchievementUnlocked('marathon_runner')) {
            this.unlockAchievement('marathon_runner');
        }
        
        if (this.data.totalWordsTyped >= 1000 && !this.isAchievementUnlocked('word_smith')) {
            this.unlockAchievement('word_smith');
        }
        
        // Theme and mode achievements
        if (this.themesUsed.size >= 4 && !this.isAchievementUnlocked('theme_collector')) {
            this.unlockAchievement('theme_collector');
        }
        
        if (this.modesPlayed.size >= 5 && !this.isAchievementUnlocked('multi_mode')) {
            this.unlockAchievement('multi_mode');
        }
        
        if (this.languagesTried.size >= 4 && !this.isAchievementUnlocked('language_explorer')) {
            this.unlockAchievement('language_explorer');
        }
        
        // Time-based achievements
        this.checkTimeBasedAchievements();
        
        // Streak achievements
        if (this.data.currentStreak >= 10 && !this.isAchievementUnlocked('streak_master')) {
            this.unlockAchievement('streak_master');
        }
    }

    checkTimeBasedAchievements() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();
        
        // Night owl achievement (10 PM - 6 AM)
        if ((hour >= 22 || hour < 6) && !this.isAchievementUnlocked('night_owl')) {
            this.unlockAchievement('night_owl');
        }
        
        // Early bird achievement (6 AM - 10 AM)
        if (hour >= 6 && hour < 10 && !this.isAchievementUnlocked('early_bird')) {
            this.unlockAchievement('early_bird');
        }
        
        // Weekend warrior achievement
        if ((day === 0 || day === 6) && !this.isAchievementUnlocked('weekend_warrior')) {
            this.unlockAchievement('weekend_warrior');
        }
    }

    isAchievementUnlocked(achievementId) {
        const achievement = this.data.achievements.find(a => a.id === achievementId);
        return achievement ? achievement.unlocked : false;
    }

    unlockAchievement(achievementId) {
        const achievement = this.data.achievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            achievement.unlockedDate = new Date().toISOString();
            this.data.progressionPoints += achievement.points || 10;
            this.showAchievementNotification(achievement);
            this.updateProgressionLevel();
        }
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${SecurityUtils.escapeHtml(achievement.icon)}</div>
            <div class="achievement-text">
                <h4>Achievement Unlocked!</h4>
                <p>${SecurityUtils.escapeHtml(achievement.name)}</p>
                <small>+${achievement.points || 10} points</small>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    getCurrentLevel() {
        return GameData.PROGRESSION_LEVELS.find(level => 
            this.data.progressionPoints >= level.minScore
        ) || GameData.PROGRESSION_LEVELS[0];
    }

    getProgressToNextLevel() {
        const currentLevel = this.getCurrentLevel();
        const nextLevel = GameData.PROGRESSION_LEVELS.find(level => level.level > currentLevel.level);
        
        if (!nextLevel) return 1; // Max level reached
        
        const progress = (this.data.progressionPoints - currentLevel.minScore) / (nextLevel.minScore - currentLevel.minScore);
        return Math.min(Math.max(progress, 0), 1);
    }
}

class Settings {
    constructor() {
        this.data = this.loadSettings();
        this.applyTheme();
    }

    loadSettings() {
        const defaultSettings = {
            difficulty: 'medium',
            theme: 'dark',
            soundEnabled: true,
            particlesEnabled: true,
            autoSave: true,
            showProgress: true,
            showCombo: true,
            showParticles: true,
            keyboardLayout: 'qwerty',
            language: 'javascript',
            customWords: [],
            accessibility: {
                highContrast: false,
                largeText: false,
                reducedMotion: false,
                screenReader: false
            }
        };

        try {
            const saved = localStorage.getItem('keyboardKombatSettings');
            if (saved) {
                const parsed = JSON.parse(saved);
                const validated = SecurityUtils.validateSettings(parsed);
                return { ...defaultSettings, ...validated };
            }
            return defaultSettings;
        } catch (e) {
            console.warn('Could not load settings, using defaults');
            return defaultSettings;
        }
    }

    saveSettings() {
        try {
            // Sanitize settings before saving
            const sanitizedSettings = {
                ...this.data,
                customWords: this.data.customWords.filter(word => 
                    SecurityUtils.validateWord(word)
                ).slice(0, 100) // Limit to 100 custom words
            };
            localStorage.setItem('keyboardKombatSettings', JSON.stringify(sanitizedSettings));
        } catch (e) {
            console.warn('Could not save settings');
        }
    }

    updateSetting(key, value) {
        // Validate the setting before updating
        if (this.validateSetting(key, value)) {
            this.data[key] = value;
            this.saveSettings();
            
            if (key === 'theme') {
                this.applyTheme();
            }
            
            if (key.startsWith('accessibility.')) {
                this.applyAccessibilitySettings();
            }
        }
    }

    validateSetting(key, value) {
        switch (key) {
            case 'difficulty':
                return ['easy', 'medium', 'hard', 'insane'].includes(value);
            case 'theme':
                return ['dark', 'light', 'neon', 'retro'].includes(value);
            case 'soundEnabled':
            case 'particlesEnabled':
            case 'autoSave':
            case 'showProgress':
            case 'showCombo':
            case 'showParticles':
                return typeof value === 'boolean';
            case 'keyboardLayout':
                return ['qwerty', 'azerty', 'dvorak'].includes(value);
            case 'language':
                return Object.keys(GameData.PROGRAMMING_LANGUAGES).includes(value);
            case 'customWords':
                return Array.isArray(value) && value.every(word => SecurityUtils.validateWord(word));
            default:
                return true;
        }
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.data.theme);
        
        // Apply accessibility settings
        this.applyAccessibilitySettings();
    }

    applyAccessibilitySettings() {
        const { accessibility } = this.data;
        
        if (accessibility.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
        
        if (accessibility.largeText) {
            document.body.classList.add('large-text');
        } else {
            document.body.classList.remove('large-text');
        }
        
        if (accessibility.reducedMotion) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    }

    addCustomWord(word) {
        const sanitizedWord = SecurityUtils.sanitizeInput(word);
        if (SecurityUtils.validateWord(sanitizedWord) && !this.data.customWords.includes(sanitizedWord)) {
            this.data.customWords.push(sanitizedWord);
            this.saveSettings();
            return true;
        }
        return false;
    }

    removeCustomWord(word) {
        const index = this.data.customWords.indexOf(word);
        if (index > -1) {
            this.data.customWords.splice(index, 1);
            this.saveSettings();
            return true;
        }
        return false;
    }

    getCustomWords() {
        return [...this.data.customWords];
    }
}

class FallingItem {
    constructor(text, x, speed, container) {
        this.text = text.toLowerCase();
        this.originalText = text;
        this.x = x;
        this.y = 0;
        this.speed = speed;
        this.container = container;
        this.matched = '';
        this.element = this.createElement();
        this.isActive = true;
    }

    createElement() {
        const element = document.createElement('div');
        element.className = 'falling-item';
        element.textContent = this.originalText;
        element.style.left = `${this.x}%`;
        element.style.top = '0px';
        this.container.appendChild(element);
        return element;
    }

    update() {
        if (!this.isActive) return false;
        
        this.y += this.speed;
        this.element.style.top = `${this.y}px`;
        
        return this.y < window.innerHeight;
    }

    checkMatch(input) {
        const inputLower = input.toLowerCase();
        
        if (this.text.startsWith(inputLower)) {
            this.matched = inputLower;
            this.updateVisual();
            
            if (this.text === inputLower) {
                return 'complete';
            }
            return 'partial';
        } else {
            this.matched = '';
            this.updateVisual();
            return 'wrong';
        }
    }

    updateVisual() {
        if (this.matched) {
            this.element.innerHTML = `<span style="color: var(--success)">${this.matched}</span>${this.originalText.slice(this.matched.length)}`;
        } else {
            this.element.textContent = this.originalText;
        }
    }

    destroy() {
        this.isActive = false;
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}

class GameEngine {
    constructor() {
        this.currentMode = 'letters';
        this.difficulty = 'medium';
        this.isRunning = false;
        this.isPaused = false;
        this.score = 0;
        this.level = 1;
        this.combo = 0;
        this.maxCombo = 0;
        this.correctInputs = 0;
        this.totalInputs = 0;
        this.wordsTyped = 0;
        this.startTime = null;
        this.currentInput = '';
        this.fallingItems = [];
        this.spawnTimer = null;
        this.gameTimer = null;
        
        this.audioManager = new AudioManager();
        this.particleSystem = new ParticleSystem();
        this.statistics = new Statistics();
        this.settings = new Settings();
        
        this.initializeElements();
        this.bindEvents();
        this.updateUI();
    }

    initializeElements() {
        this.screens = {
            menu: document.getElementById('main-menu'),
            game: document.getElementById('game-container'),
            settings: document.getElementById('settings-screen'),
            stats: document.getElementById('stats-screen')
        };

        this.gameElements = {
            scoreValue: document.getElementById('score-value'),
            wpmValue: document.getElementById('wpm-value'),
            accuracyValue: document.getElementById('accuracy-value'),
            levelValue: document.getElementById('level-value'),
            currentInput: document.getElementById('current-input'),
            fallingContainer: document.getElementById('falling-items-container'),
            comboDisplay: document.getElementById('combo-display'),
            comboValue: document.getElementById('combo-value')
        };

        this.overlays = {
            pause: document.getElementById('pause-overlay'),
            gameOver: document.getElementById('game-over-overlay')
        };
    }

    bindEvents() {
        document.querySelectorAll('.mode-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.startGame(mode);
            });
        });

        // Kids mode buttons
        document.querySelectorAll('.kids-mode-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.startKidsGame(mode);
            });
        });

        // Main menu navigation
        document.getElementById('view-all-achievements')?.addEventListener('click', () => this.showStats());
        document.getElementById('advanced-settings-button')?.addEventListener('click', () => this.showSettings());
        document.getElementById('detailed-stats-button')?.addEventListener('click', () => this.showStats());
        
        // Quick settings in main menu
        document.getElementById('quick-difficulty')?.addEventListener('change', (e) => {
            this.settings.updateSetting('difficulty', e.target.value);
            this.difficulty = e.target.value;
        });

        document.getElementById('quick-theme')?.addEventListener('change', (e) => {
            this.settings.updateSetting('theme', e.target.value);
        });

        document.getElementById('quick-sound')?.addEventListener('change', (e) => {
            this.settings.updateSetting('soundEnabled', e.target.checked);
            this.audioManager.setEnabled(e.target.checked);
        });

        document.getElementById('quick-particles')?.addEventListener('change', (e) => {
            this.settings.updateSetting('particlesEnabled', e.target.checked);
            this.particleSystem.setEnabled(e.target.checked);
        });
        document.getElementById('close-settings')?.addEventListener('click', () => this.showMenu());
        document.getElementById('close-stats')?.addEventListener('click', () => this.showMenu());

        document.getElementById('pause-button')?.addEventListener('click', () => this.togglePause());
        document.getElementById('back-menu-button')?.addEventListener('click', () => this.quitToMenu());
        
        document.getElementById('resume-button')?.addEventListener('click', () => this.togglePause());
        document.getElementById('restart-button')?.addEventListener('click', () => this.restartGame());
        document.getElementById('quit-button')?.addEventListener('click', () => this.quitToMenu());

        document.getElementById('play-again-button')?.addEventListener('click', () => this.restartGame());
        document.getElementById('menu-button')?.addEventListener('click', () => this.showMenu());

        document.getElementById('difficulty-select')?.addEventListener('change', (e) => {
            this.settings.updateSetting('difficulty', e.target.value);
            this.difficulty = e.target.value;
        });

        document.getElementById('theme-select')?.addEventListener('change', (e) => {
            this.settings.updateSetting('theme', e.target.value);
        });

        document.getElementById('sound-toggle')?.addEventListener('change', (e) => {
            this.settings.updateSetting('soundEnabled', e.target.checked);
            this.audioManager.setEnabled(e.target.checked);
        });

        document.getElementById('particles-toggle')?.addEventListener('change', (e) => {
            this.settings.updateSetting('particlesEnabled', e.target.checked);
            this.particleSystem.setEnabled(e.target.checked);
        });

        document.addEventListener('keydown', (e) => this.handleKeyInput(e));
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.style.display = 'none';
        });
        
        if (this.screens[screenName]) {
            this.screens[screenName].style.display = 'flex';
        }
    }

    showMenu() {
        this.showScreen('menu');
        this.updateMainMenuDisplay();
    }

    showSettings() {
        this.showScreen('settings');
        this.updateSettingsDisplay();
    }

    showStats() {
        this.showScreen('stats');
        this.updateStatsDisplay();
    }

    updateMainMenuDisplay() {
        this.updateQuickStats();
        this.updateAchievementsPreview();
        this.updateQuickSettings();
        this.updateStatsPreview();
    }

    updateQuickStats() {
        const stats = this.statistics.data;
        
        const headerBestWpm = document.getElementById('header-best-wpm');
        const headerBestAccuracy = document.getElementById('header-best-accuracy');
        const headerHighScore = document.getElementById('header-high-score');
        const headerGamesPlayed = document.getElementById('header-games-played');

        if (headerBestWpm) headerBestWpm.textContent = Math.round(stats.bestWPM);
        if (headerBestAccuracy) headerBestAccuracy.textContent = `${Math.round(stats.bestAccuracy)}%`;
        if (headerHighScore) headerHighScore.textContent = stats.highScore;
        if (headerGamesPlayed) headerGamesPlayed.textContent = stats.gamesPlayed;
        
        // Update progression display
        this.updateProgressionDisplay();
    }

    updateProgressionDisplay() {
        const currentLevel = this.statistics.getCurrentLevel();
        const progress = this.statistics.getProgressToNextLevel();
        
        const progressionLevel = document.getElementById('progression-level');
        const progressionName = document.getElementById('progression-name');
        const progressBarFill = document.getElementById('progress-bar-fill');
        const progressionPoints = document.getElementById('progression-points');
        
        if (progressionLevel) progressionLevel.textContent = `Level ${currentLevel.level}`;
        if (progressionName) progressionName.textContent = currentLevel.name;
        if (progressBarFill) progressBarFill.style.width = `${progress * 100}%`;
        if (progressionPoints) progressionPoints.textContent = `${this.statistics.data.progressionPoints} points`;
        
        // Update progress bar color based on level
        if (progressBarFill) {
            progressBarFill.style.background = `linear-gradient(90deg, ${currentLevel.color}, ${currentLevel.color}88)`;
        }
    }

    updateAchievementsPreview() {
        const achievementsPreview = document.getElementById('achievements-preview');
        if (!achievementsPreview) return;

        achievementsPreview.innerHTML = '';
        
        // Show first 3 achievements (mix of unlocked and locked)
        const achievements = this.statistics.data.achievements;
        const previewAchievements = achievements.slice(0, 3);
        
        previewAchievements.forEach(achievement => {
            const achievementElement = document.createElement('div');
            achievementElement.className = `achievement-mini ${achievement.unlocked ? 'unlocked' : ''}`;
            achievementElement.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                </div>
            `;
            achievementsPreview.appendChild(achievementElement);
        });
    }

    updateQuickSettings() {
        const quickDifficulty = document.getElementById('quick-difficulty');
        const quickTheme = document.getElementById('quick-theme');
        const quickSound = document.getElementById('quick-sound');
        const quickParticles = document.getElementById('quick-particles');

        if (quickDifficulty) quickDifficulty.value = this.settings.data.difficulty;
        if (quickTheme) quickTheme.value = this.settings.data.theme;
        if (quickSound) quickSound.checked = this.settings.data.soundEnabled;
        if (quickParticles) quickParticles.checked = this.settings.data.particlesEnabled;
    }

    updateStatsPreview() {
        const stats = this.statistics.data;
        
        const previewTotalWords = document.getElementById('preview-total-words');
        const previewTotalTime = document.getElementById('preview-total-time');
        const previewStreak = document.getElementById('preview-streak');

        if (previewTotalWords) previewTotalWords.textContent = stats.totalWordsTyped.toLocaleString();
        if (previewTotalTime) {
            const hours = Math.floor(stats.totalTimeSpent / 3600);
            const minutes = Math.floor((stats.totalTimeSpent % 3600) / 60);
            previewTotalTime.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        }
        if (previewStreak) previewStreak.textContent = this.maxCombo || 0;
    }

    updateSettingsDisplay() {
        const difficultySelect = document.getElementById('difficulty-select');
        const themeSelect = document.getElementById('theme-select');
        const soundToggle = document.getElementById('sound-toggle');
        const particlesToggle = document.getElementById('particles-toggle');

        if (difficultySelect) difficultySelect.value = this.settings.data.difficulty;
        if (themeSelect) themeSelect.value = this.settings.data.theme;
        if (soundToggle) soundToggle.checked = this.settings.data.soundEnabled;
        if (particlesToggle) particlesToggle.checked = this.settings.data.particlesEnabled;
        
        // Also update quick settings
        this.updateQuickSettings();
    }

    updateStatsDisplay() {
        const stats = this.statistics.data;
        const bestWpm = document.getElementById('best-wpm');
        const bestAccuracy = document.getElementById('best-accuracy');
        const highScore = document.getElementById('high-score');
        const gamesPlayed = document.getElementById('games-played');

        if (bestWpm) bestWpm.textContent = Math.round(stats.bestWPM);
        if (bestAccuracy) bestAccuracy.textContent = `${Math.round(stats.bestAccuracy)}%`;
        if (highScore) highScore.textContent = stats.highScore;
        if (gamesPlayed) gamesPlayed.textContent = stats.gamesPlayed;

        const achievementsList = document.getElementById('achievements-list');
        if (achievementsList) {
            achievementsList.innerHTML = '';
            
            stats.achievements.forEach(achievement => {
                const achievementElement = document.createElement('div');
                achievementElement.className = `achievement ${achievement.unlocked ? 'unlocked' : ''}`;
                achievementElement.innerHTML = `
                    <div class="achievement-icon">${achievement.icon}</div>
                    <div class="achievement-info">
                        <h4>${achievement.name}</h4>
                        <p>${achievement.description}</p>
                    </div>
                `;
                achievementsList.appendChild(achievementElement);
            });
        }
    }

    startGame(mode) {
        this.currentMode = mode;
        this.difficulty = this.settings.data.difficulty;
        this.isKidsMode = false;
        this.resetGameState();
        this.showScreen('game');
        this.isRunning = true;
        this.startTime = Date.now();
        
        this.gameTimer = setInterval(() => this.gameLoop(), 16);
        this.scheduleNextSpawn();
        
        this.updateUI();
    }

    startKidsGame(mode) {
        this.currentMode = mode;
        this.difficulty = 'easy'; // Always easy for kids
        this.isKidsMode = true;
        this.resetGameState();
        this.showScreen('game');
        this.isRunning = true;
        this.startTime = Date.now();
        
        // Add kids-specific styling to game area
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.classList.add('kids-game-mode', `${mode}-theme`);
        }
        
        this.gameTimer = setInterval(() => this.gameLoop(), 16);
        this.scheduleNextSpawn();
        
        this.updateUI();
        this.showKidsEncouragement('Ready to play? Let\'s go!');
    }

    resetGameState() {
        this.score = 0;
        this.level = 1;
        this.combo = 0;
        this.maxCombo = 0;
        this.correctInputs = 0;
        this.totalInputs = 0;
        this.wordsTyped = 0;
        this.currentInput = '';
        this.isPaused = false;
        
        this.fallingItems.forEach(item => item.destroy());
        this.fallingItems = [];
        
        if (this.spawnTimer) clearTimeout(this.spawnTimer);
        if (this.gameTimer) clearInterval(this.gameTimer);
        
        if (this.gameElements.comboDisplay) {
            this.gameElements.comboDisplay.style.display = 'none';
        }
        
        const pauseIcon = document.getElementById('pause-icon');
        if (pauseIcon) pauseIcon.textContent = '⏸️';
    }

    gameLoop() {
        if (!this.isRunning || this.isPaused) return;

        this.fallingItems = this.fallingItems.filter(item => {
            const stillVisible = item.update();
            if (!stillVisible) {
                item.destroy();
                this.resetCombo();
                return false;
            }
            return true;
        });

        this.updateUI();
    }

    scheduleNextSpawn() {
        if (!this.isRunning || this.isPaused) return;

        const difficultyMultiplier = {
            easy: 1.5,
            medium: 1.0,
            hard: 0.7,
            insane: 0.4
        };

        const baseDelay = 2000;
        const levelSpeedUp = Math.max(0.3, 1 - (this.level - 1) * 0.1);
        const delay = baseDelay * difficultyMultiplier[this.difficulty] * levelSpeedUp;

        this.spawnTimer = setTimeout(() => {
            this.spawnItem();
            this.scheduleNextSpawn();
        }, delay);
    }

    spawnItem() {
        if (!this.isRunning || this.isPaused) return;

        const content = this.generateContent();
        const x = Math.random() * 85 + 5;
        const speed = this.getSpeedForDifficulty();
        
        const item = new FallingItem(content, x, speed, this.gameElements.fallingContainer);
        this.fallingItems.push(item);
    }

    generateContent() {
        if (this.isKidsMode) {
            return this.generateKidsContent();
        }

        switch (this.currentMode) {
            case 'letters':
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            
            case 'words':
                return this.generateWordContent();
            
            case 'sentences':
                const sentenceList = GameData.SENTENCES[this.difficulty] || GameData.SENTENCES.medium;
                return sentenceList[Math.floor(Math.random() * sentenceList.length)];
            
            case 'code':
                return this.generateCodeContent();
            
            case 'speed':
                const types = ['letters', 'words', 'code'];
                const randomType = types[Math.floor(Math.random() * types.length)];
                return this.generateContentForType(randomType);
            
            case 'programming':
                return this.generateProgrammingContent();
            
            case 'custom':
                return this.generateCustomContent();
            
            case 'mixed':
                return this.generateMixedContent();
            
            default:
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
    }

    generateWordContent() {
        // Include custom words if available
        const customWords = this.settings.getCustomWords();
        const wordList = GameData.WORDS[this.difficulty] || GameData.WORDS.medium;
        
        // 20% chance to use custom words if available
        if (customWords.length > 0 && Math.random() < 0.2) {
            return customWords[Math.floor(Math.random() * customWords.length)];
        }
        
        return wordList[Math.floor(Math.random() * wordList.length)];
    }

    generateCodeContent() {
        // 70% chance for code snippets, 30% for programming keywords
        if (Math.random() < 0.7) {
            return GameData.CODE_SNIPPETS[Math.floor(Math.random() * GameData.CODE_SNIPPETS.length)];
        } else {
            const language = this.settings.data.language || 'javascript';
            const keywords = GameData.PROGRAMMING_LANGUAGES[language] || GameData.PROGRAMMING_LANGUAGES.javascript;
            return keywords[Math.floor(Math.random() * keywords.length)];
        }
    }

    generateProgrammingContent() {
        const language = this.settings.data.language || 'javascript';
        const keywords = GameData.PROGRAMMING_LANGUAGES[language] || GameData.PROGRAMMING_LANGUAGES.javascript;
        
        // Generate simple code patterns
        const patterns = [
            `${keywords[Math.floor(Math.random() * keywords.length)]} variable`,
            `function ${keywords[Math.floor(Math.random() * keywords.length)]}()`,
            `const ${keywords[Math.floor(Math.random() * keywords.length)]} = value`,
            `if (${keywords[Math.floor(Math.random() * keywords.length)]}) {`,
            `return ${keywords[Math.floor(Math.random() * keywords.length)]};`
        ];
        
        return patterns[Math.floor(Math.random() * patterns.length)];
    }

    generateCustomContent() {
        const customWords = this.settings.getCustomWords();
        if (customWords.length === 0) {
            // Fallback to regular words if no custom words
            return this.generateWordContent();
        }
        return customWords[Math.floor(Math.random() * customWords.length)];
    }

    generateMixedContent() {
        const contentTypes = [
            () => String.fromCharCode(65 + Math.floor(Math.random() * 26)), // letters
            () => this.generateWordContent(), // words
            () => this.generateCodeContent(), // code
            () => GameData.SENTENCES.easy[Math.floor(Math.random() * GameData.SENTENCES.easy.length)] // sentences
        ];
        
        const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
        return randomType();
    }

    generateKidsContent() {
        const kidsData = GameData.KIDS_CONTENT[this.currentMode];
        if (!kidsData) return 'A';

        // Progressive difficulty for kids: start with letters, then simple words, then themed words
        let contentPool = [];
        
        if (this.level <= 2) {
            // Level 1-2: Just letters
            contentPool = kidsData.letters.slice(0, Math.min(10 + this.level * 5, kidsData.letters.length));
        } else if (this.level <= 5) {
            // Level 3-5: Mix of letters and simple words
            contentPool = [
                ...kidsData.letters.slice(0, 15),
                ...(kidsData.words ? kidsData.words.slice(0, 10) : []),
                ...(kidsData.numbers ? kidsData.numbers : []),
                ...(kidsData.number_words ? kidsData.number_words.slice(0, 5) : [])
            ];
        } else {
            // Level 6+: All content including themed words
            contentPool = [
                ...kidsData.letters,
                ...(kidsData.words || []),
                ...(kidsData.princess_words || []),
                ...(kidsData.dino_words || []),
                ...(kidsData.numbers || []),
                ...(kidsData.number_words || []),
                ...(kidsData.simple_math || [])
            ];
        }

        return contentPool[Math.floor(Math.random() * contentPool.length)] || 'A';
    }

    generateContentForType(type) {
        const tempMode = this.currentMode;
        this.currentMode = type;
        const content = this.generateContent();
        this.currentMode = tempMode;
        return content;
    }

    getSpeedForDifficulty() {
        const baseSpeed = {
            easy: 0.5,
            medium: 1.0,
            hard: 1.5,
            insane: 2.0
        };

        const levelMultiplier = 1 + (this.level - 1) * 0.2;
        return baseSpeed[this.difficulty] * levelMultiplier;
    }

    handleKeyInput(event) {
        if (!this.isRunning || this.isPaused) return;
        
        if (event.key === 'Escape') {
            this.togglePause();
            return;
        }

        if (event.key === 'Backspace') {
            event.preventDefault();
            this.currentInput = this.currentInput.slice(0, -1);
            this.updateInputDisplay();
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();
            this.processInput();
            return;
        }

        if (event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
            event.preventDefault();
            this.currentInput += event.key;
            this.totalInputs++;
            this.updateInputDisplay();
            this.checkMatches();
        }
    }

    updateInputDisplay() {
        if (this.gameElements.currentInput) {
            this.gameElements.currentInput.textContent = this.currentInput;
        }
    }

    checkMatches() {
        let bestMatch = null;
        let bestMatchType = 'wrong';

        for (const item of this.fallingItems) {
            const matchType = item.checkMatch(this.currentInput);
            
            if (matchType === 'complete') {
                bestMatch = item;
                bestMatchType = 'complete';
                break;
            } else if (matchType === 'partial' && bestMatchType !== 'complete') {
                bestMatch = item;
                bestMatchType = 'partial';
            }
        }

        if (bestMatchType === 'complete') {
            this.handleCorrectMatch(bestMatch);
        } else if (bestMatchType === 'wrong') {
            this.handleWrongInput();
        }
    }

    processInput() {
        const matchingItem = this.fallingItems.find(item => 
            item.text === this.currentInput.toLowerCase()
        );

        if (matchingItem) {
            this.handleCorrectMatch(matchingItem);
                } else {
            this.handleWrongInput();
        }
    }

    handleCorrectMatch(item) {
        this.correctInputs++;
        this.combo++;
        this.maxCombo = Math.max(this.maxCombo, this.combo);
        this.wordsTyped++;
        
        const baseScore = item.text.length * 10;
        const comboMultiplier = Math.min(this.combo * 0.1 + 1, 3);
        const levelMultiplier = this.level * 0.5 + 1;
        const points = Math.round(baseScore * comboMultiplier * levelMultiplier);
        
        this.score += points;
        
        const rect = item.getRect();
        this.particleSystem.createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 8, 'success');
        
        this.audioManager.playSound('correct');
        
        item.destroy();
        this.fallingItems = this.fallingItems.filter(i => i !== item);
        
        this.currentInput = '';
        this.updateInputDisplay();
        
        // Kids mode special encouragement
        if (this.isKidsMode) {
            this.showKidsEncouragement();
            
            // Check kids achievements
            if (this.wordsTyped === 1) {
                this.statistics.unlockAchievement('little_learner');
            }
            if (this.wordsTyped >= 20 && this.currentMode === 'princess') {
                this.statistics.unlockAchievement('princess_power');
            }
            if (this.wordsTyped >= 20 && this.currentMode === 'dino') {
                this.statistics.unlockAchievement('dino_champion');
            }
            if (this.wordsTyped >= 20 && this.currentMode === 'numbers') {
                this.statistics.unlockAchievement('number_wizard');
            }
        }
        
        if (this.combo >= 5) {
            this.showCombo();
        }
        
        this.checkLevelUp();
        
        if (this.combo >= 20) {
            this.statistics.unlockAchievement('combo_king');
        }
    }

    showKidsEncouragement(customMessage = null) {
        if (!this.isKidsMode) return;

        const kidsData = GameData.KIDS_CONTENT[this.currentMode];
        const encouragements = kidsData ? kidsData.encouragement : ['Great job!', 'Amazing!', 'Perfect!'];
        
        const message = customMessage || encouragements[Math.floor(Math.random() * encouragements.length)];
        
        // Create floating encouragement message
        const encouragementDiv = document.createElement('div');
        encouragementDiv.className = 'kids-encouragement';
        encouragementDiv.textContent = message;
        encouragementDiv.style.cssText = `
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'Orbitron', monospace;
            z-index: 200;
            animation: kids-encourage 2s ease-out forwards;
            box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
            text-align: center;
            pointer-events: none;
        `;

        document.body.appendChild(encouragementDiv);
        
        setTimeout(() => {
            if (encouragementDiv.parentNode) {
                encouragementDiv.parentNode.removeChild(encouragementDiv);
            }
        }, 2000);
    }

    handleWrongInput() {
        this.resetCombo();
        this.audioManager.playSound('wrong');
        
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    }

    resetCombo() {
        if (this.combo > 0) {
            this.combo = 0;
            if (this.gameElements.comboDisplay) {
                this.gameElements.comboDisplay.style.display = 'none';
            }
        }
    }

    showCombo() {
        if (this.gameElements.comboValue) {
            this.gameElements.comboValue.textContent = `${this.combo}x`;
        }
        if (this.gameElements.comboDisplay) {
            this.gameElements.comboDisplay.style.display = 'block';
        }
        
        if (this.combo % 10 === 0) {
            this.audioManager.playSound('combo');
            this.particleSystem.createBurst(
                window.innerWidth / 2, 
                window.innerHeight / 2, 
                15, 
                'combo'
            );
        }
    }

    checkLevelUp() {
        const wordsPerLevel = 10;
        const newLevel = Math.floor(this.wordsTyped / wordsPerLevel) + 1;
        
        if (newLevel > this.level) {
            this.level = newLevel;
            this.audioManager.playSound('levelUp');
            this.particleSystem.createBurst(
                window.innerWidth / 2, 
                100, 
                20, 
                'levelUp'
            );
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        
        const pauseOverlay = this.overlays.pause;
        const pauseIcon = document.getElementById('pause-icon');
        
        if (this.isPaused) {
            if (pauseOverlay) pauseOverlay.style.display = 'flex';
            if (pauseIcon) pauseIcon.textContent = '▶️';
        } else {
            if (pauseOverlay) pauseOverlay.style.display = 'none';
            if (pauseIcon) pauseIcon.textContent = '⏸️';
            this.scheduleNextSpawn();
        }
    }

    restartGame() {
        if (this.overlays.pause) this.overlays.pause.style.display = 'none';
        if (this.overlays.gameOver) this.overlays.gameOver.style.display = 'none';
        this.startGame(this.currentMode);
    }

    quitToMenu() {
        this.isRunning = false;
        
        if (this.spawnTimer) clearTimeout(this.spawnTimer);
        if (this.gameTimer) clearInterval(this.gameTimer);
        
        // Hide pause overlay
        if (this.overlays.pause) this.overlays.pause.style.display = 'none';
        
        // Calculate stats but don't show game over screen
        const timeSpent = (Date.now() - this.startTime) / 1000;
        const wpm = this.calculateWPM(timeSpent);
        const accuracy = this.calculateAccuracy();
        
        // Only save stats if the player actually played for a reasonable time
        if (timeSpent > 5) {
            this.statistics.updateGameStats(
                this.score, 
                wpm, 
                accuracy, 
                this.wordsTyped, 
                timeSpent,
                this.currentMode,
                this.settings.data.theme,
                this.settings.data.language
            );
        }
        
        // Return to main menu
        this.showMenu();
    }

    endGame() {
        this.isRunning = false;
        
        if (this.spawnTimer) clearTimeout(this.spawnTimer);
        if (this.gameTimer) clearInterval(this.gameTimer);
        
        const timeSpent = (Date.now() - this.startTime) / 1000;
        const wpm = this.calculateWPM(timeSpent);
        const accuracy = this.calculateAccuracy();
        
        this.statistics.updateGameStats(
            this.score, 
            wpm, 
            accuracy, 
            this.wordsTyped, 
            timeSpent,
            this.currentMode,
            this.settings.data.theme,
            this.settings.data.language
        );
        
        this.showGameOverScreen(wpm, accuracy);
    }

    showGameOverScreen(wpm, accuracy) {
        const finalScore = document.getElementById('final-score');
        const finalWpm = document.getElementById('final-wpm');
        const finalAccuracy = document.getElementById('final-accuracy');

        if (finalScore) finalScore.textContent = this.score;
        if (finalWpm) finalWpm.textContent = Math.round(wpm);
        if (finalAccuracy) finalAccuracy.textContent = `${Math.round(accuracy)}%`;
        
        if (this.overlays.gameOver) {
            this.overlays.gameOver.style.display = 'flex';
        }
        this.audioManager.playSound('gameOver');
    }

    calculateWPM(timeInSeconds) {
        if (timeInSeconds === 0) return 0;
        return (this.wordsTyped / timeInSeconds) * 60;
    }

    calculateAccuracy() {
        if (this.totalInputs === 0) return 100;
        return (this.correctInputs / this.totalInputs) * 100;
    }

    updateUI() {
        if (!this.gameElements.scoreValue) return;

        const timeSpent = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
        const wpm = this.calculateWPM(timeSpent);
        const accuracy = this.calculateAccuracy();

        this.gameElements.scoreValue.textContent = this.score;
        this.gameElements.wpmValue.textContent = Math.round(wpm);
        this.gameElements.accuracyValue.textContent = `${Math.round(accuracy)}%`;
        this.gameElements.levelValue.textContent = this.level;
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new GameEngine();
    
    // Add CSS for achievement notifications
    const style = document.createElement('style');
    style.textContent = `
        .achievement-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-secondary);
            border: 2px solid var(--success);
            border-radius: 15px;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 2000;
            animation: slideIn 0.5s ease-out, fadeOut 0.5s ease-out 3.5s;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px var(--shadow);
        }
        
        .achievement-notification .achievement-icon {
            font-size: 2rem;
        }
        
        .achievement-notification .achievement-text h4 {
            color: var(--success);
            margin-bottom: 0.2rem;
            font-size: 1rem;
        }
        
        .achievement-notification .achievement-text p {
            color: var(--text-primary);
            margin: 0;
            font-size: 0.9rem;
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .level-up-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-secondary);
            border: 2px solid var(--warning);
            border-radius: 15px;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 2000;
            animation: slideIn 0.5s ease-out, fadeOut 0.5s ease-out 3.5s;
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px var(--shadow);
        }
        
        .level-up-notification .level-up-icon {
            font-size: 2rem;
            animation: level-up-spin 1s ease-in-out;
        }
        
        .level-up-notification .level-up-text h4 {
            color: var(--warning);
            margin-bottom: 0.2rem;
            font-size: 1rem;
        }
        
        .level-up-notification .level-up-text p {
            color: var(--text-primary);
            margin: 0;
            font-size: 0.9rem;
        }
        
        @keyframes level-up-spin {
            0% { transform: scale(0) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
