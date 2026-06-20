// ============================================================
// DATOS DEMO — Quiniela TM · Liga de Béisbol Infantil y Juvenil
// Municipal de Tijuana A.C.  ·  Todo hardcodeado para demostración.
// ============================================================

export type Team = {
  id: string;
  name: string;
  abbr: string;
  wins: number;
  losses: number;
  color: string; // accent for the team chip
};

// Los 24 equipos REALES — categoría Peewee, jornada 13
export const TEAMS: Team[] = [
  { id: "culiacan", name: "Culiacán", abbr: "CUL", wins: 13, losses: 0, color: "#c83729" },
  { id: "redsox", name: "Red Sox", abbr: "BOS", wins: 12, losses: 1, color: "#bd3039" },
  { id: "yankees", name: "Yankees", abbr: "NYY", wins: 12, losses: 1, color: "#0c2340" },
  { id: "cardenales", name: "Cardenales", abbr: "STL", wins: 11, losses: 2, color: "#c41e3a" },
  { id: "padres", name: "Padres", abbr: "SD", wins: 11, losses: 2, color: "#2f241d" },
  { id: "toros", name: "Toros", abbr: "TOR", wins: 9, losses: 4, color: "#d4ba28" },
  { id: "rangers", name: "Rangers", abbr: "TEX", wins: 9, losses: 4, color: "#003278" },
  { id: "mets", name: "Mets", abbr: "NYM", wins: 9, losses: 4, color: "#ff5910" },
  { id: "angelitos", name: "Angelitos", abbr: "ANG", wins: 8, losses: 5, color: "#ba0021" },
  { id: "caneros", name: "Cañeros", abbr: "CAN", wins: 7, losses: 6, color: "#1a7a3c" },
  { id: "cachorros", name: "Cachorros", abbr: "CHC", wins: 7, losses: 6, color: "#0e3386" },
  { id: "diamondbacks", name: "Diamondbacks", abbr: "ARI", wins: 6, losses: 7, color: "#a71930" },
  { id: "potros", name: "Potros", abbr: "POT", wins: 6, losses: 7, color: "#4b2e83" },
  { id: "dodgers", name: "Dodgers", abbr: "LAD", wins: 5, losses: 8, color: "#005a9c" },
  { id: "cimarrones", name: "Cimarrones", abbr: "CIM", wins: 5, losses: 8, color: "#1d6e42" },
  { id: "bravos", name: "Bravos", abbr: "ATL", wins: 5, losses: 8, color: "#ce1141" },
  { id: "indios", name: "Indios", abbr: "IND", wins: 4, losses: 9, color: "#0c2340" },
  { id: "orioles", name: "Orioles", abbr: "BAL", wins: 4, losses: 9, color: "#df4601" },
  { id: "marlins", name: "Marlins", abbr: "MIA", wins: 3, losses: 10, color: "#00a3e0" },
  { id: "astros", name: "Astros", abbr: "HOU", wins: 3, losses: 10, color: "#eb6e1f" },
  { id: "atleticos", name: "Atléticos", abbr: "OAK", wins: 3, losses: 10, color: "#003831" },
  { id: "aztecas", name: "Aztecas", abbr: "AZT", wins: 2, losses: 11, color: "#8b1a1a" },
  { id: "mediasrosas", name: "Medias Rosas", abbr: "MRO", wins: 0, losses: 13, color: "#e25098" },
  { id: "gluglu", name: "Glu-Glu", abbr: "GLU", wins: 0, losses: 13, color: "#d4ba28" },
];

export const teamById = (id: string) => TEAMS.find((t) => t.id === id)!;

// ---- Jornada actual (semana 14) — partidos por jugar ----
export type Match = {
  id: string;
  home: string; // team id
  away: string; // team id
  date: string;
  time: string;
  field: string;
  status: "abierto" | "cerrado" | "jugado";
  homeScore?: number;
  awayScore?: number;
  pick?: string; // team id the user picked
};

export const CURRENT_ROUND: Match[] = [
  { id: "m1", home: "culiacan", away: "gluglu", date: "Sáb 28 Jun", time: "9:00", field: "Campo 1", status: "abierto", pick: "culiacan" },
  { id: "m2", home: "redsox", away: "mediasrosas", date: "Sáb 28 Jun", time: "9:00", field: "Campo 2", status: "abierto", pick: "redsox" },
  { id: "m3", home: "yankees", away: "aztecas", date: "Sáb 28 Jun", time: "11:00", field: "Campo 1", status: "abierto" },
  { id: "m4", home: "cardenales", away: "atleticos", date: "Sáb 28 Jun", time: "11:00", field: "Campo 2", status: "abierto", pick: "cardenales" },
  { id: "m5", home: "padres", away: "astros", date: "Sáb 28 Jun", time: "13:00", field: "Campo 1", status: "abierto" },
  { id: "m6", home: "toros", away: "marlins", date: "Dom 29 Jun", time: "9:00", field: "Campo 1", status: "abierto", pick: "toros" },
  { id: "m7", home: "rangers", away: "orioles", date: "Dom 29 Jun", time: "9:00", field: "Campo 2", status: "abierto" },
  { id: "m8", home: "mets", away: "indios", date: "Dom 29 Jun", time: "11:00", field: "Campo 1", status: "abierto", pick: "mets" },
];

// ---- Jornada pasada (semana 13) — ya jugada, para mostrar aciertos ----
export const LAST_ROUND: Match[] = [
  { id: "p1", home: "culiacan", away: "astros", date: "Sáb 21 Jun", time: "9:00", field: "Campo 1", status: "jugado", homeScore: 12, awayScore: 3, pick: "culiacan" },
  { id: "p2", home: "yankees", away: "marlins", date: "Sáb 21 Jun", time: "11:00", field: "Campo 1", status: "jugado", homeScore: 8, awayScore: 2, pick: "yankees" },
  { id: "p3", home: "cardenales", away: "indios", date: "Sáb 21 Jun", time: "13:00", field: "Campo 2", status: "jugado", homeScore: 5, awayScore: 6, pick: "cardenales" },
  { id: "p4", home: "padres", away: "aztecas", date: "Dom 22 Jun", time: "9:00", field: "Campo 1", status: "jugado", homeScore: 9, awayScore: 1, pick: "padres" },
  { id: "p5", home: "redsox", away: "mediasrosas", date: "Dom 22 Jun", time: "11:00", field: "Campo 2", status: "jugado", homeScore: 14, awayScore: 0, pick: "redsox" },
  { id: "p6", home: "toros", away: "gluglu", date: "Dom 22 Jun", time: "13:00", field: "Campo 1", status: "jugado", homeScore: 7, awayScore: 4, pick: "gluglu" },
];

// ---- Ranking de jugadores (papás) de la quiniela ----
export type Player = {
  id: string;
  name: string;
  avatar: string; // initials
  points: number;
  hits: number;
  total: number;
  trend: "up" | "down" | "same";
};

export const LEADERBOARD: Player[] = [
  { id: "u1", name: "Roberto Sánchez", avatar: "RS", points: 142, hits: 71, total: 84, trend: "up" },
  { id: "u2", name: "Luis De La Torre", avatar: "LT", points: 138, hits: 69, total: 84, trend: "up" },
  { id: "u3", name: "Carlos Mendoza", avatar: "CM", points: 131, hits: 66, total: 84, trend: "same" },
  { id: "u4", name: "Jorge Ramírez", avatar: "JR", points: 128, hits: 64, total: 84, trend: "down" },
  { id: "u5", name: "Miguel Torres", avatar: "MT", points: 124, hits: 62, total: 84, trend: "up" },
  { id: "u6", name: "Fernando Ruiz", avatar: "FR", points: 119, hits: 60, total: 84, trend: "same" },
  { id: "u7", name: "Alejandro Díaz", avatar: "AD", points: 115, hits: 58, total: 84, trend: "down" },
  { id: "u8", name: "Ricardo Flores", avatar: "RF", points: 112, hits: 56, total: 84, trend: "up" },
  { id: "u9", name: "Eduardo Vega", avatar: "EV", points: 108, hits: 54, total: 84, trend: "same" },
  { id: "u10", name: "Sergio Castro", avatar: "SC", points: 104, hits: 52, total: 84, trend: "down" },
];

// The current logged-in demo user
export const ME: Player = LEADERBOARD[1]; // Luis De La Torre, 2º lugar

// ---- Bolsa / wallet ----
export const POOL = {
  total: 18900, // bolsa acumulada MXN
  participants: 47,
  winnerShare: 0.7,
  houseShare: 0.3,
  entryFee: 150, // costo por jornada
  myBalance: 450, // créditos del usuario
  myCredits: 3, // jornadas pagadas
};

// ---- Movimientos del wallet ----
export type Movement = {
  id: string;
  type: "recarga" | "apuesta" | "premio";
  desc: string;
  amount: number;
  date: string;
  method?: string;
};

export const MOVEMENTS: Movement[] = [
  { id: "mv1", type: "premio", desc: "Premio Jornada 12 · 3er lugar", amount: 1240, date: "16 Jun", method: "Bolsa" },
  { id: "mv2", type: "apuesta", desc: "Inscripción Jornada 13", amount: -150, date: "18 Jun", method: "Créditos" },
  { id: "mv3", type: "recarga", desc: "Recarga de créditos", amount: 450, date: "18 Jun", method: "Transferencia" },
  { id: "mv4", type: "apuesta", desc: "Inscripción Jornada 14", amount: -150, date: "24 Jun", method: "Créditos" },
];

// ---- Fotos (galería comunitaria) ----
export type Photo = {
  id: string;
  author: string;
  caption: string;
  likes: number;
  team: string;
};

export const PHOTOS: Photo[] = [
  { id: "f1", author: "Roberto S.", caption: "¡Culiacán campeón invicto! 🏆", likes: 34, team: "culiacan" },
  { id: "f2", author: "María G.", caption: "Mi campeón en el montículo", likes: 28, team: "yankees" },
  { id: "f3", author: "Carlos M.", caption: "Gran jugada en segunda base", likes: 21, team: "redsox" },
  { id: "f4", author: "Luis T.", caption: "Domingo de béisbol en familia", likes: 45, team: "toros" },
  { id: "f5", author: "Jorge R.", caption: "Home run en la novena entrada", likes: 52, team: "cardenales" },
  { id: "f6", author: "Ana P.", caption: "Los Padres dando batalla", likes: 18, team: "padres" },
];

// ---- KPIs admin ----
export const ADMIN_KPIS = {
  jugadoresActivos: 47,
  bolsaActual: 18900,
  jornadaActual: 14,
  partidosPorCerrar: 8,
  recaudadoTemporada: 142500,
  pagadoPremios: 99750,
};
