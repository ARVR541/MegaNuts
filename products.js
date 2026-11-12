const products = [
  {
    "id": "105",
    "source": "https://frutoss.ru/greckiy-oreh-babochka-ekstra",
    "name": "Грецкий орех Бабочка Экстра",
    "price": 869.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/105.webp",
    "variants": [
      {
        "id": "5022",
        "weight": "0,5 кг",
        "price": 450.0
      },
      {
        "id": "4646",
        "weight": "5 кг",
        "price": 3960.0
      }
    ],
    "facts": {
      "Происхождение": "Россия"
    },
    "cardTitle": "Грецкий орех",
    "cardNote": "Бабочка Экстра"
  },
  {
    "id": "7597",
    "source": "https://frutoss.ru/mindal-nonparel-krupnyj-ekstra-chili",
    "name": "Миндаль Нонпарель крупный Экстра Чили",
    "price": 1484.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/7597.webp",
    "variants": [
      {
        "id": "7598",
        "weight": "0,5 кг",
        "price": 757.0
      },
      {
        "id": "7599",
        "weight": "5 кг",
        "price": 6930.0
      }
    ],
    "facts": {
      "Происхождение": "Чили"
    },
    "cardTitle": "Миндаль Нонпарель",
    "cardNote": "крупный · Экстра · Чили"
  },
  {
    "id": "5122",
    "source": "https://frutoss.ru/fistashka-zharenaya-solenaya-ekstra-yuzhnaya-amerika-05-kg",
    "name": "Фисташка СВЕЖАЯ жареная соленая Экстра Америка",
    "price": 1004.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5122.webp",
    "variants": [
      {
        "id": "296",
        "weight": "1 кг",
        "price": 1978.0
      },
      {
        "id": "2815",
        "weight": "5 кг",
        "price": 9295.0
      }
    ],
    "facts": {
      "Обработка": "Обжарка"
    },
    "cardTitle": "Фисташка",
    "cardNote": "свежая, жареная, солёная · Экстра · Америка"
  },
  {
    "id": "297",
    "source": "https://frutoss.ru/funduk-ochishchennyy-ekstra",
    "name": "Фундук без обжарки очищенный крупный",
    "price": 1415.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/297.webp",
    "variants": [
      {
        "id": "5130",
        "weight": "0,5 кг",
        "price": 723.0
      },
      {
        "id": "2822",
        "weight": "5 кг",
        "price": 6545.0
      }
    ],
    "facts": {
      "Обработка": "Без обжарки"
    },
    "cardTitle": "Фундук",
    "cardNote": "без обжарки, очищенный, крупный"
  },
  {
    "id": "7585",
    "source": "https://frutoss.ru/makadamiya-v-skorlupe-krupnaya-5a-1",
    "name": "Макадамия в скорлупе крупная 5А",
    "price": 381.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/7585.webp",
    "variants": [
      {
        "id": "3044",
        "weight": "1 кг",
        "price": 732.0
      },
      {
        "id": "4570",
        "weight": "5 кг",
        "price": 3300.0
      }
    ],
    "cardTitle": "Макадамия",
    "cardNote": "в скорлупе, крупная · 5А"
  },
  {
    "id": "2307",
    "source": "https://frutoss.ru/pekan-2",
    "name": "Пекан высший сорт",
    "price": 1766.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/2307.webp",
    "variants": [
      {
        "id": "5099",
        "weight": "0,5 кг",
        "price": 898.0
      },
      {
        "id": "2837",
        "weight": "5 кг",
        "price": 8250.0
      }
    ],
    "cardTitle": "Пекан",
    "cardNote": "высший сорт"
  },
  {
    "id": "1647",
    "source": "https://frutoss.ru/greckij-oreh-v-skorlupe-chili",
    "name": "Грецкий орех в скорлупе Экстра Чили",
    "price": 754.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/1647.webp",
    "variants": [
      {
        "id": "3142",
        "weight": "5 кг",
        "price": 3395.0
      }
    ],
    "facts": {
      "Происхождение": "Чили"
    },
    "cardTitle": "Грецкий орех",
    "cardNote": "в скорлупе · Экстра · Чили"
  },
  {
    "id": "98",
    "source": "https://frutoss.ru/shop/orehi/arahis/arahis-ochishchennyy-argentina",
    "name": "Арахис очищенный Аргентина",
    "price": 220.0,
    "weight": "1 кг",
    "category": "nuts",
    "image": "assets/catalog/98.webp",
    "variants": [
      {
        "id": "5028",
        "weight": "0,5 кг",
        "price": 120.0
      },
      {
        "id": "4642",
        "weight": "5 кг",
        "price": 1100.0
      }
    ],
    "facts": {
      "Происхождение": "Аргентина"
    },
    "cardTitle": "Арахис",
    "cardNote": "очищенный · Аргентина"
  },
  {
    "id": "5057",
    "source": "https://frutoss.ru/shop/orehi/keshyu-v-myode-i-kunzhute-05-kg",
    "name": "Кешью в мёде и кунжуте",
    "price": 455.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5057.webp",
    "variants": [
      {
        "id": "1585",
        "weight": "1 кг",
        "price": 880.0
      },
      {
        "id": "2783",
        "weight": "5 кг",
        "price": 4010.0
      }
    ],
    "cardTitle": "Кешью",
    "cardNote": "в мёде и кунжуте"
  },
  {
    "id": "5053",
    "source": "https://frutoss.ru/shop/orehi/keshyu-zharenyj-1",
    "name": "Кешью жареный",
    "price": 650.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5053.webp",
    "variants": [
      {
        "id": "120",
        "weight": "1 кг",
        "price": 1269.0
      },
      {
        "id": "2784",
        "weight": "5 кг",
        "price": 5865.0
      }
    ],
    "facts": {
      "Обработка": "Обжарка"
    },
    "cardTitle": "Кешью",
    "cardNote": "жареный"
  },
  {
    "id": "7779",
    "source": "https://frutoss.ru/shop/keshyu-zharenyj-krupnyj-1",
    "name": "Кешью жареный Крупный",
    "price": 798.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/7779.webp",
    "variants": [
      {
        "id": "7778",
        "weight": "1 кг",
        "price": 1566.0
      },
      {
        "id": "7780",
        "weight": "5 кг",
        "price": 7310.0
      }
    ],
    "facts": {
      "Обработка": "Обжарка"
    },
    "cardTitle": "Кешью",
    "cardNote": "жареный, крупный"
  },
  {
    "id": "5082",
    "source": "https://frutoss.ru/shop/orehi/mindal-v-kunzhute-05-kg",
    "name": "Миндаль в кунжуте",
    "price": 474.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5082.webp",
    "variants": [
      {
        "id": "1560",
        "weight": "1 кг",
        "price": 918.0
      },
      {
        "id": "2798",
        "weight": "5 кг",
        "price": 4160.0
      }
    ],
    "cardTitle": "Миндаль",
    "cardNote": "в кунжуте"
  },
  {
    "id": "5072",
    "source": "https://frutoss.ru/shop/orehi/mindal-v-sahare-05-kg",
    "name": "Миндаль в сахаре",
    "price": 388.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5072.webp",
    "variants": [
      {
        "id": "2144",
        "weight": "1 кг",
        "price": 746.0
      },
      {
        "id": "2799",
        "weight": "5 кг",
        "price": 3355.0
      }
    ],
    "cardTitle": "Миндаль",
    "cardNote": "в сахаре"
  },
  {
    "id": "5076",
    "source": "https://frutoss.ru/shop/orehi/mindal-v-skorlupe-zharenyj-05-kg",
    "name": "Миндаль в скорлупе жареный",
    "price": 757.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5076.webp",
    "variants": [
      {
        "id": "2196",
        "weight": "1 кг",
        "price": 1483.0
      },
      {
        "id": "2801",
        "weight": "5 кг",
        "price": 6865.0
      }
    ],
    "facts": {
      "Обработка": "Обжарка"
    },
    "cardTitle": "Миндаль",
    "cardNote": "в скорлупе, жареный"
  },
  {
    "id": "5114",
    "source": "https://frutoss.ru/shop/orehi/fistashka-zharenaya-naturalnaya-turciya-05-kg",
    "name": "Фисташка жареная натуральная Турция",
    "price": 1444.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5114.webp",
    "variants": [
      {
        "id": "3627",
        "weight": "1 кг",
        "price": 2857.0
      },
      {
        "id": "3628",
        "weight": "5 кг",
        "price": 13475.0
      }
    ],
    "facts": {
      "Происхождение": "Турция",
      "Обработка": "Обжарка"
    },
    "cardTitle": "Фисташка",
    "cardNote": "жареная, натуральная · Турция"
  },
  {
    "id": "5126",
    "source": "https://frutoss.ru/shop/orehi/fistashka-zharenaya-s-shafranom-yuzhnaya-amerika-05-kg",
    "name": "Фисташка жареная с шафраном Южная Америка",
    "price": 993.0,
    "weight": "0,5 кг",
    "category": "nuts",
    "image": "assets/catalog/5126.webp",
    "variants": [
      {
        "id": "155",
        "weight": "1 кг",
        "price": 1955.0
      },
      {
        "id": "2813",
        "weight": "5 кг",
        "price": 9130.0
      }
    ],
    "facts": {
      "Происхождение": "Южная Америка",
      "Обработка": "Обжарка"
    },
    "cardTitle": "Фисташка",
    "cardNote": "жареная с шафраном · Южная Америка"
  },
  {
    "id": "5178",
    "source": "https://frutoss.ru/finiki-korolevskie-1-kg",
    "name": "Финики Королевские",
    "price": 1397.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/5178.webp",
    "variants": [
      {
        "id": "4597",
        "weight": "5 × 1 кг",
        "price": 6985.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Финики",
    "cardNote": "Королевские"
  },
  {
    "id": "6491",
    "source": "https://frutoss.ru/kuraga-shokoladnaya-1-sort-tadzhikistan-1-kg",
    "name": "Курага НАТУРАЛЬНАЯ Таджикистан",
    "price": 900.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/6491.webp",
    "variants": [
      {
        "id": "6492",
        "weight": "5 кг",
        "price": 4090.0
      }
    ],
    "facts": {
      "Происхождение": "Таджикистан",
      "Обработка": "Сушка"
    },
    "cardTitle": "Курага",
    "cardNote": "натуральная · Таджикистан"
  },
  {
    "id": "483",
    "source": "https://frutoss.ru/shop/suhofrukty/izum-terma-uzbekistan",
    "name": "Изюм Терма Узбекистан",
    "price": 457.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/483.webp",
    "variants": [
      {
        "id": "5043",
        "weight": "0,5 кг",
        "price": 244.0
      },
      {
        "id": "2911",
        "weight": "5 кг",
        "price": 2035.0
      }
    ],
    "facts": {
      "Происхождение": "Узбекистан",
      "Обработка": "Сушка"
    },
    "cardTitle": "Изюм Терма",
    "cardNote": "Узбекистан"
  },
  {
    "id": "2235",
    "source": "https://frutoss.ru/chernosliv-sushyonyj-armeniya",
    "name": "Чернослив чёрный Армения",
    "price": 944.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/2235.webp",
    "variants": [
      {
        "id": "4844",
        "weight": "5 кг",
        "price": 4290.0
      }
    ],
    "facts": {
      "Происхождение": "Армения",
      "Обработка": "Сушка"
    },
    "cardTitle": "Чернослив",
    "cardNote": "чёрный · Армения"
  },
  {
    "id": "2422",
    "source": "https://frutoss.ru/shop/suhofrukty/izyum-golden-iran-1",
    "name": "Изюм Голден Иран",
    "price": 575.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/2422.webp",
    "variants": [
      {
        "id": "5041",
        "weight": "0,5 кг",
        "price": 303.0
      },
      {
        "id": "2960",
        "weight": "5 кг",
        "price": 2565.0
      }
    ],
    "facts": {
      "Происхождение": "Иран",
      "Обработка": "Сушка"
    },
    "cardTitle": "Изюм Голден",
    "cardNote": "Иран"
  },
  {
    "id": "3100",
    "source": "https://frutoss.ru/shop/suhofrukty/inzhir-belyj-armeniya",
    "name": "Инжир белый Армения",
    "price": 1283.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/3100.webp",
    "variants": [
      {
        "id": "3133",
        "weight": "5 кг",
        "price": 5935.0
      }
    ],
    "facts": {
      "Происхождение": "Армения",
      "Обработка": "Сушка"
    },
    "cardTitle": "Инжир",
    "cardNote": "белый · Армения"
  },
  {
    "id": "257",
    "source": "https://frutoss.ru/shop/suhofrukty/inzhir-na-verevke",
    "name": "Инжир на верёвке №1",
    "price": 1613.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/257.webp",
    "variants": [
      {
        "id": "2917",
        "weight": "5 кг",
        "price": 7535.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Инжир",
    "cardNote": "на верёвке №1"
  },
  {
    "id": "256",
    "source": "https://frutoss.ru/shop/suhofrukty/inzhir-dzhambo-naturalnyy-krupnyy",
    "name": "Инжир НАТУРАЛЬНЫЙ Джамбо",
    "price": 1510.0,
    "weight": "1 кг",
    "category": "dried-fruit",
    "image": "assets/catalog/256.webp",
    "variants": [
      {
        "id": "4665",
        "weight": "5 кг",
        "price": 6985.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Инжир Джамбо",
    "cardNote": "натуральный"
  },
  {
    "id": "190",
    "source": "https://frutoss.ru/kunzhut-belyy",
    "name": "Кунжут светлый",
    "price": 429.0,
    "weight": "1 кг",
    "category": "seeds",
    "image": "assets/catalog/190.webp",
    "variants": [
      {
        "id": "5059",
        "weight": "0,5 кг",
        "price": 230.0
      },
      {
        "id": "2845",
        "weight": "5 кг",
        "price": 1925.0
      }
    ],
    "cardTitle": "Кунжут",
    "cardNote": "светлый"
  },
  {
    "id": "281",
    "source": "https://frutoss.ru/shop/semena-bobovye/semechki-dlya-ptic/semechka-krupnaya-neochishchennaya",
    "name": "Семечка подсолнечника неочищенная",
    "price": 105.0,
    "weight": "1 кг",
    "category": "seeds",
    "image": "assets/catalog/281.webp",
    "variants": [
      {
        "id": "2866",
        "weight": "5 кг",
        "price": 455.0
      }
    ],
    "cardTitle": "Семечка подсолнечника",
    "cardNote": "неочищенная"
  },
  {
    "id": "5097",
    "source": "https://frutoss.ru/shop/semena-bobovye/semechki-dlya-ptic/semechka-podsolnechnika-ochishennaya-05-kg",
    "name": "Семечка подсолнечника очищенная",
    "price": 90.0,
    "weight": "0,5 кг",
    "category": "seeds",
    "image": "assets/catalog/5097.webp",
    "variants": [
      {
        "id": "145",
        "weight": "1 кг",
        "price": 159.0
      },
      {
        "id": "2869",
        "weight": "5 кг",
        "price": 690.0
      }
    ],
    "cardTitle": "Семечка подсолнечника",
    "cardNote": "очищенная"
  },
  {
    "id": "5089",
    "source": "https://frutoss.ru/shop/semena-bobovye/semechki/semena-tykvy/semechka-tykvennaya-neochishennaya-krupnaya",
    "name": "Семечка тыквенная неочищенная крупная",
    "price": 309.0,
    "weight": "0,5 кг",
    "category": "seeds",
    "image": "assets/catalog/5089.webp",
    "variants": [
      {
        "id": "2446",
        "weight": "1 кг",
        "price": 588.0
      },
      {
        "id": "4755",
        "weight": "5 кг",
        "price": 2620.0
      }
    ],
    "cardTitle": "Семечка тыквенная",
    "cardNote": "неочищенная, крупная"
  },
  {
    "id": "7649",
    "source": "https://frutoss.ru/shop/assorti-orehovyj-koktejl-280-gr",
    "name": "Ассорти \"Ореховый коктейль\"",
    "price": 455.0,
    "weight": "280 г",
    "category": "mixes",
    "image": "assets/catalog/7649.webp",
    "variants": [
      {
        "id": "7650",
        "weight": "5 × 280 г",
        "price": 2275.0
      }
    ],
    "cardTitle": "Ореховый коктейль",
    "cardNote": "ассорти"
  },
  {
    "id": "6222",
    "source": "https://frutoss.ru/karkade-cvetok-1-kg",
    "name": "Каркаде цветок",
    "price": 647.0,
    "weight": "1 кг",
    "category": "tea",
    "image": "assets/catalog/6222.webp",
    "variants": [
      {
        "id": "7048",
        "weight": "5 кг",
        "price": 2890.0
      }
    ],
    "cardTitle": "Каркаде",
    "cardNote": "цветок"
  },
  {
    "id": "7897",
    "source": "https://frutoss.ru/chaj-chyornyj-altinbas-caykur-turciya-500-gr",
    "name": "Чай чёрный Altinbas Caykur Турция",
    "price": 768.0,
    "weight": "500 г",
    "category": "tea",
    "image": "assets/catalog/7897.webp",
    "variants": [
      {
        "id": "7898",
        "weight": "5 × 500 г",
        "price": 3840.0
      }
    ],
    "facts": {
      "Происхождение": "Турция"
    },
    "cardTitle": "Чёрный чай",
    "cardNote": "Altinbas Caykur · Турция"
  },
  {
    "id": "6612",
    "source": "https://frutoss.ru/shop/tea/travyanoy-chay/kalendula-cvetki-50-gr",
    "name": "Календула цветки",
    "price": 271.0,
    "weight": "50 г",
    "category": "tea",
    "image": "assets/catalog/6612.webp",
    "variants": [
      {
        "id": "7025",
        "weight": "5 × 50 г",
        "price": 1355.0
      }
    ],
    "cardTitle": "Календула",
    "cardNote": "цветки"
  },
  {
    "id": "5493",
    "source": "https://frutoss.ru/shop/tea/travyanoy-chay/roza-lepestki-50-gr",
    "name": "Роза лепестки",
    "price": 185.0,
    "weight": "50 г",
    "category": "tea",
    "image": "assets/catalog/5493.webp",
    "variants": [
      {
        "id": "7035",
        "weight": "5 × 50 г",
        "price": 1035.0
      }
    ],
    "cardTitle": "Роза",
    "cardNote": "лепестки"
  },
  {
    "id": "3865",
    "source": "https://frutoss.ru/shop/sladosti/ananas-v-belom-shokolade",
    "name": "Ананас в белом шоколаде",
    "price": 401.0,
    "weight": "400 г",
    "category": "chocolate",
    "image": "assets/catalog/3865.webp",
    "variants": [
      {
        "id": "7020",
        "weight": "5 × 400 г",
        "price": 2005.0
      }
    ],
    "cardTitle": "Ананас",
    "cardNote": "в белом шоколаде"
  },
  {
    "id": "4007",
    "source": "https://frutoss.ru/shop/sladosti/ananas-v-tyomnom-shokolade-1",
    "name": "Ананас в тёмном шоколаде",
    "price": 416.0,
    "weight": "400 г",
    "category": "chocolate",
    "image": "assets/catalog/4007.webp",
    "variants": [
      {
        "id": "6983",
        "weight": "5 × 400 г",
        "price": 2080.0
      }
    ],
    "cardTitle": "Ананас",
    "cardNote": "в тёмном шоколаде"
  },
  {
    "id": "3866",
    "source": "https://frutoss.ru/shop/sladosti/arahis-v-belom-shokolade",
    "name": "Арахис в белом шоколаде",
    "price": 385.0,
    "weight": "400 г",
    "category": "chocolate",
    "image": "assets/catalog/3866.webp",
    "variants": [
      {
        "id": "7002",
        "weight": "5 × 400 г",
        "price": 1925.0
      }
    ],
    "cardTitle": "Арахис",
    "cardNote": "в белом шоколаде"
  },
  {
    "id": "188",
    "source": "https://frutoss.ru/korica-palochki",
    "name": "Корица палочки",
    "price": 763.0,
    "weight": "1 кг",
    "category": "spices",
    "image": "assets/catalog/188.webp",
    "variants": [
      {
        "id": "4950",
        "weight": "5 кг",
        "price": 3465.0
      }
    ],
    "cardTitle": "Корица",
    "cardNote": "палочки"
  },
  {
    "id": "187",
    "source": "https://frutoss.ru/korica-molotaya",
    "name": "Корица молотая высший сорт",
    "price": 445.0,
    "weight": "1 кг",
    "category": "spices",
    "image": "assets/catalog/187.webp",
    "variants": [
      {
        "id": "3917",
        "weight": "5 кг",
        "price": 1980.0
      }
    ],
    "cardTitle": "Корица",
    "cardNote": "молотая · высший сорт"
  },
  {
    "id": "192",
    "source": "https://frutoss.ru/kurkuma-shafran",
    "name": "Куркума молотая высший сорт Индия",
    "price": 371.0,
    "weight": "1 кг",
    "category": "spices",
    "image": "assets/catalog/192.webp",
    "variants": [
      {
        "id": "4953",
        "weight": "5 кг",
        "price": 1640.0
      }
    ],
    "facts": {
      "Происхождение": "Индия"
    },
    "cardTitle": "Куркума",
    "cardNote": "молотая · высший сорт · Индия"
  },
  {
    "id": "5501",
    "source": "https://frutoss.ru/shop/cukaty/mango-kubiki-500-gr",
    "name": "Манго Кубики",
    "price": 143.0,
    "weight": "0,5 кг",
    "category": "candied",
    "image": "assets/catalog/5501.webp",
    "variants": [
      {
        "id": "6994",
        "weight": "5 × 500 г",
        "price": 715.0
      }
    ],
    "cardTitle": "Манго",
    "cardNote": "кубики"
  },
  {
    "id": "5212",
    "source": "https://frutoss.ru/shop/luchshie-ceny/mango-list-natur-ekstra-500-gr",
    "name": "Манго сушеное",
    "price": 275.0,
    "weight": "500 г",
    "category": "candied",
    "image": "assets/catalog/5212.webp",
    "variants": [
      {
        "id": "5213",
        "weight": "5 × 500 г",
        "price": 1375.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Манго",
    "cardNote": "сушёное"
  },
  {
    "id": "3590",
    "source": "https://frutoss.ru/shop/cukaty/mango/mango-king/mango-list-ekstra-king",
    "name": "Манго сушеное KING",
    "price": 375.0,
    "weight": "0,5 кг",
    "category": "candied",
    "image": "assets/catalog/3590.webp",
    "variants": [
      {
        "id": "3192",
        "weight": "1 кг",
        "price": 750.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Манго",
    "cardNote": "сушёное · KING"
  },
  {
    "id": "266",
    "source": "https://frutoss.ru/shop/mango-list-naturalnyy",
    "name": "Манго сушеное цукат",
    "price": 604.0,
    "weight": "1 кг",
    "category": "candied",
    "image": "assets/catalog/266.webp",
    "variants": [
      {
        "id": "2797",
        "weight": "5 кг",
        "price": 2695.0
      }
    ],
    "facts": {
      "Обработка": "Сушка"
    },
    "cardTitle": "Манго",
    "cardNote": "сушёные цукаты"
  },
  {
    "id": "6606",
    "source": "https://frutoss.ru/shop/bakaleya/myod/myod-naturalnyj-altajskoe-raznotrave-1-kg",
    "name": "Мёд натуральный Алтайское разнотравье",
    "price": 616.0,
    "weight": "1 кг",
    "category": "honey",
    "image": "assets/catalog/6606.webp",
    "cardTitle": "Мёд",
    "cardNote": "натуральный · алтайское разнотравье"
  },
  {
    "id": "6198",
    "source": "https://frutoss.ru/shop/myod-naturalnyj-grechishnyj-500-gr",
    "name": "Мёд натуральный Гречишный",
    "price": 440.0,
    "weight": "500 г",
    "category": "honey",
    "image": "assets/catalog/6198.webp",
    "cardTitle": "Мёд",
    "cardNote": "натуральный, гречишный"
  },
  {
    "id": "6199",
    "source": "https://frutoss.ru/shop/myod-naturalnyj-lipovyj-500-gr",
    "name": "Мёд натуральный Липовый",
    "price": 638.0,
    "weight": "500 г",
    "category": "honey",
    "image": "assets/catalog/6199.webp",
    "cardTitle": "Мёд",
    "cardNote": "натуральный, липовый"
  },
  {
    "id": "7817",
    "source": "https://frutoss.ru/shop/myod-naturalnyj-majskij-1kg",
    "name": "Мёд натуральный Майский",
    "price": 616.0,
    "weight": "1 кг",
    "category": "honey",
    "image": "assets/catalog/7817.webp",
    "cardTitle": "Мёд",
    "cardNote": "натуральный, майский"
  },
  {
    "id": "5992",
    "source": "https://frutoss.ru/shop/pasta-i-urbechi/urbech-iz-arahisa-230-gr-1-sht",
    "name": "Урбеч из арахиса",
    "price": 344.0,
    "weight": "230 г",
    "category": "butters",
    "image": "assets/catalog/5992.webp",
    "variants": [
      {
        "id": "6000",
        "weight": "5 × 230 г",
        "price": 1720.0
      }
    ],
    "cardTitle": "Урбеч",
    "cardNote": "из арахиса"
  },
  {
    "id": "5994",
    "source": "https://frutoss.ru/shop/pasta-i-urbechi/urbech-iz-kunzhuta-belogo-230-gr-1-sht",
    "name": "Урбеч из белого кунжута",
    "price": 304.0,
    "weight": "230 г",
    "category": "butters",
    "image": "assets/catalog/5994.webp",
    "variants": [
      {
        "id": "6122",
        "weight": "5 × 230 г",
        "price": 1520.0
      }
    ],
    "cardTitle": "Урбеч",
    "cardNote": "из белого кунжута"
  },
  {
    "id": "5993",
    "source": "https://frutoss.ru/shop/pasta-i-urbechi/urbech-iz-myakoti-kokosa-230-gr-1-sht",
    "name": "Урбеч из мякоти кокоса",
    "price": 328.0,
    "weight": "230 г",
    "category": "butters",
    "image": "assets/catalog/5993.webp",
    "variants": [
      {
        "id": "6123",
        "weight": "5 × 230 г",
        "price": 1640.0
      }
    ],
    "cardTitle": "Урбеч",
    "cardNote": "из мякоти кокоса"
  },
  {
    "id": "5997",
    "source": "https://frutoss.ru/shop/pasta-i-urbechi/urbech-iz-semyan-konopli-230-gr-1-sht",
    "name": "Урбеч из семян конопли",
    "price": 261.0,
    "weight": "230 г",
    "category": "butters",
    "image": "assets/catalog/5997.webp",
    "variants": [
      {
        "id": "6127",
        "weight": "5 × 230 г",
        "price": 1305.0
      }
    ],
    "cardTitle": "Урбеч",
    "cardNote": "из семян конопли"
  },
  {
    "id": "6151",
    "source": "https://frutoss.ru/shop/posuda-i-aksessuary/chaynye-nabory/podarochnyj-nabor-srednij",
    "name": "Подарочный набор №1",
    "price": 693.0,
    "weight": "500±20 г",
    "category": "gifts",
    "image": "assets/catalog/6151.webp",
    "facts": {
      "Состав": "Кешью, миндаль, грецкий орех, макадамия в скорлупе, финики и цукаты из ананаса."
    },
    "cardTitle": "Подарочный набор",
    "cardNote": "№1"
  },
  {
    "id": "7876",
    "source": "https://frutoss.ru/shop/boby-zharenye-solyonye-1-kg",
    "name": "Бобы жареные солёные",
    "price": 634.0,
    "weight": "1 кг",
    "category": "snacks",
    "image": "assets/catalog/7876.webp",
    "variants": [
      {
        "id": "7877",
        "weight": "5 × 1 кг",
        "price": 3170.0
      }
    ],
    "facts": {
      "Обработка": "Обжарка"
    },
    "cardTitle": "Бобы",
    "cardNote": "жареные, солёные"
  },
  {
    "id": "7964",
    "source": "https://frutoss.ru/shop/galety-iz-tykvy-poleznyj-perekus-210-gr",
    "name": "Галеты из тыквы \"Полезный перекус\"",
    "price": 347.0,
    "weight": "210 г",
    "category": "snacks",
    "image": "assets/catalog/7964.webp",
    "variants": [
      {
        "id": "7965",
        "weight": "5 × 210 г",
        "price": 1735.0
      }
    ],
    "cardTitle": "Галеты из тыквы",
    "cardNote": "«Полезный перекус»"
  }
];
