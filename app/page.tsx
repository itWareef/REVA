import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "مسكن ريفا للمقاولات | Maskan Riva Contracting",
  description: "شركة مسكن ريفا للمقاولات — نبني أكثر من مجرد مشاريع، نبني المستقبل.",
  alternates: { canonical: "/ar/" },
  other: { refresh: "0; url=/ar/" },
};
export default function Root() {
  return (
    <main dir="rtl" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#082843",color:"#BE9F55",fontFamily:"system-ui,sans-serif"}}>
      <a href="/ar/" style={{color:"#BE9F55",fontSize:20,fontWeight:700,textDecoration:"none"}}>مسكن ريفا للمقاولات — الدخول للموقع</a>
      <script dangerouslySetInnerHTML={{__html:"try{window.location.replace('/ar/')}catch(e){window.location.href='/ar/'}"}} />
    </main>
  );
}
