// Powers transcribed from the supplied screenshots; optional third field is a titan image key.
const known = {
  "PhysicalOfficer": [
    583283,
    183714,
    "physicalofficer"
  ],
  "Koly": [
    533562,
    180190,
    "koly"
  ],
  "Win": [
    331744,
    134127,
    null
  ],
  "LightlyPure": [
    366412,
    92821,
    null
  ],
  "Nord stream": [
    205353,
    119305,
    null
  ],
  "TIM": [
    175936,
    89947,
    null
  ],
  "GroWorm": [
    248165,
    125274,
    null
  ],
  "eiei1313": [
    277712,
    81512,
    null
  ],
  "°=(°√°)=° ЫЧ!": [
    341635,
    144481,
    null
  ],
  "АрбалетМятный93": [
    318997,
    152497,
    null
  ],
  "AmberClassroom1": [
    407095,
    199473,
    "amberclassroom1"
  ],
  "Raggy": [
    446733,
    132875,
    "raggy"
  ],
  "Ворона": [
    256458,
    93255,
    null
  ],
  "LjRash": [
    231169,
    103607,
    null
  ],
  "FarrukhSher": [
    379544,
    193860,
    "farrukhsher"
  ],
  "CherryShu": [
    391935,
    159994,
    "cherryshu"
  ],
  "Hittokiri": [
    342488,
    176405,
    "hittokiri"
  ],
  "Игрок": [
    350087,
    159058,
    "player"
  ],
  "Player": [
    394612,
    100169,
    null
  ],
  "ВОЛОДЯ": [
    281283,
    213432,
    null
  ],
  "Vitos": [
    310683,
    148219,
    null
  ],
  "Gestiya": [
    302808,
    140025,
    null
  ],
  "AmicableYeoman1": [
    449159,
    219163,
    "amicableyeoman1"
  ],
  "Drefgond": [
    423619,
    190220,
    "drefgond"
  ],
  "Krisricci": [
    313759,
    122243,
    null
  ],
  "vit.l": [
    291422,
    142152,
    null
  ],
  "O3Marvin": [
    363515,
    160023,
    "o3marvin"
  ],
  "MuddyCalamity23": [
    396586,
    122818,
    "muddycalamity23"
  ],
  "Мэри!!!!!": [
    281212,
    115141,
    null
  ],
  "Kalowoodos": [
    280873,
    110272,
    null
  ]
};
// Confirmed hero IDs from the supplied screenshots, in left-to-right order.
const heroTeams = {
  "PhysicalOfficer": [
    "iris",
    "morrigan",
    "tempus",
    "drayne",
    "electra-von-grave"
  ],
  "Koly": [
    "dorian",
    "iris",
    "tempus",
    "byrna",
    "corvus"
  ],
  "Win": [
    "dorian",
    "phobos",
    "iris",
    "dante",
    "corvus"
  ],
  "LightlyPure": [
    "miu",
    "faceless",
    "dante",
    "drayne",
    "astaroth"
  ],
  "Nord stream": [
    "ginger",
    "heidi",
    "maya",
    "galahad",
    "aurora"
  ],
  "TIM": [
    "folio",
    "morrigan",
    "maya",
    "galahad",
    "astaroth"
  ],
  "GroWorm": [
    "iris",
    "jhu",
    "dante",
    "byrna",
    "leonel"
  ],
  "eiei1313": [
    "miu",
    "maya",
    "drayne",
    "galahad",
    "astaroth"
  ],
  "°=(°√°)=° ЫЧ!": [
    "folio",
    "amira",
    "somna",
    "satori",
    "leonel"
  ],
  "АрбалетМятный93": [
    "cascade",
    "jhu",
    "byrna",
    "drayne",
    "electra-von-grave"
  ],
  "AmberClassroom1": [
    "somna",
    "crow",
    "byrna",
    "drayne",
    "leonel"
  ],
  "Raggy": [
    "aidan",
    "iris",
    "byrna",
    "kayla",
    "leonel"
  ],
  "Ворона": [
    "artemis",
    "morrigan",
    "leonel",
    "cleaver",
    "aurora"
  ],
  "LjRash": [
    "cascade",
    "folio",
    "somna",
    "byrna",
    "leonel"
  ],
  "FarrukhSher": [
    "folio",
    "iris",
    "jhu",
    "byrna",
    "leonel"
  ],
  "CherryShu": [
    "kendle",
    "dorian",
    "jhu",
    "crow",
    "leonel"
  ],
  "Hittokiri": [
    "polaris",
    "somna",
    "byrna",
    "leonel",
    "julius"
  ],
  "Игрок": [
    "crow",
    "byrna",
    "alvanor",
    "mushy-and-shroom",
    "cleaver"
  ],
  "Player": [
    "ginger",
    "folio",
    "morrigan",
    "maya",
    "galahad"
  ],
  "ВОЛОДЯ": [
    "folio",
    "maya",
    "kayla",
    "drayne",
    "astaroth"
  ],
  "Vitos": [
    "octavia",
    "iris",
    "morrigan",
    "dante",
    "corvus"
  ],
  "Gestiya": [
    "byrna",
    "satori",
    "drayne",
    "leonel",
    "electra-von-grave"
  ],
  "AmicableYeoman1": [
    "aidan",
    "crow",
    "kayla",
    "leonel",
    "cleaver"
  ],
  "Drefgond": [
    "miu",
    "folio",
    "byrna",
    "satori",
    "electra-von-grave"
  ],
  "Krisricci": [
    "lars",
    "krista",
    "byrna",
    "leonel",
    "julius"
  ],
  "vit.l": [
    "phobos",
    "ginger",
    "keira",
    "maya",
    "aurora"
  ],
  "O3Marvin": [
    "martha",
    "jhu",
    "maya",
    "leonel",
    "astaroth"
  ],
  "MuddyCalamity23": [
    "somna",
    "iris",
    "dante",
    "byrna",
    "corvus"
  ],
  "Мэри!!!!!": [
    "jhu",
    "maya",
    "drayne",
    "leonel",
    "galahad"
  ],
  "Kalowoodos": [
    "polaris",
    "isaac",
    "folio",
    "judge",
    "julius"
  ]
};
// Guild roster and weekly activity; independent of hero compositions.
const playerActivity = [
['Kalowoodos',[3020,3102,2913,6616,11546,9940,2188],39325],
['Игрок',[4076,4895,3916,3664,1872,4350,2174],24947],
['MuddyCalamity23',[6494,4081,2080,5574,2324,1906,1830],24289],
['LjRash',[2920,3906,4462,3122,3846,2404,2650],23310],
['PhysicalOfficer',[1570,8642,3344,2564,2270,1056,3208],22654],
['Win',[3145,3268,4317,4319,4332,1588,700],21669],
['ВОЛОДЯ',[2288,5449,3562,2184,2196,1924,3714],21317],
['Koly',[2306,4756,3592,2638,1972,1728,2736],19728],
['CherryShu',[2386,3849,3405,3742,2018,2068,1878],19346],
['FarrukhSher',[3030,3068,2956,2940,2794,1618,2720],19126],
['TIM',[2632,3922,2698,2328,3186,1978,1708],18452],
['Hittokiri',[3386,3044,2232,2632,3514,1596,1746],18150],
['Drefgond',[1476,6005,2628,2326,2014,1328,1936],17713],
['Мэри!!!!!',[2401,2286,1893,3478,3216,2088,2254],17616],
['Vitos',[1772,2366,2312,3286,2698,2698,2292],17424],
['Ворона',[2332,3058,2920,2634,2544,1760,2100],17348],
['AmicableYeoman1',[2012,3268,2024,3964,3076,2496,6],16846],
['GroWorm',[2350,2210,2136,2316,2312,3227,1994],16545],
['°=(°√°)=° ЫЧ!',[2284,3235,2638,2934,1594,1794,1704],16183],
['LightlyPure',[1766,3710,2266,2216,2100,1792,1964],15814],
['AmberClassroom1',[1788,3028,3528,2328,2366,638,1224],14900],
['Raggy',[2198,2070,2084,1270,3856,2602,0],14080],
['vit.l',[1956,2534,2478,1938,0,1522,3614],14042],
['Krisricci',[3976,1954,2444,1834,1478,1338,0],13024],
['Gestiya',[1668,3400,2336,1817,712,988,1604],12525],
['Player',[1420,2610,1830,1650,1636,1198,1442],11786],
['АрбалетМятный93',[1742,2450,1574,1452,1114,1042,2174],11548],
['eiei1313',[2014,1276,1522,356,2540,2242,1244],11194],
['Nord stream',[4646,1560,700,1312,700,700,0],9618],
['O3Marvin',[1426,1220,1438,6,1848,1070,700],7708]
];
export const players = playerActivity.map(([nickname,activity,activityTotal],i)=>{
  const k=known[nickname];
  return { rank:i+1,nickname,activity,activityTotal,heroPower:k?.[0]??null,titanPower:k?.[1]??null,
    heroTeam:heroTeams[nickname]??null,
    titanImage:k?.[2]?`assets/teams/${k[2]}-titans.webp`:null };
});
export const knownCompositionCount = players.filter(p=>p.heroTeam?.length).length;
