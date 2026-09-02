import { LITURGICAL_WEEKS } from '../_data/liturgicalWeeks';

// ============================================================
// 🕐 HELPERS DE DATA
// ============================================================

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function daysBetween(a: Date, b: Date): number {
  const ms = startOfDay(b).getTime() - startOfDay(a).getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function isSameDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}

// ============================================================
// 📆 DATAS LITÚRGICAS
// ============================================================

export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return startOfDay(new Date(year, month - 1, day));
}

export function getFirstAdventSunday(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const dayOfWeek = christmas.getDay();
  const sundayBeforeChristmas = addDays(christmas, -dayOfWeek);
  return startOfDay(addDays(sundayBeforeChristmas, -21));
}

export function getBaptismOfLord(year: number): Date {
  const epiphany = new Date(year, 0, 6);
  const dayOfWeek = epiphany.getDay();
  if (dayOfWeek === 0) return startOfDay(addDays(epiphany, 1));
  return startOfDay(addDays(epiphany, 7 - dayOfWeek));
}

export function getAshWednesday(year: number): Date {
  return addDays(getEasterDate(year), -46);
}

export function getPalmSunday(year: number): Date {
  return addDays(getEasterDate(year), -7);
}

export function getAscension(year: number): Date {
  return addDays(getEasterDate(year), 42);
}

export function getPentecost(year: number): Date {
  return addDays(getEasterDate(year), 49);
}

// ============================================================
// 🎯 FUNÇÃO PRINCIPAL
// ============================================================

export function getCurrentWeekId(date: Date = new Date()): string {
  const today = startOfDay(date);
  const year = today.getFullYear();

  const advent = getFirstAdventSunday(year);
  const advent2 = addDays(advent, 7);
  const advent3 = addDays(advent, 14);
  const advent4 = addDays(advent, 21);
  const christmas = startOfDay(new Date(year, 11, 25));

  if (today < advent) {
    return handleCurrentYearCycle(today, year);
  }

  // ============ ADVENTO ============
  if (today >= advent && today < advent2) return 'adv-1';
  if (today >= advent2 && today < advent3) return 'adv-2';
  if (today >= advent3 && today < advent4) return 'adv-3';
  if (today >= advent4 && today < christmas) return 'adv-4';

  if (today >= christmas) {
    return handleChristmasSeason(today, year);
  }

  return 'adv-1';
}

// ============================================================
// 🎄 PERÍODO NATALINO
// ============================================================

function handleChristmasSeason(today: Date, christmasYear: number): string {
  const christmas = startOfDay(new Date(christmasYear, 11, 25));
  const nextYear = christmasYear + 1;
  const baptismNext = getBaptismOfLord(nextYear);

  const christmasDay = christmas.getDay();
  const holyFamily = christmasDay === 0
    ? startOfDay(new Date(christmasYear, 11, 30))
    : addDays(christmas, 7 - christmasDay);

  const maryMotherOfGod = startOfDay(new Date(nextYear, 0, 1));
  const epiphany = startOfDay(new Date(nextYear, 0, 6));

  if (isSameDay(today, christmas)) return 'natal';
  if (today > christmas && today < holyFamily) return 'natal';
  if (today >= holyFamily && today < maryMotherOfGod) return 'sagrada-familia';
  if (isSameDay(today, maryMotherOfGod)) return 'mae-de-deus';
  if (today > maryMotherOfGod && today < epiphany) return 'mae-de-deus';
  if (today >= epiphany && today < baptismNext) return 'epifania';
  if (isSameDay(today, baptismNext)) return 'batismo';

  return 'batismo';
}

// ============================================================
// 🔄 CICLO DO ANO CORRENTE
// ============================================================

function handleCurrentYearCycle(today: Date, year: number): string {
  const baptism = getBaptismOfLord(year);
  const ashWed = getAshWednesday(year);
  const easter = getEasterDate(year);
  const palmSunday = getPalmSunday(year);
  const pentecost = getPentecost(year);
  const advent = getFirstAdventSunday(year);

  if (today < baptism) {
    const prevYear = year - 1;
    const prevChristmas = startOfDay(new Date(prevYear, 11, 25));
    return handleChristmasSeason(today >= prevChristmas ? today : prevChristmas, prevYear);
  }

  if (isSameDay(today, baptism)) return 'batismo';

  // ============ TEMPO COMUM (parte 1) ============
  if (today > baptism && today < ashWed) {
    const dayOfWeek = today.getDay();
    const currentSunday = dayOfWeek === 0 ? today : addDays(today, -dayOfWeek);
    const weeksSinceBaptism = Math.floor(daysBetween(baptism, currentSunday) / 7);
    const weekNumber = weeksSinceBaptism + 1;

    if (weekNumber >= 1 && weekNumber <= 5) return `tc1-${weekNumber}`;
    return 'tc1-etc';
  }

  // ============ QUARESMA (agora inclui Domingo de Ramos) ============
  if (isSameDay(today, ashWed)) return 'cinzas';
  if (today > ashWed && today < palmSunday) {
    const firstLentSunday = addDays(ashWed, (7 - ashWed.getDay()) % 7);
    if (today < firstLentSunday) return 'cinzas';
    const weeksSinceLent = Math.floor(daysBetween(firstLentSunday, today) / 7);
    const weekNumber = Math.min(weeksSinceLent + 1, 5);
    return `qua-${weekNumber}`;
  }

  // ============ TRÍDUO PASCAL ============
  // Domingo de Ramos pertence à Quaresma (id: 'ramos', season: 'quaresma')
  if (isSameDay(today, palmSunday)) return 'ramos';

  if (today > palmSunday && today < easter) {
    const holyThursday = addDays(easter, -3);
    const goodFriday = addDays(easter, -2);
    const holySaturday = addDays(easter, -1);
    if (isSameDay(today, holyThursday)) return 'quinta-santa';
    if (isSameDay(today, goodFriday)) return 'sexta-santa';
    if (isSameDay(today, holySaturday)) return 'sexta-santa'; // Sábado Santo → fallback
    return 'ramos'; // Segunda/Terça/Quarta Santa
  }

  // ============ DOMINGO DE PÁSCOA (fica no Tríduo) ============
  if (isSameDay(today, easter)) return 'pascoa';

  // ============ TEMPO PASCAL (a partir da 2ª semana) ============
  if (today > easter && today < pentecost) {
    const ascension = getAscension(year);
    if (isSameDay(today, ascension)) return 'ascensao';

    const weeksSinceEaster = Math.floor(daysBetween(easter, today) / 7);
    const weekNumber = weeksSinceEaster + 1;

    if (weekNumber >= 2 && weekNumber <= 7) return `pas-${weekNumber}`;
    return 'pas-7';
  }

  if (isSameDay(today, pentecost)) return 'pentecostes';

  // ============ TEMPO COMUM (parte 2) ============
  if (today > pentecost && today < advent) {
    const trindade = addDays(pentecost, 7);
    const corpusChristi = addDays(pentecost, 11);
    const christTheKing = addDays(advent, -7);

    if (isSameDay(today, trindade)) return 'trindade';
    if (isSameDay(today, corpusChristi)) return 'corpus-christi';
    if (today >= christTheKing && today < advent) return 'cristo-rei';

    const dayOfWeek = today.getDay();
    const currentSunday = dayOfWeek === 0
      ? today
      : addDays(today, -dayOfWeek);

    const daysToChristKing = daysBetween(currentSunday, christTheKing);
    const sundaysRemaining = Math.round(daysToChristKing / 7);

    const weekNumber = 34 - sundaysRemaining;
    const clamped = Math.max(12, Math.min(33, weekNumber));
    return `tc2-${clamped}`;
  }

  return 'adv-1';
}