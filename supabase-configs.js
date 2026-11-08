const SUPABASE_URL = "https://akeuqofykmhzhetpaxdd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_1gdEBPvJW6x2ZsMQNCgKDw_SP3R5Njp";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);