:root{--navy:#0A1931;--cyan:#00E5FF;--gold:#C9A86A;--glass:rgba(255,255,255,.08);--b:rgba(255,255,255,.14);--text:#EAF2FF;--muted:#A8B6D1}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(120% 120% at 20% 10%,#102A54 0%,#0A1931 55%,#060E20 100%);color:var(--text);font-family:'Outfit','Noto Sans Devanagari',sans-serif;overflow-x:hidden;line-height:1.5}
.glass{background:var(--glass);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--b);border-radius:16px}
.bg-orbs{position:fixed;inset:0;z-index:-1;pointer-events:none}.bg-orbs span{position:absolute;border-radius:50%;filter:blur(60px);opacity:.5}
.bg-orbs span:nth-child(1){width:600px;height:600px;background:radial-gradient(circle,var(--cyan),transparent 70%);top:-10%;left:-10%;animation:f1 12s infinite alternate}
.bg-orbs span:nth-child(2){width:500px;height:500px;background:radial-gradient(circle,var(--gold),transparent 70%);bottom:10%;right:-5%;animation:f2 14s infinite alternate}
.bg-orbs span:nth-child(3){width:400px;height:400px;background:radial-gradient(circle,#4A6CF7,transparent 70%);top:40%;left:50%;animation:f1 16s infinite alternate-reverse}
@keyframes f1{from{transform:translate(0,0)}to{transform:translate(20px,30px)}}@keyframes f2{from{transform:translate(0,0)}to{transform:translate(-30px,20px)}}
.nav{position:sticky;top:12px;margin:12px auto;max-width:1120px;z-index:20}.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;gap:12px}
.logo{display:flex;align-items:center;gap:10px;font-weight:700}.logo-mark{width:36px;height:36px;display:grid;place-items:center;background:linear-gradient(135deg,var(--cyan),var(--gold));color:#001;border-radius:10px;font-weight:800}
.nav-links{display:flex;gap:18px;align-items:center}.nav-links a{color:var(--text);text-decoration:none;opacity:.9;font-size:14px}
.btn{padding:12px 18px;border-radius:12px;text-decoration:none;display:inline-flex;justify-content:center;font-weight:600;transition:transform .2s;will-change:transform}
.btn:hover{transform:translateY(-2px)}.btn.primary{background:linear-gradient(135deg,var(--cyan),#6DE7FF);color:#002;box-shadow:0 8px 24px rgba(0,229,255,.25)}.btn.glass-btn{color:var(--text);border:1px solid var(--b);background:var(--glass)}
.btn-ghost{padding:8px 14px;border-radius:10px;border:1px solid var(--b);background:transparent;color:var(--text);cursor:pointer;text-decoration:none;font-size:14px}
.hero{max-width:1120px;margin:40px auto;display:grid;grid-template-columns:1.1fr .9fr;gap:24px;padding:0 18px;align-items:center}
.badge{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px}.dot{width:8px;height:8px;background:var(--cyan);border-radius:50%;box-shadow:0 0 10px var(--cyan)}
.hero h1{font-size:clamp(32px,5vw,58px);line-height:1.05;margin:16px 0}.hero h1 span{background:linear-gradient(135deg,var(--cyan),var(--gold));-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{color:var(--muted);font-size:18px;max-width:52ch}.cta-row{display:flex;gap:12px;margin:20px 0;flex-wrap:wrap}.trust{padding:12px 14px;margin-top:14px;display:inline-block;font-size:14px;color:var(--muted)}
.character-wrap{position:relative;width:100%;aspect-ratio:4/5;display:grid;place-items:center}.character-wrap img{width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 20px 40px rgba(0,229,255,.25));animation:f1 6s ease-in-out infinite alternate;transform:translateZ(0);border-radius:20px;will-change:transform}
.float-card{position:absolute;padding:10px 14px;font-size:13px;font-weight:600;animation:f2 5s ease-in-out infinite alternate;will-change:transform}.float-card small{display:block;font-weight:400;opacity:.8;font-size:11px}.c1{top:12%;right:2%}.c2{bottom:28%;left:0}.c3{bottom:8%;right:8%}
.services{max-width:1120px;margin:70px auto;padding:0 18px}.services h2{text-align:center;font-size:clamp(26px,4vw,36px);margin-bottom:22px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
.card{padding:20px;transition:transform .25s,border-color .25s;will-change:transform;text-decoration:none;color:inherit;display:block}.card:hover{transform:translateY(-6px) scale(1.01);border-color:var(--cyan);background:rgba(255,255,255,0.11)}.card i{font-size:28px;display:block;margin-bottom:8px}.card h3{margin:6px 0}.card p{color:var(--muted);font-size:14px;margin:0}
.why{max-width:1120px;margin:60px auto;padding:24px;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center}
.contact{max-width:1120px;margin:40px auto;padding:0 18px}.contact-card{padding:24px;text-align:center}
.foot{text-align:center;padding:30px;opacity:.7;font-size:13px}.foot a{color:var(--cyan);text-decoration:none}
.fab{position:fixed;bottom:20px;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;text-decoration:none;z-index:30;box-shadow:0 8px 24px rgba(0,0,0,.4)}.fab.call{right:88px;background:var(--gold);color:#000}.fab.wa{right:20px;background:#25D366;color:#fff;font-size:22px}
@media(max-width:900px){.hero{grid-template-columns:1fr}.nav-links{display:none}.hero-visual{order:-1}.character-wrap{max-width:400px;margin:auto}}
@media(prefers-reduced-motion:reduce){*{animation:none!important}}
