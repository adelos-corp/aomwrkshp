import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
export default async function Dashboard(){
  const supabase=await createClient();
  const auth=await supabase.auth.getUser();
  if(!auth.data.user)redirect("/login");
  const userId=auth.data.user.id;
  const profileResult=await supabase.from("profiles").select("full_name,college,year_of_study").eq("id",userId).maybeSingle();
  const registrationResult=await supabase.from("registrations").select("status,registered_at,workshops(title,tagline)").eq("user_id",userId).maybeSingle();
  const profile=profileResult.data;
  const registration=registrationResult.data;
  const workshop=registration?.workshops;
  return <main className="site"><nav className="nav" style={{position:"static"}}><div className="mark">THE ART OF MAKING</div><Link className="nav-login" href="/">Home</Link></nav><section className="section" style={{minHeight:"80vh"}}><div className="section-grid"><div className="eyebrow">Your workshop</div><div><h2>Welcome{profile?.full_name ? ", "+profile.full_name : "."}</h2><p className="lead">{profile?.college||"Participant"}{profile?.year_of_study ? " · "+profile.year_of_study : ""}</p><div className="learn-card" style={{marginTop:40,border:"1px solid var(--line)"}}><div className="step-num">{registration?.status?.toUpperCase()||"NOT REGISTERED"}</div><h3 style={{margin:"30px 0 10px"}}>{workshop && typeof workshop==="object" && "title" in workshop ? String(workshop.title) : "The Art of Making"}</h3><p>{workshop && typeof workshop==="object" && "tagline" in workshop ? String(workshop.tagline) : "From imagination to interface."}</p></div></div></div></section></main>;
}