import { Lesson } from "@/lib/types";

export const phase3Lessons: Lesson[] = [
  {
    day: 21,
    dayType: "vocab-expansion",
    title: "Understanding Verb Groups",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Understand the three verb groups: u-verbs (Group 1), ru-verbs (Group 2), and irregular (Group 3)",
      "Learn 8 new verbs and identify their groups",
      "Recognize that all polite ます forms conjugate identically regardless of group",
      "Prepare for tense conjugation in upcoming lessons",
    ],
    usesPatterns: [8],
    vocabulary: [
      {
        japanese: "おきます",
        romaji: "okimasu",
        english: "to wake up / to get up (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Oh-kee-mahs' — 'OK I'm up!' when the alarm rings in the morning",
      },
      {
        japanese: "ねます",
        romaji: "nemasu",
        english: "to sleep / to go to bed (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Neh-mahs' — 'nap' starts with 'ne' — time to take a nap",
      },
      {
        japanese: "します",
        romaji: "shimasu",
        english: "to do (polite, irregular)",
        fitsPattern: [8],
        mnemonic:
          "'She-mahs' — 'she does' everything — する is the ultimate do-it-all verb",
      },
      {
        japanese: "きます",
        romaji: "kimasu",
        english: "to come (polite, irregular)",
        fitsPattern: [8],
        mnemonic:
          "'Kee-mahs' — 'key' unlocks the door when someone comes over",
      },
      {
        japanese: "あるきます",
        romaji: "arukimasu",
        english: "to walk (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Ah-roo-kee-mahs' — 'a rookie' walks slowly on their first day",
      },
      {
        japanese: "うたいます",
        romaji: "utaimasu",
        english: "to sing (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Oo-tah-ee-mahs' — 'ooh, tie' your voice into a melody when you sing",
      },
      {
        japanese: "およぎます",
        romaji: "oyogimasu",
        english: "to swim (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Oh-yo-gee-mahs' — 'oh yo, gee!' you say diving into the pool",
      },
      {
        japanese: "おしえます",
        romaji: "oshiemasu",
        english: "to teach (polite)",
        fitsPattern: [8],
        mnemonic:
          "'Oh-shee-eh-mahs' — 'oh she' teaches the class every morning",
      },
    ],
    examples: [
      {
        japanese: "まいにちろくじにおきます。",
        romaji: "Mainichi rokuji ni okimasu.",
        english: "I wake up at six every day.",
      },
      {
        japanese: "よるじゅういちじにねます。",
        romaji: "Yoru jūichiji ni nemasu.",
        english: "I go to bed at eleven at night.",
      },
      {
        japanese: "がっこうにあるきます。",
        romaji: "Gakkō ni arukimasu.",
        english: "I walk to school.",
      },
      {
        japanese: "カラオケでうたいます。",
        romaji: "Karaoke de utaimasu.",
        english: "I sing at karaoke.",
      },
      {
        japanese: "プールでおよぎます。",
        romaji: "Pūru de oyogimasu.",
        english: "I swim at the pool.",
      },
      {
        japanese: "せんせいがにほんごをおしえます。",
        romaji: "Sensei ga nihongo o oshiemasu.",
        english: "The teacher teaches Japanese.",
      },
      {
        japanese: "ともだちがきます。",
        romaji: "Tomodachi ga kimasu.",
        english: "My friend is coming.",
      },
      {
        japanese: "しゅうまつ、なにをしますか？",
        romaji: "Shūmatsu, nani o shimasu ka?",
        english: "What do you do on weekends?",
      },
    ],
    practicePrompts: [
      "Describe your morning routine: ___じにおきます。___にあるきます。",
      "Say what activities you do using します: べんきょうします、うんどうします、りょうりをします",
      "Categorize verbs you know into groups: u-verbs (のむ, かく, いく), ru-verbs (たべる, みる), irregular (する, くる)",
      "Use きます in a sentence: あした、ともだちが___にきます",
      "Describe your weekend: しゅうまつ、___をします。___で___ます。",
    ],
    languageInsight: {
      title: "The Three Verb Groups",
      content:
        "Japanese verbs fall into three predictable groups. U-verbs (Group 1) have dictionary forms ending in an う-column sound: かく, はなす, のむ, あるく. Ru-verbs (Group 2) have dictionary forms ending in -いる or -える: たべる, みる, おきる, ねる. Irregular verbs (Group 3) are just two: する (to do) and くる (to come). In polite ます form, all three groups look identical — たべます, のみます, します all end the same way. The groups only matter when you conjugate beyond ます, which is coming soon.",
    },
    tutorNote:
      "Today is about understanding, not memorizing charts. You already know how to use verbs in ます form, and that works identically for all groups. Starting tomorrow, you'll change ます to ました (past), ません (negative), and ませんでした (past negative). Because these changes happen to the ます ending itself, verb groups don't matter yet. Groups become critical later with て-form and casual speech.",
    quickReference:
      "U-verbs: あるく→あるきます, うたう→うたいます, およぐ→およぎます | Ru-verbs: おきる→おきます, ねる→ねます, おしえる→おしえます | Irregular: する→します, くる→きます | All ます forms conjugate the same way",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 21 — Verb Types in Action",
      listenFor:
        "How native speakers use different verbs in polite form. Notice that regardless of verb group, every verb ends with the same ます rhythm.",
    },
  },

  {
    day: 22,
    dayType: "new-pattern",
    title: "Pattern #13: I [verbed]",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #13: ___ました (past tense polite)",
      "Learn time words for past events: せんしゅう, けさ, ゆうべ",
      "Convert any ます verb to past tense by swapping ます for ました",
      "Describe what you did yesterday and last week",
    ],
    pattern: {
      number: 13,
      japanese: "___ました",
      english: "I [verbed]",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Verb stem — the part before ます",
        },
        {
          text: "ました",
          role: "fixed",
          explanation: "Past tense polite ending — replaces ます",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "きのう",
        romaji: "kinō",
        english: "yesterday",
        fitsPattern: [13],
        mnemonic:
          "'Kee-noh' — 'keen on' yesterday's memories",
      },
      {
        japanese: "きょう",
        romaji: "kyō",
        english: "today",
        mnemonic:
          "'Kyoh' — like the start of 'Kyoto' — today in the old capital",
      },
      {
        japanese: "あした",
        romaji: "ashita",
        english: "tomorrow",
        mnemonic:
          "'Ah-shee-tah' — 'I shall' do it tomorrow",
      },
      {
        japanese: "まいにち",
        romaji: "mainichi",
        english: "every day",
        mnemonic:
          "'My-nee-chee' — 'my niche' is doing this every single day",
      },
      {
        japanese: "せんしゅう",
        romaji: "senshū",
        english: "last week",
        fitsPattern: [13],
        mnemonic:
          "'Sen-shoo' — 'sent shoes' last week and they finally arrived",
      },
      {
        japanese: "らいしゅう",
        romaji: "raishū",
        english: "next week",
        mnemonic:
          "'Rye-shoo' — new 'rye shoes' arriving next week",
      },
      {
        japanese: "けさ",
        romaji: "kesa",
        english: "this morning",
        fitsPattern: [13],
        mnemonic:
          "'Keh-sah' — a 'case of' coffee I drank this morning",
      },
      {
        japanese: "ゆうべ",
        romaji: "yūbe",
        english: "last night",
        fitsPattern: [13],
        mnemonic:
          "'Yoo-beh' — 'YouTube' binge last night before bed",
      },
    ],
    examples: [
      {
        japanese: "きのうすしをたべました。",
        romaji: "Kinō sushi o tabemashita.",
        english: "I ate sushi yesterday.",
      },
      {
        japanese: "けさコーヒーをのみました。",
        romaji: "Kesa kōhī o nomimashita.",
        english: "I drank coffee this morning.",
      },
      {
        japanese: "せんしゅうえいがをみました。",
        romaji: "Senshū eiga o mimashita.",
        english: "I watched a movie last week.",
      },
      {
        japanese: "ゆうべほんをよみました。",
        romaji: "Yūbe hon o yomimashita.",
        english: "I read a book last night.",
      },
      {
        japanese: "きのうがっこうにいきました。",
        romaji: "Kinō gakkō ni ikimashita.",
        english: "I went to school yesterday.",
      },
      {
        japanese: "せんしゅうともだちがきました。",
        romaji: "Senshū tomodachi ga kimashita.",
        english: "My friend came last week.",
      },
      {
        japanese: "けさろくじにおきました。",
        romaji: "Kesa rokuji ni okimashita.",
        english: "I woke up at six this morning.",
      },
    ],
    practicePrompts: [
      "Describe what you ate yesterday: きのう___をたべました",
      "Say where you went last week: せんしゅう___にいきました",
      "Narrate your morning: けさ___じにおきました。___をたべました。___をのみました。",
      "Convert these to past: たべます→? のみます→? いきます→? みます→?",
    ],
    languageInsight: {
      title: "Japanese Has Only Two Tenses",
      content:
        "Japanese technically has only two tenses — past and non-past. There's no separate future tense. あしたすしをたべます (I'll eat sushi tomorrow) and まいにちすしをたべます (I eat sushi every day) use the same verb form. Only context and time words tell you which is meant. Past tense (ました) is the only real tense change. This makes Japanese tense far simpler than English, which juggles present, past, future, present perfect, past perfect, and more.",
    },
    tutorNote:
      "The past tense is beautifully simple: just swap ます for ました. たべます→たべました, のみます→のみました, いきます→いきました. Every single verb follows this rule with zero exceptions. Time words at the start of the sentence set the scene: きのう + ました = past action. Practice by narrating yesterday: きのう、___をたべました。___にいきました。___をみました。",
    quickReference:
      "Pattern #13: [verb stem]ました = past tense | ます→ました for ALL verbs | きのう=yesterday | きょう=today | あした=tomorrow | せんしゅう=last week | らいしゅう=next week | けさ=this morning | ゆうべ=last night",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 22 — Talking About the Past",
      listenFor:
        "The ました ending on verbs. Notice how time words like きのう and せんしゅう pair naturally with ました to establish past-tense context.",
    },
  },

  {
    day: 23,
    dayType: "new-pattern",
    title: "Pattern #14: I don't ___",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #14: ___ません (polite negative)",
      "Learn negative-pairing adverbs: ぜんぜん (not at all) and あまり (not much)",
      "Express what you don't do, don't eat, or don't like",
      "Contrast affirmative ます with negative ません in conversation",
    ],
    pattern: {
      number: 14,
      japanese: "___ません",
      english: "I don't ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Verb stem — the part before ます",
        },
        {
          text: "ません",
          role: "fixed",
          explanation: "Negative polite ending — replaces ます",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "ぜんぜん",
        romaji: "zenzen",
        english: "not at all (used with negatives)",
        fitsPattern: [14],
        mnemonic:
          "'Zen-zen' — total zen, total nothing — not at all",
      },
      {
        japanese: "あまり",
        romaji: "amari",
        english: "not much / not very (used with negatives)",
        fitsPattern: [14],
        mnemonic:
          "'Ah-mah-ree' — 'a Marie' who doesn't eat much — not very hungry",
      },
      {
        japanese: "にく",
        romaji: "niku",
        english: "meat",
        fitsPattern: [8, 14],
        mnemonic:
          "'Nee-ku' — 'Nick' loves meat at every barbecue",
      },
      {
        japanese: "くだもの",
        romaji: "kudamono",
        english: "fruit",
        fitsPattern: [8, 14],
        mnemonic:
          "'Ku-da-mo-no' — 'could a monkey' eat all this fruit?",
      },
      {
        japanese: "おさけ",
        romaji: "osake",
        english: "alcohol / sake",
        fitsPattern: [8, 14],
        mnemonic:
          "'Oh-sah-keh' — like 'sake' with a polite お prefix",
      },
      {
        japanese: "タバコ",
        romaji: "tabako",
        english: "tobacco / cigarettes",
        fitsPattern: [14],
        mnemonic:
          "'Tah-bah-ko' — sounds like 'tobacco' — borrowed from Portuguese",
      },
      {
        japanese: "すいます",
        romaji: "suimasu",
        english: "to smoke / to inhale (polite)",
        fitsPattern: [8, 14],
        mnemonic:
          "'Soo-ee-mahs' — 'sue me' if I smoke — すいます",
      },
    ],
    examples: [
      {
        japanese: "にくをたべません。",
        romaji: "Niku o tabemasen.",
        english: "I don't eat meat.",
      },
      {
        japanese: "おさけをのみません。",
        romaji: "Osake o nomimasen.",
        english: "I don't drink alcohol.",
      },
      {
        japanese: "タバコをすいません。",
        romaji: "Tabako o suimasen.",
        english: "I don't smoke.",
      },
      {
        japanese: "あまりテレビをみません。",
        romaji: "Amari terebi o mimasen.",
        english: "I don't watch TV much.",
      },
      {
        japanese: "ぜんぜんおよぎません。",
        romaji: "Zenzen oyogimasen.",
        english: "I don't swim at all.",
      },
      {
        japanese: "あしたがっこうにいきません。",
        romaji: "Ashita gakkō ni ikimasen.",
        english: "I'm not going to school tomorrow.",
      },
      {
        japanese: "コーヒーをのみますか？ — いいえ、のみません。",
        romaji: "Kōhī o nomimasu ka? — Iie, nomimasen.",
        english: "Do you drink coffee? — No, I don't.",
      },
    ],
    practicePrompts: [
      "Say three things you don't eat: ___をたべません",
      "Answer negatively: コーヒーをのみますか？ — いいえ、のみません。",
      "Use ぜんぜん and あまり: ぜんぜん___ません / あまり___ません",
      "Contrast your habits: ___をします。でも___をしません。",
    ],
    languageInsight: {
      title: "Adverbs That Demand Negatives",
      content:
        "Japanese pairs specific adverbs exclusively with negative verbs. ぜんぜん___ません means 'don't ___ at all' (complete negation). あまり___ません means 'don't ___ much' (partial negation). These adverbs only appear with negative forms — you'd never say ぜんぜんたべます. On the positive side, よく (often) pairs with affirmatives: よくたべます. Matching the right adverb to the right verb polarity is a key part of sounding natural in Japanese.",
    },
    tutorNote:
      "Another perfectly regular conjugation: ます→ません. たべます→たべません, のみます→のみません, いきます→いきません. No exceptions. The new adverbs add nuance — they're like volume knobs for negation. あまりたべません (don't eat much) is softer than たべません (don't eat), which is softer than ぜんぜんたべません (don't eat at all). Japanese speakers prefer softer expressions, so あまり___ません is extremely common in daily conversation.",
    quickReference:
      "Pattern #14: [verb stem]ません = don't / doesn't | ます→ません for ALL verbs | ぜんぜん___ません = not at all | あまり___ません = not much | にく=meat | くだもの=fruit | おさけ=alcohol | タバコ=cigarettes | すいます=smoke",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 23 — Saying No Politely",
      listenFor:
        "The ません ending contrasted with ます. Listen for あまり and ぜんぜん before negative verbs — they signal that a negative is coming.",
    },
  },

  {
    day: 24,
    dayType: "new-pattern",
    title: "Pattern #15: I didn't ___",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #15: ___ませんでした (past negative polite)",
      "Complete the four-form tense grid: ます, ました, ません, ませんでした",
      "Learn time words for the more distant past: おととい, きょねん",
      "Talk about things you didn't do or haven't done",
    ],
    pattern: {
      number: 15,
      japanese: "___ませんでした",
      english: "I didn't ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Verb stem — the part before ます",
        },
        {
          text: "ませんでした",
          role: "fixed",
          explanation: "Past negative polite ending — replaces ます",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "おととい",
        romaji: "ototoi",
        english: "day before yesterday",
        fitsPattern: [13, 15],
        mnemonic:
          "'Oh-toh-toy' — 'oh, a toy!' I found it the day before yesterday",
      },
      {
        japanese: "きょねん",
        romaji: "kyonen",
        english: "last year",
        fitsPattern: [13, 15],
        mnemonic:
          "'Kyo-nen' — 'beyond' last year's memories",
      },
      {
        japanese: "いちども",
        romaji: "ichido mo",
        english: "not even once (used with negatives)",
        fitsPattern: [15],
        mnemonic:
          "'Ee-chee-doh-moh' — 'each dough, mo(re)' — not even one piece of dough = not even once",
      },
      {
        japanese: "まだ",
        romaji: "mada",
        english: "not yet (with negative) / still",
        fitsPattern: [15],
        mnemonic:
          "'Mah-dah' — 'not done, ma'am, da(rn)' = not yet",
      },
      {
        japanese: "しゅくだい",
        romaji: "shukudai",
        english: "homework",
        fitsPattern: [8, 15],
        mnemonic:
          "'Shoo-ku-dye' — 'shoe could I' finish this homework with?",
      },
      {
        japanese: "そうじします",
        romaji: "sōji shimasu",
        english: "to clean (polite)",
        fitsPattern: [8, 15],
        mnemonic:
          "'Soh-jee she-mahs' — 'so gee' the house is dirty, time to clean",
      },
      {
        japanese: "せんたくします",
        romaji: "sentaku shimasu",
        english: "to do laundry (polite)",
        fitsPattern: [8, 15],
        mnemonic:
          "'Sen-tah-ku she-mahs' — 'sent a crew' to do the laundry",
      },
    ],
    examples: [
      {
        japanese: "きのうべんきょうしませんでした。",
        romaji: "Kinō benkyō shimasen deshita.",
        english: "I didn't study yesterday.",
      },
      {
        japanese: "おとといそうじしませんでした。",
        romaji: "Ototoi sōji shimasen deshita.",
        english: "I didn't clean the day before yesterday.",
      },
      {
        japanese: "せんしゅうせんたくしませんでした。",
        romaji: "Senshū sentaku shimasen deshita.",
        english: "I didn't do laundry last week.",
      },
      {
        japanese: "きょねんにほんにいきませんでした。",
        romaji: "Kyonen nihon ni ikimasen deshita.",
        english: "I didn't go to Japan last year.",
      },
      {
        japanese: "まだしゅくだいをしませんでした。",
        romaji: "Mada shukudai o shimasen deshita.",
        english: "I haven't done the homework yet.",
      },
      {
        japanese: "いちどもすしをたべませんでした。",
        romaji: "Ichido mo sushi o tabemasen deshita.",
        english: "I didn't eat sushi even once.",
      },
      {
        japanese: "ゆうべテレビをみませんでした。",
        romaji: "Yūbe terebi o mimasen deshita.",
        english: "I didn't watch TV last night.",
      },
    ],
    practicePrompts: [
      "Say what you didn't do yesterday: きのう___ませんでした",
      "Use まだ: まだ___ませんでした (I haven't ___ yet)",
      "Use いちども: いちども___ませんでした (I never ___ed)",
      "Complete the tense grid: たべます→たべました→たべません→たべませんでした",
    ],
    languageInsight: {
      title: "The Perfect Tense Grid",
      content:
        "You now command all four polite verb forms, and they follow a beautifully symmetric pattern. Present affirmative: たべます. Past affirmative: たべました. Present negative: たべません. Past negative: たべませんでした. Notice the logic: ました adds past to affirmative, ません makes it negative, and ませんでした combines both. Every verb in the language follows this exact grid — no irregular past tenses, no weird negatives. English has 'go/went/gone,' 'eat/ate/eaten' — Japanese just swaps endings.",
    },
    tutorNote:
      "With ませんでした, you've completed the polite tense grid. The four forms are: ます (do), ました (did), ません (don't), ませんでした (didn't). That's it — four forms cover all basic tense and polarity. まだ___ませんでした is incredibly useful: まだたべませんでした (haven't eaten yet), まだしませんでした (haven't done it yet). It's one of the most common ways to say 'not yet' in Japanese.",
    quickReference:
      "Pattern #15: [verb stem]ませんでした = didn't | The 4-form grid: ます (do) → ました (did) → ません (don't) → ませんでした (didn't) | おととい=day before yesterday | きょねん=last year | いちども=not even once | まだ=not yet",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 24 — What Didn't Happen",
      listenFor:
        "The ませんでした ending — it's longer than other forms, giving past negative sentences a distinctive rhythm. Listen for まだ and いちども as signals that a negative past is coming.",
    },
  },

  {
    day: 25,
    dayType: "pattern-combo",
    title: "Tense Workout",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Fluently switch between all four tense forms: ます, ました, ません, ませんでした",
      "Combine tense patterns with time words for natural sentences",
      "Practice rapid tense conversion with familiar verbs",
      "Hold a conversation about past, present, and future activities",
    ],
    usesPatterns: [8, 13, 14, 15],
    vocabulary: [
      {
        japanese: "こんしゅう",
        romaji: "konshū",
        english: "this week",
        mnemonic:
          "'Kon-shoo' — 'con-shoe' sale happening this week",
      },
      {
        japanese: "まいしゅう",
        romaji: "maishū",
        english: "every week",
        mnemonic:
          "'My-shoo' — 'my shoe' collection grows every week",
      },
      {
        japanese: "よくあさ",
        romaji: "yokuasa",
        english: "the next morning",
        mnemonic:
          "'Yo-ku-ah-sah' — 'yoke' yourself awake the next morning",
      },
      {
        japanese: "たぶん",
        romaji: "tabun",
        english: "probably / maybe",
        mnemonic:
          "'Tah-boon' — 'ta-boom' — probably going to explode",
      },
      {
        japanese: "もう",
        romaji: "mō",
        english: "already",
        mnemonic:
          "'Moh' — a cow says 'moo' — it already mooed",
      },
      {
        japanese: "じかん",
        romaji: "jikan",
        english: "time / hour",
        mnemonic:
          "'Jee-kahn' — 'jee, can' you tell me the time?",
      },
    ],
    examples: [
      {
        japanese: "きのうすしをたべました。きょうもたべます。",
        romaji: "Kinō sushi o tabemashita. Kyō mo tabemasu.",
        english: "I ate sushi yesterday. I'll eat it today too.",
      },
      {
        japanese: "せんしゅうおよぎませんでした。こんしゅうおよぎます。",
        romaji: "Senshū oyogimasen deshita. Konshū oyogimasu.",
        english: "I didn't swim last week. I'll swim this week.",
      },
      {
        japanese: "もうしゅくだいをしました。",
        romaji: "Mō shukudai o shimashita.",
        english: "I already did my homework.",
      },
      {
        japanese: "あまりにくをたべません。さかなをたべます。",
        romaji: "Amari niku o tabemasen. Sakana o tabemasu.",
        english: "I don't eat much meat. I eat fish.",
      },
      {
        japanese: "きょねんにほんごをならいませんでした。ことしならいます。",
        romaji: "Kyonen nihongo o naraimasen deshita. Kotoshi naraimasu.",
        english: "I didn't study Japanese last year. I'm studying it this year.",
      },
      {
        japanese: "たぶんあしたいきます。",
        romaji: "Tabun ashita ikimasu.",
        english: "I'll probably go tomorrow.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [8, 13],
        japanese: "けさパンをたべました。コーヒーをのみました。",
        romaji: "Kesa pan o tabemashita. Kōhī o nomimashita.",
        english: "I ate bread this morning. I drank coffee.",
      },
      {
        patternsUsed: [8, 14],
        japanese: "おさけをのみません。おちゃをのみます。",
        romaji: "Osake o nomimasen. Ocha o nomimasu.",
        english: "I don't drink alcohol. I drink tea.",
      },
      {
        patternsUsed: [13, 15],
        japanese: "きのうべんきょうしました。でもうんどうしませんでした。",
        romaji: "Kinō benkyō shimashita. Demo undō shimasen deshita.",
        english: "I studied yesterday. But I didn't exercise.",
      },
      {
        patternsUsed: [8, 13, 14, 15],
        japanese: "まいにちコーヒーをのみます。きのうものみました。でもおちゃはのみません。きょねんもおちゃをのみませんでした。",
        romaji: "Mainichi kōhī o nomimasu. Kinō mo nomimashita. Demo ocha wa nomimasen. Kyonen mo ocha o nomimasen deshita.",
        english: "I drink coffee every day. I drank it yesterday too. But I don't drink tea. I didn't drink tea last year either.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "しゅうまつ、なにをしましたか？",
        romaji: "Shūmatsu, nani o shimashita ka?",
        english: "What did you do on the weekend?",
      },
      {
        speaker: "You",
        japanese: "どようびにえいがをみました。",
        romaji: "Doyōbi ni eiga o mimashita.",
        english: "I watched a movie on Saturday.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね。にちようびは？",
        romaji: "Ii desu ne. Nichiyōbi wa?",
        english: "Nice. How about Sunday?",
      },
      {
        speaker: "You",
        japanese: "にちようびはなにもしませんでした。ねました。",
        romaji: "Nichiyōbi wa nani mo shimasen deshita. Nemashita.",
        english: "I didn't do anything on Sunday. I slept.",
      },
      {
        speaker: "Tanaka",
        japanese: "らいしゅうはなにをしますか？",
        romaji: "Raishū wa nani o shimasu ka?",
        english: "What will you do next week?",
      },
      {
        speaker: "You",
        japanese: "たぶんともだちとレストランにいきます。",
        romaji: "Tabun tomodachi to resutoran ni ikimasu.",
        english: "I'll probably go to a restaurant with a friend.",
      },
    ],
    practicePrompts: [
      "Narrate your weekend using all four tense forms",
      "Play the tense game: say たべます, then convert to ました, ません, ませんでした",
      "Contrast past and present: せんしゅう___ました。こんしゅう___ます。",
      "Tell a friend what you already did: もう___ました。",
    ],
    languageInsight: {
      title: "Time Words Do the Heavy Lifting",
      content:
        "Notice how Japanese time words (きのう, あした, まいにち) appear at the start of the sentence and set the entire temporal context. Because Japanese only has two tenses (past and non-past), these time words carry enormous weight. きのうたべました — 'yesterday' makes it clearly past. あしたたべます — 'tomorrow' makes it clearly future. Without a time word, たべます is ambiguous between 'I eat' and 'I will eat.' In conversation, once the time frame is established, speakers often drop the time word and let the verb form carry the meaning.",
    },
    tutorNote:
      "Today is about speed and fluency, not new grammar. You have four verb forms — now make switching between them automatic. A great drill: pick a verb (たべます) and rapid-fire all four forms. Then do it with a time word: きのうたべました, きょうたべます, あまりたべません, きょねんたべませんでした. The dialogue introduces なにもしませんでした (didn't do anything) — なにも + negative is a useful pattern meaning 'nothing.'",
    quickReference:
      "Tense grid: ます (do/will) | ました (did) | ません (don't) | ませんでした (didn't) | こんしゅう=this week | まいしゅう=every week | たぶん=probably | もう=already | なにも+neg=nothing",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 25 — Weekend Conversations",
      listenFor:
        "How speakers switch between tenses fluidly in conversation. Notice time words at the beginning of sentences and how the verb ending matches: past time + ました, future time + ます.",
    },
  },

  {
    day: 26,
    dayType: "new-pattern",
    title: "Pattern #16: The Full Sentence Builder",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #16: [Time]に [Place]で [Object]を [Verb]",
      "Build complete sentences with time, place, object, and action",
      "Understand Japanese word order: information stacks before the verb",
      "Describe weekend activities in full, detailed sentences",
    ],
    pattern: {
      number: 16,
      japanese: "[Time]に[Place]で[Object]を[Verb]",
      english: "At [time], I [verb] [object] at [place]",
      breakdown: [
        {
          text: "[Time]",
          role: "slot",
          explanation: "When — time expression",
        },
        {
          text: "に",
          role: "particle",
          explanation: "Time marker (optional with some time words like きのう, きょう)",
        },
        {
          text: "[Place]",
          role: "slot",
          explanation: "Where — location of the action",
        },
        {
          text: "で",
          role: "particle",
          explanation: "Location-of-action marker",
        },
        {
          text: "[Object]",
          role: "slot",
          explanation: "What — the thing acted upon",
        },
        {
          text: "を",
          role: "particle",
          explanation: "Object marker",
        },
        {
          text: "[Verb]",
          role: "verb",
          explanation: "Action — always last in the sentence",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "どようび",
        romaji: "doyōbi",
        english: "Saturday",
        fitsPattern: [16],
        mnemonic:
          "'Doh-yoh-bee' — 'dough yo, be' making pizza dough on Saturday",
      },
      {
        japanese: "にちようび",
        romaji: "nichiyōbi",
        english: "Sunday",
        fitsPattern: [16],
        mnemonic:
          "'Nee-chee-yoh-bee' — 'niche hobby' day on Sunday",
      },
      {
        japanese: "ごぜん",
        romaji: "gozen",
        english: "morning / a.m.",
        fitsPattern: [16],
        mnemonic:
          "'Go-zen' — 'go zen' in the morning — find peace before noon",
      },
      {
        japanese: "ごご",
        romaji: "gogo",
        english: "afternoon / p.m.",
        fitsPattern: [16],
        mnemonic:
          "'Go-go' — 'go-go' dancing in the afternoon",
      },
      {
        japanese: "ひるごはん",
        romaji: "hirugohan",
        english: "lunch",
        fitsPattern: [8, 16],
        mnemonic:
          "'Hee-roo-go-hahn' — 'hero go on' a lunch break",
      },
      {
        japanese: "ばんごはん",
        romaji: "bangohan",
        english: "dinner",
        fitsPattern: [8, 16],
        mnemonic:
          "'Bahn-go-hahn' — 'bongo' drums play at dinner time",
      },
      {
        japanese: "あさごはん",
        romaji: "asagohan",
        english: "breakfast",
        fitsPattern: [8, 16],
        mnemonic:
          "'Ah-sah-go-hahn' — あさ (morning) + ごはん (meal) = morning meal",
      },
    ],
    examples: [
      {
        japanese: "どようびにレストランですしをたべました。",
        romaji: "Doyōbi ni resutoran de sushi o tabemashita.",
        english: "On Saturday, I ate sushi at a restaurant.",
      },
      {
        japanese: "にちようびにこうえんでおんがくをききます。",
        romaji: "Nichiyōbi ni kōen de ongaku o kikimasu.",
        english: "On Sunday, I listen to music at the park.",
      },
      {
        japanese: "まいにちカフェでコーヒーをのみます。",
        romaji: "Mainichi kafe de kōhī o nomimasu.",
        english: "I drink coffee at the café every day.",
      },
      {
        japanese: "きのうとしょかんでほんをよみました。",
        romaji: "Kinō toshokan de hon o yomimashita.",
        english: "Yesterday, I read a book at the library.",
      },
      {
        japanese: "ごぜんにうちであさごはんをたべます。",
        romaji: "Gozen ni uchi de asagohan o tabemasu.",
        english: "In the morning, I eat breakfast at home.",
      },
      {
        japanese: "ごごにジムでうんどうします。",
        romaji: "Gogo ni jimu de undō shimasu.",
        english: "In the afternoon, I exercise at the gym.",
      },
      {
        japanese: "せんしゅうのどようびにデパートでかばんをかいました。",
        romaji: "Senshū no doyōbi ni depāto de kaban o kaimashita.",
        english: "Last Saturday, I bought a bag at the department store.",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "しゅうまつ、なにをしましたか？",
        romaji: "Shūmatsu, nani o shimashita ka?",
        english: "What did you do on the weekend?",
      },
      {
        speaker: "You",
        japanese: "どようびにともだちとレストランでひるごはんをたべました。",
        romaji: "Doyōbi ni tomodachi to resutoran de hirugohan o tabemashita.",
        english: "On Saturday, I ate lunch at a restaurant with a friend.",
      },
      {
        speaker: "Yuki",
        japanese: "なにをたべましたか？",
        romaji: "Nani o tabemashita ka?",
        english: "What did you eat?",
      },
      {
        speaker: "You",
        japanese: "すしをたべました。おいしかったです。",
        romaji: "Sushi o tabemashita. Oishikatta desu.",
        english: "I ate sushi. It was delicious.",
      },
      {
        speaker: "Yuki",
        japanese: "にちようびは？",
        romaji: "Nichiyōbi wa?",
        english: "And Sunday?",
      },
      {
        speaker: "You",
        japanese: "にちようびにうちでえいがをみました。",
        romaji: "Nichiyōbi ni uchi de eiga o mimashita.",
        english: "On Sunday, I watched a movie at home.",
      },
    ],
    practicePrompts: [
      "Describe your Saturday: どようびに___で___を___ました",
      "Build a full sentence about breakfast: まいにち___で___を___ます",
      "Describe last weekend in three full sentences using Pattern #16",
      "Ask a friend about their weekend: しゅうまつ、なにをしましたか？",
    ],
    languageInsight: {
      title: "SOV: The Verb-Last Advantage",
      content:
        "Pattern #16 shows the full power of Japanese word order: Subject-Object-Verb (SOV). The verb always comes last, and everything else stacks before it in any order. どようびに (when) + レストランで (where) + すしを (what) + たべました (action). You can rearrange the middle pieces — レストランでどようびにすしをたべました works too — because particles (に, で, を) mark each word's role. The verb at the end is the final decision: until you hear it, you don't know if the person ate, bought, or made the sushi.",
    },
    tutorNote:
      "This pattern brings everything together. The key insight: you're not learning new grammar, you're combining particles you already know into longer sentences. に (time), で (place), を (object) all stack before the verb. Not every sentence needs all four slots — きのうすしをたべました is perfectly fine without a place. Think of this pattern as a maximum template: use as many slots as you need.",
    quickReference:
      "Pattern #16: [Time](に) + [Place]で + [Object]を + [Verb] | どようび=Saturday | にちようび=Sunday | ごぜん=a.m. | ごご=p.m. | あさごはん=breakfast | ひるごはん=lunch | ばんごはん=dinner",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 26 — Weekend Activities",
      listenFor:
        "How speakers stack time, place, and object before the verb. Notice the particle chain: に...で...を...verb. The longer the sentence, the more information stacks before the final verb.",
    },
  },

  {
    day: 27,
    dayType: "new-pattern",
    title: "Pattern #17: There is ___",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #17: ___があります (inanimate) / ___がいます (animate)",
      "Understand the あります vs います distinction based on animacy",
      "Learn vocabulary for furniture, animals, and household items",
      "Describe what exists in a room or place using [Place]に___があります/います",
    ],
    pattern: {
      number: 17,
      japanese: "___があります / ___がいます",
      english: "There is ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "Thing or being that exists",
        },
        {
          text: "が",
          role: "particle",
          explanation: "Subject marker",
        },
        {
          text: "あります/います",
          role: "verb",
          explanation: "Exists — あります for objects/plants, います for people/animals",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "テーブル",
        romaji: "tēburu",
        english: "table",
        fitsPattern: [17],
        mnemonic:
          "'Teh-boo-roo' — sounds like 'table' with Japanese syllables",
      },
      {
        japanese: "いす",
        romaji: "isu",
        english: "chair",
        fitsPattern: [17],
        mnemonic:
          "'Ee-su' — 'easy' to sit in a chair",
      },
      {
        japanese: "ベッド",
        romaji: "beddo",
        english: "bed",
        fitsPattern: [17],
        mnemonic:
          "'Bed-doh' — sounds like 'bed' with a Japanese ending",
      },
      {
        japanese: "ねこ",
        romaji: "neko",
        english: "cat",
        fitsPattern: [17],
        mnemonic:
          "'Neh-koh' — 'neck-oh' — cats love getting their necks scratched",
      },
      {
        japanese: "いぬ",
        romaji: "inu",
        english: "dog",
        fitsPattern: [17],
        mnemonic:
          "'Ee-noo' — 'in you(r) heart' is a loyal dog",
      },
      {
        japanese: "へや",
        romaji: "heya",
        english: "room",
        fitsPattern: [17],
        mnemonic:
          "'Heh-yah' — 'hey, ya!' come see my room",
      },
      {
        japanese: "にわ",
        romaji: "niwa",
        english: "garden / yard",
        fitsPattern: [17],
        mnemonic:
          "'Nee-wah' — a 'new-wah' garden blooming in spring",
      },
      {
        japanese: "とり",
        romaji: "tori",
        english: "bird",
        fitsPattern: [17],
        mnemonic:
          "'Toh-ree' — a bird sits on a 'torii' gate at the shrine",
      },
    ],
    examples: [
      {
        japanese: "へやにテーブルがあります。",
        romaji: "Heya ni tēburu ga arimasu.",
        english: "There is a table in the room.",
      },
      {
        japanese: "へやにベッドがあります。",
        romaji: "Heya ni beddo ga arimasu.",
        english: "There is a bed in the room.",
      },
      {
        japanese: "にわにねこがいます。",
        romaji: "Niwa ni neko ga imasu.",
        english: "There is a cat in the garden.",
      },
      {
        japanese: "こうえんにいぬがいます。",
        romaji: "Kōen ni inu ga imasu.",
        english: "There is a dog in the park.",
      },
      {
        japanese: "にわにとりがいます。",
        romaji: "Niwa ni tori ga imasu.",
        english: "There is a bird in the garden.",
      },
      {
        japanese: "テーブルのうえにほんがあります。",
        romaji: "Tēburu no ue ni hon ga arimasu.",
        english: "There is a book on the table.",
      },
      {
        japanese: "カフェにいすがたくさんあります。",
        romaji: "Kafe ni isu ga takusan arimasu.",
        english: "There are many chairs in the café.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "このへやになにがありますか？",
        romaji: "Kono heya ni nani ga arimasu ka?",
        english: "What is in this room?",
      },
      {
        speaker: "Suzuki",
        japanese: "テーブルといすがあります。",
        romaji: "Tēburu to isu ga arimasu.",
        english: "There is a table and chairs.",
      },
      {
        speaker: "You",
        japanese: "ねこもいますか？",
        romaji: "Neko mo imasu ka?",
        english: "Is there also a cat?",
      },
      {
        speaker: "Suzuki",
        japanese: "はい、ねこがいます。にわにもいぬがいます。",
        romaji: "Hai, neko ga imasu. Niwa ni mo inu ga imasu.",
        english: "Yes, there is a cat. There is also a dog in the garden.",
      },
      {
        speaker: "You",
        japanese: "いいですね。にぎやかですね。",
        romaji: "Ii desu ne. Nigiyaka desu ne.",
        english: "Nice. It's lively, isn't it.",
      },
    ],
    practicePrompts: [
      "Describe your room: へやに___があります",
      "Say what animals are nearby: ___に___がいます",
      "Ask what's in a place: ___になにがありますか？",
      "Distinguish あります and います: テーブルが___ / ねこが___",
    ],
    languageInsight: {
      title: "Animate vs Inanimate: います vs あります",
      content:
        "Japanese draws a fundamental line between animate and inanimate existence. Living things that can move on their own — people, animals, insects — use います. Everything else — furniture, books, buildings, plants — uses あります. This reflects a worldview where the ability to move autonomously defines a different category of existence. Plants use あります because they don't move, while even tiny bugs use います. A robot? あります. A fish in a tank? います. This animate/inanimate split appears throughout Japanese grammar.",
    },
    tutorNote:
      "The key rule is simple: います for living creatures that move, あります for everything else. When describing a room, you'll mostly use あります (テーブルがあります, ベッドがあります). When describing who's present, use います (ねこがいます, ともだちがいます). The location uses に particle: [place]に___があります/います. Practice by looking around your room right now and describing everything you see.",
    quickReference:
      "Pattern #17: [place]に + ___があります (inanimate) / ___がいます (animate) | テーブル=table | いす=chair | ベッド=bed | ねこ=cat | いぬ=dog | へや=room | にわ=garden | とり=bird | うえ=on top",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 27 — Describing Places",
      listenFor:
        "The contrast between あります and います. Listen for the に particle marking location before the thing that exists. Notice which nouns get which verb.",
    },
  },

  {
    day: 28,
    dayType: "new-pattern",
    title: "Pattern #18: I have ___",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #18: ___をもっています (I have / I possess ___)",
      "Learn vocabulary for possessions and family members",
      "Distinguish between もっています (possessions) and います (people/pets)",
      "Talk about what you own and who is in your family",
    ],
    pattern: {
      number: 18,
      japanese: "___をもっています",
      english: "I have ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "The thing you possess",
        },
        {
          text: "を",
          role: "particle",
          explanation: "Object marker",
        },
        {
          text: "もっています",
          role: "verb",
          explanation: "Have / possess (polite, ongoing state)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "くるま",
        romaji: "kuruma",
        english: "car",
        fitsPattern: [18],
        mnemonic:
          "'Koo-roo-mah' — a 'crew' of 'ma(chines)' = cars",
      },
      {
        japanese: "じてんしゃ",
        romaji: "jitensha",
        english: "bicycle",
        fitsPattern: [18],
        mnemonic:
          "'Jee-ten-shah' — 'gee, ten sha(res)' of one bicycle",
      },
      {
        japanese: "でんわ",
        romaji: "denwa",
        english: "telephone / phone",
        fitsPattern: [18],
        mnemonic:
          "'Den-wah' — 'den wall' phone hanging in the study",
      },
      {
        japanese: "おかね",
        romaji: "okane",
        english: "money",
        fitsPattern: [18],
        mnemonic:
          "'Oh-kah-neh' — 'oh, con(ey)' island is expensive — need money",
      },
      {
        japanese: "かぞく",
        romaji: "kazoku",
        english: "family",
        fitsPattern: [17, 18],
        mnemonic:
          "'Kah-zo-ku' — 'cause o' cool' people = my family",
      },
      {
        japanese: "おとうと",
        romaji: "otōto",
        english: "younger brother",
        fitsPattern: [17],
        mnemonic:
          "'Oh-toh-toh' — 'oh no, oh no' my little brother broke something again",
      },
      {
        japanese: "いもうと",
        romaji: "imōto",
        english: "younger sister",
        fitsPattern: [17],
        mnemonic:
          "'Ee-moh-toh' — 'emotional' little sister always has big feelings",
      },
    ],
    examples: [
      {
        japanese: "くるまをもっています。",
        romaji: "Kuruma o motte imasu.",
        english: "I have a car.",
      },
      {
        japanese: "じてんしゃをもっています。",
        romaji: "Jitensha o motte imasu.",
        english: "I have a bicycle.",
      },
      {
        japanese: "スマホをもっていますか？",
        romaji: "Sumaho o motte imasu ka?",
        english: "Do you have a smartphone?",
      },
      {
        japanese: "おかねをもっていません。",
        romaji: "Okane o motte imasen.",
        english: "I don't have money.",
      },
      {
        japanese: "おとうとがいます。",
        romaji: "Otōto ga imasu.",
        english: "I have a younger brother.",
      },
      {
        japanese: "いもうとがふたりいます。",
        romaji: "Imōto ga futari imasu.",
        english: "I have two younger sisters.",
      },
      {
        japanese: "かぞくはよにんです。",
        romaji: "Kazoku wa yonin desu.",
        english: "My family is four people.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "くるまをもっていますか？",
        romaji: "Kuruma o motte imasu ka?",
        english: "Do you have a car?",
      },
      {
        speaker: "You",
        japanese: "いいえ、もっていません。じてんしゃをもっています。",
        romaji: "Iie, motte imasen. Jitensha o motte imasu.",
        english: "No, I don't. I have a bicycle.",
      },
      {
        speaker: "Tanaka",
        japanese: "かぞくはなんにんですか？",
        romaji: "Kazoku wa nannin desu ka?",
        english: "How many people are in your family?",
      },
      {
        speaker: "You",
        japanese: "ごにんです。おとうとがいます。いもうともいます。",
        romaji: "Gonin desu. Otōto ga imasu. Imōto mo imasu.",
        english: "Five. I have a younger brother. I also have a younger sister.",
      },
      {
        speaker: "Tanaka",
        japanese: "にぎやかですね。",
        romaji: "Nigiyaka desu ne.",
        english: "That's lively!",
      },
    ],
    practicePrompts: [
      "List three things you have: ___をもっています",
      "Ask if someone has something: ___をもっていますか？",
      "Describe your family: ___がいます。かぞくは___にんです。",
      "Say what you don't have: ___をもっていません",
    ],
    languageInsight: {
      title: "Having Things vs Having People",
      content:
        "Japanese uses different verbs for 'having' depending on what you have. For objects and possessions, use もっています (literally 'am holding'): くるまをもっています. For family members and pets — living beings you 'have' in your life — use います: おとうとがいます, ねこがいます. You'd never say おとうとをもっています because people aren't possessions. This distinction reflects the same animate/inanimate line from Pattern #17: living beings exist (いる), objects are held (もつ).",
    },
    tutorNote:
      "もっています is technically て-form + います (a grammar point from Phase 5), but for now, treat it as a fixed phrase meaning 'have.' The negative is もっていません (don't have). For family, use the います pattern from yesterday: おとうとがいます (I have a younger brother). A quick rule: if you can physically pick it up, use もっています. If it's a person or animal, use います.",
    quickReference:
      "Pattern #18: ___をもっています = I have ___ (possessions) | もっていません = don't have | For family/pets: ___がいます | くるま=car | じてんしゃ=bicycle | でんわ=phone | おかね=money | かぞく=family | おとうと=younger brother | いもうと=younger sister",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 28 — Talking About Possessions",
      listenFor:
        "The difference between もっています for objects and います for people. Notice the particles: を before もっています, が before います.",
    },
  },

  {
    day: 29,
    dayType: "new-pattern",
    title: "Patterns #19-20: Listing & Counting",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Master Pattern #19: ___と___を___ます (I [verb] ___ and ___)",
      "Master Pattern #20: ___を[counter]ください (Please give me [number] of ___)",
      "Learn the essential Japanese counters: つ (general), はい (cups), ほん (long objects)",
      "Order multiple items with specific quantities",
    ],
    pattern: {
      number: 19,
      japanese: "___と___を___ます",
      english: "I [verb] ___ and ___",
      breakdown: [
        {
          text: "___",
          role: "slot",
          explanation: "First item",
        },
        {
          text: "と",
          role: "particle",
          explanation: "And — connects nouns",
        },
        {
          text: "___",
          role: "slot",
          explanation: "Second item",
        },
        {
          text: "を",
          role: "particle",
          explanation: "Object marker",
        },
        {
          text: "___ます",
          role: "verb",
          explanation: "Action (polite)",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "ひとつ",
        romaji: "hitotsu",
        english: "one (general counter)",
        fitsPattern: [20],
        mnemonic:
          "'Hee-toh-tsu' — 'he taught sue' to count: one!",
      },
      {
        japanese: "ふたつ",
        romaji: "futatsu",
        english: "two (general counter)",
        fitsPattern: [20],
        mnemonic:
          "'Foo-tah-tsu' — 'foot at sue's' — two feet",
      },
      {
        japanese: "みっつ",
        romaji: "mittsu",
        english: "three (general counter)",
        fitsPattern: [20],
        mnemonic:
          "'Meet-su' — 'mitts' — three mittens",
      },
      {
        japanese: "いっぱい",
        romaji: "ippai",
        english: "one cup / one glass",
        fitsPattern: [20],
        mnemonic:
          "'Eep-pie' — one pie filling one cup",
      },
      {
        japanese: "にはい",
        romaji: "nihai",
        english: "two cups / two glasses",
        fitsPattern: [20],
        mnemonic:
          "'Nee-high' — two cups stacked 'knee high'",
      },
      {
        japanese: "いっぽん",
        romaji: "ippon",
        english: "one (long/cylindrical thing)",
        fitsPattern: [20],
        mnemonic:
          "'Eep-pon' — one 'upon' a time, one long stick — ippon in judo!",
      },
      {
        japanese: "にほん",
        romaji: "nihon",
        english: "two (long/cylindrical things)",
        fitsPattern: [20],
        mnemonic:
          "'Nee-hon' — two chopsticks for eating in にほん (Japan)",
      },
      {
        japanese: "ひとり",
        romaji: "hitori",
        english: "one person",
        fitsPattern: [20],
        mnemonic:
          "'Hee-toh-ree' — 'he told ree(d)' — one lone person in the field",
      },
      {
        japanese: "ふたり",
        romaji: "futari",
        english: "two people",
        fitsPattern: [20],
        mnemonic:
          "'Foo-tah-ree' — 'futari' sounds like 'a pair' — two people together",
      },
    ],
    examples: [
      {
        japanese: "パンとたまごをたべます。",
        romaji: "Pan to tamago o tabemasu.",
        english: "I eat bread and eggs.",
      },
      {
        japanese: "コーヒーとケーキをください。",
        romaji: "Kōhī to kēki o kudasai.",
        english: "Coffee and cake, please.",
      },
      {
        japanese: "ビールをにはいください。",
        romaji: "Bīru o nihai kudasai.",
        english: "Two beers, please.",
      },
      {
        japanese: "りんごをみっつください。",
        romaji: "Ringo o mittsu kudasai.",
        english: "Three apples, please.",
      },
      {
        japanese: "みずをいっぱいください。",
        romaji: "Mizu o ippai kudasai.",
        english: "One glass of water, please.",
      },
      {
        japanese: "えんぴつをにほんください。",
        romaji: "Enpitsu o nihon kudasai.",
        english: "Two pencils, please.",
      },
      {
        japanese: "ふたりでレストランにいきました。",
        romaji: "Futari de resutoran ni ikimashita.",
        english: "Two of us went to the restaurant.",
      },
    ],
    dialogue: [
      {
        speaker: "Waiter",
        japanese: "いらっしゃいませ。なんめいさまですか？",
        romaji: "Irasshaimase. Nanmeisama desu ka?",
        english: "Welcome. How many guests?",
      },
      {
        speaker: "You",
        japanese: "ふたりです。",
        romaji: "Futari desu.",
        english: "Two people.",
      },
      {
        speaker: "Waiter",
        japanese: "ごちゅうもんは？",
        romaji: "Gochūmon wa?",
        english: "Your order?",
      },
      {
        speaker: "You",
        japanese: "すしとラーメンをください。",
        romaji: "Sushi to rāmen o kudasai.",
        english: "Sushi and ramen, please.",
      },
      {
        speaker: "Friend",
        japanese: "ビールをにはいください。",
        romaji: "Bīru o nihai kudasai.",
        english: "Two beers, please.",
      },
      {
        speaker: "Waiter",
        japanese: "はい、かしこまりました。",
        romaji: "Hai, kashikomarimashita.",
        english: "Certainly.",
      },
    ],
    practicePrompts: [
      "Order two items using と: ___と___をください",
      "Order with a counter: ビールを___ください / りんごを___ください",
      "Describe what you ate using と: ___と___をたべました",
      "Say how many people: ___にんでいきます / ___りです",
    ],
    languageInsight: {
      title: "Counters: Classifying the World by Shape",
      content:
        "Japanese doesn't just count — it classifies. Every noun needs a counter that matches its shape or category. Long, thin things (pencils, bottles, chopsticks) use ほん. Flat things (paper, plates, shirts) use まい. Cups and glasses use はい. Small objects use こ. People use にん (with special forms ひとり and ふたり). The universal fallback is つ (ひとつ, ふたつ, みっつ...) which works for almost anything. This isn't unique to Japanese — think of English's 'a sheet of paper,' 'a slice of bread,' 'a head of cattle.' Japanese just does it for everything.",
    },
    tutorNote:
      "Two patterns today, but they build on what you know. Pattern #19 (___と___) just uses と to connect nouns before を — you've seen と before. Pattern #20 adds a counter between を and ください: ビールをにはいください. For now, master three counter sets: つ (general: ひとつ, ふたつ, みっつ), はい (cups/glasses), and ほん (long things). When in doubt, use つ — it works for nearly everything.",
    quickReference:
      "Pattern #19: ___と___を___ます = [verb] A and B | Pattern #20: ___を[counter]ください = [number] of ___, please | つ counters: ひとつ(1), ふたつ(2), みっつ(3) | はい: いっぱい(1), にはい(2) | ほん: いっぽん(1), にほん(2) | People: ひとり(1), ふたり(2)",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 29 — Ordering and Counting",
      listenFor:
        "Counter words after を in ordering situations. Notice how the counter changes sound depending on the number: いっぱい, にはい, さんばい — the consonant shifts are called 'sound changes' (rendaku).",
    },
  },

  {
    day: 30,
    dayType: "vocab-expansion",
    title: "Mega Verb Expansion",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Learn 10 high-frequency verbs to dramatically expand your expressive range",
      "Practice each new verb in all four tense forms",
      "Use new verbs with Pattern #16 (full sentence builder)",
      "Build complex descriptions of daily activities",
    ],
    usesPatterns: [8, 13, 14, 15, 16],
    vocabulary: [
      {
        japanese: "わかります",
        romaji: "wakarimasu",
        english: "to understand (polite)",
        fitsPattern: [8, 14],
        mnemonic:
          "'Wah-kah-ree-mahs' — 'walk a ream' of paper = understand a lot of material",
      },
      {
        japanese: "おぼえます",
        romaji: "oboemasu",
        english: "to memorize / to remember (polite)",
        fitsPattern: [8, 13],
        mnemonic:
          "'Oh-boh-eh-mahs' — 'oboe' players memorize their sheet music",
      },
      {
        japanese: "わすれます",
        romaji: "wasuremasu",
        english: "to forget (polite)",
        fitsPattern: [8, 15],
        mnemonic:
          "'Wah-soo-reh-mahs' — 'was sure I' remembered but I forgot",
      },
      {
        japanese: "つかいます",
        romaji: "tsukaimasu",
        english: "to use (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Tsoo-kah-ee-mahs' — 'to kai(te)' = use a tool to write",
      },
      {
        japanese: "はしります",
        romaji: "hashirimasu",
        english: "to run (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Hah-shee-ree-mahs' — 'ha, she reads' while she runs on the treadmill",
      },
      {
        japanese: "のります",
        romaji: "norimasu",
        english: "to ride / to get on (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Noh-ree-mahs' — 'no ream' of tickets left — get on the bus now!",
      },
      {
        japanese: "おります",
        romaji: "orimasu",
        english: "to get off (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Oh-ree-mahs' — 'or I miss' my stop — time to get off",
      },
      {
        japanese: "まちます",
        romaji: "machimasu",
        english: "to wait (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Mah-chee-mahs' — 'match' won't start until everyone is waiting",
      },
      {
        japanese: "かえります",
        romaji: "kaerimasu",
        english: "to go home / to return (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Kah-eh-ree-mahs' — 'carry' your bags home = return",
      },
      {
        japanese: "あげます",
        romaji: "agemasu",
        english: "to give (polite)",
        fitsPattern: [8, 16],
        mnemonic:
          "'Ah-geh-mahs' — 'I gave' becomes あげます — I give",
      },
    ],
    examples: [
      {
        japanese: "にほんごがわかりますか？ — すこしわかります。",
        romaji: "Nihongo ga wakarimasu ka? — Sukoshi wakarimasu.",
        english: "Do you understand Japanese? — I understand a little.",
      },
      {
        japanese: "きのうあたらしいことばをおぼえました。",
        romaji: "Kinō atarashii kotoba o oboemashita.",
        english: "I memorized new words yesterday.",
      },
      {
        japanese: "かぎをわすれました。",
        romaji: "Kagi o wasuremashita.",
        english: "I forgot my keys.",
      },
      {
        japanese: "まいにちでんしゃにのります。",
        romaji: "Mainichi densha ni norimasu.",
        english: "I ride the train every day.",
      },
      {
        japanese: "つぎのえきでおります。",
        romaji: "Tsugi no eki de orimasu.",
        english: "I get off at the next station.",
      },
      {
        japanese: "こうえんではしりました。",
        romaji: "Kōen de hashirimashita.",
        english: "I ran at the park.",
      },
      {
        japanese: "ともだちをまちます。",
        romaji: "Tomodachi o machimasu.",
        english: "I'll wait for my friend.",
      },
      {
        japanese: "ろくじにうちにかえります。",
        romaji: "Rokuji ni uchi ni kaerimasu.",
        english: "I go home at six.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "すみません、にほんごがわかりますか？",
        romaji: "Sumimasen, nihongo ga wakarimasu ka?",
        english: "Excuse me, do you understand Japanese?",
      },
      {
        speaker: "Tourist",
        japanese: "すこしわかります。",
        romaji: "Sukoshi wakarimasu.",
        english: "I understand a little.",
      },
      {
        speaker: "You",
        japanese: "つぎのえきでおりますか？",
        romaji: "Tsugi no eki de orimasu ka?",
        english: "Are you getting off at the next station?",
      },
      {
        speaker: "Tourist",
        japanese: "いいえ、しぶやでおります。",
        romaji: "Iie, Shibuya de orimasu.",
        english: "No, I'm getting off at Shibuya.",
      },
      {
        speaker: "You",
        japanese: "しぶやはみっつめです。",
        romaji: "Shibuya wa mittsume desu.",
        english: "Shibuya is the third stop.",
      },
      {
        speaker: "Tourist",
        japanese: "ありがとうございます。",
        romaji: "Arigatō gozaimasu.",
        english: "Thank you very much.",
      },
    ],
    practicePrompts: [
      "Convert each new verb through all four forms: わかります→わかりました→わかりません→わかりませんでした",
      "Describe your commute: ___にのります。___でおります。___にかえります。",
      "Talk about forgetting and remembering: ___をわすれました。___をおぼえました。",
      "Use Pattern #16 with new verbs: きのう___で___を___ました",
    ],
    languageInsight: {
      title: "Verb Pairs: The Logic of Opposites",
      content:
        "Japanese often has neat verb pairs for opposite actions. のります (get on) pairs with おります (get off). おぼえます (remember) pairs with わすれます (forget). あけます (open) pairs with しめます (close). いきます (go) pairs with きます (come) and かえります (return). Learning verbs in pairs helps you remember both and gives you balanced expressive power — if you can say 'I got on,' you can also say 'I got off.'",
    },
    tutorNote:
      "Ten new verbs is a lot, but most of them describe actions you do every single day. Focus on the ones most relevant to your life. If you commute, drill のります/おります/かえります. If you're studying, focus on わかります/おぼえます/わすれます. The beautiful thing is they all fit the same four-form grid: ます, ました, ません, ませんでした. No surprises, no exceptions.",
    quickReference:
      "New verbs: わかります=understand | おぼえます=memorize | わすれます=forget | つかいます=use | はしります=run | のります=ride/get on | おります=get off | まちます=wait | かえります=return | あげます=give",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 30 — Daily Life Verbs",
      listenFor:
        "The new verbs in everyday contexts. Pay attention to のります and おります on trains — you'll hear these constantly in Japan. Listen for わかります in question form: わかりますか？",
    },
  },

  {
    day: 31,
    dayType: "vocab-expansion",
    title: "Life Vocabulary",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Learn vocabulary for family, weather, and time (days/months)",
      "Describe your family using います and もっています",
      "Talk about weather using ___です",
      "Say days of the week and months of the year",
    ],
    usesPatterns: [1, 4, 17, 18],
    vocabulary: [
      {
        japanese: "おとうさん",
        romaji: "otōsan",
        english: "father (polite)",
        fitsPattern: [17],
        mnemonic:
          "'Oh-toh-sahn' — 'oh, toe, son' — father teaches his son to walk on toes",
      },
      {
        japanese: "おかあさん",
        romaji: "okāsan",
        english: "mother (polite)",
        fitsPattern: [17],
        mnemonic:
          "'Oh-kah-sahn' — 'oh, car, son' — mother drives her son to school",
      },
      {
        japanese: "きょうだい",
        romaji: "kyōdai",
        english: "siblings",
        fitsPattern: [17],
        mnemonic:
          "'Kyoh-dye' — 'co-die(t)' — siblings who share everything, even diets",
      },
      {
        japanese: "こども",
        romaji: "kodomo",
        english: "child / children",
        fitsPattern: [17],
        mnemonic:
          "'Koh-doh-moh' — 'co-domo' — kids who go everywhere together (Komodo dragon babies!)",
      },
      {
        japanese: "てんき",
        romaji: "tenki",
        english: "weather",
        fitsPattern: [4],
        mnemonic:
          "'Ten-kee' — 'tent key' — need the tent key depending on the weather",
      },
      {
        japanese: "あめ",
        romaji: "ame",
        english: "rain",
        fitsPattern: [1, 4],
        mnemonic:
          "'Ah-meh' — 'a May' shower = rain in May",
      },
      {
        japanese: "はれ",
        romaji: "hare",
        english: "sunny / clear weather",
        fitsPattern: [1, 4],
        mnemonic:
          "'Hah-reh' — a 'hare' hops in the sunny field",
      },
      {
        japanese: "げつようび",
        romaji: "getsuyōbi",
        english: "Monday",
        fitsPattern: [1, 4],
        mnemonic:
          "'Get-sue-yoh-bee' — 'gets you, yo, be(ating)' = Monday gets you down",
      },
      {
        japanese: "にちようび",
        romaji: "nichiyōbi",
        english: "Sunday",
        fitsPattern: [1, 4],
        mnemonic:
          "'Nee-chee-yoh-bee' — 'niche hobby' day on Sunday — free time!",
      },
      {
        japanese: "いちがつ",
        romaji: "ichigatsu",
        english: "January",
        fitsPattern: [1, 4],
        mnemonic:
          "いち (one) + がつ (month) = month one = January — all months follow this pattern",
      },
    ],
    examples: [
      {
        japanese: "おとうさんとおかあさんがいます。",
        romaji: "Otōsan to okāsan ga imasu.",
        english: "I have a father and mother.",
      },
      {
        japanese: "きょうだいがさんにんいます。",
        romaji: "Kyōdai ga sannin imasu.",
        english: "I have three siblings.",
      },
      {
        japanese: "こどもがふたりいます。",
        romaji: "Kodomo ga futari imasu.",
        english: "I have two children.",
      },
      {
        japanese: "きょうはいいてんきですね。",
        romaji: "Kyō wa ii tenki desu ne.",
        english: "The weather is nice today, isn't it?",
      },
      {
        japanese: "あしたはあめです。",
        romaji: "Ashita wa ame desu.",
        english: "It will rain tomorrow.",
      },
      {
        japanese: "きょうはにちようびです。",
        romaji: "Kyō wa nichiyōbi desu.",
        english: "Today is Sunday.",
      },
      {
        japanese: "いちがつはさむいです。",
        romaji: "Ichigatsu wa samui desu.",
        english: "January is cold.",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "かぞくはなんにんですか？",
        romaji: "Kazoku wa nannin desu ka?",
        english: "How many people are in your family?",
      },
      {
        speaker: "You",
        japanese: "よにんです。おとうさんとおかあさんといもうとがいます。",
        romaji: "Yonin desu. Otōsan to okāsan to imōto ga imasu.",
        english: "Four. I have a father, mother, and younger sister.",
      },
      {
        speaker: "Yuki",
        japanese: "いいですね。きょうはいいてんきですね。",
        romaji: "Ii desu ne. Kyō wa ii tenki desu ne.",
        english: "That's nice. The weather is nice today, isn't it?",
      },
      {
        speaker: "You",
        japanese: "はい。でもあしたはあめです。",
        romaji: "Hai. Demo ashita wa ame desu.",
        english: "Yes. But it will rain tomorrow.",
      },
      {
        speaker: "Yuki",
        japanese: "そうですか。にちようびはなにをしますか？",
        romaji: "Sō desu ka. Nichiyōbi wa nani o shimasu ka?",
        english: "Really? What will you do on Sunday?",
      },
      {
        speaker: "You",
        japanese: "うちでかぞくとえいがをみます。",
        romaji: "Uchi de kazoku to eiga o mimasu.",
        english: "I'll watch a movie at home with my family.",
      },
    ],
    practicePrompts: [
      "Describe your family: かぞくは___にんです。___がいます。",
      "Talk about today's weather: きょうは___です。",
      "Say what day it is: きょうは___ようびです。",
      "Name the months: いちがつ, にがつ, さんがつ... (just add numbers to がつ!)",
    ],
    languageInsight: {
      title: "Months Are Just Numbers",
      content:
        "Japanese months are refreshingly logical: just combine a number with がつ (month). いちがつ (1月) = January, にがつ (2月) = February, さんがつ (3月) = March, all the way to じゅうにがつ (12月) = December. No memorizing 'January, February, March' — if you can count to twelve, you know all the months. Days of the week follow a different pattern, based on the seven classical elements: げつ (moon/Monday), か (fire/Tuesday), すい (water/Wednesday), もく (wood/Thursday), きん (gold/Friday), ど (earth/Saturday), にち (sun/Sunday).",
    },
    tutorNote:
      "This is a vocabulary-heavy day covering essential life topics. For family, remember: use います (not もっています) for people. きょうだいがいます (I have siblings), not きょうだいをもっています. For weather, きょうはいいてんきですね is one of the most common Japanese greetings — use it to start conversations. Months are simply number+がつ, making them the easiest vocabulary in Japanese.",
    quickReference:
      "Family: おとうさん=father | おかあさん=mother | きょうだい=siblings | こども=children | Weather: てんき=weather | あめ=rain | はれ=sunny | Days: げつようび=Mon | かようび=Tue | すいようび=Wed | もくようび=Thu | きんようび=Fri | どようび=Sat | にちようび=Sun | Months: number+がつ",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 31 — Family and Daily Life",
      listenFor:
        "Family vocabulary in self-introductions. Listen for かぞくは___にんです as a common way to describe family size. Notice how weather talk (いいてんきですね) is used as a conversation starter.",
    },
  },

  {
    day: 32,
    dayType: "pattern-combo",
    title: "Complex Sentence Building",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Combine multiple patterns into complex, multi-clause sentences",
      "Chain sentences with それから, でも, and そして",
      "Describe a full day's activities using time, place, and tense patterns",
      "Build paragraph-length descriptions in Japanese",
    ],
    usesPatterns: [7, 8, 9, 13, 16, 17],
    vocabulary: [
      {
        japanese: "そして",
        romaji: "soshite",
        english: "and then / and also",
        mnemonic:
          "'Soh-shee-teh' — 'so she' continued — and then...",
      },
      {
        japanese: "でも",
        romaji: "demo",
        english: "but / however",
        mnemonic:
          "'Deh-moh' — 'demo' version is limited — but the full version is better",
      },
      {
        japanese: "だから",
        romaji: "dakara",
        english: "therefore / so",
        mnemonic:
          "'Dah-kah-rah' — 'the car, ah' broke down, so I walked",
      },
      {
        japanese: "でんしゃ",
        romaji: "densha",
        english: "train",
        fitsPattern: [8, 16],
        mnemonic:
          "'Den-shah' — 'dense' crowds on the train during rush hour",
      },
      {
        japanese: "えき",
        romaji: "eki",
        english: "train station",
        fitsPattern: [7, 9],
        mnemonic:
          "'Eh-kee' — 'a key' to the city is the train station",
      },
      {
        japanese: "しごと",
        romaji: "shigoto",
        english: "work / job",
        fitsPattern: [7, 8, 9],
        mnemonic:
          "'She-go-toh' — 'she go to' work every morning",
      },
    ],
    examples: [
      {
        japanese: "あさろくじにおきました。そしてあさごはんをたべました。",
        romaji: "Asa rokuji ni okimashita. Soshite asagohan o tabemashita.",
        english: "I woke up at six in the morning. And then I ate breakfast.",
      },
      {
        japanese: "えきにあるきました。でんしゃにのりました。",
        romaji: "Eki ni arukimashita. Densha ni norimashita.",
        english: "I walked to the station. I got on the train.",
      },
      {
        japanese: "カフェでコーヒーをのみました。でもケーキをたべませんでした。",
        romaji: "Kafe de kōhī o nomimashita. Demo kēki o tabemasen deshita.",
        english: "I drank coffee at the café. But I didn't eat cake.",
      },
      {
        japanese: "あめでした。だからうちにいました。",
        romaji: "Ame deshita. Dakara uchi ni imashita.",
        english: "It was rainy. So I stayed at home.",
      },
      {
        japanese: "しごとにいきます。えきのちかくにカフェがあります。",
        romaji: "Shigoto ni ikimasu. Eki no chikaku ni kafe ga arimasu.",
        english: "I go to work. There is a café near the station.",
      },
      {
        japanese: "きのうのごごとしょかんでべんきょうしました。そしてカフェでコーヒーをのみました。",
        romaji: "Kinō no gogo toshokan de benkyō shimashita. Soshite kafe de kōhī o nomimashita.",
        english: "Yesterday afternoon I studied at the library. Then I had coffee at a café.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [16, 13],
        japanese: "きのうのよるレストランでばんごはんをたべました。",
        romaji: "Kinō no yoru resutoran de bangohan o tabemashita.",
        english: "Last night I ate dinner at a restaurant.",
      },
      {
        patternsUsed: [7, 9, 8],
        japanese: "えきにいきます。でんしゃにのります。かいしゃではたらきます。",
        romaji: "Eki ni ikimasu. Densha ni norimasu. Kaisha de hatarakimasu.",
        english: "I go to the station. I ride the train. I work at the office.",
      },
      {
        patternsUsed: [17, 9, 8],
        japanese: "えきのちかくにカフェがあります。そのカフェでコーヒーをのみます。",
        romaji: "Eki no chikaku ni kafe ga arimasu. Sono kafe de kōhī o nomimasu.",
        english: "There is a café near the station. I drink coffee at that café.",
      },
      {
        patternsUsed: [16, 13, 7],
        japanese: "どようびのあさこうえんではしりました。そしてカフェにいきました。",
        romaji: "Doyōbi no asa kōen de hashirimashita. Soshite kafe ni ikimashita.",
        english: "On Saturday morning I ran at the park. Then I went to a café.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "きのう、なにをしましたか？",
        romaji: "Kinō, nani o shimashita ka?",
        english: "What did you do yesterday?",
      },
      {
        speaker: "You",
        japanese: "あさろくじにおきました。そしてあさごはんをたべました。",
        romaji: "Asa rokuji ni okimashita. Soshite asagohan o tabemashita.",
        english: "I woke up at six. Then I ate breakfast.",
      },
      {
        speaker: "Tanaka",
        japanese: "それから？",
        romaji: "Sorekara?",
        english: "And then?",
      },
      {
        speaker: "You",
        japanese: "でんしゃでしごとにいきました。ごごにかいしゃではたらきました。",
        romaji: "Densha de shigoto ni ikimashita. Gogo ni kaisha de hatarakimashita.",
        english: "I went to work by train. In the afternoon I worked at the office.",
      },
      {
        speaker: "Tanaka",
        japanese: "よるは？",
        romaji: "Yoru wa?",
        english: "How about the evening?",
      },
      {
        speaker: "You",
        japanese: "ろくじにうちにかえりました。ばんごはんをつくりました。そしてテレビをみました。",
        romaji: "Rokuji ni uchi ni kaerimashita. Bangohan o tsukurimashita. Soshite terebi o mimashita.",
        english: "I went home at six. I made dinner. Then I watched TV.",
      },
    ],
    practicePrompts: [
      "Describe your entire yesterday from morning to night using そして and それから",
      "Use でも to contrast: ___をしました。でも___をしませんでした。",
      "Build a paragraph about your commute using patterns #7, #8, #9",
      "Describe a place using #17, then what you do there using #9",
    ],
    languageInsight: {
      title: "Connectors: The Glue of Natural Speech",
      content:
        "Single sentences are useful, but connected paragraphs are powerful. Japanese uses simple connectors to chain ideas: そして (and then) adds information, それから (after that) shows sequence, でも (but) contrasts, だから (therefore) shows cause and effect. Notice these appear at the START of the new sentence, not between clauses. This is different from English, where 'and,' 'but,' and 'so' connect within a sentence. In Japanese, each clause often stands as its own sentence, linked by these connectors.",
    },
    tutorNote:
      "Today's goal is fluency through combination. You're not learning anything new — you're building paragraphs from pieces you already know. The key skill is chaining: そして (and then), でも (but), だから (so). Try describing your entire day from waking up to going to bed. If you can produce a 6-8 sentence paragraph in Japanese, you're ready for real conversations.",
    quickReference:
      "Connectors: そして=and then | でも=but | だから=therefore | それから=after that | でんしゃ=train | えき=station | しごと=work | かいしゃ=company/office",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 32 — Describing Your Day",
      listenFor:
        "How speakers chain multiple sentences together with connectors. Notice the rhythm: sentence + pause + connector + sentence. Pay attention to どのように time flows from morning to night.",
    },
  },

  {
    day: 33,
    dayType: "pattern-combo",
    title: "About Me Conversations",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Deliver a full self-introduction in Japanese",
      "Ask and answer personal questions about work, hobbies, family, and daily life",
      "Combine identity patterns (#1, #4) with action patterns (#8, #13, #16)",
      "Hold a 2-minute conversation about yourself",
    ],
    usesPatterns: [1, 4, 8, 13, 16],
    vocabulary: [
      {
        japanese: "じこしょうかい",
        romaji: "jikoshōkai",
        english: "self-introduction",
        mnemonic:
          "'Jee-koh-shoh-kye' — 'Geico show, kai(te)' — introduce yourself like a Geico commercial",
      },
      {
        japanese: "しゅっしん",
        romaji: "shusshin",
        english: "hometown / place of origin",
        fitsPattern: [1, 4],
        mnemonic:
          "'Shoo-shin' — 'shoe-shin' — polishing shoes from your hometown",
      },
      {
        japanese: "すんでいます",
        romaji: "sunde imasu",
        english: "I live (in) (polite)",
        fitsPattern: [4],
        mnemonic:
          "'Soon-deh ee-mahs' — 'soon day' I'm living here = I live here",
      },
      {
        japanese: "すきです",
        romaji: "suki desu",
        english: "I like (polite)",
        fitsPattern: [4],
        mnemonic:
          "'Skee des' — 'ski' — I like skiing!",
      },
      {
        japanese: "とくいです",
        romaji: "tokui desu",
        english: "I'm good at (polite)",
        fitsPattern: [4],
        mnemonic:
          "'Toh-koo-ee des' — 'Tokyo' experts are good at everything",
      },
      {
        japanese: "にがてです",
        romaji: "nigate desu",
        english: "I'm not good at / I don't like (polite)",
        fitsPattern: [4],
        mnemonic:
          "'Nee-gah-teh des' — 'negate' your skills = not good at it",
      },
    ],
    examples: [
      {
        japanese: "はじめまして。スペンサーです。アメリカしゅっしんです。",
        romaji: "Hajimemashite. Supensā desu. Amerika shusshin desu.",
        english: "Nice to meet you. I'm Spencer. I'm from America.",
      },
      {
        japanese: "とうきょうにすんでいます。",
        romaji: "Tōkyō ni sunde imasu.",
        english: "I live in Tokyo.",
      },
      {
        japanese: "にほんごがすきです。",
        romaji: "Nihongo ga suki desu.",
        english: "I like Japanese.",
      },
      {
        japanese: "りょうりがとくいです。",
        romaji: "Ryōri ga tokui desu.",
        english: "I'm good at cooking.",
      },
      {
        japanese: "うんどうがにがてです。",
        romaji: "Undō ga nigate desu.",
        english: "I'm not good at exercise.",
      },
      {
        japanese: "きょねんにほんにきました。まいにちにほんごをべんきょうします。",
        romaji: "Kyonen nihon ni kimashita. Mainichi nihongo o benkyō shimasu.",
        english: "I came to Japan last year. I study Japanese every day.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4],
        japanese: "がくせいです。にほんごのがくせいです。にほんがすきです。",
        romaji: "Gakusei desu. Nihongo no gakusei desu. Nihon ga suki desu.",
        english: "I'm a student. A Japanese language student. I like Japan.",
      },
      {
        patternsUsed: [1, 8, 13],
        japanese: "エンジニアです。まいにちパソコンをつかいます。きのうあたらしいプログラムをつくりました。",
        romaji: "Enjinia desu. Mainichi pasokon o tsukaimasu. Kinō atarashii puroguramu o tsukurimashita.",
        english: "I'm an engineer. I use a computer every day. Yesterday I made a new program.",
      },
      {
        patternsUsed: [4, 8, 16],
        japanese: "りょうりがすきです。どようびにうちでりょうりをつくります。",
        romaji: "Ryōri ga suki desu. Doyōbi ni uchi de ryōri o tsukurimasu.",
        english: "I like cooking. On Saturdays I cook at home.",
      },
      {
        patternsUsed: [1, 4, 13],
        japanese: "アメリカじんです。きょねんにほんにきました。いまとうきょうにすんでいます。",
        romaji: "Amerikajin desu. Kyonen nihon ni kimashita. Ima Tōkyō ni sunde imasu.",
        english: "I'm American. I came to Japan last year. Now I live in Tokyo.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "はじめまして。たなかです。おしごとはなんですか？",
        romaji: "Hajimemashite. Tanaka desu. Oshigoto wa nan desu ka?",
        english: "Nice to meet you. I'm Tanaka. What is your job?",
      },
      {
        speaker: "You",
        japanese: "はじめまして。がくせいです。にほんごをべんきょうしています。",
        romaji: "Hajimemashite. Gakusei desu. Nihongo o benkyō shite imasu.",
        english: "Nice to meet you. I'm a student. I'm studying Japanese.",
      },
      {
        speaker: "Tanaka",
        japanese: "しゅっしんはどこですか？",
        romaji: "Shusshin wa doko desu ka?",
        english: "Where are you from?",
      },
      {
        speaker: "You",
        japanese: "アメリカしゅっしんです。いまとうきょうにすんでいます。",
        romaji: "Amerika shusshin desu. Ima Tōkyō ni sunde imasu.",
        english: "I'm from America. I live in Tokyo now.",
      },
      {
        speaker: "Tanaka",
        japanese: "しゅみはなんですか？",
        romaji: "Shumi wa nan desu ka?",
        english: "What are your hobbies?",
      },
      {
        speaker: "You",
        japanese: "りょうりがすきです。にほんりょうりをよくつくります。きのうラーメンをつくりました。",
        romaji: "Ryōri ga suki desu. Nihon ryōri o yoku tsukurimasu. Kinō rāmen o tsukurimashita.",
        english: "I like cooking. I often make Japanese food. I made ramen yesterday.",
      },
      {
        speaker: "Tanaka",
        japanese: "すごいですね。にほんがすきですか？",
        romaji: "Sugoi desu ne. Nihon ga suki desu ka?",
        english: "Amazing! Do you like Japan?",
      },
      {
        speaker: "You",
        japanese: "はい、だいすきです。よろしくおねがいします。",
        romaji: "Hai, daisuki desu. Yoroshiku onegai shimasu.",
        english: "Yes, I love it. Nice to meet you.",
      },
    ],
    practicePrompts: [
      "Write a full self-introduction: name, origin, job/student, hobby, what you like",
      "Practice asking about someone else: おしごとは？ しゅみは？ しゅっしんは？",
      "Describe what you did recently and what you do regularly",
      "Use すきです and にがてです to talk about your strengths and weaknesses",
      "Hold a 2-minute conversation about yourself with an imaginary partner",
    ],
    languageInsight: {
      title: "The Art of じこしょうかい",
      content:
        "Self-introductions (じこしょうかい) are a cornerstone of Japanese social life. At any new group — school, work, club — you'll be asked to introduce yourself. The standard formula is: はじめまして (nice to meet you) → name + です → origin/job/hobby → よろしくおねがいします (please treat me well). Japanese self-introductions tend to be modest — even if you're great at something, saying すこし___ます (I ___ a little) is considered more polite than bold claims. This modesty isn't false; it's a social lubricant that lets relationships develop naturally.",
    },
    tutorNote:
      "This is a practical day — everything you've learned comes together in the most common real-world scenario: meeting someone new. The じこしょうかい formula is your Swiss Army knife for social situations in Japan. Practice it until it's automatic: name → origin → occupation → hobby → よろしくおねがいします. Add きょねんにほんにきました or にほんごをべんきょうしています for extra depth.",
    quickReference:
      "Self-intro formula: はじめまして → [name]です → [origin]しゅっしん → [job/hobby] → よろしくおねがいします | すきです=like | とくいです=good at | にがてです=not good at | すんでいます=live in | しゅっしん=hometown",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 33 — Self-Introductions",
      listenFor:
        "The standard self-introduction flow. Notice how speakers go from basic info (name, origin) to personal details (hobbies, interests). Listen for the modest phrasing: すこし rather than bold claims.",
    },
  },

  {
    day: 34,
    dayType: "vocab-expansion",
    title: "Food & Drink Vocabulary",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Learn 10 essential Japanese food and drink words",
      "Order food with quantities using Pattern #20",
      "Describe meals using Patterns #8 and #9",
      "Talk about what you ate (Pattern #13) and what you like",
    ],
    usesPatterns: [6, 8, 9, 13, 20],
    vocabulary: [
      {
        japanese: "てんぷら",
        romaji: "tenpura",
        english: "tempura",
        fitsPattern: [6, 8],
        mnemonic:
          "Already English! From Portuguese 'tempero' (seasoning) — brought to Japan by Portuguese missionaries",
      },
      {
        japanese: "うどん",
        romaji: "udon",
        english: "udon noodles (thick wheat)",
        fitsPattern: [6, 8],
        mnemonic:
          "Already English! Thick, chewy wheat noodles served in hot broth",
      },
      {
        japanese: "そば",
        romaji: "soba",
        english: "buckwheat noodles",
        fitsPattern: [6, 8],
        mnemonic:
          "'Soh-bah' — 'so, bah!' these thin noodles are surprisingly filling",
      },
      {
        japanese: "おにぎり",
        romaji: "onigiri",
        english: "rice ball",
        fitsPattern: [6, 8],
        mnemonic:
          "'Oh-nee-gee-ree' — 'on a geary' train, grab a rice ball from the konbini",
      },
      {
        japanese: "みそしる",
        romaji: "misoshiru",
        english: "miso soup",
        fitsPattern: [6, 8],
        mnemonic:
          "'Mee-soh-shee-roo' — 'me, so, she, roux' = making miso soup together",
      },
      {
        japanese: "ぎょうざ",
        romaji: "gyōza",
        english: "dumplings / potstickers",
        fitsPattern: [6, 8],
        mnemonic:
          "Already English! Crispy-bottomed dumplings — from Chinese jiǎozi",
      },
      {
        japanese: "やきにく",
        romaji: "yakiniku",
        english: "grilled meat / BBQ",
        fitsPattern: [6, 8],
        mnemonic:
          "やき (grilled) + にく (meat) = grilled meat — Japanese BBQ where you grill at your table",
      },
      {
        japanese: "カレーライス",
        romaji: "karēraisu",
        english: "curry rice",
        fitsPattern: [6, 8],
        mnemonic:
          "'Ka-reh-rye-su' — 'curry rice' in Japanese syllables — Japan's most popular comfort food",
      },
      {
        japanese: "サラダ",
        romaji: "sarada",
        english: "salad",
        fitsPattern: [6, 8],
        mnemonic:
          "'Sah-rah-dah' — 'salad' with Japanese pronunciation",
      },
      {
        japanese: "ワイン",
        romaji: "wain",
        english: "wine",
        fitsPattern: [6, 8],
        mnemonic:
          "'Why-n' — sounds like 'wine' without the final consonant",
      },
    ],
    examples: [
      {
        japanese: "てんぷらをたべます。おいしいです。",
        romaji: "Tenpura o tabemasu. Oishii desu.",
        english: "I eat tempura. It's delicious.",
      },
      {
        japanese: "うどんとそば、どちらがすきですか？",
        romaji: "Udon to soba, dochira ga suki desu ka?",
        english: "Udon or soba, which do you like?",
      },
      {
        japanese: "コンビニでおにぎりをふたつかいました。",
        romaji: "Konbini de onigiri o futatsu kaimashita.",
        english: "I bought two rice balls at the convenience store.",
      },
      {
        japanese: "みそしるをいっぱいください。",
        romaji: "Misoshiru o ippai kudasai.",
        english: "One miso soup, please.",
      },
      {
        japanese: "きのうともだちとやきにくをたべました。",
        romaji: "Kinō tomodachi to yakiniku o tabemashita.",
        english: "I ate BBQ with a friend yesterday.",
      },
      {
        japanese: "カレーライスをつくりました。",
        romaji: "Karēraisu o tsukurimashita.",
        english: "I made curry rice.",
      },
      {
        japanese: "レストランでぎょうざとビールをください。",
        romaji: "Resutoran de gyōza to bīru o kudasai.",
        english: "Dumplings and beer at the restaurant, please.",
      },
      {
        japanese: "ワインをにはいのみました。",
        romaji: "Wain o nihai nomimashita.",
        english: "I drank two glasses of wine.",
      },
    ],
    dialogue: [
      {
        speaker: "Waiter",
        japanese: "いらっしゃいませ。ごちゅうもんは？",
        romaji: "Irasshaimase. Gochūmon wa?",
        english: "Welcome. What would you like to order?",
      },
      {
        speaker: "You",
        japanese: "うどんをひとつとてんぷらをひとつください。",
        romaji: "Udon o hitotsu to tenpura o hitotsu kudasai.",
        english: "One udon and one tempura, please.",
      },
      {
        speaker: "Friend",
        japanese: "カレーライスをください。サラダもください。",
        romaji: "Karēraisu o kudasai. Sarada mo kudasai.",
        english: "Curry rice, please. Salad too, please.",
      },
      {
        speaker: "Waiter",
        japanese: "おのみものは？",
        romaji: "Onomimono wa?",
        english: "And drinks?",
      },
      {
        speaker: "You",
        japanese: "ビールをにはいください。",
        romaji: "Bīru o nihai kudasai.",
        english: "Two beers, please.",
      },
      {
        speaker: "Waiter",
        japanese: "はい、かしこまりました。",
        romaji: "Hai, kashikomarimashita.",
        english: "Certainly.",
      },
      {
        speaker: "You",
        japanese: "おいしかったです。おかいけいをおねがいします。",
        romaji: "Oishikatta desu. Okaikei o onegai shimasu.",
        english: "It was delicious. Check, please.",
      },
    ],
    practicePrompts: [
      "Order a full meal: food + drink + counter: ___を___ください",
      "Describe your favorite Japanese food: ___がすきです。よく___をたべます。",
      "Say what you ate yesterday using specific foods: きのう___と___をたべました",
      "Compare two foods: ___と___、どちらがすきですか？",
      "Practice the restaurant flow: いらっしゃいませ → order → おかいけいをおねがいします",
    ],
    languageInsight: {
      title: "Japan's Comfort Food Culture",
      content:
        "Japanese cuisine goes far beyond sushi. カレーライス (curry rice) is Japan's most popular home-cooked meal, adapted from British navy curry in the Meiji era. ラーメン started as Chinese immigrant food and evolved into a uniquely Japanese art form with regional styles. おにぎり — simple rice balls — are the ultimate convenience food, sold by the billions annually at コンビニ. てんぷら came from Portuguese missionaries. Even ぎょうざ was adapted from Chinese jiaozi. Japanese food culture is a story of brilliant adaptation, turning borrowed ideas into perfected art.",
    },
    tutorNote:
      "With this food vocabulary, you can navigate any Japanese restaurant. The ordering flow is: いらっしゃいませ (welcome) → メニューをください (menu please) → ___を___ください (order with counter) → おのみものは？ (drinks?) → おかいけいをおねがいします (check please). Practice the counter pattern: おにぎりをみっつ, ビールをにはい, うどんをひとつ. Remember: つ counters work for almost anything when you're unsure.",
    quickReference:
      "Food: てんぷら | うどん | そば | おにぎり | みそしる | ぎょうざ | やきにく | カレーライス | サラダ | ワイン | Restaurant: ごちゅうもんは？=your order? | おかいけいをおねがいします=check please",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 34 — At a Japanese Restaurant",
      listenFor:
        "Restaurant vocabulary and counter words in ordering. Listen for the waiter's set phrases and how customers use を with counters: ___をひとつ, ___をにはい.",
    },
  },

  {
    day: 35,
    dayType: "review",
    title: "Phase 3 Review",
    phase: 3,
    phaseTitle: "Time & Tense Patterns",
    objectives: [
      "Review and solidify all 20 patterns from Phases 1–3",
      "Demonstrate mastery of the four-form tense grid",
      "Hold extended conversations using time, place, and tense patterns",
      "Self-assess readiness for Phase 4",
    ],
    usesPatterns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    vocabulary: [
      {
        japanese: "ことし",
        romaji: "kotoshi",
        english: "this year",
        mnemonic:
          "'Koh-toh-shee' — 'coat oh she' bought this year",
      },
      {
        japanese: "らいねん",
        romaji: "rainen",
        english: "next year",
        mnemonic:
          "'Rye-nen' — 'rye bread' next year's harvest",
      },
      {
        japanese: "いま",
        romaji: "ima",
        english: "now",
        mnemonic:
          "'Ee-mah' — 'I'm a' here right now",
      },
      {
        japanese: "いつも",
        romaji: "itsumo",
        english: "always",
        mnemonic:
          "'Ee-tsoo-moh' — 'it's more' than sometimes — it's always",
      },
      {
        japanese: "はじめて",
        romaji: "hajimete",
        english: "for the first time",
        mnemonic:
          "'Ha-jee-meh-teh' — 'hajime(mashite)' — first meeting, first time",
      },
      {
        japanese: "じょうず",
        romaji: "jōzu",
        english: "skilled / good at",
        mnemonic:
          "'Joh-zoo' — 'Joe's zoo' is so well-run because he's skilled",
      },
    ],
    examples: [
      {
        japanese: "がくせいです。にほんごをべんきょうしています。まいにちべんきょうします。",
        romaji: "Gakusei desu. Nihongo o benkyō shite imasu. Mainichi benkyō shimasu.",
        english: "I'm a student. I'm studying Japanese. I study every day. (Patterns #1, #8)",
      },
      {
        japanese: "きのうレストランですしをたべました。おいしかったです。",
        romaji: "Kinō resutoran de sushi o tabemashita. Oishikatta desu.",
        english: "Yesterday I ate sushi at a restaurant. It was delicious. (Patterns #13, #16)",
      },
      {
        japanese: "にくをたべません。やさいがすきです。",
        romaji: "Niku o tabemasen. Yasai ga suki desu.",
        english: "I don't eat meat. I like vegetables. (Pattern #14)",
      },
      {
        japanese: "きょねんにほんにいきませんでした。ことしいきます。",
        romaji: "Kyonen nihon ni ikimasen deshita. Kotoshi ikimasu.",
        english: "I didn't go to Japan last year. I'll go this year. (Patterns #15, #7)",
      },
      {
        japanese: "へやにテーブルがあります。ねこもいます。",
        romaji: "Heya ni tēburu ga arimasu. Neko mo imasu.",
        english: "There is a table in the room. There is also a cat. (Pattern #17)",
      },
      {
        japanese: "くるまをもっていません。じてんしゃをもっています。",
        romaji: "Kuruma o motte imasen. Jitensha o motte imasu.",
        english: "I don't have a car. I have a bicycle. (Pattern #18)",
      },
      {
        japanese: "すしとてんぷらをたべました。ビールをにはいのみました。",
        romaji: "Sushi to tenpura o tabemashita. Bīru o nihai nomimashita.",
        english: "I ate sushi and tempura. I drank two beers. (Patterns #19, #20)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4, 8, 13],
        japanese: "がくせいです。にほんがすきです。きょねんにほんにきました。まいにちにほんごをべんきょうします。",
        romaji: "Gakusei desu. Nihon ga suki desu. Kyonen nihon ni kimashita. Mainichi nihongo o benkyō shimasu.",
        english: "I'm a student. I like Japan. I came to Japan last year. I study Japanese every day.",
      },
      {
        patternsUsed: [16, 17, 9],
        japanese: "えきのちかくにカフェがあります。まいあさそのカフェでコーヒーをのみます。",
        romaji: "Eki no chikaku ni kafe ga arimasu. Maiasa sono kafe de kōhī o nomimasu.",
        english: "There is a café near the station. Every morning I drink coffee at that café.",
      },
      {
        patternsUsed: [18, 7, 8],
        japanese: "じてんしゃをもっています。まいにちじてんしゃでがっこうにいきます。がっこうでにほんごをならいます。",
        romaji: "Jitensha o motte imasu. Mainichi jitensha de gakkō ni ikimasu. Gakkō de nihongo o naraimasu.",
        english: "I have a bicycle. I go to school by bicycle every day. I learn Japanese at school.",
      },
      {
        patternsUsed: [10, 11, 12, 13, 14],
        japanese: "しゅみはなんですか？ — りょうりです。だれがつくりますか？ — わたしがつくります。いつつくりますか？ — しゅうまつにつくります。きのうもつくりました。でもきょうはつくりません。",
        romaji: "Shumi wa nan desu ka? — Ryōri desu. Dare ga tsukurimasu ka? — Watashi ga tsukurimasu. Itsu tsukurimasu ka? — Shūmatsu ni tsukurimasu. Kinō mo tsukurimashita. Demo kyō wa tsukurimasen.",
        english: "What is your hobby? — Cooking. Who cooks? — I do. When do you cook? — On weekends. I cooked yesterday too. But I won't cook today.",
      },
    ],
    dialogue: [
      {
        speaker: "Tanaka",
        japanese: "こんにちは。おげんきですか？",
        romaji: "Konnichiwa. Ogenki desu ka?",
        english: "Hello. How are you?",
      },
      {
        speaker: "You",
        japanese: "はい、げんきです。きょうはいいてんきですね。",
        romaji: "Hai, genki desu. Kyō wa ii tenki desu ne.",
        english: "Yes, I'm fine. The weather is nice today, isn't it?",
      },
      {
        speaker: "Tanaka",
        japanese: "しゅうまつはなにをしましたか？",
        romaji: "Shūmatsu wa nani o shimashita ka?",
        english: "What did you do on the weekend?",
      },
      {
        speaker: "You",
        japanese: "どようびにともだちとやきにくをたべました。おいしかったです。にちようびはうちでべんきょうしました。",
        romaji: "Doyōbi ni tomodachi to yakiniku o tabemashita. Oishikatta desu. Nichiyōbi wa uchi de benkyō shimashita.",
        english: "On Saturday I ate BBQ with a friend. It was delicious. On Sunday I studied at home.",
      },
      {
        speaker: "Tanaka",
        japanese: "にほんごがじょうずですね。らいしゅうのよていは？",
        romaji: "Nihongo ga jōzu desu ne. Raishū no yotei wa?",
        english: "Your Japanese is good! Plans for next week?",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。まだまだです。らいしゅうはとうきょうにいきます。はじめてです。",
        romaji: "Arigatō gozaimasu. Mada mada desu. Raishū wa Tōkyō ni ikimasu. Hajimete desu.",
        english: "Thank you. I still have a long way to go. Next week I'm going to Tokyo. It's my first time.",
      },
      {
        speaker: "Tanaka",
        japanese: "いいですね！たのしんでください。",
        romaji: "Ii desu ne! Tanoshinde kudasai.",
        english: "Nice! Enjoy yourself!",
      },
      {
        speaker: "You",
        japanese: "はい。おすしをたべます。おみやげもかいます。",
        romaji: "Hai. Osushi o tabemasu. Omiyage mo kaimasu.",
        english: "Yes. I'll eat sushi. I'll also buy souvenirs.",
      },
    ],
    practicePrompts: [
      "Write a full self-introduction covering: name, origin, job, hobby, family, what you did recently",
      "Describe your entire day yesterday using all four tense forms where appropriate",
      "Describe your room using Pattern #17, then your possessions using Pattern #18",
      "Role-play a restaurant visit: enter, order with counters, pay",
      "Test yourself: say all 20 patterns from memory with an example for each",
    ],
    languageInsight: {
      title: "20 Patterns, Unlimited Sentences",
      content:
        "You now command 20 sentence patterns — and that's far more powerful than it sounds. Each pattern is a template that accepts any vocabulary you know. Pattern #8 (___を___ます) alone can generate thousands of sentences by swapping in different objects and verbs. Combine patterns (#16 stacks time + place + object + verb), add tense (#13–#15), and the number of possible sentences becomes astronomical. A linguist would say you've internalized the core productive grammar of Japanese. The remaining patterns in Phases 4–7 add nuance and sophistication, but the structural foundation is now firmly in place.",
    },
    tutorNote:
      "Phase 3 complete! You can now express time (past, present, future), describe existence (あります/います), state possession (もっています), list items (と), count things (counters), and build full sentences with time-place-object-verb. Before moving to Phase 4, make sure you can: (1) convert any verb through all four tense forms without hesitation, (2) describe a full day from morning to night, and (3) hold a self-introduction conversation. Phase 4 introduces adjective patterns and opinions — you'll finally be able to say things are big, small, beautiful, or difficult.",
    quickReference:
      "Phase 3 Patterns: #13 ました (past) | #14 ません (negative) | #15 ませんでした (past negative) | #16 [Time]に[Place]で[Object]を[Verb] | #17 があります/います (existence) | #18 をもっています (possession) | #19 と (listing) | #20 を[counter]ください (counting) | All 20 patterns now complete!",
    listeningRec: {
      source: "NHK World Easy Japanese",
      title: "Lesson 35 — Review and Conversation Practice",
      listenFor:
        "Try to identify every pattern from Phases 1–3 in natural speech. Challenge yourself: listen without subtitles and see how much you catch. Pay attention to how native speakers chain patterns together into flowing paragraphs.",
    },
  },
];
