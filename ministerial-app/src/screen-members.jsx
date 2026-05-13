/* global React, Icon */

/* =========================================================
   MEMBERS DIRECTORY
   ========================================================= */

function Avatar({ initials, color }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: "50%",
      background: `linear-gradient(135deg, ${color}, ${color}cc)`,
      color: "#fff",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
      flexShrink: 0,
    }}>{initials}</div>
  );
}

function MemberCard({ name, title, committees, role, attendance, color }) {
  const initials = name.split(" ").slice(-2).map(w => w[0]).join("");
  return (
    <div className="card" style={{ padding: 22 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <Avatar initials={initials} color={color}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 }}>{name}</div>
          <div style={{ fontSize: 12.5, color: "var(--c-ink-3)", marginTop: 4 }}>{title}</div>
        </div>
        <button className="iconbtn iconbtn-sm"><Icon.More width="16" height="16"/></button>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
        {role && <span className="pill pill-burg">{role}</span>}
        <span className="pill pill-outline"><Icon.Committees width="11" height="11"/> {committees} لجان</span>
      </div>

      <hr style={{ border: 0, borderTop: "1px dashed var(--c-border)", margin: "16px 0" }}/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: "var(--c-ink-3)", marginBottom: 4 }}>معدل الحضور</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: attendance >= 90 ? "var(--c-green)" : attendance >= 75 ? "var(--c-blue)" : "var(--c-amber)" }} className="num">{attendance}%</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "var(--c-ink-3)", marginBottom: 4 }}>الحالة</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--c-green)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span className="dot" style={{ background: "var(--c-green)" }}/> نشط
          </div>
        </div>
      </div>
    </div>
  );
}

function Members() {
  const members = [
    { name: "معالي / خالد بن خليفة آل ثاني", title: "وزير المالية", committees: 4, role: "رئيس لجنة", attendance: 96, color: "#7B1F3D" },
    { name: "معالي / محمد بن عبدالله الكواري", title: "وزير الاتصالات وتقنية المعلومات", committees: 3, role: "رئيس لجنة", attendance: 92, color: "#0D4261" },
    { name: "معالي / فهد بن جاسم الكعبي", title: "وزير العدل", committees: 5, role: "رئيس لجنة", attendance: 88, color: "#94783F" },
    { name: "سعادة / عبدالعزيز السبيعي", title: "النائب الأول لرئيس الوزراء — وزير الداخلية", committees: 2, role: "رئيس لجنة", attendance: 94, color: "#4F1228" },
    { name: "سعادة / نورة بنت عبدالعزيز الكعبي", title: "وزيرة دولة للتعاون الدولي", committees: 3, role: "عضو", attendance: 90, color: "#9D3158" },
    { name: "سعادة / ماجد بن محمد المسلم", title: "وزير دولة للشؤون الخارجية", committees: 4, role: "عضو", attendance: 78, color: "#0A3550" },
    { name: "سعادة / حنان محمد المهندي", title: "وزيرة دولة للأمن الغذائي", committees: 2, role: "عضو", attendance: 85, color: "#B89B5E" },
    { name: "سعادة / يوسف بن محمد العثمان", title: "وزير العمل", committees: 3, role: "عضو", attendance: 72, color: "#631930" },
  ];

  return (
    <>
      <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>إجمالي الأعضاء</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>148</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>عبر 18 لجنة</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>رؤساء اللجان</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>18</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>كل لجنة لها رئيس مُعيَّن</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>متوسط الحضور</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, color: "var(--c-green)" }}>87<span style={{ fontSize: 22 }}>%</span></div>
          <div style={{ fontSize: 12, color: "var(--c-green)", marginTop: 6, fontWeight: 600 }}>▲ 4% عن الفترة السابقة</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>إضافات هذا الشهر</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>06</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>3 رؤساء و 3 أعضاء</div>
        </div>
      </div>

      <div className="card" style={{ padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "center", padding: "8px 16px", background: "var(--c-bg-2)", borderRadius: 999, minWidth: 280 }}>
          <Icon.Search width="16" height="16"/>
          <input style={{ flex: 1, border: 0, background: "transparent", outline: "none", fontSize: 14, fontFamily: "inherit" }}
            placeholder="ابحث عن عضو…"/>
        </div>
        <button className="pill pill-burg" style={{ padding: "8px 16px", border: 0, fontWeight: 600 }}>الكل · 148</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>رؤساء · 18</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>أعضاء · 130</button>
        <button className="btn btn-soft btn-sm"><Icon.Filter width="14" height="14"/> فلاتر</button>
        <button className="btn btn-primary btn-sm"><Icon.Plus width="14" height="14"/> إضافة عضو</button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {members.map((m, i) => <MemberCard key={i} {...m}/>)}
      </div>
    </>
  );
}

window.Members = Members;
