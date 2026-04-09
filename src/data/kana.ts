export type KanaItem = {
  character: string;
  romaji: string;
  row: string;
};

export const hiragana: KanaItem[] = [
  // Vowels
  { character: "あ", romaji: "a", row: "vowels" },
  { character: "い", romaji: "i", row: "vowels" },
  { character: "う", romaji: "u", row: "vowels" },
  { character: "え", romaji: "e", row: "vowels" },
  { character: "お", romaji: "o", row: "vowels" },
  // K row
  { character: "か", romaji: "ka", row: "k" },
  { character: "き", romaji: "ki", row: "k" },
  { character: "く", romaji: "ku", row: "k" },
  { character: "け", romaji: "ke", row: "k" },
  { character: "こ", romaji: "ko", row: "k" },
  // S row
  { character: "さ", romaji: "sa", row: "s" },
  { character: "し", romaji: "shi", row: "s" },
  { character: "す", romaji: "su", row: "s" },
  { character: "せ", romaji: "se", row: "s" },
  { character: "そ", romaji: "so", row: "s" },
  // T row
  { character: "た", romaji: "ta", row: "t" },
  { character: "ち", romaji: "chi", row: "t" },
  { character: "つ", romaji: "tsu", row: "t" },
  { character: "て", romaji: "te", row: "t" },
  { character: "と", romaji: "to", row: "t" },
  // N row
  { character: "な", romaji: "na", row: "n" },
  { character: "に", romaji: "ni", row: "n" },
  { character: "ぬ", romaji: "nu", row: "n" },
  { character: "ね", romaji: "ne", row: "n" },
  { character: "の", romaji: "no", row: "n" },
  // H row
  { character: "は", romaji: "ha", row: "h" },
  { character: "ひ", romaji: "hi", row: "h" },
  { character: "ふ", romaji: "fu", row: "h" },
  { character: "へ", romaji: "he", row: "h" },
  { character: "ほ", romaji: "ho", row: "h" },
  // M row
  { character: "ま", romaji: "ma", row: "m" },
  { character: "み", romaji: "mi", row: "m" },
  { character: "む", romaji: "mu", row: "m" },
  { character: "め", romaji: "me", row: "m" },
  { character: "も", romaji: "mo", row: "m" },
  // Y row
  { character: "や", romaji: "ya", row: "y" },
  { character: "ゆ", romaji: "yu", row: "y" },
  { character: "よ", romaji: "yo", row: "y" },
  // R row
  { character: "ら", romaji: "ra", row: "r" },
  { character: "り", romaji: "ri", row: "r" },
  { character: "る", romaji: "ru", row: "r" },
  { character: "れ", romaji: "re", row: "r" },
  { character: "ろ", romaji: "ro", row: "r" },
  // W row + N
  { character: "わ", romaji: "wa", row: "w" },
  { character: "を", romaji: "wo", row: "w" },
  { character: "ん", romaji: "n", row: "w" },
  // Dakuten - G
  { character: "が", romaji: "ga", row: "g" },
  { character: "ぎ", romaji: "gi", row: "g" },
  { character: "ぐ", romaji: "gu", row: "g" },
  { character: "げ", romaji: "ge", row: "g" },
  { character: "ご", romaji: "go", row: "g" },
  // Dakuten - Z
  { character: "ざ", romaji: "za", row: "z" },
  { character: "じ", romaji: "ji", row: "z" },
  { character: "ず", romaji: "zu", row: "z" },
  { character: "ぜ", romaji: "ze", row: "z" },
  { character: "ぞ", romaji: "zo", row: "z" },
  // Dakuten - D
  { character: "だ", romaji: "da", row: "d" },
  { character: "ぢ", romaji: "di", row: "d" },
  { character: "づ", romaji: "du", row: "d" },
  { character: "で", romaji: "de", row: "d" },
  { character: "ど", romaji: "do", row: "d" },
  // Dakuten - B
  { character: "ば", romaji: "ba", row: "b" },
  { character: "び", romaji: "bi", row: "b" },
  { character: "ぶ", romaji: "bu", row: "b" },
  { character: "べ", romaji: "be", row: "b" },
  { character: "ぼ", romaji: "bo", row: "b" },
  // Handakuten - P
  { character: "ぱ", romaji: "pa", row: "p" },
  { character: "ぴ", romaji: "pi", row: "p" },
  { character: "ぷ", romaji: "pu", row: "p" },
  { character: "ぺ", romaji: "pe", row: "p" },
  { character: "ぽ", romaji: "po", row: "p" },
];

export const katakana: KanaItem[] = [
  // Vowels
  { character: "ア", romaji: "a", row: "vowels" },
  { character: "イ", romaji: "i", row: "vowels" },
  { character: "ウ", romaji: "u", row: "vowels" },
  { character: "エ", romaji: "e", row: "vowels" },
  { character: "オ", romaji: "o", row: "vowels" },
  // K row
  { character: "カ", romaji: "ka", row: "k" },
  { character: "キ", romaji: "ki", row: "k" },
  { character: "ク", romaji: "ku", row: "k" },
  { character: "ケ", romaji: "ke", row: "k" },
  { character: "コ", romaji: "ko", row: "k" },
  // S row
  { character: "サ", romaji: "sa", row: "s" },
  { character: "シ", romaji: "shi", row: "s" },
  { character: "ス", romaji: "su", row: "s" },
  { character: "セ", romaji: "se", row: "s" },
  { character: "ソ", romaji: "so", row: "s" },
  // T row
  { character: "タ", romaji: "ta", row: "t" },
  { character: "チ", romaji: "chi", row: "t" },
  { character: "ツ", romaji: "tsu", row: "t" },
  { character: "テ", romaji: "te", row: "t" },
  { character: "ト", romaji: "to", row: "t" },
  // N row
  { character: "ナ", romaji: "na", row: "n" },
  { character: "ニ", romaji: "ni", row: "n" },
  { character: "ヌ", romaji: "nu", row: "n" },
  { character: "ネ", romaji: "ne", row: "n" },
  { character: "ノ", romaji: "no", row: "n" },
  // H row
  { character: "ハ", romaji: "ha", row: "h" },
  { character: "ヒ", romaji: "hi", row: "h" },
  { character: "フ", romaji: "fu", row: "h" },
  { character: "ヘ", romaji: "he", row: "h" },
  { character: "ホ", romaji: "ho", row: "h" },
  // M row
  { character: "マ", romaji: "ma", row: "m" },
  { character: "ミ", romaji: "mi", row: "m" },
  { character: "ム", romaji: "mu", row: "m" },
  { character: "メ", romaji: "me", row: "m" },
  { character: "モ", romaji: "mo", row: "m" },
  // Y row
  { character: "ヤ", romaji: "ya", row: "y" },
  { character: "ユ", romaji: "yu", row: "y" },
  { character: "ヨ", romaji: "yo", row: "y" },
  // R row
  { character: "ラ", romaji: "ra", row: "r" },
  { character: "リ", romaji: "ri", row: "r" },
  { character: "ル", romaji: "ru", row: "r" },
  { character: "レ", romaji: "re", row: "r" },
  { character: "ロ", romaji: "ro", row: "r" },
  // W row + N
  { character: "ワ", romaji: "wa", row: "w" },
  { character: "ヲ", romaji: "wo", row: "w" },
  { character: "ン", romaji: "n", row: "w" },
  // Dakuten - G
  { character: "ガ", romaji: "ga", row: "g" },
  { character: "ギ", romaji: "gi", row: "g" },
  { character: "グ", romaji: "gu", row: "g" },
  { character: "ゲ", romaji: "ge", row: "g" },
  { character: "ゴ", romaji: "go", row: "g" },
  // Dakuten - Z
  { character: "ザ", romaji: "za", row: "z" },
  { character: "ジ", romaji: "ji", row: "z" },
  { character: "ズ", romaji: "zu", row: "z" },
  { character: "ゼ", romaji: "ze", row: "z" },
  { character: "ゾ", romaji: "zo", row: "z" },
  // Dakuten - D
  { character: "ダ", romaji: "da", row: "d" },
  { character: "ヂ", romaji: "di", row: "d" },
  { character: "ヅ", romaji: "du", row: "d" },
  { character: "デ", romaji: "de", row: "d" },
  { character: "ド", romaji: "do", row: "d" },
  // Dakuten - B
  { character: "バ", romaji: "ba", row: "b" },
  { character: "ビ", romaji: "bi", row: "b" },
  { character: "ブ", romaji: "bu", row: "b" },
  { character: "ベ", romaji: "be", row: "b" },
  { character: "ボ", romaji: "bo", row: "b" },
  // Handakuten - P
  { character: "パ", romaji: "pa", row: "p" },
  { character: "ピ", romaji: "pi", row: "p" },
  { character: "プ", romaji: "pu", row: "p" },
  { character: "ペ", romaji: "pe", row: "p" },
  { character: "ポ", romaji: "po", row: "p" },
];

export const kanaRows = [
  { id: "vowels", label: "Vowels" },
  { id: "k", label: "K" },
  { id: "s", label: "S" },
  { id: "t", label: "T" },
  { id: "n", label: "N" },
  { id: "h", label: "H" },
  { id: "m", label: "M" },
  { id: "y", label: "Y" },
  { id: "r", label: "R" },
  { id: "w", label: "W/N" },
  { id: "g", label: "G (dakuten)" },
  { id: "z", label: "Z (dakuten)" },
  { id: "d", label: "D (dakuten)" },
  { id: "b", label: "B (dakuten)" },
  { id: "p", label: "P (handakuten)" },
];
