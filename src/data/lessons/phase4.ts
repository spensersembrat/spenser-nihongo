import { Lesson } from "@/lib/types";

export const phase4Lessons: Lesson[] = [
  {
    day: 36,
    dayType: "new-pattern",
    title: "Pattern #21: It is [adjective]",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #21: ___は[い-adjective]です (It is [adjective])",
      "Learn 8 essential い-adjectives for describing things",
      "Describe weather, food, places, and experiences with adjectives",
      "Understand that い-adjectives end in い and conjugate independently",
    ],
    pattern: {
      number: 21,
      japanese: "___は[い-adj]です",
      english: "It is [adjective]",
      breakdown: [
        {
          text: "___は",
          role: "particle",
          explanation: "Topic marker — the thing being described",
        },
        {
          text: "[い-adj]",
          role: "slot",
          explanation: "An い-adjective — always ends in い in dictionary form",
        },
        {
          text: "です",
          role: "fixed",
          explanation: "Polite copula — adds politeness (い-adjectives don't need it grammatically)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "おおきい",
        romaji: "ōkii",
        english: "big / large",
        fitsPattern: [21],
        mnemonic:
          "'Oh-key' — an 'oh!' key that's way too big for the lock",
      },
      {
        japanese: "ちいさい",
        romaji: "chiisai",
        english: "small / little",
        fitsPattern: [21],
        mnemonic:
          "'Chee-sigh' — a tiny piece of 'cheese' makes you 'sigh'",
      },
      {
        japanese: "あつい",
        romaji: "atsui",
        english: "hot (weather / things)",
        fitsPattern: [21],
        mnemonic:
          "'Ah-tsoo-ee' — 'achoo!' you sneeze from the hot steam",
      },
      {
        japanese: "さむい",
        romaji: "samui",
        english: "cold (weather)",
        fitsPattern: [21],
        mnemonic:
          "'Sah-moo-ee' — 'some wee' snowflakes make it freezing outside",
      },
      {
        japanese: "いい",
        romaji: "ii",
        english: "good",
        fitsPattern: [21],
        mnemonic:
          "'Ee' — 'eee!' something good — note: いい is the only irregular い-adjective",
      },
      {
        japanese: "わるい",
        romaji: "warui",
        english: "bad",
        fitsPattern: [21],
        mnemonic:
          "'Wah-roo-ee' — 'war, ruin' — war is bad for everyone",
      },
      {
        japanese: "たのしい",
        romaji: "tanoshii",
        english: "fun / enjoyable",
        fitsPattern: [21],
        mnemonic:
          "'Tah-noh-shee' — 'the notion she' loves having fun",
      },
      {
        japanese: "おもしろい",
        romaji: "omoshiroi",
        english: "interesting / funny",
        fitsPattern: [21],
        mnemonic:
          "'Oh-moh-shee-roy' — 'oh my, she's royal!' — what an interesting person",
      },
    ],
    examples: [
      {
        japanese: "きょうはあついです。",
        romaji: "Kyō wa atsui desu.",
        english: "Today is hot.",
      },
      {
        japanese: "このへやはおおきいです。",
        romaji: "Kono heya wa ōkii desu.",
        english: "This room is big.",
      },
      {
        japanese: "にほんごはおもしろいです。",
        romaji: "Nihongo wa omoshiroi desu.",
        english: "Japanese is interesting.",
      },
      {
        japanese: "パーティーはたのしいです。",
        romaji: "Pātī wa tanoshii desu.",
        english: "The party is fun.",
      },
      {
        japanese: "ふゆはさむいです。",
        romaji: "Fuyu wa samui desu.",
        english: "Winter is cold.",
      },
      {
        japanese: "このレストランはいいです。",
        romaji: "Kono resutoran wa ii desu.",
        english: "This restaurant is good.",
      },
      {
        japanese: "てんきがわるいです。",
        romaji: "Tenki ga warui desu.",
        english: "The weather is bad.",
      },
      {
        japanese: "あのいぬはちいさいです。",
        romaji: "Ano inu wa chiisai desu.",
        english: "That dog over there is small.",
      },
    ],
    practicePrompts: [
      "Describe today's weather: きょうは___です (あつい / さむい / いい)",
      "Describe things around you: この___は___です (おおきい / ちいさい)",
      "Share your opinion: にほんごは___です (おもしろい / たのしい)",
      "Describe a place you know: ___は___です",
    ],
    languageInsight: {
      title: "い-Adjectives: The Original Japanese Descriptors",
      content:
        "い-adjectives are native Japanese words (和語, wago) that date back over a thousand years. They're called い-adjectives because their dictionary form always ends in い: おおきい, ちいさい, あつい. Unlike English adjectives that need a 'be' verb ('it IS big'), い-adjectives contain their own verb-like conjugation power. Technically, おおきい already means 'is big' on its own — です just adds politeness. This is why い-adjectives can conjugate into past and negative forms without any helper words, just like verbs. You'll see this tomorrow.",
    },
    tutorNote:
      "Welcome to Phase 4! Adjectives unlock the ability to describe the world around you. Start by pointing at things and saying: この___は[adj]です. The key insight is that い-adjectives already contain the meaning 'is' — おおきいです literally means 'is big' with politeness. Don't worry about conjugation yet; today is purely about using adjectives in their basic positive form. Notice how natural it feels: きょうはあついです, にほんごはおもしろいです.",
    quickReference:
      "Pattern #21: [Topic]は[い-adj]です | おおきい=big | ちいさい=small | あつい=hot | さむい=cold | いい=good | わるい=bad | たのしい=fun | おもしろい=interesting",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 36 — Describing with い-Adjectives",
      listenFor:
        "How speakers use い-adjectives to describe weather, food, and experiences. Notice the です at the end for politeness and the rising intonation when asking ___ですか?",
    },
  },

  {
    day: 37,
    dayType: "vocab-expansion",
    title: "Adjective Tenses",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Conjugate い-adjectives into negative form: ___くないです",
      "Conjugate い-adjectives into past form: ___かったです",
      "Conjugate い-adjectives into past negative form: ___くなかったです",
      "Master the irregular conjugation of いい (よくない, よかった, よくなかった)",
    ],
    usesPatterns: [21],
    vocabulary: [
      {
        japanese: "おいしい",
        romaji: "oishii",
        english: "delicious / tasty",
        fitsPattern: [21],
        mnemonic:
          "'Oh-ee-shee' — 'oh yee-shee!' when tasting something amazing",
      },
      {
        japanese: "まずい",
        romaji: "mazui",
        english: "bad-tasting / awful",
        fitsPattern: [21],
        mnemonic:
          "'Mah-zoo-ee' — food from a 'maze' of bad choices tastes terrible",
      },
      {
        japanese: "すごい",
        romaji: "sugoi",
        english: "amazing / awesome",
        fitsPattern: [21],
        mnemonic:
          "'Soo-goy' — 'so good, oy!' — exclaiming over something amazing",
      },
      {
        japanese: "いそがしい",
        romaji: "isogashii",
        english: "busy",
        fitsPattern: [21],
        mnemonic:
          "'Ee-soh-gah-shee' — 'he's so gushy' because he's too busy to think straight",
      },
      {
        japanese: "つまらない",
        romaji: "tsumaranai",
        english: "boring / dull",
        fitsPattern: [21],
        mnemonic:
          "'Tsoo-mah-rah-nigh' — 'to my rah, nah' — not exciting, just boring",
      },
      {
        japanese: "うれしい",
        romaji: "ureshii",
        english: "happy / glad",
        fitsPattern: [21],
        mnemonic:
          "'Oo-reh-shee' — 'ooh, rushing' with happiness and joy",
      },
      {
        japanese: "よかったです",
        romaji: "yokatta desu",
        english: "was good / that's great (irregular past of いい)",
        fitsPattern: [21],
        mnemonic:
          "'Yo-katta!' — you'll hear this constantly — it means 'great!' or 'I'm glad!'",
      },
      {
        japanese: "とても",
        romaji: "totemo",
        english: "very / really (adverb)",
        mnemonic:
          "'Toh-teh-moh' — 'totem' pole is very, very tall",
      },
    ],
    examples: [
      {
        japanese: "きょうはあつくないです。",
        romaji: "Kyō wa atsuku nai desu.",
        english: "Today is not hot.",
      },
      {
        japanese: "きのうはさむかったです。",
        romaji: "Kinō wa samukatta desu.",
        english: "Yesterday was cold.",
      },
      {
        japanese: "えいがはおもしろくなかったです。",
        romaji: "Eiga wa omoshiroku nakatta desu.",
        english: "The movie was not interesting.",
      },
      {
        japanese: "すしはとてもおいしかったです。",
        romaji: "Sushi wa totemo oishikatta desu.",
        english: "The sushi was very delicious.",
      },
      {
        japanese: "テストはよくなかったです。",
        romaji: "Tesuto wa yoku nakatta desu.",
        english: "The test was not good.",
      },
      {
        japanese: "パーティーはたのしかったです。",
        romaji: "Pātī wa tanoshikatta desu.",
        english: "The party was fun.",
      },
      {
        japanese: "このりょうりはまずくないです。おいしいです！",
        romaji: "Kono ryōri wa mazuku nai desu. Oishii desu!",
        english: "This food is not bad-tasting. It's delicious!",
      },
      {
        japanese: "きのうのてんきはよかったです。",
        romaji: "Kinō no tenki wa yokatta desu.",
        english: "Yesterday's weather was good.",
      },
    ],
    practicePrompts: [
      "Conjugate おおきい through all four forms: おおきいです → おおきくないです → おおきかったです → おおきくなかったです",
      "Conjugate いい through all four forms: いいです → よくないです → よかったです → よくなかったです",
      "Describe yesterday's weather: きのうは___かったです / ___くなかったです",
      "Give your opinion on a meal: ___はおいしかったです / おいしくなかったです",
      "Use よかったです in three different sentences — it's one of the most common phrases in Japanese",
    ],
    languageInsight: {
      title: "Why いい Becomes よ-",
      content:
        "いい is actually a modern shortening of the older adjective よい (yoi). In Old Japanese and formal writing, よい is still used. When いい conjugates, it reverts to its original よい root: よくない (not good), よかった (was good), よくなかった (was not good). This is the only irregular い-adjective in the entire language. Every other い-adjective follows the pattern perfectly: drop い, add the ending. Once you remember that いい secretly wants to be よい, the conjugation makes complete sense.",
    },
    tutorNote:
      "Today's conjugation system is beautifully regular with just one exception. The formula: drop the final い, then add the ending. Negative: くないです. Past: かったです. Past negative: くなかったです. Practice with おおきい first: おおきい→おおきくない→おおきかった→おおきくなかった. Then drill いい separately: いい→よくない→よかった→よくなかった. The phrase よかったです (that's good / I'm glad) is one of the most-used expressions in daily Japanese.",
    quickReference:
      "い-adj conjugation: [stem]い → [stem]くないです (neg) → [stem]かったです (past) → [stem]くなかったです (past neg) | Exception: いい → よくない / よかった / よくなかった | おいしい=delicious | まずい=bad-tasting | すごい=amazing | とても=very",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 37 — Adjective Conjugation",
      listenFor:
        "Past-tense adjectives in conversation: おいしかったです, たのしかったです, よかったです. These appear constantly when people talk about past experiences.",
    },
  },

  {
    day: 38,
    dayType: "new-pattern",
    title: "Pattern #22: Na-Adjectives",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #22: ___は[な-adjective]です",
      "Learn 8 essential な-adjectives",
      "Understand how な-adjectives differ from い-adjectives",
      "Describe people, places, and things using な-adjectives",
    ],
    pattern: {
      number: 22,
      japanese: "___は[な-adj]です",
      english: "It is [na-adjective]",
      breakdown: [
        {
          text: "___は",
          role: "particle",
          explanation: "Topic marker — the thing being described",
        },
        {
          text: "[な-adj]",
          role: "slot",
          explanation: "A な-adjective — needs な when placed before a noun",
        },
        {
          text: "です",
          role: "fixed",
          explanation:
            "Polite copula — carries the conjugation for な-adjectives",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "しずか",
        romaji: "shizuka",
        english: "quiet / peaceful",
        fitsPattern: [22],
        mnemonic:
          "'Shee-zoo-kah' — 'she's a Quaker' — Quakers are known for quiet reflection",
      },
      {
        japanese: "ゆうめい",
        romaji: "yūmei",
        english: "famous",
        fitsPattern: [22],
        mnemonic:
          "'Yoo-may' — 'you, me' — someday we'll be famous together",
      },
      {
        japanese: "げんき",
        romaji: "genki",
        english: "energetic / healthy / well",
        fitsPattern: [22],
        mnemonic:
          "'Gen-kee' — full of 'gen-erous' energy and vitality",
      },
      {
        japanese: "べんり",
        romaji: "benri",
        english: "convenient / useful",
        fitsPattern: [22],
        mnemonic:
          "'Ben-ree' — 'Ben really' finds the most convenient solutions",
      },
      {
        japanese: "たいせつ",
        romaji: "taisetsu",
        english: "important / precious",
        fitsPattern: [22],
        mnemonic:
          "'Tie-set-sue' — 'tie it, set it, sue' — three important steps",
      },
      {
        japanese: "すき",
        romaji: "suki",
        english: "liked / favorite",
        fitsPattern: [22],
        mnemonic:
          "'Skee' — you 'ski' because you like it — すき means fondness",
      },
      {
        japanese: "きれい",
        romaji: "kirei",
        english: "beautiful / clean",
        fitsPattern: [22],
        mnemonic:
          "'Key-ray' — a 'key ray' of beautiful sunlight — looks like い-adj but is な!",
      },
      {
        japanese: "かんたん",
        romaji: "kantan",
        english: "simple / easy",
        fitsPattern: [22],
        mnemonic:
          "'Kahn-tahn' — 'can tan' easily in summer — it's simple",
      },
    ],
    examples: [
      {
        japanese: "このまちはしずかです。",
        romaji: "Kono machi wa shizuka desu.",
        english: "This town is quiet.",
      },
      {
        japanese: "とうきょうはゆうめいです。",
        romaji: "Tōkyō wa yūmei desu.",
        english: "Tokyo is famous.",
      },
      {
        japanese: "たなかさんはげんきです。",
        romaji: "Tanaka-san wa genki desu.",
        english: "Tanaka-san is well.",
      },
      {
        japanese: "このアプリはべんりです。",
        romaji: "Kono apuri wa benri desu.",
        english: "This app is convenient.",
      },
      {
        japanese: "かぞくはたいせつです。",
        romaji: "Kazoku wa taisetsu desu.",
        english: "Family is important.",
      },
      {
        japanese: "コーヒーがすきです。",
        romaji: "Kōhī ga suki desu.",
        english: "I like coffee.",
      },
      {
        japanese: "このはなはきれいです。",
        romaji: "Kono hana wa kirei desu.",
        english: "This flower is beautiful.",
      },
      {
        japanese: "このもんだいはかんたんです。",
        romaji: "Kono mondai wa kantan desu.",
        english: "This problem is easy.",
      },
    ],
    practicePrompts: [
      "Describe your town: ___は___です (しずか / ゆうめい / べんり)",
      "Ask someone how they are: おげんきですか？ — はい、げんきです",
      "Describe something beautiful: ___はきれいです",
      "Say what's important to you: ___はたいせつです",
    ],
    languageInsight: {
      title: "Two Families of Adjectives",
      content:
        "Japanese has two adjective families with very different origins. い-adjectives (形容詞, keiyōshi) are native Japanese words that conjugate on their own. な-adjectives (形容動詞, keiyōdōshi) mostly come from Chinese and behave more like nouns — they rely on です for conjugation and need な to modify nouns. The tricky part: きれい (beautiful) and ゆうめい (famous) end in い but are な-adjectives! The test: can you conjugate it like おおきい→おおきくない? If not, it's な. きれくない? Wrong! きれいじゃない — confirmed な-adjective.",
    },
    tutorNote:
      "な-adjectives are simpler in one way: they don't conjugate themselves. Instead, です does all the work, just like with nouns. げんきです (is well), げんきじゃないです (is not well), げんきでした (was well), げんきじゃなかったです (was not well). The big trap is きれい — it ends in い but is a な-adjective. You'll never say きれくない. The correct negative is きれいじゃないです. When in doubt about a new adjective, check whether it uses くない or じゃない for its negative.",
    quickReference:
      "Pattern #22: [Topic]は[な-adj]です | しずか=quiet | ゆうめい=famous | げんき=well | べんり=convenient | たいせつ=important | すき=liked | きれい=beautiful (な!) | かんたん=easy",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 38 — Na-Adjectives in Conversation",
      listenFor:
        "な-adjectives in natural speech. Notice that おげんきですか appears constantly as a greeting. Listen for きれい and べんり describing places and things.",
    },
  },

  {
    day: 39,
    dayType: "vocab-expansion",
    title: "Describing Things",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Conjugate な-adjectives: negative (じゃないです), past (でした), past negative (じゃなかったです)",
      "Modify nouns with い-adjectives directly: おおきいいぬ (big dog)",
      "Modify nouns with な-adjectives using な: しずかなところ (quiet place)",
      "Build descriptive noun phrases for richer, more natural sentences",
    ],
    usesPatterns: [21, 22],
    vocabulary: [
      {
        japanese: "ところ",
        romaji: "tokoro",
        english: "place",
        fitsPattern: [21, 22],
        mnemonic:
          "'Toh-koh-roh' — 'to go row' a boat to a faraway place",
      },
      {
        japanese: "ひと",
        romaji: "hito",
        english: "person",
        fitsPattern: [21, 22],
        mnemonic:
          "'Hee-toh' — 'he, though' is just one person",
      },
      {
        japanese: "もの",
        romaji: "mono",
        english: "thing (tangible object)",
        fitsPattern: [21, 22],
        mnemonic:
          "'Moh-noh' — 'mono' means one — a single tangible thing",
      },
      {
        japanese: "こと",
        romaji: "koto",
        english: "thing (abstract) / matter",
        fitsPattern: [21, 22],
        mnemonic:
          "'Koh-toh' — 'coat of' facts — abstract things you wrap your mind around",
      },
      {
        japanese: "いぬ",
        romaji: "inu",
        english: "dog",
        fitsPattern: [21, 22],
        mnemonic:
          "'Ee-noo' — 'in you' lives the loyalty of a faithful dog",
      },
      {
        japanese: "ねこ",
        romaji: "neko",
        english: "cat",
        fitsPattern: [21, 22],
        mnemonic:
          "'Neh-koh' — 'neck, oh!' cats love to nuzzle your neck",
      },
      {
        japanese: "みせ",
        romaji: "mise",
        english: "shop / store",
        fitsPattern: [21, 22],
        mnemonic:
          "'Mee-seh' — 'me say' welcome to my shop!",
      },
      {
        japanese: "おてら",
        romaji: "otera",
        english: "temple",
        fitsPattern: [21, 22],
        mnemonic:
          "'Oh-teh-rah' — 'oh, terra' — ancient temples built on sacred ground",
      },
    ],
    examples: [
      {
        japanese: "このまちはしずかじゃないです。にぎやかです。",
        romaji: "Kono machi wa shizuka ja nai desu. Nigiyaka desu.",
        english: "This town is not quiet. It's lively.",
      },
      {
        japanese: "きのうはげんきでした。",
        romaji: "Kinō wa genki deshita.",
        english: "I was well yesterday.",
      },
      {
        japanese: "あのレストランはゆうめいじゃなかったです。",
        romaji: "Ano resutoran wa yūmei ja nakatta desu.",
        english: "That restaurant was not famous.",
      },
      {
        japanese: "おおきいいぬがすきです。",
        romaji: "Ōkii inu ga suki desu.",
        english: "I like big dogs.",
      },
      {
        japanese: "しずかなところにすみたいです。",
        romaji: "Shizuka na tokoro ni sumitai desu.",
        english: "I want to live in a quiet place.",
      },
      {
        japanese: "おもしろいひとですね。",
        romaji: "Omoshiroi hito desu ne.",
        english: "They're an interesting person, aren't they?",
      },
      {
        japanese: "たいせつなものです。",
        romaji: "Taisetsu na mono desu.",
        english: "It's an important thing.",
      },
      {
        japanese: "ちいさいみせでおいしいりょうりをたべました。",
        romaji: "Chiisai mise de oishii ryōri o tabemashita.",
        english: "I ate delicious food at a small shop.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "しゅうまつはどうでしたか？",
        romaji: "Shūmatsu wa dō deshita ka?",
        english: "How was the weekend?",
      },
      {
        speaker: "You",
        japanese: "とてもたのしかったです。きょうとにいきました。",
        romaji: "Totemo tanoshikatta desu. Kyōto ni ikimashita.",
        english: "It was very fun. I went to Kyoto.",
      },
      {
        speaker: "Tanaka",
        japanese: "きょうとはどうでしたか？",
        romaji: "Kyōto wa dō deshita ka?",
        english: "How was Kyoto?",
      },
      {
        speaker: "You",
        japanese: "きれいなところでした。おてらがゆうめいです。",
        romaji: "Kirei na tokoro deshita. Otera ga yūmei desu.",
        english: "It was a beautiful place. The temples are famous.",
      },
      {
        speaker: "Tanaka",
        japanese: "たべものはどうでしたか？",
        romaji: "Tabemono wa dō deshita ka?",
        english: "How was the food?",
      },
      {
        speaker: "You",
        japanese:
          "おいしかったです！ちいさいみせでゆうめいなラーメンをたべました。",
        romaji:
          "Oishikatta desu! Chiisai mise de yūmei na rāmen o tabemashita.",
        english:
          "It was delicious! I ate famous ramen at a small shop.",
      },
    ],
    practicePrompts: [
      "Conjugate しずか through all four forms: しずかです → しずかじゃないです → しずかでした → しずかじゃなかったです",
      "Build adj+noun phrases: おおきいいぬ, ちいさいねこ, しずかなところ, ゆうめいなみせ",
      "Describe your weekend: しゅうまつは___でした (たのしかった / よかった)",
      "Practice どうでしたか questions: ___はどうでしたか？ — ___でした",
      "Compare い vs な noun modification: [い-adj] + noun vs [な-adj]な + noun",
    ],
    languageInsight: {
      title: "Adjective + Noun: The な Connection",
      content:
        "When adjectives modify nouns, the two families reveal their true nature. い-adjectives connect directly to the noun: おおきい + いぬ = おおきいいぬ (big dog). The い stays intact. な-adjectives need a connector particle — な: しずか + な + ところ = しずかなところ (quiet place). This な is exactly why they're called な-adjectives. Think of な as glue between the adjective and noun. In predicate position (___です), both types look similar. But before a noun, い-adjectives go bare while な-adjectives always need their な glue.",
    },
    tutorNote:
      "Today combines な-adjective conjugation with noun modification. For な-adjective conjugation, です does all the work: じゃないです (negative), でした (past), じゃなかったです (past negative). For modifying nouns, the rule is clean: い-adjectives keep their い before nouns (おおきいいぬ), な-adjectives insert な (きれいなはな). Practice building descriptive phrases: ゆうめいなレストラン, おいしいりょうり, しずかなまち, あたらしいみせ.",
    quickReference:
      "な-adj conjugation: です → じゃないです (neg) → でした (past) → じゃなかったです (past neg) | Noun modification: い-adj + noun (おおきいいぬ) | な-adj + な + noun (しずかなところ) | ところ=place | ひと=person | もの=thing",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 39 — Describing Things and Places",
      listenFor:
        "Adjective + noun combinations in natural speech. Listen for きれいなところ, おいしいりょうり, ゆうめいなひと and notice the な connector with な-adjectives.",
    },
  },

  {
    day: 40,
    dayType: "vocab-expansion",
    title: "Adjective Expansion",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Learn 10 new adjectives — a mix of い-adjectives and な-adjectives",
      "Describe prices, difficulty, personality, and atmosphere",
      "Practice conjugating new adjectives through all four forms",
      "Link adjectives with くて (い-adj) and で (な-adj) for compound descriptions",
    ],
    usesPatterns: [21, 22],
    vocabulary: [
      {
        japanese: "あたらしい",
        romaji: "atarashii",
        english: "new",
        fitsPattern: [21],
        mnemonic:
          "'Ah-tah-rah-shee' — 'a tar-a-sheen' — a new shiny surface",
      },
      {
        japanese: "ふるい",
        romaji: "furui",
        english: "old (things, not people)",
        fitsPattern: [21],
        mnemonic:
          "'Foo-roo-ee' — 'for you, eww' — this old thing is worn out",
      },
      {
        japanese: "たかい",
        romaji: "takai",
        english: "expensive / tall / high",
        fitsPattern: [21],
        mnemonic:
          "'Tah-kah-ee' — sounds like 'tycoon' — expensive luxury taste",
      },
      {
        japanese: "やすい",
        romaji: "yasui",
        english: "cheap / inexpensive",
        fitsPattern: [21],
        mnemonic:
          "'Yah-soo-ee' — 'yes we' got a bargain — it's cheap!",
      },
      {
        japanese: "むずかしい",
        romaji: "muzukashii",
        english: "difficult",
        fitsPattern: [21],
        mnemonic:
          "'Moo-zoo-kah-shee' — a 'moose' stuck in a 'kazoo' — a difficult situation",
      },
      {
        japanese: "にぎやか",
        romaji: "nigiyaka",
        english: "lively / bustling",
        fitsPattern: [22],
        mnemonic:
          "'Nee-gee-yah-kah' — 'knee-gear yakker' — a bustling, talkative marketplace",
      },
      {
        japanese: "ひま",
        romaji: "hima",
        english: "free / not busy",
        fitsPattern: [22],
        mnemonic:
          "'Hee-mah' — 'he, ma' — he and ma have nothing to do — free time",
      },
      {
        japanese: "しんせつ",
        romaji: "shinsetsu",
        english: "kind / helpful",
        fitsPattern: [22],
        mnemonic:
          "'Shin-set-sue' — 'shin set' gently by a kind nurse who's careful with you",
      },
      {
        japanese: "ながい",
        romaji: "nagai",
        english: "long",
        fitsPattern: [21],
        mnemonic:
          "'Nah-gah-ee' — 'nah, guy' — this road is too long to walk",
      },
      {
        japanese: "みじかい",
        romaji: "mijikai",
        english: "short (length)",
        fitsPattern: [21],
        mnemonic:
          "'Mee-jee-kah-ee' — 'me jee, kai' — short and quick like a nickname",
      },
    ],
    examples: [
      {
        japanese: "あたらしいくつをかいました。",
        romaji: "Atarashii kutsu o kaimashita.",
        english: "I bought new shoes.",
      },
      {
        japanese: "このでんしゃはふるいです。",
        romaji: "Kono densha wa furui desu.",
        english: "This train is old.",
      },
      {
        japanese: "とうきょうはたかいです。",
        romaji: "Tōkyō wa takai desu.",
        english: "Tokyo is expensive.",
      },
      {
        japanese: "このレストランはやすくておいしいです。",
        romaji: "Kono resutoran wa yasukute oishii desu.",
        english: "This restaurant is cheap and delicious.",
      },
      {
        japanese: "かんじはむずかしいです。",
        romaji: "Kanji wa muzukashii desu.",
        english: "Kanji is difficult.",
      },
      {
        japanese: "しぶやはにぎやかなところです。",
        romaji: "Shibuya wa nigiyaka na tokoro desu.",
        english: "Shibuya is a lively place.",
      },
      {
        japanese: "あしたはひまですか？",
        romaji: "Ashita wa hima desu ka?",
        english: "Are you free tomorrow?",
      },
      {
        japanese: "にほんじんはしんせつです。",
        romaji: "Nihonjin wa shinsetsu desu.",
        english: "Japanese people are kind.",
      },
    ],
    dialogue: [
      {
        speaker: "Friend",
        japanese: "あたらしいレストランにいきましょう。",
        romaji: "Atarashii resutoran ni ikimashō.",
        english: "Let's go to a new restaurant.",
      },
      {
        speaker: "You",
        japanese: "いいですね。たかいですか？",
        romaji: "Ii desu ne. Takai desu ka?",
        english: "Sounds good. Is it expensive?",
      },
      {
        speaker: "Friend",
        japanese: "いいえ、やすいです。でもおいしいです。",
        romaji: "Iie, yasui desu. Demo oishii desu.",
        english: "No, it's cheap. But it's delicious.",
      },
      {
        speaker: "You",
        japanese: "どんなところですか？",
        romaji: "Donna tokoro desu ka?",
        english: "What kind of place is it?",
      },
      {
        speaker: "Friend",
        japanese: "ちいさいですけど、しんせつなひとがいます。",
        romaji: "Chiisai desu kedo, shinsetsu na hito ga imasu.",
        english: "It's small, but there are kind people there.",
      },
      {
        speaker: "You",
        japanese: "たのしみです！",
        romaji: "Tanoshimi desu!",
        english: "I'm looking forward to it!",
      },
    ],
    practicePrompts: [
      "Describe your neighborhood: ___は___です (にぎやか / しずか / べんり)",
      "Compare old and new: ___はふるいです。___はあたらしいです。",
      "Talk about prices: ___はたかいです / やすいです",
      "Describe difficulty: ___はむずかしいです / かんたんです",
      "Use ひま to make plans: あしたはひまですか？ — はい、ひまです。",
    ],
    languageInsight: {
      title: "Linking Adjectives: The くて/で Connection",
      content:
        "When you want to say 'cheap AND delicious,' Japanese links adjectives with a special form. For い-adjectives: drop い, add くて — やすい→やすくて. For な-adjectives: add で — しずか→しずかで. So やすくておいしいです means 'it's cheap and delicious.' しずかできれいです means 'it's quiet and beautiful.' You can stack multiple descriptions: おおきくてあたらしくてきれいないえ (a big, new, beautiful house). Only the final adjective gets the full です ending.",
    },
    tutorNote:
      "Ten new adjectives doubles your descriptive power. The most useful pairs for daily life: たかい/やすい (expensive/cheap), あたらしい/ふるい (new/old), むずかしい/かんたん (difficult/easy), にぎやか/しずか (lively/quiet). Japanese naturally groups adjectives in contrasting pairs. Try describing the same category in opposite ways: とうきょうはたかいです。おおさかはやすいです. Also practice the linking form: やすくておいしいレストラン.",
    quickReference:
      "New い-adj: あたらしい=new | ふるい=old | たかい=expensive | やすい=cheap | むずかしい=difficult | ながい=long | みじかい=short | New な-adj: にぎやか=lively | ひま=free | しんせつ=kind | Linking: い→くて | な→で",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 40 — Describing Places and People",
      listenFor:
        "Linked adjectives using くて and で. Notice how speakers naturally chain two or three descriptions when talking about restaurants, cities, and people.",
    },
  },

  {
    day: 41,
    dayType: "new-pattern",
    title: "Pattern #23: I like ___",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #23: ___がすきです (I like ___)",
      "Learn vocabulary for hobbies and favorite foods",
      "Express degrees of liking: すき, だいすき, きらい, だいきらい",
      "Ask and answer questions about preferences using がすきですか",
    ],
    pattern: {
      number: 23,
      japanese: "___がすきです",
      english: "I like ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "The thing you like — a noun or verb phrase",
        },
        {
          text: "が",
          role: "particle",
          explanation:
            "Subject marker — marks the object of liking (not を!)",
        },
        {
          text: "すき",
          role: "fixed",
          explanation: "Liked / favorite — a な-adjective meaning 'liked'",
        },
        {
          text: "です",
          role: "fixed",
          explanation: "Polite copula",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "りょうり",
        romaji: "ryōri",
        english: "cooking / cuisine",
        fitsPattern: [23],
        mnemonic:
          "'Ryoh-ree' — 'real re-' creation in the kitchen — cooking is an art",
      },
      {
        japanese: "サッカー",
        romaji: "sakkā",
        english: "soccer",
        fitsPattern: [23],
        mnemonic:
          "'Sahk-kah' — sounds just like 'soccer' with Japanese pronunciation",
      },
      {
        japanese: "おんがく",
        romaji: "ongaku",
        english: "music",
        fitsPattern: [23],
        mnemonic:
          "'On-gah-koo' — 'on, go, cool' — turn on some cool music",
      },
      {
        japanese: "ゲーム",
        romaji: "gēmu",
        english: "games / video games",
        fitsPattern: [23],
        mnemonic:
          "'Gay-moo' — 'game' in Japanese pronunciation — easy loanword",
      },
      {
        japanese: "チョコレート",
        romaji: "chokorēto",
        english: "chocolate",
        fitsPattern: [23],
        mnemonic:
          "'Cho-ko-ray-to' — 'chocolate' stretched into Japanese syllables",
      },
      {
        japanese: "いちご",
        romaji: "ichigo",
        english: "strawberry",
        fitsPattern: [23],
        mnemonic:
          "'Ee-chee-go' — 'itchy go' — strawberry seeds make my tongue itchy",
      },
      {
        japanese: "どくしょ",
        romaji: "dokusho",
        english: "reading (as a hobby)",
        fitsPattern: [23],
        mnemonic:
          "'Doh-koo-shoh' — 'doc show' — a doctor's reading show of medical journals",
      },
      {
        japanese: "さんぽ",
        romaji: "sanpo",
        english: "stroll / walk (leisure)",
        fitsPattern: [23],
        mnemonic:
          "'Sahn-poh' — 'sun po-wer' — strolling in the sunshine",
      },
    ],
    examples: [
      {
        japanese: "おんがくがすきです。",
        romaji: "Ongaku ga suki desu.",
        english: "I like music.",
      },
      {
        japanese: "サッカーがだいすきです。",
        romaji: "Sakkā ga daisuki desu.",
        english: "I love soccer.",
      },
      {
        japanese: "チョコレートがすきですか？",
        romaji: "Chokorēto ga suki desu ka?",
        english: "Do you like chocolate?",
      },
      {
        japanese: "いちごがいちばんすきです。",
        romaji: "Ichigo ga ichiban suki desu.",
        english: "I like strawberries the most.",
      },
      {
        japanese: "りょうりがすきです。よくつくります。",
        romaji: "Ryōri ga suki desu. Yoku tsukurimasu.",
        english: "I like cooking. I cook often.",
      },
      {
        japanese: "どくしょがすきですが、ゲームもすきです。",
        romaji: "Dokusho ga suki desu ga, gēmu mo suki desu.",
        english: "I like reading, but I also like games.",
      },
      {
        japanese: "さむいてんきはすきじゃないです。",
        romaji: "Samui tenki wa suki ja nai desu.",
        english: "I don't like cold weather.",
      },
      {
        japanese: "まいにちさんぽをします。さんぽがだいすきです。",
        romaji: "Mainichi sanpo o shimasu. Sanpo ga daisuki desu.",
        english: "I take a walk every day. I love walking.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "しゅみはなんですか？",
        romaji: "Shumi wa nan desu ka?",
        english: "What are your hobbies?",
      },
      {
        speaker: "You",
        japanese: "おんがくとりょうりがすきです。",
        romaji: "Ongaku to ryōri ga suki desu.",
        english: "I like music and cooking.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね。なにをつくりますか？",
        romaji: "Ii desu ne. Nani o tsukurimasu ka?",
        english: "Nice. What do you cook?",
      },
      {
        speaker: "You",
        japanese: "にほんりょうりがすきです。カレーをよくつくります。",
        romaji: "Nihon ryōri ga suki desu. Karē o yoku tsukurimasu.",
        english: "I like Japanese food. I often make curry.",
      },
      {
        speaker: "Tanaka",
        japanese: "わたしもカレーがだいすきです！",
        romaji: "Watashi mo karē ga daisuki desu!",
        english: "I love curry too!",
      },
      {
        speaker: "You",
        japanese: "こんどいっしょにつくりましょう。",
        romaji: "Kondo issho ni tsukurimashō.",
        english: "Let's make it together next time.",
      },
    ],
    practicePrompts: [
      "List three things you like: ___がすきです。___がすきです。___もすきです。",
      "Express strong liking: ___がだいすきです！",
      "Say what you don't like: ___はすきじゃないです",
      "Ask someone's preference: ___がすきですか？",
      "Talk about your hobbies: しゅみは___です。___がすきです。",
    ],
    languageInsight: {
      title: "Why すき Uses が, Not を",
      content:
        "In English, 'like' is a verb that takes a direct object: 'I like coffee.' But in Japanese, すき is a な-adjective meaning 'liked' or 'dear.' The sentence コーヒーがすきです literally means 'Coffee is liked (by me).' The coffee is the subject doing the 'being liked,' so it takes が (subject marker), not を (object marker). This is why Japanese says ___がすきです rather than ___をすきです. The same logic applies to きらい (disliked), じょうず (skilled at), and へた (unskilled at) — all use が because they describe a state of the subject.",
    },
    tutorNote:
      "すき is one of the most useful words in Japanese conversation. Remember: it's a な-adjective, not a verb. The thing you like takes が, not を. Scale of liking: だいすき (love) > すき (like) > すきじゃない (don't like) > きらい (dislike) > だいきらい (hate). In practice, Japanese speakers soften dislikes — すきじゃないです (don't like) is much more polite than きらいです (dislike). Start with your genuine interests: おんがくがすきです, りょうりがすきです.",
    quickReference:
      "Pattern #23: [thing]がすきです = I like [thing] | だいすき=love | すきじゃない=don't like | きらい=dislike | りょうり=cooking | おんがく=music | サッカー=soccer | ゲーム=games | どくしょ=reading | さんぽ=stroll",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 41 — Talking About Likes",
      listenFor:
        "The が particle before すき. Notice how speakers ask しゅみはなんですか and answer with ___がすきです. Listen for だいすき when someone expresses strong enthusiasm.",
    },
  },

  {
    day: 42,
    dayType: "new-pattern",
    title: "Pattern #24: I want ___",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #24: ___がほしいです (I want [thing])",
      "Learn vocabulary for common wants and needs",
      "Understand that ほしい is an い-adjective describing a state of wanting",
      "Express wants politely and ask others about their wants",
    ],
    pattern: {
      number: 24,
      japanese: "___がほしいです",
      english: "I want [thing]",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "The thing you want — must be a noun",
        },
        {
          text: "が",
          role: "particle",
          explanation:
            "Subject marker — the wanted thing is the grammatical subject",
        },
        {
          text: "ほしい",
          role: "fixed",
          explanation: "Wanted / desired — an い-adjective meaning 'is desired'",
        },
        {
          text: "です",
          role: "fixed",
          explanation: "Polite copula",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "じかん",
        romaji: "jikan",
        english: "time",
        fitsPattern: [24],
        mnemonic:
          "'Jee-kahn' — 'jee, can' I have more time? Never enough!",
      },
      {
        japanese: "おかね",
        romaji: "okane",
        english: "money",
        fitsPattern: [24],
        mnemonic:
          "'Oh-kah-neh' — 'oh, can I?' have some money please",
      },
      {
        japanese: "やすみ",
        romaji: "yasumi",
        english: "break / holiday / day off",
        fitsPattern: [24],
        mnemonic:
          "'Yah-soo-mee' — 'yes, me!' I want a holiday for me!",
      },
      {
        japanese: "くるま",
        romaji: "kuruma",
        english: "car",
        fitsPattern: [24],
        mnemonic:
          "'Koo-roo-mah' — a 'crew-ma' drives the car for the crew",
      },
      {
        japanese: "パソコン",
        romaji: "pasokon",
        english: "computer / PC",
        fitsPattern: [24],
        mnemonic:
          "'Pah-soh-kon' — short for 'personal computer' — パーソナルコンピューター",
      },
      {
        japanese: "ペット",
        romaji: "petto",
        english: "pet",
        fitsPattern: [24],
        mnemonic:
          "'Pet-toh' — 'pet' with Japanese pronunciation — easy loanword",
      },
      {
        japanese: "きっぷ",
        romaji: "kippu",
        english: "ticket",
        fitsPattern: [24],
        mnemonic:
          "'Keep-poo' — 'keep' your ticket safe for the train ride",
      },
      {
        japanese: "プレゼント",
        romaji: "purezento",
        english: "present / gift",
        fitsPattern: [24],
        mnemonic:
          "'Poo-reh-zen-toh' — 'present' in Japanese pronunciation",
      },
    ],
    examples: [
      {
        japanese: "あたらしいパソコンがほしいです。",
        romaji: "Atarashii pasokon ga hoshii desu.",
        english: "I want a new computer.",
      },
      {
        japanese: "じかんがほしいです。",
        romaji: "Jikan ga hoshii desu.",
        english: "I want time.",
      },
      {
        japanese: "やすみがほしいです。いそがしいです。",
        romaji: "Yasumi ga hoshii desu. Isogashii desu.",
        english: "I want a day off. I'm busy.",
      },
      {
        japanese: "なにがほしいですか？",
        romaji: "Nani ga hoshii desu ka?",
        english: "What do you want?",
      },
      {
        japanese: "たんじょうびにプレゼントがほしいです。",
        romaji: "Tanjōbi ni purezento ga hoshii desu.",
        english: "I want a present for my birthday.",
      },
      {
        japanese: "おかねはほしくないです。じかんがほしいです。",
        romaji: "Okane wa hoshiku nai desu. Jikan ga hoshii desu.",
        english: "I don't want money. I want time.",
      },
      {
        japanese: "ちいさいくるまがほしいです。",
        romaji: "Chiisai kuruma ga hoshii desu.",
        english: "I want a small car.",
      },
      {
        japanese: "とうきょうまでのきっぷがほしいです。",
        romaji: "Tōkyō made no kippu ga hoshii desu.",
        english: "I want a ticket to Tokyo.",
      },
    ],
    practicePrompts: [
      "Say three things you want: ___がほしいです",
      "Say what you don't want: ___はほしくないです",
      "Ask someone what they want: なにがほしいですか？",
      "Combine with adjectives: あたらしい___がほしいです / おおきい___がほしいです",
    ],
    languageInsight: {
      title: "Wanting Things vs. Wanting Actions",
      content:
        "Japanese makes a clean distinction between wanting a thing and wanting to do something. ほしい (Pattern #24) is only for nouns — wanting objects. パソコンがほしい (I want a computer). For wanting to DO something, Japanese uses a completely different form: ___たい (Pattern #25, coming tomorrow). たべたい (I want to eat). You cannot say たべるがほしい. This split between 'want-a-thing' and 'want-to-do' is cleaner than English, where 'want' does both jobs.",
    },
    tutorNote:
      "ほしい works exactly like すき — the wanted thing takes が, and ほしい is an い-adjective. It conjugates regularly: ほしくない (don't want), ほしかった (wanted), ほしくなかった (didn't want). Cultural note: using ほしい directly about other people can sound presumptuous. なにがほしいですか (what do you want?) is fine for close relationships, but for strangers or superiors, Japanese prefers softer forms. For now, use it freely for your own wants.",
    quickReference:
      "Pattern #24: [thing]がほしいです = I want [thing] | ほしくない=don't want | ほしかった=wanted | じかん=time | おかね=money | やすみ=holiday | くるま=car | パソコン=PC | ペット=pet | きっぷ=ticket | プレゼント=gift",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 42 — Expressing Wants",
      listenFor:
        "The がほしいです pattern in natural conversation. Notice how speakers often soften wants with ちょっと or すこし: ちょっとやすみがほしいです (I kind of want a break).",
    },
  },

  {
    day: 43,
    dayType: "new-pattern",
    title: "Pattern #25: I want to ___",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #25: [verb stem]たいです (I want to ___)",
      "Convert ます-form verbs to たい-form by replacing ます with たい",
      "Express desires for actions: eating, going, seeing, buying",
      "Combine たい with destinations and objects for complete sentences",
    ],
    pattern: {
      number: 25,
      japanese: "___たいです",
      english: "I want to ___",
      breakdown: [
        {
          text: "___",
          role: "verb",
          explanation:
            "Verb stem — the part before ます (たべます→たべ, いきます→いき)",
        },
        {
          text: "たい",
          role: "fixed",
          explanation:
            "Want to — attaches to verb stem; conjugates like an い-adjective",
        },
        {
          text: "です",
          role: "fixed",
          explanation: "Polite copula",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "りょこう",
        romaji: "ryokō",
        english: "travel / trip",
        fitsPattern: [25],
        mnemonic:
          "'Ryoh-koh' — 'rio, go!' — let's travel to Rio!",
      },
      {
        japanese: "やすみます",
        romaji: "yasumimasu",
        english: "to rest / to take a break (polite)",
        fitsPattern: [25],
        mnemonic:
          "'Yah-soo-mee-mahs' — 'yes, me, ma!' — please let me rest!",
      },
      {
        japanese: "あそびます",
        romaji: "asobimasu",
        english: "to play / to hang out (polite)",
        fitsPattern: [25],
        mnemonic:
          "'Ah-soh-bee-mahs' — 'also be' out playing and having fun",
      },
      {
        japanese: "ならいます",
        romaji: "naraimasu",
        english: "to learn / to take lessons (polite)",
        fitsPattern: [25],
        mnemonic:
          "'Nah-rye-mahs' — 'nah, rye' bread — I want to learn how to bake it",
      },
      {
        japanese: "かえります",
        romaji: "kaerimasu",
        english: "to go home / to return (polite)",
        fitsPattern: [25],
        mnemonic:
          "'Kah-eh-ree-mahs' — 'cry, re-' turn home — homesick and want to return",
      },
      {
        japanese: "のります",
        romaji: "norimasu",
        english: "to ride / to board (polite)",
        fitsPattern: [25],
        mnemonic:
          "'Noh-ree-mahs' — 'no re-' fusal to ride the rollercoaster!",
      },
      {
        japanese: "うみ",
        romaji: "umi",
        english: "sea / ocean",
        fitsPattern: [25],
        mnemonic:
          "'Oo-mee' — 'ooh, me!' I want to go to the sea!",
      },
      {
        japanese: "やま",
        romaji: "yama",
        english: "mountain",
        fitsPattern: [25],
        mnemonic:
          "'Yah-mah' — 'yah, ma!' look at that big mountain!",
      },
    ],
    examples: [
      {
        japanese: "にほんにいきたいです。",
        romaji: "Nihon ni ikitai desu.",
        english: "I want to go to Japan.",
      },
      {
        japanese: "すしをたべたいです。",
        romaji: "Sushi o tabetai desu.",
        english: "I want to eat sushi.",
      },
      {
        japanese: "うみでおよぎたいです。",
        romaji: "Umi de oyogitai desu.",
        english: "I want to swim in the ocean.",
      },
      {
        japanese: "にほんごをならいたいです。",
        romaji: "Nihongo o naraitai desu.",
        english: "I want to learn Japanese.",
      },
      {
        japanese: "きょうははやくかえりたいです。",
        romaji: "Kyō wa hayaku kaeritai desu.",
        english: "I want to go home early today.",
      },
      {
        japanese: "しんかんせんにのりたいです。",
        romaji: "Shinkansen ni noritai desu.",
        english: "I want to ride the bullet train.",
      },
      {
        japanese: "なにをしたいですか？",
        romaji: "Nani o shitai desu ka?",
        english: "What do you want to do?",
      },
      {
        japanese: "やすみたいです。つかれました。",
        romaji: "Yasumitai desu. Tsukaremashita.",
        english: "I want to rest. I'm tired.",
      },
    ],
    dialogue: [
      {
        speaker: "Friend",
        japanese: "なつやすみにどこにいきたいですか？",
        romaji: "Natsuyasumi ni doko ni ikitai desu ka?",
        english: "Where do you want to go for summer vacation?",
      },
      {
        speaker: "You",
        japanese: "おきなわにいきたいです。うみでおよぎたいです。",
        romaji: "Okinawa ni ikitai desu. Umi de oyogitai desu.",
        english: "I want to go to Okinawa. I want to swim in the ocean.",
      },
      {
        speaker: "Friend",
        japanese: "いいですね！なにをたべたいですか？",
        romaji: "Ii desu ne! Nani o tabetai desu ka?",
        english: "Nice! What do you want to eat?",
      },
      {
        speaker: "You",
        japanese: "おきなわのりょうりをたべたいです。ゴーヤチャンプルーがたべたいです。",
        romaji:
          "Okinawa no ryōri o tabetai desu. Gōya chanpurū ga tabetai desu.",
        english:
          "I want to eat Okinawan food. I want to eat goya champuru.",
      },
      {
        speaker: "Friend",
        japanese: "わたしもいきたいです！いっしょにいきましょう。",
        romaji: "Watashi mo ikitai desu! Issho ni ikimashō.",
        english: "I want to go too! Let's go together.",
      },
    ],
    practicePrompts: [
      "Convert these verbs to たい form: たべます→? のみます→? いきます→? みます→?",
      "Say where you want to travel: ___にいきたいです",
      "Say what you want to eat tonight: ___をたべたいです",
      "Express what you want to learn: ___をならいたいです",
      "Make a bucket list: ___たいです (three things you want to do)",
    ],
    languageInsight: {
      title: "たい Conjugates Like an い-Adjective",
      content:
        "Even though たい attaches to verbs, the resulting word behaves like an い-adjective. たべたい (want to eat) conjugates just like おおきい: たべたくない (don't want to eat), たべたかった (wanted to eat), たべたくなかった (didn't want to eat). This makes sense intuitively — wanting is a feeling, a state of mind, which is what adjectives describe. Also note: たい is personal. You can freely say わたしは___たいです about yourself, but asking about others is softer with ___たいですか in close relationships only.",
    },
    tutorNote:
      "The たい form is incredibly useful and perfectly regular. Take any ます-form verb, drop ます, add たい. たべます→たべたい, のみます→のみたい, いきます→いきたい, みます→みたい. It conjugates like an い-adjective, so negative is たべたくない, past is たべたかった. Combine with particles you already know for rich sentences: にほんに いきたいです (want to go TO Japan), すしを たべたいです (want to eat sushi).",
    quickReference:
      "Pattern #25: [verb stem]たいです = I want to [verb] | たべます→たべたい | のみます→のみたい | いきます→いきたい | Neg: たべたくない | Past: たべたかった | りょこう=travel | うみ=sea | やま=mountain",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 43 — Expressing What You Want to Do",
      listenFor:
        "The たいです ending on verbs. Notice how speakers pair it with destinations (___にいきたい) and objects (___をたべたい). Listen for なにをしたいですか as a common conversation starter.",
    },
  },

  {
    day: 44,
    dayType: "new-pattern",
    title: "Pattern #26: Comparisons",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #26: AよりBのほうが___です (B is more ___ than A)",
      "Learn vocabulary for seasons, transportation, and comparison",
      "Ask comparison questions with どちらのほうが___ですか",
      "Express preferences between two options",
    ],
    pattern: {
      number: 26,
      japanese: "___より___のほうが___です",
      english: "B is more ___ than A",
      breakdown: [
        {
          text: "___より",
          role: "particle",
          explanation: "A より — 'than A' — the lesser item comes first",
        },
        {
          text: "___のほうが",
          role: "particle",
          explanation:
            "B のほうが — 'B is more' — the greater item + direction marker",
        },
        {
          text: "___です",
          role: "slot",
          explanation: "The adjective being compared + polite copula",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "はる",
        romaji: "haru",
        english: "spring",
        fitsPattern: [26],
        mnemonic:
          "'Hah-roo' — 'hurrah!' for spring flowers blooming",
      },
      {
        japanese: "なつ",
        romaji: "natsu",
        english: "summer",
        fitsPattern: [26],
        mnemonic:
          "'Nah-tsoo' — 'not sue' anyone in summer — too hot to fight",
      },
      {
        japanese: "あき",
        romaji: "aki",
        english: "autumn / fall",
        fitsPattern: [26],
        mnemonic:
          "'Ah-kee' — 'ah, key' to beautiful red leaves is autumn",
      },
      {
        japanese: "ふゆ",
        romaji: "fuyu",
        english: "winter",
        fitsPattern: [26],
        mnemonic:
          "'Foo-yoo' — 'phew, you' are cold in winter!",
      },
      {
        japanese: "でんしゃ",
        romaji: "densha",
        english: "train",
        fitsPattern: [26],
        mnemonic:
          "'Den-shah' — 'den, shah' — the train station is the den of the transport shah",
      },
      {
        japanese: "ひこうき",
        romaji: "hikōki",
        english: "airplane",
        fitsPattern: [26],
        mnemonic:
          "'Hee-koh-kee' — 'he co-key' — he has the co-pilot key to the airplane",
      },
      {
        japanese: "どちら",
        romaji: "dochira",
        english: "which one (of two)",
        fitsPattern: [26],
        mnemonic:
          "'Doh-chee-rah' — 'do-cheer-ah' — which one do you cheer for?",
      },
      {
        japanese: "いちばん",
        romaji: "ichiban",
        english: "number one / most / best",
        fitsPattern: [26],
        mnemonic:
          "'Ee-chee-bahn' — 'itchy ban' — number one on the banned list for being itchy",
      },
    ],
    examples: [
      {
        japanese: "なつよりふゆのほうがすきです。",
        romaji: "Natsu yori fuyu no hō ga suki desu.",
        english: "I like winter more than summer.",
      },
      {
        japanese: "でんしゃよりひこうきのほうがはやいです。",
        romaji: "Densha yori hikōki no hō ga hayai desu.",
        english: "Airplanes are faster than trains.",
      },
      {
        japanese: "とうきょうよりきょうとのほうがしずかです。",
        romaji: "Tōkyō yori Kyōto no hō ga shizuka desu.",
        english: "Kyoto is quieter than Tokyo.",
      },
      {
        japanese: "コーヒーとおちゃと、どちらのほうがすきですか？",
        romaji: "Kōhī to ocha to, dochira no hō ga suki desu ka?",
        english: "Coffee or tea, which do you like more?",
      },
      {
        japanese: "おちゃのほうがすきです。",
        romaji: "Ocha no hō ga suki desu.",
        english: "I like tea more.",
      },
      {
        japanese: "にほんごよりちゅうごくごのほうがむずかしいです。",
        romaji: "Nihongo yori chūgokugo no hō ga muzukashii desu.",
        english: "Chinese is more difficult than Japanese.",
      },
      {
        japanese: "きせつのなかではるがいちばんすきです。",
        romaji: "Kisetsu no naka de haru ga ichiban suki desu.",
        english: "Among the seasons, I like spring the most.",
      },
      {
        japanese: "にくよりさかなのほうがすきです。",
        romaji: "Niku yori sakana no hō ga suki desu.",
        english: "I like fish more than meat.",
      },
    ],
    practicePrompts: [
      "Compare two seasons: ___より___のほうが___です",
      "Compare two foods: ___より___のほうがおいしいです",
      "Ask a preference question: ___と___と、どちらのほうが___ですか？",
      "Say what you like most: ___がいちばんすきです",
      "Compare two cities: ___より___のほうが___です",
    ],
    languageInsight: {
      title: "Japanese Comparison: The Opposite Order from English",
      content:
        "In English, comparisons go: 'B is more ___ than A' — the winner comes first. In Japanese, it's reversed: AよりBのほうが___です — the lesser item (A) comes first with より (than), and the winner (B) follows with のほうが (more so). Think of it as 'Compared to A, B is more ___.' Japanese also has いちばん (number one) for superlatives: ___がいちばん___です means '___ is the most ___.' No separate '-est' suffix needed — just 'number one!'",
    },
    tutorNote:
      "The comparison pattern has three parts: A より (than A) + B のほうが (B is more) + adjective です. The tricky part is word order — the 'loser' comes first. なつよりふゆのほうがすきです = 'More than summer, winter I prefer.' For questions, use どちら: コーヒーとおちゃと、どちらのほうがすきですか? For 'the most,' use いちばん: はるがいちばんすきです. You can also drop より for simpler sentences: Bのほうがすきです (I prefer B).",
    quickReference:
      "Pattern #26: AよりBのほうが[adj]です = B is more [adj] than A | Question: どちらのほうが___ですか？ | Superlative: いちばん___です | はる=spring | なつ=summer | あき=autumn | ふゆ=winter | でんしゃ=train | ひこうき=airplane",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 44 — Making Comparisons",
      listenFor:
        "The より...のほうが pattern and どちら questions. Notice how speakers often shorten to just のほうが when the context is clear, dropping the より clause.",
    },
  },

  {
    day: 45,
    dayType: "new-pattern",
    title: "Pattern #27: Casual Speech",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #27: Casual sentence endings (だ, じゃない, dropping ます/です)",
      "Understand when casual speech is appropriate among friends and peers",
      "Convert polite forms to casual: です→だ, じゃないです→じゃない, ます→dictionary form",
      "Recognize casual speech in dialogue and media",
    ],
    pattern: {
      number: 27,
      japanese: "___だ / ___じゃない / [dictionary form]",
      english: "Casual speech forms",
      breakdown: [
        {
          text: "___だ",
          role: "fixed",
          explanation:
            "Casual copula — replaces です for nouns and な-adjectives",
        },
        {
          text: "___じゃない",
          role: "fixed",
          explanation:
            "Casual negative — replaces じゃないです / ではありません",
        },
        {
          text: "[dict. form]",
          role: "verb",
          explanation:
            "Dictionary form of verb — replaces ます form (たべる, いく, のむ)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "すごい",
        romaji: "sugoi",
        english: "amazing / awesome",
        fitsPattern: [27],
        mnemonic:
          "'Soo-goy' — 'so good!' — the go-to casual exclamation",
      },
      {
        japanese: "やばい",
        romaji: "yabai",
        english: "awesome / terrible / intense (slang)",
        fitsPattern: [27],
        mnemonic:
          "'Yah-bye' — 'yah, bye!' — so intense you want to run away (or stay!)",
      },
      {
        japanese: "まじ",
        romaji: "maji",
        english: "seriously? / for real?",
        fitsPattern: [27],
        mnemonic:
          "'Mah-jee' — 'ma, gee!' — seriously?! like magic!",
      },
      {
        japanese: "うそ",
        romaji: "uso",
        english: "lie / no way!",
        fitsPattern: [27],
        mnemonic:
          "'Oo-soh' — 'ooh, so' not true — no way!",
      },
      {
        japanese: "ほんとう",
        romaji: "hontō",
        english: "really / truly / truth",
        fitsPattern: [27],
        mnemonic:
          "'Hohn-toh' — 'on to' the truth — is that really true?",
      },
      {
        japanese: "そうだね",
        romaji: "sō da ne",
        english: "that's right / yeah",
        fitsPattern: [27],
        mnemonic:
          "'Soh-dah-neh' — 'so done, eh?' — yeah, that's how it is",
      },
      {
        japanese: "だいじょうぶ",
        romaji: "daijōbu",
        english: "okay / all right / no problem",
        fitsPattern: [27],
        mnemonic:
          "'Die-joh-boo' — 'die? job? boo!' — everything is okay, don't worry",
      },
      {
        japanese: "たべる",
        romaji: "taberu",
        english: "to eat (casual / dictionary form)",
        fitsPattern: [27],
        mnemonic:
          "The dictionary form of たべます — used in casual speech instead of polite ます",
      },
    ],
    examples: [
      {
        japanese: "これ、おいしい！",
        romaji: "Kore, oishii!",
        english: "This is delicious! (casual — no です)",
      },
      {
        japanese: "あした、ひまだ。",
        romaji: "Ashita, hima da.",
        english: "I'm free tomorrow. (casual — だ replaces です)",
      },
      {
        japanese: "それ、べんりじゃない。",
        romaji: "Sore, benri ja nai.",
        english: "That's not convenient. (casual negative)",
      },
      {
        japanese: "きょう、すしたべる？",
        romaji: "Kyō, sushi taberu?",
        english: "Wanna eat sushi today? (casual — dictionary form)",
      },
      {
        japanese: "すごい！やばい！",
        romaji: "Sugoi! Yabai!",
        english: "Amazing! Awesome!",
      },
      {
        japanese: "まじ？うそでしょ！",
        romaji: "Maji? Uso desho!",
        english: "Seriously? No way!",
      },
      {
        japanese: "ほんとうにたのしかった。",
        romaji: "Hontō ni tanoshikatta.",
        english: "It was really fun. (casual — no です)",
      },
      {
        japanese: "だいじょうぶ？ — うん、だいじょうぶ。",
        romaji: "Daijōbu? — Un, daijōbu.",
        english: "Are you okay? — Yeah, I'm fine.",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "ねえ、きのうのえいがみた？",
        romaji: "Nee, kinō no eiga mita?",
        english: "Hey, did you see yesterday's movie?",
      },
      {
        speaker: "Kenji",
        japanese: "うん、みた！すごくおもしろかった。",
        romaji: "Un, mita! Sugoku omoshirokatta.",
        english: "Yeah, I saw it! It was really interesting.",
      },
      {
        speaker: "Yuki",
        japanese: "まじ？わたしもみたい。",
        romaji: "Maji? Watashi mo mitai.",
        english: "Seriously? I wanna see it too.",
      },
      {
        speaker: "Kenji",
        japanese: "あした、ひま？いっしょにみない？",
        romaji: "Ashita, hima? Issho ni minai?",
        english: "Free tomorrow? Wanna watch it together?",
      },
      {
        speaker: "Yuki",
        japanese: "いいね！いこう。",
        romaji: "Ii ne! Ikō.",
        english: "Sounds good! Let's go.",
      },
      {
        speaker: "Kenji",
        japanese: "じゃ、あしたさんじにえきで。",
        romaji: "Ja, ashita sanji ni eki de.",
        english: "Then, tomorrow at three at the station.",
      },
    ],
    practicePrompts: [
      "Convert to casual: これはおいしいです → これ、おいしい！",
      "Convert to casual: あしたはひまです → あした、ひまだ",
      "Convert to casual: すしをたべますか？ → すしたべる？",
      "Practice casual reactions: すごい！ まじ？ うそ！ やばい！",
      "Read the dialogue aloud and notice the rhythm difference from polite speech",
    ],
    languageInsight: {
      title: "Casual Japanese: The 'Original' Language",
      content:
        "The polite ます/です forms you learned first are actually additions to the language. Casual speech — using dictionary-form verbs (たべる, いく) and だ instead of です — is structurally the base form of Japanese. The ます/です layer was developed during the feudal era as a way to show respect to social superiors. Today, casual speech is used with friends, family, and peers, while polite speech is for strangers, superiors, and formal situations. Most anime, manga, and song lyrics use casual forms, which is why learning them unlocks Japanese media.",
    },
    tutorNote:
      "Casual speech isn't 'bad' Japanese — it's the natural form used between friends. The conversion rules: (1) です → だ for nouns and な-adj (がくせいです→がくせいだ), (2) い-adjectives drop です entirely (おいしいです→おいしい), (3) ます verbs become dictionary form (たべます→たべる, いきます→いく). For questions, just add rising intonation — no か needed: たべる？(wanna eat?). Don't use casual with strangers or seniors — it sounds rude. With friends, it sounds natural and warm.",
    quickReference:
      "Pattern #27: Casual forms | です→だ (noun/な-adj) | い-adj: drop です | ます→dictionary form | すごい=amazing | やばい=awesome | まじ=seriously | うそ=no way | ほんとう=really | そうだね=yeah | だいじょうぶ=okay",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 45 — Casual Conversation",
      listenFor:
        "The absence of です and ます in friend-to-friend speech. Compare how the same speaker switches to polite forms when talking to a stranger or superior. Listen for すごい, やばい, and まじ as casual reactions.",
    },
  },

  {
    day: 46,
    dayType: "new-pattern",
    title: "Pattern #28: I think ___",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Master Pattern #28: [casual sentence]とおもいます (I think ___)",
      "Embed any sentence inside とおもう to express opinions",
      "Learn adverbs for opinion strength: たぶん, きっと, ぜったい",
      "Soften statements with とおもいます for more natural Japanese",
    ],
    pattern: {
      number: 28,
      japanese: "___とおもいます",
      english: "I think ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation:
            "A complete sentence in casual form — the thought being expressed",
        },
        {
          text: "と",
          role: "particle",
          explanation: "Quotation particle — marks the preceding clause as the content of thinking",
        },
        {
          text: "おもいます",
          role: "verb",
          explanation:
            "To think (polite) — the main verb; casual form is おもう",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "たぶん",
        romaji: "tabun",
        english: "probably / maybe",
        fitsPattern: [28],
        mnemonic:
          "'Tah-boon' — 'tab on' — probably there's a tab on your browser for this",
      },
      {
        japanese: "きっと",
        romaji: "kitto",
        english: "surely / definitely (expectation)",
        fitsPattern: [28],
        mnemonic:
          "'Kit-toh' — 'kit to' success — I'm sure this kit will work!",
      },
      {
        japanese: "ちょっと",
        romaji: "chotto",
        english: "a little / slightly",
        fitsPattern: [28],
        mnemonic:
          "'Chot-toh' — 'chat oh' just a little chat, not a long one",
      },
      {
        japanese: "けっこう",
        romaji: "kekkō",
        english: "quite / fairly / surprisingly",
        fitsPattern: [28],
        mnemonic:
          "'Kek-koh' — 'cake, oh!' — it's quite good, this cake!",
      },
      {
        japanese: "ぜったい",
        romaji: "zettai",
        english: "absolutely / no matter what",
        fitsPattern: [28],
        mnemonic:
          "'Zet-tie' — 'set, tie!' — absolutely tie it down, no exceptions",
      },
      {
        japanese: "むり",
        romaji: "muri",
        english: "impossible / no way",
        fitsPattern: [28],
        mnemonic:
          "'Moo-ree' — 'mooring' a ship in a storm? Impossible!",
      },
      {
        japanese: "おもう",
        romaji: "omou",
        english: "to think (casual / dictionary form)",
        fitsPattern: [28],
        mnemonic:
          "'Oh-moh' — 'oh, mo-re' thought is needed — I think...",
      },
      {
        japanese: "でも",
        romaji: "demo",
        english: "but / however",
        mnemonic:
          "'Deh-moh' — 'demo, but...' — like showing a demo but there's a catch",
      },
    ],
    examples: [
      {
        japanese: "にほんごはおもしろいとおもいます。",
        romaji: "Nihongo wa omoshiroi to omoimasu.",
        english: "I think Japanese is interesting.",
      },
      {
        japanese: "あしたはあめだとおもいます。",
        romaji: "Ashita wa ame da to omoimasu.",
        english: "I think it will rain tomorrow.",
      },
      {
        japanese: "このレストランはたぶんたかいとおもいます。",
        romaji: "Kono resutoran wa tabun takai to omoimasu.",
        english: "I think this restaurant is probably expensive.",
      },
      {
        japanese: "きっとだいじょうぶだとおもいます。",
        romaji: "Kitto daijōbu da to omoimasu.",
        english: "I'm sure it will be okay.",
      },
      {
        japanese: "かんじはけっこうむずかしいとおもいます。",
        romaji: "Kanji wa kekkō muzukashii to omoimasu.",
        english: "I think kanji is quite difficult.",
      },
      {
        japanese: "それはむりだとおもいます。",
        romaji: "Sore wa muri da to omoimasu.",
        english: "I think that's impossible.",
      },
      {
        japanese: "このえいがはおもしろいとおもいますか？",
        romaji: "Kono eiga wa omoshiroi to omoimasu ka?",
        english: "Do you think this movie is interesting?",
      },
      {
        japanese: "にほんはきれいだとおもいます。",
        romaji: "Nihon wa kirei da to omoimasu.",
        english: "I think Japan is beautiful.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "にほんのせいかつはどうですか？",
        romaji: "Nihon no seikatsu wa dō desu ka?",
        english: "How is life in Japan?",
      },
      {
        speaker: "You",
        japanese: "とてもたのしいとおもいます。でもちょっとたかいです。",
        romaji: "Totemo tanoshii to omoimasu. Demo chotto takai desu.",
        english: "I think it's very fun. But it's a little expensive.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんごはどうですか？",
        romaji: "Nihongo wa dō desu ka?",
        english: "How's your Japanese?",
      },
      {
        speaker: "You",
        japanese:
          "かんじはむずかしいとおもいますが、ぶんぽうはけっこうかんたんだとおもいます。",
        romaji:
          "Kanji wa muzukashii to omoimasu ga, bunpō wa kekkō kantan da to omoimasu.",
        english:
          "I think kanji is difficult, but I think grammar is fairly simple.",
      },
      {
        speaker: "Tanaka",
        japanese: "きっとじょうずになりますよ。",
        romaji: "Kitto jōzu ni narimasu yo.",
        english: "You'll surely become good at it.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。がんばります！",
        romaji: "Arigatō gozaimasu. Ganbarimasu!",
        english: "Thank you. I'll do my best!",
      },
    ],
    practicePrompts: [
      "Give your opinion: にほんごは___とおもいます (おもしろい / むずかしい)",
      "Use たぶん: たぶん___とおもいます",
      "Express certainty: きっと___とおもいます / ぜったい___とおもいます",
      "Soften a statement: ___とおもいます instead of stating directly",
      "Ask for an opinion: ___とおもいますか？",
    ],
    languageInsight: {
      title: "Opinion Softening in Japanese Culture",
      content:
        "Japanese communication values indirectness. Stating にほんごはむずかしいです (Japanese is difficult) sounds like an absolute fact. Adding とおもいます softens it to a personal opinion: にほんごはむずかしいとおもいます (I think Japanese is difficult). This isn't weakness — it's social sophistication. The inner clause must be in casual form because と quotes the thought as-is. So you say おもしろいとおもいます (not おもしろいですとおもいます). For な-adjectives and nouns, add だ: きれいだとおもいます, がくせいだとおもいます.",
    },
    tutorNote:
      "とおもいます is one of the most valuable patterns because it transforms blunt statements into opinions. The key rule: the sentence BEFORE と must be in casual form. い-adjectives: おもしろいとおもいます (drop です). な-adjectives: しずかだとおもいます (use だ, not です). Nouns: あめだとおもいます (rain + だ). Verbs: いくとおもいます (dictionary form). Adding たぶん (probably) or きっと (surely) at the start lets you fine-tune your confidence level.",
    quickReference:
      "Pattern #28: [casual sentence]とおもいます = I think ___ | い-adj: おもしろいとおもう | な-adj: きれいだとおもう | noun: あめだとおもう | verb: いくとおもう | たぶん=probably | きっと=surely | ぜったい=absolutely | むり=impossible",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 46 — Expressing Opinions",
      listenFor:
        "The とおもいます ending in opinion statements. Notice how Japanese speakers frequently add とおもいます even when they're quite sure — it's a politeness strategy, not a sign of uncertainty.",
    },
  },

  {
    day: 47,
    dayType: "vocab-expansion",
    title: "Feelings & Emotions",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Learn 8 essential emotion and feeling words",
      "Describe emotional states using い-adjective and な-adjective patterns",
      "Express feelings in both polite and casual registers",
      "Talk about your own feelings and ask about others' feelings",
    ],
    usesPatterns: [21, 22, 27, 28],
    vocabulary: [
      {
        japanese: "うれしい",
        romaji: "ureshii",
        english: "happy / glad",
        fitsPattern: [21],
        mnemonic:
          "'Oo-reh-shee' — 'ooh, rushing' with happiness and joy",
      },
      {
        japanese: "かなしい",
        romaji: "kanashii",
        english: "sad",
        fitsPattern: [21],
        mnemonic:
          "'Kah-nah-shee' — 'cannot see' through the tears — so sad",
      },
      {
        japanese: "さびしい",
        romaji: "sabishii",
        english: "lonely",
        fitsPattern: [21],
        mnemonic:
          "'Sah-bee-shee' — 'sob, she' — sobbing alone because she's lonely",
      },
      {
        japanese: "こわい",
        romaji: "kowai",
        english: "scary / scared",
        fitsPattern: [21],
        mnemonic:
          "'Koh-why' — 'co-wai!' — scared and crying out why!",
      },
      {
        japanese: "はずかしい",
        romaji: "hazukashii",
        english: "embarrassing / embarrassed",
        fitsPattern: [21],
        mnemonic:
          "'Hah-zoo-kah-shee' — 'has a cashew' stuck in teeth — embarrassing!",
      },
      {
        japanese: "つかれた",
        romaji: "tsukareta",
        english: "tired (past form used as state)",
        fitsPattern: [21, 27],
        mnemonic:
          "'Tsoo-kah-reh-tah' — 'to karate' class made me exhausted — tired!",
      },
      {
        japanese: "しんぱい",
        romaji: "shinpai",
        english: "worried / anxious",
        fitsPattern: [22],
        mnemonic:
          "'Shin-pie' — 'shin pie' — worried about who will eat the last pie",
      },
      {
        japanese: "たいくつ",
        romaji: "taikutsu",
        english: "bored / boring",
        fitsPattern: [22],
        mnemonic:
          "'Tie-koot-sue' — 'tie, cut, sue' — so bored you're making up things to do",
      },
    ],
    examples: [
      {
        japanese: "きょうはとてもうれしいです。",
        romaji: "Kyō wa totemo ureshii desu.",
        english: "I'm very happy today.",
      },
      {
        japanese: "ともだちがかえって、さびしいです。",
        romaji: "Tomodachi ga kaette, sabishii desu.",
        english: "My friend went home, and I'm lonely.",
      },
      {
        japanese: "つかれた。やすみたい。",
        romaji: "Tsukareta. Yasumitai.",
        english: "I'm tired. I want to rest. (casual)",
      },
      {
        japanese: "あしたのテストがしんぱいです。",
        romaji: "Ashita no tesuto ga shinpai desu.",
        english: "I'm worried about tomorrow's test.",
      },
      {
        japanese: "このえいがはこわいとおもいます。",
        romaji: "Kono eiga wa kowai to omoimasu.",
        english: "I think this movie is scary.",
      },
      {
        japanese: "にほんごではずかしいはなしをしました。",
        romaji: "Nihongo de hazukashii hanashi o shimashita.",
        english: "I had an embarrassing conversation in Japanese.",
      },
      {
        japanese: "まちがえてはずかしかったです。",
        romaji: "Machigaete hazukashikatta desu.",
        english: "I made a mistake and was embarrassed.",
      },
      {
        japanese: "じゅぎょうがたいくつだった。",
        romaji: "Jugyō ga taikutsu datta.",
        english: "The class was boring. (casual)",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "だいじょうぶ？かおいろがわるいよ。",
        romaji: "Daijōbu? Kaoiro ga warui yo.",
        english: "Are you okay? You look pale.",
      },
      {
        speaker: "You",
        japanese: "ちょっとつかれた。きのうあまりねなかった。",
        romaji: "Chotto tsukareta. Kinō amari nenakatta.",
        english: "A little tired. I didn't sleep much last night.",
      },
      {
        speaker: "Yuki",
        japanese: "しんぱいだなあ。やすんだほうがいいよ。",
        romaji: "Shinpai da nā. Yasunda hō ga ii yo.",
        english: "I'm worried. You should rest.",
      },
      {
        speaker: "You",
        japanese: "ありがとう。でもあしたのテストがしんぱいで…",
        romaji: "Arigatō. Demo ashita no tesuto ga shinpai de...",
        english: "Thanks. But I'm worried about tomorrow's test...",
      },
      {
        speaker: "Yuki",
        japanese: "きっとだいじょうぶだよ！がんばったでしょ？",
        romaji: "Kitto daijōbu da yo! Ganbatta desho?",
        english: "I'm sure it'll be fine! You studied hard, right?",
      },
      {
        speaker: "You",
        japanese: "うん。ありがとう。すこしうれしい。",
        romaji: "Un. Arigatō. Sukoshi ureshii.",
        english: "Yeah. Thanks. That makes me a little happy.",
      },
    ],
    practicePrompts: [
      "Describe how you feel today: きょうは___です (うれしい / つかれた / げんき)",
      "Express worry: ___がしんぱいです / ___がしんぱいだとおもう",
      "Use casual feeling words: つかれた！ / うれしい！ / こわい！",
      "Talk about a past feeling: ___かったです (うれしかった / かなしかった / はずかしかった)",
      "Ask someone how they feel: げんきですか？ / だいじょうぶ？",
    ],
    languageInsight: {
      title: "Japanese Emotions: Feeling as Adjective",
      content:
        "In English, emotions are often verbs: 'I am scared,' 'I feel sad.' In Japanese, emotions are adjectives: こわい doesn't mean 'to be scared' — it means 'scary/scared' as a quality. かなしい is 'sad' as a descriptive state. This means emotions conjugate like adjectives: かなしかった (was sad), こわくない (not scary), うれしくなかった (wasn't happy). The word つかれた (tired) is technically a past-tense verb (つかれる = to become tired), but it functions like an adjective describing your current state — just as 'I'm tired' in English uses a past participle as an adjective.",
    },
    tutorNote:
      "Emotion words are perfect for combining patterns you've learned. Use Pattern #21 for い-adj emotions (うれしいです, かなしいです), Pattern #22 for な-adj emotions (しんぱいです), Pattern #27 for casual (つかれた！), and Pattern #28 for opinions about emotions (こわいとおもう). Practice the casual register especially — emotions come out naturally in casual speech: うれしい！ やばい！ こわい！ つかれた！",
    quickReference:
      "い-adj emotions: うれしい=happy | かなしい=sad | さびしい=lonely | こわい=scary | はずかしい=embarrassed | な-adj emotions: しんぱい=worried | たいくつ=bored | Special: つかれた=tired (past-form state) | だいじょうぶ=okay",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 47 — Talking About Feelings",
      listenFor:
        "Emotion adjectives in natural speech, especially in casual register. Notice how つかれた and うれしい are used as standalone exclamations. Listen for しんぱい in worried contexts.",
    },
  },

  {
    day: 48,
    dayType: "pattern-combo",
    title: "Opinion Combos",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Combine adjective patterns (#21, #22) with preference (#23), comparison (#26), and opinion (#28)",
      "Build complex opinion sentences with multiple clauses",
      "Express nuanced views: 'I think A is better than B because...'",
      "Practice stacking patterns for natural-sounding paragraph-level speech",
    ],
    usesPatterns: [21, 22, 23, 26, 28],
    vocabulary: [
      {
        japanese: "ぶんか",
        romaji: "bunka",
        english: "culture",
        fitsPattern: [21, 22],
        mnemonic:
          "'Boon-kah' — 'bunk a' night in another country to experience culture",
      },
      {
        japanese: "せいかつ",
        romaji: "seikatsu",
        english: "life / daily life / lifestyle",
        fitsPattern: [21, 22],
        mnemonic:
          "'Say-kah-tsoo' — 'say, cuts' through your daily life routine",
      },
      {
        japanese: "けいけん",
        romaji: "keiken",
        english: "experience",
        fitsPattern: [22],
        mnemonic:
          "'Kay-ken' — 'K-Ken' has lots of experience adventuring",
      },
      {
        japanese: "かんきょう",
        romaji: "kankyō",
        english: "environment",
        fitsPattern: [22],
        mnemonic:
          "'Kahn-kyoh' — 'can cure' the environment with effort",
      },
      {
        japanese: "りゆう",
        romaji: "riyū",
        english: "reason",
        fitsPattern: [28],
        mnemonic:
          "'Ree-yoo' — 'really you' — the reason is really you",
      },
      {
        japanese: "とくに",
        romaji: "toku ni",
        english: "especially / particularly",
        mnemonic:
          "'Toh-koo-nee' — 'Tokyo, nee?' — especially Tokyo!",
      },
    ],
    examples: [
      {
        japanese: "にほんのぶんかはおもしろいとおもいます。とくにたべものがすきです。",
        romaji:
          "Nihon no bunka wa omoshiroi to omoimasu. Toku ni tabemono ga suki desu.",
        english:
          "I think Japanese culture is interesting. I especially like the food.",
      },
      {
        japanese: "とうきょうよりきょうとのほうがしずかだとおもいます。",
        romaji: "Tōkyō yori Kyōto no hō ga shizuka da to omoimasu.",
        english: "I think Kyoto is quieter than Tokyo.",
      },
      {
        japanese: "なつよりはるのほうがすきです。あたたかくてきれいです。",
        romaji: "Natsu yori haru no hō ga suki desu. Atatakakute kirei desu.",
        english: "I like spring more than summer. It's warm and beautiful.",
      },
      {
        japanese:
          "にほんのせいかつはべんりだとおもいます。でんしゃがべんりで、たべものがおいしいです。",
        romaji:
          "Nihon no seikatsu wa benri da to omoimasu. Densha ga benri de, tabemono ga oishii desu.",
        english:
          "I think life in Japan is convenient. The trains are convenient and the food is delicious.",
      },
      {
        japanese: "にほんごはむずかしいですが、たのしいとおもいます。",
        romaji: "Nihongo wa muzukashii desu ga, tanoshii to omoimasu.",
        english: "Japanese is difficult, but I think it's fun.",
      },
      {
        japanese:
          "ラーメンがいちばんすきです。やすくておいしいとおもいます。",
        romaji:
          "Rāmen ga ichiban suki desu. Yasukute oishii to omoimasu.",
        english:
          "I like ramen the most. I think it's cheap and delicious.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [21, 22, 28],
        japanese:
          "にほんのまちはきれいだとおもいます。しずかで、ひとがしんせつです。",
        romaji:
          "Nihon no machi wa kirei da to omoimasu. Shizuka de, hito ga shinsetsu desu.",
        english:
          "I think Japanese towns are beautiful. They're quiet, and the people are kind.",
      },
      {
        patternsUsed: [23, 26, 28],
        japanese:
          "すしよりラーメンのほうがすきです。やすくておいしいとおもいます。",
        romaji:
          "Sushi yori rāmen no hō ga suki desu. Yasukute oishii to omoimasu.",
        english:
          "I like ramen more than sushi. I think it's cheap and delicious.",
      },
      {
        patternsUsed: [21, 26, 28],
        japanese:
          "きょうとよりとうきょうのほうがにぎやかです。でもきょうとのほうがきれいだとおもいます。",
        romaji:
          "Kyōto yori Tōkyō no hō ga nigiyaka desu. Demo Kyōto no hō ga kirei da to omoimasu.",
        english:
          "Tokyo is more lively than Kyoto. But I think Kyoto is more beautiful.",
      },
      {
        patternsUsed: [22, 23, 26, 28],
        japanese:
          "なつよりふゆのほうがすきです。スキーがすきです。でもふゆはさむいのがたいへんだとおもいます。",
        romaji:
          "Natsu yori fuyu no hō ga suki desu. Sukī ga suki desu. Demo fuyu wa samui no ga taihen da to omoimasu.",
        english:
          "I like winter more than summer. I like skiing. But I think the cold in winter is tough.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "にほんとアメリカ、どちらのほうがすきですか？",
        romaji: "Nihon to Amerika, dochira no hō ga suki desu ka?",
        english: "Japan or America, which do you like more?",
      },
      {
        speaker: "You",
        japanese:
          "むずかしいしつもんですね。どちらもすきですが、にほんのたべものがだいすきです。",
        romaji:
          "Muzukashii shitsumon desu ne. Dochira mo suki desu ga, nihon no tabemono ga daisuki desu.",
        english:
          "That's a difficult question. I like both, but I love Japanese food.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんのせいかつはどうですか？",
        romaji: "Nihon no seikatsu wa dō desu ka?",
        english: "How is life in Japan?",
      },
      {
        speaker: "You",
        japanese:
          "とてもべんりだとおもいます。でんしゃがべんりで、まちがきれいです。",
        romaji:
          "Totemo benri da to omoimasu. Densha ga benri de, machi ga kirei desu.",
        english:
          "I think it's very convenient. The trains are convenient and the cities are clean.",
      },
      {
        speaker: "Tanaka",
        japanese: "たいへんなことはありますか？",
        romaji: "Taihen na koto wa arimasu ka?",
        english: "Are there any difficult things?",
      },
      {
        speaker: "You",
        japanese:
          "かんじがむずかしいとおもいます。でもたのしいけいけんだとおもいます。",
        romaji:
          "Kanji ga muzukashii to omoimasu. Demo tanoshii keiken da to omoimasu.",
        english:
          "I think kanji is difficult. But I think it's a fun experience.",
      },
    ],
    practicePrompts: [
      "Give a multi-sentence opinion about Japan: にほんは___とおもいます。___がすきです。",
      "Compare two things with reasoning: ___より___のほうが___です。___とおもいます。",
      "Describe what you like most and why: ___がいちばんすきです。___とおもいます。",
      "Express a balanced opinion: ___ですが、___とおもいます (positive but also negative)",
      "Answer どちらのほうがすきですか with a full paragraph",
    ],
    languageInsight: {
      title: "Building Paragraphs in Japanese",
      content:
        "Until now, you've been making individual sentences. Today you're combining them into paragraphs — and this is where Japanese starts to feel like real communication. The key connectors: が/けど (but), でも (however), とくに (especially), だから (so/because). Japanese paragraphs often follow a pattern: general statement → specific detail → personal opinion. にほんはおもしろいです (general) → とくにたべものがおいしいです (specific) → だいすきだとおもいます (opinion). This structure mirrors how Japanese speakers naturally organize thoughts.",
    },
    tutorNote:
      "Today is about fluency — chaining patterns together into natural paragraphs. The magic comes from combining: description (Patterns #21/#22) + preference (#23) + comparison (#26) + opinion (#28). Practice the flow: state something → add detail → give your opinion. にほんのぶんかはおもしろいです → とくにたべものがすきです → いちばんおいしいとおもいます. Don't worry about perfection — natural speech isn't perfectly structured.",
    quickReference:
      "Combo building blocks: [adj]です (describe) + がすきです (like) + より___のほうが (compare) + とおもいます (think) | Connectors: が/けど=but | でも=however | とくに=especially | ぶんか=culture | せいかつ=life | けいけん=experience",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 48 — Expressing Complex Opinions",
      listenFor:
        "How speakers chain multiple sentences into coherent opinions. Notice the connectors が, でも, and とくに linking thoughts together. Pay attention to the overall flow: topic → description → opinion.",
    },
  },

  {
    day: 49,
    dayType: "pattern-combo",
    title: "Polite vs Casual",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Recognize and switch between polite (です/ます) and casual (だ/dictionary form) registers",
      "Understand which register to use based on social context",
      "Practice the same conversation in both polite and casual forms",
      "Use Patterns #1, #4, #21, #22, #23, #27, and #28 across both registers",
    ],
    usesPatterns: [1, 4, 21, 22, 23, 27, 28],
    vocabulary: [
      {
        japanese: "ね",
        romaji: "ne",
        english: "right? / isn't it? (sentence-ending particle)",
        mnemonic:
          "'Neh' — like 'nay?' in old English — seeking agreement: right?",
      },
      {
        japanese: "よ",
        romaji: "yo",
        english: "you know / I tell you (emphasis particle)",
        mnemonic:
          "'Yoh' — 'yo!' — calling attention: hey, listen up!",
      },
      {
        japanese: "かな",
        romaji: "kana",
        english: "I wonder (casual, to oneself)",
        mnemonic:
          "'Kah-nah' — 'can I?' — wondering to yourself",
      },
      {
        japanese: "でしょう",
        romaji: "deshō",
        english: "probably / right? (polite speculation)",
        mnemonic:
          "'Deh-shoh' — 'they show' — showing probability politely",
      },
      {
        japanese: "けど",
        romaji: "kedo",
        english: "but / though (casual)",
        mnemonic:
          "'Keh-doh' — 'get, though' — but, I thought...",
      },
      {
        japanese: "うん",
        romaji: "un",
        english: "yeah (casual yes)",
        mnemonic:
          "'Oon' — a casual grunt of agreement — 'uh-huh'",
      },
      {
        japanese: "ううん",
        romaji: "uun",
        english: "nah / nope (casual no)",
        mnemonic:
          "'Oo-oon' — shaking your head — 'uh-uh, nope'",
      },
      {
        japanese: "じゃあ",
        romaji: "jā",
        english: "well then / in that case",
        mnemonic:
          "'Jah' — 'ya' well then — let's move on",
      },
    ],
    examples: [
      {
        japanese: "がくせいです。(polite) → がくせいだ。(casual)",
        romaji: "Gakusei desu. → Gakusei da.",
        english: "I'm a student. (polite → casual)",
      },
      {
        japanese: "にほんごがすきです。(polite) → にほんごがすきだ。(casual)",
        romaji: "Nihongo ga suki desu. → Nihongo ga suki da.",
        english: "I like Japanese. (polite → casual)",
      },
      {
        japanese: "おもしろいです。(polite) → おもしろい。(casual)",
        romaji: "Omoshiroi desu. → Omoshiroi.",
        english: "It's interesting. (polite → casual)",
      },
      {
        japanese: "いいとおもいます。(polite) → いいとおもう。(casual)",
        romaji: "Ii to omoimasu. → Ii to omou.",
        english: "I think it's good. (polite → casual)",
      },
      {
        japanese: "きれいですね。(polite) → きれいだね。(casual)",
        romaji: "Kirei desu ne. → Kirei da ne.",
        english: "It's beautiful, isn't it? (polite → casual)",
      },
      {
        japanese: "それはいいですね。(polite) → それいいね。(casual)",
        romaji: "Sore wa ii desu ne. → Sore ii ne.",
        english: "That's nice, isn't it? (polite → casual)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 22, 27],
        japanese:
          "[Polite] わたしはがくせいです。げんきです。 → [Casual] がくせいだよ。げんきだよ。",
        romaji:
          "Watashi wa gakusei desu. Genki desu. → Gakusei da yo. Genki da yo.",
        english:
          "I'm a student. I'm well. (polite → casual with よ for emphasis)",
      },
      {
        patternsUsed: [21, 23, 28],
        japanese:
          "[Polite] にほんごはおもしろいとおもいます。だいすきです。 → [Casual] にほんごおもしろいとおもう。だいすき。",
        romaji:
          "Nihongo wa omoshiroi to omoimasu. Daisuki desu. → Nihongo omoshiroi to omou. Daisuki.",
        english:
          "I think Japanese is interesting. I love it. (polite → casual)",
      },
      {
        patternsUsed: [4, 21, 27],
        japanese:
          "[Polite] きょうはてんきがいいですね。 → [Casual] きょう、てんきいいね。",
        romaji: "Kyō wa tenki ga ii desu ne. → Kyō, tenki ii ne.",
        english: "The weather's nice today, isn't it? (polite → casual)",
      },
      {
        patternsUsed: [22, 23, 27, 28],
        japanese:
          "[Polite] このまちがすきです。しずかできれいだとおもいます。 → [Casual] このまちすきだよ。しずかできれいだとおもう。",
        romaji:
          "Kono machi ga suki desu. Shizuka de kirei da to omoimasu. → Kono machi suki da yo. Shizuka de kirei da to omou.",
        english:
          "I like this town. I think it's quiet and beautiful. (polite → casual)",
      },
    ],
    dialogue: [
      {
        speaker: "Narrator",
        japanese: "— ポライトバージョン (Polite Version) —",
        romaji: "— Poraito bājon —",
        english: "— Polite Version —",
      },
      {
        speaker: "Colleague",
        japanese: "おつかれさまです。しゅうまつはなにをしましたか？",
        romaji: "Otsukaresama desu. Shūmatsu wa nani o shimashita ka?",
        english: "Good work today. What did you do on the weekend?",
      },
      {
        speaker: "You",
        japanese: "きょうとにいきました。きれいなところでした。",
        romaji: "Kyōto ni ikimashita. Kirei na tokoro deshita.",
        english: "I went to Kyoto. It was a beautiful place.",
      },
      {
        speaker: "Narrator",
        japanese: "— カジュアルバージョン (Casual Version) —",
        romaji: "— Kajuaru bājon —",
        english: "— Casual Version —",
      },
      {
        speaker: "Friend",
        japanese: "おつかれ！しゅうまつなにした？",
        romaji: "Otsukare! Shūmatsu nani shita?",
        english: "Hey, good work! Whatcha do this weekend?",
      },
      {
        speaker: "You",
        japanese: "きょうといった。きれいなところだった。",
        romaji: "Kyōto itta. Kirei na tokoro datta.",
        english: "Went to Kyoto. It was a beautiful place.",
      },
    ],
    practicePrompts: [
      "Convert this to casual: わたしはがくせいです。にほんごがすきです。",
      "Convert this to polite: おもしろいとおもう。でもむずかしい。",
      "Practice both registers: introduce yourself politely, then casually to a friend",
      "Add ね and よ to casual sentences for natural emphasis",
      "Role-play: the same conversation once with your boss, once with your friend",
    ],
    languageInsight: {
      title: "Keigo: Japan's Politeness Levels",
      content:
        "Japanese has multiple politeness levels, not just two. The casual (タメ口, tameguchi) you're learning is used with friends and family. The polite (丁寧語, teineigo) です/ます level works for most social situations. Beyond that, there's 尊敬語 (sonkeigo, honorific) for elevating others' actions, and 謙譲語 (kenjōgo, humble) for lowering your own. A store clerk uses different grammar than a friend, who uses different grammar than a subordinate addressing their boss. For now, master the polite/casual switch — it covers 90% of daily situations.",
    },
    tutorNote:
      "Today's lesson is about register awareness — knowing when to use polite vs. casual. The rule of thumb: polite with strangers, superiors, and in formal settings; casual with friends, family, and peers (after you've established closeness). In practice, many Japanese conversations are a mix. Someone might start polite and gradually shift to casual as comfort builds. Practice converting the same sentence both ways until the switch becomes natural. The sentence-ending particles ね (right?), よ (I tell you), and かな (I wonder) add personality to casual speech.",
    quickReference:
      "Register conversion: です→だ | ます→dictionary form | い-adj+です→い-adj alone | ですか→? (rising tone) | はい→うん | いいえ→ううん | でも→けど | Particles: ね=right? | よ=emphasis | かな=I wonder | でしょう=probably",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 49 — Polite and Casual Register",
      listenFor:
        "The same speaker switching between polite and casual with different conversation partners. Notice how sentence endings change while core vocabulary stays the same. Listen for ね, よ, and かな in casual speech.",
    },
  },

  {
    day: 50,
    dayType: "review",
    title: "Phase 4 Review",
    phase: 4,
    phaseTitle: "Description & Opinion Patterns",
    objectives: [
      "Review and consolidate all 8 new patterns from Phase 4 (#21–#28)",
      "Demonstrate mastery of い-adjective and な-adjective conjugation across all four forms",
      "Express preferences, desires, comparisons, and opinions fluently",
      "Switch confidently between polite and casual registers",
    ],
    usesPatterns: [21, 22, 23, 24, 25, 26, 27, 28],
    vocabulary: [
      {
        japanese: "すばらしい",
        romaji: "subarashii",
        english: "wonderful / magnificent",
        fitsPattern: [21],
        mnemonic:
          "'Soo-bah-rah-shee' — 'super, rush, she' — she rushes to see something wonderful",
      },
      {
        japanese: "ふくざつ",
        romaji: "fukuzatsu",
        english: "complicated / complex",
        fitsPattern: [22],
        mnemonic:
          "'Foo-koo-zah-tsoo' — 'fuku-za-tsu' sounds tangled — complicated!",
      },
      {
        japanese: "いろいろ",
        romaji: "iroiro",
        english: "various / all sorts of",
        mnemonic:
          "'Ee-roh-ee-roh' — 'iro' means color — various colors → various things",
      },
      {
        japanese: "もっと",
        romaji: "motto",
        english: "more",
        mnemonic:
          "'Mot-toh' — 'motto' — your motto is to always want more",
      },
      {
        japanese: "これから",
        romaji: "kore kara",
        english: "from now on / going forward",
        mnemonic:
          "'Koh-reh-kah-rah' — 'core-cara' — from the core of now, going forward",
      },
      {
        japanese: "たくさん",
        romaji: "takusan",
        english: "a lot / many",
        mnemonic:
          "'Tah-koo-sahn' — 'talk a sun' — a lot of sunshine today",
      },
    ],
    examples: [
      {
        japanese:
          "にほんごはむずかしいですが、おもしろいとおもいます。もっとならいたいです。",
        romaji:
          "Nihongo wa muzukashii desu ga, omoshiroi to omoimasu. Motto naraitai desu.",
        english:
          "Japanese is difficult, but I think it's interesting. I want to learn more. (Patterns #21, #28, #25)",
      },
      {
        japanese:
          "さくらがいちばんきれいだとおもいます。はるがだいすきです。",
        romaji:
          "Sakura ga ichiban kirei da to omoimasu. Haru ga daisuki desu.",
        english:
          "I think cherry blossoms are the most beautiful. I love spring. (Patterns #22, #28, #23)",
      },
      {
        japanese:
          "あたらしいパソコンがほしいです。ふるいのはおそくて、べんりじゃないです。",
        romaji:
          "Atarashii pasokon ga hoshii desu. Furui no wa osokute, benri ja nai desu.",
        english:
          "I want a new computer. The old one is slow and not convenient. (Patterns #24, #21, #22)",
      },
      {
        japanese:
          "なつよりふゆのほうがすきだとおもう。スキーしたい！",
        romaji:
          "Natsu yori fuyu no hō ga suki da to omou. Sukī shitai!",
        english:
          "I think I like winter more than summer. I wanna ski! (Patterns #26, #28, #25, #27 casual)",
      },
      {
        japanese:
          "このまちはしずかできれいだ。だいすき。ずっとすみたい。",
        romaji: "Kono machi wa shizuka de kirei da. Daisuki. Zutto sumitai.",
        english:
          "This town is quiet and beautiful. I love it. I want to live here forever. (Patterns #22, #23, #25, #27 casual)",
      },
      {
        japanese:
          "にほんのりょうりはすばらしいとおもいます。いろいろなものをたべたいです。",
        romaji:
          "Nihon no ryōri wa subarashii to omoimasu. Iroiro na mono o tabetai desu.",
        english:
          "I think Japanese cuisine is wonderful. I want to eat all sorts of things. (Patterns #21, #28, #25)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [21, 22, 23, 28],
        japanese:
          "にほんのぶんかはふくざつだけど、おもしろいとおもいます。とくにりょうりがすきです。おいしくてきれいです。",
        romaji:
          "Nihon no bunka wa fukuzatsu da kedo, omoshiroi to omoimasu. Toku ni ryōri ga suki desu. Oishikute kirei desu.",
        english:
          "Japanese culture is complex, but I think it's interesting. I especially like the cuisine. It's delicious and beautiful.",
      },
      {
        patternsUsed: [24, 25, 26],
        japanese:
          "やすみがほしいです。うみにいきたいです。やまよりうみのほうがすきです。",
        romaji:
          "Yasumi ga hoshii desu. Umi ni ikitai desu. Yama yori umi no hō ga suki desu.",
        english:
          "I want a vacation. I want to go to the ocean. I like the ocean more than mountains.",
      },
      {
        patternsUsed: [21, 23, 27, 28],
        japanese:
          "このえいが、すごくおもしろかった！たぶんことしいちばんいいとおもう。みんなにすすめたい。",
        romaji:
          "Kono eiga, sugoku omoshirokatta! Tabun kotoshi ichiban ii to omou. Minna ni susume tai.",
        english:
          "This movie was really interesting! I think it's probably the best one this year. I want to recommend it to everyone. (casual)",
      },
      {
        patternsUsed: [22, 26, 28],
        japanese:
          "でんしゃよりひこうきのほうがべんりですが、でんしゃのほうがやすいとおもいます。たいせつなのはじかんとおかねです。",
        romaji:
          "Densha yori hikōki no hō ga benri desu ga, densha no hō ga yasui to omoimasu. Taisetsu na no wa jikan to okane desu.",
        english:
          "Airplanes are more convenient than trains, but I think trains are cheaper. What's important is time and money.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "にほんのせいかつはもうなれましたか？",
        romaji: "Nihon no seikatsu wa mō naremashita ka?",
        english: "Have you gotten used to life in Japan yet?",
      },
      {
        speaker: "You",
        japanese:
          "はい、だいぶなれました。にほんのせいかつはすばらしいとおもいます。",
        romaji:
          "Hai, daibu naremashita. Nihon no seikatsu wa subarashii to omoimasu.",
        english:
          "Yes, I've gotten quite used to it. I think life in Japan is wonderful.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんでいちばんすきなことはなんですか？",
        romaji: "Nihon de ichiban suki na koto wa nan desu ka?",
        english: "What do you like most about Japan?",
      },
      {
        speaker: "You",
        japanese:
          "たべものがいちばんすきです。おいしくてやすいです。とくにラーメンがだいすきです。",
        romaji:
          "Tabemono ga ichiban suki desu. Oishikute yasui desu. Toku ni rāmen ga daisuki desu.",
        english:
          "I like the food the most. It's delicious and affordable. I especially love ramen.",
      },
      {
        speaker: "Tanaka",
        japanese: "たいへんなことはありますか？",
        romaji: "Taihen na koto wa arimasu ka?",
        english: "Is there anything difficult?",
      },
      {
        speaker: "You",
        japanese:
          "かんじはむずかしいとおもいます。でもたのしいです。これからもっとべんきょうしたいです。",
        romaji:
          "Kanji wa muzukashii to omoimasu. Demo tanoshii desu. Kore kara motto benkyō shitai desu.",
        english:
          "I think kanji is difficult. But it's fun. I want to study more from now on.",
      },
      {
        speaker: "Tanaka",
        japanese: "すごいですね。きっとじょうずになりますよ！",
        romaji: "Sugoi desu ne. Kitto jōzu ni narimasu yo!",
        english: "That's amazing. You'll surely get good at it!",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。がんばります！",
        romaji: "Arigatō gozaimasu. Ganbarimasu!",
        english: "Thank you. I'll do my best!",
      },
    ],
    practicePrompts: [
      "Write a full paragraph about your favorite season using Patterns #21, #22, #23, #26, and #28",
      "Describe your ideal life: ___がほしいです。___たいです。___がすきです。",
      "Give a balanced opinion about something: ___ですが、___とおもいます",
      "Hold the same conversation twice: once politely, once casually",
      "Test yourself: say all 8 new patterns (#21–#28) from memory with examples",
    ],
    languageInsight: {
      title: "28 Patterns: The Power of Description and Opinion",
      content:
        "With 28 patterns, you can now do something remarkable: describe the world and share your thoughts about it. Phases 1–3 gave you the ability to identify, locate, and narrate actions. Phase 4 added the dimension of quality (adjectives), preference (すき/ほしい/たい), comparison (より...のほうが), opinion (とおもう), and register flexibility (polite/casual). You can now say 'I think Kyoto is more beautiful than Tokyo because the temples are old and quiet, and I want to visit again next spring.' That's a complex, nuanced thought expressed entirely with patterns you've learned.",
    },
    tutorNote:
      "Phase 4 complete! You've added 8 powerful patterns that transform your Japanese from functional to expressive. Before moving to Phase 5, make sure you can: (1) conjugate any adjective through all four forms without hesitation, (2) express likes, wants, and opinions naturally, (3) make comparisons, and (4) switch between polite and casual registers. Phase 5 will build on this foundation with request patterns, giving/receiving, and conditional forms. Your Japanese is now rich enough for genuine everyday conversation.",
    quickReference:
      "Phase 4 Patterns: #21 [い-adj]です | #22 [な-adj]です | #23 がすきです (like) | #24 がほしいです (want thing) | #25 たいです (want to do) | #26 より___のほうが (comparison) | #27 Casual forms (だ/じゃない/dict.) | #28 とおもいます (I think) | All 28 patterns now complete!",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 50 — Phase 4 Review Conversation",
      listenFor:
        "All Phase 4 patterns in flowing conversation. Challenge yourself: listen without subtitles and identify which patterns are being used. Notice how adjectives, preferences, and opinions weave together naturally.",
    },
  },
];
