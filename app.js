// Substitua pelas suas credenciais reais do Supabase
const SUPABASE_URL = "https://vydpybqgkqxcwdhcryns.supabase.co";
const SUPABASE_KEY = "sb_publishable_8fDbun6QHTI23bSxroNozw_l0LmeAUe";

// Inicializa o cliente do Supabase usando o script que vamos importar no HTML
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);