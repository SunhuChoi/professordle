"use client";
import React, { useState } from "react";
import { TextInput } from "./textinput";
import { Menu } from "./menu";
import professor_data from "./professor_data.json";
import professors_by_department_v2 from "./professors_by_department_v2.json";
import "../app/styles.css";

let randomIndex = Math.floor(Math.random() * 899);

export const Grid: React.FC = () => {
  let validWords = [
    "ABRA, GORDON",
    "ABU-OMAR, MAHDI",
    "ACKERT, LIZ",
    "ACOSTA-ALVEAR, DIEGO",
    "ADAMS, BRANDEN",
    "AFARY, JANET",
    "AFIFI, TAMMY",
    "AFIFI, WALID",
    "AGBOOLA, ADEBISI",
    "AGRAWAL, DIVYAKANT",
    "AHMAD, AHMAD",
    "AHUJA, AMIT",
    "AKEMANN, CHARLES",
    "ALBADA, NICOLE",
    "ALESSIO, PAUL",
    "ALIZADEH, MAHNOOSH",
    "ALVES, JAIME",
    "AMAR, PAUL",
    "AMIHAY, ARYEH",
    "ANANTH, PRABHANJAN",
    "ANDERS, ALLISON",
    "ANDERSON, KEVIN",
    "ANDERSON, OHAN",
    "ANDREA, BERNADETTE",
    "ANYIKA, MERCY",
    "APPEL, IRWIN",
    "ARIAS, CAROLINA",
    "ARMBRUSTER-SANDOVAL, RALPH",
    "ARMISTEAD, KATYA",
    "ARONOVA, ELENA",
    "ARYA, DIANA",
    "ASCHE, CHARLES",
    "ASHBY, FRANK",
    "ATHAYDE, MANAÍRA",
    "ATZBERGER, PAUL",
    "AVETISYAN, ZHIRAYR",
    "AWRAMIK, STANLEY",
    "AZARENKO, OLGA",
    "BAILLARGEON, KATIE",
    "BAKER, ANDREW",
    "BALDWIN, JOHN",
    "BALDWIN, JANICE",
    "BALKIND, JONATHAN",
    "BAMBACH, PAUL",
    "BANKS, INGRID",
    "BAPAT, SUDEEP",
    "BARBIERI-LOW, ANTHONY",
    "BARNES, DAMIEN",
    "BARNWELL, BRENDAN",
    "BARRAGE, LINT",
    "BARRETT, THOMAS",
    "BASHI TREITLER, VILNA",
    "BATISTE, STEPHANIE",
    "BEAMAN, JEAN",
    "BECKER, MARC",
    "BECKMAN, LAUREL",
    "BEDARD, KELLY",
    "BEGLEY, MATTHEW",
    "BELDING, ELIZABETH",
    "BELLOMI, JEFFREY",
    "BELTZ, ERIC",
    "BELTZ, GLENN",
    "BENELLI, CINDY",
    "BENZARTI, YOUSSEF",
    "BERENSTEIN, DAVID",
    "BERGSTROM, RANDY",
    "BERGSTROM, TED",
    "BERNARD, MICHAEL",
    "BERNSTEIN, HILARY",
    "BERNT, CHRISTOPHER",
    "BEYELER, MICHAEL",
    "BIBILASHVILI, TENGIZ",
    "BIGELOW, STEPHEN",
    "BIMBER, BRUCE",
    "BIRCHENALL, JAVIER",
    "BIRNIR, BJORN",
    "BLAES, OMER",
    "BLAKE, FELICE",
    "BLANKHOLM, JOSEPH",
    "BLOOM, PETER",
    "BLUMENTHAL, DEBRA",
    "BLURTON, HEATHER",
    "BOBO, JACQUELINE",
    "BODDY, AMY",
    "BOGART, KAREN",
    "BOHN, HENNING",
    "BOSCAGLI, MAURIZIA",
    "BOTHRA, SHIVANI",
    "BOULEY, BRAD",
    "BOURNE, JANET",
    "BOUWMEESTER, DIRK",
    "BOWERS, JOE",
    "BOWERS, MIKE",
    "BOWMAN, INGRID",
    "BRAININ, RISA",
    "BRECHER, BENJAMIN",
    "BREMSER, CHARLOTTE",
    "BRENNER, MARY",
    "BREWER, FORREST",
    "BRIDGES, TRISTAN",
    "BRIGGS, CHERIE",
    "BRIGHTBILL, JEREMY",
    "BROWN, FRANK",
    "BROWN, KARA MAE",
    "BROWN, MICHELLE",
    "BROWNING, RANDALYN",
    "BRUHN, KATHLEEN",
    "BRUSUTTI, ANNA",
    "BULTAN, TEVFIK",
    "BURATTO, STEVE",
    "BUSTO, RUDY",
    "BUTLER, ALISON",
    "BYL, KATIE",
    "CABEZON, JOSE",
    "CAMPAGNARI, CLAUDIO",
    "CAMPBELL, ERIC",
    "CAMPO, JUAN",
    "CANTRELL, AKIYO",
    "CAPETTINI, EMILIO",
    "CARLSON, CRAIG",
    "CARLSON, JULIE",
    "CARLSON, JEAN",
    "CARLSON, TOM",
    "CARTER, ANDREW",
    "CASE, SARAH",
    "CASILLAS, DOLORES",
    "CASSELS, SUSAN",
    "CAST, ALICIA",
    "CASTEELS, KAREL",
    "CASTILLO-MUNOZ, VERONICA",
    "CAYLOR, KELLY",
    "CENICEROS, HECTOR",
    "CEREZO, ALISON",
    "CHADA, JOE",
    "CHAJDAS, TYMOTEUSZ",
    "CHANDRASEKARAN, SHIV",
    "CHANG, ALENDA",
    "CHANG, SHIYU",
    "CHARNESS, GARY",
    "CHATTOPADHYAYA, UTATHYA",
    "CHATTOPADHYAY, SWATI",
    "CHEN, ERIC",
    "CHEN, HUACHEN",
    "CHEN, IRENE",
    "CHEN, SHU-CHUAN (BELLA)",
    "CHEN, TAO",
    "CHIKOWERO, MHOZE",
    "CHMELKA, BRADLEY",
    "CHO, ALEXANDER",
    "CHO, GUNHEE",
    "CHOI, EUNJIN",
    "CHRISTOFFERSEN, ROLF",
    "CHU, VENA",
    "CLARK, JORDAN",
    "CLARKE, KEITH",
    "CLEGG, DENNIS",
    "CLEMENCON, RAYMOND",
    "COBURN, KATIE",
    "COGGINS, BRIDGET",
    "COHEN, BENJAMIN",
    "COLAHAN, NANCY",
    "COLLINS, NANCY",
    "CONRAD, PHILL",
    "CONROY-BEAM, DANIEL",
    "COOK, ELIZABETH",
    "COOLEY, TIM",
    "COOPER, DARYL",
    "CORONA, KEITH",
    "COSMIDES, LEDA",
    "COTICH, CRAIG",
    "COVO, MANUEL",
    "CRAIG, KATY",
    "CRAIG, NATHANIEL",
    "CRICKETTE, MARIA",
    "D'ANCA, CHRISTENE",
    "D'ANTONIO, CARLA",
    "DAI, XIANZHE",
    "DALY, SAMANTHA",
    "DAMLUJI, MONA",
    "DANIEL, REGINALD",
    "DASGUPTA, DEBANUJ",
    "DAVISON, RAZIEL",
    "DE CARVALHO, LEILA",
    "DE CHAISEMARTIN, CLEMENT",
    "DEAN, CHRISTOPHER",
    "DELOMBARD, JEANNINE",
    "DESCHENES, OLIVIER",
    "DESHMUKH, RANJIT",
    "DETERING, NILS",
    "DEVRIES, TIMOTHY",
    "DEWAR, TIM",
    "DEY, SIDDHARTH",
    "DIAZ SANCHEZ, MICAELA",
    "DIGESER, ELIZABETH",
    "DIGESER, PAIGE",
    "DING, QINGHUA",
    "DING, YUFEI",
    "DODGE, SOMAYEH",
    "DOGIC, ZVONIMIR",
    "DOHERTY, MICHAEL",
    "DONELAN, JAMES",
    "DONNELLY, BRIAN",
    "DOUGLASS, JEREMY",
    "DOYLE, ADELE",
    "DRESSAIRE, EMILIE",
    "DRISKEL, DANA",
    "DUFFY, A",
    "DUNBAR, NORAH",
    "DUNCAN, IAN",
    "DUNN, FRANCIS",
    "DUOER, DAIGENGNA",
    "DUQUE, JASON",
    "DUTSCH, DOROTA",
    "EARDLEY, DOUGLAS",
    "EBENSTEIN, ALAN",
    "EBRAHIM, EBRAHIM",
    "ECKSTEIN, MIGUEL",
    "EDGAR, ADRIENNE",
    "EILON, ZACHARY",
    "EK, AULI",
    "EL ABBADI, AMR",
    "ELISON, WILLIAM",
    "ELIZONDO, SONNY",
    "ENGEL, EMILY",
    "ERICKSON, BRICE",
    "ERNST, BRIAN",
    "ESPONDA, IGNACIO",
    "EVANS, MARSHALL",
    "EVELYN, CHRISTOPHER",
    "EVEN, THOMAS",
    "FALASCA, SIMONETTA",
    "FALVEY, KEVIN",
    "FANCHER, PATRICIA",
    "FEINSTEIN, STUART",
    "FELANDO, CYNTHIA",
    "FELDMAN, LESLIE J.",
    "FELDMAN, RAISA",
    "FELDWINN, DARBY",
    "FELIX, ERIKA",
    "FENG, YU",
    "FERNANDEZ, PATRICIO",
    "FIGUEREDO, OMAR",
    "FINKELSTEIN, RUTH",
    "FITCH, ROB",
    "FLANAGIN, ANDREW",
    "FOLTZ, KATHY",
    "FONTAINE, SAM",
    "FORAN, JOHN",
    "FORD, KATERINA",
    "FORD, PETER",
    "FRANK, DANIEL",
    "FRANKS, ALEXANDER",
    "FREDRICKSON, GLENN",
    "FREEMAN, LAURIE",
    "FREUND, ERNEST",
    "FRIDLUND, ALAN",
    "FROEHLICH, HALLEY",
    "FRUHSTUCK, SABINE",
    "FULKERSON, SCOTT",
    "FYGENSON, DEBORAH",
    "GABLE, SHELLY",
    "GABRIEL, VIKTORIA",
    "GABRIELE, GUY",
    "GAINER, MORGAN",
    "GALLUCCI, RALPH",
    "GANS, PHIL",
    "GARCIA, MARIO",
    "GARCIA-MARTINEZ, MARC",
    "GARFIELD, PETER",
    "GARR, W.RANDALL",
    "GARRATT, ROD",
    "GAULIN, STEVEN",
    "GELLER, ROBERT",
    "GENOVA, GINA",
    "GHOSH, BISHNUPRIYA",
    "GIBBS, JENNIFER",
    "GIBOU, FREDERIC",
    "GIDDING, AARON",
    "GIDDINGS, STEVE",
    "GIESBRECHT, BARRY",
    "GILBERT, JOHN",
    "GILMORE, TIMOTHY",
    "GOARD, MICHAEL",
    "GODDARD, TUG",
    "GONZALES, AMY",
    "GONZALEZ, NINO",
    "GOODEARL, KEN",
    "GOODWIN, JON",
    "GOPALAN, GIRI",
    "GORDON, MICHAEL",
    "GOULIAS, KOSTAS",
    "GRAVES, GREGORY",
    "GRIFFIN, ANDREW",
    "GRIFFITH, BRIAN",
    "GRIPPO, JIM",
    "GROSS, STEVEN",
    "GROVER, SUSAN",
    "GRUE, MICHELLE",
    "GU, MENGYANG MICHEAL",
    "GUAN, DAOXIONG",
    "GUPTA, ARPIT",
    "GUPTA, TRINABH",
    "GURUSWAMY, SATHYA",
    "GURVEN, MICHAEL",
    "GUTIÉRREZ-MAGALLANES, DR. COCO",
    "GUYTON ACOSTA, KILEY",
    "HABER, BARON",
    "HAI, YANG",
    "HAJDA, JOHN",
    "HALMRAST, DANIEL",
    "HAMILTON, KRISTY",
    "HAMMER, LESLIE",
    "HAN, SONG-I",
    "HANSEN, GARY",
    "HANSER, MATTHEW",
    "HANSON, JEFFREY",
    "HARDEKOPF, BEN",
    "HARMON, C J",
    "HARRIS, DEBORAH",
    "HARTMAN, JOHN",
    "HARUTYUNYAN, DAVIT",
    "HASHIMOTO, KUMI",
    "HAUGHTON, CHANTEL",
    "HAYES, CHRIS",
    "HAYNES, REAGAN",
    "HAYTON, TREVOR",
    "HE, JINGYI",
    "HECHT, RICHARD",
    "HEGARTY, MARY",
    "HELGESON, MATTHEW",
    "HELLIER-TINOCO, RUTH",
    "HENDERSON, JARETT",
    "HILLIS, GREG",
    "HILTNER, KENNETH (KEN)",
    "HIRSCH, SARAH",
    "HOBBS-MORGAN, CHASE",
    "HODGES, SCOTT",
    "HOELLE, JEFFREY",
    "HOFMANN, GRETCHEN",
    "HOFMANN, MICHAEL",
    "HOLBROOK, SALLY",
    "HOLDEN, THOMAS",
    "HOLDREGE, BARBARA",
    "HOLLERER, TOBIAS",
    "HOLMES, DAWN",
    "HOLT, JENNIFER",
    "HOLTON, JARED",
    "HOM, STEPHANIE MALIA",
    "HOROWITZ, GARY",
    "HOU, LYNN",
    "HU, RUIMENG",
    "HUANG, YUNTE",
    "HUISGEN-ZIMMERMAN, BIRGE",
    "HUK, PETER",
    "HUSTON, VALERIE",
    "ICHIBA, TOMOYUKI",
    "IGLESIAS-RODRIGUEZ, DEBORA",
    "IHM, ELLIOTT",
    "JACKSON, MATT",
    "JACKSON, WENDY",
    "JACOB, WALTER",
    "JACOBS, EMILY",
    "JACOBS, RICADO",
    "JACOBSON, LISA",
    "JACQUES, GEOFFREY",
    "JAEGER, LUC",
    "JAMES, ANNA",
    "JAMMALAMADAKA, SREENIVASA",
    "JANOWICZ, KRZYSZTOF",
    "JANUSONIS, SKIRMANTAS",
    "JARRETT, GREG",
    "JAYICH, ANDREW",
    "JAYICH, ANIA",
    "JENKINS, CHRIS",
    "JEVBRATT, LISA",
    "JI, CHEN",
    "JIN, CHENHAO",
    "JOHNSON, GREG",
    "JOHNSON, JENNIFER",
    "JONES, CHARLES",
    "JOSEPH, CRISJOE",
    "JOSHI, PRADEEP",
    "JUE, MELODY",
    "JURKOWSKI, NICOLAS",
    "KAHN, KALJU",
    "KALMAN, LAURA",
    "KAM, JENNIFER",
    "KAPLAN, CYNTHIA",
    "KATSIKA, ARGYRO",
    "KATZ, DEREK",
    "KAUFFMAN, MITCHELL",
    "KEARNEY, J J",
    "KEIFLIN, RON",
    "KELLER, ARTURO",
    "KELLER, EDWARD",
    "KENNEDY, ROBERT (BOB)",
    "KENNETT, DOUGLAS",
    "KEUM, TAE-YEOUN",
    "KHARITONOVA, YEKATERINA KATE",
    "KIM, BONGJIN",
    "KIM, HEEJUNG",
    "KIM, HYUN-JUNG",
    "KIM, SUNG SOO",
    "KIM, YOUNG JI",
    "KING, JENNIFER",
    "KING, RACHAEL",
    "KING, WILLIAM DAVIES",
    "KIPPIN, TOD",
    "KISLENKO, NATASHA",
    "KLEIN, STANLEY",
    "KLOKE, JOHN",
    "KOKINIS, TROY ARAIZA",
    "KORMAN, DANIEL",
    "KORNBERG, DANA",
    "KOSIK, KENNETH",
    "KOUTROULAKIS, GEORGIOS",
    "KOZERAWSKI, JEDRZEJ",
    "KRINTZ, CHANDRA",
    "KRISTIANSEN, KAI",
    "KRUEGEL, CHRIS",
    "KRUT, ROBERT",
    "KRUVAND, MARJORIE",
    "KUHN, PETER",
    "KUMAR, SANJAY",
    "KUNDU, MANNY",
    "KURIN, DANIELLE",
    "KURIS, ARMAND",
    "KYRATZIS, AMY",
    "LABATUT, MARION",
    "LABUTIN, DENIS",
    "LAMARTINE, NICOLE",
    "LANE, DAN",
    "LANSING, CAROL",
    "LARUE, RENAN",
    "LASHMET, AMY",
    "LATTO, JOHN",
    "LAURENT-PERRAULT, EVELYNE",
    "LAVERMAN, LEROY",
    "LAWSON, DAVID",
    "LEA, DAVID",
    "LEBRUN, ALEX",
    "LEE, JIN SOOK",
    "LEE, JOHN",
    "LEE, WONA",
    "LEVY, BENJAMIN",
    "LEWALLEN, ANN-ELISE",
    "LEWIS, ROBERT",
    "LI, PENG",
    "LI, XIAORONG",
    "LI, ZHIJIAN",
    "LIBERMAN, ZOE",
    "LIEN, PEI-TE",
    "LIM, GEUNHO",
    "LIN, QUYUAN",
    "LINDHEIM, SARA",
    "LIPMAN, EVERETT",
    "LIPSHUTZ, BRUCE",
    "LISIECKI, LORRAINE",
    "LIU, ALAN",
    "LIU, ZHENG",
    "LMAIFI, MARIAM",
    "LOAICIGA, HUGO",
    "LOHWASSER, KARIN",
    "LOKSHTANOV, DANIEL",
    "LONG, DARREN",
    "LOPEZ-CARR, DAVID",
    "LOUIS, MATTHIEU",
    "LOVETT, DUSTIN",
    "LOW, DAVID",
    "LOW, SENG",
    "LOWELL, JULIA",
    "LUBIN, PHILIP",
    "LUDKOVSKI, MICHAEL",
    "LUDWIG, ANDREAS",
    "LUNA, ZAKIYA",
    "LUNDBERG, SHELLY",
    "LUNSFORD, KAREN",
    "LUO, XIAO",
    "LUZZATTO-FEGIZ, PAOLO",
    "LYTLE, TIFFANY",
    "MA, DZWOKAI",
    "MACDONALD, FRANCIS",
    "MACIAS, ESMERALDA",
    "MACKIE, DIANE",
    "MACLEAN, ROSE",
    "MAHDAVI, PAASHA",
    "MAJEWSKI, JOHN",
    "MAJOR, BRENDA",
    "MALVINNI, DAVID",
    "MANIN, FEDYA",
    "MANJUNATH, B. S.",
    "MARCUS, SCOTT",
    "MARCUSE, HAROLD",
    "MARDEN, JASON",
    "MARINA, MAVEL",
    "MARKS, TREVOR",
    "MAROLF, DONALD",
    "MARQUES-PASCUAL, LAURA",
    "MARSHALL, KATHY",
    "MARTIN, CRYSTAL",
    "MASLAN, MARK",
    "MASSIE, ERIC",
    "MASTERSON, DANIEL",
    "MASTRO, DANA",
    "MATNI, ZIAD",
    "MAYER, RICHARD",
    "MAZANEC, THOMAS",
    "MAZIN, BENJAMIN",
    "MCAULEY, CHRISTOPHER",
    "MCCANTS, KRISTEN",
    "MCCARTHY, CHRISTINA",
    "MCCLAIN, KATIA",
    "MCCLURE, SARAH",
    "MCDONALD, KATE",
    "MCFADDEN, JOE",
    "MCFARLAND, ERIC",
    "MCHUGH, PATRICK",
    "MCKIRAHAN, RICHARD",
    "MCLELLAN, LARRY",
    "MCMAHON, CHRISTINA",
    "MCMEEKING, ROBERT",
    "MCMURTREY, MEGAN",
    "MCNAMARA, JAMES",
    "MEADOW, MARK",
    "MEIBURG, ECKART",
    "MEIRING, WENDY",
    "MELNICK, ROSS",
    "MENARD, GABRIEL",
    "MENDES BRAGA, MARTA",
    "MEROLLA, ANDY",
    "METIU, HORIA",
    "METZGER, MIRIAM",
    "MIELE, ILENE",
    "MIESCHER, STEPHAN",
    "MILDENBERGER, MATTO",
    "MILLER, KARLY",
    "MILLNER, ANTONY",
    "MINOR, RYAN",
    "MIOLANE, NINA",
    "MIRELES-RIOS, REBECA",
    "MIRZA, DIBA",
    "MITCHELL, GREG",
    "MIZRAHI, JANET",
    "MOELLER, HOLLY",
    "MOERSCHEL, JONATHAN",
    "MOKRISKI, DAVID",
    "MONAHAN, LAURIE",
    "MONTELL, CRAIG",
    "MONTELL, DENISE",
    "MONTELLO, DAN",
    "MOODY, GALAN",
    "MOORE, KATIE",
    "MOORE, KM",
    "MOOSBRUGGER, LORELEI",
    "MORALES, HELEN",
    "MORRIS, NOMI",
    "MORRISON, DAVE",
    "MORRISSEY, MEGHAN",
    "MORSE, JULIA",
    "MORSTEIN-MARX, ROBERT",
    "MORTON, CARLOS",
    "MOSELEY, DELILA",
    "MOULTON, SUSAN",
    "MOUTI, SAAD",
    "MUKHERJEE, ARNAB",
    "MULLATH, ZUHAIR",
    "MULLEN, JILLIAN",
    "MULLIN, CHARLES",
    "MULLIN, DOLLY",
    "MURNANE, EVAN",
    "MURRAY, ALAN",
    "MURTI-HALI, DIPALI",
    "MURUAMENDIARAZ, MAITANE",
    "MYERS, KAREN",
    "NABI, ROBIN",
    "NAGY, AKOS",
    "NAKAMURA, JESSICA",
    "NALL, CLAYTON",
    "NARANG, NEIL",
    "NATHAN, JON",
    "NELSON, HARRY",
    "NESCI, CATHERINE",
    "NEWFIELD, CHRIS",
    "NGUYEN, ALICE",
    "NGUYEN, THUC-QUYEN",
    "NICOLAESCU, ANDREA",
    "NIDZIEKO, NICK",
    "NOI, EVGENY",
    "NORRIS, ANDREW",
    "NOURIZADEH, SHANE",
    "NOVAK, DAVID",
    "O'CONNOR, ALICE",
    "O'MALLEY, MICHELLE",
    "OAKLEY, TODD",
    "OGRAIN, CHRISTOPHER",
    "OH, SANG-YUN",
    "OLGUIN, BEN",
    "OONO, RYOKO",
    "OPREA, RYAN",
    "ORTIZ, ARLENE",
    "OSQUEEZADEH, BAHRAM",
    "OXELSON, EVA",
    "PACHECO, RAQUEL",
    "PAJAK, ANNA",
    "PAN, JIAYIN",
    "PANDYA, SAMEER",
    "PARK, JEA-HYUN",
    "PARK, SOWON",
    "PARKER, EMMA",
    "PARKS, LISA",
    "PATTERSON, DAVID",
    "PATTERSON, KATHY",
    "PAUL, DAVID",
    "PEDERSEN, HAL",
    "PENLEY, CONSTANCE",
    "PENNATHUR, SUMITA",
    "PEREZ, ELIZABETH",
    "PERRONE, GIULIANA",
    "PETERS, GARETH",
    "PETRO, PATRICE",
    "PETTUS, THOMAS",
    "PIERCE, KANA",
    "PLANE, ANN",
    "PLAXCO, KEVIN",
    "PONCE, GUSTAVO",
    "POOLE, STEPHEN",
    "POPESCU, PAULA",
    "PORTER, MATT",
    "PORTER, SUSANNAH",
    "POWERS, REBECCA",
    "PRESS, CAROL",
    "PRICE, SCOTT",
    "PRIETO, ERIC",
    "PROPEN, AMY",
    "PROULX, STEPHEN",
    "PUTINAR, MIHAI",
    "QIN, CHENG-ZHONG",
    "QUIRK, MATTHEW",
    "RADFORD, ANTHONY",
    "RALEY, RITA",
    "RAMBELLI, FABIO",
    "RANA, SWATI",
    "RAPPAPORT, ERIKA",
    "RATNER, KYLE",
    "RAVAT, UMA",
    "RAVEN, MORGAN",
    "RAYMOND, ELENA",
    "RAYMOND, GEOFFREY",
    "READ DE ALANIZ, JAVIER",
    "REESE, BEN",
    "REEVE, DANIEL",
    "REICH, NORBERT",
    "REID, SCOTT",
    "REYNOLDS, DWIGHT",
    "RICE, RONALD",
    "RICHARDSON, CHRIS",
    "RICHARDSON, MATT",
    "RICHMAN, JEFF",
    "RIOS, VICTOR",
    "RIOUX, MATT",
    "ROBERTS, DAR",
    "ROBERTS, LUKE",
    "ROBERTSON, JOHN",
    "ROBERTSON, TERESA",
    "ROBINSON, WILLIAM",
    "RODRIGUEZ, CELIA",
    "RONEY, JAMES",
    "ROSE, KENNETH",
    "ROSS, ELISSA",
    "ROTHFARB, LEE",
    "ROTHMAN, JOEL",
    "ROYER, HEATHER",
    "RUIZ, TREVOR",
    "RUPERT, PETER",
    "RUTHERFORD, KEVIN",
    "SABRA, ADAM",
    "SAFINYA, CYRUS",
    "SALDIVAR, TANAKA",
    "SALEEM, MUNIBA",
    "SALEM, LOAI",
    "RAMMY, SALEM",
    "SALMON, NATHAN",
    "SALTON COX, GLYN",
    "SAMOLSKY, RUSSELL",
    "SAMUELS, ROBERT",
    "SANCHEZ, MICAELA DIAZ",
    "SANTORO, ALYSON",
    "SARKAR, BHASKAR",
    "SAUR, ELIZABETH",
    "SCHLEY, NATHAN",
    "SCHMITT, RUSSELL",
    "SCHNEIDER, NICK",
    "SCHOINOPLOKAKI, EMMANUELA",
    "SCHOOLER, JONATHAN",
    "SCHOW, CLINT",
    "SCHRANCK, JOHN",
    "SCHULLER, JON",
    "SHELL, SCOTT",
    "SCOTT, VICKIE",
    "SCUDDER, SAMANTHA",
    "SEGAL, NOAH",
    "SEGALMAN, RACHEL",
    "SEGURA, DENISE",
    "SEIKALY, SHERENE",
    "SEN, PRADEEP",
    "SEPUNARU, LIOR",
    "SHAKERIAN, SHAYA",
    "SHEA, JOAN",
    "SHEFFIELD, CHUCK",
    "SAKR, LAILA",
    "SHERMAN, DAVID",
    "SHERWIN, MARK",
    "SHERWOOD, TIMOTHY",
    "SHEWRY, TERESA",
    "SHILO, AMIT",
    "SHISHIM, MARK",
    "SHKOLNIK, ALEXANDER",
    "SIDERIS, TOM",
    "SIEGEL, GREG",
    "SIMPSON, JULIE",
    "SINGH, AMBUJ",
    "SINGH, SATYAJIT",
    "SISCO, ZACH",
    "SLOAN, TINA",
    "SMITH, ERIC",
    "SMITH, IKUKO",
    "SMITH, KENNETH",
    "SMITH, STEVE",
    "SMITH, STUART",
    "SMITH, WILLIAM",
    "SOLIS, SHARON",
    "SONNINO, PAUL",
    "SORAPURE, MADELINE",
    "SORIANO, KIMBERLY",
    "SPICKARD, PAUL",
    "SPRAGUE, THOMAS TOMMY",
    "SPRIGGE, MARTHA",
    "SQUIRES, TODD",
    "SRA, MISHA",
    "STANSELL, AMANDA",
    "STARTZ, RICHARD",
    "STEAVU-BALINT, DOMINIC",
    "STEIGERWALD, DOUG",
    "STEIN, DANIEL",
    "STEINKELLNER, CHERI",
    "STEVENSON, VITAS",
    "STEWART, JEFFREY",
    "STOHL, CYNTHIA",
    "STOHL, MICHAEL",
    "STOHLER, JASON",
    "STOKES, LEAH",
    "STOLL, HEATHER",
    "STOPPLE, JEFFREY",
    "STRATHMAN, BRENT",
    "STREICHAN, SEBASTIAN",
    "STROBEL, MARCEL",
    "STRUKOV, DMITRI",
    "STUART, CHARLES",
    "STUART, DAVID",
    "SU, JIANWEN",
    "SUGAWARA, HIROKO",
    "SUN, HALA",
    "SUN, YIDAN",
    "SUREAU, ELOISE",
    "SURI, SUBHASH",
    "SUSKO, TYLER",
    "SVADLENAK, NATHAN",
    "SWEENEY, STUART",
    "SWENSON, JULIE",
    "SYLVESTER, BRYANNA",
    "SZUMLINSKI, KAREN",
    "TAKATORI, SHO",
    "TANG, SUI",
    "TANIMOTO, TOSHIRO",
    "TARIKERE, ASHWIN",
    "TAYLOR, CATHERINE",
    "TAZHITDINOVA, ALISA",
    "TCHAROS, STEFANIE",
    "TELLES, EDWARD",
    "THOLL, ANDREW",
    "THOMAS, CHRISTIAN",
    "THOMAS, CHRISTINE",
    "THOMAS, CATHY",
    "THOMASSON, KELLY",
    "THOMPSON, WILLIAM",
    "TIAN, WENCHUAN",
    "TIFFNEY, BRUCE",
    "TINSLEY, OMISE'EKE",
    "TOBER, TARA",
    "TOOBY, JOHN",
    "TRUGMAN, ANNA",
    "TRUSCELLI, NIKKI",
    "TSAI, DANNY",
    "TSAI, GEOFFREY",
    "TSOUNA, VOULA",
    "TURNER, THOMAS L.",
    "TUROWETZ, JASON",
    "TWINE, FRANCE WINDDANCE",
    "TYBJERG, DANIEL",
    "TYBURCZY, JENNIFER",
    "TYLER, CLAUDIA",
    "VALENTINE, DAVE",
    "VALENTINE, MEGAN",
    "VAN KOPPEN, PETRA",
    "VANDERWARKER, AMBER",
    "VAZQUEZ-BARE, GONZALO",
    "VENEGAS, CHRISTINA",
    "VERNON, TY",
    "VIGNA, GIOVANNI",
    "VIGODA, ERIC",
    "VILLANUEVA-NIEVES, NATALIA",
    "VLCEK, VOJTECH",
    "VYAS, MAHARSHI",
    "WAID, CANDACE",
    "WAINWRIGHT, BRIAN",
    "WALKER, DAVID",
    "WALKER, JANET",
    "WALLACE, VESNA",
    "WALSH, CASEY",
    "WALTHER, JOE",
    "WANG, MIAN",
    "WANG, RICHERT",
    "WANG, YUAN-FANG",
    "WANG, WILLIAM",
    "WANG, YU-XIANG",
    "WARE, RUDOLPH",
    "WARWICK, NICOLE",
    "WATERBURY, ADAM",
    "WATTLES, MIRIAM",
    "WEBB, MARIE",
    "WEBBER, MARTHA",
    "WEBER, ELISABETH",
    "WEBER, RENE",
    "WEI, GUFONG",
    "WEIMBS, THOMAS",
    "WELD, DAVID",
    "WELD, SARA PANKENIER",
    "WELDEAB, SYEE",
    "WELTY, LILY ANNE YUMI",
    "WESTMACOTT, BRIANA",
    "WHITE, JEREMY",
    "WHITEHEAD, KEVIN",
    "WHITESTONE, STEPHENSON",
    "WHITTET, ELLEN",
    "WICKE, JENNIFER",
    "WILKENFELD, NAN",
    "WILLIAMS, ALISON",
    "WILSON, BRENT",
    "WILSON, GREG",
    "MUSE, WILSON",
    "WILTON, MIKE",
    "WINANT, HOWARD",
    "WINDER, TERRELL",
    "WITTMAN, RICHARD",
    "WOHL, HANNAH",
    "WOLFE, CHARLES",
    "WOLFSON, ELLIOT",
    "WOLSKI, RICH",
    "WOODS, VANESSA",
    "WOOTEN, TERRANCE",
    "WUEBBEN, DANIEL",
    "WYSS, ANDRE",
    "XU, CENKE",
    "YAMAMOTO, NAOKI",
    "YAMBOLIEV, KALI",
    "YAN, LINGQI",
    "YAN, XIFENG",
    "YANG, HENRY",
    "YANG, TAO",
    "YANG, XU",
    "YAQUB, SALIM",
    "YASUDA, KIM",
    "YE, RICK",
    "YEUNG, ENOCH",
    "HWANG, YOON",
    "YOUNG, ANDREA",
    "YOUNG, HILLARY",
    "YOUNG, KAY",
    "YU, GUO",
    "YU, HONGBO",
    "YUKSEL, SEVGI",
    "ZACKRISON, ERIC",
    "ZAKARIAN, ARMEN",
    "ZANGER, DANIEL",
    "ZARATE, ADANARI",
    "ZEE, ANTHONY",
    "ZHANG, LIMING",
    "ZHANG, YITANG",
    "ZHANG, ZHENG",
    "ZHAO, XIAOLEI",
    "ZHENG, XIAOWEI",
    "ZHOU, HANMING",
    "ZHU, ZIMU",
    "ZIMMAN, LAL",
    "ZIMMERMAN, AARON",
    "ZIPPERSTEIN, STEVEN",
    "ZISERMAN, PAULINE",
    "ZULUETA, BENJAMIN",
    "ZYLSTRA, STEPHEN",
  ];

  const objectArray: Record<string, any>[] = [];

  const traverseData = () => {
    for (const object of professor_data) {
      objectArray.push(object);
    }
  };

  traverseData();

  const hashMap: Record<
    string,
    {
      name: string;
      departments: Array<string>;
      rating: string;
      difficulty: string;
      courses: Array<string>;
    }
  > = {};

  professor_data.forEach((item) => {
    hashMap[item.name] = item;
  });

  const hashMapTwo: Record<
    string,
    {
      department: string;
      professors: Array<string>;
    }
  > = {};

  professors_by_department_v2.forEach((item) => {
    hashMapTwo[item.department] = item;
  });

  const [randomString, setRandomString] = useState("");

  const [inputValue1, setInputValue1] = useState("");
  const [inputValueV1, setInputValueV1] = useState("");
  const [inputValueV2, setInputValueV2] = useState("");
  const [inputValueV3, setInputValueV3] = useState("");
  const [inputValueV4, setInputValueV4] = useState("");

  const [inputValue2, setInputValue2] = useState("");
  const [inputValue21, setInputValue21] = useState("");
  const [inputValue22, setInputValue22] = useState("");
  const [inputValue23, setInputValue23] = useState("");
  const [inputValue24, setInputValue24] = useState("");

  const [inputValue3, setInputValue3] = useState("");
  const [inputValue31, setInputValue31] = useState("");
  const [inputValue32, setInputValue32] = useState("");
  const [inputValue33, setInputValue33] = useState("");
  const [inputValue34, setInputValue34] = useState("");

  const [inputValue4, setInputValue4] = useState("");
  const [inputValue41, setInputValue41] = useState("");
  const [inputValue42, setInputValue42] = useState("");
  const [inputValue43, setInputValue43] = useState("");
  const [inputValue44, setInputValue44] = useState("");

  const [inputValue5, setInputValue5] = useState("");
  const [inputValue51, setInputValue51] = useState("");
  const [inputValue52, setInputValue52] = useState("");
  const [inputValue53, setInputValue53] = useState("");
  const [inputValue54, setInputValue54] = useState("");

  const [inputValue6, setInputValue6] = useState("");
  const [inputValue61, setInputValue61] = useState("");
  const [inputValue62, setInputValue62] = useState("");
  const [inputValue63, setInputValue63] = useState("");
  const [inputValue64, setInputValue64] = useState("");

  const [tileValue1, setTileValue1] = useState("");
  const [tileValue11, setTileValue11] = useState("");
  const [tileValue12, setTileValue12] = useState("");
  const [tileValue13, setTileValue13] = useState("");
  const [tileValue14, setTileValue14] = useState("");

  const [tileValue2, setTileValue2] = useState("");
  const [tileValue21, setTileValue21] = useState("");
  const [tileValue22, setTileValue22] = useState("");
  const [tileValue23, setTileValue23] = useState("");
  const [tileValue24, setTileValue24] = useState("");

  const [tileValue3, setTileValue3] = useState("");
  const [tileValue31, setTileValue31] = useState("");
  const [tileValue32, setTileValue32] = useState("");
  const [tileValue33, setTileValue33] = useState("");
  const [tileValue34, setTileValue34] = useState("");

  const [tileValue4, setTileValue4] = useState("");
  const [tileValue41, setTileValue41] = useState("");
  const [tileValue42, setTileValue42] = useState("");
  const [tileValue43, setTileValue43] = useState("");
  const [tileValue44, setTileValue44] = useState("");

  const [tileValue5, setTileValue5] = useState("");
  const [tileValue51, setTileValue51] = useState("");
  const [tileValue52, setTileValue52] = useState("");
  const [tileValue53, setTileValue53] = useState("");
  const [tileValue54, setTileValue54] = useState("");

  const [tileValue6, setTileValue6] = useState("");
  const [tileValue61, setTileValue61] = useState("");
  const [tileValue62, setTileValue62] = useState("");
  const [tileValue63, setTileValue63] = useState("");
  const [tileValue64, setTileValue64] = useState("");

  const [counter, setCounter] = useState(1);

  let specificObject = objectArray[randomIndex];
  let departments = specificObject.departments;
  let ratings = specificObject.ratings;
  let difficulty = specificObject.difficulty;
  let courses = specificObject.courses;

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRandomString = () => {
    setRandomString(specificObject.name);
    console.log(randomString);
  };

  const handleMenuChange = (newValueTwo: string) => {
    console.log(newValueTwo);
    // hashMapTwo[newValueTwo].professors;
    // validWords = hashMapTwo[newValueTwo].professors;
    // randomIndex = Math.floor(
    //   Math.random() * hashMapTwo[newValueTwo].professors.length
    // );
    // specificObject = hashMap[hashMapTwo[newValueTwo].professors[randomIndex]];
    // departments = specificObject.departments;
    // ratings = specificObject.ratings;
    // difficulty = specificObject.difficulty;
    // courses = specificObject.courses;
  };

  const resetCounter = () => {
    window.location.reload();
  };
  const handleInputChange = (newValue: string) => {
    handleIncrement();

    if (counter === 1) {
      let check = 0;
      setInputValue1(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue1("wordletiletrue");
        check++;
      } else {
        setTileValue1("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue11("wordletiletrue");
        check++;
      } else {
        setTileValue11("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue12("wordletiletrue");
        check++;
      } else {
        setTileValue12("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue13("wordletiletrue");
        check++;
      } else {
        setTileValue13("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue14("wordletiletrue");
        check++;
      } else {
        setTileValue14("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValueV1(concatenatedString);
      setInputValueV2(hashMap[newValue.toUpperCase()].rating);
      setInputValueV3(hashMap[newValue.toUpperCase()].difficulty);
      setInputValueV4(concatenatedStringTwo);
      if (check === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    } else if (counter === 2) {
      let check = 0;
      setInputValue2(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue2("wordletiletrue");
        check++;
      } else {
        setTileValue2("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue21("wordletiletrue");
        check++;
      } else {
        setTileValue21("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue22("wordletiletrue");
        check++;
      } else {
        setTileValue22("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue23("wordletiletrue");
        check++;
      } else {
        setTileValue23("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue24("wordletiletrue");
        check++;
      } else {
        setTileValue24("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue21(concatenatedString);
      setInputValue22(hashMap[newValue.toUpperCase()].rating);
      setInputValue23(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue24(concatenatedStringTwo);
      if (check === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    } else if (counter === 3) {
      let check = 0;
      setInputValue3(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue3("wordletiletrue");
        check++;
      } else {
        setTileValue3("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue31("wordletiletrue");
        check++;
      } else {
        setTileValue31("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue32("wordletiletrue");
        check++;
      } else {
        setTileValue32("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue33("wordletiletrue");
        check++;
      } else {
        setTileValue33("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue34("wordletiletrue");
        check++;
      } else {
        setTileValue34("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue31(concatenatedString);
      setInputValue32(hashMap[newValue.toUpperCase()].rating);
      setInputValue33(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue34(concatenatedStringTwo);

      if (check === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    } else if (counter === 4) {
      let c = 0;
      setInputValue4(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue4("wordletiletrue");
        c++;
      } else {
        setTileValue4("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue41("wordletiletrue");
        c++;
      } else {
        setTileValue41("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue42("wordletiletrue");
        c++;
      } else {
        setTileValue42("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue43("wordletiletrue");
        c++;
      } else {
        setTileValue43("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue44("wordletiletrue");
        c++;
      } else {
        setTileValue44("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue41(concatenatedString);
      setInputValue42(hashMap[newValue.toUpperCase()].rating);
      setInputValue43(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue44(concatenatedStringTwo);
      if (c === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    } else if (counter === 5) {
      let c = 0;
      setInputValue5(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue5("wordletiletrue");
        c++;
      } else {
        setTileValue5("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue51("wordletiletrue");
        c++;
      } else {
        setTileValue51("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue52("wordletiletrue");
        c++;
      } else {
        setTileValue52("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue53("wordletiletrue");
        c++;
      } else {
        setTileValue53("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue54("wordletiletrue");
        c++;
      } else {
        setTileValue54("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue51(concatenatedString);
      setInputValue52(hashMap[newValue.toUpperCase()].rating);
      setInputValue53(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue54(concatenatedStringTwo);
      if (c === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    } else if (counter === 6) {
      let c = 0;
      setInputValue6(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue6("wordletiletrue");
        c++;
      } else {
        setTileValue6("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue61("wordletiletrue");
        c++;
      } else {
        setTileValue61("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue62("wordletiletrue");
        c++;
      } else {
        setTileValue62("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue63("wordletiletrue");
        c++;
      } else {
        setTileValue63("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue64("wordletiletrue");
        c++;
      } else {
        setTileValue64("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue61(concatenatedString);
      setInputValue62(hashMap[newValue.toUpperCase()].rating);
      setInputValue63(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue64(concatenatedStringTwo);
      if (c === 5) {
        alert("Congratulation! You got it correct!");
        setCounter(10);
      }
    }
  };

  return (
    <div>
      <Menu onInputChange={handleMenuChange} />
      <div className="button">
        <button onClick={handleRandomString}>
          Click to Generate Random Professor
        </button>
      </div>

      <div>
        <TextInput
          onInputChange={handleInputChange}
          options={validWords}
        ></TextInput>
      </div>
      <div className="guess-grid">
        <div className={tileValue1}>
          {counter >= 1 && tileValue1 !== "" && (
            <div>{inputValue1.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue11}>
          {counter >= 1 && tileValue1 !== "" && <div>{inputValueV1}</div>}
        </div>
        <div className={tileValue12}>
          {counter >= 1 && tileValue12 !== "" && <div>{inputValueV2}</div>}
        </div>
        <div className={tileValue13}>
          {counter >= 1 && tileValue13 !== "" && <div>{inputValueV3}</div>}
        </div>
        <div className={tileValue14}>
          {counter >= 1 && tileValue14 !== "" && <div>{inputValueV4}</div>}
        </div>
        <div className={tileValue2}>
          {counter >= 2 && tileValue2 !== "" && (
            <div>{inputValue2.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue21}>
          {counter >= 2 && tileValue21 !== "" && <div>{inputValue21}</div>}
        </div>
        <div className={tileValue22}>
          {counter >= 2 && tileValue22 !== "" && <div>{inputValue22}</div>}
        </div>
        <div className={tileValue23}>
          {counter >= 2 && tileValue23 !== "" && <div>{inputValue23}</div>}
        </div>
        <div className={tileValue24}>
          {counter >= 2 && tileValue24 !== "" && <div>{inputValue24}</div>}
        </div>
        <div className={tileValue3}>
          {counter >= 3 && tileValue3 !== "" && (
            <div>{inputValue3.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue31}>
          {counter >= 3 && tileValue31 !== "" && <div>{inputValue31}</div>}
        </div>
        <div className={tileValue32}>
          {counter >= 3 && tileValue32 !== "" && <div>{inputValue32}</div>}
        </div>
        <div className={tileValue33}>
          {counter >= 3 && tileValue33 !== "" && <div>{inputValue33}</div>}
        </div>
        <div className={tileValue34}>
          {counter >= 3 && tileValue34 !== "" && <div>{inputValue34}</div>}
        </div>
        <div className={tileValue4}>
          {counter >= 4 && tileValue4 !== "" && (
            <div>{inputValue4.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue41}>
          {counter >= 4 && tileValue41 !== "" && <div>{inputValue41}</div>}
        </div>
        <div className={tileValue42}>
          {counter >= 4 && tileValue42 !== "" && <div>{inputValue42}</div>}
        </div>
        <div className={tileValue43}>
          {counter >= 4 && tileValue43 !== "" && <div>{inputValue43}</div>}
        </div>
        <div className={tileValue44}>
          {counter >= 4 && tileValue44 !== "" && <div>{inputValue44}</div>}
        </div>
        <div className={tileValue5}>
          {counter >= 5 && tileValue5 !== "" && (
            <div>{inputValue5.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue51}>
          {counter >= 5 && tileValue51 !== "" && <div>{inputValue51}</div>}
        </div>
        <div className={tileValue52}>
          {counter >= 5 && tileValue52 !== "" && <div>{inputValue52}</div>}
        </div>
        <div className={tileValue53}>
          {counter >= 5 && tileValue53 !== "" && <div>{inputValue53}</div>}
        </div>
        <div className={tileValue54}>
          {counter >= 5 && tileValue54 !== "" && <div>{inputValue54}</div>}
        </div>
        <div className={tileValue6}>
          {counter >= 6 && tileValue6 !== "" && (
            <div>{inputValue6.toUpperCase()}</div>
          )}
        </div>
        <div className={tileValue61}>
          {counter >= 6 && tileValue61 !== "" && <div>{inputValue61}</div>}
        </div>
        <div className={tileValue62}>
          {counter >= 6 && tileValue62 !== "" && <div>{inputValue62}</div>}
        </div>
        <div className={tileValue63}>
          {counter >= 6 && tileValue63 !== "" && <div>{inputValue63}</div>}
        </div>
        <div className={tileValue64}>
          {counter >= 6 && tileValue64 !== "" && <div>{inputValue64}</div>}
        </div>
      </div>
      <div className="button">
        {counter >= 7 && (
          <div className="button">
            <button onClick={resetCounter}>Play again?</button>
          </div>
        )}
      </div>
    </div>
  );
};
