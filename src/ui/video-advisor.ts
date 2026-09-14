// A fixed public link keeps the hosted advisor compatible with any self-hosted origin.
// No third-party script, iframe, credential or project data is loaded by this card.
export function renderVideoAdvisor(): string {
  const setting = process.env.NIUBIGEO_VIDEO_ADVISOR_ENABLED?.trim().toLowerCase();
  if (setting === "false" || setting === "0" || setting === "off") return "";
  return `<style>
    .niubigeo-advisor-card { position:fixed; z-index:3; right:24px; bottom:24px; display:flex; align-items:center; gap:12px; width:270px; max-width:calc(100vw - 32px); padding:16px; border:1px solid #354862; border-radius:16px; background:linear-gradient(125deg,#172336,#10151f); color:#f5f7fb; text-decoration:none; box-shadow:0 12px 36px #0006; transition:border-color 160ms,transform 160ms; }
    .niubigeo-advisor-card:hover { transform:translateY(-2px); border-color:#77a8ff; }
    .niubigeo-advisor-card:focus-visible { outline:2px solid #8bb7ff; outline-offset:4px; }
    .niubigeo-advisor-icon { display:grid; flex:none; place-items:center; width:40px; height:40px; border:1px solid #395675; border-radius:12px; background:#1d314b; color:#a6ceff; }
    .niubigeo-advisor-copy { display:grid; gap:5px; }
    .niubigeo-advisor-copy strong { font-size:14px; font-weight:650; line-height:1.4; }
    .niubigeo-advisor-copy span { color:#b3c1d3; font-size:12px; line-height:1.4; }
    .niubigeo-advisor-arrow { margin-left:auto; color:#a6ceff; font-size:20px; }
    .workspace,.p5-content { padding-bottom:128px; }
    @media(max-width:640px) { .niubigeo-advisor-card { right:16px; bottom:max(16px,env(safe-area-inset-bottom)); width:250px; padding:12px; } }
    @media(prefers-reduced-motion:reduce) { .niubigeo-advisor-card { transition:none; } .niubigeo-advisor-card:hover { transform:none; } }
  </style>
  <a class="niubigeo-advisor-card" data-niubigeo-advisor href="https://niubigeo.ai/advisor" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" aria-label="NiubiGEO AI 顾问：前往官网咨询（新标签页）">
    <span class="niubigeo-advisor-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H9l-5 3v-7a7.5 7.5 0 0 1 7.5-11h1A7.5 7.5 0 0 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg></span>
    <span class="niubigeo-advisor-copy"><strong>NiubiGEO AI 顾问</strong><span>聊聊你的 GEO 问题</span></span>
    <span class="niubigeo-advisor-arrow" aria-hidden="true">↗</span>
  </a>`;
}
