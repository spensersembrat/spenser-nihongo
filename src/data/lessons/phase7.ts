import { Lesson } from "@/lib/types";

export const phase7Lessons: Lesson[] = [
  {
    day: 81,
    dayType: "new-pattern",
    title: "Pattern #50: Register Switching",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Master Pattern #50: switching between polite (です/ます) and casual (だ/plain form) register",
      "Understand the social contexts that trigger register switching",
      "Convert polite sentences to casual and vice versa with confidence",
      "Recognize that register choice carries social meaning beyond grammar",
    ],
    pattern: {
      number: 50,
      japanese: "です↔だ / ます↔[plain form] / ません↔ない",
      romaji: "desu ↔ da / masu ↔ [plain form] etc.",
      english: "Polite ↔ casual register switching",
      breakdown: [
        {
          text: "です→だ",
          romaji: "desu → da",
          role: "fixed",
          explanation:
            "Polite copula becomes だ in casual speech (or dropped entirely with い-adjectives)",
        },
        {
          text: "ます→[dictionary form]",
          romaji: "masu → [dictionary form]",
          role: "verb",
          explanation:
            "Polite verb ending drops to dictionary form in casual (たべます→たべる)",
        },
        {
          text: "ません→ない",
          romaji: "masen → nai",
          role: "verb",
          explanation:
            "Polite negative becomes casual negative (たべません→たべない)",
        },
        {
          text: "でしょう→だろう",
          romaji: "deshō → darō",
          role: "fixed",
          explanation:
            "Polite probability becomes casual probability",
        },
      ],
    },
    vocabulary: [
      {
        japanese: "ていねい",
        romaji: "teinei",
        english: "polite / careful (な-adjective)",
        fitsPattern: [50],
        mnemonic:
          "'Tay-nay' — a polite horse takes a careful 'neigh' — always speaking politely",
      },
      {
        japanese: "タメぐち",
        romaji: "tameguchi",
        english: "casual speech / informal register",
        fitsPattern: [50],
        mnemonic:
          "'Tah-meh-goo-chee' — 'tame goose, cheese' — casual enough to share cheese with a tame goose",
      },
      {
        japanese: "だ",
        romaji: "da",
        english: "casual copula (replaces です)",
        fitsPattern: [50],
        mnemonic:
          "'Dah' — like a casual 'duh!' — the most laid-back way to say 'is'",
      },
      {
        japanese: "じゃん",
        romaji: "jan",
        english: "isn't it? / right? (casual confirmation)",
        fitsPattern: [50],
        mnemonic:
          "'Jahn' — like calling out 'John!' — 'It's obvious, John!' — a breezy confirmation",
      },
      {
        japanese: "だろう",
        romaji: "darō",
        english: "probably / I'd say (casual でしょう)",
        fitsPattern: [50],
        mnemonic:
          "'Dah-roh' — 'da row' — 'it's probably in da row over there, duh'",
      },
      {
        japanese: "かな",
        romaji: "kana",
        english: "I wonder (casual sentence-ending musing)",
        fitsPattern: [50],
        mnemonic:
          "'Kah-nah' — like a soft 'can I…?' trailed off — gently wondering aloud",
      },
    ],
    examples: [
      {
        japanese: "これはおいしいです。→ これ、おいしい！",
        romaji: "Kore wa oishii desu. → Kore, oishii!",
        english: "This is delicious. → This is so good! (polite → casual)",
      },
      {
        japanese: "あしたいきますか？ → あしたいく？",
        romaji: "Ashita ikimasu ka? → Ashita iku?",
        english: "Will you go tomorrow? → Going tomorrow? (polite → casual)",
      },
      {
        japanese: "わかりません。→ わからない。",
        romaji: "Wakarimasen. → Wakaranai.",
        english: "I don't understand. → I don't get it. (polite → casual)",
      },
      {
        japanese: "あめがふるでしょう。→ あめがふるだろう。",
        romaji: "Ame ga furu deshō. → Ame ga furu darō.",
        english:
          "It will probably rain. → It'll probably rain. (polite → casual)",
      },
      {
        japanese: "このえいがはおもしろいじゃん！みにいこうよ。",
        romaji: "Kono eiga wa omoshiroi jan! Mi ni ikō yo.",
        english:
          "This movie's interesting, right? Let's go see it! (casual with じゃん and よう)",
      },
      {
        japanese: "あしたひまかな。どこかにいきたいな。",
        romaji: "Ashita hima kana. Doko ka ni ikitai na.",
        english:
          "I wonder if I'm free tomorrow. I'd like to go somewhere. (casual musing with かな)",
      },
    ],
    dialogue: [
      {
        speaker: "Yuki",
        japanese: "ねえ、きょうひま？",
        romaji: "Nē, kyō hima?",
        english: "Hey, are you free today? (casual)",
      },
      {
        speaker: "You",
        japanese: "うん、ひまだよ。なに？",
        romaji: "Un, hima da yo. Nani?",
        english: "Yeah, I'm free. What's up? (casual)",
      },
      {
        speaker: "Yuki",
        japanese: "えいがみにいかない？あたらしいのがおもしろいらしいよ。",
        romaji: "Eiga mi ni ikanai? Atarashii no ga omoshiroi rashii yo.",
        english:
          "Wanna go see a movie? The new one is apparently good. (casual)",
      },
      {
        speaker: "You",
        japanese: "いいね！なにみる？",
        romaji: "Ii ne! Nani miru?",
        english: "Nice! What should we watch? (casual)",
      },
      {
        speaker: "Yuki",
        japanese:
          "うーん、なんでもいいよ。あ、すずきさんもさそう？",
        romaji: "Ūn, nan demo ii yo. A, Suzuki-san mo sasō?",
        english:
          "Hmm, anything's fine. Oh, should we invite Suzuki too? (casual)",
      },
      {
        speaker: "You",
        japanese:
          "すずきさんはまだあまりしらないから、ていねいにはなしたほうがいいかな。",
        romaji:
          "Suzuki-san wa mada amari shiranai kara, teinei ni hanashita hō ga ii kana.",
        english:
          "I don't know Suzuki well yet, so I wonder if I should speak politely.",
      },
      {
        speaker: "Yuki",
        japanese:
          "だいじょうぶ、すずきさんはカジュアルなひとだよ。タメぐちでいいよ。",
        romaji:
          "Daijōbu, Suzuki-san wa kajuaru na hito da yo. Tameguchi de ii yo.",
        english:
          "It's fine, Suzuki is a casual person. Informal speech is OK. (casual)",
      },
    ],
    practicePrompts: [
      "Rewrite these polite sentences as casual: (a) きょうはさむいです (b) にほんごをべんきょうしています (c) あしたいきますか？ (d) わかりません",
      "Text a close friend making casual weekend plans — use だ, よ, ね, and かな",
      "Write a mini dialogue: start polite with a stranger, then switch to casual after becoming friends",
      "Convert your Day 80 review paragraph from polite to full casual register",
    ],
    languageInsight: {
      title: "Register as Social Navigation",
      content:
        "Register in Japanese isn't just grammar — it's social GPS. Using polite speech (です/ます) with strangers, bosses, or elders signals respect for social distance. Switching to casual (だ/plain form) with friends signals intimacy and trust. Japanese speakers constantly adjust register based on who they're talking to, where they are, and even what they're discussing. A businessperson uses です/ます in meetings but switches to casual with family at home. A student uses です/ます with teachers but plain form with classmates. The wrong register can feel cold (too polite with close friends) or rude (too casual with a stranger). Pattern #27 introduced casual forms; Pattern #50 is about when and why you switch. As a learner, default to polite — it's always safe. You'll naturally shift to casual as relationships deepen, just like native speakers did growing up.",
    },
    tutorNote:
      "Pattern #50 isn't a sentence template — it's a social awareness skill. Every Japanese sentence carries a register choice. Start by having students convert simple polite sentences to casual and back. Key rule: when in doubt, use polite. You can never offend by being too polite, but being too casual can damage relationships. The dialogue shows how native speakers discuss register openly — this meta-awareness is itself a sign of growing fluency.",
    quickReference:
      "です→だ | ます→dictionary form | ません→ない | ました→た | ですか→↑? (rising tone) | でしょう→だろう | ではありません→じゃない | ましょう→よう | Casual extras: よ (assertion), ね (agreement), かな (wonder), じゃん (right?) | Default: polite with strangers/elders, casual with close friends/family",
    listeningRec: {
      source: "Terrace House",
      title: "Notice the register shifts",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch without subtitles and focus on register switching. Housemates use casual with each other but polite in confessional interviews or with production staff. Listen for だ vs です at sentence ends — the switch reveals the relationship.",
    },
  },

  {
    day: 82,
    dayType: "vocab-expansion",
    title: "Restaurant Mastery",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Master 8 essential restaurant vocabulary words for ordering, paying, and dining etiquette",
      "Navigate a full restaurant experience in Japanese: entering, ordering, requesting, and paying",
      "Use restaurant set phrases naturally: いただきます and ごちそうさまでした",
      "Combine restaurant vocabulary with Patterns #6, #8, #9, #21, #29, and #47",
    ],
    usesPatterns: [6, 8, 9, 21, 29, 47],
    vocabulary: [
      {
        japanese: "ちゅうもん",
        romaji: "chūmon",
        english: "order (noun) / to order (する verb)",
        fitsPattern: [6, 8],
        mnemonic:
          "'Choo-mohn' — 'chew, mon!' — chew your food, mon, after you order!",
      },
      {
        japanese: "おすすめ",
        romaji: "osusume",
        english: "recommendation",
        fitsPattern: [21],
        mnemonic:
          "'Oh-soo-soo-meh' — 'oh, sue sue me!' — this recommendation is so good, sue me!",
      },
      {
        japanese: "メニュー",
        romaji: "menyū",
        english: "menu",
        fitsPattern: [6, 29],
        mnemonic:
          "'Men-yoo' — sounds just like 'menu' — one of the easiest loanwords!",
      },
      {
        japanese: "おかわり",
        romaji: "okawari",
        english: "refill / another serving",
        fitsPattern: [6, 29],
        mnemonic:
          "'Oh-kah-wah-ree' — 'oh, I want more-ee!' — give me another helping!",
      },
      {
        japanese: "おかいけい",
        romaji: "okaikei",
        english: "the check / the bill",
        fitsPattern: [29],
        mnemonic:
          "'Oh-kai-kay' — 'OK, pay!' — it's time to settle the bill!",
      },
      {
        japanese: "いただきます",
        romaji: "itadakimasu",
        english: "expression before eating (lit. I humbly receive)",
        mnemonic:
          "'Ee-tah-dah-kee-mahs' — 'eat a duck, I must!' — a humble declaration before the feast begins",
      },
      {
        japanese: "ごちそうさまでした",
        romaji: "gochisōsama deshita",
        english: "expression after eating (lit. it was a feast)",
        mnemonic:
          "'Go-chee-soh-sah-mah' — 'go, cheese on some, ah!' — what a glorious feast!",
      },
      {
        japanese: "りょうり",
        romaji: "ryōri",
        english: "cooking / cuisine / dish",
        fitsPattern: [8, 21],
        mnemonic:
          "'Ryoh-ree' — 'rio-ree' — cooking up a grand feast by the Rio river",
      },
    ],
    examples: [
      {
        japanese: "すみません、ちゅうもんをおねがいします。",
        romaji: "Sumimasen, chūmon o onegai shimasu.",
        english: "Excuse me, I'd like to order, please.",
      },
      {
        japanese: "おすすめはなんですか？",
        romaji: "Osusume wa nan desu ka?",
        english: "What do you recommend?",
      },
      {
        japanese: "メニューをみせてください。",
        romaji: "Menyū o misete kudasai.",
        english: "Please show me the menu.",
      },
      {
        japanese: "ごはんのおかわりをください。",
        romaji: "Gohan no okawari o kudasai.",
        english: "A rice refill, please.",
      },
      {
        japanese: "おかいけいをおねがいします。",
        romaji: "Okaikei o onegai shimasu.",
        english: "Check, please.",
      },
      {
        japanese: "にほんりょうりはおいしいです。",
        romaji: "Nihon ryōri wa oishii desu.",
        english: "Japanese cuisine is delicious.",
      },
      {
        japanese: "いっしょにラーメンをたべにいきましょう。",
        romaji: "Issho ni rāmen o tabe ni ikimashō.",
        english: "Let's go eat ramen together.",
      },
      {
        japanese: "このみせのてんぷらがたべたいです。",
        romaji: "Kono mise no tenpura ga tabetai desu.",
        english: "I want to eat this restaurant's tempura.",
      },
    ],
    dialogue: [
      {
        speaker: "Waiter",
        japanese: "いらっしゃいませ。なんめいさまですか？",
        romaji: "Irasshaimase. Nanmei-sama desu ka?",
        english: "Welcome. How many people?",
      },
      {
        speaker: "You",
        japanese: "ふたりです。メニューをおねがいします。",
        romaji: "Futari desu. Menyū o onegai shimasu.",
        english: "Two people. The menu, please.",
      },
      {
        speaker: "Waiter",
        japanese:
          "はい、どうぞ。きょうのおすすめはてんぷらていしょくです。",
        romaji: "Hai, dōzo. Kyō no osusume wa tenpura teishoku desu.",
        english:
          "Here you are. Today's recommendation is the tempura set meal.",
      },
      {
        speaker: "You",
        japanese: "じゃ、てんぷらていしょくをふたつください。",
        romaji: "Ja, tenpura teishoku o futatsu kudasai.",
        english: "Then two tempura set meals, please.",
      },
      {
        speaker: "Waiter",
        japanese: "おのみものはいかがですか？",
        romaji: "Onomimono wa ikaga desu ka?",
        english: "How about drinks?",
      },
      {
        speaker: "You",
        japanese:
          "おちゃをふたつおねがいします。…いただきます！",
        romaji: "Ocha o futatsu onegai shimasu. …Itadakimasu!",
        english: "Two green teas, please. …(food arrives) Time to eat!",
      },
      {
        speaker: "You",
        japanese:
          "すみません、おかいけいをおねがいします。ごちそうさまでした。",
        romaji:
          "Sumimasen, okaikei o onegai shimasu. Gochisōsama deshita.",
        english:
          "Excuse me, check please. Thank you for the wonderful meal.",
      },
    ],
    practicePrompts: [
      "Role-play a full restaurant visit: enter, order, eat, and pay — all in Japanese",
      "Describe your favorite restaurant: どんなりょうりがおいしいですか？おすすめはなんですか？",
      "Invite a friend to dinner using ましょう: いっしょに___をたべにいきましょう",
      "Order for a group of four at a Japanese restaurant — use をください and おねがいします",
    ],
    languageInsight: {
      title: "The Hidden Script of Japanese Restaurants",
      content:
        "Japanese restaurants follow an invisible script that every diner knows. When you enter, staff call out いらっしゃいませ (welcome) — you don't need to respond. You state your group size. Before eating, everyone says いただきます — it's not just polite, it's a shared ritual acknowledging the food, the cook, and the ingredients. After eating, ごちそうさまでした thanks the host for the feast. To get a waiter's attention, say すみません clearly — this is expected, not rude. To pay, say おかいけいをおねがいします or gesture a check mark in the air. Tipping is not customary and can even be confusing. One more tip: in many restaurants, you'll receive おしぼり (a hot or cold towel) at the start — use it to wipe your hands. Learning this script lets you navigate any Japanese restaurant with ease.",
    },
    tutorNote:
      "Restaurant vocabulary is incredibly practical for anyone visiting Japan. The key phrase patterns combine #6 (をください) and #29 (てください) with おねがいします. Focus on the full restaurant flow: entering → ordering → eating → paying. Once students can do this smoothly, they've unlocked a real-world superpower. Practice the full dialogue out loud as a role-play.",
    quickReference:
      "ちゅうもん(する) = order | おすすめ = recommendation | メニュー = menu | おかわり = refill | おかいけい = bill | いただきます = before eating | ごちそうさまでした = after eating | おねがいします = please (polite request) | いかがですか = how about? (polite)",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Beginner — Going to a Restaurant",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for the restaurant script: いらっしゃいませ, ちゅうもん, おすすめ, いただきます, ごちそうさまでした. Notice how staff use ultra-polite forms while customers use standard polite.",
    },
  },

  {
    day: 83,
    dayType: "vocab-expansion",
    title: "Travel Vocabulary",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Master 8 essential travel vocabulary words for airports, trains, and navigation",
      "Ask for directions and buy tickets in Japanese",
      "Combine travel vocabulary with Patterns #5, #7, #9, #29, #36, and #42",
      "Navigate Japan's train system using practical Japanese phrases",
    ],
    usesPatterns: [5, 7, 9, 29, 36, 42],
    vocabulary: [
      {
        japanese: "くうこう",
        romaji: "kūkō",
        english: "airport",
        fitsPattern: [5, 7],
        mnemonic:
          "'Koo-koh' — 'cuckoo!' — the cuckoo bird takes flight from the airport",
      },
      {
        japanese: "よやく",
        romaji: "yoyaku",
        english: "reservation / booking",
        fitsPattern: [8, 29],
        mnemonic:
          "'Yoh-yah-koo' — 'yo, yak, ooh!' — you reserved a seat next to a yak on the plane",
      },
      {
        japanese: "きっぷ",
        romaji: "kippu",
        english: "ticket",
        fitsPattern: [6],
        mnemonic:
          "'Keep-poo' — 'keep' your ticket — don't lose it before boarding!",
      },
      {
        japanese: "のりかえ",
        romaji: "norikae",
        english: "transfer (changing trains/buses)",
        fitsPattern: [5, 29],
        mnemonic:
          "'Noh-ree-kah-eh' — 'no re-car, eh?' — nope, switch to a different car!",
      },
      {
        japanese: "りょこう",
        romaji: "ryokō",
        english: "travel / trip",
        fitsPattern: [7, 29],
        mnemonic:
          "'Ryoh-koh' — 'rio, go!' — pack your bags and travel to Rio!",
      },
      {
        japanese: "パスポート",
        romaji: "pasupōto",
        english: "passport",
        fitsPattern: [5],
        mnemonic:
          "'Pah-soo-poh-toh' — sounds just like 'passport' — one of the easiest loanwords!",
      },
      {
        japanese: "にもつ",
        romaji: "nimotsu",
        english: "luggage / baggage",
        fitsPattern: [7],
        mnemonic:
          "'Nee-moht-soo' — 'knee motes' — dust motes on your knee from dragging heavy luggage",
      },
      {
        japanese: "かんこう",
        romaji: "kankō",
        english: "sightseeing / tourism",
        fitsPattern: [7, 9],
        mnemonic:
          "'Kahn-koh' — 'can go!' — we can go sightseeing anywhere!",
      },
    ],
    examples: [
      {
        japanese: "くうこうにいきたいです。タクシーをおねがいします。",
        romaji: "Kūkō ni ikitai desu. Takushī o onegai shimasu.",
        english: "I want to go to the airport. A taxi, please.",
      },
      {
        japanese: "ホテルのよやくをしました。",
        romaji: "Hoteru no yoyaku o shimashita.",
        english: "I made a hotel reservation.",
      },
      {
        japanese: "とうきょうまでのきっぷをにまいください。",
        romaji: "Tōkyō made no kippu o nimai kudasai.",
        english: "Two tickets to Tokyo, please.",
      },
      {
        japanese: "ここでのりかえてください。",
        romaji: "Koko de norikaete kudasai.",
        english: "Please transfer here.",
      },
      {
        japanese: "もしにほんにりょこうしたら、おてらをみたいです。",
        romaji: "Moshi nihon ni ryokō shitara, otera o mitai desu.",
        english: "If I travel to Japan, I want to see temples.",
      },
      {
        japanese: "パスポートはかばんのなかにあります。",
        romaji: "Pasupōto wa kaban no naka ni arimasu.",
        english: "The passport is inside the bag.",
      },
      {
        japanese: "にほんでかんこうすることができます。",
        romaji: "Nihon de kankō suru koto ga dekimasu.",
        english: "You can go sightseeing in Japan.",
      },
      {
        japanese: "にもつがおもすぎます。てつだってください。",
        romaji: "Nimotsu ga omosugimasu. Tetsudatte kudasai.",
        english: "The luggage is too heavy. Please help me.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese: "すみません、とうきょうえきまでどういきますか？",
        romaji: "Sumimasen, Tōkyō-eki made dō ikimasu ka?",
        english: "Excuse me, how do I get to Tokyo Station?",
      },
      {
        speaker: "Station Staff",
        japanese:
          "まずやまのてせんにのってください。しぶやでのりかえです。",
        romaji:
          "Mazu Yamanote-sen ni notte kudasai. Shibuya de norikae desu.",
        english:
          "First, please take the Yamanote Line. Transfer at Shibuya.",
      },
      {
        speaker: "You",
        japanese: "きっぷはどこでかえますか？",
        romaji: "Kippu wa doko de kaemasu ka?",
        english: "Where can I buy a ticket?",
      },
      {
        speaker: "Station Staff",
        japanese:
          "あのきかいでかえます。ICカードもつかえますよ。",
        romaji: "Ano kikai de kaemasu. IC kādo mo tsukaemasu yo.",
        english:
          "You can buy one at that machine. You can also use an IC card.",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。どのくらいかかりますか？",
        romaji: "Arigatō gozaimasu. Dono kurai kakarimasu ka?",
        english: "Thank you. How long does it take?",
      },
      {
        speaker: "Station Staff",
        japanese:
          "さんじゅっぷんぐらいです。きをつけていってらっしゃい。",
        romaji:
          "Sanjuppun gurai desu. Ki o tsukete itterasshai.",
        english: "About thirty minutes. Take care and have a good trip.",
      },
    ],
    practicePrompts: [
      "Describe your dream trip to Japan: where you'd go, what you'd see, how you'd get there",
      "Ask for directions to a famous landmark: ___はどこですか？___までどういきますか？",
      "Make a hotel reservation in Japanese: よやくをおねがいします + dates and details",
      "Describe a past trip using ました forms: ___にいきました。___をみました。___をたべました。",
    ],
    languageInsight: {
      title: "Japan's Train Culture: A Language Classroom on Wheels",
      content:
        "Japan's train system is one of the best language learning environments you'll ever find. Station announcements repeat key vocabulary: つぎは___ (next is ___), のりかえ (transfer), まもなく (shortly), ドアがしまります (doors are closing). Trains are famously punctual — even a one-minute delay triggers a formal apology announcement. The IC card system (Suica, PASMO) means you rarely need きっぷ at ticket machines, but the word is essential for long-distance Shinkansen tickets. When lost, look for the みどりのまどぐち (Green Window — the JR ticket counter) and use your Japanese: ___までどういきますか？ (How do I get to ___?). Each successful navigation is a real-world victory for your Japanese.",
    },
    tutorNote:
      "Travel vocabulary has enormous real-world payoff. Students who can navigate Japan's train system in Japanese gain instant confidence. Focus on the practical flow: getting to the station → asking directions → buying tickets → transferring → arriving. Combine with Patterns #5 (どこ), #7 (にいきます), #29 (てください), and #42 (たら). Role-play the station dialogue multiple times until it flows naturally.",
    quickReference:
      "くうこう = airport | よやく = reservation | きっぷ = ticket | のりかえ = transfer | りょこう = travel | パスポート = passport | にもつ = luggage | かんこう = sightseeing | ___までどういきますか = How do I get to ___? | ___にのってください = Please take [line/train]",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Beginner — Traveling in Japan",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for travel vocabulary: くうこう, でんしゃ, のりかえ, きっぷ. Notice how directions use てください and location markers like まで and から.",
    },
  },

  {
    day: 84,
    dayType: "vocab-expansion",
    title: "Social Vocabulary",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Master 8 essential people and socializing vocabulary words",
      "Introduce yourself, describe relationships, and invite people to events",
      "Understand the せんぱい/こうはい social hierarchy and its influence on language",
      "Combine social vocabulary with Patterns #1, #4, #23, #25, and #47",
    ],
    usesPatterns: [1, 4, 23, 25, 47],
    vocabulary: [
      {
        japanese: "しょうかい",
        romaji: "shōkai",
        english: "introduction",
        fitsPattern: [1, 8],
        mnemonic:
          "'Show-kai' — 'show' yourself at the 'kai' (meeting) — that's an introduction!",
      },
      {
        japanese: "なかよし",
        romaji: "nakayoshi",
        english: "close friends / on good terms",
        fitsPattern: [1, 4],
        mnemonic:
          "'Nah-kah-yoh-shee' — 'knack of Yoshi' — Yoshi has the knack of making close friends",
      },
      {
        japanese: "せんぱい",
        romaji: "senpai",
        english: "senior / mentor / someone ahead of you",
        fitsPattern: [1, 4],
        mnemonic:
          "'Sen-pie' — 'send pie' — send your senpai a pie to show respect!",
      },
      {
        japanese: "こうはい",
        romaji: "kōhai",
        english: "junior / someone behind you",
        fitsPattern: [1, 4],
        mnemonic:
          "'Koh-hai' — 'co-hi!' — your junior co-worker says hi to you",
      },
      {
        japanese: "かんけい",
        romaji: "kankei",
        english: "relationship / connection",
        fitsPattern: [1, 4],
        mnemonic:
          "'Kahn-kay' — 'can K?' — can the letter K connect these relationships?",
      },
      {
        japanese: "あいさつ",
        romaji: "aisatsu",
        english: "greeting",
        fitsPattern: [8, 23],
        mnemonic:
          "'Ai-sah-tsoo' — 'I sat, sue' — I sat down and greeted everyone before the meeting",
      },
      {
        japanese: "さそう",
        romaji: "sasou",
        english: "to invite (u-verb)",
        fitsPattern: [8, 47],
        mnemonic:
          "'Sah-soh' — 'so, so?' — 'so, so you're inviting me? Yes!'",
      },
      {
        japanese: "あつまる",
        romaji: "atsumaru",
        english: "to gather / to assemble (u-verb)",
        fitsPattern: [8, 47],
        mnemonic:
          "'Ah-tsoo-mah-roo' — 'a tsunami, roo!' — everyone gathers when a kangaroo rides a tsunami",
      },
    ],
    examples: [
      {
        japanese: "じこしょうかいをおねがいします。",
        romaji: "Jiko shōkai o onegai shimasu.",
        english: "Please introduce yourself.",
      },
      {
        japanese: "たなかさんとはなかよしです。",
        romaji: "Tanaka-san to wa nakayoshi desu.",
        english: "Tanaka and I are close friends.",
      },
      {
        japanese: "やまださんはわたしのせんぱいです。",
        romaji: "Yamada-san wa watashi no senpai desu.",
        english: "Yamada is my senior.",
      },
      {
        japanese:
          "にほんではせんぱいとこうはいのかんけいがたいせつです。",
        romaji:
          "Nihon de wa senpai to kōhai no kankei ga taisetsu desu.",
        english: "In Japan, the senior-junior relationship is important.",
      },
      {
        japanese: "にほんごであいさつをすることができます。",
        romaji: "Nihongo de aisatsu o suru koto ga dekimasu.",
        english: "I can do greetings in Japanese.",
      },
      {
        japanese: "ともだちをパーティーにさそいましょう。",
        romaji: "Tomodachi o pātī ni sasoimashō.",
        english: "Let's invite friends to the party.",
      },
      {
        japanese: "にちようびにみんなであつまりましょう。",
        romaji: "Nichiyōbi ni minna de atsumarimashō.",
        english: "Let's all gather on Sunday.",
      },
      {
        japanese:
          "がいこくのともだちとにほんごではなしたいです。",
        romaji: "Gaikoku no tomodachi to nihongo de hanashitai desu.",
        english: "I want to speak Japanese with foreign friends.",
      },
    ],
    dialogue: [
      {
        speaker: "Yamada",
        japanese:
          "はじめまして。やまだです。よろしくおねがいします。",
        romaji: "Hajimemashite. Yamada desu. Yoroshiku onegai shimasu.",
        english: "Nice to meet you. I'm Yamada. Pleased to meet you.",
      },
      {
        speaker: "You",
        japanese:
          "はじめまして。こちらこそよろしくおねがいします。にほんごをべんきょうしています。",
        romaji:
          "Hajimemashite. Kochira koso yoroshiku onegai shimasu. Nihongo o benkyō shite imasu.",
        english:
          "Nice to meet you. The pleasure is mine. I'm studying Japanese.",
      },
      {
        speaker: "Yamada",
        japanese:
          "にほんごがおじょうずですね。どこでべんきょうしましたか？",
        romaji:
          "Nihongo ga ojōzu desu ne. Doko de benkyō shimashita ka?",
        english: "Your Japanese is good! Where did you study?",
      },
      {
        speaker: "You",
        japanese:
          "ありがとうございます。オンラインでべんきょうしています。にほんのぶんかがすきだから、にほんごをはじめました。",
        romaji:
          "Arigatō gozaimasu. Onrain de benkyō shite imasu. Nihon no bunka ga suki da kara, nihongo o hajimemashita.",
        english:
          "Thank you. I'm studying online. Because I like Japanese culture, I started Japanese.",
      },
      {
        speaker: "Yamada",
        japanese: "なるほど。にほんにきたことがありますか？",
        romaji: "Naruhodo. Nihon ni kita koto ga arimasu ka?",
        english: "I see. Have you ever been to Japan?",
      },
      {
        speaker: "You",
        japanese:
          "まだないですが、いつかいきたいです。ともだちがとうきょうにいるから、さそわれています。",
        romaji:
          "Mada nai desu ga, itsuka ikitai desu. Tomodachi ga Tōkyō ni iru kara, sasowarete imasu.",
        english:
          "Not yet, but I want to go someday. My friend is in Tokyo, so I've been invited.",
      },
      {
        speaker: "Yamada",
        japanese: "いいですね！こんどいっしょにあそびましょう。",
        romaji: "Ii desu ne! Kondo issho ni asobimashō.",
        english: "That's great! Let's hang out sometime.",
      },
    ],
    practicePrompts: [
      "Write a じこしょうかい (self-introduction) for a party: name, hobby, why you study Japanese",
      "Explain the せんぱい/こうはい relationship to someone who doesn't know Japanese culture",
      "Invite three friends to an event using さそう and ましょう",
      "Describe your closest friendship: how you met and what you do together",
    ],
    languageInsight: {
      title: "せんぱい/こうはい: Japan's Social Framework",
      content:
        "The せんぱい (senior) / こうはい (junior) system structures nearly every Japanese organization — schools, companies, sports teams, even hobby clubs. It's not about age alone, but about who entered the group first. Your senpai mentors you, and in return, you show them respect. This hierarchy is reflected in language: you use polite forms with senpai and can be more casual with kōhai. Understanding this system unlocks why Japanese speakers switch registers so fluidly — they're constantly navigating a web of social relationships. The famous phrase 空気を読む (kūki o yomu — read the air) connects here: knowing when to be formal and when to relax is a core social skill in Japan.",
    },
    tutorNote:
      "Social vocabulary opens up the relational dimension of Japanese. Emphasize that Japanese is a relationship-aware language: every interaction carries information about closeness, respect, and intimacy. Practice じこしょうかい (self-introductions) thoroughly — it's one of the most practical skills for real-life use. Have students role-play meeting someone new and transitioning from formal to friendly.",
    quickReference:
      "しょうかい = introduction | なかよし = close friends | せんぱい = senior | こうはい = junior | かんけい = relationship | あいさつ = greeting | さそう = to invite | あつまる = to gather | じこしょうかい = self-introduction | はじめまして = nice to meet you",
    listeningRec: {
      source: "Terrace House",
      title: "New member introductions",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch how new housemates introduce themselves. Notice the formal はじめまして ritual and how language gradually shifts from polite to casual over the first few episodes as relationships develop.",
    },
  },

  {
    day: 85,
    dayType: "pattern-combo",
    title: "Three Conversations",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Hold three complete conversations at different difficulty levels: simple, moderate, and advanced",
      "Chain multiple patterns together naturally in flowing dialogue",
      "Practice あいづち (back-channeling) to sound natural as a listener",
      "Build confidence in sustained Japanese conversation using Patterns #1, #4, #8, #13, #23, #29, #32, #38, #40, and #47",
    ],
    usesPatterns: [1, 4, 8, 13, 23, 29, 32, 38, 40, 47],
    vocabulary: [
      {
        japanese: "かいわ",
        romaji: "kaiwa",
        english: "conversation",
        mnemonic:
          "'Kai-wah' — 'kai, wow!' — wow, what a great conversation!",
      },
      {
        japanese: "れんらく",
        romaji: "renraku",
        english: "contact / to get in touch (する verb)",
        mnemonic:
          "'Ren-rah-koo' — 'wren, rack, ooh' — contact the wren sitting on the rack",
      },
      {
        japanese: "やくそく",
        romaji: "yakusoku",
        english: "promise / appointment",
        mnemonic:
          "'Yah-koo-soh-koo' — 'yak, sock, ooh' — I promise to put socks on the yak",
      },
      {
        japanese: "まちあわせ",
        romaji: "machiawase",
        english: "meeting place / rendezvous",
        mnemonic:
          "'Mah-chee-ah-wah-seh' — 'much await, say' — we await each other at the meeting place",
      },
      {
        japanese: "ばしょ",
        romaji: "basho",
        english: "place / location",
        mnemonic:
          "'Bah-shoh' — 'bash, oh!' — the place where we had a bash!",
      },
    ],
    examples: [
      {
        japanese:
          "にほんごでかいわができるようになりたいです。",
        romaji: "Nihongo de kaiwa ga dekiru yō ni naritai desu.",
        english: "I want to become able to have conversations in Japanese.",
      },
      {
        japanese: "あとでれんらくします。",
        romaji: "Ato de renraku shimasu.",
        english: "I'll contact you later.",
      },
      {
        japanese: "あしたのやくそくをわすれないでください。",
        romaji: "Ashita no yakusoku o wasurenaide kudasai.",
        english: "Please don't forget tomorrow's appointment.",
      },
      {
        japanese: "まちあわせはえきのまえです。",
        romaji: "Machiawase wa eki no mae desu.",
        english: "The meeting place is in front of the station.",
      },
      {
        japanese: "どこがいちばんすきなばしょですか？",
        romaji: "Doko ga ichiban suki na basho desu ka?",
        english: "What's your favorite place?",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4, 8, 23],
        japanese:
          "はじめまして。わたしはアメリカからきました。コーヒーがすきです。にほんのコーヒーはおいしいですね。まいにちあさカフェでコーヒーをのみます。",
        romaji:
          "Hajimemashite. Watashi wa Amerika kara kimashita. Kōhī ga suki desu. Nihon no kōhī wa oishii desu ne. Mainichi asa kafe de kōhī o nomimasu.",
        english:
          "Nice to meet you. I came from America. I like coffee. Japanese coffee is delicious, isn't it? I drink coffee at a café every morning. (Simple)",
      },
      {
        patternsUsed: [4, 23, 29, 38, 40, 47],
        japanese:
          "こんどのしゅうまつ、いっしょにカラオケにいきましょう。にほんのうたがすきだから、れんしゅうしたいとおもいます。よかったられんらくしてください。",
        romaji:
          "Kondo no shūmatsu, issho ni karaoke ni ikimashō. Nihon no uta ga suki da kara, renshū shitai to omoimasu. Yokattara renraku shite kudasai.",
        english:
          "This weekend, let's go to karaoke together. Because I like Japanese songs, I think I want to practice. If you'd like, please contact me. (Moderate)",
      },
      {
        patternsUsed: [1, 13, 29, 32, 38, 40, 47],
        japanese:
          "わたしのゆめはにほんではたらくことです。いまオンラインでべんきょうしていますが、もっとれんしゅうしたいとおもいます。にほんごがいちばんたいせつだとおもいますから、まいにちがんばっています。いっしょにがんばりましょう。",
        romaji:
          "Watashi no yume wa nihon de hataraku koto desu. Ima onrain de benkyō shite imasu ga, motto renshū shitai to omoimasu. Nihongo ga ichiban taisetsu da to omoimasu kara, mainichi ganbatte imasu. Issho ni ganbarimashō.",
        english:
          "My dream is to work in Japan. I'm studying online now, but I think I want to practice more. Because I think Japanese is the most important thing, I work hard every day. Let's do our best together. (Advanced)",
      },
    ],
    dialogue: [
      {
        speaker: "Miki",
        japanese: "こんどのしゅうまつ、ひまですか？",
        romaji: "Kondo no shūmatsu, hima desu ka?",
        english: "Are you free this weekend?",
      },
      {
        speaker: "You",
        japanese: "はい、ひまです。なにかしましょうか？",
        romaji: "Hai, hima desu. Nanika shimashō ka?",
        english: "Yes, I'm free. Shall we do something?",
      },
      {
        speaker: "Miki",
        japanese:
          "カラオケにいきたいです。にほんのうたがすきだから。",
        romaji:
          "Karaoke ni ikitai desu. Nihon no uta ga suki da kara.",
        english:
          "I want to go to karaoke. Because I like Japanese songs.",
      },
      {
        speaker: "You",
        japanese:
          "いいですね！わたしはうたうのがにがてですが、たのしいとおもいます。",
        romaji:
          "Ii desu ne! Watashi wa utau no ga nigate desu ga, tanoshii to omoimasu.",
        english:
          "Nice! I'm not good at singing, but I think it'll be fun.",
      },
      {
        speaker: "Miki",
        japanese:
          "にほんごのうたをいっしょにれんしゅうしましょう。",
        romaji: "Nihongo no uta o issho ni renshū shimashō.",
        english: "Let's practice Japanese songs together.",
      },
      {
        speaker: "You",
        japanese:
          "じゃ、どようびのごごにしましょう。まちあわせはどこがいいですか？",
        romaji:
          "Ja, doyōbi no gogo ni shimashō. Machiawase wa doko ga ii desu ka?",
        english:
          "Then let's make it Saturday afternoon. Where should we meet?",
      },
      {
        speaker: "Miki",
        japanese:
          "えきのまえがいいとおもいます。じゃ、どようびに！",
        romaji: "Eki no mae ga ii to omoimasu. Ja, doyōbi ni!",
        english: "I think in front of the station is good. See you Saturday!",
      },
    ],
    practicePrompts: [
      "Write a simple conversation: ordering at a café using patterns #1, #4, #6",
      "Write a moderate conversation: planning a trip using patterns #25, #38, #40, #47",
      "Write an advanced conversation: discussing your future using patterns #32, #36, #38, #40",
      "Record yourself having one of these conversations out loud — play both roles",
      "Chain five different patterns together in a single paragraph about your day",
    ],
    languageInsight: {
      title: "あいづち: The Art of Active Listening",
      content:
        "In English, nodding silently while someone speaks is normal. In Japanese, silence makes the speaker uncomfortable. Japanese listeners constantly give verbal feedback called あいづち (back-channeling): うん (yeah), ええ (yes), そうですか (is that so?), なるほど (I see), へえ (really?). These aren't interruptions — they're essential signals that say 'I'm listening, please continue.' Without あいづち, a Japanese speaker may stop talking, thinking you're bored or confused. Practice adding these small responses when listening to Japanese. It's one of the fastest ways to sound natural in conversation.",
    },
    tutorNote:
      "Today ties together patterns from all phases into real conversations at three difficulty levels. The key insight is that real conversation isn't about using every pattern — it's about picking the right ones for the moment. Students should try all three levels and identify where they feel comfortable vs. where they stretch. Have them record themselves and listen back for fluency.",
    quickReference:
      "Simple: greeting + likes + description | Moderate: invite + reason + suggestion + agreement | Advanced: dream + current state + opinion + reason + encouragement | あいづち: うん, ええ, そうですか, なるほど, へえ | Flow: topic → opinion → reason → suggestion",
    listeningRec: {
      source: "Terrace House",
      title: "Watch a full episode without subtitles",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Try to follow one complete conversation from start to finish. Don't worry about every word — focus on patterns you know: とおもいます, から, けど, ましょう. Count how many あいづち you hear in a single conversation.",
    },
  },

  {
    day: 86,
    dayType: "vocab-expansion",
    title: "Common Mistakes",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Learn 8 和製英語 (wasei-eigo) — English-origin words that mean something different in Japanese",
      "Avoid common false-friend traps that trip up English speakers",
      "Understand that katakana words are Japanese words, not English words in disguise",
      "Use false friends correctly in context with Patterns #4, #21, and #27",
    ],
    usesPatterns: [4, 21, 27],
    vocabulary: [
      {
        japanese: "マンション",
        romaji: "manshon",
        english: "apartment building (NOT mansion)",
        fitsPattern: [4, 21],
        mnemonic:
          "'Man-shohn' — sounds like 'mansion' but it's just a regular apartment building!",
      },
      {
        japanese: "スマート",
        romaji: "sumāto",
        english: "slim / stylish (NOT smart/intelligent)",
        fitsPattern: [21],
        mnemonic:
          "'Soo-mah-toh' — looks like 'smart' but means looking slim and stylish",
      },
      {
        japanese: "テンション",
        romaji: "tenshon",
        english: "energy level / excitement (NOT tension/stress)",
        fitsPattern: [21],
        mnemonic:
          "'Ten-shohn' — sounds like 'tension' but means being hyped and energetic",
      },
      {
        japanese: "バイキング",
        romaji: "baikingu",
        english: "buffet / all-you-can-eat (NOT viking warrior)",
        fitsPattern: [4],
        mnemonic:
          "'Bai-kin-goo' — no horned helmets here, just a buffet spread!",
      },
      {
        japanese: "カンニング",
        romaji: "kanningu",
        english: "cheating on a test (NOT cunning/cleverness)",
        fitsPattern: [4, 27],
        mnemonic:
          "'Kan-nin-goo' — sounds like 'cunning' but means getting caught cheating on an exam",
      },
      {
        japanese: "ナイーブ",
        romaji: "naību",
        english: "sensitive / delicate (NOT naive/gullible)",
        fitsPattern: [21],
        mnemonic:
          "'Nai-boo' — sounds like 'naive' but means emotionally sensitive and delicate",
      },
      {
        japanese: "コンセント",
        romaji: "konsento",
        english: "electrical outlet / power socket (NOT consent)",
        fitsPattern: [4, 5],
        mnemonic:
          "'Kon-sen-toh' — sounds like 'consent' but it's where you plug in your charger",
      },
      {
        japanese: "サービス",
        romaji: "sābisu",
        english: "freebie / complimentary item (NOT just service)",
        fitsPattern: [4],
        mnemonic:
          "'Sah-bee-soo' — 'service' at a Japanese restaurant often means 'on the house'",
      },
    ],
    examples: [
      {
        japanese:
          "あのマンションにすんでいます。アパートよりひろいです。",
        romaji:
          "Ano manshon ni sunde imasu. Apāto yori hiroi desu.",
        english:
          "I live in that apartment building. It's more spacious than a basic apartment.",
      },
      {
        japanese: "あのひとはスマートですね。(= slim/stylish)",
        romaji: "Ano hito wa sumāto desu ne.",
        english: "That person is slim and stylish, isn't he? (NOT intelligent)",
      },
      {
        japanese: "きょうはテンションがたかいですね！",
        romaji: "Kyō wa tenshon ga takai desu ne!",
        english: "You're really energetic today! (NOT stressed)",
      },
      {
        japanese: "ホテルのあさごはんはバイキングです。",
        romaji: "Hoteru no asagohan wa baikingu desu.",
        english: "The hotel breakfast is a buffet.",
      },
      {
        japanese: "テストでカンニングをしないでください。",
        romaji: "Tesuto de kanningu o shinaide kudasai.",
        english: "Please don't cheat on the test.",
      },
      {
        japanese:
          "かのじょはナイーブなひとだから、きをつけてください。",
        romaji:
          "Kanojo wa naību na hito da kara, ki o tsukete kudasai.",
        english:
          "She's a sensitive person, so please be careful. (NOT naive)",
      },
      {
        japanese:
          "コンセントはどこですか？スマホをじゅうでんしたいです。",
        romaji:
          "Konsento wa doko desu ka? Sumaho o jūden shitai desu.",
        english: "Where's the outlet? I want to charge my phone.",
      },
      {
        japanese:
          "このデザートはサービスです。おきゃくさまへのプレゼントです。",
        romaji:
          "Kono dezāto wa sābisu desu. Okyaku-sama e no purezento desu.",
        english:
          "This dessert is complimentary. It's a gift for our customers.",
      },
    ],
    dialogue: [
      {
        speaker: "Front Desk",
        japanese:
          "いらっしゃいませ。マンションタイプとシングルルームがあります。",
        romaji:
          "Irasshaimase. Manshon taipu to shinguru rūmu ga arimasu.",
        english:
          "Welcome. We have apartment-type rooms and single rooms.",
      },
      {
        speaker: "You",
        japanese: "マンションタイプってなんですか？",
        romaji: "Manshon taipu tte nan desu ka?",
        english: "What is the apartment type?",
      },
      {
        speaker: "Front Desk",
        japanese: "キッチンつきのひろいおへやです。",
        romaji: "Kitchin tsuki no hiroi oheya desu.",
        english: "It's a spacious room with a kitchen.",
      },
      {
        speaker: "You",
        japanese:
          "なるほど！じゃ、マンションタイプでおねがいします。あ、コンセントはありますか？",
        romaji:
          "Naruhodo! Ja, manshon taipu de onegai shimasu. A, konsento wa arimasu ka?",
        english:
          "I see! The apartment type, please. Oh, are there electrical outlets?",
      },
      {
        speaker: "Front Desk",
        japanese:
          "はい、おへやにいくつかあります。あと、あさごはんはバイキングです。",
        romaji:
          "Hai, oheya ni ikutsuka arimasu. Ato, asagohan wa baikingu desu.",
        english:
          "Yes, there are several in the room. Also, breakfast is a buffet.",
      },
      {
        speaker: "You",
        japanese: "バイキング！いいですね。ありがとうございます。",
        romaji: "Baikingu! Ii desu ne. Arigatō gozaimasu.",
        english: "A buffet! How nice. Thank you!",
      },
    ],
    practicePrompts: [
      "Quiz yourself: what do these really mean in Japanese? マンション, スマート, テンション, バイキング",
      "Write sentences using three false friends correctly in their Japanese meaning",
      "Explain to an English-speaking friend why カンニング doesn't mean 'cunning'",
      "Research three more 和製英語 online and write example sentences for each",
    ],
    languageInsight: {
      title: "和製英語 (Wasei-eigo): When English Gets a Japanese Makeover",
      content:
        "Japanese has borrowed thousands of English words, but many have drifted far from their original meanings. These 和製英語 (wasei-eigo — Japanese-made English) can trip up English speakers badly. Imagine telling your host 'I live in a manshon' thinking you sound wealthy — they just picture a normal apartment. Or saying someone has 'high tenshon' meaning stressed — your Japanese friend thinks you mean energetic. Some wasei-eigo are combinations English never made: パソコン (pasokon = personal computer), コスパ (kosupa = cost performance = value for money), スキンシップ (sukinshippu = skinship = physical affection). The golden rule: treat every katakana word as a new Japanese word. Don't assume it means what it looks like.",
    },
    tutorNote:
      "False friends are one of the most memorable lessons. Students love the surprise when they realize マンション ≠ mansion. Use this lesson to reinforce that katakana words are Japanese words — they just look English. Have students quiz each other on the real meanings. Connect to Pattern #27 (casual forms) for checking understanding: マンションって、アパートのこと？ (Manshon means apartment, right?)",
    quickReference:
      "マンション = apartment (NOT mansion) | スマート = slim (NOT smart) | テンション = energy (NOT tension) | バイキング = buffet (NOT viking) | カンニング = cheating (NOT cunning) | ナイーブ = sensitive (NOT naive) | コンセント = outlet (NOT consent) | サービス = freebie (NOT just service)",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — Japanese-English False Friends",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Listen for katakana words and check whether they mean what you expect. Can you catch wasei-eigo in context? Pay attention to how speakers use them naturally — the meaning becomes clear from context.",
    },
  },

  {
    day: 87,
    dayType: "pattern-combo",
    title: "50-Pattern Speed Drill",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Produce at least one sentence for each of the 50 patterns from memory",
      "Identify which patterns are 'automatic' (acquired) vs. 'slow' (still learning)",
      "Build speed and fluency by rapid-firing through all pattern groups",
      "Prove to yourself how much you've learned in 87 days",
    ],
    usesPatterns: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ],
    vocabulary: [
      {
        japanese: "パターン",
        romaji: "patān",
        english: "pattern",
        mnemonic:
          "'Pah-tahn' — sounds just like 'pattern' — your 50 building blocks!",
      },
      {
        japanese: "そくど",
        romaji: "sokudo",
        english: "speed",
        mnemonic:
          "'Soh-koo-doh' — 'so could oh!' — so you could go at speed!",
      },
      {
        japanese: "ちからだめし",
        romaji: "chikaradameshi",
        english: "test of strength / putting skills to the test",
        mnemonic:
          "'Chee-kah-rah-dah-meh-shee' — 'cheetah, red, a mesh' — a cheetah tests its speed through a red mesh",
      },
      {
        japanese: "ふくしゅう",
        romaji: "fukushū",
        english: "review / revision",
        mnemonic:
          "'Foo-koo-shoo' — 'fugu shoe' — review the fugu recipe before you put on your cooking shoes",
      },
      {
        japanese: "じどうてき",
        romaji: "jidōteki",
        english: "automatic / automatically",
        mnemonic:
          "'Jee-doh-teh-kee' — 'G.D. techie' — the techie makes everything automatic",
      },
    ],
    examples: [
      {
        japanese:
          "わたしはにほんごのがくせいです。にほんごはたのしいです。(#1, #4)",
        romaji:
          "Watashi wa nihongo no gakusei desu. Nihongo wa tanoshii desu.",
        english: "I am a Japanese language student. Japanese is fun.",
      },
      {
        japanese:
          "おちゃをください。カフェはえきのちかくにあります。(#6, #17)",
        romaji: "Ocha o kudasai. Kafe wa eki no chikaku ni arimasu.",
        english: "Green tea, please. The café is near the station.",
      },
      {
        japanese:
          "きのうにほんごをべんきょうしました。きょうもべんきょうします。(#13, #8)",
        romaji:
          "Kinō nihongo o benkyō shimashita. Kyō mo benkyō shimasu.",
        english: "I studied Japanese yesterday. I'll study today too.",
      },
      {
        japanese:
          "にほんごがすきです。もっとべんきょうしたいです。(#23, #25)",
        romaji: "Nihongo ga suki desu. Motto benkyō shitai desu.",
        english: "I like Japanese. I want to study more.",
      },
      {
        japanese:
          "ゆっくりはなしてください。いまべんきょうしています。(#29, #32)",
        romaji:
          "Yukkuri hanashite kudasai. Ima benkyō shite imasu.",
        english: "Please speak slowly. I'm studying right now.",
      },
      {
        japanese:
          "にほんごはむずかしいけどたのしいとおもいます。まいにちれんしゅうしているからです。(#38, #41, #40)",
        romaji:
          "Nihongo wa muzukashii kedo tanoshii to omoimasu. Mainichi renshū shite iru kara desu.",
        english:
          "I think Japanese is difficult but fun. Because I practice every day.",
      },
      {
        japanese:
          "もしじかんがあったら、もっとれんしゅうしたほうがいいです。(#42, #48)",
        romaji:
          "Moshi jikan ga attara, motto renshū shita hō ga ii desu.",
        english: "If you have time, you should practice more.",
      },
      {
        japanese:
          "いっしょにべんきょうしましょう。→ いっしょにべんきょうしよう。(#47, #50)",
        romaji:
          "Issho ni benkyō shimashō. → Issho ni benkyō shiyō.",
        english:
          "Let's study together. (polite → casual)",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4, 5, 6, 7, 9],
        japanese:
          "わたしはがくせいです。にほんごはおもしろいです。トイレはどこですか？みずをください。がっこうにいきます。カフェでべんきょうします。",
        romaji:
          "Watashi wa gakusei desu. Nihongo wa omoshiroi desu. Toire wa doko desu ka? Mizu o kudasai. Gakkō ni ikimasu. Kafe de benkyō shimasu.",
        english:
          "I am a student. Japanese is interesting. Where is the restroom? Water, please. I go to school. I study at a café. (Patterns #1–#9 sprint)",
      },
      {
        patternsUsed: [13, 14, 16, 21, 23, 25],
        japanese:
          "きのうレストランでにほんりょうりをたべました。たかくなかったです。やすくておいしかったです。にほんのたべものがすきです。もっとたべたいです。",
        romaji:
          "Kinō resutoran de nihon ryōri o tabemashita. Takaku nakatta desu. Yasukute oishikatta desu. Nihon no tabemono ga suki desu. Motto tabetai desu.",
        english:
          "Yesterday I ate Japanese food at a restaurant. It wasn't expensive. It was cheap and delicious. I like Japanese food. I want to eat more. (Patterns #13–#25 sprint)",
      },
      {
        patternsUsed: [29, 32, 33, 36, 38, 40, 42],
        japanese:
          "ゆっくりはなしてください。いまにほんごをべんきょうしています。まいにちきいて、よんで、かいています。にほんごではなすことができます。もっとじょうずになるとおもいます。がんばっているからです。もしにほんにいったら、たくさんはなしたいです。",
        romaji:
          "Yukkuri hanashite kudasai. Ima nihongo o benkyō shite imasu. Mainichi kiite, yonde, kaite imasu. Nihongo de hanasu koto ga dekimasu. Motto jōzu ni naru to omoimasu. Ganbatte iru kara desu. Moshi nihon ni ittara, takusan hanashitai desu.",
        english:
          "Please speak slowly. I'm studying Japanese now. Every day I listen, read, and write. I can speak Japanese. I think I'll get better. Because I'm working hard. If I go to Japan, I want to speak a lot. (Patterns #29–#42 sprint)",
      },
      {
        patternsUsed: [43, 44, 45, 46, 47, 48, 49, 50],
        japanese:
          "こどものとき、アニメをみました。ねるまえにすこしふくしゅうします。べんきょうしすぎないでください。このほんはよみやすいです。いっしょにがんばりましょう。もっとれんしゅうしたほうがいいです。えーと、やっぱりにほんごってたのしいよね。",
        romaji:
          "Kodomo no toki, anime o mimashita. Neru mae ni sukoshi fukushū shimasu. Benkyō shisugina de kudasai. Kono hon wa yomiyasui desu. Issho ni ganbarimashō. Motto renshū shita hō ga ii desu. Ēto, yappari nihongo tte tanoshii yo ne.",
        english:
          "When I was a child, I watched anime. I review a little before sleeping. Please don't study too much. This book is easy to read. Let's do our best. You should practice more. Um, Japanese really is fun, right? (Patterns #43–#50 grand finale — last sentence in casual)",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese: "はい、パターンいち！___です。",
        romaji: "Hai, patān ichi! ___ desu.",
        english: "OK, Pattern 1! ___ desu.",
      },
      {
        speaker: "You",
        japanese: "わたしはがくせいです。",
        romaji: "Watashi wa gakusei desu.",
        english: "I am a student.",
      },
      {
        speaker: "Sensei",
        japanese: "パターンにじゅうさん！___がすきです。",
        romaji: "Patān nijūsan! ___ ga suki desu.",
        english: "Pattern 23! ___ ga suki desu.",
      },
      {
        speaker: "You",
        japanese: "にほんごがすきです。",
        romaji: "Nihongo ga suki desu.",
        english: "I like Japanese.",
      },
      {
        speaker: "Sensei",
        japanese: "パターンさんじゅうはち！___とおもいます。",
        romaji: "Patān sanjūhachi! ___ to omoimasu.",
        english: "Pattern 38! ___ to omoimasu.",
      },
      {
        speaker: "You",
        japanese: "にほんごはたのしいとおもいます。",
        romaji: "Nihongo wa tanoshii to omoimasu.",
        english: "I think Japanese is fun.",
      },
      {
        speaker: "Sensei",
        japanese:
          "パターンごじゅう！いまのをカジュアルでいってください。",
        romaji: "Patān gojū! Ima no o kajuaru de itte kudasai.",
        english: "Pattern 50! Say that one casually.",
      },
      {
        speaker: "You",
        japanese: "にほんごってたのしいよね！",
        romaji: "Nihongo tte tanoshii yo ne!",
        english: "Japanese is fun, right!",
      },
      {
        speaker: "Sensei",
        japanese:
          "すばらしい！ごじゅうのパターン、ぜんぶつかえますね！",
        romaji: "Subarashii! Gojū no patān, zenbu tsukaemasu ne!",
        english: "Wonderful! You can use all 50 patterns!",
      },
    ],
    practicePrompts: [
      "Time yourself: say one example sentence for each of the 50 patterns as fast as you can — what's your time?",
      "Pick five patterns at random and chain them into a single paragraph",
      "Create your own 10-question speed drill and quiz a study partner",
      "Mark each pattern as 'automatic' or 'needs work' — focus practice on the slow ones",
    ],
    languageInsight: {
      title: "Pattern Recognition: Your Brain's Secret Weapon",
      content:
        "When you started 87 days ago, each pattern was a conscious effort: think of the rule, slot in the word, check the particle. Now, some patterns fire automatically. That's not memorization — it's acquisition. Your brain has built neural pathways for these structures. When you hear ___とおもいます, you don't mentally parse 'quotation particle + think verb' — you just understand 'someone thinks something.' This automatic recognition is exactly how native speakers process language. The speed drill isn't just practice — it's proof that your brain is rewiring itself for Japanese. The patterns you produce fastest are the most deeply acquired. The slow ones need more reps. Either way, you now have 50 tools that didn't exist in your brain three months ago.",
    },
    tutorNote:
      "The speed drill builds confidence and surfaces gaps. Don't aim for perfection — aim for fluency (smooth, continuous production). Patterns that come slowly need more practice. Have students track which patterns are 'automatic' vs. 'need to think about it.' The automatic ones are acquired; the slow ones still need conscious effort. This self-awareness is itself a valuable skill.",
    quickReference:
      "Phase 1 (#1–#6): です, じゃない, ですか, は___です, どこ, をください | Phase 2 (#7–#11): にいきます, を___ます, で___ます, なん, だれ | Phase 3 (#13–#19): ました, ません, ませんでした, time+place+verb, があります, もっています, と___を | Phase 4 (#21–#28): い-adj, な-adj, すき, ほしい, たい, より___ほう, casual forms, とおもう | Phase 5 (#29–#37): てください, てもいい, てはいけない, ている, て-chaining, てから, できる, なくてもいい | Phase 6 (#38–#49): とおもう(clauses), といった, から, けど, たら, とき, まえに/あとで, すぎる, やすい/にくい, ましょう, ほうがいい, fillers | Phase 7 (#50): Register switching",
    listeningRec: {
      source: "Terrace House",
      title: "Pattern hunt — tally all 50",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Watch an episode and tally every pattern you recognize. Keep a notepad handy. How many of the 50 patterns can you hear? Most episodes contain 20–30 of them naturally. You'll surprise yourself.",
    },
  },

  {
    day: 88,
    dayType: "pattern-combo",
    title: "Mega Pattern Combos",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Chain 3–4 patterns together into single, flowing Japanese paragraphs",
      "Build complex arguments: opinion + reason + condition + advice",
      "Use Patterns #16, #33, #38, #40, #42, #47, and #48 in mega combinations",
      "Think in connected ideas rather than isolated sentences",
    ],
    usesPatterns: [16, 33, 38, 40, 42, 47, 48],
    vocabulary: [
      {
        japanese: "けいかく",
        romaji: "keikaku",
        english: "plan",
        fitsPattern: [38, 42],
        mnemonic:
          "'Kay-kah-koo' — 'cake, aku!' — plan ahead to bake a cake!",
      },
      {
        japanese: "じっさい",
        romaji: "jissai",
        english: "actually / in reality",
        fitsPattern: [38, 40],
        mnemonic:
          "'Jis-sai' — 'just sigh' — just sigh… actually, the reality is different",
      },
      {
        japanese: "さいきん",
        romaji: "saikin",
        english: "recently / lately",
        fitsPattern: [38, 40],
        mnemonic:
          "'Sai-keen' — 'sigh, keen' — I sigh, keenly aware of what I've done lately",
      },
      {
        japanese: "けっきょく",
        romaji: "kekkyoku",
        english: "in the end / after all",
        fitsPattern: [38, 40],
        mnemonic:
          "'Kek-kyoh-koo' — 'cake yoke, ooh!' — in the end, the cake was a yoke to bake",
      },
      {
        japanese: "せいちょう",
        romaji: "seichō",
        english: "growth / development",
        fitsPattern: [38],
        mnemonic:
          "'Say-choh' — 'say, cho!' — say 'cho-ice' — growth is a choice",
      },
      {
        japanese: "むり",
        romaji: "muri",
        english: "impossible / unreasonable (な-adjective)",
        fitsPattern: [38, 48],
        mnemonic:
          "'Moo-ree' — 'more-ee, no!' — 'no more-ee, it's impossible!'",
      },
    ],
    examples: [
      {
        japanese:
          "まいにちあさろくじにうちでにほんごをべんきょうしています。(#16, #32)",
        romaji:
          "Mainichi asa rokuji ni uchi de nihongo o benkyō shite imasu.",
        english:
          "Every day at six in the morning, I study Japanese at home.",
      },
      {
        japanese:
          "あさおきて、シャワーをあびて、あさごはんをたべます。(#33)",
        romaji: "Asa okite, shawā o abite, asagohan o tabemasu.",
        english: "I wake up, take a shower, and eat breakfast.",
      },
      {
        japanese:
          "さいきんにほんごがすこしわかるようになったとおもいます。まいにちれんしゅうしているからです。(#38, #40)",
        romaji:
          "Saikin nihongo ga sukoshi wakaru yō ni natta to omoimasu. Mainichi renshū shite iru kara desu.",
        english:
          "I think I've recently come to understand Japanese a little. Because I practice every day.",
      },
      {
        japanese:
          "もしにほんにいったら、にほんごだけではなしたほうがいいとおもいます。(#42, #48, #38)",
        romaji:
          "Moshi nihon ni ittara, nihongo dake de hanashita hō ga ii to omoimasu.",
        english:
          "If I go to Japan, I think I should speak only in Japanese.",
      },
      {
        japanese:
          "きょうとでおてらをみて、ラーメンをたべて、おみやげをかいましょう。(#33, #47)",
        romaji:
          "Kyōto de otera o mite, rāmen o tabete, omiyage o kaimashō.",
        english:
          "In Kyoto, let's see temples, eat ramen, and buy souvenirs.",
      },
      {
        japanese:
          "けっきょくあきらめないことがいちばんたいせつだとおもいます。むりだとおもったら、やすんだほうがいいです。(#38, #42, #48)",
        romaji:
          "Kekkyoku akiramenai koto ga ichiban taisetsu da to omoimasu. Muri da to omottara, yasunda hō ga ii desu.",
        english:
          "In the end, I think not giving up is most important. If you think it's impossible, you should take a rest.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [16, 33, 38],
        japanese:
          "きのうのよるしちじにレストランでともだちとごはんをたべました。いろいろなりょうりをたべて、おちゃをのんで、たくさんはなしました。とてもたのしかったとおもいます。",
        romaji:
          "Kinō no yoru shichiji ni resutoran de tomodachi to gohan o tabemashita. Iroiro na ryōri o tabete, ocha o nonde, takusan hanashimashita. Totemo tanoshikatta to omoimasu.",
        english:
          "Yesterday at seven in the evening, I ate with friends at a restaurant. We ate various dishes, drank tea, and talked a lot. I think it was really fun.",
      },
      {
        patternsUsed: [38, 40, 42, 48],
        japanese:
          "にほんごのべんきょうをつづけたほうがいいとおもいます。まいにちすこしずつれんしゅうしているから、だんだんじょうずになりました。もしじかんがなかったら、ごふんだけでもべんきょうしたほうがいいです。つづけることがいちばんたいせつだとおもいます。",
        romaji:
          "Nihongo no benkyō o tsuzuketa hō ga ii to omoimasu. Mainichi sukoshi zutsu renshū shite iru kara, dandan jōzu ni narimashita. Moshi jikan ga nakattara, gofun dake demo benkyō shita hō ga ii desu. Tsuzukeru koto ga ichiban taisetsu da to omoimasu.",
        english:
          "I think you should continue studying Japanese. Because you practice a little every day, you've gradually improved. Even if you don't have time, you should study for just five minutes. I think continuing is the most important thing.",
      },
      {
        patternsUsed: [33, 42, 47],
        japanese:
          "もしにほんにりょこうしたら、あさはやくおきて、でんしゃにのって、かんこうちにいきましょう。にほんのでんしゃはべんりだから、どこにでもいくことができます。",
        romaji:
          "Moshi nihon ni ryokō shitara, asa hayaku okite, densha ni notte, kankōchi ni ikimashō. Nihon no densha wa benri da kara, doko ni demo iku koto ga dekimasu.",
        english:
          "If we travel to Japan, let's wake up early, take a train, and go to tourist spots. Because Japanese trains are convenient, you can go anywhere.",
      },
      {
        patternsUsed: [16, 33, 38, 40, 42, 47, 48],
        japanese:
          "まいにちあさはやくうちでにほんごをべんきょうしたほうがいいとおもいます。きいて、よんで、かいて、はなしてれんしゅうしましょう。まいにちがんばっているから、きっとじょうずになるとおもいます。もしむずかしいとおもったら、やすんでもだいじょうぶです。けっきょくつづけることがたいせつだから、いっしょにがんばりましょう。",
        romaji:
          "Mainichi asa hayaku uchi de nihongo o benkyō shita hō ga ii to omoimasu. Kiite, yonde, kaite, hanashite renshū shimashō. Mainichi ganbatte iru kara, kitto jōzu ni naru to omoimasu. Moshi muzukashii to omottara, yasunde mo daijōbu desu. Kekkyoku tsuzukeru koto ga taisetsu da kara, issho ni ganbarimashō.",
        english:
          "I think you should study Japanese at home early every morning. Let's practice by listening, reading, writing, and speaking. Because you work hard every day, I think you'll surely improve. If you think it's difficult, it's OK to take a break. In the end, continuing is what matters, so let's do our best together.",
      },
    ],
    dialogue: [
      {
        speaker: "You",
        japanese:
          "さいきんにほんごがむずかしいとおもっています。",
        romaji: "Saikin nihongo ga muzukashii to omotte imasu.",
        english: "Lately I've been feeling that Japanese is difficult.",
      },
      {
        speaker: "Tanaka",
        japanese: "どうしてですか？",
        romaji: "Dōshite desu ka?",
        english: "Why is that?",
      },
      {
        speaker: "You",
        japanese:
          "まいにちべんきょうしていますが、じょうずにならないきがします。",
        romaji:
          "Mainichi benkyō shite imasu ga, jōzu ni naranai ki ga shimasu.",
        english:
          "I study every day, but I feel like I'm not getting better.",
      },
      {
        speaker: "Tanaka",
        japanese:
          "そうですか。じっさいはせいちょうしているとおもいますよ。きいて、よんで、はなして、かいて、ぜんぶだいじです。",
        romaji:
          "Sō desu ka. Jissai wa seichō shite iru to omoimasu yo. Kiite, yonde, hanashite, kaite, zenbu daiji desu.",
        english:
          "I see. Actually, I think you are growing. Listening, reading, speaking, writing — they're all important.",
      },
      {
        speaker: "You",
        japanese:
          "なるほど。もしにほんじんのともだちがいたら、もっとれんしゅうできるとおもいます。",
        romaji:
          "Naruhodo. Moshi nihonjin no tomodachi ga itara, motto renshū dekiru to omoimasu.",
        english:
          "I see. If I had Japanese friends, I think I could practice more.",
      },
      {
        speaker: "Tanaka",
        japanese:
          "そうですね。いっしょにかいわのれんしゅうをしましょう！むりしないでください。",
        romaji:
          "Sō desu ne. Issho ni kaiwa no renshū o shimashō! Muri shinaide kudasai.",
        english:
          "That's right. Let's practice conversation together! Don't push yourself too hard.",
      },
    ],
    practicePrompts: [
      "Write a paragraph about your study routine chaining Patterns #16, #33, and #38",
      "Give advice to a new Japanese learner using #40 + #42 + #48: ___から、もし___たら、___たほうがいいです",
      "Describe a perfect day in Japan chaining #33, #42, and #47",
      "Create the longest natural sentence you can using four or more patterns",
    ],
    languageInsight: {
      title: "Common English Speaker Mistakes in Japanese",
      content:
        "English speakers make predictable mistakes in Japanese. The biggest: confusing は and が. は marks the topic ('as for X'), while が marks the grammatical subject. 'わたしはがくせいです' means 'As for me, I'm a student.' 'わたしががくせいです' means 'I am the one who is a student.' Second: word order. English is SVO (I eat sushi), Japanese is SOV (I sushi eat — わたしはすしをたべます). Third: overusing pronouns. Japanese drops 'I,' 'you,' 'he,' 'she' constantly. Saying わたしは in every sentence sounds unnatural. Fourth: literal translation. 'I like sushi' uses が not を in Japanese (すしがすきです), because すき is an adjective, not a verb. Awareness of these traps is half the battle.",
    },
    tutorNote:
      "Mega combos are where students transition from 'pattern users' to 'Japanese speakers.' The difference: pattern users think one sentence at a time. Japanese speakers think in connected paragraphs. Today's goal is building that paragraph-level thinking. Start with 2-pattern chains and work up to 4. Students who struggle should go back to individual patterns and build upward.",
    quickReference:
      "3-pattern chain: [reason]から + [condition]もし___たら + [advice]___たほうがいい | 4-pattern chain: [time+place]に___で + [te-chain]___て、___て + [opinion]とおもう + [reason]から | Common mistakes: は≠が, SOV not SVO, drop pronouns, すき uses が",
    listeningRec: {
      source: "Terrace House",
      title: "Rewatch with Japanese subtitles",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Rewatch a favorite episode with Japanese subtitles on. Read along and listen. Notice how patterns chain together in natural speech. Pause and reread sentences that use multiple patterns. This reading-while-listening technique accelerates acquisition.",
    },
  },

  {
    day: 89,
    dayType: "pattern-combo",
    title: "Mock Conversations",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Handle three real-world conversation scenarios entirely in Japanese",
      "Apply all 50 patterns to practical situations: medical, navigation, and social",
      "Build confidence for real Japanese interactions through role-play",
      "Shift register appropriately based on the social context of each scenario",
    ],
    usesPatterns: [1, 5, 6, 7, 21, 25, 29, 36, 38, 40, 42, 47, 48, 50],
    vocabulary: [
      {
        japanese: "ロールプレイ",
        romaji: "rōrupurei",
        english: "role play",
        mnemonic:
          "'Roh-roo-poo-ray' — sounds just like 'role play' with Japanese syllables",
      },
      {
        japanese: "じょうきょう",
        romaji: "jōkyō",
        english: "situation / circumstances",
        mnemonic:
          "'Joh-kyoh' — 'Joe, go!' — Joe, go handle this situation!",
      },
      {
        japanese: "たいおう",
        romaji: "taiō",
        english: "response / dealing with a situation (する verb)",
        mnemonic:
          "'Tai-oh' — 'tie, oh!' — oh, tie up loose ends to deal with it",
      },
      {
        japanese: "じしん",
        romaji: "jishin",
        english: "confidence / self-confidence",
        mnemonic:
          "'Jee-shin' — 'gee, shin!' — gee, that shiny confidence on your face!",
      },
      {
        japanese: "しっぱい",
        romaji: "shippai",
        english: "failure / mistake",
        mnemonic:
          "'Ship-pie' — the ship's pie was a total failure — it sank!",
      },
    ],
    examples: [
      {
        japanese:
          "にほんごでいろいろなじょうきょうにたいおうすることができます。",
        romaji:
          "Nihongo de iroiro na jōkyō ni taiō suru koto ga dekimasu.",
        english: "I can handle various situations in Japanese.",
      },
      {
        japanese:
          "しっぱいしてもだいじょうぶです。れんしゅうすればじょうずになります。",
        romaji:
          "Shippai shite mo daijōbu desu. Renshū sureba jōzu ni narimasu.",
        english:
          "Even if you fail, it's OK. If you practice, you'll get better.",
      },
      {
        japanese: "じしんをもってにほんごではなしましょう。",
        romaji: "Jishin o motte nihongo de hanashimashō.",
        english: "Let's speak Japanese with confidence.",
      },
      {
        japanese:
          "びょういんはどこですか？あたまがいたいです。",
        romaji: "Byōin wa doko desu ka? Atama ga itai desu.",
        english: "Where is the hospital? I have a headache.",
      },
      {
        japanese:
          "すみません、みちにまよいました。えきまでどういきますか？",
        romaji:
          "Sumimasen, michi ni mayoimashita. Eki made dō ikimasu ka?",
        english: "Excuse me, I'm lost. How do I get to the station?",
      },
      {
        japanese: "しょうらいのゆめについてはなしたいです。",
        romaji: "Shōrai no yume ni tsuite hanashitai desu.",
        english: "I want to talk about my future dreams.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 5, 21, 25, 29],
        japanese:
          "すみません、びょういんはどこですか？きのうからおなかがいたいです。くすりがほしいです。にほんごでせつめいしてください。ゆっくりおねがいします。",
        romaji:
          "Sumimasen, byōin wa doko desu ka? Kinō kara onaka ga itai desu. Kusuri ga hoshii desu. Nihongo de setsumei shite kudasai. Yukkuri onegai shimasu.",
        english:
          "Excuse me, where is the hospital? My stomach has been hurting since yesterday. I want medicine. Please explain in Japanese. Slowly, please. (At the doctor)",
      },
      {
        patternsUsed: [5, 7, 29, 36, 42],
        japanese:
          "すみません、みちにまよいました。このじゅうしょにいきたいですが、どういきますか？にほんごをすこしはなすことができます。もしちかかったら、あるいていきたいです。ちずをかいてくださいませんか？",
        romaji:
          "Sumimasen, michi ni mayoimashita. Kono jūsho ni ikitai desu ga, dō ikimasu ka? Nihongo o sukoshi hanasu koto ga dekimasu. Moshi chikakattara, aruite ikitai desu. Chizu o kaite kudasaimasen ka?",
        english:
          "Excuse me, I'm lost. I want to go to this address — how do I get there? I can speak a little Japanese. If it's nearby, I'd like to walk. Could you draw me a map? (Lost in a city)",
      },
      {
        patternsUsed: [1, 6, 23, 25, 38, 40, 47, 50],
        japanese:
          "はじめまして。にほんごをべんきょうしています。にほんのぶんかがすきだから、にほんにきました。おすすめのばしょがあったらおしえてください。いっしょにランチにいきましょう。えーと、カジュアルにはなしてもいい？にほんごってたのしいよね。",
        romaji:
          "Hajimemashite. Nihongo o benkyō shite imasu. Nihon no bunka ga suki da kara, nihon ni kimashita. Osusume no basho ga attara oshiete kudasai. Issho ni ranchi ni ikimashō. Ēto, kajuaru ni hanashite mo ii? Nihongo tte tanoshii yo ne.",
        english:
          "Nice to meet you. I'm studying Japanese. Because I like Japanese culture, I came to Japan. If you have recommended places, please tell me. Let's go to lunch together. Um, is it OK to speak casually? Japanese is fun, right? (Making a new friend — with register shift)",
      },
    ],
    dialogue: [
      {
        speaker: "Interviewer",
        japanese:
          "はじめまして。きょうはきてくださってありがとうございます。じこしょうかいをおねがいします。",
        romaji:
          "Hajimemashite. Kyō wa kite kudasatte arigatō gozaimasu. Jiko shōkai o onegai shimasu.",
        english:
          "Nice to meet you. Thank you for coming today. Please introduce yourself.",
      },
      {
        speaker: "You",
        japanese:
          "はじめまして。にほんごとえいごをはなすことができます。にほんのぶんかがすきだから、にほんではたらきたいとおもっています。",
        romaji:
          "Hajimemashite. Nihongo to eigo o hanasu koto ga dekimasu. Nihon no bunka ga suki da kara, nihon de hatarakitai to omotte imasu.",
        english:
          "Nice to meet you. I can speak Japanese and English. Because I like Japanese culture, I want to work in Japan.",
      },
      {
        speaker: "Interviewer",
        japanese: "なぜこのかいしゃをえらびましたか？",
        romaji: "Naze kono kaisha o erabimashita ka?",
        english: "Why did you choose this company?",
      },
      {
        speaker: "You",
        japanese:
          "このかいしゃはこくさいてきだから、えいごとにほんごをつかうことができるとおもいました。もしここではたらけたら、たくさんせいちょうできるとおもいます。",
        romaji:
          "Kono kaisha wa kokusaiteki da kara, eigo to nihongo o tsukau koto ga dekiru to omoimashita. Moshi koko de hataraketara, takusan seichō dekiru to omoimasu.",
        english:
          "Because this company is international, I thought I could use both English and Japanese. If I can work here, I think I can grow a lot.",
      },
      {
        speaker: "Interviewer",
        japanese:
          "にほんでせいかつするのはむずかしいとおもいますか？",
        romaji:
          "Nihon de seikatsu suru no wa muzukashii to omoimasu ka?",
        english: "Do you think living in Japan will be difficult?",
      },
      {
        speaker: "You",
        japanese:
          "すこしむずかしいとおもいますが、まいにちにほんごをべんきょうしているから、だいじょうぶだとおもいます。チャレンジがすきです。",
        romaji:
          "Sukoshi muzukashii to omoimasu ga, mainichi nihongo o benkyō shite iru kara, daijōbu da to omoimasu. Charenji ga suki desu.",
        english:
          "I think it'll be a little difficult, but because I study Japanese every day, I think I'll be fine. I like challenges.",
      },
      {
        speaker: "Interviewer",
        japanese:
          "すばらしいですね。けっかはらいしゅうれんらくします。",
        romaji:
          "Subarashii desu ne. Kekka wa raishū renraku shimasu.",
        english: "That's great. We'll contact you with results next week.",
      },
      {
        speaker: "You",
        japanese:
          "ありがとうございます。よろしくおねがいします。",
        romaji: "Arigatō gozaimasu. Yoroshiku onegai shimasu.",
        english: "Thank you very much. I look forward to hearing from you.",
      },
    ],
    practicePrompts: [
      "Role-play: you're at a pharmacy with a headache — describe symptoms and ask for medicine",
      "Role-play: you're lost in Osaka — ask three different people for directions to the castle",
      "Role-play: you meet a Japanese person at an international event — introduce yourself and make plans",
      "Role-play: you're checking into a hotel — confirm your reservation and ask about breakfast",
      "Record a 1-minute conversation with yourself playing both roles in any scenario",
    ],
    languageInsight: {
      title: "Language Change: Japanese Is a Living Thing",
      content:
        "Japanese, like all languages, is constantly evolving. Words your textbook teaches as 'correct' may sound old-fashioned to young speakers. Casual speech shortens everything: ～ている becomes ～てる, ～ではない becomes ～じゃない, そうですね becomes そっすね in ultra-casual speech. New slang appears constantly: エモい (emoi — emotional/aesthetic), ガチ (gachi — for real), ワンチャン (wanchan — there's a chance). Meanwhile, classical grammar forms slowly fade from daily use. This means the 'correct Japanese' you learn today is a snapshot of a moving target. Don't stress about perfection — even native speakers break their own rules constantly. The goal is communication, and the language will always meet you halfway.",
    },
    tutorNote:
      "Mock conversations are the final test before graduation. Students should be able to handle basic real-world scenarios: medical needs, navigation, social introductions, and formal settings like interviews. The key is not perfection but functionality — can the student get their message across? Celebrate any student who can hold a conversation, even with mistakes. Mistakes that communicate are infinitely better than perfect silence.",
    quickReference:
      "Medical: びょういん (hospital) + いたい (hurts) + くすり (medicine) | Navigation: みちにまよいました (I'm lost) + どういきますか (how do I get there?) | Social: はじめまして + じこしょうかい + がすきだから + いっしょに___ましょう | Interview: ___ことができます + ___とおもいます + ___から",
    listeningRec: {
      source: "Terrace House",
      title: "Shadow a conversation",
      url: "https://www.netflix.com/title/80198585",
      listenFor:
        "Pick one housemate and shadow their speech: pause after each sentence and repeat exactly what they said, matching their tone and rhythm. This shadowing technique trains your mouth muscles and intonation. Even imperfect shadowing builds fluency rapidly.",
    },
  },

  {
    day: 90,
    dayType: "review",
    title: "What's Next",
    phase: 7,
    phaseTitle: "Pattern Mastery",
    objectives: [
      "Celebrate completing 90 days and 50 patterns of Japanese",
      "Reflect on the full learning journey from Day 1 to Day 90",
      "Set concrete next-step goals: JLPT N4, conversation practice, kanji, immersion",
      "Record a 2-minute self-introduction as a graduation milestone",
    ],
    usesPatterns: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ],
    vocabulary: [
      {
        japanese: "そつぎょう",
        romaji: "sotsugyō",
        english: "graduation",
        mnemonic:
          "'Soht-soo-gyoh' — 'so, two, go!' — so you graduated: two thumbs up, now go!",
      },
      {
        japanese: "もくひょう",
        romaji: "mokuhyō",
        english: "goal / target",
        mnemonic:
          "'Moh-koo-hyoh' — 'moku, hyo!' — moku (wood) target — aim your arrow at the wooden goal",
      },
      {
        japanese: "ふりかえる",
        romaji: "furikaeru",
        english: "to look back / to reflect (ru-verb)",
        mnemonic:
          "'Foo-ree-kah-eh-roo' — 'fury, care, roo!' — look back with care, not fury, at your journey",
      },
      {
        japanese: "つづける",
        romaji: "tsuzukeru",
        english: "to continue (ru-verb)",
        mnemonic:
          "'Tsoo-zoo-keh-roo' — 'to zoo, care, roo!' — continue caring for the zoo roo every day",
      },
      {
        japanese: "ちょうせん",
        romaji: "chōsen",
        english: "challenge (する verb)",
        mnemonic:
          "'Choh-sen' — 'chosen' — you've been chosen for the next challenge!",
      },
      {
        japanese: "ごうかく",
        romaji: "gōkaku",
        english: "passing (an exam) / success",
        mnemonic:
          "'Goh-kah-koo' — 'go, kaku!' — go write (kaku) the exam and pass!",
      },
    ],
    examples: [
      {
        japanese:
          "きゅうじゅうにちまえ、にほんごがぜんぜんわかりませんでした。",
        romaji:
          "Kyūjūnichi mae, nihongo ga zenzen wakarimasen deshita.",
        english: "Ninety days ago, I didn't understand Japanese at all.",
      },
      {
        japanese: "いまごじゅうのパターンをつかうことができます。",
        romaji: "Ima gojū no patān o tsukau koto ga dekimasu.",
        english: "Now I can use 50 patterns.",
      },
      {
        japanese:
          "にほんごのべんきょうはたのしかったとおもいます。",
        romaji: "Nihongo no benkyō wa tanoshikatta to omoimasu.",
        english: "I think studying Japanese was fun.",
      },
      {
        japanese: "つぎのもくひょうはJLPTのN4です。",
        romaji: "Tsugi no mokuhyō wa JLPT no N4 desu.",
        english: "My next goal is JLPT N4.",
      },
      {
        japanese:
          "もしがんばったら、きっとごうかくするとおもいます。",
        romaji:
          "Moshi ganbattara, kitto gōkaku suru to omoimasu.",
        english: "If I work hard, I think I'll surely pass.",
      },
      {
        japanese:
          "きょうがそつぎょうですが、あしたもにほんごをつづけます。",
        romaji:
          "Kyō ga sotsugyō desu ga, ashita mo nihongo o tsuzukemasu.",
        english:
          "Today is graduation, but tomorrow I'll continue with Japanese too.",
      },
      {
        japanese:
          "このきゅうじゅうにちかんのたびをふりかえると、たくさんせいちょうしたとおもいます。",
        romaji:
          "Kono kyūjūnichikan no tabi o furikaeru to, takusan seichō shita to omoimasu.",
        english:
          "Looking back on this 90-day journey, I think I've grown a lot.",
      },
    ],
    patternCombo: [
      {
        patternsUsed: [1, 4, 13, 23, 25, 32, 38, 40],
        japanese:
          "わたしはにほんごのがくせいです。にほんごはとてもおもしろいです。きゅうじゅうにちまえにべんきょうをはじめました。にほんのぶんかがすきだから、にほんごをまなびたかったです。いまにほんごをよんで、きいて、はなしています。たくさんまなんだとおもいます。つぎのステップがたのしみです。",
        romaji:
          "Watashi wa nihongo no gakusei desu. Nihongo wa totemo omoshiroi desu. Kyūjūnichi mae ni benkyō o hajimemashita. Nihon no bunka ga suki da kara, nihongo o manabitakatta desu. Ima nihongo o yonde, kiite, hanashite imasu. Takusan mananda to omoimasu. Tsugi no suteppu ga tanoshimi desu.",
        english:
          "I am a Japanese language student. Japanese is very interesting. I started studying 90 days ago. Because I like Japanese culture, I wanted to learn. Now I'm reading, listening, and speaking Japanese. I think I've learned a lot. I'm looking forward to the next step. (90-day reflection)",
      },
      {
        patternsUsed: [25, 38, 40, 42, 47, 48, 50],
        japanese:
          "これからもにほんごのべんきょうをつづけたいです。つぎのもくひょうはN4だとおもいます。まいにちすこしずつべんきょうしたほうがいいです。もしN4にごうかくしたら、つぎはN3にちょうせんしましょう。がんばっているから、きっとできるとおもいます。にほんご、がんばるぞ！",
        romaji:
          "Kore kara mo nihongo no benkyō o tsuzuketai desu. Tsugi no mokuhyō wa N4 da to omoimasu. Mainichi sukoshi zutsu benkyō shita hō ga ii desu. Moshi N4 ni gōkaku shitara, tsugi wa N3 ni chōsen shimashō. Ganbatte iru kara, kitto dekiru to omoimasu. Nihongo, ganbaru zo!",
        english:
          "I want to keep studying Japanese from here on. I think my next goal is N4. You should study a little every day. If I pass N4, let's challenge N3 next. Because I'm working hard, I think I can surely do it. Japanese — I'm going for it! (Next-steps declaration — ending in casual)",
      },
    ],
    dialogue: [
      {
        speaker: "Sensei",
        japanese:
          "きゅうじゅうにちめです。おめでとうございます！",
        romaji: "Kyūjūnichime desu. Omedetō gozaimasu!",
        english: "It's Day 90. Congratulations!",
      },
      {
        speaker: "You",
        japanese: "ありがとうございます。びっくりしました。",
        romaji: "Arigatō gozaimasu. Bikkuri shimashita.",
        english: "Thank you. I'm amazed I made it.",
      },
      {
        speaker: "Sensei",
        japanese:
          "ふりかえってみてください。いちにちめにできなかったことが、いまできますね。",
        romaji:
          "Furikaette mite kudasai. Ichinichime ni dekinakatta koto ga, ima dekimasu ne.",
        english:
          "Look back. Things you couldn't do on Day 1, you can do now.",
      },
      {
        speaker: "You",
        japanese:
          "はい。パターンいちの「です」しかわかりませんでした。いまはごじゅうのパターンをつかうことができます。",
        romaji:
          "Hai. Patān ichi no 'desu' shika wakarimasen deshita. Ima wa gojū no patān o tsukau koto ga dekimasu.",
        english:
          "Yes. I only understood Pattern 1's 'desu.' Now I can use 50 patterns.",
      },
      {
        speaker: "Sensei",
        japanese: "いちばんむずかしかったパターンはなんですか？",
        romaji: "Ichiban muzukashikatta patān wa nan desu ka?",
        english: "What was the most difficult pattern?",
      },
      {
        speaker: "You",
        japanese:
          "えーと、そうですね…もし___たら、___とおもいます、みたいなながいぶんがむずかしかったです。でもれんしゅうしたから、だんだんわかるようになりました。",
        romaji:
          "Ēto, sō desu ne… Moshi ___tara, ___ to omoimasu, mitai na nagai bun ga muzukashikatta desu. Demo renshū shita kara, dandan wakaru yō ni narimashita.",
        english:
          "Um, let me see… Long sentences like 'If ___, I think ___' were difficult. But because I practiced, I gradually came to understand them.",
      },
      {
        speaker: "Sensei",
        japanese: "これからどうしますか？",
        romaji: "Kore kara dō shimasu ka?",
        english: "What will you do from here?",
      },
      {
        speaker: "You",
        japanese:
          "つぎはN4のしけんをうけたいとおもいます。もしごうかくしたら、N3にちょうせんします。にほんにいきたいから、もっとがんばります。",
        romaji:
          "Tsugi wa N4 no shiken o uketai to omoimasu. Moshi gōkaku shitara, N3 ni chōsen shimasu. Nihon ni ikitai kara, motto ganbarimasu.",
        english:
          "Next, I think I want to take the N4 exam. If I pass, I'll challenge N3. Because I want to go to Japan, I'll work even harder.",
      },
      {
        speaker: "Sensei",
        japanese:
          "すばらしいけいかくですね。ひとつアドバイスをいいますか？",
        romaji:
          "Subarashii keikaku desu ne. Hitotsu adobaisu o iimasu ka?",
        english: "That's a wonderful plan. Can I give you one piece of advice?",
      },
      {
        speaker: "You",
        japanese: "はい、おねがいします。",
        romaji: "Hai, onegai shimasu.",
        english: "Yes, please.",
      },
      {
        speaker: "Sensei",
        japanese:
          "にほんごをにほんごでかんがえるようにしてください。やくさないでください。",
        romaji:
          "Nihongo o nihongo de kangaeru yō ni shite kudasai. Yakusanaide kudasai.",
        english:
          "Try to think about Japanese in Japanese. Don't translate.",
      },
      {
        speaker: "You",
        japanese:
          "なるほど。やっぱりそれがたいせつなんですね。",
        romaji: "Naruhodo. Yappari sore ga taisetsu nan desu ne.",
        english:
          "I see. That's what's important after all, isn't it.",
      },
      {
        speaker: "Sensei",
        japanese:
          "そのとおりです。きゅうじゅうにちかん、よくがんばりました。これからもいっしょにがんばりましょう！",
        romaji:
          "Sono tōri desu. Kyūjūnichikan, yoku ganbarimashita. Kore kara mo issho ni ganbarimashō!",
        english:
          "Exactly right. You worked hard for 90 days. Let's keep doing our best together from here on!",
      },
      {
        speaker: "You",
        japanese:
          "ありがとうございました。これからもよろしくおねがいします！",
        romaji:
          "Arigatō gozaimashita. Kore kara mo yoroshiku onegai shimasu!",
        english:
          "Thank you for everything. I look forward to continuing this journey!",
      },
    ],
    practicePrompts: [
      "Record a 2-minute self-introduction in Japanese: your name, where you're from, your hobbies, why you study Japanese, what you've learned, and your goals",
      "Write a letter to your Day-1 self: what advice would you give in Japanese?",
      "List your top 5 most useful patterns and explain why — in Japanese",
      "Schedule your Final Check: visit the Final Check page and test your mastery of all 50 patterns",
      "Set three Japanese learning goals for the next 90 days and write them down in Japanese",
    ],
    languageInsight: {
      title: "The 'Click' Moment: When You Stop Translating",
      content:
        "Every language learner waits for the 'click' — the moment when you stop translating from your native language and start thinking directly in Japanese. It doesn't happen all at once. First, simple phrases click: you hear おはようございます and feel 'good morning' without translating. Then patterns click: とおもいます stops being 'quotation particle + think verb' and simply means 'I think.' Eventually, whole conversations click: you listen, understand, and respond without your native language entering the process at all. This 90-day journey has been building the neural pathways for that click. Some patterns have already clicked — those are the ones that come out automatically. Others still require conscious thought — those need more reps. The click isn't the end of learning; it's the beginning of fluency. From here, every conversation, every anime episode, every Japanese sentence you read deepens those pathways. You're not at the finish line — you're at the real starting line. And that's the most exciting place to be.",
    },
    tutorNote:
      "Congratulations — your student has completed 90 days and 50 patterns. This is not an endpoint but a milestone. The most important thing now is momentum. Recommend: (1) Take the Final Check to identify weak patterns, (2) Begin JLPT N4 preparation, (3) Find a language exchange partner or tutor, (4) Watch Japanese media without English subtitles, (5) Start a Japanese journal — even one sentence a day. The student now has the foundation to accelerate. Every new word and grammar point will connect to patterns they already know. The hardest part — starting — is behind them.",
    quickReference:
      "YOUR 90-DAY JOURNEY | Phase 1 (Days 1–10, #1–#6): です, じゃない, ですか, は___です, どこ, をください | Phase 2 (Days 11–20, #7–#11): にいきます, を___ます, で___ます, なん, だれ | Phase 3 (Days 21–35, #13–#19): ました, ません, ませんでした, time+place+verb, があります/います, もっています, と___を | Phase 4 (Days 36–50, #21–#28): い-adj, な-adj, すき, ほしい, たい, より___ほう, casual forms, とおもう | Phase 5 (Days 51–65, #29–#37): てください, てもいい, てはいけない, ている, て-chaining, てから, できる, なくてもいい | Phase 6 (Days 66–80, #38–#49): とおもう(clauses), といった, から, けど, たら, とき, まえに/あとで, すぎる, やすい/にくい, ましょう, ほうがいい, fillers | Phase 7 (Days 81–90, #50): Register switching + restaurant + travel + social vocab + mega combos + all 50 patterns mastered | NEXT STEPS: JLPT N4 → N3 → conversation practice → kanji study → full immersion",
    listeningRec: {
      source: "Comprehensible Japanese",
      title: "Intermediate — Watch without any subtitles",
      url: "https://www.youtube.com/@ComprehensibleJapanese",
      listenFor:
        "Watch intermediate-level videos without any subtitles. Don't pause. Don't look up words. Just listen and understand what you can. You'll be amazed how much you catch after 90 days. This is your new normal — every week, a little more clicks into place.",
    },
  },
];
