
const MENU = {
  food: {
    "Mains": [
      { type:"card", title:"Ofada Rice", desc:"Traditional ofada, spicy sauce with assorted meat", price:"₦3,000", tags:["popular"], img:"/image/ofada.jpg", tags:["signature","popular"] },
      { type:"card", title:"White Rice & Stew", desc:"Smoky tomato stew", price:"₦2,000", img:"/image/rice.png", tags:["popular"] },
      { type: "list", title: "Spicy Gizzard", price: "₦3,500" },
      { type: "list", title: "Spicy Pomo", price: "₦3,500" },
      { type: "list", title: "Spicy Turkey", price: "₦7,000" },
    { type: "list", title: "Spicy Turkey with Fries", price: "₦7,000" },
    { type: "list", title: "Yam and Egg Sauce", price: "₦4,500" },
    { type: "list", title: "Indomie and Egg", price: "₦3,000" },
    { type: "list", title: "Indomie, Egg with Sardine", price: "₦5,500" },
     { type: "list", title: "Scrambled Egg with Sardine", price: "₦4,000" },
    { type: "list", title: "Plantain", price: "₦2,000" },
    { type: "list", title: "Fried Yam", price: "₦2,000" },
    { type: "list", title: "Boiled Yam", price: "₦2,000" },
    { type: "list", title: "Extra Ofada Rice", price: "₦1,500" }
        
    ],
      "Pepper Soup": [
    { type: "card", title: "Catfish Pepper Soup [40K]", price: "₦40,000", img:"/image/catfish_soup.JPG", tags:["popular"] },
    { type: "card", title: "Croacker Fish Pepper Soup [20K]", price: "₦20,000", img:"/image/croaker_soup.jpg", tags:["popular"] },
    { type: "list", title: "Catfish Pepper Soup [35K]", price: "₦35,000" },
    { type: "list", title: "Catfish Pepper Soup [30K]", price: "₦30,000" },
    { type: "list", title: "Croacker Fish Pepper Soup [18K]", price: "₦18,000" },
        { type: "list", title: "Croacker Fish Pepper Soup [15K]", price: "₦15,000" },
        { type: "list", title: "Turkey Pepper Soup", price: "₦8,000" },
        { type: "list", title: "Cowtail & Yam Pepper Soup", price: "₦8,000" },
        { type: "list", title: "Cowtail Pepper Soup", price: "₦6,000" },
        { type: "list", title: "Goat Meat and Yam Pepper Soup", price: "₦8,000" },
        { type: "list", title: "Goat Meat Pepper Soup", price: "₦7,000" },
        { type: "list", title: "Assorted and Yam Pepper Soup", price: "₦8,000" },
        { type: "list", title: "Boiled Yam & Turkey, BiscuitBone Pepper Soup", price: "₦10,000" },
        { type: "list", title: "Chicken Pepper Soup", price: "₦10,000" },
        { type: "list", title: "Dry Fish Pepper Soup", price: "₦12,000" },
  
  ],
      "Meat & Fish": [
        { type: "card", title: "Isi Ewu", price: "₦15,000", img:"/image/isi.jpg", tags:["popular"] },
        { type: "card", title: "Nkwobi", price: "₦7,000", img:"/image/nkwobi-.png", tags:["popular"] },
        { type: "list", title: "Chicken Nkwobi", price: "₦10,000" },
        { type: "list", title: "Pepper Chicken", price: "₦5,000" },
         { type: "list", title: "Bush Meat", price: "₦10,000" },
           { type: "list", title: "Calabar Dry Fish", price: "₦12,000" },
    { type: "list", title: "Dry Fish and Ugba", price: "₦12,000" },
    { type: "list", title: "Peppered Snail (Medium 1pcs)", price: "₦5,000" },
    { type: "list", title: "Peppered Snail (Big 1pcs)", price: "₦7,000" },
    { type: "list", title: "Snail (Small 2pcs)", price: "₦7,000" },
        { type: "list", title: "Spicy Turkey", price: "₦7,000" },
        { type: "list", title: "Ugba and Stock Fish", price: "₦10,000" },
         { type: "list", title: "Peppered Goat Meat", price: "₦7,000" }
       
        
    ]
  },

drinks: {       
 "Aperitif": [
    { type: "card", title: "CAMPARI 1LTR", price: "₦35,000", img:"/image/camp.jpg", tags:["popular"] },
    { type: "card", title: "KUEMMELLING", price: "₦20,000", img:"/image/kumelin.webp", tags:["popular"] },
    { type: "list", title: "CAMPARI 20CL", price: "₦10,000" },
    { type: "list", title: "CAMPARI 75CL", price: "₦25,000" },
    { type: "list", title: "ACTION BITTERS(200ML)", price: "₦2,000" },
    { type: "list", title: "ORIJIN BITTERS 750ML", price: "₦12,000" },
    { type: "list", title: "STRONGO BITTER HERBA EXTRACTS 750ML", price: "₦10,000" },
    { type: "list", title: "SELECT PILLA APERITIF 70CL", price: "₦9,000" },
    { type: "list", title: "ORIJIN BITTERS 20CL", price: "₦2,500" },
    { type: "list", title: "PALMIE DIRECT PALMWINE 1LTR", price: "₦2,500" },
    { type: "list", title: "BIG BABEJE", price: "₦2,000" },
    { type: "list", title: "BIG BABEJE", price: "₦1,500" },
    { type: "list", title: "KOLAQ", price: "₦2,000" },
    { type: "list", title: "ODOGWU BITTERS", price: "₦2,000" },
    // { type: "list", title: "ODOGWU BITTERS", price: "₦1,200" },
    { type: "list", title: "ACE BITTERS 20CL", price: "₦2,000" },
    { type: "list", title: "ALOMO BITTERS 200ML", price: "₦2,000" },
    { type: "list", title: "STRONGOO BITTERS 200ML", price: "₦1,500" },
    { type: "list", title: "FEKOMI BITTERS", price: "₦1,500" },
    { type: "list", title: "LONG JACK", price: "₦1,500" },
    { type: "list", title: "HAAMAH BITTERS 200ML", price: "₦1,000" },
    { type: "list", title: "MUDET HERBAL", price: "₦1,000" },
    { type: "list", title: "JEKOMO", price: "₦1,000" },
    { type: "list", title: "AMARO MONTENEGRO LIQUEUR 70CL", price: "₦20,700" }
  ],

  "Champagne": [
    { type: "card", title: "DON PERIGNON", price: "₦250,000", img:"/image/don.webp", tags:["signature","popular"] },
    { type: "card", title: "MOET BRUT", price: "₦220,000", tags:["popular"], img:"/image/moet.webp" },
    { type: "list", title: "MOET ROSE", price: "₦220,000" },
    { type: "list", title: "VEUVE CLICQUOT BRUT 750ML", price: "₦210,000" },
    { type: "list", title: "VEUVE DU VERNAY ICE ROSE 750ML(FRANCE)", price: "₦30,000" },
    { type: "list", title: "BLUE NUN", price: "₦25,000" },
    { type: "list", title: "BELAIRE LUXE", price: "₦80,000" },
    { type: "list", title: "ANDRE ROSE", price: "₦20,000" },
    { type: "list", title: "CHAMDOR RED WINE", price: "₦15,000" },
    { type: "list", title: "J & W FRUIT WINE 750ML", price: "₦6,000" },
    { type: "list", title: "J & W SPARKLING WINE", price: "₦6,000" }
  ],

  "SparklingWine": [
    { type: "card", title: "MARTINI BRUT", price: "₦35,000", img:"/image/martini.webp", tags:["popular"] },
    { type: "card", title: "MARTINI SPARKILINE ROSE 75CL", price: "₦35,000", img:"image/Martini-Rose-Sparkling-Wine-75cl-x-6-1.webp", tags:["popular"] },
    { type: "list", title: "MARTINELLIS", price: "₦5,000" },
    { type: "list", title: "VEELETA SPARKLING WINE", price: "₦5,000" }
  ],

  "Tequila": [
    { type: "card", title: "CLASE AZUL", price: "₦287,500",img:"/image/azule.webp", tags:["popular","for the OG's"] },
    { type: "card", title: "CASAMIGOS BLANCO 700ML", price: "₦200,000", img:"/image/belenco.png", tags:["popular"] },
    { type: "list", title: "SILVER PATRON 700ML", price: "₦75,000" },
    { type: "list", title: "OLMECA BLANCO", price: "₦45,000" },
    { type: "list", title: "OLMECA GOLD", price: "₦45,000" },
    { type: "list", title: "OLMECA CHOCOLATE", price: "₦45,000" },
    { type: "list", title: "OLMECA WHITE", price: "₦45,000" },
    { type: "list", title: "SIERRA TEQUILA BLANCO", price: "₦30,000" },
    { type: "list", title: "SIERRA TEQUILA SPICED", price: "₦30,000" }
  ],

  "Red Wine": [
    { type: "card", title: "CHATEAUNEUF DU PAPE 750ML", price: "₦70,000", img:"/image/chet.jpg", tags:["popular"] },
    { type: "card", title: "Apothic Red Wine 750ML", price: "₦25,000", img:"/image/apotic.avif", tags:["popular"] },
    { type: "list", title: "NEDERBURG SAUVIGNON VINTAGE 2021 750ML", price: "₦35,000" },
    { type: "list", title: "NEDERBURG MERLOT VINTA 2021 750ML", price: "₦35,000" },
    { type: "list", title: "NEDERBURG CLASSIC", price: "₦35,000" },
    { type: "list", title: "ESCUDO ROJO RED WINE", price: "₦40,000" },
    { type: "list", title: "B & G RED WINE 750ML BOT", price: "₦20,000" },
    { type: "list", title: "Massimo ITALY", price: "₦20,000" },
    { type: "list", title: "KAGOR RED WINE 75CL", price: "₦20,000" },
    { type: "list", title: "FOUR COUSIN 750ML", price: "₦20,000" },
    { type: "list", title: "Eisberg Cabernet Sauvignon Red Wine 75cl", price: "₦20,000" },
    { type: "list", title: "CARLO ROSSI", price: "₦20,000" },
    { type: "list", title: "Baron Romero", price: "₦15,000" },
    { type: "list", title: "dorado", price: "₦15,000" },
    { type: "list", title: "TOMA TOMA WINE", price: "₦15,000" },
    { type: "list", title: "4TH STREET RED WINE", price: "₦15,000" },
    { type: "list", title: "Dominio Del rey", price: "₦15,000" },
    { type: "list", title: "BREE RED WINE 750ML", price: "₦15,000" },
    { type: "list", title: "Baron De Val", price: "₦10,000" },
    { type: "list", title: "DECLAN RED", price: "₦10,000" },
    { type: "list", title: "Castilo Red", price: "₦20,000" },
    { type: "list", title: "THOMAS BARTON", price: "₦45,000" },
    { type: "list", title: "Rubis Chocolate velvet 50cl", price: "₦30,000" },
    { type: "list", title: "Mateus White", price: "₦15,000" },
    { type: "list", title: "CASA DORADA", price: "₦15,000" },
    { type: "list", title: "LAMBRUSCO", price: "₦15,000" },
    { type: "list", title: "DROSTDY HOF", price: "₦15,000" },
    { type: "list", title: "CARTIER RED WINE", price: "₦15,000" }
  ],

  "Vodka": [
    { type: "card", title: "Ciroc Vodka", price: "₦46,000",img:"/image/Ciroc.jpg", tags:["popular"] },
    { type: "card", title: "Sky Vodka", price: "₦25,000",img:"/image/sky.jpg", tags:["popular"] },
    { type: "list", title: "smirnoff vodka 1ltr", price: "₦20,000" },
    { type: "list", title: "SKY VODKA SMALL 200ML", price: "₦4,000" },
    { type: "list", title: "SMIRNOFF VODKA SMALL", price: "₦2,500" }
  ],

  "Liqueur": [
    { type: "card", title: "Baileys Irish Cream 70cl", price: "₦45,000",img:"/image/baileys.png", tags:["popular"] },
    { type: "card", title: "BEST MARULA CREAM BIG", price: "₦20,000",img:"image/Best_cream_75cl_Case.jpg", tags:["popular"] },
    { type: "list", title: "AMARULA 750ML", price: "₦20,000" },
    { type: "list", title: "BEST MARULA CREAM small", price: "₦4,500" },
    { type: "list", title: "Jagermeilter", price: "₦35,000" }
  ],

  "Rum/Gin": [
    { type: "card", title: "BACARDI GOLD RUM 70CL", price: "₦35,000", img:"/image/bacadi.webp", tags:["popular"] },
    { type: "card", title: "BACADI WHITE RUM 70CL", price: "₦30,000", img:"/image/bracadi whute.jpeg", tags:["popular"] },
    { type: "list", title: "Lord's London Dry Gin 750ml", price: "₦20,000" },
    { type: "list", title: "Gordons", price: "₦20,000" },
    { type: "list", title: "CAPTAIN MORGAN", price: "₦20,000" },
    { type: "list", title: "BLACK ISLAND CAFE RUM 750ML", price: "₦20,000" },
    { type: "list", title: "SMALL GORDONS 18CL", price: "₦6,000" },
    { type: "list", title: "GORDON'S DRY GIN MORINGA CITRUS BLEND 305ML", price: "₦6,000" }
  ],

  "Cognac/Brandy": [
    { type: "card", title: "Hennesey VS Cognac 70cl", price: "₦100,000", img:"/image/vs.avif", tags:["popular"] },
    { type: "card", title: "Hennesey VSOP Cognac 70cl", price: "₦200,000", img:"/image/vsop.webp", tags:["popular"]  },
    { type: "list", title: "Remy Martin 1738", price: "₦130,000" },
    { type: "list", title: "MARTELL BLUE SWIFT 750ML", price: "₦160,000" },
    { type: "list", title: "MARTELL VS SINGLE DISTILLERY FINE COGNAC 70CL", price: "₦80,000" },
    { type: "list", title: "COGNAC 70cl", price: "₦80,000" },
    { type: "list", title: "Hennessy VS Small 35cl", price: "₦55,000" },
    { type: "list", title: "Remy Martin VSOP", price: "₦100,000" },
    { type: "list", title: "Skirt", price: "₦10,000" },
    { type: "list", title: "STEROC", price: "₦30,000" }
  ],

  "Whiskey": [
    { type: "card", title: "Glenfiddich Malt Scotch Whisky 700ml 18yrs", price: "₦200,000", img:"/image/glen 18.png", tags:["popular"] },
    { type: "card", title: "Glenfiddich Malt Scotch Whisky 700ml 12yrs", price: "₦90,000", img:"image/12-year-glen.webp", tags:["popular"] },
    { type: "list", title: "JAMESON BLACK BARREL 700ML", price: "₦65,000" },
    { type: "list", title: "Black label 700ml", price: "₦65,000" },
    { type: "list", title: "jack daniel 700ml", price: "₦45,000" },
    { type: "list", title: "JAMESON TRIPPLE DISTILLED IRISH WHISKY 700ML", price: "₦45,000" },
    { type: "list", title: "DOUBLE BLACK", price: "₦45,000" },
    { type: "list", title: "DOUBLE BLACK BIG", price: "₦45,000" },
    { type: "list", title: "JACK DANIEL HONEY", price: "₦40,000" },
    { type: "list", title: "JOHN BARNAMAS WHISKEY 700ML", price: "₦30,000" },
    { type: "list", title: "WILLIAM LAWSON 200ml", price: "₦17,000" },
    { type: "list", title: "LONG RIDER EXTRA SMOOTH WHISKEY 750ML", price: "₦30,000" },
    { type: "list", title: "JACK WILLIAMS", price: "₦30,000" },
    { type: "list", title: "8pm whisky", price: "₦20,000" },
    { type: "list", title: "CLAYMORE BLENDED SCOTCH WHISKEY", price: "₦20,000" },
    { type: "list", title: "SEAGRAM WHISKY 700ML", price: "₦20,000" },
    { type: "list", title: "AMERICAN HONEY STING 750ML", price: "₦25,000" },
    { type: "list", title: "Famous Grouse 700ml", price: "₦23,000" },
    { type: "list", title: "Small best Whisky", price: "₦4,500" },
    { type: "list", title: "SEAGRAMS IMPERIALBLUE 18CL", price: "₦2,300" },
    { type: "list", title: "WILD TURKEY AMERICAN HONEY STING 750ML", price: "₦35,000" },
    { type: "list", title: "Famous Grouse Black", price: "₦30,000" },
    { type: "list", title: "Best Whiskey 75cl", price: "₦20,000" },
    { type: "list", title: "WHISKEY 700ML", price: "₦45,000" },
    { type: "list", title: "Red Label 70CL", price: "₦35,000" },
    { type: "list", title: "WILLIAM LAWSON SCOTCH WHISKR 750ml", price: "₦30,000" },
    { type: "list", title: "SEAGRAM IMPERIALBLUE 18CL 700ML", price: "₦2,300" },
    { type: "list", title: "Jameson Small", price: "₦15,000" },
    { type: "list", title: "Glenfiddich Single Malt Scotch Whisky 700ml 15yrs", price: "₦120,000" },
    { type: "list", title: "BLACK JACK", price: "₦20,000" },
    { type: "list", title: "Glenfiddich Scotch Whisky 700ml 21yrs", price: "₦400,000" },
    { type: "list", title: "BOMBAY SAPPHIRE 750ML", price: "₦25,000" }
  ],

  "Beer/Cider": [
    { type: "card", title: "BUDWEISER BIG", price: "₦4,000", img:"/image/budwiser.jpeg", tags:["popular"] },
    { type: "card", title: "Guinness big", price: "₦4,000", img:"/image/guiness.jpg", tags:["popular"] },
    { type: "list", title: "Heineken 60cl", price: "₦4,000" },
    { type: "list", title: "SMIRNOFF ICE BIG BOTTLE 600ML", price: "₦4,000" },
    { type: "list", title: "Guinness Medium", price: "₦3,000" },
    { type: "list", title: "Hunters", price: "₦3,000" },
    { type: "list", title: "Orijin Beer", price: "₦3,000" },
    { type: "list", title: "savannah", price: "₦3,000" },
    { type: "list", title: "33 Export", price: "₦2,000" },
    { type: "list", title: "goldberg", price: "₦2,000" },
    { type: "list", title: "Gulder", price: "₦2,000" },
    { type: "list", title: "Local Palm wine", price: "₦2,000" },
    { type: "list", title: "star", price: "₦2,000" },
    { type: "list", title: "Star Radler", price: "₦2,000" },
    { type: "list", title: "trophy", price: "₦2,000" },
    { type: "list", title: "TROPHY STOUT", price: "₦2,000" },
    { type: "list", title: "FOREST POWER GINGER DRINK 500ML", price: "₦2,000" },
    { type: "list", title: "SMIRNOFF ICE DOUBLE BLACK BOT 300ML", price: "₦2,000" },
    { type: "list", title: "guiness smooth", price: "₦2,000" },
    { type: "list", title: "TIGER BEER 45CL", price: "₦2,000" },
    { type: "list", title: "HEINIKEN DRAUGHT", price: "₦2,500" },
     { type: "list", title: "SMINOFF ICE 300ML", price: "₦2,000" },
    { type: "list", title: "GUINNESS SMALL", price: "₦2,000" },
    { type: "list", title: "DESPERADO", price: "₦2,000" },
     { type: "list", title: "GOLDBERG BLACK", price: "₦3,000" },
    { type: "list", title: "FLYING FISH", price: "₦2,000" },
    { type: "list", title: "LEGEND BIG", price: "₦4,000" }

  ],

  "EnergyDrinks": [
    { type: "card", title: "red bull", price: "₦3,500", img:"/image/redbull.jpg", tags:["popular"] },
    { type: "card", title: "BULLET", price: "₦3,000" , img:"/image/bullet.jpg", tags:["popular"] },
    { type: "list", title: "Monster", price: "₦3,000" },
    { type: "list", title: "Power Horse big 355ml", price: "₦3,000" },
    { type: "list", title: "Power Horse Small 250ml", price: "₦2,500" },
    { type: "list", title: "PREDATOR ENEGRY DRINK 50ML", price: "₦1,500" }
  ],

  "SoftDrinks": [
    { type: "card", title: "STUTE CRANBERRY", price: "₦9,000", img:"image/Stute_Cranberry.jpg", tags:["popular"] },
    { type: "card", title: "5 ALIVE BERRY BLAST", price: "₦4,000", img:"/image/allive.jpg", tags:["popular"] },
    { type: "list", title: "Hollandia Plain Yoghurt Sweetened 1L", price: "₦4,000" },
    { type: "list", title: "CHI ACTIVE 1L", price: "₦4,000" },
    { type: "list", title: "5 ALIVE PULPY ORANGE", price: "₦4,000" },
    { type: "list", title: "Vitamilk Drink 300ml", price: "₦3,500" },
    { type: "list", title: "coca cola", price: "₦1,000" },
    { type: "list", title: "Maltina", price: "₦1,500" },
    { type: "list", title: "Chi Active 1L", price: "₦4,000" },
    { type: "list", title: "Hollandia Plain Yoghurt Sweetened 1L", price: "₦4,000" },
    { type: "list", title: "Chivita Exotic 1L", price: "₦4,000" },
    { type: "list", title: "coca cola zero", price: "₦1,000" },
    { type: "list", title: "EVA WATER 75CL", price: "₦1,000" },
    { type: "list", title: "FANTA 50CL", price: "₦1,000" },
    { type: "list", title: "fayrouz", price: "₦1,000" },
    { type: "list", title: "PEPSI 60CL PET (N200)", price: "₦1,000" },
    { type: "list", title: "SPRITE 50 CL", price: "₦1,000" },
    { type: "list", title: "NESTLE PURELIFE TABLE WATER 60CL", price: "₦1,000" },
    { type: "list", title: "MALTINA CLASS BOTTLE", price: "₦1,000" },
    { type: "list", title: "COCA-COLA CAN 33CL", price: "₦1,000" },
    { type: "list", title: "PEPSI CAN 33CL", price: "₦1,000" },
    { type: "list", title: "AMSTEL MALT CAN", price: "₦1,000" },
    { type: "list", title: "DUBIC MALT CAN", price: "₦1,000" },
    { type: "list", title: "TEEM TONIC WATER CAN", price: "₦1,000" },
    { type: "list", title: "PEAK YOUGHURT 1LT", price: "₦4,000" },
    { type: "list", title: "EVA WATER BIG 150CL", price: "₦1,500" }
  ],

  "Cocktails": [
    { type: "card", title: "LONG ISLAND", price: "₦5,500", img:"image/Long-Island-Iced-Tea-7.jpg", tags:["popular"] },
    { type: "card", title: "Strawberry Margarita Frozen", price: "₦5,500", img:"image/Strawberry-Margarita.jpg", tags:["popular"] },
    { type: "list", title: "PINA COLADA", price: "₦5,000" },
    { type: "list", title: "MARGARITA", price: "₦4,500" },
    { type: "list", title: "TEQUILA SUNRISE", price: "₦3,000" },
    { type: "list", title: "SWEET STRAWBERRY MAGARITA", price: "₦5,500" }
  ],

  "Mocktails": [
    { type: "card", title: "VIRGIN COLADA", price: "₦3,500", img:"image/virgin-colada.jpg", tags:["popular"] },
    { type: "card", title: "VIRGIN SUNSET", price: "₦3,000", img:"/image/sunset.jpeg", tags:["popular"] },
    { type: "list", title: "BLUE HAWAII", price: "₦4,500" },
    { type: "list", title: "BLUE LAGOON", price: "₦4,500" },
    { type: "list", title: "BLUE ARENA", price: "₦2,500" },
    { type: "list", title: "PINK ARENA", price: "₦2,500" },
    { type: "list", title: "Chapman", price: "₦2,000" },
    { type: "list", title: "Sweet Strawberry Frozen", price: "₦2,500" }
  ]
}

};

/* ---------- Elements ---------- */
const pillsEl = document.getElementById('pills');
const contentEl = document.getElementById('content');
const tabEls = document.querySelectorAll('.tab');

/* ---------- App state ---------- */
let currentTab = 'food';         // 'food' or 'drinks'
let currentCategory = null;      // e.g. 'Mains'

/* ---------- Helpers ---------- */
const el = (tag, cls, html) => {
  const d = document.createElement(tag);
  if (cls) d.className = cls;
  if (html !== undefined) d.innerHTML = html;
  return d;
};
const safe = s => String(s || '');

/* ---------- Render pills (categories) ---------- */
function renderPills(){
  pillsEl.innerHTML = '';
  const categories = Object.keys(MENU[currentTab] || {});
  if(!categories.length){
    pillsEl.appendChild(el('div','hint','No categories'));
    currentCategory = null;
    renderContent();
    return;
  }
  // default to first if none set
  if(!currentCategory || !categories.includes(currentCategory)){
    currentCategory = categories[0];
  }
  categories.forEach((c,i)=>{
    const btn = el('button','category', safe(c));
    btn.type = 'button';
    btn.classList.toggle('active', c === currentCategory);
    btn.addEventListener('click', ()=>{
      currentCategory = c;
      document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));
      btn.classList.add('active');
      renderContent();
      // keep pill centered on click (good for long pill lists on mobile)
      btn.scrollIntoView({ inline:'center', behavior:'smooth', block:'nearest' });
    });
    pillsEl.appendChild(btn);
  });
}

/* ---------- Render content area (cards & lists) ---------- */
function renderContent(){
  contentEl.innerHTML = '';
  if(!currentCategory){
    contentEl.appendChild(el('div','hint','No items to display.'));
    return;
  }
  const items = MENU[currentTab][currentCategory] || [];
  if(!items.length){
    contentEl.appendChild(el('div','hint','No items in this category.'));
    return;
  }

  // container grid
  const grid = el('div','menu-grid');

  // iterate and render
  items.forEach(it=>{
    if(it.type === 'card'){
      const card = el('article','menu-card');
      card.innerHTML = `
        <img src="${safe(it.img)}" alt="${safe(it.title)}" loading="lazy">
        <div class="card-body">
          <h3>${safe(it.title)}</h3>
          <p class="desc">${safe(it.desc || '')}</p>
          <div class="meta">
            <div>
              ${ (it.tags || []).map(t=>`<span class="badge">${safe(t)}</span>`).join(' ') }
            </div>
            <div class="price-pill">${safe(it.price || '')}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    } else {
      // list item should span full row for clarity
      const list = el('div','menu-list-item list-span');
      list.innerHTML = `
        <div>
          <div class="title">${safe(it.title)}</div>
          <div class="sm">${safe(it.desc || '')}</div>
        </div>
        <div class="price-tag">${safe(it.price || '')}</div>
      `;
      grid.appendChild(list);
    }
  });

  contentEl.appendChild(grid);
}

/* ---------- Tab switching ---------- */
tabEls.forEach(t=>{
  t.addEventListener('click', ()=>{
    tabEls.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    currentTab = t.dataset.tab;
    currentCategory = null;
    renderPills();
    renderContent();
  });
});

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // set first tab active if none
  const activeTabBtn = document.querySelector('.tab.active');
  if(activeTabBtn) currentTab = activeTabBtn.dataset.tab || 'food';
  renderPills();
  renderContent();
});



function spin(){
  document.getElementById('spinner').style.display="block"
  document.getElementById('spin').style.backgroundColor="none"
  document.getElementById('spin').style.display="none"
}

setTimeout(spin,1000)
let a = document.getElementById('spi').addEventListener("load" ,spin)
