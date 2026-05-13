/* global React, Icon */

/* =========================================================
   RECOMMENDATIONS — list + tracking
   ========================================================= */

function RecBar({ pct, color = "var(--c-burgundy)" }) {
  return (
    <div style={{ height: 6, background: "var(--c-bg-2)", borderRadius: 999, overflow: "hidden", minWidth: 100 }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 999 }}/>
    </div>
  );
}

function RecKPI({ label, value, sub, tone, icon }) {
  return (
    <div className="card" style={{ padding: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)", marginBottom: 8 }}>{label}</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>{value}</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 8 }}>{sub}</div>
        </div>
        <div className={`icon-circle icon-circle-${tone}`} style={{ width: 44, height: 44 }}>{icon}</div>
      </div>
    </div>
  );
}

function Recommendations() {
  const recs = [
    { id: "ت-٢٠٢٦/٠٤٧", title: "تطوير منظومة الرقابة المالية على الجهات الحكومية", committee: "اللجنة المالية العليا",
      owner: "وزارة المالية", due: "30 يونيو 2026", priority: "عاجلة", progress: 78, status: "in-progress" },
    { id: "ت-٢٠٢٦/٠٤٦", title: "إطلاق منصة موحّدة لخدمات المتعاملين الرقميين", committee: "لجنة التحول الرقمي",
      owner: "وزارة الاتصالات", due: "15 أغسطس 2026", priority: "عالية", progress: 45, status: "in-progress" },
    { id: "ت-٢٠٢٦/٠٤٥", title: "مراجعة اللائحة التنفيذية لقانون حماية البيانات", committee: "لجنة الشؤون القانونية",
      owner: "وزارة العدل", due: "10 يونيو 2026", priority: "عاجلة", progress: 92, status: "review" },
    { id: "ت-٢٠٢٦/٠٤٤", title: "خطة الاستجابة للطوارئ الصحية الوطنية 2026-2028", committee: "لجنة الأمن الوطني",
      owner: "وزارة الصحة العامة", due: "20 مايو 2026", priority: "عاجلة", progress: 100, status: "done" },
    { id: "ت-٢٠٢٦/٠٤٣", title: "حوافز التوظيف في القطاع الخاص للكوادر الوطنية", committee: "لجنة الموارد البشرية",
      owner: "وزارة العمل", due: "05 مايو 2026", priority: "عالية", progress: 28, status: "delayed" },
    { id: "ت-٢٠٢٦/٠٤٢", title: "إطار التعاون مع المنظمات الإقليمية في الأمن السيبراني", committee: "لجنة الأمن الوطني",
      owner: "وزارة الخارجية", due: "12 يوليو 2026", priority: "متوسطة", progress: 60, status: "in-progress" },
  ];

  const statusMap = {
    "in-progress": { cls: "pill-blue",  txt: "قيد التنفيذ",  color: "var(--c-blue)" },
    "review":      { cls: "pill-amber", txt: "قيد المراجعة", color: "var(--c-amber)" },
    "done":        { cls: "pill-green", txt: "منفذة",        color: "var(--c-green)" },
    "delayed":     { cls: "pill-red",   txt: "متأخرة",       color: "var(--c-red)" },
  };
  const prMap = {
    "عاجلة":   "pill-red",
    "عالية":   "pill-amber",
    "متوسطة":  "pill-gray",
  };

  return (
    <>
      <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 22 }}>
        <RecKPI label="إجمالي التوصيات" value="142" sub="منذ بداية العام" tone="burg"
          icon={<Icon.Decisions width="20" height="20"/>}/>
        <RecKPI label="منفذة بالكامل" value="89" sub="63% من الإجمالي" tone="green"
          icon={<Icon.Check width="20" height="20"/>}/>
        <RecKPI label="قيد التنفيذ" value="38" sub="متوسط الإنجاز 64%" tone="blue"
          icon={<Icon.Clock width="20" height="20"/>}/>
        <RecKPI label="متأخرة" value="15" sub="تتطلب اهتماماً عاجلاً" tone="amber"
          icon={<Icon.Bell width="20" height="20"/>}/>
      </div>

      {/* Filter bar */}
      <div className="card" style={{ padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "center", padding: "8px 16px", background: "var(--c-bg-2)", borderRadius: 999, minWidth: 280 }}>
          <Icon.Search width="16" height="16"/>
          <input style={{ flex: 1, border: 0, background: "transparent", outline: "none", fontSize: 14, fontFamily: "inherit" }}
            placeholder="ابحث في التوصيات…"/>
        </div>
        <button className="pill pill-burg" style={{ padding: "8px 16px", border: 0, cursor: "pointer", fontWeight: 600 }}>الكل · 142</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px", cursor: "pointer" }}>قيد التنفيذ · 38</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px", cursor: "pointer" }}>متأخرة · 15</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px", cursor: "pointer" }}>منفذة · 89</button>
        <button className="btn btn-soft btn-sm"><Icon.Filter width="14" height="14"/> فلاتر</button>
        <button className="btn btn-secondary btn-sm"><Icon.Download width="14" height="14"/> تصدير</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="gov-table">
          <thead>
            <tr>
              <th style={{ width: 110 }}>الرقم</th>
              <th>التوصية</th>
              <th style={{ width: 180 }}>اللجنة</th>
              <th style={{ width: 160 }}>الجهة المنفذة</th>
              <th style={{ width: 130 }}>الموعد</th>
              <th style={{ width: 110 }}>الأولوية</th>
              <th style={{ width: 200 }}>التقدم</th>
              <th style={{ width: 130 }}>الحالة</th>
              <th style={{ width: 50 }}></th>
            </tr>
          </thead>
          <tbody>
            {recs.map(r => {
              const s = statusMap[r.status];
              return (
                <tr key={r.id}>
                  <td className="num" style={{ fontWeight: 600, color: "var(--c-burgundy)" }}>{r.id}</td>
                  <td style={{ fontWeight: 600, maxWidth: 360 }}>{r.title}</td>
                  <td style={{ fontSize: 13, color: "var(--c-ink-2)" }}>{r.committee}</td>
                  <td style={{ fontSize: 13, color: "var(--c-ink-2)" }}>{r.owner}</td>
                  <td className="num" style={{ fontSize: 13 }}>{r.due}</td>
                  <td><span className={`pill ${prMap[r.priority]}`}>{r.priority}</span></td>
                  <td>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <RecBar pct={r.progress} color={s.color}/>
                      <span className="num" style={{ fontSize: 12.5, fontWeight: 700, minWidth: 32 }}>{r.progress}%</span>
                    </div>
                  </td>
                  <td><span className={`pill ${s.cls}`}>{s.txt}</span></td>
                  <td><button className="iconbtn iconbtn-sm"><Icon.More width="16" height="16"/></button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

window.Recommendations = Recommendations;
