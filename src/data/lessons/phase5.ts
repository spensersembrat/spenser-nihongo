import { Lesson } from "@/lib/types";

export const phase5Lessons: Lesson[] = [
  {
    day: 51,
    dayType: "vocab-expansion",
    title: "Te-form: The Engine",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Understand te-form as the key conjugation that unlocks requests, permission, progressive, and chaining",
      "Learn the te-form chart method for u-verbs: って, んで, いて, いで, して",
      "Convert ru-verbs and irregular verbs to te-form",
      "Recognize that te-form is built from the dictionary form, not the ます form",
    ],
    usesPatterns: [8],
    vocabulary: [
      {
        japanese: "かう",
        romaji: "kau",
        english: "to buy (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Kah-oo' — 'cow' — you buy a cow at the market. Te-form: かって",
      },
      {
        japanese: "まつ",
        romaji: "matsu",
        english: "to wait (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Mah-tsoo' — 'mats' — you wait on the mat. Te-form: まって",
      },
      {
        japanese: "のむ",
        romaji: "nomu",
        english: "to drink (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Noh-moo' — 'gnome' drinks from a tiny cup. Te-form: のんで",
      },
      {
        japanese: "あそぶ",
        romaji: "asobu",
        english: "to play / to hang out (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Ah-soh-boo' — 'a sofa boo!' — kids play and jump on the sofa. Te-form: あそんで",
      },
      {
        japanese: "かく",
        romaji: "kaku",
        english: "to write (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Kah-koo' — 'cuckoo' writes its name on a clock. Te-form: かいて",
      },
      {
        japanese: "およぐ",
        romaji: "oyogu",
        english: "to swim (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Oh-yoh-goo' — 'oh yo, go!' swim across. Te-form: およいで",
      },
      {
        japanese: "はなす",
        romaji: "hanasu",
        english: "to speak (dictionary form)",
        fitsPattern: [8],
        mnemonic:
          "'Hah-nah-soo' — 'Hannah Sue' speaks loudly. Te-form: はなして",
      },
      {
        japanese: "たべる",
        romaji: "taberu",
        english: "to eat (dictionary form, ru-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Tah-beh-roo' — 'table' — you eat at the table. Te-form: たべて",
      },
    ],
    examples: [
      {
        japanese: "かう → かって（う → って）",
        romaji: "kau → katte (u → tte)",
        english: "buy → te-form (u/tsu/ru-ending u-verbs become って)",
      },
      {
        japanese: "まつ → まって（つ → って）",
        romaji: "matsu → matte (tsu → tte)",
        english: "wait → te-form (same rule: つ → って)",
      },
      {
        japanese: "のむ → のんで（む → んで）",
        romaji: "nomu → nonde (mu → nde)",
        english: "drink → te-form (mu/bu/nu-ending u-verbs become んで)",
      },
      {
        japanese: "あそぶ → あそんで（ぶ → んで）",
        romaji: "asobu → asonde (bu → nde)",
        english: "play → te-form (same rule: ぶ → んで)",
      },
      {
        japanese: "かく → かいて（く → いて）",
        romaji: "kaku → kaite (ku → ite)",
        english: "write → te-form (ku-ending u-verbs become いて)",
      },
      {
        japanese: "およぐ → およいで（ぐ → いで）",
        romaji: "oyogu → oyoide (gu → ide)",
        english: "swim → te-form (gu-ending u-verbs become いで)",
      },
      {
        japanese: "はなす → はなして（す → して）",
        romaji: "hanasu → hanashite (su → shite)",
        english: "speak → te-form (su-ending u-verbs become して)",
      },
      {
        japanese: "たべる → たべて（る → て）",
        romaji: "taberu → tabete (ru → te)",
        english: "eat → te-form (ru-verbs: drop る, add て)",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "きょうはて形をべんきょうします。",
        romaji: "Kyō wa te-kei o benkyō shimasu.",
        english: "Today we'll study the te-form.",
      },
      {
        speaker: "You",
        japanese: "て形はむずかしいですか？",
        romaji: "Te-kei wa muzukashii desu ka?",
        english: "Is the te-form difficult?",
      },
      {
        speaker: "Sensei",
        japanese: "いいえ、ルールをおぼえてください。",
        romaji: "Iie, rūru o oboete kudasai.",
        english: "No, please memorize the rules.",
      },
      {
        speaker: "You",
        japanese: "「のむ」のて形はなんですか？",
        romaji: "'Nomu' no te-kei wa nan desu ka?",
        english: "What is the te-form of 'nomu'?",
      },
      {
        speaker: "Sensei",
        japanese: "「のんで」です。む、ぶ、ぬは「んで」になります。",
        romaji: "'Nonde' desu. Mu, bu, nu wa 'nde' ni narimasu.",
        english: "It's 'nonde'. Mu, bu, nu become 'nde'.",
      },
    ],
    practicePrompts: [
      "Convert these u-verbs: かう→? まつ→? とる→? (hint: all become って)",
      "Convert these u-verbs: のむ→? あそぶ→? よむ→? (hint: all become んで)",
      "Convert these u-verbs: かく→? きく→? あるく→? (hint: all become いて)",
      "Convert these ru-verbs: たべる→? みる→? おきる→? ねる→? (hint: drop る, add て)",
      "Convert the irregulars: する→? くる→? いく→? (hint: して, きて, いって)",
    ],
    languageInsight: {
      title: "Te-form: A Thousand-Year-Old Engine",
      content:
        "The te-form (て形) traces back over a thousand years to classical Japanese, where it evolved from the 連用形 (ren'yōkei, continuative form) combined with the particle て. In Old Japanese, the particle て meant 'and then' — connecting sequential actions. Over centuries, this simple connector became the Swiss Army knife of Japanese grammar. Today, て connects to ください for requests, いる for progressive/states, もいい for permission, はいけない for prohibition, から for sequence, and みる for trying. Understanding te-form is the single biggest unlock in intermediate Japanese — it's the engine that powers nearly every interaction pattern you'll learn from here forward.",
    },
    tutorNote:
      "Te-form is the most important conjugation in Japanese. It's also the first time you need to know dictionary forms and verb groups. The chart method works: memorize the endings (って, んで, いて, いで, して for u-verbs; て for ru-verbs; して/きて/いって for irregulars). Don't rush — spend today just learning the rules. Tomorrow is pure drill. The payoff is enormous: te-form unlocks the next nine patterns.",
    quickReference:
      "Te-form Chart: う/つ/る→って | む/ぶ/ぬ→んで | く→いて | ぐ→いで | す→して | Ru-verbs: る→て | Irregular: する→して, くる→きて, いく→いって",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episodes 1-2",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for て-form verbs in casual conversation. Housemates often chain actions with て: おきて、シャワーをあびて、あさごはんをたべて… Notice how natural it sounds.",
    },
  },

  {
    day: 52,
    dayType: "vocab-expansion",
    title: "Te-form Drill",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Rapidly convert 30 verbs to te-form without hesitation",
      "Identify verb group instantly from dictionary form",
      "Master the exception: いく → いって (not いいて)",
      "Build automatic recall of te-form through drill repetition",
    ],
    usesPatterns: [8],
    vocabulary: [
      {
        japanese: "つくる",
        romaji: "tsukuru",
        english: "to make / to create (u-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Tsoo-koo-roo' — 'took a roux' to make a dish. Te-form: つくって",
      },
      {
        japanese: "きく",
        romaji: "kiku",
        english: "to listen / to ask (u-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Kee-koo' — 'kick' the speaker to listen better. Te-form: きいて",
      },
      {
        japanese: "あける",
        romaji: "akeru",
        english: "to open (ru-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Ah-keh-roo' — 'acre' of land opens up before you. Te-form: あけて",
      },
      {
        japanese: "しめる",
        romaji: "shimeru",
        english: "to close / to shut (ru-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Shee-meh-roo' — 'shimmer' fades as you close the curtain. Te-form: しめて",
      },
      {
        japanese: "はいる",
        romaji: "hairu",
        english: "to enter (u-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Hah-ee-roo' — 'high room' you enter upstairs. Te-form: はいって",
      },
      {
        japanese: "のる",
        romaji: "noru",
        english: "to ride / to get on (u-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Noh-roo' — you ride the 'nor'thbound train. Te-form: のって",
      },
      {
        japanese: "もつ",
        romaji: "motsu",
        english: "to hold / to carry (u-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Moh-tsoo' — 'moats' need bridges to carry things across. Te-form: もって",
      },
      {
        japanese: "おぼえる",
        romaji: "oboeru",
        english: "to memorize / to remember (ru-verb)",
        fitsPattern: [8],
        mnemonic:
          "'Oh-boh-eh-roo' — 'oh, bow here' — remember to bow. Te-form: おぼえて",
      },
    ],
    examples: [
      {
        japanese: "つくる → つくって、きく → きいて、あける → あけて",
        romaji: "tsukuru → tsukutte, kiku → kiite, akeru → akete",
        english: "make → (te), listen → (te), open → (te)",
      },
      {
        japanese: "しめる → しめて、はいる → はいって、のる → のって",
        romaji: "shimeru → shimete, hairu → haitte, noru → notte",
        english: "close → (te), enter → (te), ride → (te)",
      },
      {
        japanese: "もつ → もって、おぼえる → おぼえて",
        romaji: "motsu → motte, oboeru → oboete",
        english: "hold → (te), memorize → (te)",
      },
      {
        japanese: "いく → いって ※いくは例外です（いいてではない）",
        romaji: "iku → itte *iku wa reigai desu (iite de wa nai)",
        english: "go → (te) — the only exception to the く → いて rule",
      },
      {
        japanese: "よむ → よんで、よぶ → よんで",
        romaji: "yomu → yonde, yobu → yonde",
        english: "read → (te), call → (te) — both む and ぶ become んで",
      },
      {
        japanese: "かえる → かえって（u-verb: 帰る、to return home）",
        romaji: "kaeru → kaette (u-verb: kaeru, to return home)",
        english: "return → (te) — looks like a ru-verb but is actually u-verb",
      },
      {
        japanese: "でかける → でかけて（ru-verb: 出かける、to go out）",
        romaji: "dekakeru → dekakete (ru-verb: dekakeru, to go out)",
        english: "go out → (te) — this one IS a ru-verb",
      },
      {
        japanese: "はしる → はしって（u-verb: 走る、to run）",
        romaji: "hashiru → hashitte (u-verb: hashiru, to run)",
        english: "run → (te) — another u-verb that looks like a ru-verb",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "「たべる」のて形は？",
        romaji: "'Taberu' no te-kei wa?",
        english: "Te-form of 'taberu'?",
      },
      {
        speaker: "You",
        japanese: "たべて！",
        romaji: "Tabete!",
        english: "Tabete!",
      },
      {
        speaker: "Sensei",
        japanese: "はい。「のむ」は？",
        romaji: "Hai. 'Nomu' wa?",
        english: "Yes. 'Nomu'?",
      },
      {
        speaker: "You",
        japanese: "のんで！",
        romaji: "Nonde!",
        english: "Nonde!",
      },
      {
        speaker: "Sensei",
        japanese: "いいですね。「いく」は？きをつけて！",
        romaji: "Ii desu ne. 'Iku' wa? Ki o tsukete!",
        english: "Good. 'Iku'? Be careful!",
      },
      {
        speaker: "You",
        japanese: "いって！いいてじゃないですね。",
        romaji: "Itte! 'Iite' ja nai desu ne.",
        english: "Itte! It's not 'iite', right?",
      },
      {
        speaker: "Sensei",
        japanese: "そうです！よくできました。",
        romaji: "Sō desu! Yoku dekimashita.",
        english: "That's right! Well done.",
      },
    ],
    practicePrompts: [
      "Speed drill — convert in under 60 seconds: かう、まつ、とる、のむ、よむ、あそぶ、かく、きく、あるく、およぐ、いそぐ、はなす",
      "Tricky u-verbs that look like ru-verbs: かえる→? はしる→? はいる→? きる(to cut)→?",
      "Real ru-verbs: たべる→? みる→? おきる→? ねる→? あける→? しめる→? おぼえる→?",
      "The three irregulars plus exception: する→? くる→? いく→?",
      "Mix test: randomly pick 10 verbs and convert to te-form as fast as possible",
    ],
    languageInsight: {
      title: "U-verbs in Disguise",
      content:
        "Some u-verbs look exactly like ru-verbs because they end in -いる or -える: かえる (帰る, to return), はしる (走る, to run), はいる (入る, to enter), きる (切る, to cut), しる (知る, to know). These are traps for learners because they appear to follow the ru-verb pattern but actually conjugate as u-verbs: かえる → かえって (not かえて). Unfortunately, there's no foolproof rule — you have to memorize which ones are disguised u-verbs. The good news is there are only about 15-20 common ones. Most verbs ending in -いる or -える really are ru-verbs.",
    },
    tutorNote:
      "Today is pure muscle memory. Set a timer and drill: say the dictionary form, then immediately say the te-form. Repeat until it's automatic. Focus especially on the む/ぶ/ぬ → んで group (students often forget the ん) and the いく exception (いって, not いいて). If you get かえる wrong (it's かえって, not かえて), don't worry — that's the most common mistake in all of Japanese. Drill it until your mouth says かえって before your brain catches up.",
    quickReference:
      "30-Verb Chart: かう→かって | まつ→まって | とる→とって | かえる→かえって | はいる→はいって | のる→のって | もつ→もって | のむ→のんで | よむ→よんで | あそぶ→あそんで | よぶ→よんで | かく→かいて | きく→きいて | あるく→あるいて | いそぐ→いそいで | およぐ→およいで | はなす→はなして | たべる→たべて | みる→みて | おきる→おきて | ねる→ねて | あける→あけて | しめる→しめて | おぼえる→おぼえて | でかける→でかけて | する→して | くる→きて | いく→いって | はしる→はしって | つくる→つくって",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 3",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Count how many te-forms you can identify. Listen for って, んで, いて endings. The housemates use te-form constantly in casual speech.",
    },
  },

  {
    day: 53,
    dayType: "new-pattern",
    title: "Pattern #29: Please ___",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #29: ___てください (Please [verb])",
      "Make polite requests in shops, restaurants, and daily life",
      "Learn 8 essential request-context words",
      "Understand the politeness level of てください versus other request forms",
    ],
    pattern: {
      number: 29,
      japanese: "___てください",
      english: "Please [verb]",
      breakdown: [
        {
          text: "___て",
          role: "verb",
          explanation: "Te-form of the verb — the action you're requesting",
        },
        {
          text: "ください",
          role: "fixed",
          explanation: "Please — adds polite request meaning",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "みせる",
        romaji: "miseru",
        english: "to show (ru-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Mee-seh-roo' — 'miss, here' — show me what's here. Te-form: みせて",
      },
      {
        japanese: "おしえる",
        romaji: "oshieru",
        english: "to teach / to tell (ru-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Oh-shee-eh-roo' — 'oh she aired' the lesson on TV. Te-form: おしえて",
      },
      {
        japanese: "てつだう",
        romaji: "tetsudau",
        english: "to help (u-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Teh-tsoo-dah-oo' — 'tets, do!' — Tetsu helps you do things. Te-form: てつだって",
      },
      {
        japanese: "すわる",
        romaji: "suwaru",
        english: "to sit down (u-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Soo-wah-roo' — 'swirl' down into your seat. Te-form: すわって",
      },
      {
        japanese: "たつ",
        romaji: "tatsu",
        english: "to stand up (u-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Tah-tsoo' — 'tots' stand up on wobbly legs. Te-form: たって",
      },
      {
        japanese: "ゆっくり",
        romaji: "yukkuri",
        english: "slowly",
        fitsPattern: [29],
        mnemonic:
          "'Yoo-koo-ree' — 'you cool, relax' — take it slowly",
      },
      {
        japanese: "もういちど",
        romaji: "mō ichido",
        english: "one more time",
        fitsPattern: [29],
        mnemonic:
          "'Moh ee-chee-doh' — 'more each do' — do it one more time",
      },
      {
        japanese: "ちょっと",
        romaji: "chotto",
        english: "a little / a moment",
        fitsPattern: [29],
        mnemonic:
          "'Choh-toh' — just a tiny 'chop' of time",
      },
    ],
    examples: [
      {
        japanese: "すわってください。",
        romaji: "Suwatte kudasai.",
        english: "Please sit down.",
      },
      {
        japanese: "たってください。",
        romaji: "Tatte kudasai.",
        english: "Please stand up.",
      },
      {
        japanese: "みせてください。",
        romaji: "Misete kudasai.",
        english: "Please show me.",
      },
      {
        japanese: "ゆっくりはなしてください。",
        romaji: "Yukkuri hanashite kudasai.",
        english: "Please speak slowly.",
      },
      {
        japanese: "もういちどいってください。",
        romaji: "Mō ichido itte kudasai.",
        english: "Please say it one more time.",
      },
      {
        japanese: "にほんごでおしえてください。",
        romaji: "Nihongo de oshiete kudasai.",
        english: "Please teach me in Japanese.",
      },
      {
        japanese: "ちょっとてつだってください。",
        romaji: "Chotto tetsudatte kudasai.",
        english: "Please help me a little.",
      },
      {
        japanese: "ここにかいてください。",
        romaji: "Koko ni kaite kudasai.",
        english: "Please write it here.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "すみません。えきはどこですか？",
        romaji: "Sumimasen. Eki wa doko desu ka?",
        english: "Excuse me. Where is the station?",
      },
      {
        speaker: "Stranger",
        japanese: "あのみちをまっすぐいってください。",
        romaji: "Ano michi o massugu itte kudasai.",
        english: "Please go straight down that road.",
      },
      {
        speaker: "You",
        japanese: "すみません、もういちどいってください。",
        romaji: "Sumimasen, mō ichido itte kudasai.",
        english: "Sorry, please say it one more time.",
      },
      {
        speaker: "Stranger",
        japanese: "まっすぐいって、みぎにまがってください。えきがみえます。",
        romaji: "Massugu itte, migi ni magatte kudasai. Eki ga miemasu.",
        english: "Go straight, then please turn right. You'll see the station.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。ゆっくりはなしてくれて、たすかりました。",
        romaji: "Arigatō gozaimasu. Yukkuri hanashite kurete, tasukarimashita.",
        english: "Thank you. Speaking slowly really helped.",
      },
    ],
    practicePrompts: [
      "Ask someone to speak slowly: ゆっくり___てください",
      "Ask a teacher to teach you something: ___をおしえてください",
      "At a shop, ask to see something: あれをみせてください",
      "Ask someone to help you: ちょっと___てください",
    ],
    languageInsight: {
      title: "The Politeness Scale of Requests",
      content:
        "てください is polite but not the most formal. Japanese has a full spectrum: て (casual command among friends), てくれ (casual male request), てくれる？ (casual question-request), てください (standard polite), ていただけますか (humble polite), ていただけませんか (very formal). For daily life, てください hits the sweet spot — polite enough for strangers and shops, natural enough for acquaintances. You'll hear teachers say すわってください dozens of times. At a restaurant, おみずをもってきてください (please bring water) is perfectly natural.",
    },
    tutorNote:
      "This is your first te-form pattern in action, and it's the most practical one. You'll use てください every single day in Japan — asking for directions, ordering food, requesting help. Practice the survival phrases: もういちどいってください (say it again), ゆっくりはなしてください (speak slowly), かいてください (write it down). These three sentences alone will save you hundreds of times.",
    quickReference:
      "Pattern #29: [te-form]ください = Please [verb] | みせてください=please show | おしえてください=please teach | てつだってください=please help | すわってください=please sit | たってください=please stand | ゆっくり=slowly | もういちど=one more time",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 4",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for てください in polite moments and just て in casual requests between housemates. Notice how dropping ください makes the request much more casual.",
    },
  },

  {
    day: 54,
    dayType: "new-pattern",
    title: "Pattern #30: May I ___?",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #30: ___てもいいですか？ (May I [verb]?)",
      "Ask for permission politely in various situations",
      "Learn how to grant permission: いいですよ / どうぞ",
      "Learn how to deny permission politely: すみません、ちょっと…",
    ],
    pattern: {
      number: 30,
      japanese: "___てもいいですか？",
      english: "May I ___?",
      breakdown: [
        {
          text: "___て",
          role: "verb",
          explanation: "Te-form of the verb — the action you want permission for",
        },
        {
          text: "も",
          role: "particle",
          explanation: "Even — 'even if I do this…'",
        },
        {
          text: "いいですか",
          role: "fixed",
          explanation: "Is it okay? — polite question about permission",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "つかう",
        romaji: "tsukau",
        english: "to use (u-verb)",
        fitsPattern: [30],
        mnemonic:
          "'Tsoo-kah-oo' — 'too cow' — too many cows to use. Te-form: つかって",
      },
      {
        japanese: "とる",
        romaji: "toru",
        english: "to take / to take a photo (u-verb)",
        fitsPattern: [30],
        mnemonic:
          "'Toh-roo' — 'tore' off a piece to take it. Te-form: とって",
      },
      {
        japanese: "でんわ",
        romaji: "denwa",
        english: "telephone / phone call",
        fitsPattern: [30],
        mnemonic:
          "'Den-wah' — 'den wall' has a phone hanging on it",
      },
      {
        japanese: "しゃしん",
        romaji: "shashin",
        english: "photograph",
        fitsPattern: [30],
        mnemonic:
          "'Shah-sheen' — 'shine' for the 'shah's' photograph",
      },
      {
        japanese: "どうぞ",
        romaji: "dōzo",
        english: "please go ahead / here you go",
        mnemonic:
          "'Doh-zoh' — 'do so!' — go ahead and do it",
      },
      {
        japanese: "まど",
        romaji: "mado",
        english: "window",
        fitsPattern: [30],
        mnemonic:
          "'Mah-doh' — 'ma, dough!' — there's dough on the window",
      },
      {
        japanese: "エアコン",
        romaji: "eakon",
        english: "air conditioner",
        fitsPattern: [30],
        mnemonic:
          "'Eh-ah-kon' — abbreviation of 'air conditioner' in Japanese",
      },
      {
        japanese: "かける",
        romaji: "kakeru",
        english: "to make (a phone call) (ru-verb)",
        fitsPattern: [30],
        mnemonic:
          "'Kah-keh-roo' — 'cacker' dials the phone. Te-form: かけて",
      },
    ],
    examples: [
      {
        japanese: "ここにすわってもいいですか？",
        romaji: "Koko ni suwatte mo ii desu ka?",
        english: "May I sit here?",
      },
      {
        japanese: "しゃしんをとってもいいですか？",
        romaji: "Shashin o totte mo ii desu ka?",
        english: "May I take a photo?",
      },
      {
        japanese: "このペンをつかってもいいですか？",
        romaji: "Kono pen o tsukatte mo ii desu ka?",
        english: "May I use this pen?",
      },
      {
        japanese: "まどをあけてもいいですか？",
        romaji: "Mado o akete mo ii desu ka?",
        english: "May I open the window?",
      },
      {
        japanese: "でんわをかけてもいいですか？",
        romaji: "Denwa o kakete mo ii desu ka?",
        english: "May I make a phone call?",
      },
      {
        japanese: "エアコンをつけてもいいですか？",
        romaji: "Eakon o tsukete mo ii desu ka?",
        english: "May I turn on the air conditioner?",
      },
      {
        japanese: "はい、いいですよ。どうぞ。",
        romaji: "Hai, ii desu yo. Dōzo.",
        english: "Yes, that's fine. Go ahead.",
      },
      {
        japanese: "すみません、ちょっと…",
        romaji: "Sumimasen, chotto...",
        english: "Sorry, that's a bit… (soft refusal)",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "すみません、ここにすわってもいいですか？",
        romaji: "Sumimasen, koko ni suwatte mo ii desu ka?",
        english: "Excuse me, may I sit here?",
      },
      {
        speaker: "Person",
        japanese: "はい、どうぞ。",
        romaji: "Hai, dōzo.",
        english: "Yes, please go ahead.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。まどをあけてもいいですか？ちょっとあついです。",
        romaji: "Arigatō gozaimasu. Mado o akete mo ii desu ka? Chotto atsui desu.",
        english: "Thank you. May I open the window? It's a little hot.",
      },
      {
        speaker: "Person",
        japanese: "すみません、ちょっと…。エアコンをつけましょうか？",
        romaji: "Sumimasen, chotto... Eakon o tsukemashō ka?",
        english: "Sorry, that's a bit… Shall I turn on the AC?",
      },
      {
        speaker: "You",
        japanese: "はい、おねがいします。",
        romaji: "Hai, onegai shimasu.",
        english: "Yes, please.",
      },
    ],
    practicePrompts: [
      "Ask permission at a café: ここに___てもいいですか？",
      "Ask to take a photo at a temple: しゃしんを___てもいいですか？",
      "Ask to use someone's phone: でんわを___てもいいですか？",
      "Practice saying yes and no: いいですよ。どうぞ。/ すみません、ちょっと…",
    ],
    languageInsight: {
      title: "Permission and Social Harmony",
      content:
        "The pattern てもいいですか literally means 'even if I do [verb], is it good?' This reflects a core Japanese value: seeking harmony before acting. Rather than assuming you can do something, you check if it would disturb others. Notice how refusal is also indirect — すみません、ちょっと… (sorry, it's a little…) trails off without saying 'no' directly. This vagueness is intentional: Japanese communication often leaves the negative unsaid, allowing both parties to save face. The asker understands 'ちょっと…' means no, without anyone having to say it explicitly.",
    },
    tutorNote:
      "This pattern is incredibly useful for navigating daily life in Japan. Practice these essential permission phrases: しゃしんをとってもいいですか (at tourist spots), ここにすわってもいいですか (on trains, in cafés), クレジットカードをつかってもいいですか (at shops). Note the soft refusal: if someone says すみません、ちょっと… — that means no. Don't push further; just say わかりました (understood) and move on.",
    quickReference:
      "Pattern #30: [te-form]もいいですか？ = May I ___? | Yes: はい、いいですよ / どうぞ | No: すみません、ちょっと… | つかう=use | とる=take | まど=window | でんわ=phone | しゃしん=photo | エアコン=AC",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 5",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for permission-asking and the soft refusal ちょっと…. Housemates often ask てもいい？ (casual form) when sharing spaces. Notice how indirect the refusals are.",
    },
  },

  {
    day: 55,
    dayType: "new-pattern",
    title: "Pattern #31: You must not ___",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #31: ___てはいけません (You must not [verb])",
      "Learn common prohibition vocabulary for signs and rules",
      "Understand the difference between てはいけません (prohibition) and てもいいですか (permission)",
      "Read and understand common Japanese prohibition signs",
    ],
    pattern: {
      number: 31,
      japanese: "___てはいけません",
      english: "You must not ___",
      breakdown: [
        {
          text: "___て",
          role: "verb",
          explanation: "Te-form of the verb — the forbidden action",
        },
        {
          text: "は",
          role: "particle",
          explanation: "Topic marker — 'as for doing this…'",
        },
        {
          text: "いけません",
          role: "fixed",
          explanation: "It won't do / it's not allowed — the prohibition",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "さわる",
        romaji: "sawaru",
        english: "to touch (u-verb)",
        fitsPattern: [31],
        mnemonic:
          "'Sah-wah-roo' — 'so, war' — don't touch in war zones. Te-form: さわって",
      },
      {
        japanese: "すてる",
        romaji: "suteru",
        english: "to throw away / to discard (ru-verb)",
        fitsPattern: [31],
        mnemonic:
          "'Soo-teh-roo' — 'stare' at trash before throwing it away. Te-form: すてて",
      },
      {
        japanese: "はしる",
        romaji: "hashiru",
        english: "to run (u-verb)",
        fitsPattern: [31],
        mnemonic:
          "'Hah-shee-roo' — 'ha, she runs!' fast down the hall. Te-form: はしって",
      },
      {
        japanese: "さけぶ",
        romaji: "sakebu",
        english: "to shout / to scream (u-verb)",
        fitsPattern: [31],
        mnemonic:
          "'Sah-keh-boo' — 'sake boo!' — shout boo after drinking sake. Te-form: さけんで",
      },
      {
        japanese: "たばこ",
        romaji: "tabako",
        english: "cigarette / tobacco",
        fitsPattern: [31],
        mnemonic:
          "'Tah-bah-koh' — sounds like 'tobacco'",
      },
      {
        japanese: "すう",
        romaji: "suu",
        english: "to smoke / to inhale (u-verb)",
        fitsPattern: [31],
        mnemonic:
          "'Soo' — 'sue' someone for smoking. Te-form: すって",
      },
      {
        japanese: "きんし",
        romaji: "kinshi",
        english: "prohibited / forbidden",
        mnemonic:
          "'Keen-shee' — 'kin, she' forbids it — it's prohibited",
      },
      {
        japanese: "ゴミ",
        romaji: "gomi",
        english: "trash / garbage",
        fitsPattern: [31],
        mnemonic:
          "'Goh-mee' — 'go me!' — the trash goes from me to the bin",
      },
    ],
    examples: [
      {
        japanese: "ここでたばこをすってはいけません。",
        romaji: "Koko de tabako o sutte wa ikemasen.",
        english: "You must not smoke here.",
      },
      {
        japanese: "びじゅつかんでしゃしんをとってはいけません。",
        romaji: "Bijutsukan de shashin o totte wa ikemasen.",
        english: "You must not take photos in the museum.",
      },
      {
        japanese: "ろうかではしってはいけません。",
        romaji: "Rōka de hashitte wa ikemasen.",
        english: "You must not run in the hallway.",
      },
      {
        japanese: "さわってはいけません。",
        romaji: "Sawatte wa ikemasen.",
        english: "You must not touch it.",
      },
      {
        japanese: "ここにゴミをすててはいけません。",
        romaji: "Koko ni gomi o sutete wa ikemasen.",
        english: "You must not throw trash here.",
      },
      {
        japanese: "としょかんでさけんではいけません。",
        romaji: "Toshokan de sakende wa ikemasen.",
        english: "You must not shout in the library.",
      },
    ],
    dialogue: [
      {
        speaker: "Guide",
        japanese: "このびじゅつかんではしゃしんをとってはいけません。",
        romaji: "Kono bijutsukan de wa shashin o totte wa ikemasen.",
        english: "You must not take photos in this museum.",
      },
      {
        speaker: "You",
        japanese: "わかりました。さわってもいいですか？",
        romaji: "Wakarimashita. Sawatte mo ii desu ka?",
        english: "Understood. May I touch them?",
      },
      {
        speaker: "Guide",
        japanese: "いいえ、さわってはいけません。みるだけです。",
        romaji: "Iie, sawatte wa ikemasen. Miru dake desu.",
        english: "No, you must not touch them. Looking only.",
      },
      {
        speaker: "You",
        japanese: "メモをかいてもいいですか？",
        romaji: "Memo o kaite mo ii desu ka?",
        english: "May I take notes?",
      },
      {
        speaker: "Guide",
        japanese: "はい、いいですよ。どうぞ。",
        romaji: "Hai, ii desu yo. Dōzo.",
        english: "Yes, that's fine. Go ahead.",
      },
    ],
    practicePrompts: [
      "State a museum rule: びじゅつかんで___てはいけません",
      "State a library rule: としょかんで___てはいけません",
      "Contrast permission and prohibition: ___てもいいですか？ — いいえ、___てはいけません",
      "List three rules for your workplace or school using てはいけません",
    ],
    languageInsight: {
      title: "Prohibition Reflects Indirectness",
      content:
        "てはいけません literally means 'if you do [verb], it won't go / it won't do.' The word いけません comes from いく (to go) in negative — the situation 'can't proceed' if you do this action. This indirect framing is typical of Japanese: rather than saying 'Don't!' (which would be the blunt だめ or するな), it says 'doing this creates a situation that won't work.' Even prohibition is phrased to maintain harmony. In casual speech, you'll hear てはだめ (te wa dame) or ちゃだめ (cha dame), which are shorter but carry the same meaning.",
    },
    tutorNote:
      "Today pairs naturally with yesterday's permission pattern. Together, #30 and #31 form a permission-prohibition pair: てもいいですか (may I?) vs. てはいけません (you must not). Practice by imagining museum rules, classroom rules, or workplace rules. A fun exercise: write the 'rules' of your house using てはいけません. Notice how the dialogue naturally combines both patterns — asking permission and receiving prohibition.",
    quickReference:
      "Pattern #31: [te-form]はいけません = You must not ___ | さわる=touch | すてる=throw away | はしる=run | さけぶ=shout | すう=smoke | たばこ=cigarette | ゴミ=trash | きんし=prohibited",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 6",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for casual prohibition: ～ちゃだめ or ～ちゃいけない. Housemates use these when setting boundaries or joking about house rules. Notice how だめ sounds stronger than いけない.",
    },
  },

  {
    day: 56,
    dayType: "new-pattern",
    title: "Pattern #32: I am ___ing",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #32: ___ています (I am [verb]ing / state description)",
      "Distinguish between ongoing actions and resultant states",
      "Learn 8 activity and state vocabulary words",
      "Understand how ている creates aspect (not tense) in Japanese",
    ],
    pattern: {
      number: 32,
      japanese: "___ています",
      english: "I am ___ing / is in a state of ___",
      breakdown: [
        {
          text: "___て",
          role: "verb",
          explanation: "Te-form of the verb — the action or state",
        },
        {
          text: "います",
          role: "fixed",
          explanation: "Existence verb (animate) — creates ongoing/state meaning",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "はたらく",
        romaji: "hataraku",
        english: "to work (u-verb)",
        fitsPattern: [32],
        mnemonic:
          "'Hah-tah-rah-koo' — 'hot rack' — working hard at the hot rack. Te-form: はたらいて",
      },
      {
        japanese: "すむ",
        romaji: "sumu",
        english: "to live / to reside (u-verb)",
        fitsPattern: [32],
        mnemonic:
          "'Soo-moo' — 'sumo' wrestlers live in training stables. Te-form: すんで",
      },
      {
        japanese: "しる",
        romaji: "shiru",
        english: "to know / to learn (u-verb)",
        fitsPattern: [32],
        mnemonic:
          "'Shee-roo' — 'she rude?' — she knows the truth. Te-form: しって",
      },
      {
        japanese: "けっこんする",
        romaji: "kekkon suru",
        english: "to get married (irregular)",
        fitsPattern: [32],
        mnemonic:
          "'Keh-kon soo-roo' — 'cake on' the table for the wedding. Te-form: けっこんして",
      },
      {
        japanese: "ふる",
        romaji: "furu",
        english: "to fall (rain/snow) (u-verb)",
        fitsPattern: [32],
        mnemonic:
          "'Foo-roo' — 'flu' season — rain falls like the flu. Te-form: ふって",
      },
      {
        japanese: "べんきょうする",
        romaji: "benkyō suru",
        english: "to study (irregular, する verb)",
        fitsPattern: [32],
        mnemonic:
          "'Ben-kyoh soo-roo' — 'bench, yo!' — study on the bench. Te-form: べんきょうして",
      },
      {
        japanese: "うんどうする",
        romaji: "undō suru",
        english: "to exercise (irregular, する verb)",
        fitsPattern: [32],
        mnemonic:
          "'Oon-doh soo-roo' — 'undo' the damage by exercising. Te-form: うんどうして",
      },
      {
        japanese: "あめ",
        romaji: "ame",
        english: "rain",
        fitsPattern: [32],
        mnemonic:
          "'Ah-meh' — 'a mess' when rain falls everywhere",
      },
    ],
    examples: [
      {
        japanese: "いまべんきょうしています。",
        romaji: "Ima benkyō shite imasu.",
        english: "I am studying right now. (ongoing action)",
      },
      {
        japanese: "とうきょうにすんでいます。",
        romaji: "Tōkyō ni sunde imasu.",
        english: "I live in Tokyo. (resultant state)",
      },
      {
        japanese: "ぎんこうではたらいています。",
        romaji: "Ginkō de hataraite imasu.",
        english: "I work at a bank. (ongoing state)",
      },
      {
        japanese: "けっこんしています。",
        romaji: "Kekkon shite imasu.",
        english: "I am married. (resultant state)",
      },
      {
        japanese: "そのことばをしっていますか？",
        romaji: "Sono kotoba o shitte imasu ka?",
        english: "Do you know that word? (state of knowing)",
      },
      {
        japanese: "いいえ、しりません。",
        romaji: "Iie, shirimasen.",
        english: "No, I don't know. (negative uses plain ません, not ていません)",
      },
      {
        japanese: "あめがふっています。",
        romaji: "Ame ga futte imasu.",
        english: "It is raining. (ongoing action)",
      },
      {
        japanese: "かれはいまうんどうしています。",
        romaji: "Kare wa ima undō shite imasu.",
        english: "He is exercising right now. (ongoing action)",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "おしごとはなんですか？",
        romaji: "Oshigoto wa nan desu ka?",
        english: "What do you do for work?",
      },
      {
        speaker: "You",
        japanese: "IT会社ではたらいています。",
        romaji: "IT-gaisha de hataraite imasu.",
        english: "I work at an IT company.",
      },
      {
        speaker: "Tanaka",
        japanese: "どこにすんでいますか？",
        romaji: "Doko ni sunde imasu ka?",
        english: "Where do you live?",
      },
      {
        speaker: "You",
        japanese: "しぶやにすんでいます。",
        romaji: "Shibuya ni sunde imasu.",
        english: "I live in Shibuya.",
      },
      {
        speaker: "Tanaka",
        japanese: "けっこんしていますか？",
        romaji: "Kekkon shite imasu ka?",
        english: "Are you married?",
      },
      {
        speaker: "You",
        japanese: "いいえ、まだです。いまにほんごをべんきょうしています。",
        romaji: "Iie, mada desu. Ima nihongo o benkyō shite imasu.",
        english: "No, not yet. I'm studying Japanese right now.",
      },
    ],
    practicePrompts: [
      "Describe where you live: ___にすんでいます",
      "Describe where you work: ___ではたらいています",
      "Describe what you're doing now: いま___ています",
      "Ask someone if they know something: ___をしっていますか？",
      "Describe the weather: あめがふっています / はれています",
    ],
    languageInsight: {
      title: "Aspect, Not Tense: How ている Works",
      content:
        "ている doesn't simply mean '-ing' like English progressive. It creates aspect — a way of viewing the action's relationship to time. With action verbs (たべる, のむ), ている means the action is ongoing: たべています = 'I am eating right now.' But with change-of-state verbs (けっこんする, すむ, しぬ), ている describes the resulting state: けっこんしています = 'I am (in the state of being) married,' not 'I am getting married.' しんでいます means 'is dead,' not 'is dying.' This distinction — ongoing action vs. resultant state — is one of the most nuanced aspects of Japanese grammar. Context and the verb type tell you which meaning applies.",
    },
    tutorNote:
      "ている is one of the most-used patterns in Japanese. It covers 'where do you live' (すんでいます), 'what do you do for work' (はたらいています), and 'what are you doing now' (なにをしていますか). The tricky part is the state meaning: けっこんしています means 'am married' (not 'am marrying'). One quirk: しっていますか (do you know?) uses ている, but the negative is しりません (not しっていません). This is an exception — just memorize it.",
    quickReference:
      "Pattern #32: [te-form]います = am ___ing / in state of ___ | すんでいます=live in | はたらいています=work at | けっこんしています=am married | しっています=know | べんきょうしています=am studying | Exception: しっていますか？→いいえ、しりません",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 7",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for ている in self-introductions: どこにすんでる？なにしてる？ (casual forms). Notice how housemates describe their jobs and living situations with ている.",
    },
  },

  {
    day: 57,
    dayType: "new-pattern",
    title: "Pattern #33: Action Chains",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #33: ___て、___て、___ます (chaining sequential actions)",
      "Describe daily routines as action chains",
      "Learn that て connects actions in chronological order",
      "Chain three or more actions into flowing sentences",
    ],
    pattern: {
      number: 33,
      japanese: "___て、___て、___ます",
      english: "[verb], [verb], and [verb]",
      breakdown: [
        {
          text: "___て、",
          role: "verb",
          explanation: "First action in te-form — 'doing this, and then…'",
        },
        {
          text: "___て、",
          role: "verb",
          explanation: "Second action in te-form — 'then doing this, and then…'",
        },
        {
          text: "___ます",
          role: "verb",
          explanation: "Final action in polite form — ends the chain",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "シャワーをあびる",
        romaji: "shawā o abiru",
        english: "to take a shower (ru-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Ah-bee-roo' — 'a beer' after a shower. Te-form: あびて",
      },
      {
        japanese: "きがえる",
        romaji: "kigaeru",
        english: "to change clothes (ru-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Kee-gah-eh-roo' — 'key, gala' — change clothes for the gala. Te-form: きがえて",
      },
      {
        japanese: "でかける",
        romaji: "dekakeru",
        english: "to go out / to leave (ru-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Deh-kah-keh-roo' — 'deck a care' — deck yourself out and go. Te-form: でかけて",
      },
      {
        japanese: "かえる",
        romaji: "kaeru",
        english: "to return home (u-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Kah-eh-roo' — 'Kyle' returns home. Te-form: かえって",
      },
      {
        japanese: "あらう",
        romaji: "arau",
        english: "to wash (u-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Ah-rah-oo' — 'a row' of dishes to wash. Te-form: あらって",
      },
      {
        japanese: "みがく",
        romaji: "migaku",
        english: "to brush / to polish (u-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Mee-gah-koo' — 'me, gawk' at my polished teeth. Te-form: みがいて",
      },
      {
        japanese: "おふろ",
        romaji: "ofuro",
        english: "bath / bathtub",
        fitsPattern: [33],
        mnemonic:
          "'Oh-foo-roh' — 'oh, furrow' — the bathtub has furrows in it",
      },
      {
        japanese: "ばんごはん",
        romaji: "bangohan",
        english: "dinner / evening meal",
        fitsPattern: [33],
        mnemonic:
          "'Bahn-goh-hahn' — 'bang go han' — bang the gong, dinner is served",
      },
    ],
    examples: [
      {
        japanese: "おきて、シャワーをあびて、あさごはんをたべます。",
        romaji: "Okite, shawā o abite, asagohan o tabemasu.",
        english: "I wake up, take a shower, and eat breakfast.",
      },
      {
        japanese: "てをあらって、ごはんをたべます。",
        romaji: "Te o aratte, gohan o tabemasu.",
        english: "I wash my hands and eat.",
      },
      {
        japanese: "はをみがいて、かおをあらって、きがえます。",
        romaji: "Ha o migaite, kao o aratte, kigaemasu.",
        english: "I brush my teeth, wash my face, and change clothes.",
      },
      {
        japanese: "うちにかえって、ばんごはんをつくって、テレビをみます。",
        romaji: "Uchi ni kaette, bangohan o tsukutte, terebi o mimasu.",
        english: "I go home, make dinner, and watch TV.",
      },
      {
        japanese: "おふろにはいって、ほんをよんで、ねます。",
        romaji: "Ofuro ni haitte, hon o yonde, nemasu.",
        english: "I take a bath, read a book, and go to bed.",
      },
      {
        japanese: "えきまであるいて、でんしゃにのって、かいしゃにいきます。",
        romaji: "Eki made aruite, densha ni notte, kaisha ni ikimasu.",
        english: "I walk to the station, ride the train, and go to work.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "まいあさなにをしますか？",
        romaji: "Maiasa nani o shimasu ka?",
        english: "What do you do every morning?",
      },
      {
        speaker: "You",
        japanese: "ろくじにおきて、シャワーをあびて、あさごはんをたべます。",
        romaji: "Rokuji ni okite, shawā o abite, asagohan o tabemasu.",
        english: "I wake up at six, take a shower, and eat breakfast.",
      },
      {
        speaker: "Tanaka",
        japanese: "それから？",
        romaji: "Sorekara?",
        english: "Then what?",
      },
      {
        speaker: "You",
        japanese: "きがえて、えきまであるいて、でんしゃにのります。",
        romaji: "Kigaete, eki made aruite, densha ni norimasu.",
        english: "I change clothes, walk to the station, and ride the train.",
      },
      {
        speaker: "Tanaka",
        japanese: "いそがしいですね。よるは？",
        romaji: "Isogashii desu ne. Yoru wa?",
        english: "You're busy! How about the evening?",
      },
      {
        speaker: "You",
        japanese: "うちにかえって、ばんごはんをたべて、にほんごをべんきょうして、ねます。",
        romaji: "Uchi ni kaette, bangohan o tabete, nihongo o benkyō shite, nemasu.",
        english: "I go home, eat dinner, study Japanese, and go to bed.",
      },
    ],
    practicePrompts: [
      "Describe your morning routine: おきて、___て、___て、___ます",
      "Describe your commute: えきまで___て、___にのって、___にいきます",
      "Describe your evening: うちにかえって、___て、___て、ねます",
      "Chain four or more actions for your entire day",
    ],
    languageInsight: {
      title: "Te-form: The Original 'And Then'",
      content:
        "In English, we connect actions with 'and': 'I woke up and ate and left.' Japanese uses te-form instead of a conjunction. おきて literally meant 'waking up, and then…' in classical Japanese — the て particle was a sequential connector. This is actually te-form's oldest use, predating requests (てください) and progressive (ている). One important nuance: て implies chronological order. おきて、たべます (wake up then eat) feels natural, but たべて、おきます (eat then wake up) sounds odd. The actions should flow in the order they happen.",
    },
    tutorNote:
      "Action chains are how native speakers describe routines. Start with your morning: おきて、___て、___て… and keep chaining until the last verb, which gets ます. The key insight: only the final verb carries tense. For past routines, just change the final verb: おきて、たべて、いきました (woke up, ate, and went). All the て-form verbs in the chain are tense-neutral — they just mean 'and then.' Practice describing your entire day as one long chain.",
    quickReference:
      "Pattern #33: [te-form]、[te-form]、[final verb]ます | Only the final verb carries tense | あびる=shower | きがえる=change clothes | でかける=go out | かえる=return | あらう=wash | みがく=brush | おふろ=bath | ばんごはん=dinner",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 8",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for action chains in casual speech. Housemates describe their days: おきて、ごはんたべて、しごといって… Notice how naturally actions chain together with て.",
    },
  },

  {
    day: 58,
    dayType: "new-pattern",
    title: "Patterns #34-35: After & Try",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #34: ___てから (After [verb]ing)",
      "Master Pattern #35: ___てみる (Try [verb]ing)",
      "Distinguish てから (after) from て alone (and then)",
      "Express willingness to try new experiences with てみる",
    ],
    pattern: {
      number: 34,
      japanese: "___てから",
      english: "After ___ing",
      breakdown: [
        {
          text: "___て",
          role: "verb",
          explanation: "Te-form of the verb — the action that happens first",
        },
        {
          text: "から",
          role: "particle",
          explanation: "After / from — emphasizes the completed-first relationship",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "しらべる",
        romaji: "shiraberu",
        english: "to look up / to investigate (ru-verb)",
        fitsPattern: [34, 35],
        mnemonic:
          "'Shee-rah-beh-roo' — 'she robber' investigates the crime. Te-form: しらべて",
      },
      {
        japanese: "きめる",
        romaji: "kimeru",
        english: "to decide (ru-verb)",
        fitsPattern: [34],
        mnemonic:
          "'Kee-meh-roo' — 'key measure' — use the key metric to decide. Te-form: きめて",
      },
      {
        japanese: "れんしゅうする",
        romaji: "renshū suru",
        english: "to practice (する verb)",
        fitsPattern: [34, 35],
        mnemonic:
          "'Ren-shoo soo-roo' — 'wren shoe' — practice putting shoes on wrens. Te-form: れんしゅうして",
      },
      {
        japanese: "そうだんする",
        romaji: "sōdan suru",
        english: "to consult / to discuss (する verb)",
        fitsPattern: [34],
        mnemonic:
          "'Soh-dahn soo-roo' — 'so done' thinking, let's discuss. Te-form: そうだんして",
      },
      {
        japanese: "きる",
        romaji: "kiru",
        english: "to wear / to put on (ru-verb)",
        fitsPattern: [35],
        mnemonic:
          "'Kee-roo' — 'keyring' — wear your keyring as a necklace. Te-form: きて",
      },
      {
        japanese: "なっとう",
        romaji: "nattō",
        english: "fermented soybeans (traditional Japanese food)",
        fitsPattern: [35],
        mnemonic:
          "'Naht-toh' — 'not though!' — I'll try it, but not willingly!",
      },
      {
        japanese: "おんせん",
        romaji: "onsen",
        english: "hot spring bath",
        fitsPattern: [35],
        mnemonic:
          "'On-sen' — 'on, zen' — zen relaxation at the hot spring",
      },
      {
        japanese: "ゆかた",
        romaji: "yukata",
        english: "light cotton kimono (worn in summer / at inns)",
        fitsPattern: [35],
        mnemonic:
          "'Yoo-kah-tah' — 'you caught a' beautiful yukata at the inn",
      },
    ],
    examples: [
      {
        japanese: "しらべてからきめます。",
        romaji: "Shirabete kara kimemasu.",
        english: "I'll decide after looking it up.",
      },
      {
        japanese: "ごはんをたべてからべんきょうします。",
        romaji: "Gohan o tabete kara benkyō shimasu.",
        english: "I'll study after eating.",
      },
      {
        japanese: "シャワーをあびてからでかけます。",
        romaji: "Shawā o abite kara dekakemasu.",
        english: "I'll go out after taking a shower.",
      },
      {
        japanese: "せんせいにそうだんしてからきめます。",
        romaji: "Sensei ni sōdan shite kara kimemasu.",
        english: "I'll decide after consulting my teacher.",
      },
      {
        japanese: "なっとうをたべてみます。",
        romaji: "Nattō o tabete mimasu.",
        english: "I'll try eating natto.",
      },
      {
        japanese: "ゆかたをきてみてください。",
        romaji: "Yukata o kite mite kudasai.",
        english: "Please try wearing a yukata.",
      },
      {
        japanese: "おんせんにはいってみたいです。",
        romaji: "Onsen ni haitte mitai desu.",
        english: "I want to try going to a hot spring.",
      },
      {
        japanese: "にほんごではなしてみましょう。",
        romaji: "Nihongo de hanashite mimashō.",
        english: "Let's try speaking in Japanese.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "なっとうをたべたことがありますか？",
        romaji: "Nattō o tabeta koto ga arimasu ka?",
        english: "Have you ever eaten natto?",
      },
      {
        speaker: "You",
        japanese: "いいえ。でもたべてみたいです。",
        romaji: "Iie. Demo tabete mitai desu.",
        english: "No. But I want to try eating it.",
      },
      {
        speaker: "Tanaka",
        japanese: "じゃあ、あしたのあさたべてみましょう。",
        romaji: "Jā, ashita no asa tabete mimashō.",
        english: "Then let's try eating it tomorrow morning.",
      },
      {
        speaker: "You",
        japanese: "はい。あさごはんをたべてからにほんごをべんきょうします。",
        romaji: "Hai. Asagohan o tabete kara nihongo o benkyō shimasu.",
        english: "Yes. After eating breakfast, I'll study Japanese.",
      },
      {
        speaker: "Tanaka",
        japanese: "おんせんにもいってみてください。すごくいいですよ。",
        romaji: "Onsen ni mo itte mite kudasai. Sugoku ii desu yo.",
        english: "Please try going to a hot spring too. It's really great.",
      },
      {
        speaker: "You",
        japanese: "しらべてからいきます。",
        romaji: "Shirabete kara ikimasu.",
        english: "I'll go after looking it up.",
      },
    ],
    practicePrompts: [
      "State your sequence: ___てから___ます (e.g., after eating, I study)",
      "Express trying new food: ___をたべてみます",
      "Express trying an experience: ___てみたいです (I want to try ___)",
      "Combine: しらべてから___てみます (after looking it up, I'll try ___)",
      "Ask someone to try: ___てみてください",
    ],
    languageInsight: {
      title: "てから vs て: Emphasis on Completion",
      content:
        "Both て and てから connect sequential actions, but てから adds emphasis: 'only after finishing X do I do Y.' Compare: たべて、でかけます (I eat and go out — casual sequence) vs. たべてからでかけます (I go out AFTER eating — the eating must be complete first). てから implies a deliberate wait. てみる (try doing) literally means 'do and see' — て connects the action and みる (to see/look) means you'll see what happens. Japanese is full of these elegant compounds: て + あげる (do for someone), て + もらう (have someone do), て + おく (do in advance).",
    },
    tutorNote:
      "Two patterns today, but they're both short and intuitive. てから = after doing, so use it whenever order matters: てをあらってからたべます (wash hands, then eat). てみる = try doing, and it's perfect for new experiences in Japan: たべてみる, いってみる, きてみる. A great conversation starter: ___てみたいです (I want to try ___). Notice てみてください combines two patterns: て (try) + ください (please) — please try doing it.",
    quickReference:
      "Pattern #34: [te-form]から = after ___ing | Pattern #35: [te-form]みる = try ___ing | しらべる=look up | きめる=decide | れんしゅうする=practice | そうだんする=discuss | きる=wear | なっとう=fermented soybeans | おんせん=hot spring | ゆかた=light kimono",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 9",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for てから when housemates describe plans and sequences. Also listen for てみる when they suggest trying new restaurants or activities together.",
    },
  },

  {
    day: 59,
    dayType: "new-pattern",
    title: "Pattern #36: I can ___",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #36: ___ことができます (I can [verb])",
      "Express abilities and skills with this formal potential pattern",
      "Learn 8 skill-related vocabulary words",
      "Understand that this uses dictionary form + ことができます",
    ],
    pattern: {
      number: 36,
      japanese: "___ことができます",
      english: "I can ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Dictionary form of the verb — the ability being described",
        },
        {
          text: "こと",
          role: "fixed",
          explanation: "Nominalizer — turns the verb into 'the act of ___ing'",
        },
        {
          text: "が",
          role: "particle",
          explanation: "Subject marker — marks the nominalized verb as subject",
        },
        {
          text: "できます",
          role: "verb",
          explanation: "Can do / is possible — the polite potential",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "うんてんする",
        romaji: "unten suru",
        english: "to drive (する verb)",
        fitsPattern: [36],
        mnemonic:
          "'Oon-ten soo-roo' — 'on ten' roads — drive on ten roads",
      },
      {
        japanese: "りょうりする",
        romaji: "ryōri suru",
        english: "to cook (する verb)",
        fitsPattern: [36],
        mnemonic:
          "'Ryoh-ree soo-roo' — 'really' good at cooking",
      },
      {
        japanese: "ひく",
        romaji: "hiku",
        english: "to play (a stringed/keyboard instrument) (u-verb)",
        fitsPattern: [36],
        mnemonic:
          "'Hee-koo' — 'he cool' playing piano. Te-form: ひいて",
      },
      {
        japanese: "はし",
        romaji: "hashi",
        english: "chopsticks",
        fitsPattern: [36],
        mnemonic:
          "'Hah-shee' — 'ha, she' can use chopsticks perfectly",
      },
      {
        japanese: "じてんしゃ",
        romaji: "jitensha",
        english: "bicycle",
        fitsPattern: [36],
        mnemonic:
          "'Jee-ten-shah' — 'gee, ten shah!' — ten bicycles for the shah",
      },
      {
        japanese: "スキー",
        romaji: "sukī",
        english: "skiing",
        fitsPattern: [36],
        mnemonic:
          "From English 'ski' — スキーをする = to ski",
      },
      {
        japanese: "ギター",
        romaji: "gitā",
        english: "guitar",
        fitsPattern: [36],
        mnemonic:
          "From English 'guitar' — ギターをひく = to play guitar",
      },
      {
        japanese: "かんじ",
        romaji: "kanji",
        english: "Chinese characters used in Japanese",
        fitsPattern: [36],
        mnemonic:
          "'Kahn-jee' — you already know this word from 'kanji'",
      },
    ],
    examples: [
      {
        japanese: "にほんごをはなすことができます。",
        romaji: "Nihongo o hanasu koto ga dekimasu.",
        english: "I can speak Japanese.",
      },
      {
        japanese: "くるまをうんてんすることができます。",
        romaji: "Kuruma o unten suru koto ga dekimasu.",
        english: "I can drive a car.",
      },
      {
        japanese: "はしをつかうことができますか？",
        romaji: "Hashi o tsukau koto ga dekimasu ka?",
        english: "Can you use chopsticks?",
      },
      {
        japanese: "ピアノをひくことができます。",
        romaji: "Piano o hiku koto ga dekimasu.",
        english: "I can play the piano.",
      },
      {
        japanese: "じてんしゃにのることができません。",
        romaji: "Jitensha ni noru koto ga dekimasen.",
        english: "I cannot ride a bicycle.",
      },
      {
        japanese: "スキーをすることができますか？",
        romaji: "Sukī o suru koto ga dekimasu ka?",
        english: "Can you ski?",
      },
      {
        japanese: "かんじをよむことができます。でもかくことはできません。",
        romaji: "Kanji o yomu koto ga dekimasu. Demo kaku koto wa dekimasen.",
        english: "I can read kanji. But I can't write them.",
      },
      {
        japanese: "りょうりすることができます。わしょくもつくれます。",
        romaji: "Ryōri suru koto ga dekimasu. Washoku mo tsukuremasu.",
        english: "I can cook. I can make Japanese food too.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "なにかスポーツができますか？",
        romaji: "Nanika supōtsu ga dekimasu ka?",
        english: "Can you do any sports?",
      },
      {
        speaker: "You",
        japanese: "およぐことができます。スキーもすこしできます。",
        romaji: "Oyogu koto ga dekimasu. Sukī mo sukoshi dekimasu.",
        english: "I can swim. I can ski a little too.",
      },
      {
        speaker: "Tanaka",
        japanese: "すごいですね。がっきは？",
        romaji: "Sugoi desu ne. Gakki wa?",
        english: "That's amazing. How about instruments?",
      },
      {
        speaker: "You",
        japanese: "ギターをひくことができます。でもピアノはできません。",
        romaji: "Gitā o hiku koto ga dekimasu. Demo piano wa dekimasen.",
        english: "I can play guitar. But I can't play piano.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんりょうりをつくることができますか？",
        romaji: "Nihon ryōri o tsukuru koto ga dekimasu ka?",
        english: "Can you make Japanese food?",
      },
      {
        speaker: "You",
        japanese: "すこしだけ。カレーをつくることができます。",
        romaji: "Sukoshi dake. Karē o tsukuru koto ga dekimasu.",
        english: "Just a little. I can make curry.",
      },
    ],
    practicePrompts: [
      "List your abilities: ___ことができます",
      "List things you can't do: ___ことができません",
      "Ask someone about their skills: ___ことができますか？",
      "Describe language abilities: ___ごをはなすことができます",
      "Talk about food skills: ___をつくることができます",
    ],
    languageInsight: {
      title: "できる: From Chinese Roots to Japanese Potential",
      content:
        "できる (出来る) literally means 'to come out' or 'to be produced' — it's written with the kanji for 'exit' (出) and 'come' (来). The idea is that an ability 'comes forth' from you. ことができる literally means 'the act of [verb] can come forth.' This is the formal potential form. In casual speech, Japanese has a shorter potential conjugation: はなせる (can speak), たべられる (can eat), よめる (can read). You'll learn those later. For now, ことができます works in all situations and is always grammatically correct, though it sounds slightly textbook-formal in casual conversation.",
    },
    tutorNote:
      "This pattern uses dictionary form (not te-form), but it's placed in Phase 5 because it pairs naturally with other interaction patterns. The structure is simple: [dictionary verb] + ことができます. For する verbs, you can shorten: りょうりすることができます → りょうりができます. The negative is just ことができません. This is a great self-introduction booster: にほんごをはなすことができます, りょうりすることができます, ギターをひくことができます.",
    quickReference:
      "Pattern #36: [dictionary form]ことができます = can ___ | できません = cannot | うんてんする=drive | りょうりする=cook | ひく=play (instrument) | はし=chopsticks | じてんしゃ=bicycle | スキー=skiing | ギター=guitar | かんじ=kanji",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 10",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for できる in casual ability talk. Housemates say りょうりできる？ (can you cook?) rather than the formal ことができます. Notice how できる is one of the most common verbs in casual Japanese.",
    },
  },

  {
    day: 60,
    dayType: "new-pattern",
    title: "Pattern #37: You don't have to ___",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Master Pattern #37: ___なくてもいい (You don't have to [verb])",
      "Form the negative te-form: ない → なくて",
      "Express that something is unnecessary or optional",
      "Contrast 'don't have to' (なくてもいい) with 'must not' (てはいけません)",
    ],
    pattern: {
      number: 37,
      japanese: "___なくてもいい",
      english: "You don't have to ___",
      breakdown: [
        {
          text: "___なくて",
          role: "verb",
          explanation: "Negative te-form — 'not doing [verb]'",
        },
        {
          text: "も",
          role: "particle",
          explanation: "Even — 'even if you don't…'",
        },
        {
          text: "いい",
          role: "fixed",
          explanation: "Is fine / is okay — it's acceptable not to do it",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "いそぐ",
        romaji: "isogu",
        english: "to hurry (u-verb)",
        fitsPattern: [37],
        mnemonic:
          "'Ee-soh-goo' — 'he so go!' — hurrying somewhere. Negative te: いそがなくて",
      },
      {
        japanese: "しんぱいする",
        romaji: "shinpai suru",
        english: "to worry (する verb)",
        fitsPattern: [37],
        mnemonic:
          "'Sheen-pie soo-roo' — 'shin pie' — don't worry about the pie. Negative te: しんぱいしなくて",
      },
      {
        japanese: "むりする",
        romaji: "muri suru",
        english: "to overdo it / to push oneself (する verb)",
        fitsPattern: [37],
        mnemonic:
          "'Moo-ree soo-roo' — 'moray' eel doesn't need to push itself. Negative te: むりしなくて",
      },
      {
        japanese: "はらう",
        romaji: "harau",
        english: "to pay (u-verb)",
        fitsPattern: [37],
        mnemonic:
          "'Hah-rah-oo' — 'hurrah!' when you don't have to pay. Negative te: はらわなくて",
      },
      {
        japanese: "よやくする",
        romaji: "yoyaku suru",
        english: "to make a reservation (する verb)",
        fitsPattern: [37],
        mnemonic:
          "'Yoh-yah-koo soo-roo' — 'yo, yak!' — reserve a spot for the yak. Negative te: よやくしなくて",
      },
      {
        japanese: "ぜんぶ",
        romaji: "zenbu",
        english: "all / everything",
        mnemonic:
          "'Zen-boo' — 'zen, boo!' — zen is everything",
      },
      {
        japanese: "だいじょうぶ",
        romaji: "daijōbu",
        english: "it's okay / all right",
        mnemonic:
          "'Die-joh-boo' — relax, it's all okay",
      },
      {
        japanese: "まだ",
        romaji: "mada",
        english: "still / not yet",
        mnemonic:
          "'Mah-dah' — 'Ma, da' — Mom, the food isn't done yet",
      },
    ],
    examples: [
      {
        japanese: "いそがなくてもいいですよ。",
        romaji: "Isoganakute mo ii desu yo.",
        english: "You don't have to hurry.",
      },
      {
        japanese: "しんぱいしなくてもいいです。",
        romaji: "Shinpai shinakute mo ii desu.",
        english: "You don't have to worry.",
      },
      {
        japanese: "むりしなくてもいいですよ。",
        romaji: "Muri shinakute mo ii desu yo.",
        english: "You don't have to push yourself.",
      },
      {
        japanese: "ぜんぶたべなくてもいいです。",
        romaji: "Zenbu tabenakute mo ii desu.",
        english: "You don't have to eat everything.",
      },
      {
        japanese: "きょうはらわなくてもいいです。",
        romaji: "Kyō harawanakute mo ii desu.",
        english: "You don't have to pay today.",
      },
      {
        japanese: "よやくしなくてもいいですか？",
        romaji: "Yoyaku shinakute mo ii desu ka?",
        english: "Do I not have to make a reservation?",
      },
      {
        japanese: "にほんごがかんぺきじゃなくてもいいです。",
        romaji: "Nihongo ga kanpeki ja nakute mo ii desu.",
        english: "Your Japanese doesn't have to be perfect.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "すみません、おくれました。",
        romaji: "Sumimasen, okuremashita.",
        english: "Sorry, I'm late.",
      },
      {
        speaker: "Tanaka",
        japanese: "だいじょうぶですよ。いそがなくてもいいです。",
        romaji: "Daijōbu desu yo. Isoganakute mo ii desu.",
        english: "It's okay. You don't have to hurry.",
      },
      {
        speaker: "You",
        japanese: "ぜんぶにほんごではなさなくてもいいですか？",
        romaji: "Zenbu nihongo de hanasanakute mo ii desu ka?",
        english: "Do I not have to speak entirely in Japanese?",
      },
      {
        speaker: "Tanaka",
        japanese: "はい、むりしなくてもいいですよ。すこしずつでいいです。",
        romaji: "Hai, muri shinakute mo ii desu yo. Sukoshi zutsu de ii desu.",
        english: "Right, you don't have to push yourself. Little by little is fine.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。しんぱいしていました。",
        romaji: "Arigatō gozaimasu. Shinpai shite imashita.",
        english: "Thank you. I was worried.",
      },
      {
        speaker: "Tanaka",
        japanese: "しんぱいしなくてもいいです。まちがえてもだいじょうぶです。",
        romaji: "Shinpai shinakute mo ii desu. Machigaete mo daijōbu desu.",
        english: "You don't have to worry. Even if you make mistakes, it's okay.",
      },
    ],
    practicePrompts: [
      "Reassure someone: しんぱい___なくてもいいですよ",
      "Tell someone they don't have to rush: いそが___てもいいです",
      "Say you don't have to eat everything: ぜんぶ___なくてもいいです",
      "Contrast: ___てはいけません (must not) vs ___なくてもいいです (don't have to)",
    ],
    languageInsight: {
      title: "Negative Te-form: How ない Becomes なくて",
      content:
        "To form なくてもいい, you need the negative te-form. Start with the ない form of the verb: たべる → たべない, のむ → のまない, する → しない. Then change ない to なくて: たべなくて, のまなくて, しなくて. This works because ない is technically an い-adjective — and い-adjectives form their te-form by changing い to くて (おおきい → おおきくて). So ない → なくて follows the same pattern. The full expression なくてもいい literally means 'even if you don't do it, it's fine.'",
    },
    tutorNote:
      "This is a wonderfully reassuring pattern. Use it to comfort people: しんぱいしなくてもいい (don't have to worry), むりしなくてもいい (don't have to push yourself). The key step is forming the negative te-form: take the ない form and change ない to なくて. Compare with the prohibition pattern: てはいけません means 'must not' (it's forbidden), while なくてもいい means 'don't have to' (it's optional). Big difference! You don't have to run (optional) vs. you must not run (forbidden).",
    quickReference:
      "Pattern #37: [ない-form → なくて]もいい = don't have to ___ | いそぐ→いそがなくて | しんぱいする→しんぱいしなくて | むりする→むりしなくて | はらう→はらわなくて | ぜんぶ=everything | だいじょうぶ=okay | Contrast: てはいけません ≠ なくてもいい",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 11",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for なくてもいい and its casual form なくていい when housemates reassure each other. Also listen for しなくていいよ (you don't have to do it) in casual conversation.",
    },
  },

  {
    day: 61,
    dayType: "vocab-expansion",
    title: "Casual Te-form",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Convert all te-form patterns from polite to casual register",
      "Learn casual equivalents: てくれる, てもいい？, ちゃだめ, てる, てみて",
      "Understand when casual forms are appropriate",
      "Recognize the casual contraction ている → てる",
    ],
    usesPatterns: [29, 30, 31, 32, 33, 34, 35, 36, 37],
    vocabulary: [
      {
        japanese: "〜てくれる？",
        romaji: "~te kureru?",
        english: "Can you ___? (casual request)",
        mnemonic:
          "くれる = 'give me' — can you give me the favor of doing ___?",
      },
      {
        japanese: "〜てもいい？",
        romaji: "~te mo ii?",
        english: "Can I ___? (casual permission)",
        mnemonic:
          "Same as てもいいですか but drops ですか for casual",
      },
      {
        japanese: "〜ちゃだめ",
        romaji: "~cha dame",
        english: "You can't ___ / Don't ___ (casual prohibition)",
        mnemonic:
          "ては → ちゃ (contraction) + だめ (no good)",
      },
      {
        japanese: "〜てる",
        romaji: "~teru",
        english: "am ___ing (casual progressive)",
        mnemonic:
          "ている → てる — the い gets dropped in casual speech",
      },
      {
        japanese: "〜てみて",
        romaji: "~te mite",
        english: "try it! (casual)",
        mnemonic:
          "てみてください → てみて — drop ください for casual",
      },
      {
        japanese: "〜なくていい",
        romaji: "~nakute ii",
        english: "don't have to (casual)",
        mnemonic:
          "なくてもいいです → なくていい — drops も and です",
      },
      {
        japanese: "できる？",
        romaji: "dekiru?",
        english: "can you? (casual potential)",
        mnemonic:
          "ことができますか → できる？ — much shorter in casual",
      },
      {
        japanese: "そろそろ",
        romaji: "sorosoro",
        english: "soon / before long / about time to",
        mnemonic:
          "'Soh-roh-soh-roh' — 'so-so' — it's about so-so time to go",
      },
    ],
    examples: [
      {
        japanese: "ちょっとてつだってくれる？",
        romaji: "Chotto tetsudatte kureru?",
        english: "Can you help me a little? (casual #29)",
      },
      {
        japanese: "ここにすわってもいい？",
        romaji: "Koko ni suwatte mo ii?",
        english: "Can I sit here? (casual #30)",
      },
      {
        japanese: "さわっちゃだめ！",
        romaji: "Sawaccha dame!",
        english: "Don't touch that! (casual #31)",
      },
      {
        japanese: "いまなにしてる？",
        romaji: "Ima nani shiteru?",
        english: "What are you doing now? (casual #32)",
      },
      {
        japanese: "おきて、たべて、でかけた。",
        romaji: "Okite, tabete, dekaketa.",
        english: "Woke up, ate, and went out. (casual #33)",
      },
      {
        japanese: "しらべてからきめて。",
        romaji: "Shirabete kara kimete.",
        english: "Decide after looking it up. (casual #34)",
      },
      {
        japanese: "これたべてみて。おいしいよ。",
        romaji: "Kore tabete mite. Oishii yo.",
        english: "Try eating this. It's delicious. (casual #35)",
      },
      {
        japanese: "しんぱいしなくていいよ。",
        romaji: "Shinpai shinakute ii yo.",
        english: "You don't have to worry. (casual #37)",
      },
    ],
    dialogue: [
      {
        speaker: "Friend",
        japanese: "いまなにしてる？",
        romaji: "Ima nani shiteru?",
        english: "What are you doing now?",
      },
      {
        speaker: "You",
        japanese: "べんきょうしてる。でもそろそろやめる。",
        romaji: "Benkyō shiteru. Demo sorosoro yameru.",
        english: "Studying. But I'm about to stop.",
      },
      {
        speaker: "Friend",
        japanese: "じゃあ、あそびにこない？",
        romaji: "Jā, asobi ni konai?",
        english: "Then, wanna come hang out?",
      },
      {
        speaker: "You",
        japanese: "いいね。ごはんたべてからいくよ。",
        romaji: "Ii ne. Gohan tabete kara iku yo.",
        english: "Sounds good. I'll come after eating.",
      },
      {
        speaker: "Friend",
        japanese: "いそがなくていいよ。ゆっくりきて。",
        romaji: "Isoganakute ii yo. Yukkuri kite.",
        english: "You don't have to hurry. Come at your own pace.",
      },
      {
        speaker: "You",
        japanese: "ありがとう。あたらしいカフェにいってみない？",
        romaji: "Arigatō. Atarashii kafe ni itte minai?",
        english: "Thanks. Want to try going to that new café?",
      },
    ],
    practicePrompts: [
      "Convert to casual: すわってください → すわって / すわってくれる？",
      "Convert to casual: してはいけません → しちゃだめ",
      "Convert to casual: べんきょうしています → べんきょうしてる",
      "Have a casual conversation using てる, てくれる？, and なくていい",
      "Practice the contraction: ては → ちゃ (さわっては → さわっちゃ)",
    ],
    languageInsight: {
      title: "The Contraction Highway: ては → ちゃ, ている → てる",
      content:
        "Casual Japanese loves contractions. The two biggest in te-form are: (1) ている → てる, where the い simply drops: している → してる, たべている → たべてる. (2) ては → ちゃ, where the は contracts: さわってはだめ → さわっちゃだめ, いってはいけない → いっちゃいけない. Similarly, では → じゃ: しなくてはいけない → しなくちゃいけない → しなきゃ. These contractions aren't slang — they're standard casual Japanese that every native speaker uses daily. You'll hear them constantly in anime, dramas, and Terrace House.",
    },
    tutorNote:
      "Today bridges formal and casual Japanese. The key contractions: ている → てる (most common), ては → ちゃ (very common), てもいいですか → てもいい？ (drop formality). Don't try to memorize everything today — just get familiar. You'll naturally start using these as you hear them. The most important casual form is てる — it appears in almost every casual Japanese conversation: なにしてる？ どこにすんでる？ はたらいてる？",
    quickReference:
      "Casual conversions: てください→て/てくれる？ | てもいいですか→てもいい？ | てはいけません→ちゃだめ | ています→てる | てみてください→てみて | なくてもいいです→なくていい | ことができます→できる",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 12",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Focus entirely on casual te-form. Count how many times you hear てる (instead of ている), ちゃ (instead of ては), and てくれる？. These three casual forms dominate everyday conversation.",
    },
  },

  {
    day: 62,
    dayType: "vocab-expansion",
    title: "Te-form Verb Expansion",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Learn 8 new verbs and immediately apply them to te-form patterns",
      "Practice using new verbs in てください, ています, and action chains",
      "Expand vocabulary for daily life activities and communication",
      "Build fluency by combining new verbs with all learned patterns",
    ],
    usesPatterns: [29, 32, 33],
    vocabulary: [
      {
        japanese: "おくる",
        romaji: "okuru",
        english: "to send (u-verb)",
        fitsPattern: [29, 33],
        mnemonic:
          "'Oh-koo-roo' — 'oh, courier' sends the package. Te-form: おくって",
      },
      {
        japanese: "わすれる",
        romaji: "wasureru",
        english: "to forget (ru-verb)",
        fitsPattern: [29, 32],
        mnemonic:
          "'Wah-soo-reh-roo' — 'was sure I…' forgot something. Te-form: わすれて",
      },
      {
        japanese: "もらう",
        romaji: "morau",
        english: "to receive (u-verb)",
        fitsPattern: [32, 33],
        mnemonic:
          "'Moh-rah-oo' — 'more, ow!' — received more than expected. Te-form: もらって",
      },
      {
        japanese: "おくれる",
        romaji: "okureru",
        english: "to be late (ru-verb)",
        fitsPattern: [32],
        mnemonic:
          "'Oh-koo-reh-roo' — 'oh, cure, roo' — too late for the cure. Te-form: おくれて",
      },
      {
        japanese: "あげる",
        romaji: "ageru",
        english: "to give (to someone) (ru-verb)",
        fitsPattern: [33],
        mnemonic:
          "'Ah-geh-roo' — 'a gear' — give them a gear as a gift. Te-form: あげて",
      },
      {
        japanese: "つける",
        romaji: "tsukeru",
        english: "to turn on / to attach (ru-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Tsoo-keh-roo' — 'to cure' the darkness, turn on the light. Te-form: つけて",
      },
      {
        japanese: "けす",
        romaji: "kesu",
        english: "to turn off / to erase (u-verb)",
        fitsPattern: [29],
        mnemonic:
          "'Keh-soo' — 'case' closed — turn off and shut the case. Te-form: けして",
      },
      {
        japanese: "かぎ",
        romaji: "kagi",
        english: "key / lock",
        fitsPattern: [32],
        mnemonic:
          "'Kah-gee' — 'car key' — don't forget your key",
      },
    ],
    examples: [
      {
        japanese: "メールをおくってください。",
        romaji: "Mēru o okutte kudasai.",
        english: "Please send an email.",
      },
      {
        japanese: "かぎをわすれています。",
        romaji: "Kagi o wasurete imasu.",
        english: "I've forgotten my keys. (resultant state)",
      },
      {
        japanese: "ともだちにプレゼントをもらって、とてもうれしかったです。",
        romaji: "Tomodachi ni purezento o moratte, totemo ureshikatta desu.",
        english: "I received a present from my friend and was very happy.",
      },
      {
        japanese: "でんきをけしてください。",
        romaji: "Denki o keshite kudasai.",
        english: "Please turn off the light.",
      },
      {
        japanese: "テレビをつけて、ニュースをみて、ねました。",
        romaji: "Terebi o tsukete, nyūsu o mite, nemashita.",
        english: "I turned on the TV, watched the news, and went to bed.",
      },
      {
        japanese: "おくれてすみません。",
        romaji: "Okurete sumimasen.",
        english: "I'm sorry for being late.",
      },
      {
        japanese: "りょうりをてつだってくれますか？",
        romaji: "Ryōri o tetsudatte kuremasu ka?",
        english: "Could you help me with cooking?",
      },
      {
        japanese: "ともだちにほんをあげました。",
        romaji: "Tomodachi ni hon o agemashita.",
        english: "I gave a book to my friend.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "おくれてすみません！でんしゃがおくれていました。",
        romaji: "Okurete sumimasen! Densha ga okurete imashita.",
        english: "Sorry I'm late! The train was delayed.",
      },
      {
        speaker: "Tanaka",
        japanese: "だいじょうぶですよ。エアコンをつけてください。あついですね。",
        romaji: "Daijōbu desu yo. Eakon o tsukete kudasai. Atsui desu ne.",
        english: "It's okay. Please turn on the AC. It's hot, isn't it?",
      },
      {
        speaker: "You",
        japanese: "はい。あ、かぎをわすれています。",
        romaji: "Hai. A, kagi o wasurete imasu.",
        english: "Yes. Oh, I've forgotten my keys.",
      },
      {
        speaker: "Tanaka",
        japanese: "しんぱいしないでください。あとでとりにいけますよ。",
        romaji: "Shinpai shinaide kudasai. Ato de tori ni ikemasu yo.",
        english: "Please don't worry. You can go get them later.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。いつもてつだってくれて。",
        romaji: "Arigatō gozaimasu. Itsumo tetsudatte kurete.",
        english: "Thank you. You always help me.",
      },
    ],
    practicePrompts: [
      "Ask someone to send a message: メッセージを___てください",
      "Describe a sequence: ___をつけて、___をみて、___をけします",
      "Apologize for being late: おくれて___",
      "Describe the state of forgetting: ___をわすれています",
      "Thank someone for help: いつも___てくれてありがとう",
    ],
    languageInsight: {
      title: "Giving and Receiving: Japanese Social Verbs",
      content:
        "Japanese has three verbs for 'give': あげる (I give to someone), くれる (someone gives to me), and もらう (I receive). This three-way distinction reflects Japanese sensitivity to social direction — who is doing the favor for whom. When combined with te-form, they become powerful: てあげる (do something for someone), てくれる (someone does something for me), てもらう (I have someone do something). These 'giving/receiving' auxiliaries add social nuance that English simply doesn't have. You'll explore them deeply in Phase 6.",
    },
    tutorNote:
      "Today's verbs are all high-frequency daily life words. つける/けす (turn on/off) are a natural pair — practice them together: でんきをつけてください / でんきをけしてください. わすれています (have forgotten) is a great example of ている as resultant state — the forgetting happened in the past, but the state continues. おくれてすみません is one of the most useful phrases in Japan — you'll say it more than you'd like!",
    quickReference:
      "おくる=send (おくって) | わすれる=forget (わすれて) | もらう=receive (もらって) | おくれる=be late (おくれて) | あげる=give (あげて) | つける=turn on (つけて) | けす=turn off (けして) | かぎ=key",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 13",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for てくれる (someone does something for me) and てあげる (I do something for someone). These giving/receiving patterns appear constantly when housemates help each other.",
    },
  },

  {
    day: 63,
    dayType: "pattern-combo",
    title: "Te-form Combos",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Combine multiple te-form patterns in single conversations",
      "Build complex sentences using chaining + requests + progressive",
      "Practice natural transitions between te-form patterns",
      "Develop paragraph-level Japanese using te-form as connective tissue",
    ],
    usesPatterns: [29, 32, 33, 34, 35, 37],
    vocabulary: [
      {
        japanese: "じゅんびする",
        romaji: "junbi suru",
        english: "to prepare (する verb)",
        fitsPattern: [33, 34],
        mnemonic:
          "'Joon-bee soo-roo' — 'June bee' prepares for summer. Te-form: じゅんびして",
      },
      {
        japanese: "かたづける",
        romaji: "katadzukeru",
        english: "to tidy up / to clean up (ru-verb)",
        fitsPattern: [29, 33],
        mnemonic:
          "'Kah-tah-zoo-keh-roo' — 'caught a zoo keeper' tidying up. Te-form: かたづけて",
      },
      {
        japanese: "やすむ",
        romaji: "yasumu",
        english: "to rest / to take a day off (u-verb)",
        fitsPattern: [32, 37],
        mnemonic:
          "'Yah-soo-moo' — 'yes, zoom' to bed — time to rest. Te-form: やすんで",
      },
      {
        japanese: "せつめいする",
        romaji: "setsumei suru",
        english: "to explain (する verb)",
        fitsPattern: [29, 35],
        mnemonic:
          "'Seh-tsoo-may soo-roo' — 'sets may' need explaining. Te-form: せつめいして",
      },
      {
        japanese: "まちがえる",
        romaji: "machigaeru",
        english: "to make a mistake (ru-verb)",
        fitsPattern: [37],
        mnemonic:
          "'Mah-chee-gah-eh-roo' — 'much I got error' — I made a mistake. Te-form: まちがえて",
      },
      {
        japanese: "なおす",
        romaji: "naosu",
        english: "to fix / to correct (u-verb)",
        fitsPattern: [29, 34],
        mnemonic:
          "'Nah-oh-soo' — 'now sue' — fix it or now I'll sue. Te-form: なおして",
      },
    ],
    examples: [
      {
        japanese: "じゅんびしてからでかけてください。",
        romaji: "Junbi shite kara dekakete kudasai.",
        english: "Please go out after preparing. (#34 + #29)",
      },
      {
        japanese: "へやをかたづけて、そうじして、やすみます。",
        romaji: "Heya o katadzukete, sōji shite, yasumimasu.",
        english: "I'll tidy the room, clean, and rest. (#33)",
      },
      {
        japanese: "にほんりょうりをつくってみています。",
        romaji: "Nihon ryōri o tsukutte mite imasu.",
        english: "I'm trying making Japanese food. (#35 + #32)",
      },
      {
        japanese: "まちがえてもだいじょうぶです。なおしてください。",
        romaji: "Machigaete mo daijōbu desu. Naoshite kudasai.",
        english: "Even if you make a mistake, it's okay. Please fix it.",
      },
      {
        japanese: "せつめいしてみてください。むずかしくなくてもいいです。",
        romaji: "Setsumei shite mite kudasai. Muzukashiku nakute mo ii desu.",
        english: "Please try explaining it. It doesn't have to be complicated. (#35 + #29 + #37)",
      },
      {
        japanese: "やすんでからべんきょうします。むりしなくてもいいですよ。",
        romaji: "Yasunde kara benkyō shimasu. Muri shinakute mo ii desu yo.",
        english: "I'll study after resting. I don't have to push myself. (#34 + #37)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [33, 34, 29],
        japanese:
          "おきて、かおをあらって、あさごはんをたべてからでかけてください。",
        romaji:
          "Okite, kao o aratte, asagohan o tabete kara dekakete kudasai.",
        english:
          "Please wake up, wash your face, and go out after eating breakfast.",
      },
      {
        patternsUsed: [35, 32],
        japanese:
          "あたらしいレストランでたべてみました。いまおきにいりになっています。",
        romaji:
          "Atarashii resutoran de tabete mimashita. Ima okiniiri ni natte imasu.",
        english:
          "I tried eating at a new restaurant. It's now become my favorite.",
      },
      {
        patternsUsed: [29, 37, 34],
        japanese:
          "ぜんぶよまなくてもいいです。だいじなところだけよんでからしつもんしてください。",
        romaji:
          "Zenbu yomanakute mo ii desu. Daiji na tokoro dake yonde kara shitsumon shite kudasai.",
        english:
          "You don't have to read everything. Please ask questions after reading just the important parts.",
      },
      {
        patternsUsed: [32, 33, 35],
        japanese:
          "いまにほんごをべんきょうしています。まいにちきいて、はなして、かいてみています。",
        romaji:
          "Ima nihongo o benkyō shite imasu. Mainichi kiite, hanashite, kaite mite imasu.",
        english:
          "I'm studying Japanese now. Every day I listen, speak, and try writing.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "しゅうまつ、いっしょにりょうりしてみませんか？",
        romaji: "Shūmatsu, issho ni ryōri shite mimasen ka?",
        english: "Want to try cooking together this weekend?",
      },
      {
        speaker: "You",
        japanese: "いいですね。なにをつくりますか？",
        romaji: "Ii desu ne. Nani o tsukurimasu ka?",
        english: "Sounds great. What shall we make?",
      },
      {
        speaker: "Tanaka",
        japanese: "おこのみやきをつくってみましょう。",
        romaji: "Okonomiyaki o tsukutte mimashō.",
        english: "Let's try making okonomiyaki.",
      },
      {
        speaker: "You",
        japanese: "つくったことがありません。むずかしいですか？",
        romaji: "Tsukutta koto ga arimasen. Muzukashii desu ka?",
        english: "I've never made it. Is it difficult?",
      },
      {
        speaker: "Tanaka",
        japanese:
          "かんたんですよ。ざいりょうをきって、まぜて、やくだけです。しんぱいしなくてもいいです。",
        romaji:
          "Kantan desu yo. Zairyō o kitte, mazete, yaku dake desu. Shinpai shinakute mo ii desu.",
        english:
          "It's easy. Just cut the ingredients, mix, and cook. Don't worry.",
      },
      {
        speaker: "You",
        japanese: "じゃあ、レシピをしらべてからかいものにいきましょう。",
        romaji: "Jā, reshipi o shirabete kara kaimono ni ikimashō.",
        english: "Then let's go shopping after looking up the recipe.",
      },
      {
        speaker: "Tanaka",
        japanese: "はい。かいものして、じゅんびして、いっしょにつくりましょう。",
        romaji:
          "Hai. Kaimono shite, junbi shite, issho ni tsukurimashō.",
        english: "Yes. Let's shop, prepare, and cook together.",
      },
    ],
    practicePrompts: [
      "Describe your weekend plan combining #33 and #34: ___て、___て、___てから___ます",
      "Suggest trying something: ___てみませんか？ / ___てみましょう",
      "Reassure + request: ___なくてもいいです。でも___てください",
      "Build a paragraph: ___ています。まいにち___て、___て、___ています",
    ],
    languageInsight: {
      title: "Te-form as Conversational Glue",
      content:
        "By now you've seen te-form in nine different patterns — and they all combine freely. This is te-form's superpower: it's the connective tissue of Japanese conversation. A single paragraph might use て chaining (#33), followed by てから (#34) for a key sequence, ending with ています (#32) for the current state. Native speakers don't think about which 'pattern number' they're using — they just chain te-forms naturally, like LEGO bricks clicking together. That's your goal too: not 'which pattern do I use?' but 'how do I connect my ideas?'",
    },
    tutorNote:
      "Today is where everything clicks. All the te-form patterns you've learned are building blocks — now stack them. Describe a cooking plan: レシピをしらべて (look up recipe), かいものにいって (go shopping), ざいりょうをきって (cut ingredients), つくってみて (try making it). One flowing paragraph, four te-form uses. That's natural Japanese. Don't overthink which pattern number you're using — just connect actions and ideas with て.",
    quickReference:
      "Te-form combos: #33+#34 (chain + after) | #35+#32 (try + progressive) | #29+#37 (request + don't have to) | じゅんびする=prepare | かたづける=tidy | やすむ=rest | せつめいする=explain | まちがえる=mistake | なおす=fix",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 14",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for how housemates combine multiple te-form patterns in a single turn of speech. Notice how they chain actions, make requests, describe ongoing states, and suggest trying things — all with te-form.",
    },
  },

  {
    day: 64,
    dayType: "pattern-combo",
    title: "Making Plans Together",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Hold a full planning conversation using te-form patterns",
      "Combine requests, permission, sequence, trying, and ability patterns",
      "Practice natural back-and-forth dialogue for making plans",
      "Use te-form patterns to negotiate, suggest, and confirm plans",
    ],
    usesPatterns: [29, 30, 34, 35, 36],
    vocabulary: [
      {
        japanese: "あつまる",
        romaji: "atsumaru",
        english: "to gather / to meet up (u-verb)",
        fitsPattern: [34],
        mnemonic:
          "'Ah-tsoo-mah-roo' — 'at sue, ma, roo' — everyone gathers. Te-form: あつまって",
      },
      {
        japanese: "やくそくする",
        romaji: "yakusoku suru",
        english: "to make a promise / appointment (する verb)",
        fitsPattern: [34],
        mnemonic:
          "'Yah-koo-soh-koo soo-roo' — 'yak, so cool' — promise to see the yak. Te-form: やくそくして",
      },
      {
        japanese: "さんかする",
        romaji: "sanka suru",
        english: "to participate / to join (する verb)",
        fitsPattern: [36],
        mnemonic:
          "'Sahn-kah soo-roo' — 'thank a' friend for joining. Te-form: さんかして",
      },
      {
        japanese: "けいかくする",
        romaji: "keikaku suru",
        english: "to plan (する verb)",
        fitsPattern: [34, 35],
        mnemonic:
          "'Kay-kah-koo soo-roo' — 'cake cook' — plan to bake a cake. Te-form: けいかくして",
      },
      {
        japanese: "つれていく",
        romaji: "tsurete iku",
        english: "to take (someone) along",
        fitsPattern: [30],
        mnemonic:
          "'Tsoo-reh-teh ee-koo' — take someone along for the ride. Te-form: つれていって",
      },
      {
        japanese: "むかえにいく",
        romaji: "mukae ni iku",
        english: "to go pick (someone) up",
        fitsPattern: [29],
        mnemonic:
          "'Moo-kah-eh nee ee-koo' — go pick someone up at the door. Te-form: むかえにいって",
      },
    ],
    examples: [
      {
        japanese: "あしたさんじにあつまってください。",
        romaji: "Ashita sanji ni atsumatte kudasai.",
        english: "Please gather at three tomorrow.",
      },
      {
        japanese: "ともだちをつれていってもいいですか？",
        romaji: "Tomodachi o tsurete itte mo ii desu ka?",
        english: "May I bring a friend along?",
      },
      {
        japanese: "けいかくしてからやくそくしましょう。",
        romaji: "Keikaku shite kara yakusoku shimashō.",
        english: "Let's make a promise after planning.",
      },
      {
        japanese: "さんかすることができますか？",
        romaji: "Sanka suru koto ga dekimasu ka?",
        english: "Can you participate?",
      },
      {
        japanese: "あたらしいレストランにいってみませんか？",
        romaji: "Atarashii resutoran ni itte mimasen ka?",
        english: "Shall we try going to a new restaurant?",
      },
      {
        japanese: "えきまでむかえにいってください。",
        romaji: "Eki made mukae ni itte kudasai.",
        english: "Please go pick them up at the station.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [35, 29, 34],
        japanese:
          "あたらしいみせにいってみましょう。よやくしてからいってください。",
        romaji:
          "Atarashii mise ni itte mimashō. Yoyaku shite kara itte kudasai.",
        english:
          "Let's try going to a new shop. Please go after making a reservation.",
      },
      {
        patternsUsed: [30, 36, 34],
        japanese:
          "ともだちをつれていってもいいですか？にほんごをはなすことができますか？あってからきめましょう。",
        romaji:
          "Tomodachi o tsurete itte mo ii desu ka? Nihongo o hanasu koto ga dekimasu ka? Atte kara kimemashō.",
        english:
          "May I bring a friend? Can they speak Japanese? Let's decide after meeting.",
      },
      {
        patternsUsed: [29, 35, 36],
        japanese:
          "カラオケにいきましょう。にほんのうたをうたってみてください。うたうことができますか？",
        romaji:
          "Karaoke ni ikimashō. Nihon no uta o utatte mite kudasai. Utau koto ga dekimasu ka?",
        english:
          "Let's go to karaoke. Please try singing a Japanese song. Can you sing?",
      },
      {
        patternsUsed: [34, 29, 30],
        japanese:
          "しごとがおわってからのみにいきませんか？かいしゃのひとをよんでもいいですか？えきにあつまってください。",
        romaji:
          "Shigoto ga owatte kara nomi ni ikimasen ka? Kaisha no hito o yonde mo ii desu ka? Eki ni atsumatte kudasai.",
        english:
          "Shall we go drinking after work? May I invite coworkers? Please gather at the station.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "こんどのどようび、みんなでバーベキューをしませんか？",
        romaji: "Kondo no doyōbi, minna de bābekyū o shimasen ka?",
        english: "Shall we all have a barbecue this Saturday?",
      },
      {
        speaker: "You",
        japanese:
          "いいですね！さんかしたいです。ともだちをつれていってもいいですか？",
        romaji:
          "Ii desu ne! Sanka shitai desu. Tomodachi o tsurete itte mo ii desu ka?",
        english: "Sounds great! I want to join. May I bring a friend?",
      },
      {
        speaker: "Tanaka",
        japanese: "もちろん。どうぞ。じゅうじにこうえんにあつまってください。",
        romaji: "Mochiron. Dōzo. Jūji ni kōen ni atsumatte kudasai.",
        english: "Of course. Please gather at the park at ten.",
      },
      {
        speaker: "You",
        japanese: "なにかもっていきましょうか？",
        romaji: "Nanika motte ikimashō ka?",
        english: "Shall I bring something?",
      },
      {
        speaker: "Tanaka",
        japanese:
          "のみものをもってきてください。たべものはわたしがじゅんびします。",
        romaji:
          "Nomimono o motte kite kudasai. Tabemono wa watashi ga junbi shimasu.",
        english: "Please bring drinks. I'll prepare the food.",
      },
      {
        speaker: "You",
        japanese: "わかりました。かいものしてからいきますね。",
        romaji: "Wakarimashita. Kaimono shite kara ikimasu ne.",
        english: "Got it. I'll come after shopping.",
      },
      {
        speaker: "Tanaka",
        japanese: "あ、やきにくをたべてみてください。すごくおいしいですよ。",
        romaji:
          "A, yakiniku o tabete mite kudasai. Sugoku oishii desu yo.",
        english: "Oh, please try the yakiniku. It's really delicious.",
      },
      {
        speaker: "You",
        japanese: "たのしみにしています！",
        romaji: "Tanoshimi ni shite imasu!",
        english: "I'm looking forward to it!",
      },
    ],
    practicePrompts: [
      "Invite someone: ___てみませんか？ / ___にいきませんか？",
      "Ask permission to bring someone: ___をつれていってもいいですか？",
      "Describe your plan sequence: ___してから___して___ます",
      "Ask about ability: ___ことができますか？",
      "Respond to an invitation using multiple patterns in one paragraph",
    ],
    languageInsight: {
      title: "Making Plans: The Japanese Way",
      content:
        "Japanese plan-making relies heavily on indirect suggestion rather than direct commands. ～ませんか (won't we?) is softer than ～ましょう (let's). Notice how Tanaka says しませんか (shall we?), not します (we will). Even requests come wrapped in politeness: もってきてください (please bring) rather than もってこい (bring it!). The entire exchange follows a pattern: suggest → check permission → confirm details → express anticipation. たのしみにしています (I'm looking forward to it) is the perfect conversation closer — it signals enthusiasm without overcommitting.",
    },
    tutorNote:
      "Today is a full simulation of real-life Japanese — making plans with friends. Every pattern from Phase 5 appears naturally. The key phrases: ___しませんか (shall we?), ___をもっていきましょうか (shall I bring?), ___してからいきます (I'll come after ___), たのしみにしています (looking forward to it). Try role-playing both sides of the conversation. This is the kind of Japanese you'll use every week.",
    quickReference:
      "Planning phrases: あつまってください=please gather | つれていってもいいですか=may I bring someone | けいかくしてから=after planning | さんかすることができます=can participate | てみませんか=shall we try? | たのしみにしています=looking forward to it",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1, Episode 15",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Focus on how housemates make plans together. Listen for ～ない？ (casual invitation), ～てから (after doing), and ～てみよう (let's try). Notice the natural flow of suggesting, negotiating, and confirming.",
    },
  },

  {
    day: 65,
    dayType: "review",
    title: "Phase 5 Review",
    phase: 5,
    phaseTitle: "Interaction Patterns (Te-form)",
    objectives: [
      "Review and solidify Patterns #29-37 and all te-form conjugations",
      "Demonstrate mastery of te-form across requests, permission, prohibition, progressive, chaining, sequence, trying, ability, and optionality",
      "Hold extended conversations using all Phase 5 patterns naturally",
      "Self-assess readiness for Phase 6",
    ],
    usesPatterns: [29, 30, 31, 32, 33, 34, 35, 36, 37],
    vocabulary: [
      {
        japanese: "じしん",
        romaji: "jishin",
        english: "confidence / self-confidence",
        mnemonic:
          "'Jee-sheen' — 'gee, sheen!' — confidence gives you a sheen",
      },
      {
        japanese: "じょうたつする",
        romaji: "jōtatsu suru",
        english: "to improve / to make progress (する verb)",
        mnemonic:
          "'Joh-tah-tsoo soo-roo' — 'Joe taught Sue' — they improved together",
      },
      {
        japanese: "つづける",
        romaji: "tsuzukeru",
        english: "to continue (ru-verb)",
        mnemonic:
          "'Tsoo-zoo-keh-roo' — 'to zoo, care, roo' — continue caring for the zoo. Te-form: つづけて",
      },
      {
        japanese: "がんばる",
        romaji: "ganbaru",
        english: "to do one's best / to persevere (u-verb)",
        mnemonic:
          "'Gahn-bah-roo' — 'gone bar!' — persevere past the bar. Te-form: がんばって",
      },
      {
        japanese: "なれる",
        romaji: "nareru",
        english: "to get used to (ru-verb)",
        mnemonic:
          "'Nah-reh-roo' — 'nah, rare' — no longer rare, I'm used to it. Te-form: なれて",
      },
      {
        japanese: "ふくしゅうする",
        romaji: "fukushū suru",
        english: "to review (lessons) (する verb)",
        mnemonic:
          "'Foo-koo-shoo soo-roo' — 'cool shoe' — review the cool shoe designs. Te-form: ふくしゅうして",
      },
    ],
    examples: [
      {
        japanese: "て形をつかってください。もうなれましたか？",
        romaji: "Te-kei o tsukatte kudasai. Mō naremashita ka?",
        english: "Please use te-form. Are you used to it yet? (#29)",
      },
      {
        japanese: "カジュアルではなしてもいいですか？",
        romaji: "Kajuaru de hanashite mo ii desu ka?",
        english: "May I speak casually? (#30)",
      },
      {
        japanese: "テストちゅうにスマホをみてはいけません。",
        romaji: "Tesuto-chū ni sumaho o mite wa ikemasen.",
        english: "You must not look at your phone during the test. (#31)",
      },
      {
        japanese: "いまにほんごをべんきょうしています。",
        romaji: "Ima nihongo o benkyō shite imasu.",
        english: "I am studying Japanese right now. (#32)",
      },
      {
        japanese: "まいにちきいて、はなして、かいています。",
        romaji: "Mainichi kiite, hanashite, kaite imasu.",
        english: "Every day I listen, speak, and write. (#33)",
      },
      {
        japanese: "ふくしゅうしてからつぎにすすみます。",
        romaji: "Fukushū shite kara tsugi ni susumimasu.",
        english: "I'll move to the next after reviewing. (#34)",
      },
      {
        japanese: "あたらしいパターンをつかってみてください。",
        romaji: "Atarashii patān o tsukatte mite kudasai.",
        english: "Please try using a new pattern. (#35)",
      },
      {
        japanese: "にほんごではなすことができます！",
        romaji: "Nihongo de hanasu koto ga dekimasu!",
        english: "I can speak in Japanese! (#36)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [32, 33, 36],
        japanese:
          "いまにほんごをべんきょうしています。まいにちきいて、よんで、はなしています。かんたんなぶんをかくことができます。",
        romaji:
          "Ima nihongo o benkyō shite imasu. Mainichi kiite, yonde, hanashite imasu. Kantan na bun o kaku koto ga dekimasu.",
        english:
          "I'm studying Japanese now. Every day I listen, read, and speak. I can write simple sentences.",
      },
      {
        patternsUsed: [29, 34, 37],
        japanese:
          "まずふくしゅうしてかられんしゅうしてください。かんぺきじゃなくてもいいです。すこしずつじょうたつします。",
        romaji:
          "Mazu fukushū shite kara renshū shite kudasai. Kanpeki ja nakute mo ii desu. Sukoshi zutsu jōtatsu shimasu.",
        english:
          "First please practice after reviewing. It doesn't have to be perfect. You'll improve little by little.",
      },
      {
        patternsUsed: [30, 31, 35],
        japanese:
          "にほんのおんせんにはいってみたいです。おんせんでしゃしんをとってもいいですか？いいえ、とってはいけません。",
        romaji:
          "Nihon no onsen ni haitte mitai desu. Onsen de shashin o totte mo ii desu ka? Iie, totte wa ikemasen.",
        english:
          "I want to try going to a Japanese hot spring. May I take photos at the onsen? No, you must not.",
      },
      {
        patternsUsed: [29, 32, 33, 34, 35, 36, 37],
        japanese:
          "にほんにきて、まいにちにほんごをはなしています。レストランでちゅうもんすることができます。わからないことばはしらべてからつかってみます。かんぺきにはなさなくてもいいです。がんばってつづけてください。",
        romaji:
          "Nihon ni kite, mainichi nihongo o hanashite imasu. Resutoran de chūmon suru koto ga dekimasu. Wakaranai kotoba wa shirabete kara tsukatte mimasu. Kanpeki ni hanasanakute mo ii desu. Ganbatte tsuzukete kudasai.",
        english:
          "Since coming to Japan, I speak Japanese every day. I can order at restaurants. Words I don't understand, I look up and then try using. I don't have to speak perfectly. Please keep doing your best.",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "フェーズ５、おつかれさまでした。て形はどうですか？",
        romaji: "Fēzu go, otsukaresama deshita. Te-kei wa dō desu ka?",
        english: "Good work on Phase 5. How is te-form?",
      },
      {
        speaker: "You",
        japanese: "さいしょはむずかしかったですが、いまはなれています。",
        romaji:
          "Saisho wa muzukashikatta desu ga, ima wa narete imasu.",
        english: "It was difficult at first, but I'm used to it now.",
      },
      {
        speaker: "Sensei",
        japanese: "いいですね。いまなにができますか？",
        romaji: "Ii desu ne. Ima nani ga dekimasu ka?",
        english: "Great. What can you do now?",
      },
      {
        speaker: "You",
        japanese:
          "おねがいすることができます。きょかをきくこともできます。にっかをせつめいすることもできます。",
        romaji:
          "Onegai suru koto ga dekimasu. Kyoka o kiku koto mo dekimasu. Nikka o setsumei suru koto mo dekimasu.",
        english:
          "I can make requests. I can also ask permission. I can also explain daily routines.",
      },
      {
        speaker: "Sensei",
        japanese: "すばらしい。にほんごでじこしょうかいしてみてください。",
        romaji: "Subarashii. Nihongo de jiko shōkai shite mite kudasai.",
        english: "Wonderful. Please try introducing yourself in Japanese.",
      },
      {
        speaker: "You",
        japanese:
          "はい。とうきょうにすんでいます。IT会社ではたらいています。にほんごをべんきょうしています。かんじをよむことがすこしできます。まいにちきいて、はなして、かいています。これからもがんばってつづけます。",
        romaji:
          "Hai. Tōkyō ni sunde imasu. IT-gaisha de hataraite imasu. Nihongo o benkyō shite imasu. Kanji o yomu koto ga sukoshi dekimasu. Mainichi kiite, hanashite, kaite imasu. Korekara mo ganbatte tsuzukemasu.",
        english:
          "Yes. I live in Tokyo. I work at an IT company. I'm studying Japanese. I can read kanji a little. Every day I listen, speak, and write. I'll keep doing my best from now on.",
      },
      {
        speaker: "Sensei",
        japanese:
          "かんぺきです。じしんをもってください。フェーズ６もがんばりましょう。",
        romaji:
          "Kanpeki desu. Jishin o motte kudasai. Fēzu roku mo ganbarimashō.",
        english:
          "Perfect. Please have confidence. Let's work hard on Phase 6 too.",
      },
    ],
    practicePrompts: [
      "Write a full self-introduction using #32, #33, #36: where you live, what you do, what you can do",
      "Role-play a museum visit using #29 (requests), #30 (permission), #31 (prohibition)",
      "Describe your daily routine as action chains (#33) with てから (#34) for key sequences",
      "List five things you want to try in Japan using てみたいです (#35)",
      "Reassure a nervous friend using #37 (don't have to) and #29 (please keep going)",
    ],
    languageInsight: {
      title: "Te-form: Nine Patterns, One Conjugation",
      content:
        "You've now learned nine patterns that all build on a single conjugation: te-form. Pattern #29 (てください) makes requests. #30 (てもいい) asks permission. #31 (てはいけない) prohibits. #32 (ている) describes states and ongoing actions. #33 (て、て、) chains actions. #34 (てから) sequences them. #35 (てみる) tries them. #36 (ことができる) expresses ability. #37 (なくてもいい) releases obligation. Nine different meanings from one verb form — that's the power of te-form. Master this conjugation and you've unlocked the richest grammar in everyday Japanese.",
    },
    tutorNote:
      "Phase 5 complete! Te-form is the single most important conjugation in Japanese, and you now use it nine different ways. Before moving to Phase 6, make sure you can: (1) convert any verb to te-form without hesitation, (2) naturally combine multiple te-form patterns in a paragraph, (3) switch between polite and casual te-form expressions, and (4) hold a conversation about plans, routines, abilities, and permissions. Phase 6 introduces comparative patterns and giving/receiving — building on everything you've mastered here.",
    quickReference:
      "Phase 5 Patterns: #29 てください (please) | #30 てもいいですか (may I?) | #31 てはいけません (must not) | #32 ています (am doing/state) | #33 て、て、ます (chain) | #34 てから (after) | #35 てみる (try) | #36 ことができます (can) | #37 なくてもいい (don't have to) | All 37 patterns now complete!",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1 — Full Review",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch any episode and try to identify all nine te-form patterns in natural conversation. Challenge yourself: pause after each te-form usage and identify which pattern it is. Notice how native speakers seamlessly blend these patterns without thinking about grammar rules.",
    },
  },
];
