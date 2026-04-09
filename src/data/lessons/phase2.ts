import { Lesson } from "@/lib/types";

export const phase2Lessons: Lesson[] = [
  {
    day: 11,
    dayType: "vocab-expansion",
    title: "Katakana Part 1 + Loanwords",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Learn katakana ア row (アイウエオ), カ row (カキクケコ), サ row (サシスセソ), タ row (タチツテト), and ナ row (ナニヌネノ)",
      "Master reading and writing 25 katakana characters",
      "Learn essential loanwords written in katakana",
      "Use katakana loanwords within Patterns #1, #4, and #6",
    ],
    usesPatterns: [1, 4, 6],
    vocabulary: [
      {
        japanese: "タクシー",
        romaji: "takushī",
        english: "taxi",
        fitsPattern: [6],
        mnemonic:
          "'Ta-ku-shee' — sounds like 'taxi' with Japanese syllables",
      },
      {
        japanese: "テレビ",
        romaji: "terebi",
        english: "television",
        fitsPattern: [4],
        mnemonic:
          "'Te-re-bi' — shortened from 'television,' just the first three beats",
      },
      {
        japanese: "コンビニ",
        romaji: "konbini",
        english: "convenience store",
        fitsPattern: [4, 6],
        mnemonic:
          "Short for 'convenience' — konbini are Japan's 24/7 lifeline, on every corner",
      },
      {
        japanese: "ケーキ",
        romaji: "kēki",
        english: "cake",
        fitsPattern: [6],
        mnemonic:
          "'Keh-kee' — sounds just like 'cake' with an ee at the end",
      },
      {
        japanese: "サンドイッチ",
        romaji: "sandoitchi",
        english: "sandwich",
        fitsPattern: [6],
        mnemonic:
          "'San-do-it-chi' — 'sandwich' stretched into Japanese syllables",
      },
      {
        japanese: "アイスクリーム",
        romaji: "aisukurīmu",
        english: "ice cream",
        fitsPattern: [6],
        mnemonic:
          "'Ah-ee-su-ku-ree-mu' — 'ice cream' spelled out syllable by syllable",
      },
      {
        japanese: "ネクタイ",
        romaji: "nekutai",
        english: "necktie",
        fitsPattern: [4],
        mnemonic:
          "'Ne-ku-ta-i' — sounds like 'necktie' without the final consonants",
      },
    ],
    examples: [
      {
        japanese: "コーヒーをください。",
        romaji: "Kōhī o kudasai.",
        english: "Coffee, please.",
      },
      {
        japanese: "タクシーをください。",
        romaji: "Takushī o kudasai.",
        english: "A taxi, please.",
      },
      {
        japanese: "テレビはおもしろいです。",
        romaji: "Terebi wa omoshiroi desu.",
        english: "TV is interesting.",
      },
      {
        japanese: "コンビニはべんりです。",
        romaji: "Konbini wa benri desu.",
        english: "Convenience stores are convenient.",
      },
      {
        japanese: "ケーキをください。",
        romaji: "Kēki o kudasai.",
        english: "Cake, please.",
      },
      {
        japanese: "サンドイッチをください。",
        romaji: "Sandoitchi o kudasai.",
        english: "A sandwich, please.",
      },
    ],
    practicePrompts: [
      "Practice writing katakana ア row: ア イ ウ エ オ",
      "Practice writing katakana カ row through ナ row",
      "Order food using katakana loanwords: ___をください",
      "Describe something using a loanword: テレビは___です",
      "Try reading these without romaji: タクシー、ケーキ、コンビニ",
    ],
    languageInsight: {
      title: "The Origin of Katakana",
      content:
        "Katakana was created by Buddhist monks in the 9th century as a shorthand for reading Chinese Buddhist texts. They took parts of Chinese characters (kanji) and simplified them into angular, abbreviated forms. For example, カ comes from the left side of 加, and ア comes from part of 阿. Unlike hiragana's flowing curves (developed by court women), katakana's sharp strokes reflect its scholarly, utilitarian origins. Today katakana is used mainly for foreign loanwords, sound effects, emphasis, and scientific terms — but it started as a monk's reading aid over a thousand years ago.",
    },
    tutorNote:
      "Katakana has the same sounds as hiragana — ア=あ=a, カ=か=ka, etc. — just different shapes. Think of them as the same alphabet in different fonts. Many students find katakana harder because they practice it less, so give it equal attention. The good news: katakana words are usually English (or other foreign) words you already know, just pronounced with Japanese sounds. Once you can read katakana, you unlock hundreds of words instantly.",
    quickReference:
      "ア=a イ=i ウ=u エ=e オ=o | カ=ka キ=ki ク=ku ケ=ke コ=ko | サ=sa シ=shi ス=su セ=se ソ=so | タ=ta チ=chi ツ=tsu テ=te ト=to | ナ=na ニ=ni ヌ=nu ネ=ne ノ=no",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #11 — Introduction to Katakana",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "How native speakers pronounce katakana loanwords. Notice how English words get 'Japanified' — extra vowels added, L becomes R, and consonant clusters are broken up with vowels.",
    },
  },

  {
    day: 12,
    dayType: "vocab-expansion",
    title: "Katakana Part 2 + More Loanwords",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Learn katakana ハ row (ハヒフヘホ), マ row (マミムメモ), ヤ row (ヤユヨ), ラ row (ラリルレロ), ワ, and ン",
      "Complete the full katakana alphabet",
      "Learn loanwords borrowed from Portuguese, German, and English",
      "Read full katakana words confidently",
    ],
    usesPatterns: [1, 4, 6],
    vocabulary: [
      {
        japanese: "パン",
        romaji: "pan",
        english: "bread",
        fitsPattern: [6],
        mnemonic:
          "From Portuguese 'pão' — Japan learned bread-baking from Portuguese traders in the 1500s",
      },
      {
        japanese: "アルバイト",
        romaji: "arubaito",
        english: "part-time job",
        fitsPattern: [1, 4],
        mnemonic:
          "From German 'Arbeit' (work) — borrowed during Japan's modernization in the Meiji era",
      },
      {
        japanese: "ビール",
        romaji: "bīru",
        english: "beer",
        fitsPattern: [6],
        mnemonic:
          "'Bee-ru' — sounds like 'beer' with a Japanese ending, from Dutch 'bier'",
      },
      {
        japanese: "パソコン",
        romaji: "pasokon",
        english: "personal computer",
        fitsPattern: [4],
        mnemonic:
          "'Pa-so-kon' — shortened from パーソナルコンピューター (personal computer)",
      },
      {
        japanese: "スマホ",
        romaji: "sumaho",
        english: "smartphone",
        fitsPattern: [4],
        mnemonic:
          "'Su-ma-ho' — shortened from スマートフォン (sumātofon = smartphone)",
      },
      {
        japanese: "ハンバーガー",
        romaji: "hanbāgā",
        english: "hamburger",
        fitsPattern: [6],
        mnemonic:
          "'Han-bah-gah' — hamburger without the final R, stretched into four syllables",
      },
      {
        japanese: "エレベーター",
        romaji: "erebētā",
        english: "elevator",
        fitsPattern: [4],
        mnemonic:
          "'E-re-beh-tah' — elevator with L→R swap and extra vowels",
      },
    ],
    examples: [
      {
        japanese: "パンをください。",
        romaji: "Pan o kudasai.",
        english: "Bread, please.",
      },
      {
        japanese: "アルバイトです。",
        romaji: "Arubaito desu.",
        english: "It's a part-time job. / I work part-time.",
      },
      {
        japanese: "ビールをください。",
        romaji: "Bīru o kudasai.",
        english: "A beer, please.",
      },
      {
        japanese: "パソコンはべんりです。",
        romaji: "Pasokon wa benri desu.",
        english: "Computers are convenient.",
      },
      {
        japanese: "スマホはあたらしいです。",
        romaji: "Sumaho wa atarashii desu.",
        english: "The smartphone is new.",
      },
      {
        japanese: "ハンバーガーをください。",
        romaji: "Hanbāgā o kudasai.",
        english: "A hamburger, please.",
      },
      {
        japanese: "エレベーターはどこですか？",
        romaji: "Erebētā wa doko desu ka?",
        english: "Where is the elevator?",
      },
    ],
    practicePrompts: [
      "Practice writing katakana ハ row through ン",
      "Write all 46 katakana from memory, then check yourself",
      "Read a Japanese product label or menu and identify katakana words",
      "Order a meal using only katakana words: パンとコーヒーをください",
      "Try reading these without romaji: パソコン、アルバイト、ハンバーガー",
    ],
    languageInsight: {
      title: "Japan's Loanword Buffet",
      content:
        "Japanese has been absorbing foreign words for centuries, and katakana tracks this history. From Portuguese traders in the 1500s: パン (pão = bread), テンプラ (tempero = tempura), カッパ (capa = raincoat). From Dutch scholars in the 1600s: ビール (bier = beer), ガラス (glas = glass), ランドセル (ransel = school backpack). From German academics: アルバイト (Arbeit = work), カルテ (Karte = medical chart). And from English in the modern era: パソコン, スマホ, コンビニ. Each wave of loanwords maps to a period of cultural contact — reading katakana is like reading Japan's diplomatic history.",
    },
    tutorNote:
      "With katakana complete, you can now read both phonetic scripts — that's a huge milestone. Japanese often shortens long foreign words: パーソナルコンピューター becomes パソコン, スマートフォン becomes スマホ, コンビニエンスストア becomes コンビニ. These abbreviations usually keep the first 2–3 syllables of each word. When you see a katakana word you don't recognize, try saying it out loud with an English accent — you'll often figure it out.",
    quickReference:
      "ハ=ha ヒ=hi フ=fu ヘ=he ホ=ho | マ=ma ミ=mi ム=mu メ=me モ=mo | ヤ=ya ユ=yu ヨ=yo | ラ=ra リ=ri ル=ru レ=re ロ=ro | ワ=wa ン=n | Dakuten: バ=ba パ=pa | Long vowel: ー",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #12 — Katakana Loanwords",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "How English words sound when spoken in Japanese. Pay attention to how 'r' and 'l' both become ラ行 sounds, and how consonant clusters like 'str' in 'restaurant' become 'su-to-ra' with added vowels.",
    },
  },

  {
    day: 13,
    dayType: "new-pattern",
    title: "Patterns #7-8: Going Places & Doing Things",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Master Pattern #7: ___にいきます (I go to ___)",
      "Master Pattern #8: ___を___ます (I [verb] [thing])",
      "Learn your first 4 action verbs: たべます, のみます, みます, ききます",
      "Understand the に particle (destination) and を particle (object) with verbs",
    ],
    pattern: {
      number: 7,
      japanese: "___にいきます",
      english: "I go to ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Destination — where you're going",
        },
        {
          text: "に",
          role: "particle",
          explanation: "Direction/destination marker",
        },
        {
          text: "いきます",
          role: "verb",
          explanation: "To go (polite form of いく)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "いきます",
        romaji: "ikimasu",
        english: "to go (polite)",
        fitsPattern: [7],
        mnemonic:
          "'Ee-kee-mahs' — 'icky moss' on the road you walk to go somewhere",
      },
      {
        japanese: "たべます",
        romaji: "tabemasu",
        english: "to eat (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Tah-beh-mahs' — 'toboggan mass' of food to eat",
      },
      {
        japanese: "のみます",
        romaji: "nomimasu",
        english: "to drink (polite)",
        fitsPattern: [8],
        mnemonic:
          "'No-mee-mahs' — 'gnome he' drinks from a tiny cup",
      },
      {
        japanese: "みます",
        romaji: "mimasu",
        english: "to watch / to see (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Mee-mahs' — 'me, ma!' — watch me, Mom!",
      },
      {
        japanese: "ききます",
        romaji: "kikimasu",
        english: "to listen / to hear (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Kee-kee-mahs' — a 'key key' jingles and you listen",
      },
      {
        japanese: "がっこう",
        romaji: "gakkō",
        english: "school",
        fitsPattern: [7],
        mnemonic:
          "'Gah-koh' — 'got to go' to school every morning",
      },
      {
        japanese: "えいが",
        romaji: "eiga",
        english: "movie",
        fitsPattern: [8],
        mnemonic:
          "'Ay-gah' — 'aye, gah!' you say when the movie surprises you",
      },
      {
        japanese: "おんがく",
        romaji: "ongaku",
        english: "music",
        fitsPattern: [8],
        mnemonic:
          "'On-gah-ku' — 'on, go, cool!' when the beat drops",
      },
    ],
    examples: [
      {
        japanese: "がっこうにいきます。",
        romaji: "Gakkō ni ikimasu.",
        english: "I go to school.",
      },
      {
        japanese: "レストランにいきます。",
        romaji: "Resutoran ni ikimasu.",
        english: "I go to the restaurant.",
      },
      {
        japanese: "こうえんにいきます。",
        romaji: "Kōen ni ikimasu.",
        english: "I go to the park.",
      },
      {
        japanese: "すしをたべます。",
        romaji: "Sushi o tabemasu.",
        english: "I eat sushi.",
      },
      {
        japanese: "コーヒーをのみます。",
        romaji: "Kōhī o nomimasu.",
        english: "I drink coffee.",
      },
      {
        japanese: "テレビをみます。",
        romaji: "Terebi o mimasu.",
        english: "I watch television.",
      },
      {
        japanese: "おんがくをききます。",
        romaji: "Ongaku o kikimasu.",
        english: "I listen to music.",
      },
      {
        japanese: "えいがをみます。",
        romaji: "Eiga o mimasu.",
        english: "I watch a movie.",
      },
    ],
    practicePrompts: [
      "Say where you go every day using Pattern #7: ___にいきます",
      "Say what you eat or drink using Pattern #8: ___をたべます / ___をのみます",
      "Describe your evening: テレビをみます。おんがくをききます。",
      "Combine Patterns #7 and #8: レストランにいきます。すしをたべます。",
    ],
    languageInsight: {
      title: "Verbs Always Come Last",
      content:
        "You've now seen your first real verbs, and you'll notice they always appear at the end of the sentence. Japanese is a 'verb-final' language: the action comes after everything else. がっこうにいきます (school-to go) and すしをたべます (sushi eat). This structure means the speaker builds context — who, where, what — before committing to the action. It also means you can keep adding information before the verb: 'I, tomorrow, with my friend, to the restaurant... GO.' The verb is the punchline of every Japanese sentence.",
    },
    tutorNote:
      "Two patterns today, but they share the same logic: particle + verb. Pattern #7 uses に (direction: where you're going) and Pattern #8 uses を (object: what you're acting on). You already know を from Pattern #6 (___をください) — now instead of ください (please give me), you can use any verb. Try replacing ください with たべます, のみます, みます, or ききます to see how flexible this is.",
    quickReference:
      "Pattern #7: [place]にいきます = I go to [place] | Pattern #8: [thing]を[verb]ます = I [verb] [thing] | に=destination | を=object | いきます=go | たべます=eat | のみます=drink | みます=watch | ききます=listen",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #13 — Daily Activities",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "The rhythm of verb-final sentences. Notice how the verb (ます form) always lands at the very end. Listen for に before destinations and を before objects.",
    },
  },

  {
    day: 14,
    dayType: "new-pattern",
    title: "Pattern #9: I ___ at ___",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Master Pattern #9: ___で___ます (I [verb] at [place])",
      "Understand the で particle (location of action)",
      "Learn vocabulary for places where you do activities",
      "Combine Patterns #7, #8, and #9 to describe your routine",
    ],
    pattern: {
      number: 9,
      japanese: "___で___ます",
      english: "I [verb] at [place]",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Place — where the action happens",
        },
        {
          text: "で",
          role: "particle",
          explanation:
            "Location-of-action marker (where you DO something)",
        },
        {
          text: "___ます",
          role: "verb",
          explanation: "Action in polite form",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "カフェ",
        romaji: "kafe",
        english: "café",
        fitsPattern: [7, 9],
        mnemonic:
          "Just like 'café' — pronounced 'ka-feh' without the accent",
      },
      {
        japanese: "としょかん",
        romaji: "toshokan",
        english: "library",
        fitsPattern: [7, 9],
        mnemonic:
          "'Toe-show-con' — toes show up at the convention (at the library)",
      },
      {
        japanese: "こうえん",
        romaji: "kōen",
        english: "park",
        fitsPattern: [7, 9],
        mnemonic:
          "'Koh-en' — imagine tossing a 'coin' into a park fountain",
      },
      {
        japanese: "デパート",
        romaji: "depāto",
        english: "department store",
        fitsPattern: [7, 9],
        mnemonic:
          "'De-pah-to' — 'depart' from the department store with shopping bags",
      },
      {
        japanese: "うち",
        romaji: "uchi",
        english: "home / house",
        fitsPattern: [7, 9],
        mnemonic:
          "'Oo-chi' — like saying 'ouch!' bumping into furniture at home",
      },
      {
        japanese: "ジム",
        romaji: "jimu",
        english: "gym",
        fitsPattern: [7, 9],
        mnemonic:
          "'Jee-mu' — sounds like 'gym' with a Japanese twist",
      },
      {
        japanese: "べんきょうします",
        romaji: "benkyō shimasu",
        english: "to study (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Ben-kyoh she-mahs' — 'Ben's cue to study' — Ben studies on cue",
      },
    ],
    examples: [
      {
        japanese: "レストランでたべます。",
        romaji: "Resutoran de tabemasu.",
        english: "I eat at the restaurant.",
      },
      {
        japanese: "カフェでコーヒーをのみます。",
        romaji: "Kafe de kōhī o nomimasu.",
        english: "I drink coffee at the café.",
      },
      {
        japanese: "としょかんでべんきょうします。",
        romaji: "Toshokan de benkyō shimasu.",
        english: "I study at the library.",
      },
      {
        japanese: "うちでテレビをみます。",
        romaji: "Uchi de terebi o mimasu.",
        english: "I watch TV at home.",
      },
      {
        japanese: "こうえんでおんがくをききます。",
        romaji: "Kōen de ongaku o kikimasu.",
        english: "I listen to music at the park.",
      },
      {
        japanese: "デパートでかいものをします。",
        romaji: "Depāto de kaimono o shimasu.",
        english: "I shop at the department store.",
      },
      {
        japanese: "ジムでうんどうします。",
        romaji: "Jimu de undō shimasu.",
        english: "I exercise at the gym.",
      },
    ],
    practicePrompts: [
      "Say where you study: としょかんでべんきょうします or うちでべんきょうします",
      "Describe your morning routine using で: カフェでコーヒーをのみます",
      "Chain Patterns #7 + #9: レストランにいきます。レストランでたべます。",
      "Say three things you do at home: うちで___ます",
    ],
    languageInsight: {
      title: "Particles as Semantic Tags",
      content:
        "By now you've met several particles: は (topic), か (question), を (object), に (destination), and now で (location of action). Think of particles as color-coded tags you attach to words. は = 'I'm talking about this,' を = 'this is what I'm acting on,' に = 'this is where I'm heading,' で = 'this is where I'm doing it.' The beauty is that because particles mark each word's role, word order becomes flexible. カフェでコーヒーをのみます and コーヒーをカフェでのみます mean the same thing — the particles keep the meaning clear regardless of order.",
    },
    tutorNote:
      "The trickiest part today is the difference between に and で. Both involve places, but: に marks where you GO (destination), while で marks where you DO something (location of action). がっこうにいきます = 'I go TO school.' がっこうでべんきょうします = 'I study AT school.' A simple test: if the verb is いきます (go), use に. For almost any other action verb, use で. Try combining them: がっこうにいきます。がっこうでべんきょうします。",
    quickReference:
      "Pattern #9: [place]で[verb]ます = I [verb] at [place] | で = location of action | に vs で: に = where you GO, で = where you DO | カフェ=café | としょかん=library | こうえん=park | デパート=dept. store | うち=home | ジム=gym",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #14 — Where Do You Do Things?",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "The で particle before action verbs. Compare it with に before いきます. Notice how native speakers combine both: ___にいきます, then ___で___ます.",
    },
  },

  {
    day: 15,
    dayType: "new-pattern",
    title: "Pattern #10: What is ___?",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Master Pattern #10: ___はなんですか？ (What is ___?)",
      "Learn vocabulary for hobbies, food types, and occupations",
      "Hold your first multi-turn conversation using Phase 2 patterns",
      "Ask and answer 'what' questions naturally",
    ],
    pattern: {
      number: 10,
      japanese: "___はなんですか？",
      english: "What is ___?",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "The topic you're asking about",
        },
        {
          text: "は",
          role: "particle",
          explanation: "Topic marker (pronounced 'wa')",
        },
        {
          text: "なん",
          role: "fixed",
          explanation: "What",
        },
        {
          text: "です",
          role: "fixed",
          explanation: "Polite copula",
        },
        {
          text: "か",
          role: "particle",
          explanation: "Question marker",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "しゅみ",
        romaji: "shumi",
        english: "hobby",
        fitsPattern: [10],
        mnemonic:
          "'Shoe-mee' — 'show me' your hobby!",
      },
      {
        japanese: "たべもの",
        romaji: "tabemono",
        english: "food",
        fitsPattern: [10],
        mnemonic:
          "たべ (eat) + もの (thing) = 'an eat-thing' = food",
      },
      {
        japanese: "のみもの",
        romaji: "nomimono",
        english: "drink / beverage",
        fitsPattern: [10],
        mnemonic:
          "のみ (drink) + もの (thing) = 'a drink-thing' = beverage",
      },
      {
        japanese: "りょうり",
        romaji: "ryōri",
        english: "cooking / cuisine",
        fitsPattern: [8, 10],
        mnemonic:
          "'Ryoh-ree' — 'royal' cooking fit for a king",
      },
      {
        japanese: "おしごと",
        romaji: "oshigoto",
        english: "job / work (polite)",
        fitsPattern: [10],
        mnemonic:
          "お (polite prefix) + しごと (work) — the respectful way to ask about someone's job",
      },
      {
        japanese: "あれ",
        romaji: "are",
        english: "that (over there)",
        fitsPattern: [10],
        mnemonic:
          "'Ah-reh' — 'are' you looking at that thing over there?",
      },
    ],
    examples: [
      {
        japanese: "これはなんですか？",
        romaji: "Kore wa nan desu ka?",
        english: "What is this?",
      },
      {
        japanese: "あれはなんですか？",
        romaji: "Are wa nan desu ka?",
        english: "What is that over there?",
      },
      {
        japanese: "しゅみはなんですか？",
        romaji: "Shumi wa nan desu ka?",
        english: "What is your hobby?",
      },
      {
        japanese: "おしごとはなんですか？",
        romaji: "Oshigoto wa nan desu ka?",
        english: "What is your job?",
      },
      {
        japanese: "のみものはなんですか？",
        romaji: "Nomimono wa nan desu ka?",
        english: "What is the drink?",
      },
      {
        japanese: "にほんりょうりはなんですか？",
        romaji: "Nihon ryōri wa nan desu ka?",
        english: "What is Japanese cuisine?",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "しゅみはなんですか？",
        romaji: "Shumi wa nan desu ka?",
        english: "What is your hobby?",
      },
      {
        speaker: "You",
        japanese: "えいがをみます。にほんのえいがはおもしろいです。",
        romaji: "Eiga o mimasu. Nihon no eiga wa omoshiroi desu.",
        english:
          "I watch movies. Japanese movies are interesting.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね。これはなんですか？",
        romaji: "Ii desu ne. Kore wa nan desu ka?",
        english: "That's nice. What is this?",
      },
      {
        speaker: "You",
        japanese:
          "それはおみやげです。アメリカのチョコレートです。",
        romaji: "Sore wa omiyage desu. Amerika no chokorēto desu.",
        english:
          "That is a souvenir. It's American chocolate.",
      },
      {
        speaker: "Tanaka",
        japanese: "ありがとうございます！",
        romaji: "Arigatō gozaimasu!",
        english: "Thank you!",
      },
    ],
    practicePrompts: [
      "Ask what something is by pointing: これはなんですか？",
      "Ask about someone's hobby: しゅみはなんですか？ and answer with your own",
      "Ask about someone's job: おしごとはなんですか？",
      "Practice a mini-conversation: ask what something is, then respond with ___です",
    ],
    languageInsight: {
      title: "Question Words Replace the Answer",
      content:
        "In English, question words jump to the front of a sentence: 'What is this?' But in Japanese, the question word sits exactly where the answer would go. しゅみはおんがくです (My hobby is music) → しゅみはなんですか？ (My hobby is what?). The sentence structure stays identical — なん just slides into the answer slot. This makes Japanese questions very predictable: find the question word, and you know exactly what information is being requested. The same logic applies to どこ (where), だれ (who), and いつ (when), which you'll learn next.",
    },
    tutorNote:
      "Pattern #10 builds directly on Pattern #4 (___は___です). You already know how to say 'My hobby is music' (しゅみはおんがくです). To ask 'What is your hobby?', just replace the answer with なん: しゅみはなんですか？ This 'swap the answer for a question word' technique works for every question pattern in Japanese. Once you internalize it, asking questions becomes automatic.",
    quickReference:
      "Pattern #10: [topic]はなんですか？ = What is [topic]? | しゅみ=hobby | たべもの=food | のみもの=drink | りょうり=cooking | おしごと=job (polite) | あれ=that (over there) | これ=this | それ=that",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #15 — Asking What Things Are",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "The natural flow of なんですか questions in conversation. Notice how the answer mirrors the question structure: しゅみはなんですか？ → しゅみはおんがくです。",
    },
  },

  {
    day: 16,
    dayType: "new-pattern",
    title: "Patterns #11-12: Who and When?",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Master Pattern #11: だれが___ますか？ (Who [verbs]?)",
      "Master Pattern #12: いつ___ますか？ (When do you ___?)",
      "Understand the が particle as a subject marker",
      "Learn time-related vocabulary for answering 'when' questions",
    ],
    pattern: {
      number: 11,
      japanese: "だれが___ますか？",
      english: "Who [verbs]?",
      breakdown: [
        {
          text: "だれ",
          role: "fixed",
          explanation: "Who",
        },
        {
          text: "が",
          role: "particle",
          explanation:
            "Subject marker — identifies the doer of the action",
        },
        {
          text: "___ます",
          role: "verb",
          explanation: "Action in polite form",
        },
        {
          text: "か",
          role: "particle",
          explanation: "Question marker",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "いつ",
        romaji: "itsu",
        english: "when",
        fitsPattern: [12],
        mnemonic:
          "'Ee-tsu' — 'it's... when?' is always the question",
      },
      {
        japanese: "あした",
        romaji: "ashita",
        english: "tomorrow",
        fitsPattern: [12],
        mnemonic:
          "'Ah-shee-tah' — 'I shall' do it tomorrow (a-shi-ta)",
      },
      {
        japanese: "きのう",
        romaji: "kinō",
        english: "yesterday",
        fitsPattern: [12],
        mnemonic:
          "'Kee-noh' — 'keen on' remembering what happened yesterday",
      },
      {
        japanese: "まいにち",
        romaji: "mainichi",
        english: "every day",
        fitsPattern: [12],
        mnemonic:
          "'My-nee-chee' — 'my niche' is doing this every day",
      },
      {
        japanese: "しゅうまつ",
        romaji: "shūmatsu",
        english: "weekend",
        fitsPattern: [12],
        mnemonic:
          "'Shoe-mah-tsu' — 'shoe mats' come out for weekend cleaning",
      },
      {
        japanese: "あさ",
        romaji: "asa",
        english: "morning",
        fitsPattern: [12],
        mnemonic:
          "'Ah-sah' — 'ah, sah!' greeting someone in the morning",
      },
      {
        japanese: "よる",
        romaji: "yoru",
        english: "evening / night",
        fitsPattern: [12],
        mnemonic:
          "'Yo-ru' — 'yo, are you' still up at night?",
      },
    ],
    examples: [
      {
        japanese: "だれがいきますか？",
        romaji: "Dare ga ikimasu ka?",
        english: "Who goes?",
      },
      {
        japanese: "だれがたべますか？",
        romaji: "Dare ga tabemasu ka?",
        english: "Who eats?",
      },
      {
        japanese: "だれがのみますか？",
        romaji: "Dare ga nomimasu ka?",
        english: "Who drinks?",
      },
      {
        japanese: "だれがおんがくをききますか？",
        romaji: "Dare ga ongaku o kikimasu ka?",
        english: "Who listens to music?",
      },
      {
        japanese: "いつたべますか？",
        romaji: "Itsu tabemasu ka?",
        english: "When do you eat?",
      },
      {
        japanese: "いつがっこうにいきますか？",
        romaji: "Itsu gakkō ni ikimasu ka?",
        english: "When do you go to school?",
      },
      {
        japanese: "いつえいがをみますか？",
        romaji: "Itsu eiga o mimasu ka?",
        english: "When do you watch movies?",
      },
      {
        japanese: "いつコーヒーをのみますか？",
        romaji: "Itsu kōhī o nomimasu ka?",
        english: "When do you drink coffee?",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "いつえいがをみますか？",
        romaji: "Itsu eiga o mimasu ka?",
        english: "When do you watch movies?",
      },
      {
        speaker: "Friend",
        japanese: "しゅうまつにみます。",
        romaji: "Shūmatsu ni mimasu.",
        english: "I watch on weekends.",
      },
      {
        speaker: "You",
        japanese: "だれがいっしょにみますか？",
        romaji: "Dare ga issho ni mimasu ka?",
        english: "Who watches together with you?",
      },
      {
        speaker: "Friend",
        japanese: "すずきさんがみます。",
        romaji: "Suzuki-san ga mimasu.",
        english: "Suzuki watches (with me).",
      },
      {
        speaker: "You",
        japanese: "いいですね。",
        romaji: "Ii desu ne.",
        english: "That's nice.",
      },
    ],
    practicePrompts: [
      "Ask who goes to school: だれががっこうにいきますか？",
      "Ask when someone eats: いつたべますか？ and answer with a time word",
      "Ask who drinks coffee and answer: だれがコーヒーをのみますか？ — ___がのみます。",
      "Practice answering 'when' questions: あさ、よる、まいにち、しゅうまつ",
    ],
    languageInsight: {
      title: "は vs が: Topic vs Subject",
      content:
        "You now know two particles that mark 'who': は (topic) and が (subject). They're subtly different. は says 'speaking of X...' and highlights what comes AFTER it. が says 'X is the one who...' and highlights what comes BEFORE it. たなかさんはいきます = 'As for Tanaka, he goes' (you already knew about Tanaka). たなかさんがいきます = 'TANAKA is the one who goes' (answering 'who goes?'). With question words like だれ (who) and なに (what), you always use が, because you're asking 'WHO is the one that...?' This は/が distinction is considered the hardest part of Japanese grammar — even advanced learners refine their understanding over years.",
    },
    tutorNote:
      "Two new question patterns today, both following the same swap logic from Day 15: the question word sits where the answer goes. だれがいきますか？ → たなかさんがいきます。いつたべますか？ → あしたたべます。Notice that いつ (when) floats freely without a particle — it's an adverb that just sits before the verb. For だれ (who), you must use が (not は) because you're identifying the specific person. Don't overthink は vs が right now — just remember: with だれ, always use が.",
    quickReference:
      "Pattern #11: だれが[verb]ますか？ = Who [verbs]? | Pattern #12: いつ[verb]ますか？ = When do you [verb]? | が=subject marker | いつ=when | あした=tomorrow | きのう=yesterday | まいにち=every day | しゅうまつ=weekend | あさ=morning | よる=night",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #16 — Who and When",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "The が particle after だれ in questions. Notice how answers replace だれ with a specific person + が. For いつ questions, listen for time words at the start of the answer.",
    },
  },

  {
    day: 17,
    dayType: "vocab-expansion",
    title: "Verb Expansion",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Learn 10 new action verbs in polite (ます) form",
      "Use new verbs with Patterns #7, #8, and #9",
      "Build richer sentences about daily activities",
      "Understand that all polite verbs end in ます",
    ],
    usesPatterns: [7, 8, 9],
    vocabulary: [
      {
        japanese: "よみます",
        romaji: "yomimasu",
        english: "to read (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Yo-mee-mahs' — you read 'yo mama's' story",
      },
      {
        japanese: "かきます",
        romaji: "kakimasu",
        english: "to write (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Kah-kee-mahs' — a 'cocky' writer loves to write",
      },
      {
        japanese: "かいます",
        romaji: "kaimasu",
        english: "to buy (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Kai-mahs' — 'buy' rhymes with 'kai'",
      },
      {
        japanese: "はなします",
        romaji: "hanashimasu",
        english: "to speak / to talk (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Ha-na-shee-mahs' — 'Hannah she' speaks a lot",
      },
      {
        japanese: "つくります",
        romaji: "tsukurimasu",
        english: "to make / to create (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Tsu-ku-ree-mahs' — 'took a remix' — someone made a new version",
      },
      {
        japanese: "はたらきます",
        romaji: "hatarakimasu",
        english: "to work (polite)",
        fitsPattern: [9],
        mnemonic:
          "'Ha-ta-ra-kee-mahs' — 'hot rockers' work hard on stage",
      },
      {
        japanese: "ならいます",
        romaji: "naraimasu",
        english: "to learn (polite)",
        fitsPattern: [8, 9],
        mnemonic:
          "'Na-rah-ee-mahs' — 'narrate' what you learn",
      },
      {
        japanese: "あそびます",
        romaji: "asobimasu",
        english: "to play / to hang out (polite)",
        fitsPattern: [9],
        mnemonic:
          "'Ah-so-bee-mahs' — 'a Frisbee' game = playing outside",
      },
    ],
    examples: [
      {
        japanese: "ほんをよみます。",
        romaji: "Hon o yomimasu.",
        english: "I read a book.",
      },
      {
        japanese: "てがみをかきます。",
        romaji: "Tegami o kakimasu.",
        english: "I write a letter.",
      },
      {
        japanese: "コンビニでパンをかいます。",
        romaji: "Konbini de pan o kaimasu.",
        english: "I buy bread at the convenience store.",
      },
      {
        japanese: "にほんごをはなします。",
        romaji: "Nihongo o hanashimasu.",
        english: "I speak Japanese.",
      },
      {
        japanese: "うちでりょうりをつくります。",
        romaji: "Uchi de ryōri o tsukurimasu.",
        english: "I cook at home.",
      },
      {
        japanese: "カフェではたらきます。",
        romaji: "Kafe de hatarakimasu.",
        english: "I work at a café.",
      },
      {
        japanese: "にほんごをならいます。",
        romaji: "Nihongo o naraimasu.",
        english: "I learn Japanese.",
      },
      {
        japanese: "こうえんであそびます。",
        romaji: "Kōen de asobimasu.",
        english: "I hang out at the park.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "まいにちなにをしますか？",
        romaji: "Mainichi nani o shimasu ka?",
        english: "What do you do every day?",
      },
      {
        speaker: "Suzuki",
        japanese:
          "あさ、カフェではたらきます。よる、うちでほんをよみます。",
        romaji:
          "Asa, kafe de hatarakimasu. Yoru, uchi de hon o yomimasu.",
        english:
          "In the morning, I work at a café. At night, I read books at home.",
      },
      {
        speaker: "You",
        japanese: "いいですね。にほんごをはなしますか？",
        romaji: "Ii desu ne. Nihongo o hanashimasu ka?",
        english: "That's nice. Do you speak Japanese?",
      },
      {
        speaker: "Suzuki",
        japanese: "はい、すこしはなします。",
        romaji: "Hai, sukoshi hanashimasu.",
        english: "Yes, I speak a little.",
      },
    ],
    practicePrompts: [
      "Describe your daily routine using 5 different verbs",
      "Say what you buy at the convenience store: コンビニで___をかいます",
      "Say what language you speak or learn: ___をはなします / ___をならいます",
      "Combine place + object + verb: ___で___を___ます",
    ],
    languageInsight: {
      title: "The Elegance of ます",
      content:
        "Every polite verb you've learned ends in ます (masu). This isn't a coincidence — it's a deliberate feature of Japanese. The ます ending is like a politeness uniform: no matter how complex the verb is underneath, slapping ます on the end makes it polite and appropriate for any social situation. Underneath, Japanese verbs come in groups with different conjugation rules, but the ます form hides all that complexity. たべる→たべます, のむ→のみます, はなす→はなします. For now, just memorize the ます forms. You're building a solid foundation — the underlying conjugation patterns will make much more sense when you encounter them later.",
    },
    tutorNote:
      "You now have 13 verbs — enough to describe most of your daily life. Today also sneaks in two bonus verbs through examples: おしえます (oshiemasu = to teach) and うたいます (utaimasu = to sing). The key insight is that ALL polite verbs follow the same sentence patterns: ___をよみます, ___をかきます, ___ではたらきます. The patterns are like templates — just swap in different verbs and nouns to say completely new things.",
    quickReference:
      "New verbs: よみます=read | かきます=write | かいます=buy | はなします=speak | つくります=make | はたらきます=work | ならいます=learn | あそびます=play/hang out | All fit: [thing]を___ます and/or [place]で___ます",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #17 — Daily Routines",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "How speakers string multiple verb sentences together to describe routines. Notice the consistent ます ending on every verb and how smoothly sentences flow from one activity to the next.",
    },
  },

  {
    day: 18,
    dayType: "pattern-combo",
    title: "Q&A Conversations",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Combine Patterns #7–#12 into natural Q&A exchanges",
      "Practice asking and answering questions about activities, places, and people",
      "Learn conversational connectors for smoother speech",
      "Build confidence with multi-sentence conversations",
    ],
    usesPatterns: [7, 8, 9, 10, 11, 12],
    vocabulary: [
      {
        japanese: "そうですね",
        romaji: "sō desu ne",
        english: "that's right / I agree / let me see",
        mnemonic:
          "'Soh-des-neh' — 'so, that's it, neh?' = that's right",
      },
      {
        japanese: "それから",
        romaji: "sorekara",
        english: "and then / after that",
        mnemonic:
          "'So-reh-kah-rah' — 'so, re-car-a' = after that, we re-car (drive again)",
      },
      {
        japanese: "いっしょに",
        romaji: "issho ni",
        english: "together",
        mnemonic:
          "'Ee-ssho-nee' — 'each show knee' = we all show our knees together",
      },
      {
        japanese: "ときどき",
        romaji: "tokidoki",
        english: "sometimes",
        mnemonic:
          "'Toe-key-doe-key' — 'tick-tock' like a clock that only sometimes chimes",
      },
      {
        japanese: "よく",
        romaji: "yoku",
        english: "often / well",
        mnemonic:
          "'Yo-ku' — 'yoke' — you're yoked to something you do often",
      },
      {
        japanese: "まいあさ",
        romaji: "maiasa",
        english: "every morning",
        mnemonic:
          "'My-ah-sah' — 'my' + あさ (morning) = my every morning",
      },
    ],
    examples: [
      {
        japanese: "しゅみはなんですか？ — えいがをみます。",
        romaji: "Shumi wa nan desu ka? — Eiga o mimasu.",
        english: "What is your hobby? — I watch movies.",
      },
      {
        japanese:
          "いつこうえんにいきますか？ — しゅうまつにいきます。",
        romaji: "Itsu kōen ni ikimasu ka? — Shūmatsu ni ikimasu.",
        english:
          "When do you go to the park? — I go on weekends.",
      },
      {
        japanese:
          "だれがりょうりをつくりますか？ — ははがつくります。",
        romaji: "Dare ga ryōri o tsukurimasu ka? — Haha ga tsukurimasu.",
        english: "Who cooks? — My mother cooks.",
      },
      {
        japanese:
          "まいあさコーヒーをのみます。それから、がっこうにいきます。",
        romaji:
          "Maiasa kōhī o nomimasu. Sorekara, gakkō ni ikimasu.",
        english:
          "I drink coffee every morning. Then, I go to school.",
      },
      {
        japanese: "よくカフェでべんきょうします。",
        romaji: "Yoku kafe de benkyō shimasu.",
        english: "I often study at the café.",
      },
      {
        japanese:
          "ときどきともだちとレストランにいきます。",
        romaji: "Tokidoki tomodachi to resutoran ni ikimasu.",
        english:
          "I sometimes go to a restaurant with friends.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [10, 8],
        japanese: "しゅみはなんですか？ — おんがくをききます。",
        romaji: "Shumi wa nan desu ka? — Ongaku o kikimasu.",
        english: "What is your hobby? — I listen to music.",
      },
      {
        patternsUsed: [12, 7],
        japanese:
          "いつがっこうにいきますか？ — まいにちいきます。",
        romaji: "Itsu gakkō ni ikimasu ka? — Mainichi ikimasu.",
        english:
          "When do you go to school? — I go every day.",
      },
      {
        patternsUsed: [11, 9],
        japanese:
          "だれがとしょかんでべんきょうしますか？ — ともだちがべんきょうします。",
        romaji:
          "Dare ga toshokan de benkyō shimasu ka? — Tomodachi ga benkyō shimasu.",
        english:
          "Who studies at the library? — My friend studies.",
      },
      {
        patternsUsed: [7, 8, 9],
        japanese:
          "レストランにいきます。レストランですしをたべます。",
        romaji:
          "Resutoran ni ikimasu. Resutoran de sushi o tabemasu.",
        english:
          "I go to the restaurant. I eat sushi at the restaurant.",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "しゅうまつ、こうえんにいきますか？",
        romaji: "Shūmatsu, kōen ni ikimasu ka?",
        english: "Are you going to the park this weekend?",
      },
      {
        speaker: "You",
        japanese: "はい、いきます。いつですか？",
        romaji: "Hai, ikimasu. Itsu desu ka?",
        english: "Yes, I'll go. When?",
      },
      {
        speaker: "Yuki",
        japanese: "あさいきます。いっしょにいきますか？",
        romaji: "Asa ikimasu. Issho ni ikimasu ka?",
        english: "I'll go in the morning. Shall we go together?",
      },
      {
        speaker: "You",
        japanese:
          "はい。それから、カフェでコーヒーをのみます。",
        romaji: "Hai. Sorekara, kafe de kōhī o nomimasu.",
        english: "Yes. Then, let's have coffee at a café.",
      },
      {
        speaker: "Yuki",
        japanese: "いいですね。だれがきますか？",
        romaji: "Ii desu ne. Dare ga kimasu ka?",
        english: "Sounds good. Who's coming?",
      },
      {
        speaker: "You",
        japanese: "たなかさんもきます。",
        romaji: "Tanaka-san mo kimasu.",
        english: "Tanaka is coming too.",
      },
    ],
    practicePrompts: [
      "Ask and answer 3 しゅみはなんですか？ questions with different hobbies",
      "Describe your morning routine using それから to connect sentences",
      "Role-play: ask a friend いつ and だれ questions about their weekend plans",
      "Combine all Phase 2 patterns in a 4-sentence description of your day",
    ],
    languageInsight: {
      title: "The Unspoken Subject",
      content:
        "You may have noticed that Japanese sentences often lack a visible subject. コーヒーをのみます could mean 'I drink coffee,' 'You drink coffee,' or 'He/she drinks coffee' — context determines who. This isn't sloppy grammar; it's efficiency. Japanese speakers establish the topic early (usually with は), then omit it for the rest of the conversation. If Tanaka says しゅうまつ、こうえんにいきます, everyone knows Tanaka is the one going. Only when the subject changes or is ambiguous do speakers explicitly state it. This 'pro-drop' feature makes Japanese conversations feel lighter and faster than English equivalents.",
    },
    tutorNote:
      "Today is about fluency, not new grammar. You have 6 new patterns (#7–#12) — now make them flow together. The connectors そうですね, それから, and いっしょに are social lubricants that make your speech sound natural. Try narrating your day in Japanese: まいあさコーヒーをのみます。それから、がっこうにいきます。がっこうでにほんごをならいます。The more you chain sentences, the more natural it becomes.",
    quickReference:
      "Q&A pairs: なんですか→___です | だれが→___が | いつ→time word | Connectors: そうですね=that's right | それから=then | いっしょに=together | ときどき=sometimes | よく=often | まいあさ=every morning",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #18 — Making Plans",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "How speakers chain questions and answers together naturally. Listen for それから connecting sentences and ときどき/よく expressing frequency.",
    },
  },

  {
    day: 19,
    dayType: "vocab-expansion",
    title: "Building Your Word Bank",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Learn vocabulary for foods, drinks, and everyday objects",
      "Apply new words within all patterns learned so far",
      "Build practical food-ordering and shopping vocabulary",
      "Practice reading both hiragana and katakana words",
    ],
    usesPatterns: [1, 4, 6, 7, 8, 9],
    vocabulary: [
      {
        japanese: "ラーメン",
        romaji: "rāmen",
        english: "ramen (noodle soup)",
        fitsPattern: [6, 8],
        mnemonic:
          "Already English! Japan's beloved noodle soup — ラーメン is everywhere",
      },
      {
        japanese: "すし",
        romaji: "sushi",
        english: "sushi",
        fitsPattern: [6, 8],
        mnemonic:
          "Already English! Japan's most famous culinary export",
      },
      {
        japanese: "やさい",
        romaji: "yasai",
        english: "vegetables",
        fitsPattern: [6, 8],
        mnemonic:
          "'Yah-sigh' — kids sigh when they see vegetables on their plate",
      },
      {
        japanese: "さかな",
        romaji: "sakana",
        english: "fish",
        fitsPattern: [6, 8],
        mnemonic:
          "'Sah-kah-nah' — imagine a 'sock on a' fish at the market",
      },
      {
        japanese: "たまご",
        romaji: "tamago",
        english: "egg",
        fitsPattern: [6, 8],
        mnemonic:
          "'Tah-mah-go' — like Tamagotchi, the egg-shaped virtual pet",
      },
      {
        japanese: "ジュース",
        romaji: "jūsu",
        english: "juice",
        fitsPattern: [6, 8],
        mnemonic:
          "'Joo-su' — sounds like 'juice' with a Japanese twist",
      },
      {
        japanese: "ぎゅうにゅう",
        romaji: "gyūnyū",
        english: "milk",
        fitsPattern: [6, 8],
        mnemonic:
          "'Gyoo-nyoo' — the cow says 'gyū' (moo in Japanese) and gives you milk",
      },
      {
        japanese: "かばん",
        romaji: "kaban",
        english: "bag",
        fitsPattern: [4, 6],
        mnemonic:
          "'Kah-ban' — imagine a 'cabin' bag for travel",
      },
    ],
    examples: [
      {
        japanese: "ラーメンをたべます。",
        romaji: "Rāmen o tabemasu.",
        english: "I eat ramen.",
      },
      {
        japanese: "ジュースをのみます。",
        romaji: "Jūsu o nomimasu.",
        english: "I drink juice.",
      },
      {
        japanese: "さかなはおいしいです。",
        romaji: "Sakana wa oishii desu.",
        english: "Fish is delicious.",
      },
      {
        japanese: "スーパーでやさいをかいます。",
        romaji: "Sūpā de yasai o kaimasu.",
        english: "I buy vegetables at the supermarket.",
      },
      {
        japanese: "あさ、たまごをたべます。ぎゅうにゅうをのみます。",
        romaji: "Asa, tamago o tabemasu. Gyūnyū o nomimasu.",
        english: "In the morning, I eat eggs. I drink milk.",
      },
      {
        japanese: "レストランですしをたべます。",
        romaji: "Resutoran de sushi o tabemasu.",
        english: "I eat sushi at the restaurant.",
      },
      {
        japanese: "あたらしいかばんをかいます。",
        romaji: "Atarashii kaban o kaimasu.",
        english: "I buy a new bag.",
      },
    ],
    dialogue: [
      {
        speaker: "Waiter",
        japanese: "いらっしゃいませ。",
        romaji: "Irasshaimase.",
        english: "Welcome!",
      },
      {
        speaker: "You",
        japanese: "すみません。ラーメンをください。",
        romaji: "Sumimasen. Rāmen o kudasai.",
        english: "Excuse me. Ramen, please.",
      },
      {
        speaker: "Friend",
        japanese: "すしをください。のみものはなんですか？",
        romaji: "Sushi o kudasai. Nomimono wa nan desu ka?",
        english: "Sushi, please. What drinks do you have?",
      },
      {
        speaker: "Waiter",
        japanese: "おちゃとコーヒーとジュースです。",
        romaji: "Ocha to kōhī to jūsu desu.",
        english: "We have tea, coffee, and juice.",
      },
      {
        speaker: "You",
        japanese: "おちゃをください。",
        romaji: "Ocha o kudasai.",
        english: "Tea, please.",
      },
      {
        speaker: "Friend",
        japanese: "ジュースをください。",
        romaji: "Jūsu o kudasai.",
        english: "Juice, please.",
      },
      {
        speaker: "Waiter",
        japanese: "はい、かしこまりました。",
        romaji: "Hai, kashikomarimashita.",
        english: "Certainly.",
      },
    ],
    practicePrompts: [
      "Order a full meal at a restaurant: food + drink using をください",
      "Describe what you eat for breakfast, lunch, and dinner",
      "Go 'shopping': say what you buy and where using ___で___をかいます",
      "Describe a food using Pattern #4: さかなはおいしいです",
    ],
    languageInsight: {
      title: "Japan Still Borrows Words — And Creates New Ones",
      content:
        "Japanese word-borrowing didn't stop in the Meiji era. Modern Japanese creates new katakana words constantly, often in surprising ways. 'Salary man' (サラリーマン) was coined in Japan to mean office worker — native English speakers don't use this term. 'Skinship' (スキンシップ) means physical affection. 'Naive' (ナイーブ) means 'sensitive' in Japanese, not 'innocent.' And some katakana words are purely Japanese inventions: マンション (mansion) means 'apartment,' not a grand house. These 'wasei-eigo' (Japan-made English) words show that Japanese doesn't just borrow — it creatively reshapes foreign words to fill gaps in its own vocabulary.",
    },
    tutorNote:
      "With this food and drink vocabulary, you can now survive in any Japanese restaurant. The key phrase flow is: いらっしゃいませ (welcome!) → メニューをください (menu please) → ___をください (order) → おかいけいをください (check please) → ありがとうございます (thanks). Practice this flow until it's automatic — it covers 90% of restaurant interactions in Japan.",
    quickReference:
      "Food: ラーメン=ramen | すし=sushi | やさい=vegetables | さかな=fish | たまご=egg | Drinks: ジュース=juice | ぎゅうにゅう=milk | Other: かばん=bag | Patterns: ___をたべます (eat) | ___をのみます (drink) | ___をかいます (buy)",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #19 — Ordering Food",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "Restaurant vocabulary in action. Listen for をください orders and the waiter's responses. Notice the と particle connecting items in lists: おちゃとコーヒーとジュース.",
    },
  },

  {
    day: 20,
    dayType: "review",
    title: "Phase 2 Review",
    phase: 2,
    phaseTitle: "Object & Action Patterns + Katakana",
    objectives: [
      "Review and solidify all 12 patterns from Phases 1 and 2",
      "Confirm katakana reading ability (all 46 + dakuten + combos)",
      "Review all vocabulary and verbs from Days 11–19",
      "Self-assess readiness for Phase 3",
    ],
    usesPatterns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    vocabulary: [
      {
        japanese: "にほんご",
        romaji: "nihongo",
        english: "Japanese language",
        mnemonic:
          "にほん (Japan) + ご (language) — notice the pattern: [country]ご = [country's] language",
      },
      {
        japanese: "えいご",
        romaji: "eigo",
        english: "English language",
        mnemonic:
          "えい (from English/英) + ご (language) — same pattern as にほんご",
      },
      {
        japanese: "じょうず",
        romaji: "jōzu",
        english: "skilled / good at",
        mnemonic:
          "'Joh-zu' — 'Joe's Zoo' is well-run because he's skilled at managing it",
      },
      {
        japanese: "すこし",
        romaji: "sukoshi",
        english: "a little / a bit",
        mnemonic:
          "'Su-ko-shi' — 'a scoochy' bit = just a little",
      },
      {
        japanese: "かんたん",
        romaji: "kantan",
        english: "easy / simple",
        mnemonic:
          "'Kan-tan' — 'can tan' easily in the sun = it's easy",
      },
      {
        japanese: "むずかしい",
        romaji: "muzukashii",
        english: "difficult",
        mnemonic:
          "'Mu-zu-ka-shee' — 'could a moose ski?' That sounds difficult!",
      },
    ],
    examples: [
      {
        japanese: "がっこうにいきます。がっこうでにほんごをならいます。",
        romaji: "Gakkō ni ikimasu. Gakkō de nihongo o naraimasu.",
        english:
          "I go to school. I learn Japanese at school. (Patterns #7, #9)",
      },
      {
        japanese: "すしをたべます。おいしいです。",
        romaji: "Sushi o tabemasu. Oishii desu.",
        english: "I eat sushi. It's delicious. (Pattern #8)",
      },
      {
        japanese: "しゅみはなんですか？ — おんがくをききます。",
        romaji: "Shumi wa nan desu ka? — Ongaku o kikimasu.",
        english:
          "What is your hobby? — I listen to music. (Patterns #10, #8)",
      },
      {
        japanese: "だれがりょうりをつくりますか？",
        romaji: "Dare ga ryōri o tsukurimasu ka?",
        english: "Who cooks? (Pattern #11)",
      },
      {
        japanese: "いつがっこうにいきますか？ — まいにちいきます。",
        romaji: "Itsu gakkō ni ikimasu ka? — Mainichi ikimasu.",
        english:
          "When do you go to school? — Every day. (Pattern #12)",
      },
      {
        japanese: "にほんごはすこしむずかしいです。でもおもしろいです。",
        romaji: "Nihongo wa sukoshi muzukashii desu. Demo omoshiroi desu.",
        english:
          "Japanese is a little difficult. But it's interesting. (Pattern #4)",
      },
      {
        japanese:
          "にほんごをすこしはなします。",
        romaji: "Nihongo o sukoshi hanashimasu.",
        english: "I speak a little Japanese. (Pattern #8)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4, 10],
        japanese:
          "がくせいです。しゅみはなんですか？ — えいがです。にほんのえいがはおもしろいです。",
        romaji:
          "Gakusei desu. Shumi wa nan desu ka? — Eiga desu. Nihon no eiga wa omoshiroi desu.",
        english:
          "I'm a student. What is your hobby? — Movies. Japanese movies are interesting.",
      },
      {
        patternsUsed: [7, 9, 8],
        japanese:
          "レストランにいきます。レストランでさかなをたべます。おちゃをのみます。",
        romaji:
          "Resutoran ni ikimasu. Resutoran de sakana o tabemasu. Ocha o nomimasu.",
        english:
          "I go to the restaurant. I eat fish at the restaurant. I drink tea.",
      },
      {
        patternsUsed: [11, 12, 8],
        japanese:
          "だれがりょうりをつくりますか？ — たなかさんがつくります。いつたべますか？ — よるにたべます。",
        romaji:
          "Dare ga ryōri o tsukurimasu ka? — Tanaka-san ga tsukurimasu. Itsu tabemasu ka? — Yoru ni tabemasu.",
        english:
          "Who cooks? — Tanaka does. When do you eat? — I eat in the evening.",
      },
      {
        patternsUsed: [3, 2, 1, 6],
        japanese:
          "にほんじんですか？ — いいえ、にほんじんじゃないです。アメリカじんです。コーヒーをください。",
        romaji:
          "Nihonjin desu ka? — Iie, nihonjin ja nai desu. Amerikajin desu. Kōhī o kudasai.",
        english:
          "Are you Japanese? — No, I'm not Japanese. I'm American. Coffee, please.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "こんにちは。おしごとはなんですか？",
        romaji: "Konnichiwa. Oshigoto wa nan desu ka?",
        english: "Hello. What is your job?",
      },
      {
        speaker: "You",
        japanese: "がくせいです。にほんごをならいます。",
        romaji: "Gakusei desu. Nihongo o naraimasu.",
        english: "I'm a student. I learn Japanese.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね。いつべんきょうしますか？",
        romaji: "Ii desu ne. Itsu benkyō shimasu ka?",
        english: "That's nice. When do you study?",
      },
      {
        speaker: "You",
        japanese:
          "まいにちべんきょうします。としょかんでべんきょうします。",
        romaji:
          "Mainichi benkyō shimasu. Toshokan de benkyō shimasu.",
        english:
          "I study every day. I study at the library.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんはどうですか？",
        romaji: "Nihon wa dō desu ka?",
        english: "How is Japan?",
      },
      {
        speaker: "You",
        japanese:
          "にほんはきれいです。たべものはおいしいです。よくラーメンをたべます。",
        romaji:
          "Nihon wa kirei desu. Tabemono wa oishii desu. Yoku rāmen o tabemasu.",
        english:
          "Japan is beautiful. The food is delicious. I often eat ramen.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんごがじょうずですね。",
        romaji: "Nihongo ga jōzu desu ne.",
        english: "Your Japanese is good!",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。すこしはなします。",
        romaji: "Arigatō gozaimasu. Sukoshi hanashimasu.",
        english: "Thank you. I speak a little.",
      },
    ],
    practicePrompts: [
      "Write all 46 katakana from memory, then check yourself",
      "Describe your full daily routine using at least 6 different verbs",
      "Role-play: meet someone new — introduce yourself, ask about hobbies and job, make plans",
      "Create a Q&A dialogue using Patterns #10, #11, and #12",
      "Test yourself: read these without romaji — レストランでラーメンをたべます。しゅみはなんですか？だれがいきますか？",
    ],
    languageInsight: {
      title: "Two Phonetic Scripts, One Language",
      content:
        "You've now mastered both hiragana and katakana — the two phonetic scripts that form the backbone of written Japanese. Together they can write any Japanese sound, but they're used for different purposes. Hiragana handles native Japanese words and grammatical particles (は, を, に, で). Katakana handles foreign loanwords (コーヒー, レストラン), scientific terms, onomatopoeia (ワンワン = woof woof), and emphasis (like CAPITALS in English). In real Japanese text, you'll see both scripts mixed freely in a single sentence: カフェでコーヒーをのみます uses katakana for the borrowed words and hiragana for the Japanese grammar. Phase 3 will introduce the third script: kanji, the Chinese characters that pack meaning into dense symbols.",
    },
    tutorNote:
      "You've completed Phase 2! You can now read both hiragana AND katakana, use 12 sentence patterns, handle 13+ verbs, and hold real conversations about daily life. That's enormous progress. Before moving to Phase 3, make sure you can: (1) read katakana as fluently as hiragana, (2) use all 6 new patterns without hesitation, and (3) describe your day in Japanese using multiple connected sentences. Phase 3 introduces adjective patterns and past tense — you'll finally be able to say what happened yesterday and express opinions.",
    quickReference:
      "Phase 2 Patterns: #7 [place]にいきます (go to) | #8 [thing]を[verb]ます (do something) | #9 [place]で[verb]ます (do at) | #10 ___はなんですか (what is?) | #11 だれが[verb]ますか (who?) | #12 いつ[verb]ますか (when?) | Key particles: に=destination, を=object, で=location of action, が=subject",
    listeningRec: {
      source: "JapanesePod101",
      title: "Absolute Beginner S1 #20 — Review and Practice",
      url: "https://www.japanesepod101.com/lesson-library/absolute-beginner",
      listenFor:
        "Try to catch every pattern from Phases 1 and 2 in natural conversation. Challenge: listen without the transcript and see how much you understand. Pay special attention to particles — they're the key to Japanese grammar.",
    },
  },
];
