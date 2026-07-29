const DATA = window.OBTN_SITE_DATA;
const STATE_REFS = ["Oregon", "Rural", "Urban"];
const TRIBE_NAMES = {
  BP: "Burns Paiute Tribe",
  CLUS: "Confederated Tribes of Coos, Lower Umpqua and Siuslaw Indians",
  COQ: "Coquille Indian Tribe",
  COW: "Cow Creek Band of Umpqua Tribe of Indians",
  GR: "Confederated Tribes of Grand Ronde",
  KLA: "Klamath Tribes",
  SLZ: "Confederated Tribes of Siletz Indians",
  UMA: "Confederated Tribes of the Umatilla Indian Reservation",
  WSP: "Confederated Tribes of Warm Springs",
};
const UI_TEXT = {
  en: {
    start: "Start",
    profiles: "Explore County Profiles",
    samples: "Start with a question",
    language: "Español",
    startHere: "Start here",
    anotherWay: "Another way in",
    startTitle: "Explore by topic, geography and year",
    startAside: "Start with a question",
    browseQuestions: "Browse questions",
    sampleTitle: "Kickstart your exploration with these questions",
    publicationPrefix: "For the full publication, see",
    what: "What",
    where: "Where",
    when: "When",
    explore: "Explore",
    chooseMeasure: "Choose a measure",
    chooseMeasureFirst: "Choose a measure first",
    notLoaded: "not loaded",
    exploreOregon: "Explore Oregon",
    exploreCounty: "Explore by county",
    county: "County",
    insufficient: "Insufficient data per source",
    oneYear: "Only one comparable year is available for this measure.",
    academicYears: "Education measures use academic years.",
    noData: "No data",
    viewBreakdown: "View breakdown",
    openCountyProfile: "Open county profile",
    definition: "Definition",
    hoverMap: "Hover over the map or ranking to connect county geography with the ordered values.",
    exploreByYear: "Explore by year",
    rank: "Rank",
    value: "Value",
    topThird: "Top third",
    middleThird: "Middle third",
    bottomThird: "Bottom third",
    slotsPer100: "Slots per 100",
    per1000: "Per 1,000",
    milesPerPerson: "Miles per person",
    amount: "Amount",
    ratio: "Ratio",
    years: "Years",
    percentage: "Percentage",
    byYear: "by year",
    acrossOregon: "across Oregon",
    backToProfile: "Back to county profile",
    viewStatewide: "View statewide map",
    trendNotShown: "Trend comparison is not shown for this measure.",
    profileUnavailable: "This profile view is not available for the selected period.",
    women: "Women",
    men: "Men",
    profilesHeading: "Helping all of Oregon see all of Oregon",
    chooseCountyProfile: "Choose a county to open an interactive profile.",
    backToCountyMap: "Back to county map",
    countyProfile: "County profile",
    tribes: "Federally recognized tribes",
    noTribes: "No federally recognized tribe headquarters are shown for this county in the profile data.",
    noTribeCounties: "No counties shown in the profile data.",
    medianIncome: "Median household income",
    lifeExpectancy: "Life expectancy",
    populationByAge: "Population by age",
    publicLand: "Public land",
    developedLand: "Developed land",
    countySeat: "County seat",
    largestCommunity: "Largest community",
    notableFeature: "Notable feature",
    hardship: "Households in financial hardship",
    belowPoverty: "Below poverty",
    belowAlice: "Below ALICE",
    populationRace: "Population by race/ethnicity",
    topIndustries: "Top employment industries",
    ageGroupAccess: "Age-group access",
    childcareHeadline: "Childcare need looks different for infants and toddlers.",
    childcareCopy: "A childcare desert is a county with more than three children for every regulated childcare slot. Severe deserts are areas where 10% or fewer children have access to a childcare slot. The gap is sharpest for infants and toddlers.",
    infantToddlers: "Infants & Toddlers",
    preschoolAge: "Preschool-age",
    schoolAge: "6-12 year olds",
    allAges: "All ages",
    notDesert: "Not a desert",
    desert: "Desert",
    severeDesert: "Severe desert",
    availability33: "Availability of 33% or higher",
    availabilityUnder33: "Availability under 33%",
    availability10: "Availability of 10% or below",
    accessFor: "access for",
    compareChildcareMaps: "Compare preschool-age and infant/toddler childcare access maps",
    countyMapAria: "County map",
    tribeMapAria: "county presence map",
    backStart: "Start over",
  },
  es: {
    start: "Inicio",
    profiles: "Perfiles de condados",
    samples: "Empezar con una pregunta",
    language: "English",
    startHere: "Empiece aquí",
    anotherWay: "Otra forma de empezar",
    startTitle: "Explore por tema, geografía y año",
    startAside: "Empezar con una pregunta",
    browseQuestions: "Ver preguntas",
    sampleTitle: "Comience su exploración con estas preguntas",
    publicationPrefix: "Para ver la publicación completa, visite",
    what: "Qué",
    where: "Dónde",
    when: "Cuándo",
    explore: "Explorar",
    chooseMeasure: "Elija una medida",
    chooseMeasureFirst: "Primero elija una medida",
    notLoaded: "no cargado",
    exploreOregon: "Explorar Oregon",
    exploreCounty: "Explorar por condado",
    county: "Condado",
    insufficient: "Datos insuficientes según la fuente",
    oneYear: "Solo hay un año comparable disponible para esta medida.",
    academicYears: "Las medidas de educación usan años académicos.",
    noData: "Sin datos",
    viewBreakdown: "Ver desglose",
    openCountyProfile: "Abrir perfil del condado",
    definition: "Definición",
    hoverMap: "Pase el cursor sobre el mapa o la clasificación para conectar la geografía del condado con los valores ordenados.",
    exploreByYear: "Explorar por año",
    rank: "Rango",
    value: "Valor",
    topThird: "Tercio superior",
    middleThird: "Tercio medio",
    bottomThird: "Tercio inferior",
    slotsPer100: "Cupos por 100",
    per1000: "Por 1,000",
    milesPerPerson: "Millas por persona",
    amount: "Cantidad",
    ratio: "Razón",
    years: "Años",
    percentage: "Porcentaje",
    byYear: "por año",
    acrossOregon: "en Oregon",
    backToProfile: "Volver al perfil del condado",
    viewStatewide: "Ver mapa estatal",
    trendNotShown: "No se muestra comparación de tendencia para esta medida.",
    profileUnavailable: "Esta vista de perfil no está disponible para el periodo seleccionado.",
    women: "Mujeres",
    men: "Hombres",
    profilesHeading: "Ayudando a todo Oregon a ver todo Oregon",
    chooseCountyProfile: "Elija un condado para abrir un perfil interactivo.",
    backToCountyMap: "Volver al mapa de condados",
    countyProfile: "Perfil del condado",
    tribes: "Tribus reconocidas federalmente",
    noTribes: "No se muestran sedes de tribus reconocidas federalmente para este condado en los datos del perfil.",
    noTribeCounties: "No se muestran condados en los datos del perfil.",
    medianIncome: "Ingreso mediano del hogar",
    lifeExpectancy: "Esperanza de vida",
    populationByAge: "Población por edad",
    publicLand: "Tierra pública",
    developedLand: "Tierra desarrollada",
    countySeat: "Sede del condado",
    largestCommunity: "Comunidad más grande",
    notableFeature: "Lugar destacado",
    hardship: "Hogares con dificultades financieras",
    belowPoverty: "Bajo pobreza",
    belowAlice: "Bajo ALICE",
    populationRace: "Población por raza/etnicidad",
    topIndustries: "Principales industrias de empleo",
    ageGroupAccess: "Acceso por grupo de edad",
    childcareHeadline: "La necesidad de cuidado infantil es distinta para bebés y niños pequeños.",
    childcareCopy: "Un desierto de cuidado infantil es un condado con más de tres niños por cada cupo regulado de cuidado infantil. Los desiertos severos son áreas donde 10% o menos de los niños tienen acceso a un cupo de cuidado infantil. La brecha es más marcada para bebés y niños pequeños.",
    infantToddlers: "Bebés y niños pequeños",
    preschoolAge: "Edad preescolar",
    schoolAge: "Niños de 6 a 12 años",
    allAges: "Todas las edades",
    notDesert: "No es desierto",
    desert: "Desierto",
    severeDesert: "Desierto severo",
    availability33: "Disponibilidad de 33% o más",
    availabilityUnder33: "Disponibilidad menor de 33%",
    availability10: "Disponibilidad de 10% o menos",
    accessFor: "acceso para",
    compareChildcareMaps: "Compare mapas de acceso a cuidado infantil para edad preescolar y bebés/niños pequeños",
    countyMapAria: "Mapa del condado",
    tribeMapAria: "mapa de presencia por condado",
    backStart: "Empezar de nuevo",
  },
};
const SAMPLE_PRINCIPLES = [
  {
    key: "strong-starts",
    title: "Strong Starts",
    image: "assets/tfff-strong-starts.png",
    questions: [
      { text: "Can families in my county find childcare?", es: "¿Pueden las familias de mi condado encontrar cuidado infantil?", measure: "child_care_slots" },
      { text: "Where are babies getting a healthy start?", es: "¿Donde estan teniendo los bebes un comienzo saludable?", measure: "low_weight_births" },
      { text: "Are students in my area gaining strong reading foundations by 3rd grade?", es: "¿Los estudiantes de mi area estan construyendo bases solidas de lectura en 3er grado?", measure: "3rd_grade_reading" },
    ],
  },
  {
    key: "bright-futures",
    title: "Bright Futures",
    image: "assets/tfff-bright-futures.png",
    questions: [
      { text: "Where are 9th graders building momentum toward graduation?", es: "¿Donde estan los estudiantes de 9º grado avanzando hacia la graduacion?", measure: "ninth_grade_on_track" },
      { text: "Where are more adults completing a 4-year college degree?", es: "¿Donde mas adultos estan completando una carrera universitaria de 4 años?", measure: "4yr_degreeplus" },
      { text: "Where are students strengthening math skills by 5th grade?", es: "¿Donde estan fortaleciendo matematicas los estudiantes de 5º grado?", measure: "5th_grade_math" },
    ],
  },
  {
    key: "thriving-communities",
    title: "Thriving Communities",
    image: "assets/tfff-thriving-communities.png",
    questions: [
      { text: "Where do Oregonians show up most strongly at the polls?", es: "¿Donde participan mas los habitantes de Oregon en las elecciones?", measure: "voter_participation" },
      { text: "Where are communities growing through new residents?", es: "¿Donde estan creciendo las comunidades con nuevos residentes?", measure: "net_migration" },
      { text: "Do people in my community have access to high-speed internet?", es: "¿Las personas de mi comunidad tienen acceso a internet de alta velocidad?", measure: "broadband_access" },
    ],
  },
];
const SUBJECT_LABELS_ES = {
  "Demographics and Land": "Demografía y tierra",
  Community: "Comunidad",
  Education: "Educación",
  Economy: "Economía",
  Health: "Salud",
  Infrastructure: "Infraestructura",
};
const MEASURE_LABELS_ES = {
  total_population: "Población total",
  population_density: "Densidad poblacional",
  rural_population: "Población rural",
  net_migration: "Migración neta",
  median_income: "Ingreso mediano del hogar",
  land_area: "Área total de tierra",
  publicly_owned_lands: "Tierra pública",
  developed_land: "Tierra desarrollada",
  life_expectancy_total: "Esperanza de vida",
  race_ethnicity: "Población por raza/etnicidad",
  population_pyramid: "Población por edad",
  food_insecurity: "Inseguridad alimentaria",
  child_poverty: "Pobreza infantil",
  foster_care: "Tasa de cuidado de crianza (por 1,000 hab.)",
  index_crime: "Delitos índice (por 1,000 hab.)",
  voter_participation: "Participación electoral",
  "3rd_grade_reading": "Lectura de 3er grado",
  "5th_grade_math": "Matemáticas de 5º grado",
  ninth_grade_on_track: "9º grado en camino",
  "5_yr_hs_grad_rate": "Tasa de graduación de secundaria en 5 años",
  "4yr_degreeplus": "Título universitario de 4 años o más",
  households_in_financial_hardship_pct_hhs_in_financial_hardship: "Hogares con dificultades financieras",
  unemployment_rate: "Tasa de desempleo",
  lfpr: "Tasa de participación laboral",
  change_in_gdp: "Cambio en el PIB",
  property_tax_per_person: "Impuesto a la propiedad (por persona)",
  rent_costs: "Costo de renta (1 dormitorio/1 baño)",
  low_weight_births: "Bebés con bajo peso al nacer",
  "2yr_old_vaccination_rate": "Tasa de vacunación, niños de 2 años",
  good_physical_health: "Salud buena o mejor",
  mental_health_providers: "Salud mental (población por proveedor)",
  broadband_access: "Disponibilidad de banda ancha",
  child_care_slots: "Cuidado infantil (cupos por 100 niños)",
  mobile_homes: "Viviendas móviles",
  electric_vehicle_charging_stations: "Estaciones de carga para vehículos eléctricos",
  vehicle_miles_traveled: "Millas recorridas por vehículo (per cápita)",
  adult_tobacco_use: "Uso de tabaco",
};
const DEFINITION_ES = {
  total_population: "El número total de personas que viven dentro de los límites designados de un condado.",
  population_density: "El número de personas que viven en un condado por milla cuadrada de tierra.",
  rural_population: "El porcentaje de personas que viven fuera de áreas designadas como urbanas por la Oficina del Censo de EE. UU.",
  net_migration: "El cambio de población por cada 1,000 residentes debido a personas que se mudan hacia dentro o fuera de un área durante un periodo específico.",
  median_income: "El ingreso del hogar en el que 50% de los hogares del condado ganan menos y 50% ganan más.",
  land_area: "El área total de tierra dentro de los límites de cada condado, medida en millas cuadradas.",
  publicly_owned_lands: "El porcentaje del área total de tierra de un condado que es pública en lugar de privada.",
  developed_land: "El porcentaje de cobertura total de tierra clasificada como desarrollada según la Base Nacional de Cobertura de Suelo.",
  life_expectancy_total: "El número promedio de años que se espera que viva una persona desde su nacimiento.",
  race_ethnicity: "La distribución de la población por categorías de raza y etnicidad.",
  population_pyramid: "La distribución de la población por edad y sexo.",
  food_insecurity: "El porcentaje de personas con acceso limitado o incierto a alimentos adecuados.",
  child_poverty: "El porcentaje de niños que viven en hogares por debajo del umbral de pobreza.",
  foster_care: "El número de niños en cuidado de crianza por cada 1,000 niños.",
  index_crime: "El número de delitos índice reportados por cada 1,000 habitantes.",
  voter_participation: "El porcentaje de votantes elegibles que participaron en la elección.",
  "3rd_grade_reading": "El porcentaje de estudiantes de tercer grado que cumplen o superan los estándares estatales de lectura.",
  "5th_grade_math": "El porcentaje de estudiantes de quinto grado que cumplen o superan los estándares estatales de matemáticas.",
  ninth_grade_on_track: "El porcentaje de estudiantes de noveno grado que asistieron regularmente y completaron todos los cursos básicos.",
  "5_yr_hs_grad_rate": "El porcentaje de estudiantes que obtuvieron un diploma estándar de secundaria dentro de cinco años.",
  "4yr_degreeplus": "El porcentaje de adultos con un título universitario de cuatro años o superior.",
  households_in_financial_hardship_pct_hhs_in_financial_hardship: "El porcentaje de hogares que viven por debajo del umbral ALICE o por debajo del nivel de pobreza.",
  unemployment_rate: "El porcentaje de la fuerza laboral civil que está desempleada.",
  lfpr: "La relación entre la fuerza laboral civil y la población total de 16 años o más.",
  change_in_gdp: "El cambio porcentual en el producto interno bruto real de un condado.",
  property_tax_per_person: "La cantidad de impuestos a la propiedad recaudados por persona.",
  rent_costs: "El alquiler justo de mercado para un apartamento de un dormitorio y un baño.",
  low_weight_births: "El porcentaje de bebés nacidos con bajo peso al nacer.",
  "2yr_old_vaccination_rate": "El porcentaje de niños de dos años que recibieron las vacunas recomendadas.",
  good_physical_health: "El porcentaje de adultos que reportan tener salud física buena o mejor.",
  mental_health_providers: "El número de adultos potencialmente atendidos por un proveedor de salud mental.",
  broadband_access: "El porcentaje de hogares con internet de banda ancha cableada disponible para contratar.",
  child_care_slots: "El número de cupos de cuidado infantil disponibles por cada 100 niños menores de 13 años.",
  mobile_homes: "El porcentaje de viviendas que son casas móviles.",
  electric_vehicle_charging_stations: "El número de estaciones de carga para vehículos eléctricos.",
  vehicle_miles_traveled: "Las millas recorridas por vehículo por persona.",
  adult_tobacco_use: "El porcentaje de adultos que usan tabaco.",
};
const PRINCIPLE_TITLES_ES = {
  "Strong Starts": "Comienzos fuertes",
  "Bright Futures": "Futuros brillantes",
  "Thriving Communities": "Comunidades prósperas",
};
const STATE_REF_LABELS_ES = {
  Oregon: "Oregon",
  Rural: "Rural",
  Urban: "Urbano",
};
const RACE_LABELS_ES = {
  "American Indian/Alaska Native": "Indígena americano/Nativo de Alaska",
  Asian: "Asiático",
  "Black/African American": "Negro/Afroamericano",
  "Hispanic/Latino": "Hispano/Latino",
  "Native Hawaiian/Pacific Islander": "Nativo de Hawái/Isleño del Pacífico",
  "Some other race": "Otra raza",
  "Two or more races": "Dos o más razas",
  White: "Blanco",
};
const INDUSTRY_LABELS_ES = {
  "Food services and drinking places": "Servicios de comida y bebidas",
  "Professional and technical services": "Servicios profesionales y técnicos",
  "Educational services": "Servicios educativos",
  "Health care": "Atención médica",
  "Health care and social assistance": "Atención médica y asistencia social",
  Manufacturing: "Manufactura",
  Construction: "Construcción",
  "Wood product manufacturing": "Manufactura de productos de madera",
  "Administrative and support services": "Servicios administrativos y de apoyo",
  "Gasoline stations": "Gasolineras",
};
const CHILDCARE_ACCESS_BY_AGE = {
  Baker: { infantToddler: 15, preschool: 51, schoolAge: 3, allAges: 16 },
  Benton: { infantToddler: 28, preschool: 58, schoolAge: 12, allAges: 25 },
  Clackamas: { infantToddler: 23, preschool: 48, schoolAge: 11, allAges: 21 },
  Clatsop: { infantToddler: 18, preschool: 60, schoolAge: 8, allAges: 21 },
  Columbia: { infantToddler: 15, preschool: 46, schoolAge: 7, allAges: 17 },
  Coos: { infantToddler: 20, preschool: 39, schoolAge: 13, allAges: 20 },
  Crook: { infantToddler: 9, preschool: 49, schoolAge: 7, allAges: 17 },
  Curry: { infantToddler: 9, preschool: 38, schoolAge: 2, allAges: 11 },
  Deschutes: { infantToddler: 26, preschool: 56, schoolAge: 15, allAges: 26 },
  Douglas: { infantToddler: 22, preschool: 44, schoolAge: 6, allAges: 17 },
  Gilliam: { infantToddler: 43, preschool: 71, schoolAge: 3, allAges: 26 },
  Grant: { infantToddler: 29, preschool: 76, schoolAge: 3, allAges: 25 },
  Harney: { infantToddler: 0, preschool: 46, schoolAge: 10, allAges: 17 },
  "Hood River": { infantToddler: 30, preschool: 56, schoolAge: 21, allAges: 30 },
  Jackson: { infantToddler: 14, preschool: 47, schoolAge: 17, allAges: 23 },
  Jefferson: { infantToddler: 22, preschool: 46, schoolAge: 8, allAges: 20 },
  Josephine: { infantToddler: 20, preschool: 45, schoolAge: 14, allAges: 22 },
  Klamath: { infantToddler: 22, preschool: 48, schoolAge: 6, allAges: 18 },
  Lake: { infantToddler: 9, preschool: 45, schoolAge: 5, allAges: 15 },
  Lane: { infantToddler: 21, preschool: 49, schoolAge: 14, allAges: 23 },
  Lincoln: { infantToddler: 12, preschool: 53, schoolAge: 11, allAges: 20 },
  Linn: { infantToddler: 13, preschool: 35, schoolAge: 14, allAges: 18 },
  Malheur: { infantToddler: 23, preschool: 47, schoolAge: 8, allAges: 20 },
  Marion: { infantToddler: 18, preschool: 38, schoolAge: 10, allAges: 18 },
  Morrow: { infantToddler: 19, preschool: 44, schoolAge: 4, allAges: 16 },
  Multnomah: { infantToddler: 34, preschool: 64, schoolAge: 18, allAges: 32 },
  Polk: { infantToddler: 23, preschool: 36, schoolAge: 8, allAges: 18 },
  Sherman: { infantToddler: 23, preschool: 71, schoolAge: 4, allAges: 25 },
  Tillamook: { infantToddler: 9, preschool: 35, schoolAge: 2, allAges: 11 },
  Umatilla: { infantToddler: 24, preschool: 55, schoolAge: 11, allAges: 23 },
  Union: { infantToddler: 21, preschool: 65, schoolAge: 7, allAges: 23 },
  Wallowa: { infantToddler: 20, preschool: 44, schoolAge: 8, allAges: 18 },
  Wasco: { infantToddler: 33, preschool: 75, schoolAge: 6, allAges: 27 },
  Washington: { infantToddler: 30, preschool: 56, schoolAge: 13, allAges: 26 },
  Wheeler: { infantToddler: 0, preschool: 82, schoolAge: 0, allAges: 19 },
  Yamhill: { infantToddler: 21, preschool: 41, schoolAge: 11, allAges: 20 },
  Oregon: { infantToddler: 24, preschool: 51, schoolAge: 13, allAges: 24 },
};

let currentMeasure = "";
let currentWhen = "2024";
let currentCounty = "Douglas";
let activeView = "start";
let currentLanguage = "en";
let suppressHistory = false;

const $ = (id) => document.getElementById(id);

function t(key) {
  return UI_TEXT[currentLanguage][key] || UI_TEXT.en[key] || key;
}

function subjectLabel(subject) {
  return currentLanguage === "es" ? SUBJECT_LABELS_ES[subject] || subject : subject;
}

function measureLabel(m) {
  return currentLanguage === "es" ? MEASURE_LABELS_ES[m.key] || titleCaseMeasure(m.shortName) : titleCaseMeasure(m.shortName);
}

function definitionText(m, concise = false) {
  if (currentLanguage === "es") return DEFINITION_ES[m.key] || conciseDefinition(m.definition);
  return concise ? conciseDefinition(m.definition) : m.definition;
}

function sourceText(source) {
  return currentLanguage === "es" ? String(source || "").replace(/^Source:/, "Fuente:") : source;
}

function stateRefLabel(label) {
  return currentLanguage === "es" ? STATE_REF_LABELS_ES[label] || label : label;
}

function principleTitle(title) {
  return currentLanguage === "es" ? PRINCIPLE_TITLES_ES[title] || title : title;
}

function raceLabel(label) {
  return currentLanguage === "es" ? RACE_LABELS_ES[label] || label : label;
}

function industryLabel(label) {
  return currentLanguage === "es" ? INDUSTRY_LABELS_ES[label] || label : label;
}

function countyTitle(county) {
  return currentLanguage === "es" ? `Condado de ${county}` : `${county} County`;
}

function scalar(value) {
  return typeof value === "number" ? value : null;
}

function measure(key) {
  return DATA.measures[key];
}

function stripOxfordComma(text) {
  return String(text ?? "").replace(/, (and|or)\b/g, " $1");
}

function format(value, m) {
  if (value === null || value === undefined || value === "") return t("noData");
  if (typeof value === "object") return t("viewBreakdown");
  const n = Number(value);
  if (Number.isNaN(n)) return String(value);
  if (m.format === "currency") return `$${Math.round(n).toLocaleString()}`;
  if (m.format === "number") return Math.abs(n) >= 1000 ? Math.round(n).toLocaleString() : n.toFixed(1);
  if (m.format === "ratio") return `${Math.round(n).toLocaleString()}:1`;
  return `${n.toFixed(1)}%`;
}

function unitLabel(m) {
  if (m.format === "currency") return t("amount");
  if (m.format === "ratio") return t("ratio");
  if (m.format === "number") {
    if (m.name === "Child Care Slots") return t("slotsPer100");
    if (m.name === "Net Migration") return t("per1000");
    if (m.name === "Foster Care" || m.name === "Index Crime") return t("per1000");
    if (m.name === "Vehicle Miles Traveled") return t("milesPerPerson");
    if (m.name.includes("Life Expectancy")) return t("years");
    return t("amount");
  }
  return t("percentage");
}

function conciseDefinition(text) {
  const protectedText = String(text ?? "")
    .replaceAll("U.S.", "U§S§")
    .replaceAll("D.C.", "D§C§");
  const match = protectedText.match(/^.*?[.!?](?:\s|$)/);
  return (match ? match[0] : protectedText).replaceAll("U§S§", "U.S.").replaceAll("D§C§", "D.C.").trim();
}

function titleCaseMeasure(name) {
  const smallWords = new Set(["and", "or", "the", "of", "in", "on", "per", "for", "to", "by", "with"]);
  return String(name ?? "")
    .split(/(\s+|-|\/|\(|\))/)
    .map((part, index) => {
      if (!/[A-Za-z]/.test(part)) return part;
      if (/^[A-Z0-9+]{2,}$/.test(part)) return part;
      const lower = part.toLowerCase();
      if (index > 0 && smallWords.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

function latestAvailable(m) {
  return m.available.find((item) => !item.disabled) || m.available[0];
}

function valueFor(mKey, when, geo) {
  const m = DATA.measures[mKey] || DATA.profileOnlyMeasures?.[mKey];
  return m?.values?.[when]?.[geo] ?? null;
}

function countyNames() {
  return Object.keys(DATA.counties).sort();
}

function setView(view) {
  activeView = view;
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  $(`${view}View`).classList.add("active");
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "profiles") renderProfiles();
  if (view === "samples") renderSamples();
}

function pushState(state) {
  if (suppressHistory) return;
  const hash = Object.entries(state)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
  history.pushState(state, "", `#${hash}`);
}

function navigateView(view) {
  setView(view);
  pushState({ view });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelector('[data-view="start"]').textContent = t("start");
  document.querySelector('[data-view="profiles"]').textContent = t("profiles");
  document.querySelector('[data-view="samples"]').textContent = t("samples");
  $("languageToggle").textContent = t("language");
  document.querySelector("#routeForm .eyebrow").textContent = t("startHere");
  document.querySelector("#routeForm h1").textContent = t("startTitle");
  document.querySelector(".start-aside .eyebrow").textContent = t("anotherWay");
  document.querySelector(".start-aside h2").textContent = t("startAside");
  document.querySelector(".start-aside .secondary-action").textContent = t("browseQuestions");
  document.querySelector(".samples-page h2").textContent = t("sampleTitle");
  document.querySelector(".publication-link").innerHTML = `${esc(t("publicationPrefix"))} <a href="https://www.tfff.org/oregon-numbers/" target="_blank" rel="noopener">Oregon by the Numbers</a>.`;
  document.querySelectorAll(".back-button").forEach((button) => {
    button.textContent = button.dataset.view === "profiles" ? t("backToCountyMap") : t("backStart");
  });
  document.querySelector(".county-definition-panel h3").textContent = t("definition");
  document.querySelector(".profiles-heading h2").innerHTML = currentLanguage === "es"
    ? "Ayudando a todo Oregon a ver <em>todo</em> Oregon"
    : "Helping all of Oregon see <em>all</em> of Oregon";
  document.querySelector(".profiles-heading p").textContent = t("chooseCountyProfile");
  document.querySelector(".profile-header .eyebrow").textContent = t("countyProfile");
  document.querySelector(".legend .top").parentElement.lastChild.textContent = t("topThird");
  document.querySelector(".legend .middle").parentElement.lastChild.textContent = t("middleThird");
  document.querySelector(".legend .bottom").parentElement.lastChild.textContent = t("bottomThird");
  document.querySelector(".rank-header span:nth-child(1)").textContent = t("rank");
  document.querySelector(".rank-header span:nth-child(2)").textContent = t("county");
  document.querySelector("#rankUnit").textContent = t("value");
  const labels = document.querySelectorAll("#routeForm > label > span, #routeForm legend");
  if (labels[0]) labels[0].textContent = t("what");
  if (labels[1]) labels[1].textContent = t("county");
  const legend = document.querySelector("#routeForm legend");
  if (legend) legend.textContent = t("where");
  const whenLabel = document.querySelector("#routeForm > label:not(.hidden):last-of-type span");
  if (whenLabel) whenLabel.textContent = t("when");
  document.querySelector('input[value="oregon"] + span').textContent = t("exploreOregon");
  document.querySelector('input[value="county"] + span').textContent = t("exploreCounty");
  document.querySelector("#routeForm .action-button").textContent = t("explore");
  buildWhatSelect();
  buildWhenSelect();
  buildCountySelect();
  if (activeView === "measure" && currentMeasure) renderMeasurePage(currentMeasure, currentWhen);
  if (activeView === "countyMeasure" && currentMeasure) openCountyMeasure(currentCounty, currentMeasure, currentWhen);
  if (activeView === "countyProfile") openCountyProfile(currentCounty);
  if (activeView === "samples") renderSamples();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  suppressHistory = true;
  applyLanguage();
  suppressHistory = false;
}

function buildWhatSelect() {
  const text = UI_TEXT[currentLanguage];
  $("whatSelect").innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = text.chooseMeasure;
  placeholder.disabled = true;
  placeholder.selected = true;
  $("whatSelect").appendChild(placeholder);
  Object.entries(DATA.subjects).forEach(([subject, names]) => {
    const group = document.createElement("optgroup");
    group.label = subjectLabel(subject);
    names.forEach((name) => {
      const mKey = Object.keys(DATA.measures).find((key) => DATA.measures[key].name === name);
      if (!mKey) return;
      const option = document.createElement("option");
      option.value = mKey;
      option.textContent = measureLabel(DATA.measures[mKey]);
      group.appendChild(option);
    });
    if (group.children.length) $("whatSelect").appendChild(group);
  });
  $("whatSelect").value = currentMeasure;
}

function buildCountySelect() {
  if (!currentMeasure) {
    $("routeCountySelect").innerHTML = "";
    $("routeCountySelect").disabled = true;
    $("countyAvailabilityNote").textContent = "";
    return;
  }
  const m = measure(currentMeasure);
  $("routeCountySelect").disabled = false;
  $("routeCountySelect").innerHTML = "";
  countyNames().forEach((county) => {
    const option = document.createElement("option");
    option.value = county;
    option.textContent = m.insufficientCounties.includes(county) ? `${county}  ⓘ` : county;
    option.disabled = m.insufficientCounties.includes(county);
    option.title = option.disabled ? t("insufficient") : "";
    $("routeCountySelect").appendChild(option);
  });
  if (m.insufficientCounties.includes(currentCounty)) {
    currentCounty = countyNames().find((county) => !m.insufficientCounties.includes(county));
  }
  $("routeCountySelect").value = currentCounty;
  $("countyAvailabilityNote").textContent = m.insufficientCounties.length
    ? `ⓘ ${m.insufficientCounties.join("; ")}: ${t("insufficient")}`
    : "";
}

function buildWhenSelect() {
  if (!currentMeasure) {
    $("whenSelect").innerHTML = `<option value="" selected disabled>${esc(t("chooseMeasureFirst"))}</option>`;
    $("whenSelect").disabled = true;
    $("whenNote").textContent = "";
    return;
  }
  const m = measure(currentMeasure);
  $("whenSelect").disabled = false;
  $("whenSelect").innerHTML = "";
  m.available.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.label;
    option.textContent = item.disabled ? `${item.label} (${t("notLoaded")})` : item.label;
    option.disabled = item.disabled;
    $("whenSelect").appendChild(option);
  });
  const latest = latestAvailable(m);
  currentWhen = m.available.some((item) => item.label === currentWhen && !item.disabled) ? currentWhen : latest.label;
  $("whenSelect").value = currentWhen;
  if (m.singleYearOnly) {
    $("whenNote").textContent = t("oneYear");
  } else if (m.name.includes("Reading") || m.name.includes("Math") || m.name.includes("Ninth")) {
    $("whenNote").textContent = t("academicYears");
  } else {
    $("whenNote").textContent = "";
  }
}

function updateRouteControls() {
  currentMeasure = $("whatSelect").value;
  buildWhenSelect();
  buildCountySelect();
  const countyMode = document.querySelector("input[name='whereMode']:checked").value === "county";
  $("countyRouteLabel").classList.toggle("hidden", !countyMode);
  document.querySelector("#routeForm .action-button").disabled = !currentMeasure;
}

function rankedRows(mKey, when) {
  const m = measure(mKey);
  return countyNames()
    .map((county) => ({ county, value: scalar(valueFor(mKey, when, county)) }))
    .filter((row) => row.value !== null)
    .sort((a, b) => b.value - a.value);
}

function tertileClass(mKey, when, county) {
  const rows = rankedRows(mKey, when);
  const index = rows.findIndex((row) => row.county === county);
  if (index < 0) return "missing";
  const third = Math.ceil(rows.length / 3);
  if (index < third) return "top";
  if (index < third * 2) return "middle";
  return "bottom";
}

function mapSvg({ target, mKey, when, labels = false, profile = false }) {
  const m = measure(mKey);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 820 620");
  svg.classList.add("oregon-svg");
  const labelsLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  labelsLayer.classList.add("county-label-layer");
  countyNames().forEach((county) => {
    const info = DATA.counties[county];
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.dataset.county = county;
    group.classList.add("county", profile ? "profile-fill" : tertileClass(mKey, when, county));
    if (county === currentCounty) group.classList.add("selected");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", info.path);
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = profile ? county : `${county}: ${format(valueFor(mKey, when, county), m)}`;
    group.append(path, title);
    if (labels || profile) {
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", info.labelX.toFixed(1));
      text.setAttribute("y", info.labelY.toFixed(1));
      text.dataset.county = county;
      text.textContent = county;
      labelsLayer.appendChild(text);
    }
    group.addEventListener("mouseenter", (event) => (profile ? hoverProfileCounty(county, event) : hoverCounty(county, event)));
    group.addEventListener("mouseleave", clearHover);
    group.addEventListener("click", () => {
      if (profile) openCountyProfile(county);
      else openCountyMeasure(county, mKey, when);
    });
    svg.appendChild(group);
  });
  if (labels || profile) svg.appendChild(labelsLayer);
  target.innerHTML = "";
  target.appendChild(svg);
}

function childcareKey(county) {
  return county === "Hood River" ? "Hood River" : county;
}

function childcareAgeValue(county, ageKey) {
  return CHILDCARE_ACCESS_BY_AGE[childcareKey(county)]?.[ageKey] ?? null;
}

function childcareDesertClass(value) {
  if (value === null) return "missing";
  if (value <= 10) return "severe-desert";
  if (value < 33) return "desert";
  return "not-desert";
}

function childcareAgeLabel(ageKey) {
  return {
    infantToddler: t("infantToddlers"),
    preschool: t("preschoolAge"),
    schoolAge: t("schoolAge"),
    allAges: t("allAges"),
  }[ageKey];
}

function childcareAgeMapSvg(ageKey) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 820 620");
  svg.classList.add("oregon-svg", "childcare-age-svg");
  countyNames().forEach((county) => {
    const info = DATA.counties[county];
    const value = childcareAgeValue(county, ageKey);
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.dataset.county = county;
    group.classList.add("county", "childcare-county", childcareDesertClass(value));
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", info.path);
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${county}: ${value === null ? t("noData") : `${value}%`} ${t("accessFor")} ${childcareAgeLabel(ageKey).toLowerCase()}`;
    group.append(path, title);
    group.addEventListener("mouseenter", (event) => hoverChildcareAgeCounty(county, event));
    group.addEventListener("mouseleave", clearHover);
    group.addEventListener("click", () => openCountyMeasure(county, "child_care_slots", latestAvailable(measure("child_care_slots")).label));
    svg.appendChild(group);
  });
  return svg;
}

function hoverChildcareAgeCounty(county, event) {
  document.querySelectorAll(`[data-county="${county}"]`).forEach((el) => el.classList.add("hovered"));
  const row = CHILDCARE_ACCESS_BY_AGE[childcareKey(county)];
  const tooltip = $("tooltip");
  tooltip.innerHTML = `<strong>${county}</strong><span>${t("infantToddlers")}: ${row.infantToddler}%</span><span>${t("preschoolAge")}: ${row.preschool}%</span>`;
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
  tooltip.classList.add("visible");
}

function hoverProfileCounty(county, event) {
  document.querySelectorAll(`[data-county="${county}"]`).forEach((el) => el.classList.add("hovered"));
  const tooltip = $("tooltip");
  tooltip.innerHTML = `<strong>${county}</strong><span>${t("openCountyProfile")}</span>`;
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
  tooltip.classList.add("visible");
}

function renderChildcareAgePanel(mKey) {
  const panel = $("childcareAgePanel");
  if (mKey !== "child_care_slots") {
    panel.classList.remove("active");
    panel.innerHTML = "";
    return;
  }
  panel.classList.add("active");
  panel.innerHTML = `
    <div class="childcare-age-copy">
      <p class="eyebrow">${esc(t("ageGroupAccess"))}</p>
      <h3>${esc(t("childcareHeadline"))}</h3>
      <p>${esc(t("childcareCopy"))}</p>
    </div>
    <div class="childcare-compare">
      <div class="childcare-map-labels">
        <span>${esc(t("infantToddlers"))}</span>
        <span>${esc(t("preschoolAge"))}</span>
      </div>
      <div class="childcare-map-compare" id="childcareCompareMap">
        <div class="childcare-layer base" id="childcareBaseMap"></div>
        <div class="childcare-layer reveal" id="childcareRevealMap"></div>
        <div class="childcare-handle" aria-hidden="true"></div>
        <input class="childcare-slider" id="childcareAgeSlider" type="range" min="0" max="100" value="50" aria-label="${esc(t("compareChildcareMaps"))}" />
      </div>
      <div class="childcare-desert-legend">
        <span><i class="not-desert"></i><strong>${esc(t("notDesert"))}</strong><em>${esc(t("availability33"))}</em></span>
        <span><i class="desert"></i><strong>${esc(t("desert"))}</strong><em>${esc(t("availabilityUnder33"))}</em></span>
        <span><i class="severe-desert"></i><strong>${esc(t("severeDesert"))}</strong><em>${esc(t("availability10"))}</em></span>
      </div>
    </div>
    <div class="childcare-age-table-wrap">
      <table class="childcare-age-table">
        <thead>
          <tr><th>${esc(t("county"))}</th><th>0-2</th><th>3-5</th><th>${esc(t("schoolAge"))}</th><th>${esc(t("allAges"))}</th></tr>
        </thead>
        <tbody>
          ${countyNames().map((county) => {
            const row = CHILDCARE_ACCESS_BY_AGE[childcareKey(county)];
            return `<tr data-county="${county}">
              <th>${esc(county)}</th>
              <td>${row.infantToddler}%</td>
              <td>${row.preschool}%</td>
              <td>${row.schoolAge}%</td>
              <td>${row.allAges}%</td>
            </tr>`;
          }).join("")}
          <tr class="oregon-row"><th>Oregon</th><td>${CHILDCARE_ACCESS_BY_AGE.Oregon.infantToddler}%</td><td>${CHILDCARE_ACCESS_BY_AGE.Oregon.preschool}%</td><td>${CHILDCARE_ACCESS_BY_AGE.Oregon.schoolAge}%</td><td>${CHILDCARE_ACCESS_BY_AGE.Oregon.allAges}%</td></tr>
        </tbody>
      </table>
    </div>
  `;
  $("childcareBaseMap").appendChild(childcareAgeMapSvg("preschool"));
  $("childcareRevealMap").appendChild(childcareAgeMapSvg("infantToddler"));
  const compare = $("childcareCompareMap");
  const slider = $("childcareAgeSlider");
  const updateReveal = () => compare.style.setProperty("--reveal", `${slider.value}%`);
  slider.addEventListener("input", updateReveal);
  updateReveal();
  panel.querySelectorAll("tbody tr[data-county]").forEach((row) => {
    row.addEventListener("mouseenter", (event) => hoverChildcareAgeCounty(row.dataset.county, event));
    row.addEventListener("mouseleave", clearHover);
    row.addEventListener("click", () => openCountyMeasure(row.dataset.county, "child_care_slots", latestAvailable(measure("child_care_slots")).label));
  });
}

function hoverCounty(county, event) {
  document.querySelectorAll(`[data-county="${county}"]`).forEach((el) => el.classList.add("hovered"));
  const m = measure(currentMeasure);
  const tooltip = $("tooltip");
  tooltip.innerHTML = `<strong>${county}</strong><span>${format(valueFor(currentMeasure, currentWhen, county), m)}</span>`;
  tooltip.style.left = `${event.clientX + 14}px`;
  tooltip.style.top = `${event.clientY + 14}px`;
  tooltip.classList.add("visible");
}

function clearHover() {
  document.querySelectorAll(".hovered").forEach((el) => el.classList.remove("hovered"));
  $("tooltip").classList.remove("visible");
}

function renderMeasurePage(mKey = currentMeasure, when = currentWhen) {
  currentMeasure = mKey;
  currentWhen = when;
  const m = measure(mKey);
  $("measureSubject").textContent = subjectLabel(m.subject);
  $("measureTitle").textContent = measureLabel(m);
  $("measureDefinition").innerHTML = `<strong>${esc(t("definition"))}:</strong> ${esc(stripOxfordComma(definitionText(m, true)))}`;
  $("measureDescription").textContent = t("hoverMap");
  $("measureSource").textContent = sourceText(m.source);
  $("rankUnit").textContent = unitLabel(m);
  renderTimeControl(mKey, when);
  mapSvg({ target: $("measureMap"), mKey, when });
  renderRank(mKey, when);
  renderChildcareAgePanel(mKey);
  setView("measure");
  pushState({ view: "measure", measure: mKey, when });
}

function renderTimeControl(mKey, when) {
  const m = measure(mKey);
  const enabled = m.available.filter((item) => !item.disabled);
  if (enabled.length <= 1) {
    $("measureTimeControl").innerHTML = "";
    $("measureTimeControl").classList.remove("time-control");
    return;
  }
  $("measureTimeControl").classList.add("time-control");
  $("measureTimeControl").innerHTML = `
    <label>${esc(t("exploreByYear"))}</label>
    <div class="time-dots">${enabled.map((item) => `<button class="${item.label === when ? "active" : ""}" data-when="${item.label}" type="button">${item.label}</button>`).join("")}</div>
  `;
  $("measureTimeControl").querySelectorAll("[data-when]").forEach((button) => {
    button.addEventListener("click", () => renderMeasurePage(mKey, button.dataset.when));
  });
}

function renderRank(mKey, when) {
  const m = measure(mKey);
  const rows = rankedRows(mKey, when);
  $("rankList").innerHTML = "";
  rows.forEach((row, index) => {
    const div = document.createElement("button");
    div.type = "button";
    div.className = "rank-row";
    div.dataset.county = row.county;
    div.innerHTML = `<span>${index + 1}</span><span>${row.county}</span><span>${format(row.value, m)}</span>`;
    div.addEventListener("mouseenter", (event) => hoverCounty(row.county, event));
    div.addEventListener("mouseleave", clearHover);
    div.addEventListener("click", () => openCountyMeasure(row.county, mKey, when));
    $("rankList").appendChild(div);
  });
  STATE_REFS.forEach((geo) => {
    const value = scalar(valueFor(mKey, when, geo));
    if (value === null) return;
    const div = document.createElement("div");
    div.className = "rank-row reference";
    div.innerHTML = `<span></span><span>${stateRefLabel(geo)}</span><span>${format(value, m)}</span>`;
    $("rankList").appendChild(div);
  });
}

function openCountyMeasure(county, mKey, when) {
  currentCounty = county;
  currentMeasure = mKey;
  currentWhen = when;
  const m = measure(mKey);
  $("countyMeasureSubject").textContent = subjectLabel(m.subject);
  $("countyMeasureTitle").textContent = `${countyTitle(county)}: ${measureLabel(m)}`;
  $("countyMeasureDefinition").textContent = stripOxfordComma(definitionText(m));
  $("countyMeasureSource").textContent = sourceText(m.source);
  $("trendTitle").textContent = `${measureLabel(m)} ${t("byYear")}`;
  renderCountyVisualization(county, mKey, when);
  $("countyStateMapTitle").textContent = `${measureLabel(m)} ${t("acrossOregon")}`;
  mapSvg({ target: $("countyStateMap"), mKey, when });
  const countyValue = valueFor(mKey, when, county);
  const hasGraphicValue = countyValue && typeof countyValue === "object";
  $("countyContext").innerHTML = `
    ${hasGraphicValue ? "" : `<h3>${format(countyValue, m)}</h3>`}
    <p>${when}</p>
    <button class="text-button" type="button" id="backToCountyProfile">${esc(t("backToProfile"))}</button>
    <button class="text-button" type="button" id="countyToState">${esc(t("viewStatewide"))}</button>
  `;
  $("backToCountyProfile").addEventListener("click", () => openCountyProfile(county));
  $("countyToState").addEventListener("click", () => renderMeasurePage(mKey, when));
  setView("countyMeasure");
  pushState({ view: "countyMeasure", county, measure: mKey, when });
}

function renderCountyVisualization(county, mKey, when) {
  const m = measure(mKey);
  const selectedValue = valueFor(mKey, when, county);
  if (selectedValue && typeof selectedValue === "object") {
    renderClusterCountyView(county, mKey, when);
    return;
  }
  renderTrend(county, mKey);
}

function renderCountyYearControl(county, mKey, when, onChangeName) {
  const m = measure(mKey);
  const enabled = m.available.filter((item) => !item.disabled && valueFor(mKey, item.label, county) !== null);
  if (enabled.length <= 1) return "";
  return `
    <div class="time-control county-time-control">
      <label>${esc(t("exploreByYear"))}</label>
      <div class="time-dots">${enabled.map((item) => `<button class="${item.label === when ? "active" : ""}" data-cluster-when="${item.label}" type="button">${item.label}</button>`).join("")}</div>
    </div>
  `;
}

function bindCountyYearControl(county, mKey) {
  $("trendChart").querySelectorAll("[data-cluster-when]").forEach((button) => {
    button.addEventListener("click", () => openCountyMeasure(county, mKey, button.dataset.clusterWhen));
  });
}

function renderClusterCountyView(county, mKey, when) {
  const m = measure(mKey);
  const value = valueFor(mKey, when, county);
  let visual = `<div class="empty-chart">${esc(t("profileUnavailable"))}</div>`;
  if (mKey === "population_pyramid") visual = populationPyramidFromValue(value);
  if (mKey === "race_ethnicity") visual = raceBarsFromValue(value);
  $("trendTitle").textContent = `${measureLabel(m)}: ${when}`;
  $("trendChart").innerHTML = `
    ${renderCountyYearControl(county, mKey, when, "cluster")}
    <div class="cluster-chart ${mKey === "population_pyramid" ? "cluster-pyramid" : "cluster-race"}">${visual}</div>
  `;
  bindCountyYearControl(county, mKey);
}

function populationPyramidFromValue(value) {
  const ages = [
    "0-4",
    "5-9",
    "10-14",
    "15-19",
    "20-24",
    "25-29",
    "30-34",
    "35-39",
    "40-44",
    "45-49",
    "50-54",
    "55-59",
    "60-64",
    "65-69",
    "70-74",
    "75-79",
    "80-84",
    "85+",
  ];
  const rows = ages.map((age) => ({
    age,
    female: Number(value[`Female ${age}`]) || 0,
    male: Number(value[`Male ${age}`]) || 0,
  }));
  const max = Math.max(...rows.flatMap((row) => [row.female, row.male]), 1);
  return `<div class="pyramid detail-pyramid">
    <div class="pyramid-labels"><span>${esc(t("women"))}</span><span></span><span>${esc(t("men"))}</span></div>
    ${rows.slice().reverse().map((row) => `<div class="pyramid-row">
      <i class="female" style="width:${(row.female / max) * 100}%"></i>
      <span>${esc(row.age)}</span>
      <i class="male" style="width:${(row.male / max) * 100}%"></i>
    </div>`).join("")}
  </div>`;
}

function raceBarsFromValue(value) {
  const labels = [
    ["AIAN", "American Indian/Alaska Native"],
    ["Asian", "Asian"],
    ["Black", "Black/African American"],
    ["Latino", "Hispanic/Latino"],
    ["NHPI", "Native Hawaiian/Pacific Islander"],
    ["Other", "Some other race"],
    ["Multiracial", "Two or more races"],
    ["White", "White"],
  ];
  return `<div class="race-bars detail-race-bars">
    ${labels.map(([key, label]) => {
      const pct = Number(value[key]) || 0;
      return `<div class="race-row"><span>${esc(raceLabel(label))}: ${pct.toFixed(1)}%</span><i style="width:${pct}%"></i></div>`;
    }).join("")}
  </div>`;
}

function renderTrend(county, mKey) {
  const m = measure(mKey);
  const points = m.available
    .filter((item) => !item.disabled)
    .map((item) => ({ label: item.label, value: scalar(valueFor(mKey, item.label, county)) }))
    .filter((p) => p.value !== null)
    .reverse();
  if (!points.length || m.singleYearOnly) {
    $("trendChart").innerHTML = `<div class="empty-chart">${esc(t("trendNotShown"))}</div>`;
    return;
  }
  const vals = points.map((p) => p.value);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const plotHeight = 210;
  const baseline = 280;
  const slot = 520 / Math.max(1, points.length);
  const barWidth = Math.min(86, slot * 0.58);
  const bars = points.map((p, i) => {
    const height = ((p.value - min) / (max - min || 1)) * plotHeight + (max === min ? plotHeight * 0.65 : 10);
    const x = 60 + i * slot + (slot - barWidth) / 2;
    const y = baseline - height;
    return { ...p, x, y, height, width: barWidth };
  });
  $("trendChart").innerHTML = `
    <svg viewBox="0 0 640 340">
      <line x1="44" y1="${baseline}" x2="600" y2="${baseline}" stroke="#d9dfd2" stroke-width="2"></line>
      ${bars.map((p) => `<g>
        <rect class="trend-bar ${p.label === currentWhen ? "active" : ""}" x="${p.x}" y="${p.y}" width="${p.width}" height="${p.height}"></rect>
        <text x="${p.x + p.width / 2}" y="315">${p.label}</text>
        <text x="${p.x + p.width / 2}" y="${p.y - 12}">${format(p.value, m)}</text>
      </g>`).join("")}
    </svg>
  `;
}

function renderProfiles() {
  mapSvg({ target: $("profileMap"), mKey: "child_care_slots", when: latestAvailable(measure("child_care_slots")).label, labels: true, profile: true });
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function latestValue(mKey, county) {
  const m = DATA.measures[mKey] || DATA.profileOnlyMeasures?.[mKey];
  const latest = latestAvailable(m);
  return latest ? valueFor(mKey, latest.label, county) : null;
}

function formatWhole(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.round(n).toLocaleString() : t("noData");
}

function profileMetric(county, mKey, label, suffix = "") {
  const m = DATA.measures[mKey] || DATA.profileOnlyMeasures?.[mKey];
  const value = latestValue(mKey, county);
  let text = value === null ? t("noData") : format(value, m);
  if (mKey === "total_population" || mKey === "land_area" || mKey === "net_migration") text = formatWhole(value);
  return `<button class="profile-stat" type="button" data-measure="${mKey}">
    <span>${esc(label)}</span>
    <strong>${esc(text)}${suffix}</strong>
  </button>`;
}

function countyLocatorMap(county, profile) {
  const info = DATA.counties[county];
  return `<svg class="profile-county-map" viewBox="0 0 820 620" aria-label="${esc(countyTitle(county))} ${esc(t("countyMapAria"))}">
    ${countyNames().map((name) => `<path class="${name === county ? "selected" : ""}" d="${DATA.counties[name].path}"></path>`).join("")}
    <circle cx="${info.labelX.toFixed(1)}" cy="${info.labelY.toFixed(1)}" r="8"></circle>
    <text x="${info.labelX.toFixed(1)}" y="${(info.labelY - 14).toFixed(1)}">${esc(profile.largestCommunity?.name || county)}</text>
  </svg>`;
}

function tribeChips(profile) {
  return Object.entries(profile.tribes || {})
    .filter(([, present]) => present)
    .map(([abbr]) => `<button class="present" type="button" data-tribe="${esc(abbr)}" title="${esc(TRIBE_NAMES[abbr] || abbr)}">${esc(abbr)}</button>`)
    .join("");
}

function tribeList(profile) {
  const present = Object.entries(profile.tribes || {}).filter(([, value]) => value);
  if (!present.length) return `<p class="tribe-note">${esc(t("noTribes"))}</p>`;
  return `<ul class="tribe-list">
    ${present.map(([abbr]) => `<li><strong>${esc(abbr)}</strong><span>${esc(TRIBE_NAMES[abbr] || abbr)}</span></li>`).join("")}
  </ul>`;
}

function tribeCountyMap(abbr) {
  const counties = countyNames().filter((county) => DATA.countyProfiles[county]?.tribes?.[abbr]);
  return `<div class="tribe-map-card">
    <div>
      <h4>${esc(TRIBE_NAMES[abbr] || abbr)}</h4>
      <p>${counties.length ? esc(counties.join("; ")) : esc(t("noTribeCounties"))}</p>
    </div>
    <svg class="tribe-county-map" viewBox="0 0 820 620" aria-label="${esc(TRIBE_NAMES[abbr] || abbr)} ${esc(t("tribeMapAria"))}">
      ${countyNames().map((county) => `<path class="${counties.includes(county) ? "present" : ""}" d="${DATA.counties[county].path}"></path>`).join("")}
    </svg>
  </div>`;
}

function hardshipBar(profile) {
  const hardship = profile.financialHardship || {};
  const poverty = Number(hardship.poverty) || 0;
  const alice = Number(hardship.alice) || 0;
  const above = Math.max(0, 100 - poverty - alice);
  return `<div class="hardship-visual">
    <strong>${formatWhole(hardship.total)}%</strong>
    <div class="hardship-bar">
      <i class="poverty" style="width:${poverty}%">${formatWhole(poverty)}%</i>
      <i class="alice" style="width:${alice}%">${formatWhole(alice)}%</i>
      <i class="above" style="width:${above}%"></i>
    </div>
    <div class="hardship-labels">
      <span class="poverty" style="width:${poverty}%">${esc(t("belowPoverty"))}</span>
      <span class="alice" style="width:${alice}%">${esc(t("belowAlice"))}</span>
      <span style="width:${above}%"></span>
    </div>
  </div>`;
}

function populationPyramid(profile) {
  const rows = (profile.populationAge || []).slice().reverse();
  const max = Math.max(...rows.flatMap((row) => [Number(row.female) || 0, Number(row.male) || 0]), 1);
  return `<div class="pyramid">
    <div class="pyramid-labels"><span>${esc(t("women"))}</span><span></span><span>${esc(t("men"))}</span></div>
    ${rows.map((row) => {
      const female = Number(row.female) || 0;
      const male = Number(row.male) || 0;
      return `<div class="pyramid-row">
        <i class="female" style="width:${(female / max) * 100}%"></i>
        <span>${esc(row.age)}</span>
        <i class="male" style="width:${(male / max) * 100}%"></i>
      </div>`;
    }).join("")}
  </div>`;
}

function raceBars(profile) {
  return `<div class="race-bars">
    ${(profile.raceEthnicity || []).map((item) => {
      const value = Number(item.value) || 0;
      return `<div class="race-row">
        <span>${esc(raceLabel(item.label))}: ${value.toFixed(1)}%</span>
        <i style="width:${value}%"></i>
      </div>`;
    }).join("")}
  </div>`;
}

function industryIcon(name) {
  const lower = String(name || "").toLowerCase();
  let paths = '<path d="M34 18v32M24 28h20M26 50h16"></path>';
  if (lower.includes("food") || lower.includes("drinking")) {
    paths = '<path d="M24 18v18"></path><path d="M30 18v18"></path><path d="M24 28h6"></path><path d="M42 18v32"></path><path d="M38 18c8 8 8 18 0 24"></path>';
  } else if (lower.includes("education") || lower.includes("school")) {
    paths = '<path d="M18 30l18-10 18 10-18 10z"></path><path d="M26 36v10c6 4 14 4 20 0V36"></path>';
  } else if (lower.includes("health") || lower.includes("hospital")) {
    paths = '<path d="M36 18v36"></path><path d="M20 36h32"></path><rect x="20" y="20" width="32" height="32" rx="3"></rect>';
  } else if (lower.includes("manufactur") || lower.includes("wood")) {
    paths = '<path d="M18 50V30l10 6v-8l12 8v-8l12 8v14z"></path><path d="M24 50V38"></path><path d="M36 50V38"></path><path d="M48 50V38"></path>';
  } else if (lower.includes("construction")) {
    paths = '<path d="M20 48h32"></path><path d="M24 48l8-24h8l8 24"></path><path d="M29 34h14"></path><path d="M26 42h20"></path>';
  } else if (lower.includes("professional") || lower.includes("technical") || lower.includes("administrative")) {
    paths = '<rect x="22" y="24" width="28" height="26" rx="2"></rect><path d="M30 24v-6h12v6"></path><path d="M22 34h28"></path>';
  } else if (lower.includes("gasoline")) {
    paths = '<rect x="23" y="20" width="20" height="32" rx="2"></rect><path d="M28 28h10"></path><path d="M43 28l8 8v12c0 3-4 3-4 0V38"></path>';
  }
  return `<svg viewBox="0 0 72 72" aria-hidden="true">${paths}</svg>`;
}

function industryIcons(profile) {
  return `<div class="industry-icons">
    ${(profile.topEmploymentIndustries || []).filter(Boolean).map((name) => `<div>
      <span>${industryIcon(name)}</span>
      <strong>${esc(industryLabel(name))}</strong>
    </div>`).join("")}
  </div>`;
}

function compactMeasureRows(county, subject, measures) {
  const rows = measures
    .filter((m) => m.subject === subject)
    .map((m) => {
      const latest = latestAvailable(m);
      const disabled = m.insufficientCounties.includes(county) || !latest || latest.disabled;
      const value = latest ? valueFor(m.key, latest.label, county) : null;
      const classes = ["profile-measure-row"];
      if (!disabled && !m.profileOnly) classes.push("drillable");
      if (disabled) classes.push("unavailable");
      if (m.profileOnly) classes.push("overview-only");
      return `<button class="${classes.join(" ")}" type="button" data-measure="${m.key}" ${disabled || m.profileOnly ? "disabled" : ""}>
        <span>${esc(measureLabel(m))}</span>
        <strong>${disabled ? esc(t("insufficient")) : esc(format(value, m))}</strong>
      </button>`;
    })
    .join("");
  return rows ? `<section class="profile-measure-group"><h3>${esc(subjectLabel(subject))}</h3>${rows}</section>` : "";
}

function openCountyProfile(county) {
  currentCounty = county;
  $("profileTitle").textContent = countyTitle(county);
  const profile = DATA.countyProfiles[county] || {};
  const allMeasures = [...Object.values(DATA.measures), ...Object.values(DATA.profileOnlyMeasures || {})];
  const subjectOrder = ["Demographics and Land", "Community", "Education", "Economy", "Health", "Infrastructure"];
  $("profileGrid").innerHTML = `
    <section class="profile-spread">
      <div class="profile-banner">${esc(countyTitle(county).toUpperCase())}</div>
      <div class="profile-columns">
        <div class="profile-col">
          <div class="profile-stat-grid">
            ${profileMetric(county, "total_population", measureLabel(measure("total_population")))}
            ${profileMetric(county, "land_area", measureLabel(measure("land_area")), " mi²")}
            ${profileMetric(county, "rural_population", measureLabel(measure("rural_population")))}
            ${profileMetric(county, "net_migration", `${measureLabel(measure("net_migration"))}, 2020-2024`)}
          </div>
          <section class="profile-module tribes-module">
            <h3>${esc(t("tribes"))}</h3>
            <div class="tribe-chips">${tribeChips(profile)}</div>
            ${tribeList(profile)}
            <div class="tribe-map-panel" id="tribeMapPanel"></div>
          </section>
          <section class="profile-module income-module">
            <h3>${esc(t("medianIncome"))}</h3>
            <button type="button" data-measure="median_income">
              <span>${esc(county)}</span><strong>${esc(format(latestValue("median_income", county), measure("median_income")))}</strong>
            </button>
            <button type="button" data-measure="median_income">
              <span>Oregon</span><strong>${esc(format(valueFor("median_income", latestAvailable(measure("median_income")).label, "Oregon"), measure("median_income")))}</strong>
            </button>
          </section>
          <section class="profile-module life-module">
            <h3>${esc(t("lifeExpectancy"))}</h3>
            <div><span>${esc(t("women"))}</span><strong>${formatWhole(profile.lifeExpectancy?.female)}</strong><em>${esc(t("years").toLowerCase())}</em><span>${esc(t("men"))}</span><strong>${formatWhole(profile.lifeExpectancy?.male)}</strong><em>${esc(t("years").toLowerCase())}</em></div>
          </section>
          <section class="profile-module">
            <h3>${esc(t("populationByAge"))}</h3>
            <button class="profile-chart-button" type="button" data-measure="population_pyramid">${populationPyramid(profile)}</button>
          </section>
        </div>
        <div class="profile-col">
          <div class="profile-map-feature">
            <div class="profile-place-stats">
              ${profileMetric(county, "publicly_owned_lands", t("publicLand"))}
              ${profileMetric(county, "developed_land", t("developedLand"))}
            </div>
            ${countyLocatorMap(county, profile)}
            <div class="feature-list">
              <div class="place county-seat"><strong>${esc(profile.countySeat || "")}</strong><span>${esc(t("countySeat"))}</span></div>
              <div class="place largest-community"><strong>${esc(profile.largestCommunity?.name || "")}</strong><span>${esc(t("largestCommunity"))}</span></div>
              ${(profile.notableFeatures || []).map((feature) => `<div class="place notable-feature"><strong>${esc(feature)}</strong><span>${esc(t("notableFeature"))}</span></div>`).join("")}
            </div>
          </div>
          <section class="profile-module">
            <h3>${esc(t("hardship"))}</h3>
            <button class="profile-chart-button" type="button" data-measure="households_in_financial_hardship_pct_hhs_in_financial_hardship">${hardshipBar(profile)}</button>
          </section>
          <section class="profile-module">
            <h3>${esc(t("populationRace"))}</h3>
            <button class="profile-chart-button" type="button" data-measure="race_ethnicity">${raceBars(profile)}</button>
          </section>
          <section class="profile-module">
            <h3>${esc(t("topIndustries"))}</h3>
            ${industryIcons(profile)}
          </section>
        </div>
      </div>
    </section>
    <section class="profile-measure-index">
      ${subjectOrder.map((subject) => compactMeasureRows(county, subject, allMeasures)).join("")}
    </section>
  `;
  document.querySelectorAll(".profile-stat[data-measure], .income-module button, .profile-chart-button, .profile-measure-row:not([disabled])").forEach((button) => {
    button.addEventListener("click", () => {
      const m = measure(button.dataset.measure);
      openCountyMeasure(county, m.key, latestAvailable(m).label);
    });
  });
  document.querySelectorAll(".tribe-chips [data-tribe]").forEach((button) => {
    button.addEventListener("click", () => {
      $("tribeMapPanel").innerHTML = tribeCountyMap(button.dataset.tribe);
    });
  });
  setView("countyProfile");
  pushState({ view: "countyProfile", county });
}

function restoreState(state) {
  if (!state?.view) return;
  suppressHistory = true;
  if (state.view === "countyProfile") openCountyProfile(state.county || currentCounty);
  else if (state.view === "countyMeasure") openCountyMeasure(state.county || currentCounty, state.measure || currentMeasure, state.when || currentWhen);
  else if (state.view === "measure") renderMeasurePage(state.measure || currentMeasure, state.when || currentWhen);
  else setView(state.view);
  suppressHistory = false;
}

function renderSamples() {
  $("sampleGrid").innerHTML = `
    <section class="principle-grid">
      ${SAMPLE_PRINCIPLES.map((group) => `
        <article class="principle-column ${group.key}">
          <img class="principle-image" src="${esc(group.image)}" alt="${esc(group.title)}" />
          <div class="principle-heading">
            <h3>${esc(principleTitle(group.title))}</h3>
          </div>
          <div class="principle-questions">
            ${group.questions.map((q) => `<button class="sample-card principle-question" data-measure="${q.measure}" type="button">${esc(currentLanguage === "es" ? q.es : q.text)}</button>`).join("")}
          </div>
        </article>
      `).join("")}
    </section>
  `;
  $("sampleGrid")
    .querySelectorAll(".sample-card")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const m = measure(button.dataset.measure);
        renderMeasurePage(m.key, latestAvailable(m).label);
      });
    });
}

function bind() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => navigateView(button.dataset.view));
  });
  $("homeButton").addEventListener("click", () => navigateView("start"));
  $("languageToggle").addEventListener("click", toggleLanguage);
  $("whatSelect").addEventListener("change", updateRouteControls);
  $("whenSelect").addEventListener("change", (e) => (currentWhen = e.target.value));
  $("routeCountySelect").addEventListener("change", (e) => (currentCounty = e.target.value));
  document.querySelectorAll("input[name='whereMode']").forEach((radio) => radio.addEventListener("change", updateRouteControls));
  $("routeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!$("whatSelect").value) return;
    const mode = document.querySelector("input[name='whereMode']:checked").value;
    currentMeasure = $("whatSelect").value;
    currentWhen = $("whenSelect").value;
    if (mode === "county") openCountyMeasure($("routeCountySelect").value, currentMeasure, currentWhen);
    else renderMeasurePage(currentMeasure, currentWhen);
  });
  window.addEventListener("popstate", (event) => restoreState(event.state));
}

function init() {
  buildWhatSelect();
  buildCountySelect();
  buildWhenSelect();
  bind();
  applyLanguage();
  history.replaceState({ view: "start" }, "", location.href);
  renderProfiles();
  renderSamples();
}

init();
