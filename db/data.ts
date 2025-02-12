export const lineData = {
    Revenue: [
        5, 5, 10, 12, 22, 28, 25, 30, 30, 35, 37, 40, 40, 35, 28, 28, 29, 30, 30, 35, 37, 37,
        34, 30, 34, 34, 30, 30, 30, 20, 20,
    ],

}

export const dataUserTransaction = [
    {
        id: 1,
        time: '1 sec ago',
        tokenIcon: '/crypto-icons/table-1.png',
        cost: '32.12',
        revenue: '87.11',
        profit: '54.99',
        block: 21101122,
        delay: 11,
        dex: ['Jupiter', '/crypto-icons/image-4.png'],
        type: 'FrontRunning',
        metadata: {
            timeSpent: '306ms',
            jupiterQuoteTime: '303ms',
        },
    },
    {
        id: 2,
        time: '35 sec ago',
        tokenIcon: '/crypto-icons/table-4.png',
        cost: '25.65',
        revenue: '76.45',
        profit: '50.80',
        block: 21101120,
        delay: 2,
        dex: ['Orca', '/crypto-icons/image-5.png'],
        type: 'BackRunning',
        metadata: {
            timeSpent: '312ms',
            jupiterQuoteTime: '307ms',
        },
    },
    {
        id: 3,
        time: '1 ago',
        tokenIcon: '/crypto-icons/table-5.png',
        cost: '45.20',
        revenue: '110.15',
        profit: '64.95',
        block: 21101120,
        delay: 3,
        dex: ['Serum', '/crypto-icons/image-3.png'],
        type: 'Sandwich',
        metadata: {
            timeSpent: '316ms',
            jupiterQuoteTime: '311ms',
        },
    },
    {
        id: 4,
        time: '7 ago',
        tokenIcon: '/crypto-icons/table-2.png',
        cost: '38.00',
        revenue: '92.50',
        profit: '54.50',
        block: 21101119,
        delay: 7,
        dex: ['BetDEX', '/crypto-icons/image-2.png'],
        type: 'BackRunning',
        metadata: {
            timeSpent: '306ms',
            jupiterQuoteTime: '303ms',
        },
    },
    {
        id: 5,
        time: '15 ago',
        tokenIcon: '/crypto-icons/table-3.png',
        cost: '29.75',
        revenue: '84.30',
        profit: '54.55',
        block: 21101117,
        delay: 12,
        dex: ['Lifinity', '/crypto-icons/image-1.png'],
        type: 'Sandwich',
        metadata: {
            timeSpent: '312ms',
            jupiterQuoteTime: '307ms',
        },
    },
];

export const dataWalletTransitions = [
    {
        id: 1,
        signature: '2FsfeGgYV3Jwzx39...',
        block: 306750858,
        time: '18 secs ago',
        type: 'Buy',
        by: 'J6EP4q6GuZ...auW551oir7',
        value: '0.0004332',
        fee: '0.00003188',
    },
    {
        id: 2,
        signature: 'NLkPEAXUSWy8qUo...',
        block: 306750852,
        time: '20 secs ago',
        type: 'Buy',
        by: 'J6EP4q6GuZ...auW551oir7',
        value: '0.0004332',
        fee: '0.00003188',

    },
    {
        id: 3,
        signature: '2tYTG28kBiPvmbkZ...',
        block: 306750845,
        time: '23 secs ago',
        type: 'Buy',
        by: 'J6EP4q6GuZ...auW551oir7',
        value: '0.0004332',
        fee: '0.00003188',

    },
    {
        id: 4,
        signature: '267XtK2y2inr44dpW...',
        block: 306750826,
        time: '25 secs ago',
        type: 'Sell',
        by: 'J6EP4q6GuZ...auW551oir7',
        value: '1.5709',
        fee: '0.00003188',

    },
    {
        id: 5,
        signature: '4CpN8hHVJerJbWH...',
        block: 306750812,
        time: '28 secs ago',
        type: 'Buy',
        by: 'J6EP4q6GuZ...auW551oir7',
        value: '0.0004332',
        fee: '0.00003188',

    },
];


export const dataSetting = [
    {
        id: 0,
        pool: 'Netherlands',
        ping: 45.6,
        flag: 'https://flagcdn.com/nl.svg',
        checked: false
    },
    {
        id: 1,
        pool: 'San Diego (USA)',
        ping: 30.0,
        flag: 'https://flagcdn.com/us.svg',
        checked: true
    },
    {
        id: 2,
        pool: 'Singapoor',
        ping: 55.6,
        flag: 'https://flagcdn.com/sg.svg',
        checked: false
    },
    {
        id: 3,
        pool: 'Denmark',
        ping: 12.1,
        flag: 'https://flagcdn.com/dk.svg',
        checked: false
    },
    {
        id: 4,
        pool: 'Sweden',
        ping: 37.7,
        flag: 'https://flagcdn.com/se.svg',
        checked: false
    },
];

export const lineAndColumnData = {
    profit: {
        sandwich: [20, 18, 25, 18, 22, 17, 22],
        frontRunning: [12, 11, 9, 10, 12, 13, 15],
        backRunning: [7, 7, 9, 8, 9.6, 7, 6.5],
        count: [2, 2.3, 2, 2.2, 2.1, 2.3, 2.2],
    },
    volume: {
        sandwich: [12, 10, 8, 7, 9, 6, 11],
        frontRunning: [7, 9, 5, 6, 8, 7, 9],
        backRunning: [5, 4, 6, 5, 6.2, 5, 4.5],
        count: [2.2, 2.3, 2.3, 1.9, 2.1, 2.3, 2.2],
    }
}

export const lineCompassData = {
    labels: [60, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30],
    data: [420, 580, 380, 500, 420, 500, 370, 550, 390, 420, 400, 440, 400, 420, 370, 470],
};

export const dataJito = [
    {
        id: 0,
        name: 'Amsterdam',
        image: 'https://flagcdn.com/hu.svg',
        checked: true
    },
    {
        id: 1,
        name: 'Frankfurt',
        image: 'https://flagcdn.com/de.svg',
        checked: true
    },
    {
        id: 2,
        name: 'New York',
        image: 'https://flagcdn.com/us.svg',
        checked: true
    },
    {
        id: 3,
        name: 'Tokyo',
        image: 'https://flagcdn.com/jp.svg',
        checked: true
    },
    {
        id: 4,
        name: 'Salt Lake City',
        image: 'https://flagcdn.com/us.svg',
        checked: true
    },
];

export const dataPools = [
    {
        id: 0,
        title: 'JitoSOL',
        icon: '/crypto-icons/jito-sol.png',
        volume: '14.5 M',
        checked: true
    },
    {
        id: 1,
        title: 'aeroSOL',
        icon: '/crypto-icons/aero-sol.png',
        volume: '153.7K',
        checked: true
    },
    {
        id: 2,
        title: 'mSOL',
        icon: '/crypto-icons/m-sol.png',
        volume: '5.4M',
        checked: true
    },
    {
        id: 3,
        title: 'BNSOL',
        icon: '/crypto-icons/bn-sol.png',
        volume: '5.0M',
        checked: true
    },
    {
        id: 4,
        title: 'JupSOL',
        icon: '/crypto-icons/jup-sol.png',
        volume: '4.0M',
        checked: true
    },
];

export const slots = [
    {
        "slot": 309493829,
        "leader": "binance staking",
        "timestamp": "12s ago",
        "sandwiches": [
            {
                "participants": [
                    { "role": "Attacker", "id": "5SCN3Tz" },
                    { "role": "Program", "id": "vpeNALD" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "4.502B" },
                        { "currency": "SOL", "value": "998,494,911" },
                        { "currency": "SOL", "value": "4.610B" }
                    ],
                    "to": [
                        { "currency": "5hryCe", "value": "31609.723B" },
                        { "currency": "5hryCe", "value": "6467.684B" },
                        { "currency": "5hryCe", "value": "31487.408B" }
                    ]
                }
            },
            {
                "participants": [
                    { "role": "Attacker", "id": "8kSw5gT" },
                    { "role": "Program", "id": "45wPVSF" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "GUY2025", "value": "1,336,500.2" },
                        { "currency": "SOL", "value": "2.941" },
                        { "currency": "SOL", "value": "5.288" }
                    ],
                    "to": [
                        { "currency": "GUY2025", "value": "2,557,294.0" },
                        { "currency": "GUY2025", "value": "1,336,500.2" },
                        { "currency": "SOL", "value": "2.724" }
                    ]
                }
            },
            {
                "participants": [
                    { "role": "Attacker", "id": "D1h3QYg" },
                    { "role": "Program", "id": "vpeNALD" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "10.298" },
                        { "currency": "SOL", "value": "0.948" },
                        { "currency": "SOL", "value": "10.306" }
                    ],
                    "to": [
                        { "currency": "FNyA5y", "value": "32,483,335." },
                        { "currency": "FNyA5y", "value": "2,875,578.7" },
                        { "currency": "FNyA5y", "value": "32,457,181." }
                    ]
                }
            }
        ]
    },
    {
        "slot": 309493826,
        "leader": "Hz5aLvpKScNWoe9",
        "timestamp": "13s ago",
        "sandwiches": [
            {
                "participants": [
                    { "role": "Attacker", "id": "7BQgXfo" },
                    { "role": "Program", "id": "vpeNALD" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "0.599" },
                        { "currency": "SOL", "value": "0.260" },
                        { "currency": "SOL", "value": "0.599" }
                    ],
                    "to": [
                        { "currency": "WYD", "value": "2,341,911.1" },
                        { "currency": "WYD", "value": "1,006,058.3" },
                        { "currency": "WYD", "value": "2,339,465.3" }
                    ]
                }
            },
            {
                "participants": [
                    { "role": "Attacker", "id": "75jtF8i" },
                    { "role": "Program", "id": "45wPVSF" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "GUY2025", "value": "2,161,371.7" },
                        { "currency": "SOL", "value": "4.747" },
                        { "currency": "SOL", "value": "0.447" }
                    ],
                    "to": [
                        { "currency": "GUY2025", "value": "211,511.18" },
                        { "currency": "GUY2025", "value": "2,161,371.7" },
                        { "currency": "SOL", "value": "4.738" }
                    ]
                }
            }
        ]
    },
    {
        "slot": 309493824,
        "leader": "Hz5aLvpKScNWoe9",
        "timestamp": "14s ago",
        "sandwiches": [
            {
                "participants": [
                    { "role": "Attacker", "id": "GAWPLNx" },
                    { "role": "Program", "id": "vpeNALD" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "3.985" },
                        { "currency": "SOL", "value": "3.921" },
                        { "currency": "SOL", "value": "4.150" }
                    ],
                    "to": [
                        { "currency": "GUY2025", "value": "1,788,682.7" },
                        { "currency": "GUY2025", "value": "1,661,753.4" },
                        { "currency": "GUY2025", "value": "1,770,635.1" }
                    ]
                }
            }
        ]
    },
    {
        "slot": 309493822,
        "leader": "Figment",
        "timestamp": "15s ago",
        "sandwiches": [
            {
                "participants": [
                    { "role": "Attacker", "id": "C9Wxwm8" },
                    { "role": "Program", "id": "45wPVSF" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "1.218" },
                        { "currency": "SOL", "value": "2.769" },
                        { "currency": "SOL", "value": "1.218" }
                    ],
                    "to": [
                        { "currency": "CRISPR", "value": "292,625.13" },
                        { "currency": "CRISPR", "value": "656,402.97" },
                        { "currency": "CRISPR", "value": "288,732.91" }
                    ]
                }
            }
        ]
    },
    {
        "slot": 309493821,
        "leader": "Figment",
        "timestamp": "16s ago",
        "sandwiches": [
            {
                "participants": [
                    { "role": "Attacker", "id": "5v6YRBT" },
                    { "role": "Program", "id": "DgakD8x" }
                ],
                "transactions": {
                    "from": [
                        { "currency": "SOL", "value": "4.000" },
                        { "currency": "SOL", "value": "4.000" },
                        { "currency": "SOL", "value": "4.049" }
                    ],
                    "to": [
                        { "currency": "BUY", "value": "14,067,520." },
                        { "currency": "BUY", "value": "13,827,843." },
                        { "currency": "BUY", "value": "14,067,520." }
                    ]
                }
            }
        ]
    }
]

export const walletPerformanceCard = [
    {
        "title": "Realized PNL Solana Wallet PNL Counter",
        "shortTitle": "Realized PNL",
        "value": 255607690,
        "typeOfValue": "USD"
    },
    {
        "title": "Realized Losses Solana Wallet PNL Counter",
        "shortTitle": "Realized Losses",
        "value": -14.037,
        "typeOfValue": "USD"
    },
    {
        "title": "Unrealized PNL Solana Wallet PNL Counter",
        "shortTitle": "Unrealized PNL",
        "value": 63687,
        "typeOfValue": "USD"
    },
    {
        "title": "LossToProfit Ratio Solana Wallet PNL Counter",
        "shortTitle": "LossToProfit Ratio",
        "value": 0.05,
        "typeOfValue": "%"
    },
    {
        "title": "Total PNL Solana Wallet PNL Counter",
        "shortTitle": "Total PNL",
        "value": 25624455,
        "typeOfValue": "USD"
    },
    {
        "title": "Num Tokens Solana Wallet PNL Counter",
        "shortTitle": "Num Tokens",
        "value": 41642,
        "typeOfValue": ""
    },
    {
        "title": "Realized Wins Solana Wallet PNL Counter",
        "shortTitle": "Realized Wins",
        "value": 41485,
        "typeOfValue": ""
    },
    {
        "title": "Realized Losses Solana Wallet PNL Counter",
        "shortTitle": "Realized Losses",
        "value": 6,
        "typeOfValue": ""
    },
    {
        "title": "Realized Winrate Solana Wallet PNL Counter",
        "shortTitle": "Realized Winrate",
        "value": 99.99,
        "typeOfValue": "%"
    },
    {
        "title": "",
        "shortTitle": "Total Winrate",
        "value": 99.99,
        "typeOfValue": "%"
    }
]

export const titleQueryResultsWallet = [
    'Token',
    'Is Pump',
    'GMGN',
    'USD Buys',
    'USD Sells',
    'USD PNL',
    'ROI Real',
    'Token Balance',
    'Price Sold Last',
    'Token USD',
    'Total PNL',
    'TXNS Buy',
    'TXNS Sell',
    'Buy First Time',
    'Sell Time',
];

export const dataQueryResultsWallet = [
    {
        "token": "BBB",
        "isPump": false,
        "gmgn": "gmgn",
        "usdBuys": 249.12,
        "usdSells": 66.11,
        "usdPnl": 22.17,
        "roiReal": "27%",
        "tokenBalance": 0,
        "priceSoldLast": "$54.99",
        "tokenUsd": "$54.99",
        "totalPnl": 22.17,
        "txnsBuy": 1,
        "txnsSell": 1,
        "buyFirstTime": "2024.06.13 20:30:01",
        "sellTime": "2024.06.13 20:30:01"
    },
    {
        "token": "JUGS",
        "isPump": true,
        "gmgn": "gmgn",
        "usdBuys": 933.65,
        "usdSells": 76.45,
        "usdPnl": 19.92,
        "roiReal": "2%",
        "tokenBalance": 0,
        "priceSoldLast": "$50.80",
        "tokenUsd": "$50.80",
        "totalPnl": 19.92,
        "txnsBuy": 1,
        "txnsSell": 1,
        "buyFirstTime": "2024.06.13 20:27:43",
        "sellTime": "2024.06.13 20:27:43"
    },
    {
        "token": "DDaddy",
        "isPump": false,
        "gmgn": "gmgn",
        "usdBuys": 2539.20,
        "usdSells": 110.15,
        "usdPnl": 44.86,
        "roiReal": "2%",
        "tokenBalance": 0,
        "priceSoldLast": "$64.95",
        "tokenUsd": "$64.95",
        "totalPnl": 44.86,
        "txnsBuy": 1,
        "txnsSell": 1,
        "buyFirstTime": "2024.06.13 20:16:15",
        "sellTime": "2024.06.13 20:16:15"
    },
    {
        "token": "Meow",
        "isPump": true,
        "gmgn": "gmgn",
        "usdBuys": 1040.00,
        "usdSells": 92.50,
        "usdPnl": 24.23,
        "roiReal": "2%",
        "tokenBalance": 0,
        "priceSoldLast": "$54.50",
        "tokenUsd": "$54.50",
        "totalPnl": 24.23,
        "txnsBuy": 1,
        "txnsSell": 2,
        "buyFirstTime": "2024.06.13 20:12:03",
        "sellTime": "2024.06.13 20:12:03"
    },
    {
        "token": "DBLZ",
        "isPump": true,
        "gmgn": "gmgn",
        "usdBuys": 12188.75,
        "usdSells": 284.30,
        "usdPnl": 201.21,
        "roiReal": "1%",
        "tokenBalance": 0,
        "priceSoldLast": "$54.55",
        "tokenUsd": "$54.55",
        "totalPnl": 201.21,
        "txnsBuy": 1,
        "txnsSell": 1,
        "buyFirstTime": "2024.06.13 20:06:15",
        "sellTime": "2024.06.13 20:06:15"
    }
]
