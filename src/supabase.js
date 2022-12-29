import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abqbkooihvbksyytqpst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicWJrb29paHZia3N5eXRxcHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyMTk0OTgsImV4cCI6MTk4Njc5NTQ5OH0.cSaBw2UEfUj9kHtzwGAucdk7zrDoTA5VZDxGWSA3-UM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
