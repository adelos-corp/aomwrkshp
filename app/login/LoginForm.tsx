"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
export default function LoginForm() {
  const router=useRouter(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError("");const result=await createClient().auth.signInWithPassword({email,password});if(result.error){setError(result.error.message);setBusy(false);return;}router.push("/dashboard");router.refresh();}
  return <form onSubmit={submit} style={{maxWidth:460,display:"grid",gap:14,marginTop:36}}><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required style={{padding:16,borderRadius:12,border:"1px solid var(--line)",background:"transparent"}}/><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required style={{padding:16,borderRadius:12,border:"1px solid var(--line)",background:"transparent"}}/>{error&&<p style={{color:"var(--accent)",margin:0}}>{error}</p>}<button className="cta" disabled={busy} style={{border:0,cursor:"pointer",justifyContent:"center"}}>{busy?"Signing in…":"Sign in"}</button></form>;
}