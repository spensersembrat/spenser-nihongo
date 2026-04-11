import { Lesson } from "@/lib/types";

export const phase6Lessons: Lesson[] = [
  {
    day: 66,
    dayType: "new-pattern",
    title: "Pattern #38: I think that ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #38: embedding full clauses with とおもいます to express complex opinions",
      "Use plain form verbs and sentences before と (not just adjectives as in Pattern #28)",
      "Express opinions about future events, other people's actions, and abstract ideas",
      "Soften assertions by wrapping them in とおもいます for polite discourse",
    ],
    pattern: {
      number: 38,
      japanese: "___とおもいます",
      romaji: "___ to omoimasu",
      english: "I think that ___",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation:
            "A complete clause in plain form — verb, adjective, or sentence",
        },
        {
          text: "と",
          romaji: "to",
          role: "particle",
          explanation: "Quotation particle marking the embedded thought",
        },
        {
          text: "おもいます",
          romaji: "omoimasu",
          role: "verb",
          explanation: "To think (polite) — casual form: おもう",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "かんがえる",
        romaji: "kangaeru",
        english: "to think / to consider (ru-verb)",
        fitsPattern: [38],
        mnemonic:
          "'Kahn-gah-eh-roo' — 'conquer a roo' — think carefully before conquering a kangaroo",
      },
      {
        japanese: "しんじる",
        romaji: "shinjiru",
        english: "to believe (ru-verb)",
        fitsPattern: [38],
        mnemonic:
          "'Sheen-jee-roo' — 'shin, gee, roo' — believe the kangaroo kicked your shin",
      },
      {
        japanese: "たしか",
        romaji: "tashika",
        english: "if I remember correctly / certainly",
        fitsPattern: [38],
        mnemonic:
          "'Tah-shee-kah' — 'ta-she-ka' — 'ta, she confirmed' — certainly!",
      },
      {
        japanese: "きっと",
        romaji: "kitto",
        english: "surely / definitely",
        fitsPattern: [38],
        mnemonic:
          "'Kit-toh' — your emergency 'kit' is surely packed and ready",
      },
      {
        japanese: "ちがう",
        romaji: "chigau",
        english: "to differ / to be wrong (u-verb)",
        fitsPattern: [38],
        mnemonic:
          "'Chee-gah-oo' — 'cheetah, ow!' — that's wrong, cheetahs don't say ow",
      },
      {
        japanese: "ただしい",
        romaji: "tadashii",
        english: "correct / right (い-adjective)",
        fitsPattern: [38],
        mnemonic:
          "'Tah-dah-shee' — 'ta-da! She' got the correct answer!",
      },
    ],
    examples: [
      {
        japanese: "あしたあめがふるとおもいます。",
        romaji: "Ashita ame ga furu to omoimasu.",
        english: "I think it will rain tomorrow.",
      },
      {
        japanese: "たなかさんはもうかえったとおもいます。",
        romaji: "Tanaka-san wa mō kaetta to omoimasu.",
        english: "I think Tanaka already went home.",
      },
      {
        japanese: "このこたえはただしいとおもいます。",
        romaji: "Kono kotae wa tadashii to omoimasu.",
        english: "I think this answer is correct.",
      },
      {
        japanese: "かれはきっとくるとおもいます。",
        romaji: "Kare wa kitto kuru to omoimasu.",
        english: "I think he will surely come.",
      },
      {
        japanese: "にほんごはむずかしいけどたのしいとおもいます。",
        romaji: "Nihongo wa muzukashii kedo tanoshii to omoimasu.",
        english: "I think Japanese is difficult but fun.",
      },
      {
        japanese: "それはちがうとおもいます。",
        romaji: "Sore wa chigau to omoimasu.",
        english: "I think that's wrong.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "あしたのてんきはどうだとおもいますか？",
        romaji: "Ashita no tenki wa dō da to omoimasu ka?",
        english: "What do you think the weather will be like tomorrow?",
      },
      {
        speaker: "You",
        japanese: "あめがふるとおもいます。くもがおおいですから。",
        romaji: "Ame ga furu to omoimasu. Kumo ga ōi desu kara.",
        english: "I think it will rain. Because there are a lot of clouds.",
      },
      {
        speaker: "Tanaka",
        japanese: "そうですか。あしたのピクニックはむりだとおもいますか？",
        romaji: "Sō desu ka. Ashita no pikunikku wa muri da to omoimasu ka?",
        english:
          "I see. Do you think tomorrow's picnic is impossible?",
      },
      {
        speaker: "You",
        japanese:
          "いいえ、ごごからはれるとおもいます。だいじょうぶだとおもいますよ。",
        romaji:
          "Iie, gogo kara hareru to omoimasu. Daijōbu da to omoimasu yo.",
        english:
          "No, I think it will clear up in the afternoon. I think it'll be fine.",
      },
      {
        speaker: "Tanaka",
        japanese: "よかった！たなかさんもくるとおもいますか？",
        romaji: "Yokatta! Tanaka-san mo kuru to omoimasu ka?",
        english: "Great! Do you think Tanaka will come too?",
      },
      {
        speaker: "You",
        japanese: "きっとくるとおもいます。きのう「たのしみ」といっていました。",
        romaji:
          "Kitto kuru to omoimasu. Kinō 'tanoshimi' to itte imashita.",
        english:
          "I think she'll surely come. Yesterday she was saying she's looking forward to it.",
      },
    ],
    practicePrompts: [
      "Share three opinions about Japan using ___とおもいます with full verb clauses",
      "Express what you think will happen tomorrow: あした___とおもいます",
      "Politely disagree: それはちがうとおもいます。___とおもいます。",
      "Ask a friend's opinion: ___はどうだとおもいますか？ then give yours",
    ],
    languageInsight: {
      title: "とおもいます: The Politeness Shield",
      content:
        "In English, 'I think' can sound wishy-washy. In Japanese, とおもいます is the default polite way to express any opinion. Stating a fact directly — あしたあめがふります — sounds like you're a weather forecaster making a declaration. Wrapping it in とおもいます — あしたあめがふるとおもいます — softens it into a personal opinion that respects the listener's right to disagree. Notice the verb before と must be in plain form (ふる, not ふります). This plain-form-before-と rule applies to all quotation patterns you'll learn this phase.",
    },
    tutorNote:
      "Pattern #28 in Phase 4 introduced とおもいます with simple adjective opinions. Now you're embedding full sentences — verbs, past tense, negative — inside the thought. The key mechanical rule: everything before と must be in plain form. If you're not confident with plain forms yet, review Pattern #27 (casual forms). Practice converting your polite sentences to plain form before adding とおもいます.",
    quickReference:
      "Plain form + とおもいます = I think ___ | Verb: いくとおもいます (I think [someone] will go) | Past: いったとおもいます (I think [someone] went) | Negative: いかないとおもいます (I don't think [someone] will go) | な-adj: しずかだとおもいます | い-adj: たかいとおもいます",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — Opinions & Thoughts",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for とおもいます and とおもう in natural speech. Notice how speakers use it to soften almost every opinion, even ones they feel strongly about.",
    },
  },

  {
    day: 67,
    dayType: "new-pattern",
    title: "Pattern #39: ___ said ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #39: ___といいました for reported speech",
      "Quote what others said using plain form + と + speech verb",
      "Use different speech verbs: いう, きく, こたえる, つたえる",
      "Distinguish direct quotation (「___」という) from indirect reporting",
    ],
    pattern: {
      number: 39,
      japanese: "___は___といいました",
      romaji: "___ wa ___ to iimashita",
      english: "___ said that ___",
      breakdown: [
        {
          text: "___は",
          romaji: "___ wa",
          role: "slot",
          explanation: "The person who spoke + topic marker",
        },
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "What was said (in plain form)",
        },
        {
          text: "と",
          romaji: "to",
          role: "particle",
          explanation: "Quotation particle",
        },
        {
          text: "いいました",
          romaji: "iimashita",
          role: "verb",
          explanation: "Said (past polite of いう)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "いう",
        romaji: "iu",
        english: "to say (u-verb, dictionary form)",
        fitsPattern: [39],
        mnemonic:
          "'Ee-oo' — 'eew!' is what you say when you see something gross",
      },
      {
        japanese: "つたえる",
        romaji: "tsutaeru",
        english: "to convey / to pass on a message (ru-verb)",
        fitsPattern: [39],
        mnemonic:
          "'Tsoo-tah-eh-roo' — 'suit a arrow' — convey the message by arrow mail",
      },
      {
        japanese: "こたえる",
        romaji: "kotaeru",
        english: "to answer / to reply (ru-verb)",
        fitsPattern: [39],
        mnemonic:
          "'Koh-tah-eh-roo' — 'coat a arrow' — answer back with a coated arrow",
      },
      {
        japanese: "ニュース",
        romaji: "nyūsu",
        english: "news",
        fitsPattern: [39],
        mnemonic: "Sounds like English 'news' — ニュース",
      },
      {
        japanese: "うわさ",
        romaji: "uwasa",
        english: "rumor / gossip",
        fitsPattern: [39],
        mnemonic:
          "'Oo-wah-sah' — 'ooh, was a' — 'ooh, was a rumor true?' you whisper",
      },
      {
        japanese: "ほんとう",
        romaji: "hontō",
        english: "truth / really",
        fitsPattern: [39],
        mnemonic:
          "'Hohn-toh' — 'home toe' — the truth is, you stubbed your toe at home",
      },
    ],
    examples: [
      {
        japanese: "せんせいはあしたテストがあるといいました。",
        romaji: "Sensei wa ashita tesuto ga aru to iimashita.",
        english: "The teacher said there's a test tomorrow.",
      },
      {
        japanese: "ともだちはにほんにいきたいといっていました。",
        romaji: "Tomodachi wa nihon ni ikitai to itte imashita.",
        english: "My friend was saying they want to go to Japan.",
      },
      {
        japanese: "かのじょは「おいしい」といいました。",
        romaji: "Kanojo wa 'oishii' to iimashita.",
        english: "She said 'It's delicious.'",
      },
      {
        japanese: "ニュースであしたゆきがふるといっていました。",
        romaji: "Nyūsu de ashita yuki ga furu to itte imashita.",
        english: "On the news they were saying it will snow tomorrow.",
      },
      {
        japanese: "たなかさんはこられないとつたえてください。",
        romaji: "Tanaka-san wa korarenai to tsutaete kudasai.",
        english: "Please convey that Tanaka can't come.",
      },
      {
        japanese: "「なんじですか」ときいたら、「さんじです」とこたえました。",
        romaji:
          "'Nanji desu ka' to kiitara, 'sanji desu' to kotaemashita.",
        english:
          "When I asked 'What time is it?', they answered 'It's three o'clock.'",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "やまださんからでんわがありましたよ。",
        romaji: "Yamada-san kara denwa ga arimashita yo.",
        english: "You got a call from Yamada.",
      },
      {
        speaker: "Tanaka",
        japanese: "そうですか。なんといいましたか？",
        romaji: "Sō desu ka. Nan to iimashita ka?",
        english: "Really? What did they say?",
      },
      {
        speaker: "You",
        japanese: "あしたのかいぎはじゅうじからだといいました。",
        romaji: "Ashita no kaigi wa jūji kara da to iimashita.",
        english: "They said tomorrow's meeting starts at ten.",
      },
      {
        speaker: "Tanaka",
        japanese: "じゅうじ？くじだときいていましたが…",
        romaji: "Jūji? Kuji da to kiite imashita ga…",
        english: "Ten? I had heard it was nine…",
      },
      {
        speaker: "You",
        japanese: "やまださんはじかんがかわったとつたえてほしいといっていました。",
        romaji:
          "Yamada-san wa jikan ga kawatta to tsutaete hoshii to itte imashita.",
        english:
          "Yamada was saying they want you to know the time changed.",
      },
      {
        speaker: "Tanaka",
        japanese: "わかりました。ありがとうございます。",
        romaji: "Wakarimashita. Arigatō gozaimasu.",
        english: "Understood. Thank you.",
      },
    ],
    practicePrompts: [
      "Report what three different people said today using ___は___といいました",
      "Relay a piece of news: ニュースで___といっていました",
      "Practice direct quotes: 「___」といいました vs indirect: ___といいました",
      "Relay a message: ___さんは___とつたえてください",
    ],
    languageInsight: {
      title: "The Universal Quotation Particle と",
      content:
        "The particle と is Japanese's universal quotation marker. Unlike English, which uses different constructions for 'she said that…', 'I think that…', 'I heard that…', Japanese uses と for all of them: ___といいました (said), ___とおもいます (think), ___ときいています (I hear that). The clause before と is always in plain form — this is the embedded 'quoted thought.' Once you master the plain-form + と pattern, you can plug it into dozens of verbs: おもう, いう, きく, こたえる, つたえる, かんがえる, しんじる. It's one connector with infinite reach.",
    },
    tutorNote:
      "Reported speech is essential for real conversation — you're constantly relaying what others said. The mechanical pattern is identical to #38: plain form + と + verb. The only change is the verb at the end. Today, drill ___といいました. Notice the two forms: といいました (said, completed) and といっていました (was saying, ongoing). Both are extremely common.",
    quickReference:
      "___は___といいました = ___ said that ___ | ___ときいています = I hear that ___ | ___とこたえました = answered that ___ | ___とつたえてください = please convey that ___ | Before と: always plain form",
    listeningRec: {
      source: "Terrace House",
      title: "Any episode with housemate discussions",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for ～って (casual quotation) and ～といっていた (was saying). Housemates constantly relay what others said. って is the casual contraction of と — you'll hear it everywhere.",
    },
  },

  {
    day: 68,
    dayType: "new-pattern",
    title: "Pattern #40: Because ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #40: ___から and ___ので for giving reasons",
      "Understand the nuance difference: から is direct, ので is softer and more polite",
      "Use plain form before ので and either plain or polite form before から",
      "Build reason-result sentences in natural Japanese order: reason first, conclusion second",
    ],
    pattern: {
      number: 40,
      japanese: "___から、___。/ ___ので、___。",
      romaji: "___ kara, ___. / ___ node, ___.",
      english: "Because ___, ___.",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation:
            "The reason (plain form before ので; plain or polite before から)",
        },
        {
          text: "から",
          romaji: "kara",
          role: "particle",
          explanation: "Because (direct, casual — can also follow polite form)",
        },
        {
          text: "ので",
          romaji: "node",
          role: "particle",
          explanation:
            "Because (softer, polite — な-adj/noun use な before ので)",
        },
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "The result or conclusion",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "りゆう",
        romaji: "riyū",
        english: "reason",
        fitsPattern: [40],
        mnemonic:
          "'Ree-yoo' — 'reason you' — the reason you did it",
      },
      {
        japanese: "つかれる",
        romaji: "tsukareru",
        english: "to get tired (ru-verb)",
        fitsPattern: [40],
        mnemonic:
          "'Tsoo-kah-reh-roo' — 'two car arrow' — chasing two cars makes you tired",
      },
      {
        japanese: "ねつがある",
        romaji: "netsu ga aru",
        english: "to have a fever",
        fitsPattern: [40],
        mnemonic:
          "'Net-soo gah ah-roo' — 'net sue' — you feel feverish after suing the net",
      },
      {
        japanese: "おくれる",
        romaji: "okureru",
        english: "to be late (ru-verb)",
        fitsPattern: [40],
        mnemonic:
          "'Oh-koo-reh-roo' — 'oh, cooler route' — the cooler route made you late",
      },
      {
        japanese: "やすむ",
        romaji: "yasumu",
        english: "to rest / to take a day off (u-verb)",
        fitsPattern: [40],
        mnemonic:
          "'Yah-soo-moo' — 'yes, moo' — even the cow says yes to resting",
      },
      {
        japanese: "だから",
        romaji: "dakara",
        english: "therefore / that's why",
        fitsPattern: [40],
        mnemonic:
          "'Dah-kah-rah' — 'the car, rah!' — therefore, the car won!",
      },
    ],
    examples: [
      {
        japanese: "あたまがいたいから、くすりをのみます。",
        romaji: "Atama ga itai kara, kusuri o nomimasu.",
        english: "Because I have a headache, I'll take medicine.",
      },
      {
        japanese: "あめがふっているので、かさをもっていきます。",
        romaji: "Ame ga futte iru node, kasa o motte ikimasu.",
        english: "Because it's raining, I'll bring an umbrella.",
      },
      {
        japanese: "ねつがあるから、きょうはやすみます。",
        romaji: "Netsu ga aru kara, kyō wa yasumimasu.",
        english: "Because I have a fever, I'll rest today.",
      },
      {
        japanese: "でんしゃがおくれたので、かいしゃにおくれました。",
        romaji: "Densha ga okureta node, kaisha ni okuremashita.",
        english: "Because the train was late, I was late to work.",
      },
      {
        japanese: "つかれたから、はやくねます。",
        romaji: "Tsukareta kara, hayaku nemasu.",
        english: "Because I'm tired, I'll go to bed early.",
      },
      {
        japanese: "にほんのりょうりがすきなので、まいにちつくります。",
        romaji: "Nihon no ryōri ga suki na node, mainichi tsukurimasu.",
        english:
          "Because I like Japanese cuisine, I cook it every day.",
      },
    ],
    dialogue: [
      {
        speaker: "Boss",
        japanese: "きょうやまださんがいませんが、しっていますか？",
        romaji: "Kyō Yamada-san ga imasen ga, shitte imasu ka?",
        english: "Yamada isn't here today. Do you know why?",
      },
      {
        speaker: "You",
        japanese: "ねつがあるので、きょうはやすむといっていました。",
        romaji: "Netsu ga aru node, kyō wa yasumu to itte imashita.",
        english:
          "Because they have a fever, they said they'd rest today.",
      },
      {
        speaker: "Boss",
        japanese: "そうですか。たいへんですね。りゆうがわかりました。",
        romaji: "Sō desu ka. Taihen desu ne. Riyū ga wakarimashita.",
        english: "I see. That's tough. Now I understand the reason.",
      },
      {
        speaker: "You",
        japanese: "やまださんのしごとはわたしがやりますから、しんぱいしないでください。",
        romaji:
          "Yamada-san no shigoto wa watashi ga yarimasu kara, shinpai shinaide kudasai.",
        english:
          "I'll do Yamada's work, so please don't worry.",
      },
      {
        speaker: "Boss",
        japanese: "ありがとうございます。たすかります。",
        romaji: "Arigatō gozaimasu. Tasukarimasu.",
        english: "Thank you. That's a big help.",
      },
    ],
    practicePrompts: [
      "Give three reasons for studying Japanese using ___から、___",
      "Explain why you were late using ___ので、___",
      "Use だから to connect two sentences: [fact]。だから[conclusion]。",
      "Practice the nuance: say the same reason with から (direct) then ので (softer)",
      "Chain a reason with an opinion: ___から、___とおもいます",
    ],
    languageInsight: {
      title: "Reason Before Conclusion: Japanese Logic Flow",
      content:
        "In English, we often state the conclusion first: 'I'll stay home because I'm sick.' Japanese reverses this: びょうきだから、うちにいます — the reason comes first, then the conclusion. This isn't just grammar; it reflects a cultural communication style where you build context before making a point. In business Japanese, you'll often hear a long preamble of reasons before the actual request or decision. Understanding this 'reason-first' flow will make your Japanese sound natural and help you follow native speakers who seem to take forever to get to the point.",
    },
    tutorNote:
      "から and ので are almost interchangeable, but the nuance matters. から is direct and slightly assertive — great for clear explanations. ので is softer and implies the reason naturally leads to the result — better for polite situations, especially with superiors. When in doubt, use ので — it never sounds rude. Note: before ので, な-adjectives and nouns need な (しずかなので, がくせいなので).",
    quickReference:
      "___から、___。= Because ___ (direct) | ___ので、___。= Because ___ (softer) | Noun/な-adj + なので | い-adj/verb plain form + ので | だから = therefore (sentence opener) | から can follow polite form too: いきますから",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Beginner — Reasons & Explanations",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for から and ので in explanations. Notice how the reason always comes before the conclusion. Try to predict the conclusion after hearing the reason.",
    },
  },

  {
    day: 69,
    dayType: "new-pattern",
    title: "Pattern #41: But ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #41: ___けど and ___が for expressing contrast",
      "Understand the nuance: けど is casual, が is polite/formal",
      "Use でも at the start of a sentence for 'but' / 'however'",
      "Build balanced arguments: acknowledge one side, then present the other",
    ],
    pattern: {
      number: 41,
      japanese: "___けど、___。/ ___が、___。",
      romaji: "___ kedo, ___. / ___ ga, ___.",
      english: "___, but ___.",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "First clause (can be plain or polite form)",
        },
        {
          text: "けど",
          romaji: "kedo",
          role: "particle",
          explanation: "But (casual — variants: けれど, けれども)",
        },
        {
          text: "が",
          romaji: "ga",
          role: "particle",
          explanation: "But (polite/formal — follows polite form)",
        },
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "Contrasting second clause",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "でも",
        romaji: "demo",
        english: "but / however (sentence opener)",
        fitsPattern: [41],
        mnemonic:
          "'Deh-moh' — 'demo' version — but the demo isn't the full thing",
      },
      {
        japanese: "しかし",
        romaji: "shikashi",
        english: "however (formal, written)",
        fitsPattern: [41],
        mnemonic:
          "'Shee-kah-shee' — 'she-cash-she' — however, she spent all her cash",
      },
      {
        japanese: "ざんねん",
        romaji: "zannen",
        english: "unfortunate / too bad (な-adjective)",
        fitsPattern: [41],
        mnemonic:
          "'Zahn-nen' — 'zan-nen' sounds like 'darn it' — too bad!",
      },
      {
        japanese: "むり",
        romaji: "muri",
        english: "impossible / unreasonable (な-adjective)",
        fitsPattern: [41],
        mnemonic:
          "'Moo-ree' — 'moray' eel — it's impossible to pet a moray eel",
      },
      {
        japanese: "かんたん",
        romaji: "kantan",
        english: "easy / simple (な-adjective)",
        fitsPattern: [41],
        mnemonic:
          "'Kahn-tahn' — 'can tan' — it's so easy, anyone can get a tan",
      },
      {
        japanese: "ふくざつ",
        romaji: "fukuzatsu",
        english: "complicated / complex (な-adjective)",
        fitsPattern: [41],
        mnemonic:
          "'Foo-koo-zah-tsoo' — 'fuku-zat-su' — a complicated suit (fuku) with too many zippers",
      },
    ],
    examples: [
      {
        japanese: "にほんごはむずかしいですが、とてもたのしいです。",
        romaji: "Nihongo wa muzukashii desu ga, totemo tanoshii desu.",
        english: "Japanese is difficult, but it's very fun.",
      },
      {
        japanese: "いきたいけど、じかんがない。",
        romaji: "Ikitai kedo, jikan ga nai.",
        english: "I want to go, but I don't have time.",
      },
      {
        japanese: "このレストランはたかいですが、おいしいです。",
        romaji: "Kono resutoran wa takai desu ga, oishii desu.",
        english: "This restaurant is expensive, but it's delicious.",
      },
      {
        japanese: "べんきょうしたけど、テストはむずかしかった。",
        romaji: "Benkyō shita kedo, tesuto wa muzukashikatta.",
        english: "I studied, but the test was difficult.",
      },
      {
        japanese: "ざんねんですが、きょうはむりです。",
        romaji: "Zannen desu ga, kyō wa muri desu.",
        english: "Unfortunately, today is impossible for me.",
      },
      {
        japanese: "ぶんぽうはかんたんだけど、かんじはふくざつだ。",
        romaji: "Bunpō wa kantan da kedo, kanji wa fukuzatsu da.",
        english: "Grammar is simple, but kanji is complicated.",
      },
    ],
    dialogue: [
      {
        speaker: "Suzuki",
        japanese: "こんどのどようび、カラオケにいきませんか？",
        romaji: "Kondo no doyōbi, karaoke ni ikimasen ka?",
        english: "Would you like to go to karaoke this Saturday?",
      },
      {
        speaker: "You",
        japanese: "いきたいですが、どようびはしごとがあります。",
        romaji: "Ikitai desu ga, doyōbi wa shigoto ga arimasu.",
        english: "I'd like to go, but I have work on Saturday.",
      },
      {
        speaker: "Suzuki",
        japanese: "ざんねんですね。にちようびはどうですか？",
        romaji: "Zannen desu ne. Nichiyōbi wa dō desu ka?",
        english: "That's too bad. How about Sunday?",
      },
      {
        speaker: "You",
        japanese: "にちようびはひまですが、ごぜんちゅうはよていがあります。",
        romaji: "Nichiyōbi wa hima desu ga, gozenchū wa yotei ga arimasu.",
        english: "I'm free on Sunday, but I have plans in the morning.",
      },
      {
        speaker: "Suzuki",
        japanese: "じゃあ、にちようびのごごはどうですか？",
        romaji: "Jā, nichiyōbi no gogo wa dō desu ka?",
        english: "Then how about Sunday afternoon?",
      },
      {
        speaker: "You",
        japanese: "ごごならだいじょうぶです！いきましょう！",
        romaji: "Gogo nara daijōbu desu! Ikimashō!",
        english: "Afternoon works! Let's go!",
      },
    ],
    practicePrompts: [
      "Describe three things you like but find challenging: ___けど、___",
      "Politely decline an invitation: いきたいですが、___",
      "Give a balanced review: このえいがは___ですが、___です",
      "Use でも to introduce a contrasting point at the start of a sentence",
      "Compare two things using けど: ___は___けど、___は___",
    ],
    languageInsight: {
      title: "けど as a Sentence Softener",
      content:
        "In addition to meaning 'but,' けど and が are often used to soften a sentence, even without a clear contrast. すみませんが、ちょっときいてもいいですか？ — 'Excuse me, but may I ask something?' The が here doesn't contrast anything; it gently introduces the request. Similarly, Japanese speakers end sentences with けど… (trailing off) to sound less direct: あしたはちょっと… むずかしいんですけど… (Tomorrow is a bit… difficult…). This trailing けど is one of the most useful tools for polite, indirect communication.",
    },
    tutorNote:
      "Students often confuse when to use でも, けど, and が. Simple rule: でも starts a new sentence ('But…'). けど and が connect two clauses within one sentence. が is polite (use with です/ます), けど is casual. In real conversation, けど is far more common. Today, practice building contrast sentences and pay attention to whether you're starting a new sentence (でも) or connecting clauses (けど/が).",
    quickReference:
      "___けど、___。= ___, but ___ (casual) | ___が、___。= ___, but ___ (polite) | でも = But (sentence opener) | しかし = However (formal) | Trailing けど… = softens / leaves unsaid | が after ですます, けど after plain form",
    listeningRec: {
      source: "Terrace House",
      title: "Any episode with group conversations",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Count how many times housemates say けど and でも. Notice how けど often trails off at the end of sentences — the speaker is being deliberately indirect.",
    },
  },

  {
    day: 70,
    dayType: "pattern-combo",
    title: "Reasoning Combos",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Combine opinions (#38), reasons (#40), and contrasts (#41) in multi-clause sentences",
      "Build persuasive arguments: reason + opinion + contrast",
      "Use comparisons (#26) together with reasons and opinions",
      "Hold a natural conversation where you justify your preferences",
    ],
    usesPatterns: [38, 40, 41, 26],
    vocabulary: [
      {
        japanese: "それに",
        romaji: "sore ni",
        english: "moreover / besides",
        mnemonic:
          "'Soh-reh nee' — 'so, really?' — moreover, is that really true?",
      },
      {
        japanese: "つまり",
        romaji: "tsumari",
        english: "in other words / in short",
        mnemonic:
          "'Tsoo-mah-ree' — 'to marry' — in other words, they're getting married",
      },
      {
        japanese: "たとえば",
        romaji: "tatoeba",
        english: "for example",
        mnemonic:
          "'Tah-toh-eh-bah' — 'tattoo, eh, bah!' — for example, that tattoo!",
      },
      {
        japanese: "もちろん",
        romaji: "mochiron",
        english: "of course",
        mnemonic:
          "'Moh-chee-rohn' — 'mochi, Ron!' — of course Ron loves mochi",
      },
      {
        japanese: "ほんとうに",
        romaji: "hontō ni",
        english: "really / truly",
        mnemonic:
          "'Hohn-toh nee' — 'home toe knee' — you really hurt your toe and knee at home",
      },
      {
        japanese: "やはり",
        romaji: "yahari",
        english: "after all / as expected",
        mnemonic:
          "'Yah-hah-ree' — 'yeah, Harry' — as expected, Harry did it again",
      },
    ],
    examples: [
      {
        japanese:
          "にほんごはむずかしいですが、おもしろいとおもいます。たとえば、かんじはふくざつですが、いみがきれいです。",
        romaji:
          "Nihongo wa muzukashii desu ga, omoshiroi to omoimasu. Tatoeba, kanji wa fukuzatsu desu ga, imi ga kirei desu.",
        english:
          "Japanese is difficult, but I think it's interesting. For example, kanji is complex, but the meanings are beautiful. (#38, #41)",
      },
      {
        japanese:
          "でんしゃよりバスのほうがやすいですが、おそいから、でんしゃにのるとおもいます。",
        romaji:
          "Densha yori basu no hō ga yasui desu ga, osoi kara, densha ni noru to omoimasu.",
        english:
          "Buses are cheaper than trains, but because they're slow, I think I'll take the train. (#26, #41, #40, #38)",
      },
      {
        japanese:
          "つかれたから、きょうはうちにいます。でもほんとうはともだちにあいたいとおもいます。",
        romaji:
          "Tsukareta kara, kyō wa uchi ni imasu. Demo hontō wa tomodachi ni aitai to omoimasu.",
        english:
          "Because I'm tired, I'll stay home today. But honestly, I think I want to see my friend. (#40, #41, #38)",
      },
      {
        japanese:
          "このみせはたかいけど、おいしいから、やはりここがいいとおもいます。",
        romaji:
          "Kono mise wa takai kedo, oishii kara, yahari koko ga ii to omoimasu.",
        english:
          "This shop is expensive, but because it's delicious, I think this place is best after all. (#41, #40, #38)",
      },
      {
        japanese:
          "とうきょうよりきょうとのほうがしずかだとおもいます。しずかなので、りょこうにはきょうとがいいとおもいます。",
        romaji:
          "Tōkyō yori Kyōto no hō ga shizuka da to omoimasu. Shizuka na node, ryokō ni wa Kyōto ga ii to omoimasu.",
        english:
          "I think Kyoto is quieter than Tokyo. Because it's quiet, I think Kyoto is better for travel. (#26, #38, #40)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [38, 40, 41],
        japanese:
          "にほんのりょうりはおいしいとおもいます。でもたかいから、まいにちはたべません。",
        romaji:
          "Nihon no ryōri wa oishii to omoimasu. Demo takai kara, mainichi wa tabemasen.",
        english:
          "I think Japanese food is delicious. But because it's expensive, I don't eat it every day.",
      },
      {
        patternsUsed: [26, 38, 41],
        japanese:
          "なつよりふゆのほうがすきだとおもいます。さむいけど、ゆきがきれいですから。",
        romaji:
          "Natsu yori fuyu no hō ga suki da to omoimasu. Samui kedo, yuki ga kirei desu kara.",
        english:
          "I think I like winter more than summer. It's cold, but because the snow is beautiful.",
      },
      {
        patternsUsed: [38, 40, 41, 26],
        japanese:
          "えいごよりにほんごのほうがむずかしいですが、たのしいとおもいます。にほんのぶんかがすきだから、もっとべんきょうしたいです。",
        romaji:
          "Eigo yori nihongo no hō ga muzukashii desu ga, tanoshii to omoimasu. Nihon no bunka ga suki da kara, motto benkyō shitai desu.",
        english:
          "Japanese is harder than English, but I think it's fun. Because I like Japanese culture, I want to study more.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "こんどのやすみ、どこにいきたいですか？",
        romaji: "Kondo no yasumi, doko ni ikitai desu ka?",
        english: "Where do you want to go for the next holiday?",
      },
      {
        speaker: "You",
        japanese:
          "おきなわにいきたいとおもいます。あたたかいから、うみであそべますよ。",
        romaji:
          "Okinawa ni ikitai to omoimasu. Atatakai kara, umi de asobemasu yo.",
        english:
          "I think I want to go to Okinawa. Because it's warm, we can enjoy the ocean.",
      },
      {
        speaker: "Tanaka",
        japanese:
          "おきなわはいいですが、ひこうきだいがたかいとおもいます。",
        romaji:
          "Okinawa wa ii desu ga, hikōkidai ga takai to omoimasu.",
        english:
          "Okinawa is nice, but I think the airfare is expensive.",
      },
      {
        speaker: "You",
        japanese:
          "たしかにたかいけど、ほっかいどうよりおきなわのほうがやすいとおもいますよ。",
        romaji:
          "Tashika ni takai kedo, Hokkaidō yori Okinawa no hō ga yasui to omoimasu yo.",
        english:
          "It's certainly expensive, but I think Okinawa is cheaper than Hokkaido.",
      },
      {
        speaker: "Tanaka",
        japanese: "そうですか？じゃあ、しらべましょう。",
        romaji: "Sō desu ka? Jā, shirabemashō.",
        english: "Really? Then let's look it up.",
      },
    ],
    practicePrompts: [
      "Argue for your favorite food: ___は___けど、___から、___とおもいます",
      "Compare two cities using #26, and explain your preference with #40 and #38",
      "Write a balanced paragraph: good point (#38) → contrast (#41) → reason (#40) → conclusion (#38)",
      "Debate with yourself: ___とおもいます。でも___から、___けど…",
    ],
    languageInsight: {
      title: "Building Arguments in Japanese",
      content:
        "Japanese arguments follow a layered structure: context → reason → opinion. While English speakers might lead with 'I think X because Y,' Japanese speakers typically lay out the reasons first, add contrasts for balance, and arrive at the conclusion last. This 'bottom-up' logic makes Japanese persuasion feel more like building a case than declaring a verdict. Combining Patterns #38, #40, and #41 gives you the tools to reason like a native: ___けど、___から、___とおもいます — 'it's [this], but because [that], I think [conclusion].'",
    },
    tutorNote:
      "Today is about combining three patterns you learned this week. Focus on building multi-clause sentences. A good target: three-clause sentences using at least two different connectors. Don't worry about being perfect — the goal is fluency in connecting ideas. If a sentence gets too long, break it into two sentences connected by でも or だから.",
    quickReference:
      "Combo formula: [contrast]けど/が + [reason]から/ので + [opinion]とおもいます | でも = start new contrasting sentence | だから = start new result sentence | それに = add more info | つまり = summarize",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — My Opinion",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for how the speaker layers reasons (から/ので), contrasts (けど/が), and opinions (とおもいます) together. Notice the reason-before-conclusion flow.",
    },
  },

  {
    day: 71,
    dayType: "new-pattern",
    title: "Pattern #42: If ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #42: ___たら for conditional 'if' and 'when'",
      "Form たら from the past tense (た form + ら)",
      "Use もし to emphasize the hypothetical nature",
      "Express hypothetical situations and their consequences",
    ],
    pattern: {
      number: 42,
      japanese: "(もし) ___たら、___。",
      romaji: "(moshi) ___tara, ___.",
      english: "If ___, ___.",
      breakdown: [
        {
          text: "もし",
          romaji: "moshi",
          role: "fixed",
          explanation: "If (optional emphasis that this is hypothetical)",
        },
        {
          text: "___たら",
          romaji: "___tara",
          role: "slot",
          explanation:
            "Condition — た-form of verb/adjective + ら (e.g., いったら, たかかったら)",
        },
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "Result — what happens if the condition is met",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "もし",
        romaji: "moshi",
        english: "if (hypothetical emphasis)",
        fitsPattern: [42],
        mnemonic:
          "'Moh-shee' — 'mosh' pit — if you enter the mosh pit, be careful",
      },
      {
        japanese: "まにあう",
        romaji: "maniau",
        english: "to be on time / to make it (u-verb)",
        fitsPattern: [42],
        mnemonic:
          "'Mah-nee-ah-oo' — 'many, oh!' — oh, if many show up, we'll make it",
      },
      {
        japanese: "うかる",
        romaji: "ukaru",
        english: "to pass (an exam) (u-verb)",
        fitsPattern: [42],
        mnemonic:
          "'Oo-kah-roo' — 'you car!' — if you pass, you get a car",
      },
      {
        japanese: "おちる",
        romaji: "ochiru",
        english: "to fail (an exam) / to fall (ru-verb)",
        fitsPattern: [42],
        mnemonic:
          "'Oh-chee-roo' — 'oh, cheer up' — if you fail, cheer up and try again",
      },
      {
        japanese: "まよう",
        romaji: "mayou",
        english: "to get lost / to be undecided (u-verb)",
        fitsPattern: [42],
        mnemonic:
          "'Mah-yoh' — 'mayo' — if you get lost in the mayo aisle, ask someone",
      },
      {
        japanese: "たからくじ",
        romaji: "takarakuji",
        english: "lottery",
        fitsPattern: [42],
        mnemonic:
          "'Tah-kah-rah-koo-jee' — 'takara' means treasure — the lottery is a treasure ticket",
      },
    ],
    examples: [
      {
        japanese: "あしたあめがふったら、うちにいます。",
        romaji: "Ashita ame ga futtara, uchi ni imasu.",
        english: "If it rains tomorrow, I'll stay home.",
      },
      {
        japanese: "もしじかんがあったら、えいがをみましょう。",
        romaji: "Moshi jikan ga attara, eiga o mimashō.",
        english: "If we have time, let's watch a movie.",
      },
      {
        japanese: "しけんにうかったら、りょこうにいきます。",
        romaji: "Shiken ni ukattara, ryokō ni ikimasu.",
        english: "If I pass the exam, I'll go on a trip.",
      },
      {
        japanese: "もしたからくじにあたったら、なにをしますか？",
        romaji: "Moshi takarakuji ni atattara, nani o shimasu ka?",
        english: "If you won the lottery, what would you do?",
      },
      {
        japanese: "みちにまよったら、けいたいでしらべます。",
        romaji: "Michi ni mayottara, keitai de shirabemasu.",
        english: "If I get lost, I'll look it up on my phone.",
      },
      {
        japanese: "やすかったら、かいます。",
        romaji: "Yasukattara, kaimasu.",
        english: "If it's cheap, I'll buy it.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "もしにほんにきたら、なにをしたいですか？",
        romaji: "Moshi nihon ni kitara, nani o shitai desu ka?",
        english: "If you came to Japan, what would you want to do?",
      },
      {
        speaker: "You",
        japanese: "にほんにいったら、まずラーメンをたべたいです。",
        romaji: "Nihon ni ittara, mazu rāmen o tabetai desu.",
        english: "If I went to Japan, I'd want to eat ramen first.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね！もしとうきょうにいったら、しぶやにいってください。",
        romaji:
          "Ii desu ne! Moshi Tōkyō ni ittara, Shibuya ni itte kudasai.",
        english: "Nice! If you go to Tokyo, please visit Shibuya.",
      },
      {
        speaker: "You",
        japanese:
          "もしにほんごがじょうずになったら、にほんではたらきたいとおもいます。",
        romaji:
          "Moshi nihongo ga jōzu ni nattara, nihon de hatarakitai to omoimasu.",
        english:
          "If I get good at Japanese, I think I'd want to work in Japan.",
      },
      {
        speaker: "Tanaka",
        japanese: "きっとなれますよ。がんばったら、かならずじょうたつします。",
        romaji:
          "Kitto naremasu yo. Ganbattara, kanarazu jōtatsu shimasu.",
        english:
          "You can surely do it. If you work hard, you'll definitely improve.",
      },
    ],
    practicePrompts: [
      "Describe three 'if' scenarios for your life: もし___たら、___",
      "Ask a friend hypothetical questions: もし___たら、どうしますか？",
      "Chain a conditional with a reason: ___たら、___から、___とおもいます",
      "Use たら with adjectives: もしやすかったら / もしひまだったら",
    ],
    languageInsight: {
      title: "Four Ways to Say 'If' in Japanese",
      content:
        "Japanese has four conditional forms: たら, ば, と, and なら. At this stage, たら is your best all-purpose choice. It works in virtually any 'if' situation — hypothetical or real, future or past. The others have restrictions: と implies a natural/automatic consequence (ボタンをおすと、ドアがあく — press the button and the door opens). ば is more formal and literary. なら works when responding to what someone just said. For now, master たら and you'll handle 95% of conditional situations correctly.",
    },
    tutorNote:
      "Formation is simple: take the た-form and add ら. If you know past tense, you already know たら. いった → いったら, たべた → たべたら, たかかった → たかかったら, しずかだった → しずかだったら. The tricky part is knowing when たら means 'if' (hypothetical) vs 'when' (something you expect to happen). もし signals hypothetical. Without もし, context decides.",
    quickReference:
      "た-form + ら = if/when | Verb: いった → いったら | い-adj: たかかった → たかかったら | な-adj: しずかだった → しずかだったら | Noun: がくせいだった → がくせいだったら | もし = emphasizes 'if' (hypothetical)",
    listeningRec: {
      source: "Terrace House",
      title: "Episodes with future plans discussions",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for たら in hypothetical conversations. Housemates often discuss 'if this happens, then…' scenarios about relationships and career plans.",
    },
  },

  {
    day: 72,
    dayType: "new-pattern",
    title: "Pattern #43: When ___",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #43: ___とき for 'when' situations",
      "Use plain form + とき for verbs and い-adjectives",
      "Use な + とき for な-adjectives and の + とき for nouns",
      "Distinguish present-tense とき (when you do) from past-tense とき (when you did)",
    ],
    pattern: {
      number: 43,
      japanese: "___とき、___。",
      romaji: "___ toki, ___.",
      english: "When ___, ___.",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation:
            "Situation (verb plain form / い-adj / な-adj + な / noun + の + とき)",
        },
        {
          text: "とき",
          romaji: "toki",
          role: "fixed",
          explanation: "When / at the time of",
        },
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "What happens at that time",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "こまる",
        romaji: "komaru",
        english: "to be troubled / to be in difficulty (u-verb)",
        fitsPattern: [43],
        mnemonic:
          "'Koh-mah-roo' — 'comb a roo' — you'd be troubled if you had to comb a kangaroo",
      },
      {
        japanese: "さびしい",
        romaji: "sabishii",
        english: "lonely (い-adjective)",
        fitsPattern: [43],
        mnemonic:
          "'Sah-bee-shee' — 'sob, she' — she sobs when she's lonely",
      },
      {
        japanese: "うれしい",
        romaji: "ureshii",
        english: "happy / glad (い-adjective)",
        fitsPattern: [43],
        mnemonic:
          "'Oo-reh-shee' — 'ooh, ray of she' — a ray of sunshine makes her happy",
      },
      {
        japanese: "ひま",
        romaji: "hima",
        english: "free (not busy) / bored (な-adjective)",
        fitsPattern: [43],
        mnemonic:
          "'Hee-mah' — 'he-ma' — 'he, mama, I'm bored!' when you're free",
      },
      {
        japanese: "きんちょうする",
        romaji: "kinchō suru",
        english: "to be nervous (する verb)",
        fitsPattern: [43],
        mnemonic:
          "'Keen-choh soo-roo' — 'kin chose' — nervous about which kin chose you",
      },
      {
        japanese: "こども",
        romaji: "kodomo",
        english: "child / children",
        fitsPattern: [43],
        mnemonic:
          "'Koh-doh-moh' — 'code-oh-moe' — kids crack secret codes",
      },
    ],
    examples: [
      {
        japanese: "にほんにいくとき、パスポートがいります。",
        romaji: "Nihon ni iku toki, pasupōto ga irimasu.",
        english: "When you go to Japan, you need a passport.",
      },
      {
        japanese: "こどものとき、まいにちサッカーをしました。",
        romaji: "Kodomo no toki, mainichi sakkā o shimashita.",
        english: "When I was a child, I played soccer every day.",
      },
      {
        japanese: "さびしいとき、おんがくをききます。",
        romaji: "Sabishii toki, ongaku o kikimasu.",
        english: "When I'm lonely, I listen to music.",
      },
      {
        japanese: "ひまなとき、なにをしますか？",
        romaji: "Hima na toki, nani o shimasu ka?",
        english: "When you're free, what do you do?",
      },
      {
        japanese: "きんちょうしたとき、ふかくいきをすいます。",
        romaji: "Kinchō shita toki, fukaku iki o suimasu.",
        english: "When I get nervous, I breathe deeply.",
      },
      {
        japanese: "こまったとき、ともだちにそうだんします。",
        romaji: "Komatta toki, tomodachi ni sōdan shimasu.",
        english: "When I'm in trouble, I consult my friend.",
      },
    ],
    dialogue: [
      {
        speaker: "Suzuki",
        japanese: "こどものとき、なにになりたかったですか？",
        romaji: "Kodomo no toki, nani ni naritakatta desu ka?",
        english: "When you were a child, what did you want to become?",
      },
      {
        speaker: "You",
        japanese: "こどものとき、いしゃになりたかったです。",
        romaji: "Kodomo no toki, isha ni naritakatta desu.",
        english: "When I was a child, I wanted to become a doctor.",
      },
      {
        speaker: "Suzuki",
        japanese: "そうですか。いまはどうですか？",
        romaji: "Sō desu ka. Ima wa dō desu ka?",
        english: "I see. How about now?",
      },
      {
        speaker: "You",
        japanese:
          "いまはプログラマーです。しごとがたいへんなとき、こどものゆめをおもいだします。",
        romaji:
          "Ima wa puroguramā desu. Shigoto ga taihen na toki, kodomo no yume o omoidashimasu.",
        english:
          "I'm a programmer now. When work gets tough, I remember my childhood dream.",
      },
      {
        speaker: "Suzuki",
        japanese: "にほんごをべんきょうするとき、たのしいですか？",
        romaji: "Nihongo o benkyō suru toki, tanoshii desu ka?",
        english: "When you study Japanese, is it fun?",
      },
      {
        speaker: "You",
        japanese: "はい！あたらしいことばをおぼえたとき、とてもうれしいです。",
        romaji:
          "Hai! Atarashii kotoba o oboeta toki, totemo ureshii desu.",
        english:
          "Yes! When I learn a new word, I feel very happy.",
      },
    ],
    practicePrompts: [
      "Describe what you do in different emotional states: さびしいとき、___ / うれしいとき、___",
      "Talk about your childhood: こどものとき、___",
      "Ask someone: ___とき、なにをしますか？",
      "Use past-tense とき: にほんにいったとき、___ました",
    ],
    languageInsight: {
      title: "とき: Tense Inside the Time Clause",
      content:
        "An important nuance with とき is that the tense of the verb before とき matters. にほんにいくとき (when going to Japan — before arriving) vs にほんにいったとき (when I went to Japan — after arriving). The plain non-past いくとき describes the moment before the action is completed; the past いったとき describes the moment after. So にほんにいくとき、くうこうでおみやげをかいます means you buy souvenirs at the airport on the way (before arriving), while にほんにいったとき、おてらにいきました means after you arrived in Japan, you visited temples.",
    },
    tutorNote:
      "とき is one of the most useful time-setting expressions. The forms: verb plain + とき, い-adj + とき, な-adj + なとき, noun + のとき. Students often forget the な and の connectors for adjectives and nouns. Drill these: しずかなとき (when it's quiet), がくせいのとき (when I was a student). The tense-inside-とき nuance is advanced — don't worry if it's not intuitive yet. For now, use past tense before とき when talking about completed situations.",
    quickReference:
      "Verb (plain) + とき = when (doing) | Verb (past) + とき = when (did) | い-adj + とき: さびしいとき | な-adj + なとき: ひまなとき | Noun + のとき: こどものとき, がくせいのとき",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — When I was young",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for こどものとき and ___とき constructions. Notice how speakers set the time context first, then describe what happened.",
    },
  },

  {
    day: 73,
    dayType: "new-pattern",
    title: "Pattern #44: Before & After",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #44: ___まえに (before) and ___あとで (after) for sequencing events",
      "Use dictionary form + まえに for 'before doing'",
      "Use た-form + あとで for 'after doing'",
      "Describe daily routines and sequences of actions",
    ],
    pattern: {
      number: 44,
      japanese: "___まえに / ___あとで",
      romaji: "___ mae ni / ___ ato de",
      english: "Before ___ / After ___",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation:
            "Action (dictionary form before まえに; た-form before あとで)",
        },
        {
          text: "まえに",
          romaji: "mae ni",
          role: "fixed",
          explanation: "Before (doing something)",
        },
        {
          text: "あとで",
          romaji: "ato de",
          role: "fixed",
          explanation: "After (doing something)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "じゅんびする",
        romaji: "junbi suru",
        english: "to prepare (する verb)",
        fitsPattern: [44],
        mnemonic:
          "'Joon-bee soo-roo' — 'June bee' — prepare for the June bee invasion",
      },
      {
        japanese: "かたづける",
        romaji: "katazukeru",
        english: "to tidy up / to clean up (ru-verb)",
        fitsPattern: [44],
        mnemonic:
          "'Kah-tah-zoo-keh-roo' — 'cat a zoo, care' — tidy up the zoo after the cat visited",
      },
      {
        japanese: "はをみがく",
        romaji: "ha o migaku",
        english: "to brush teeth (u-verb phrase)",
        fitsPattern: [44],
        mnemonic:
          "'Hah oh mee-gah-koo' — 'ha! oh, me gargle' — brush and gargle",
      },
      {
        japanese: "シャワーをあびる",
        romaji: "shawā o abiru",
        english: "to take a shower (ru-verb phrase)",
        fitsPattern: [44],
        mnemonic:
          "'Shah-wah oh ah-bee-roo' — 'shower a bee' — taking a shower but there's a bee!",
      },
      {
        japanese: "きがえる",
        romaji: "kigaeru",
        english: "to change clothes (ru-verb)",
        fitsPattern: [44],
        mnemonic:
          "'Kee-gah-eh-roo' — 'key-ga-eru' — change clothes before you key the door",
      },
      {
        japanese: "かくにんする",
        romaji: "kakunin suru",
        english: "to confirm / to check (する verb)",
        fitsPattern: [44],
        mnemonic:
          "'Kah-koo-neen soo-roo' — 'cocoon in' — confirm the bug is in its cocoon",
      },
    ],
    examples: [
      {
        japanese: "ねるまえに、はをみがきます。",
        romaji: "Neru mae ni, ha o migakimasu.",
        english: "Before sleeping, I brush my teeth.",
      },
      {
        japanese: "たべたあとで、さんぽします。",
        romaji: "Tabeta ato de, sanpo shimasu.",
        english: "After eating, I take a walk.",
      },
      {
        japanese: "でかけるまえに、てんきをかくにんします。",
        romaji: "Dekakeru mae ni, tenki o kakunin shimasu.",
        english: "Before going out, I check the weather.",
      },
      {
        japanese: "シャワーをあびたあとで、きがえます。",
        romaji: "Shawā o abita ato de, kigaemasu.",
        english: "After taking a shower, I change clothes.",
      },
      {
        japanese: "しごとのまえに、コーヒーをのみます。",
        romaji: "Shigoto no mae ni, kōhī o nomimasu.",
        english: "Before work, I drink coffee.",
      },
      {
        japanese: "かいぎがおわったあとで、レポートをかきます。",
        romaji: "Kaigi ga owatta ato de, repōto o kakimasu.",
        english: "After the meeting ends, I write the report.",
      },
    ],
    dialogue: [
      {
        speaker: "Suzuki",
        japanese: "まいあさ、なにをしますか？",
        romaji: "Maiasa, nani o shimasu ka?",
        english: "What do you do every morning?",
      },
      {
        speaker: "You",
        japanese:
          "おきたあとで、まずシャワーをあびます。そのあとで、あさごはんをたべます。",
        romaji:
          "Okita ato de, mazu shawā o abimasu. Sono ato de, asagohan o tabemasu.",
        english:
          "After waking up, I first take a shower. After that, I eat breakfast.",
      },
      {
        speaker: "Suzuki",
        japanese: "あさごはんのまえに、コーヒーはのみませんか？",
        romaji: "Asagohan no mae ni, kōhī wa nomimasen ka?",
        english: "Don't you drink coffee before breakfast?",
      },
      {
        speaker: "You",
        japanese:
          "のみます！あさごはんをたべるまえに、コーヒーをいっぱいのみます。",
        romaji:
          "Nomimasu! Asagohan o taberu mae ni, kōhī o ippai nomimasu.",
        english:
          "I do! Before eating breakfast, I drink one cup of coffee.",
      },
      {
        speaker: "Suzuki",
        japanese: "でかけるまえに、じゅんびにどのくらいかかりますか？",
        romaji: "Dekakeru mae ni, junbi ni dono kurai kakarimasu ka?",
        english: "Before leaving, how long does preparation take?",
      },
      {
        speaker: "You",
        japanese: "だいたいいちじかんです。シャワーをあびたあとで、きがえて、でかけます。",
        romaji:
          "Daitai ichijikan desu. Shawā o abita ato de, kigaete, dekakemasu.",
        english:
          "About one hour. After taking a shower, I change clothes and head out.",
      },
    ],
    practicePrompts: [
      "Describe your morning routine using まえに and あとで",
      "Describe what you do before and after work/school",
      "Give advice: ___まえに、___たほうがいいです (preview of Pattern #48)",
      "Chain three actions in order using あとで: ___たあとで、___たあとで、___",
    ],
    languageInsight: {
      title: "まえに vs あとで: The Asymmetry",
      content:
        "Notice an asymmetry: まえに uses the dictionary form (ねるまえに — before sleeping), while あとで uses the た-form (ねたあとで — after sleeping). This makes linguistic sense: まえに describes something that hasn't happened yet (so non-past form), while あとで describes something already completed (so past form). You can also use nouns directly: しごとのまえに (before work), しごとのあとで (after work). The の connects nouns to まえ and あと just as it always does.",
    },
    tutorNote:
      "This pattern is extremely practical for daily routines, instructions, and planning. Students sometimes mix up the verb forms — remember: dictionary form + まえに, た-form + あとで. A helpful trick: 'before' = the action hasn't happened (dictionary form), 'after' = it already happened (past form). Practice by narrating your entire day using まえに and あとで.",
    quickReference:
      "Dict. form + まえに = before doing | た-form + あとで = after doing | Noun + のまえに / のあとで | ねるまえに = before sleeping | ねたあとで = after sleeping | そのまえに = before that | そのあとで = after that",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Beginner — My Daily Routine",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for まえに and あとで as the speaker describes their daily routine. Notice the dictionary form before まえに and the た-form before あとで.",
    },
  },

  {
    day: 74,
    dayType: "new-pattern",
    title: "Patterns #45-46: Too Much & Difficulty",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #45: ___すぎる (too much / excessively)",
      "Master Pattern #46: ___やすい (easy to) and ___にくい (hard to)",
      "Form all three from the ます-stem of verbs (drop ます, add すぎる/やすい/にくい)",
      "Use すぎる with adjective stems: い-adj drop い, な-adj use stem directly",
    ],
    pattern: {
      number: 45,
      japanese: "___すぎる",
      romaji: "___ sugiru",
      english: "Too much ___ / Excessively ___",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation:
            "Verb ます-stem, い-adj stem (drop い), or な-adj stem",
        },
        {
          text: "すぎる",
          romaji: "sugiru",
          role: "verb",
          explanation:
            "To exceed / too much (ru-verb — conjugates: すぎます, すぎた, etc.)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "たべすぎる",
        romaji: "tabesugiru",
        english: "to eat too much",
        fitsPattern: [45],
        mnemonic:
          "'Tah-beh-soo-gee-roo' — table sugar — too much sugar from eating too much at the table",
      },
      {
        japanese: "のみすぎる",
        romaji: "nomisugiru",
        english: "to drink too much",
        fitsPattern: [45],
        mnemonic:
          "'Noh-mee-soo-gee-roo' — gnome sugar — the gnome drank too much sugary juice",
      },
      {
        japanese: "はたらきすぎる",
        romaji: "hatarakisugiru",
        english: "to overwork",
        fitsPattern: [45],
        mnemonic:
          "'Hah-tah-rah-kee-soo-gee-roo' — working past the sugar rush — overworking",
      },
      {
        japanese: "よみやすい",
        romaji: "yomiyasui",
        english: "easy to read",
        fitsPattern: [46],
        mnemonic:
          "'Yoh-mee-yah-soo-ee' — 'yummy, yes we!' — this book is yummy and easy to read",
      },
      {
        japanese: "わかりやすい",
        romaji: "wakariyasui",
        english: "easy to understand",
        fitsPattern: [46],
        mnemonic:
          "'Wah-kah-ree-yah-soo-ee' — 'walk a real easy' path — easy to understand",
      },
      {
        japanese: "おぼえにくい",
        romaji: "oboenikui",
        english: "hard to memorize",
        fitsPattern: [46],
        mnemonic:
          "'Oh-boh-eh-nee-koo-ee' — 'oh boy, not cool' — it's hard to memorize and not cool",
      },
    ],
    examples: [
      {
        japanese: "ゆうべたべすぎました。おなかがいたいです。",
        romaji: "Yūbe tabesugimashita. Onaka ga itai desu.",
        english: "I ate too much last night. My stomach hurts.",
      },
      {
        japanese: "このかばんはおもすぎます。",
        romaji: "Kono kaban wa omosugimasu.",
        english: "This bag is too heavy.",
      },
      {
        japanese: "にほんごのぶんぽうはわかりやすいとおもいます。",
        romaji: "Nihongo no bunpō wa wakariyasui to omoimasu.",
        english: "I think Japanese grammar is easy to understand.",
      },
      {
        japanese: "このかんじはおぼえにくいです。",
        romaji: "Kono kanji wa oboenikui desu.",
        english: "This kanji is hard to memorize.",
      },
      {
        japanese: "にほんではたらきすぎるひとがおおいとおもいます。",
        romaji:
          "Nihon de hatarakisugiru hito ga ōi to omoimasu.",
        english:
          "I think there are many people who overwork in Japan.",
      },
      {
        japanese: "このほんはよみやすいから、おすすめです。",
        romaji: "Kono hon wa yomiyasui kara, osusume desu.",
        english: "This book is easy to read, so I recommend it.",
      },
      {
        japanese: "しずかすぎて、ちょっとさびしいです。",
        romaji: "Shizuka sugite, chotto sabishii desu.",
        english: "It's too quiet, so it's a little lonely.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "ゆうべのパーティーはどうでしたか？",
        romaji: "Yūbe no pātī wa dō deshita ka?",
        english: "How was last night's party?",
      },
      {
        speaker: "You",
        japanese: "たのしかったですが、たべすぎました…",
        romaji: "Tanoshikatta desu ga, tabesugimashita…",
        english: "It was fun, but I ate too much…",
      },
      {
        speaker: "Tanaka",
        japanese: "わたしものみすぎました。きょうはあたまがいたいです。",
        romaji:
          "Watashi mo nomisugimashita. Kyō wa atama ga itai desu.",
        english: "I drank too much too. I have a headache today.",
      },
      {
        speaker: "You",
        japanese:
          "このにほんごのきょうかしょはよみやすいですね。おすすめです。",
        romaji:
          "Kono nihongo no kyōkasho wa yomiyasui desu ne. Osusume desu.",
        english:
          "This Japanese textbook is easy to read, isn't it? I recommend it.",
      },
      {
        speaker: "Tanaka",
        japanese: "でもかんじがおぼえにくいとおもいませんか？",
        romaji: "Demo kanji ga oboenikui to omoimasen ka?",
        english: "But don't you think kanji is hard to memorize?",
      },
      {
        speaker: "You",
        japanese:
          "たしかに。でもこのほんのせつめいはわかりやすいから、だいじょうぶだとおもいます。",
        romaji:
          "Tashika ni. Demo kono hon no setsumei wa wakariyasui kara, daijōbu da to omoimasu.",
        english:
          "Indeed. But because this book's explanations are easy to understand, I think it'll be fine.",
      },
    ],
    practicePrompts: [
      "Describe three things you do too much: ___すぎます",
      "Describe something too expensive/big/small: ___すぎます with adjectives",
      "List three things that are easy and hard to do: ___やすい / ___にくい",
      "Combine with opinions: ___はやすい/にくいとおもいます",
      "Describe a product: このアプリはつかいやすいけど、おぼえにくいです",
    ],
    languageInsight: {
      title: "The ます-stem: A Hidden Powerhouse",
      content:
        "The ます-stem (the part before ます: たべ, のみ, はたらき) is more than just a conjugation step. It's a connecting form that attaches to dozens of suffixes: すぎる (too much), やすい (easy to), にくい (hard to), はじめる (start doing), おわる (finish doing), たい (want to), and more. Think of it as a Lego base — snap different pieces onto it to create new meanings. Once you're comfortable extracting the ます-stem from any verb, you unlock a huge range of expressions.",
    },
    tutorNote:
      "Two patterns today, but they share the same formation: ます-stem + suffix. For すぎる: たべます → たべ + すぎる = たべすぎる. For やすい/にくい: よみます → よみ + やすい = よみやすい. With adjectives, すぎる works differently: drop い from い-adjectives (たかい → たかすぎる), use the stem for な-adjectives (しずか → しずかすぎる). やすい and にくい only attach to verbs, not adjectives. These three suffixes become い-adjectives themselves: たべすぎた (ate too much), よみやすいほん (easy-to-read book).",
    quickReference:
      "#45 すぎる: ます-stem + すぎる = too much | い-adj: drop い + すぎる (たかすぎる) | な-adj: stem + すぎる (しずかすぎる) | #46 やすい/にくい: ます-stem + やすい/にくい | よみやすい = easy to read | おぼえにくい = hard to memorize | All become い-adjectives",
    listeningRec: {
      source: "Terrace House",
      title: "Any cooking or daily life scenes",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for すぎ (too much) in casual speech — たべすぎ, のみすぎ, やりすぎ. Also listen for やすい and にくい describing tasks or experiences.",
    },
  },

  {
    day: 75,
    dayType: "new-pattern",
    title: "Patterns #47-48: Let's & Should",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #47: ___ましょう / ___よう for 'let's' (polite and casual volitional)",
      "Master Pattern #48: ___たほうがいい for 'you should'",
      "Form ましょう by replacing ます with ましょう",
      "Form たほうがいい with the た-form + ほうがいい",
    ],
    pattern: {
      number: 47,
      japanese: "___ましょう / ___よう",
      romaji: "___ mashō / ___ yō",
      english: "Let's ___",
      breakdown: [
        {
          text: "___",
          romaji: "___",
          role: "slot",
          explanation: "Verb stem (same as before ます)",
        },
        {
          text: "ましょう",
          romaji: "mashō",
          role: "verb",
          explanation: "Let's (polite volitional) — replaces ます",
        },
        {
          text: "よう",
          romaji: "yō",
          role: "verb",
          explanation:
            "Let's (casual volitional) — ru-verbs: drop る + よう; u-verbs: change to おう-column",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "いっしょに",
        romaji: "issho ni",
        english: "together",
        fitsPattern: [47],
        mnemonic:
          "'Is-shoh nee' — 'issue, knee' — let's tackle this issue together, knee-deep",
      },
      {
        japanese: "さんせいする",
        romaji: "sansei suru",
        english: "to agree (する verb)",
        fitsPattern: [47],
        mnemonic:
          "'Sahn-say soo-roo' — 'sane say' — a sane person says 'I agree'",
      },
      {
        japanese: "はんたいする",
        romaji: "hantai suru",
        english: "to oppose / to disagree (する verb)",
        fitsPattern: [47],
        mnemonic:
          "'Hahn-tie soo-roo' — 'hand tie' — oppose by tying your hands in protest",
      },
      {
        japanese: "アドバイス",
        romaji: "adobaisu",
        english: "advice",
        fitsPattern: [48],
        mnemonic: "Sounds like English 'advice' — アドバイス",
      },
      {
        japanese: "けんこう",
        romaji: "kenkō",
        english: "health (な-adjective as けんこうな)",
        fitsPattern: [48],
        mnemonic:
          "'Ken-koh' — 'Ken, go!' — Ken goes jogging for his health",
      },
      {
        japanese: "むだ",
        romaji: "muda",
        english: "wasteful / useless (な-adjective)",
        fitsPattern: [48],
        mnemonic:
          "'Moo-dah' — 'mood, ah!' — what a wasteful mood, doing nothing",
      },
    ],
    examples: [
      {
        japanese: "いっしょにひるごはんをたべましょう。",
        romaji: "Issho ni hirugohan o tabemashō.",
        english: "Let's eat lunch together.",
      },
      {
        japanese: "あしたはやくおきましょう。",
        romaji: "Ashita hayaku okimashō.",
        english: "Let's wake up early tomorrow.",
      },
      {
        japanese: "つかれたから、すこしやすもう。",
        romaji: "Tsukareta kara, sukoshi yasumō.",
        english: "I'm tired, so let's rest a bit. (casual)",
      },
      {
        japanese: "もっとやさいをたべたほうがいいです。",
        romaji: "Motto yasai o tabeta hō ga ii desu.",
        english: "You should eat more vegetables.",
      },
      {
        japanese: "はやくねたほうがいいですよ。",
        romaji: "Hayaku neta hō ga ii desu yo.",
        english: "You should go to bed early.",
      },
      {
        japanese: "おさけをのみすぎないほうがいいです。",
        romaji: "Osake o nomisuginai hō ga ii desu.",
        english: "You shouldn't drink too much alcohol.",
      },
      {
        japanese: "びょういんにいったほうがいいとおもいます。",
        romaji: "Byōin ni itta hō ga ii to omoimasu.",
        english: "I think you should go to the hospital.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "さいきんつかれています。なにかアドバイスはありますか？",
        romaji: "Saikin tsukarete imasu. Nanika adobaisu wa arimasu ka?",
        english: "I've been tired lately. Do you have any advice?",
      },
      {
        speaker: "Tanaka",
        japanese: "はたらきすぎないほうがいいですよ。もっとやすんだほうがいいです。",
        romaji:
          "Hatarakisuginai hō ga ii desu yo. Motto yasunda hō ga ii desu.",
        english:
          "You shouldn't overwork. You should rest more.",
      },
      {
        speaker: "You",
        japanese: "そうですね。でもしごとがいそがしいから…",
        romaji: "Sō desu ne. Demo shigoto ga isogashii kara…",
        english: "That's true. But because work is busy…",
      },
      {
        speaker: "Tanaka",
        japanese:
          "けんこうがいちばんたいせつですよ。いっしょにうんどうしましょう！",
        romaji:
          "Kenkō ga ichiban taisetsu desu yo. Issho ni undō shimashō!",
        english:
          "Health is the most important thing. Let's exercise together!",
      },
      {
        speaker: "You",
        japanese: "いいですね！さんせいします。いつにしましょうか？",
        romaji: "Ii desu ne! Sansei shimasu. Itsu ni shimashō ka?",
        english: "That sounds good! I agree. When shall we do it?",
      },
      {
        speaker: "Tanaka",
        japanese: "まいしゅうどようびはどうですか？あさはやくおきましょう！",
        romaji:
          "Maishū doyōbi wa dō desu ka? Asa hayaku okimashō!",
        english:
          "How about every Saturday? Let's wake up early in the morning!",
      },
    ],
    practicePrompts: [
      "Suggest three activities to a friend: いっしょに___ましょう",
      "Give health advice: ___たほうがいいです / ___ないほうがいいです",
      "Combine patterns: ___すぎるから、___たほうがいいです (too much → should)",
      "Make weekend plans: ___ましょうか？ いいですね、そうしましょう！",
    ],
    languageInsight: {
      title: "Volitional Form: An Ancient Invitation",
      content:
        "The ましょう ending descends from the classical Japanese volitional form (意志形, ishikei), which expressed the speaker's will or intention. Over centuries, it evolved into an inclusive invitation — 'let's do this together.' The casual volitional forms follow interesting patterns: ru-verbs drop る and add よう (たべよう), u-verbs shift to the お-column and add う (いこう, のもう, かこう). This お-column shift echoes ancient Japanese sound changes. The volitional is also used for internal monologue: そろそろいこう (I should get going) — talking to yourself about what you intend to do.",
    },
    tutorNote:
      "Two useful patterns today. ましょう is straightforward: swap ます for ましょう. たほうがいい is advice: た-form + ほうがいい (should), ない-form + ほうがいい (shouldn't). Common mistake: using dictionary form instead of た-form. It's いったほうがいい (should go), not いくほうがいい. For negative advice, use ない-form: いかないほうがいい (shouldn't go). Practice giving advice about health, study habits, and daily life.",
    quickReference:
      "#47 ましょう: ます → ましょう (let's, polite) | Casual: たべよう, いこう, しよう | #48 たほうがいい: た-form + ほうがいい = should | ないほうがいい = shouldn't | いったほうがいい = should go | いかないほうがいい = shouldn't go",
    listeningRec: {
      source: "Terrace House",
      title: "Episodes with group planning",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for ～ましょう and casual ～よう when housemates make plans together. Also listen for ～ほうがいい when they give each other advice about relationships.",
    },
  },

  {
    day: 76,
    dayType: "vocab-expansion",
    title: "Abstract Vocabulary",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Learn 8 abstract nouns essential for expressing complex ideas",
      "Use abstract vocabulary with Patterns #38, #40, #41, and #42",
      "Move beyond concrete descriptions to discuss concepts, feelings, and goals",
      "Build sentences about problems, experiences, dreams, and relationships",
    ],
    usesPatterns: [38, 40, 41, 42],
    vocabulary: [
      {
        japanese: "もんだい",
        romaji: "mondai",
        english: "problem / question",
        fitsPattern: [38, 40],
        mnemonic:
          "'Mohn-die' — 'Monday' — Monday is always the biggest problem",
      },
      {
        japanese: "けいけん",
        romaji: "keiken",
        english: "experience",
        fitsPattern: [38, 43],
        mnemonic:
          "'Kay-ken' — 'cake Ken' — Ken's cake-baking experience is legendary",
      },
      {
        japanese: "ゆめ",
        romaji: "yume",
        english: "dream",
        fitsPattern: [38, 42],
        mnemonic:
          "'Yoo-meh' — 'you, me' — you and me share the same dream",
      },
      {
        japanese: "きかい",
        romaji: "kikai",
        english: "opportunity / chance",
        fitsPattern: [40, 42],
        mnemonic:
          "'Kee-kai' — 'key, guy!' — the key opportunity, guy, don't miss it!",
      },
      {
        japanese: "もくひょう",
        romaji: "mokuhyō",
        english: "goal / objective",
        fitsPattern: [38, 40],
        mnemonic:
          "'Moh-koo-hyoh' — 'moku-hyo' — 'mock your' past self and set higher goals",
      },
      {
        japanese: "きもち",
        romaji: "kimochi",
        english: "feeling / mood",
        fitsPattern: [38, 43],
        mnemonic:
          "'Kee-moh-chee' — 'key mocha' — a key mocha gives you a good feeling",
      },
      {
        japanese: "かんけい",
        romaji: "kankei",
        english: "relationship / connection",
        fitsPattern: [38, 41],
        mnemonic:
          "'Kahn-kay' — 'can K' — can K maintain the relationship?",
      },
      {
        japanese: "えいきょう",
        romaji: "eikyō",
        english: "influence / effect",
        fitsPattern: [38, 40],
        mnemonic:
          "'Ay-kyoh' — 'A, Kyoto!' — Kyoto has a big influence on Japanese culture",
      },
    ],
    examples: [
      {
        japanese: "これはおおきいもんだいだとおもいます。",
        romaji: "Kore wa ōkii mondai da to omoimasu.",
        english: "I think this is a big problem.",
      },
      {
        japanese: "にほんにすむけいけんはとてもいいとおもいます。",
        romaji:
          "Nihon ni sumu keiken wa totemo ii to omoimasu.",
        english:
          "I think the experience of living in Japan is very good.",
      },
      {
        japanese: "わたしのゆめはにほんではたらくことです。",
        romaji: "Watashi no yume wa nihon de hataraku koto desu.",
        english: "My dream is to work in Japan.",
      },
      {
        japanese: "きかいがあったら、にほんにりょこうしたいです。",
        romaji: "Kikai ga attara, nihon ni ryokō shitai desu.",
        english: "If I have the chance, I'd like to travel to Japan.",
      },
      {
        japanese: "もくひょうがあるから、まいにちがんばれます。",
        romaji: "Mokuhyō ga aru kara, mainichi ganbaremasu.",
        english: "Because I have a goal, I can work hard every day.",
      },
      {
        japanese: "かのじょのきもちがわからないけど、だいじょうぶだとおもいます。",
        romaji:
          "Kanojo no kimochi ga wakaranai kedo, daijōbu da to omoimasu.",
        english:
          "I don't understand her feelings, but I think it's okay.",
      },
      {
        japanese: "ことばとぶんかはふかいかんけいがあります。",
        romaji: "Kotoba to bunka wa fukai kankei ga arimasu.",
        english: "Language and culture have a deep connection.",
      },
      {
        japanese: "おんがくはひとのきもちにおおきいえいきょうをあたえます。",
        romaji:
          "Ongaku wa hito no kimochi ni ōkii eikyō o ataemasu.",
        english: "Music has a big influence on people's feelings.",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "にほんごのもくひょうはなんですか？",
        romaji: "Nihongo no mokuhyō wa nan desu ka?",
        english: "What is your goal for Japanese?",
      },
      {
        speaker: "You",
        japanese:
          "にほんごでしごとができるようになりたいです。それがわたしのゆめです。",
        romaji:
          "Nihongo de shigoto ga dekiru yō ni naritai desu. Sore ga watashi no yume desu.",
        english:
          "I want to become able to work in Japanese. That's my dream.",
      },
      {
        speaker: "Sensei",
        japanese: "すばらしいゆめですね。いまのもんだいはなんですか？",
        romaji: "Subarashii yume desu ne. Ima no mondai wa nan desu ka?",
        english: "That's a wonderful dream. What's your current problem?",
      },
      {
        speaker: "You",
        japanese: "かんじがむずかしいから、よむのがたいへんです。でもがんばります。",
        romaji:
          "Kanji ga muzukashii kara, yomu no ga taihen desu. Demo ganbarimasu.",
        english:
          "Because kanji is difficult, reading is tough. But I'll do my best.",
      },
      {
        speaker: "Sensei",
        japanese:
          "もくひょうがあるから、きっとできますよ。けいけんがいちばんたいせつです。",
        romaji:
          "Mokuhyō ga aru kara, kitto dekimasu yo. Keiken ga ichiban taisetsu desu.",
        english:
          "Because you have a goal, you can surely do it. Experience is the most important thing.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。まいにちのべんきょうがにほんごにえいきょうすると おもいます。",
        romaji:
          "Arigatō gozaimasu. Mainichi no benkyō ga nihongo ni eikyō suru to omoimasu.",
        english:
          "Thank you. I think daily studying has an influence on my Japanese.",
      },
    ],
    practicePrompts: [
      "Describe your dream and the problems you face: ゆめは___です。もんだいは___です。",
      "Talk about an important experience: ___けいけんは___とおもいます",
      "Set a goal and explain why: もくひょうは___です。___から、___",
      "Discuss feelings and relationships: ___のきもちは___とおもいます",
      "Use たら with abstract words: もしきかいがあったら、___",
    ],
    languageInsight: {
      title: "From Concrete to Abstract: A Language Milestone",
      content:
        "Moving from concrete vocabulary (food, places, actions) to abstract vocabulary (problems, dreams, feelings) marks a major milestone in language learning. Abstract words let you discuss ideas, not just objects. Notice that many abstract Japanese nouns are compounds of kanji: 問題 (もんだい, question-topic = problem), 経験 (けいけん, pass-through + test = experience), 目標 (もくひょう, eye + mark = goal), 関係 (かんけい, gate + connect = relationship). Understanding the kanji logic helps you guess the meaning of new abstract words you encounter.",
    },
    tutorNote:
      "Today is about expanding what you can talk about, not learning new grammar. Use the patterns from this week (#38, #40, #41, #42) with these abstract nouns. The jump from 'I like sushi' to 'I think the experience of living abroad changes your perspective' is enormous — and these eight words get you there. Practice making sentences that combine abstract nouns with opinion/reason/contrast patterns.",
    quickReference:
      "もんだい = problem | けいけん = experience | ゆめ = dream | きかい = opportunity | もくひょう = goal | きもち = feeling | かんけい = relationship | えいきょう = influence | Use with: ___とおもいます, ___から, ___けど, ___たら",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — Dreams & Goals",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for abstract nouns like ゆめ, もくひょう, けいけん in context. Notice how the speaker uses them with opinion and reason patterns.",
    },
  },

  {
    day: 77,
    dayType: "pattern-combo",
    title: "Advice & Reasoning",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Combine opinions (#38), reasons (#40), contrasts (#41), conditions (#42), suggestions (#47), and advice (#48)",
      "Give well-reasoned advice: because ___, I think you should ___",
      "Handle complex dialogues with layered reasoning",
      "Practice the full Phase 6 toolkit in realistic scenarios",
    ],
    usesPatterns: [38, 40, 41, 42, 47, 48],
    vocabulary: [
      {
        japanese: "しんぱいする",
        romaji: "shinpai suru",
        english: "to worry (する verb)",
        mnemonic:
          "'Sheen-pie soo-roo' — 'shin pie' — don't worry about the pie on your shin",
      },
      {
        japanese: "あんしんする",
        romaji: "anshin suru",
        english: "to feel relieved (する verb)",
        mnemonic:
          "'Ahn-sheen soo-roo' — 'on-shin' — feel relieved when everything's on-shin (on track)",
      },
      {
        japanese: "せいこうする",
        romaji: "seikō suru",
        english: "to succeed (する verb)",
        mnemonic:
          "'Say-koh soo-roo' — 'say go!' — say 'go!' and you'll succeed",
      },
      {
        japanese: "しっぱいする",
        romaji: "shippai suru",
        english: "to fail (する verb)",
        mnemonic:
          "'Ship-pie soo-roo' — 'ship pie' — the pie failed to ship on time",
      },
      {
        japanese: "けっしんする",
        romaji: "kesshin suru",
        english: "to make up one's mind / to resolve (する verb)",
        mnemonic:
          "'Kesh-sheen soo-roo' — 'cash in' — resolve to cash in your chips and commit",
      },
      {
        japanese: "あきらめる",
        romaji: "akirameru",
        english: "to give up (ru-verb)",
        mnemonic:
          "'Ah-kee-rah-meh-roo' — 'a key ram error' — don't give up despite the key error",
      },
    ],
    examples: [
      {
        japanese:
          "しんぱいだから、びょういんにいったほうがいいとおもいます。",
        romaji:
          "Shinpai da kara, byōin ni itta hō ga ii to omoimasu.",
        english:
          "Because I'm worried, I think you should go to the hospital.",
      },
      {
        japanese:
          "しっぱいしてもあきらめないほうがいいです。つぎのきかいがありますから。",
        romaji:
          "Shippai shite mo akiramenai hō ga ii desu. Tsugi no kikai ga arimasu kara.",
        english:
          "Even if you fail, you shouldn't give up. Because there will be a next chance.",
      },
      {
        japanese:
          "もしせいこうしたら、いっしょにおいわいしましょう。",
        romaji:
          "Moshi seikō shitara, issho ni oiwai shimashō.",
        english: "If you succeed, let's celebrate together.",
      },
      {
        japanese:
          "もんだいがあるけど、みんなでかんがえたら、かいけつできるとおもいます。",
        romaji:
          "Mondai ga aru kedo, minna de kangaetara, kaiketsu dekiru to omoimasu.",
        english:
          "There's a problem, but if we all think about it, I think we can solve it.",
      },
      {
        japanese:
          "けっしんしたから、もうしんぱいしていません。あんしんしてください。",
        romaji:
          "Kesshin shita kara, mō shinpai shite imasen. Anshin shite kudasai.",
        english:
          "Because I've made up my mind, I'm not worried anymore. Please be at ease.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [40, 48, 38],
        japanese:
          "つかれているから、はやくねたほうがいいとおもいます。あしたもしごとがありますから。",
        romaji:
          "Tsukarete iru kara, hayaku neta hō ga ii to omoimasu. Ashita mo shigoto ga arimasu kara.",
        english:
          "Because you're tired, I think you should go to bed early. Because you have work tomorrow too.",
      },
      {
        patternsUsed: [42, 47, 41],
        japanese:
          "もしあしたはれたら、いっしょにハイキングにいきましょう。あめだったら、えいがをみましょう。",
        romaji:
          "Moshi ashita haretara, issho ni haikingu ni ikimashō. Ame dattara, eiga o mimashō.",
        english:
          "If it's sunny tomorrow, let's go hiking together. If it rains, let's watch a movie.",
      },
      {
        patternsUsed: [38, 40, 41, 48],
        japanese:
          "にほんごはむずかしいですが、まいにちべんきょうしたほうがいいとおもいます。すこしずつでもやるから、きっとじょうずになります。",
        romaji:
          "Nihongo wa muzukashii desu ga, mainichi benkyō shita hō ga ii to omoimasu. Sukoshi zutsu demo yaru kara, kitto jōzu ni narimasu.",
        english:
          "Japanese is difficult, but I think you should study every day. Because even if you do a little at a time, you'll surely improve.",
      },
      {
        patternsUsed: [42, 38, 40, 47],
        japanese:
          "もしにほんにいけたら、いいけいけんになるとおもいます。ことばがわからなくてもだいじょうぶだから、いっしょにいきましょう。",
        romaji:
          "Moshi nihon ni iketara, ii keiken ni naru to omoimasu. Kotoba ga wakaranakute mo daijōbu da kara, issho ni ikimashō.",
        english:
          "If we could go to Japan, I think it would be a great experience. Because it's okay even if you don't understand the language, let's go together.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "しごとをやめたいとおもっています。",
        romaji: "Shigoto o yametai to omotte imasu.",
        english: "I'm thinking I want to quit my job.",
      },
      {
        speaker: "Tanaka",
        japanese: "どうしてですか？なにかもんだいがありますか？",
        romaji: "Dōshite desu ka? Nanika mondai ga arimasu ka?",
        english: "Why? Is there some problem?",
      },
      {
        speaker: "You",
        japanese: "はたらきすぎるから、つかれています。でもゆめがあるから、あたらしいしごとをさがしたいです。",
        romaji:
          "Hatarakisugiru kara, tsukarete imasu. Demo yume ga aru kara, atarashii shigoto o sagashitai desu.",
        english:
          "Because I'm overworking, I'm tired. But because I have a dream, I want to look for a new job.",
      },
      {
        speaker: "Tanaka",
        japanese:
          "そうですか。でもすぐにやめないほうがいいとおもいます。まず、あたらしいしごとをさがしてから、やめたほうがいいです。",
        romaji:
          "Sō desu ka. Demo sugu ni yamenai hō ga ii to omoimasu. Mazu, atarashii shigoto o sagashite kara, yameta hō ga ii desu.",
        english:
          "I see. But I think you shouldn't quit immediately. First, you should look for a new job, then quit.",
      },
      {
        speaker: "You",
        japanese: "たしかに。もしいいしごとがみつかったら、すぐにかわりたいです。",
        romaji:
          "Tashika ni. Moshi ii shigoto ga mitsukattara, sugu ni kawaritai desu.",
        english:
          "That's true. If I find a good job, I want to switch right away.",
      },
      {
        speaker: "Tanaka",
        japanese: "きっとみつかりますよ。あきらめないでください。おうえんしています。",
        romaji:
          "Kitto mitsukarimasu yo. Akiramenaide kudasai. Ōen shite imasu.",
        english:
          "You'll surely find one. Please don't give up. I'm cheering for you.",
      },
    ],
    practicePrompts: [
      "Give advice to a tired friend: ___から、___たほうがいいとおもいます",
      "Propose a plan with conditions: もし___たら、___ましょう",
      "Discuss a life decision: ___けど、___から、___たほうがいいとおもいます",
      "Encourage someone: しっぱいしても___ないほうがいいです。___から。",
    ],
    languageInsight: {
      title: "The Art of Indirect Advice in Japanese",
      content:
        "Japanese speakers rarely give blunt commands. Instead of 'Go to the doctor,' they layer softness: しんぱいだから (because I'm worried) + びょういんにいったほうがいい (it's better to go to the hospital) + とおもいます (I think). Three layers of indirection! The reason (から) shows you care, ほうがいい frames it as a suggestion rather than an order, and とおもいます makes it your personal opinion rather than a universal truth. This layered approach is considered polite and caring in Japanese culture.",
    },
    tutorNote:
      "Today combines six patterns into natural conversations about real-life decisions. Focus on the flow: set up the context (situation + reason), then give your opinion or suggestion. A great formula: [context]けど、[reason]から、[advice]たほうがいいとおもいます。If students struggle with combining, start with two-pattern combos and build up.",
    quickReference:
      "Advice formula: ___から、___たほうがいいとおもいます | Conditional plans: もし___たら、___ましょう | Encouragement: あきらめないほうがいいです。___から。 | Full combo: [situation]けど + [reason]から + [advice]たほうがいい + とおもいます",
    listeningRec: {
      source: "Terrace House",
      title: "Episodes with relationship advice",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Listen for how housemates give each other advice using ほうがいい and とおもう. Notice the indirect, layered structure — they almost never give direct commands.",
    },
  },

  {
    day: 78,
    dayType: "new-pattern",
    title: "Pattern #49: Conversational Glue",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Master Pattern #49: essential filler words and conversational connectors",
      "Use そうですね, なるほど, やっぱり, ちょっと, えーと, まあ naturally",
      "Understand when and why Japanese speakers use filler words",
      "Sound more natural by adding conversational glue to your speech",
    ],
    pattern: {
      number: 49,
      japanese: "そうですね / なるほど / やっぱり / ちょっと / えーと / まあ",
      romaji:
        "sō desu ne / naruhodo / yappari / chotto / ēto / mā",
      english: "Conversational filler words",
      breakdown: [
        {
          text: "そうですね",
          romaji: "sō desu ne",
          role: "fixed",
          explanation:
            "That's right / Let me see… (agreement or thinking pause)",
        },
        {
          text: "なるほど",
          romaji: "naruhodo",
          role: "fixed",
          explanation: "I see / Indeed (showing understanding)",
        },
        {
          text: "やっぱり",
          romaji: "yappari",
          role: "fixed",
          explanation:
            "As expected / After all (confirming a suspicion or reverting to original thought)",
        },
        {
          text: "ちょっと",
          romaji: "chotto",
          role: "fixed",
          explanation:
            "A little / Hmm… (softening, hesitation, or polite refusal)",
        },
        {
          text: "えーと",
          romaji: "ēto",
          role: "fixed",
          explanation: "Um… / Let me think… (thinking pause)",
        },
        {
          text: "まあ",
          romaji: "mā",
          role: "fixed",
          explanation: "Well… / I suppose (hedging or mild acceptance)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "そうですね",
        romaji: "sō desu ne",
        english: "that's right / let me see",
        fitsPattern: [49],
        mnemonic:
          "'Soh des neh' — 'so, does it, neh?' — nodding along: 'that's right, huh'",
      },
      {
        japanese: "なるほど",
        romaji: "naruhodo",
        english: "I see / indeed / that makes sense",
        fitsPattern: [49],
        mnemonic:
          "'Nah-roo-hoh-doh' — 'narrow hold, oh!' — 'oh, now I see the narrow hold!'",
      },
      {
        japanese: "やっぱり",
        romaji: "yappari",
        english: "as expected / after all / I knew it",
        fitsPattern: [49],
        mnemonic:
          "'Yah-pah-ree' — 'yup, par really' — 'yup, it's par for the course, as expected'",
      },
      {
        japanese: "ちょっと",
        romaji: "chotto",
        english: "a little / hmm (softener / hesitation)",
        fitsPattern: [49],
        mnemonic:
          "'Chot-toh' — 'jot oh' — just a little jot — it's just a tiny bit",
      },
      {
        japanese: "えーと",
        romaji: "ēto",
        english: "um / let me think",
        fitsPattern: [49],
        mnemonic:
          "'Eh-toh' — 'eight-oh' — 'um, eight? oh wait…' — thinking aloud",
      },
      {
        japanese: "まあ",
        romaji: "mā",
        english: "well / I suppose / oh my",
        fitsPattern: [49],
        mnemonic:
          "'Mah' — like 'meh' with a shrug — 'well, I suppose so'",
      },
    ],
    examples: [
      {
        japanese: "「にほんごはむずかしいですか？」「そうですね、すこしむずかしいとおもいます。」",
        romaji:
          "'Nihongo wa muzukashii desu ka?' 'Sō desu ne, sukoshi muzukashii to omoimasu.'",
        english:
          "'Is Japanese difficult?' 'Let me see… I think it's a little difficult.'",
      },
      {
        japanese: "「にほんではでんしゃがいちばんべんりです。」「なるほど。」",
        romaji:
          "'Nihon de wa densha ga ichiban benri desu.' 'Naruhodo.'",
        english: "'In Japan, trains are the most convenient.' 'I see.'",
      },
      {
        japanese: "やっぱりにほんのラーメンがいちばんおいしいです。",
        romaji: "Yappari nihon no rāmen ga ichiban oishii desu.",
        english:
          "Japanese ramen is the best after all. (confirming what you already thought)",
      },
      {
        japanese: "「あしたひまですか？」「あした、ちょっと…」",
        romaji: "'Ashita hima desu ka?' 'Ashita, chotto…'",
        english:
          "'Are you free tomorrow?' 'Tomorrow is a bit…' (polite soft refusal)",
      },
      {
        japanese: "えーと、なんでしたっけ？あ、おもいだしました。",
        romaji: "Ēto, nan deshita kke? A, omoidashimashita.",
        english: "Um, what was it again? Oh, I remembered.",
      },
      {
        japanese: "まあ、だいじょうぶだとおもいますよ。",
        romaji: "Mā, daijōbu da to omoimasu yo.",
        english: "Well, I think it'll be fine.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "にほんのせいかつはどうですか？",
        romaji: "Nihon no seikatsu wa dō desu ka?",
        english: "How's life in Japan?",
      },
      {
        speaker: "You",
        japanese: "そうですね、とてもたのしいです。でもちょっとたいへんなこともあります。",
        romaji:
          "Sō desu ne, totemo tanoshii desu. Demo chotto taihen na koto mo arimasu.",
        english:
          "Let me see, it's very fun. But there are also things that are a bit tough.",
      },
      {
        speaker: "Tanaka",
        japanese: "なるほど。たとえばどんなことですか？",
        romaji: "Naruhodo. Tatoeba donna koto desu ka?",
        english: "I see. For example, what kind of things?",
      },
      {
        speaker: "You",
        japanese: "えーと、かんじがむずかしいです。やっぱりまいにちべんきょうしないとだめですね。",
        romaji:
          "Ēto, kanji ga muzukashii desu. Yappari mainichi benkyō shinai to dame desu ne.",
        english:
          "Um, kanji is difficult. As expected, I have to study every day.",
      },
      {
        speaker: "Tanaka",
        japanese: "まあ、でもすこしずつじょうずになりますよ。",
        romaji: "Mā, demo sukoshi zutsu jōzu ni narimasu yo.",
        english: "Well, but you'll get better little by little.",
      },
      {
        speaker: "You",
        japanese: "そうですね。やっぱりあきらめないほうがいいとおもいます。",
        romaji:
          "Sō desu ne. Yappari akiramenai hō ga ii to omoimasu.",
        english:
          "That's right. After all, I think it's better not to give up.",
      },
    ],
    practicePrompts: [
      "Practice a conversation where you use all six filler words naturally",
      "Respond to three questions using そうですね to pause before answering",
      "Politely decline an invitation using ちょっと… (trailing off)",
      "Express 'as expected' realizations: やっぱり___とおもいます",
      "Use えーと to buy thinking time, then give your opinion with とおもいます",
    ],
    languageInsight: {
      title: "Filler Words as Social Lubricant",
      content:
        "In English, filler words like 'um' and 'uh' are often seen as signs of poor speaking. In Japanese, filler words serve a vital social function — they signal you're engaged, thinking, and being considerate. そうですね shows you're carefully considering what was said. なるほど validates the speaker's point. ちょっと softens a refusal without directly saying 'no.' やっぱり signals you've weighed options and reached a conclusion. えーと buys thinking time politely. まあ hedges without committing. Mastering these six words will instantly make your Japanese sound more natural and socially fluent.",
    },
    tutorNote:
      "These six words are deceptively powerful. Students who use them sound dramatically more natural. The key: don't just memorize the meanings — learn the timing. そうですね goes at the start of a response when you're considering. なるほど is a standalone response showing understanding. ちょっと… with a trailing-off tone is the Japanese way of saying 'no' without actually saying no. Practice inserting these into conversations you already know.",
    quickReference:
      "そうですね = let me see / that's right | なるほど = I see / makes sense | やっぱり = as expected / after all | ちょっと… = a bit… (soft refusal/hesitation) | えーと = um / let me think | まあ = well / I suppose | All six: social glue that makes you sound natural",
    listeningRec: {
      source: "Terrace House",
      title: "Any conversation between housemates",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Count filler words! そうですね, なるほど, and やっぱり appear in almost every conversation. Notice how ちょっと… is used to dodge uncomfortable topics without saying no directly.",
    },
  },

  {
    day: 79,
    dayType: "pattern-combo",
    title: "The Great Debate",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Combine all Phase 6 patterns in a structured debate about vacation destinations",
      "Use opinions (#38), reasons (#40), contrasts (#41), conditions (#42), comparisons (#26), and suggestions (#47)",
      "Practice agreeing, disagreeing, and compromising in Japanese",
      "Hold an extended multi-turn conversation with complex reasoning",
    ],
    usesPatterns: [38, 40, 41, 42, 26, 47],
    vocabulary: [
      {
        japanese: "りょこう",
        romaji: "ryokō",
        english: "travel / trip",
        mnemonic:
          "'Ryoh-koh' — 'Rio, go!' — let's travel to Rio!",
      },
      {
        japanese: "おきなわ",
        romaji: "Okinawa",
        english: "Okinawa (tropical island prefecture)",
        mnemonic:
          "'Oh-kee-nah-wah' — 'okay, now, wow!' — Okinawa's beaches are a wow",
      },
      {
        japanese: "ほっかいどう",
        romaji: "Hokkaidō",
        english: "Hokkaido (northern island)",
        mnemonic:
          "'Hok-kai-doh' — 'hockey, doh!' — Hokkaido is cold enough for hockey",
      },
      {
        japanese: "ビーチ",
        romaji: "bīchi",
        english: "beach",
        mnemonic: "Sounds like English 'beach' — ビーチ",
      },
      {
        japanese: "おんせん",
        romaji: "onsen",
        english: "hot spring",
        mnemonic:
          "'Ohn-sen' — 'on, zen' — get on the zen relaxation at the hot spring",
      },
      {
        japanese: "けしき",
        romaji: "keshiki",
        english: "scenery / landscape",
        fitsPattern: [38],
        mnemonic:
          "'Keh-shee-kee' — 'cash, key' — the scenery is worth its weight in cash",
      },
    ],
    examples: [
      {
        japanese:
          "おきなわよりほっかいどうのほうがいいとおもいます。けしきがきれいだから。",
        romaji:
          "Okinawa yori Hokkaidō no hō ga ii to omoimasu. Keshiki ga kirei da kara.",
        english:
          "I think Hokkaido is better than Okinawa. Because the scenery is beautiful.",
      },
      {
        japanese:
          "おきなわはあたたかいけど、なつはあつすぎるとおもいます。",
        romaji:
          "Okinawa wa atatakai kedo, natsu wa atsusugiru to omoimasu.",
        english:
          "Okinawa is warm, but I think it's too hot in summer.",
      },
      {
        japanese:
          "もしみんながさんせいしたら、おきなわにいきましょう。",
        romaji:
          "Moshi minna ga sansei shitara, Okinawa ni ikimashō.",
        english: "If everyone agrees, let's go to Okinawa.",
      },
      {
        japanese:
          "ほっかいどうにいったら、おんせんにはいりましょう。",
        romaji: "Hokkaidō ni ittara, onsen ni hairimashō.",
        english:
          "If we go to Hokkaido, let's go to a hot spring.",
      },
      {
        japanese:
          "やっぱりりょうほうにいったほうがいいとおもいます。おきなわはなつに、ほっかいどうはふゆに。",
        romaji:
          "Yappari ryōhō ni itta hō ga ii to omoimasu. Okinawa wa natsu ni, Hokkaidō wa fuyu ni.",
        english:
          "After all, I think we should go to both. Okinawa in summer, Hokkaido in winter.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [38, 26, 40],
        japanese:
          "おきなわよりほっかいどうのほうがすきです。しずかなので、ゆっくりやすめるとおもいます。",
        romaji:
          "Okinawa yori Hokkaidō no hō ga suki desu. Shizuka na node, yukkuri yasumeru to omoimasu.",
        english:
          "I like Hokkaido more than Okinawa. Because it's quiet, I think I can relax.",
      },
      {
        patternsUsed: [41, 40, 47],
        japanese:
          "ビーチもいいけど、さむいところもいいとおもいます。おんせんがあるから、いっしょにほっかいどうにいきましょう。",
        romaji:
          "Bīchi mo ii kedo, samui tokoro mo ii to omoimasu. Onsen ga aru kara, issho ni Hokkaidō ni ikimashō.",
        english:
          "The beach is nice too, but I think cold places are also good. Because there are hot springs, let's go to Hokkaido together.",
      },
      {
        patternsUsed: [42, 38, 41, 47],
        japanese:
          "もしやすみがながかったら、おきなわにもほっかいどうにもいけるとおもいます。みじかいけど、ひとつえらびましょう。",
        romaji:
          "Moshi yasumi ga nagakattara, Okinawa ni mo Hokkaidō ni mo ikeru to omoimasu. Mijikai kedo, hitotsu erabimashō.",
        english:
          "If the vacation were long, I think we could go to both Okinawa and Hokkaido. It's short, though, so let's choose one.",
      },
      {
        patternsUsed: [38, 40, 41, 42, 26, 47],
        japanese:
          "おきなわはたのしいですが、たかいとおもいます。ほっかいどうよりおきなわのほうがひこうきだいがたかいです。でもうみがきれいだから、もしやすかったら、おきなわにいきましょう。",
        romaji:
          "Okinawa wa tanoshii desu ga, takai to omoimasu. Hokkaidō yori Okinawa no hō ga hikōkidai ga takai desu. Demo umi ga kirei da kara, moshi yasukattara, Okinawa ni ikimashō.",
        english:
          "Okinawa is fun, but I think it's expensive. Okinawa's airfare is higher than Hokkaido's. But because the ocean is beautiful, if it's cheap, let's go to Okinawa.",
      },
    ],
    dialogue: [
      {
        speaker: "Suzuki",
        japanese:
          "なつやすみ、どこにりょこうにいきましょうか？おきなわとほっかいどう、どっちがいいとおもいますか？",
        romaji:
          "Natsuyasumi, doko ni ryokō ni ikimashō ka? Okinawa to Hokkaidō, dotchi ga ii to omoimasu ka?",
        english:
          "For summer vacation, where shall we travel? Which do you think is better, Okinawa or Hokkaido?",
      },
      {
        speaker: "You",
        japanese:
          "そうですね。おきなわがいいとおもいます。なつだから、ビーチであそびたいです。",
        romaji:
          "Sō desu ne. Okinawa ga ii to omoimasu. Natsu da kara, bīchi de asobitai desu.",
        english:
          "Let me see. I think Okinawa is good. Because it's summer, I want to play at the beach.",
      },
      {
        speaker: "Suzuki",
        japanese:
          "でもおきなわはなつはあつすぎるとおもいませんか？ほっかいどうのほうがすずしいですよ。",
        romaji:
          "Demo Okinawa wa natsu wa atsusugiru to omoimasen ka? Hokkaidō no hō ga suzushii desu yo.",
        english:
          "But don't you think Okinawa is too hot in summer? Hokkaido is cooler.",
      },
      {
        speaker: "You",
        japanese:
          "なるほど、たしかにあついですね。でもうみがきれいだから、やっぱりおきなわがいいとおもいます。",
        romaji:
          "Naruhodo, tashika ni atsui desu ne. Demo umi ga kirei da kara, yappari Okinawa ga ii to omoimasu.",
        english:
          "I see, it's certainly hot. But because the ocean is beautiful, I still think Okinawa is better.",
      },
      {
        speaker: "Suzuki",
        japanese:
          "じゃあ、もしおきなわにいったら、なにがしたいですか？",
        romaji:
          "Jā, moshi Okinawa ni ittara, nani ga shitai desu ka?",
        english: "Then, if we went to Okinawa, what would you want to do?",
      },
      {
        speaker: "You",
        japanese:
          "ビーチであそんで、おきなわりょうりをたべて、おんせんにもはいりたいです！",
        romaji:
          "Bīchi de asonde, Okinawa ryōri o tabete, onsen ni mo hairitai desu!",
        english:
          "I want to play at the beach, eat Okinawan food, and go to hot springs too!",
      },
      {
        speaker: "Suzuki",
        japanese:
          "まあ、たのしそうですね。じゃあ、おきなわにしましょう！でもふゆはほっかいどうにいったほうがいいとおもいます。",
        romaji:
          "Mā, tanoshisō desu ne. Jā, Okinawa ni shimashō! Demo fuyu wa Hokkaidō ni itta hō ga ii to omoimasu.",
        english:
          "Well, that sounds fun. Alright, let's go to Okinawa! But for winter, I think we should go to Hokkaido.",
      },
      {
        speaker: "You",
        japanese: "さんせいです！いいけいかくですね。",
        romaji: "Sansei desu! Ii keikaku desu ne.",
        english: "I agree! That's a good plan.",
      },
    ],
    practicePrompts: [
      "Debate: Okinawa vs Hokkaido. Give reasons for each and pick a winner.",
      "Debate: city life vs countryside. Use #38 (opinion), #40 (reason), #41 (contrast)",
      "Plan a group trip using #47 (let's) and #42 (if conditions): もし___たら、___ましょう",
      "Use all six filler words from Pattern #49 in a debate conversation",
    ],
    languageInsight: {
      title: "Japanese Debate Style: Consensus over Victory",
      content:
        "Japanese debate culture differs fundamentally from Western styles. Rather than trying to 'win' an argument, the goal is to reach consensus (合意, gōi). Speakers soften their positions with とおもいます, acknowledge the other side with なるほど and たしかに, and propose compromises with ましょう. The phrase じゃあ (then/well then) often signals someone is yielding ground. Even when disagreeing, speakers frame it gently: そうですが、でも… (that's true, but…). This consensus-building communication style is rooted in the cultural value of 和 (wa, harmony).",
    },
    tutorNote:
      "This debate exercise brings together everything from Phase 6. Encourage students to use filler words (Pattern #49) naturally throughout. The goal isn't just grammar accuracy — it's conversational flow. Can you state an opinion, support it with a reason, acknowledge the counterpoint, and propose a compromise? That's real-world Japanese communication.",
    quickReference:
      "Debate toolkit: Opinion: ___とおもいます | Reason: ___から/ので | Contrast: ___けど/が | Condition: もし___たら | Comparison: ___より___のほうが | Suggestion: ___ましょう | Agreement: さんせいです | Filler: そうですね、なるほど、やっぱり",
    listeningRec: {
      source: "Terrace House",
      title: "Episodes with group house decisions",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch how housemates debate plans and reach consensus. Notice the gentle back-and-forth: opinion → reason → contrast → compromise. Count how many filler words they use.",
    },
  },

  {
    day: 80,
    dayType: "review",
    title: "Phase 6 Review",
    phase: 6,
    phaseTitle: "Complex Idea Patterns",
    objectives: [
      "Review and solidify all 12 patterns from Phase 6 (#38–#49)",
      "Demonstrate mastery of complex reasoning: opinions, reasons, contrasts, and conditions",
      "Hold extended conversations using layered arguments and advice",
      "Self-assess readiness for Phase 7",
    ],
    usesPatterns: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    vocabulary: [
      {
        japanese: "ぶんか",
        romaji: "bunka",
        english: "culture",
        mnemonic:
          "'Boon-kah' — 'bunk, ah!' — the cultural bunk beds in Japan are amazing",
      },
      {
        japanese: "しゃかい",
        romaji: "shakai",
        english: "society",
        mnemonic:
          "'Shah-kai' — 'shock, eye!' — society shocks your eyes with its complexity",
      },
      {
        japanese: "しょうらい",
        romaji: "shōrai",
        english: "future",
        mnemonic:
          "'Shoh-rye' — 'show rye' — show the rye bread of the future",
      },
      {
        japanese: "かのうせい",
        romaji: "kanōsei",
        english: "possibility",
        mnemonic:
          "'Kah-noh-say' — 'can oh say' — can you say what the possibilities are?",
      },
      {
        japanese: "ていあんする",
        romaji: "teian suru",
        english: "to suggest / to propose (する verb)",
        mnemonic:
          "'Tay-ahn soo-roo' — 'tea on' — I suggest tea on the patio",
      },
      {
        japanese: "けつろん",
        romaji: "ketsuron",
        english: "conclusion",
        mnemonic:
          "'Ket-soo-rohn' — 'cats run' — in conclusion, cats run fast",
      },
    ],
    examples: [
      {
        japanese:
          "にほんのぶんかはおもしろいとおもいます。でもふくざつだから、ぜんぶわかるのはむずかしいです。(#38, #41, #40)",
        romaji:
          "Nihon no bunka wa omoshiroi to omoimasu. Demo fukuzatsu da kara, zenbu wakaru no wa muzukashii desu.",
        english:
          "I think Japanese culture is interesting. But because it's complex, understanding everything is difficult.",
      },
      {
        japanese:
          "せんせいはもっとれんしゅうしたほうがいいといいました。(#39, #48)",
        romaji:
          "Sensei wa motto renshū shita hō ga ii to iimashita.",
        english: "The teacher said I should practice more.",
      },
      {
        japanese:
          "もしにほんにすんだら、しゃかいのルールをまなんだほうがいいとおもいます。(#42, #48, #38)",
        romaji:
          "Moshi nihon ni sundara, shakai no rūru o mananda hō ga ii to omoimasu.",
        english:
          "If you live in Japan, I think you should learn society's rules.",
      },
      {
        japanese:
          "こどものとき、しょうらいのゆめがたくさんありました。(#43)",
        romaji:
          "Kodomo no toki, shōrai no yume ga takusan arimashita.",
        english: "When I was a child, I had many dreams for the future.",
      },
      {
        japanese:
          "ねるまえに、にほんごをべんきょうします。おきたあとで、ふくしゅうします。(#44)",
        romaji:
          "Neru mae ni, nihongo o benkyō shimasu. Okita ato de, fukushū shimasu.",
        english:
          "Before sleeping, I study Japanese. After waking up, I review.",
      },
      {
        japanese:
          "このほんはわかりやすいですが、すこしながすぎるとおもいます。(#46, #45, #38)",
        romaji:
          "Kono hon wa wakariyasui desu ga, sukoshi nagasugiru to omoimasu.",
        english:
          "This book is easy to understand, but I think it's a little too long.",
      },
      {
        japanese:
          "えーと、そうですね…やっぱりみんなでいっしょにいきましょう。(#49, #47)",
        romaji:
          "Ēto, sō desu ne… yappari minna de issho ni ikimashō.",
        english:
          "Um, let me see… after all, let's all go together.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [38, 40, 41, 42],
        japanese:
          "にほんごはむずかしいけど、たのしいとおもいます。まいにちべんきょうしているから、すこしずつわかるようになりました。もしにほんにいったら、にほんごをたくさんつかいたいです。",
        romaji:
          "Nihongo wa muzukashii kedo, tanoshii to omoimasu. Mainichi benkyō shite iru kara, sukoshi zutsu wakaru yō ni narimashita. Moshi nihon ni ittara, nihongo o takusan tsukaitai desu.",
        english:
          "Japanese is difficult, but I think it's fun. Because I study every day, I've gradually come to understand. If I go to Japan, I want to use a lot of Japanese.",
      },
      {
        patternsUsed: [39, 43, 48],
        japanese:
          "ともだちはこまったとき、だれかにそうだんしたほうがいいといいました。そうだとおもいます。ひとりでかんがえすぎないほうがいいです。",
        romaji:
          "Tomodachi wa komatta toki, dareka ni sōdan shita hō ga ii to iimashita. Sō da to omoimasu. Hitori de kangaesugina hō ga ii desu.",
        english:
          "My friend said when you're troubled, you should consult someone. I think so too. You shouldn't overthink things alone.",
      },
      {
        patternsUsed: [44, 45, 46, 47],
        japanese:
          "テストのまえに、ふくしゅうしましょう。テストがおわったあとで、いっしょにあそびましょう。べんきょうしすぎないでください。このきょうかしょはよみやすいから、おすすめです。",
        romaji:
          "Tesuto no mae ni, fukushū shimashō. Tesuto ga owatta ato de, issho ni asobimashō. Benkyō shisugina de kudasai. Kono kyōkasho wa yomiyasui kara, osusume desu.",
        english:
          "Before the test, let's review. After the test is over, let's hang out together. Please don't study too much. This textbook is easy to read, so I recommend it.",
      },
      {
        patternsUsed: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        japanese:
          "えーと、そうですね。にほんごのべんきょうをはじめたとき、とてもむずかしいとおもいました。でもせんせいがまいにちすこしずつべんきょうしたほうがいいといいました。だからねるまえに、にほんごをよみます。やっぱりれんしゅうしすぎないほうがいいです。このほんはよみやすいから、おすすめです。もしつづけたら、きっとじょうずになるとおもいます。いっしょにがんばりましょう。",
        romaji:
          "Ēto, sō desu ne. Nihongo no benkyō o hajimeta toki, totemo muzukashii to omoimashita. Demo sensei ga mainichi sukoshi zutsu benkyō shita hō ga ii to iimashita. Dakara neru mae ni, nihongo o yomimasu. Yappari renshū shisugina hō ga ii desu. Kono hon wa yomiyasui kara, osusume desu. Moshi tsuzuketara, kitto jōzu ni naru to omoimasu. Issho ni ganbarimashō.",
        english:
          "Um, let me see. When I started studying Japanese, I thought it was very difficult. But the teacher said I should study a little every day. So before sleeping, I read Japanese. As expected, it's better not to practice too much. This book is easy to read, so I recommend it. If you keep going, I think you'll surely improve. Let's do our best together.",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "フェーズ６、おつかれさまでした。どうでしたか？",
        romaji: "Fēzu roku, otsukaresama deshita. Dō deshita ka?",
        english: "Good work on Phase 6. How was it?",
      },
      {
        speaker: "You",
        japanese:
          "そうですね、むずかしかったですが、とてもおもしろかったとおもいます。",
        romaji:
          "Sō desu ne, muzukashikatta desu ga, totemo omoshirokatta to omoimasu.",
        english:
          "Let me see, it was difficult, but I think it was very interesting.",
      },
      {
        speaker: "Sensei",
        japanese: "いまなにができますか？",
        romaji: "Ima nani ga dekimasu ka?",
        english: "What can you do now?",
      },
      {
        speaker: "You",
        japanese:
          "いけんをいうことができます。りゆうをせつめいすることもできます。もし___たら、とかんがえることもできます。そして、アドバイスもできます。",
        romaji:
          "Iken o iu koto ga dekimasu. Riyū o setsumei suru koto mo dekimasu. Moshi ___tara, to kangaeru koto mo dekimasu. Soshite, adobaisu mo dekimasu.",
        english:
          "I can express opinions. I can also explain reasons. I can also think about 'if' scenarios. And I can give advice.",
      },
      {
        speaker: "Sensei",
        japanese:
          "すばらしいですね。しょうらい、にほんごでなにがしたいですか？",
        romaji:
          "Subarashii desu ne. Shōrai, nihongo de nani ga shitai desu ka?",
        english: "That's wonderful. In the future, what do you want to do in Japanese?",
      },
      {
        speaker: "You",
        japanese:
          "にほんでしごとをすることがゆめです。そのためにもっとべんきょうしたほうがいいとおもいます。やっぱりあきらめないことがたいせつですね。",
        romaji:
          "Nihon de shigoto o suru koto ga yume desu. Sono tame ni motto benkyō shita hō ga ii to omoimasu. Yappari akiramenai koto ga taisetsu desu ne.",
        english:
          "Working in Japan is my dream. For that reason, I think I should study more. After all, not giving up is what's important.",
      },
      {
        speaker: "Sensei",
        japanese:
          "なるほど。きっとできますよ。フェーズ７もいっしょにがんばりましょう！",
        romaji:
          "Naruhodo. Kitto dekimasu yo. Fēzu nana mo issho ni ganbarimashō!",
        english:
          "I see. You can surely do it. Let's work hard on Phase 7 together too!",
      },
    ],
    practicePrompts: [
      "Write a paragraph about your Japanese learning journey using at least six Phase 6 patterns",
      "Hold a debate about a topic you care about: use opinions, reasons, contrasts, and conditions",
      "Give advice to a new Japanese learner using #48 and #40: ___したほうがいいです。___から。",
      "Describe your future plans using #38, #40, #42: もし___たら、___とおもいます。___から。",
      "Test yourself: say all 12 Phase 6 patterns (#38–#49) from memory with example sentences",
    ],
    languageInsight: {
      title: "49 Patterns: The Power of Complex Thought",
      content:
        "With 49 patterns, you can now express complex, nuanced ideas in Japanese. Phase 6 added the final layer: opinions (とおもいます), reported speech (といいました), reasons (から/ので), contrasts (けど/が), conditions (たら), time contexts (とき), sequencing (まえに/あとで), degree (すぎる), difficulty (やすい/にくい), suggestions (ましょう), advice (たほうがいい), and conversational glue (filler words). You can now say something like: 'When I was a child, I wanted to become a doctor, but because I love technology, I became a programmer. If I have the chance, I think I should study Japanese more. Let's keep working hard together.' That's a multi-layered, natural-sounding thought built entirely from patterns you've learned.",
    },
    tutorNote:
      "Phase 6 complete! You've added 12 patterns that transform your Japanese from functional sentences into complex, reasoned discourse. Before moving to Phase 7, make sure you can: (1) express opinions with とおもいます naturally, (2) give reasons with から/ので, (3) show contrast with けど/が, (4) handle conditionals with たら, (5) give advice with たほうがいい, (6) suggest activities with ましょう, and (7) sprinkle in filler words naturally. Phase 7 will build on this foundation with more advanced expression patterns.",
    quickReference:
      "Phase 6 Patterns: #38 とおもいます (I think) | #39 といいました (said) | #40 から/ので (because) | #41 けど/が (but) | #42 たら (if) | #43 とき (when) | #44 まえに/あとで (before/after) | #45 すぎる (too much) | #46 やすい/にくい (easy/hard to) | #47 ましょう (let's) | #48 たほうがいい (should) | #49 Fillers (そうですね, なるほど, やっぱり, ちょっと, えーと, まあ) | All 49 patterns now complete!",
    listeningRec: {
      source: "Terrace House",
      title: "Season 1 — Full Review",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch any episode and try to identify all Phase 6 patterns in natural conversation. Challenge yourself: can you hear opinions (とおもう), reasons (から), contrasts (けど), conditions (たら), and filler words? You'll be surprised how many you recognize now.",
    },
  },
];
