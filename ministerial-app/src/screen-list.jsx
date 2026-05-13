/* global React, Icon */

/* =========================================================
   COMMITTEES LIST SCREEN
   ========================================================= */

export default function CommitteesList() {
  const filters = [
    { id: "all", label: "الكل", count: 18, active: true },
    { id: "active", label: "نشطة", count: 12 },
    { id: "permanent", label: "دائمة", count: 8 },
    { id: "strategic", label: "استراتيجية", count: 5 },
    { id: "sovereign", label: "سيادية", count: 3 },
    { id: "archived", label: "مؤرشفة", count: 6 },
  ];

  const list = [
    { letter: "م", color: "var(--c-burgundy)", name: "اللجنة المالية العليا", chair: "معالي/ خالد بن خليفة", type: "لجنة دائمة", members: 12, decisions: 247, next: "غداً · 10:00", status: "active" },
    { letter: "ت", color: "var(--c-blue)",     name: "لجنة التحول الرقمي",   chair: "معالي/ محمد بن عبدالله", type: "لجنة استراتيجية", members: 9, decisions: 134, next: "الخميس · 14:00", status: "active" },
    { letter: "ق", color: "var(--c-gold)",     name: "لجنة الشؤون القانونية", chair: "معالي/ فهد بن جاسم",   type: "لجنة دائمة", members: 8, decisions: 312, next: "اليوم · 11:30", status: "active" },
    { letter: "أ", color: "var(--c-burgundy)", name: "لجنة الأمن الوطني",     chair: "سعادة/ عبدالعزيز السبيعي", type: "لجنة سيادية", members: 11, decisions: 89, next: "الأحد · 09:00", status: "active" },
    { letter: "ص", color: "var(--c-blue)",     name: "لجنة الصحة والوقاية",  chair: "معالي/ حنان الكواري",  type: "لجنة دائمة", members: 10, decisions: 156, next: "12 مايو · 13:00", status: "active" },
    { letter: "ط", color: "var(--c-gold)",     name: "لجنة الطاقة والبيئة",   chair: "معالي/ سعد الكعبي",     type: "لجنة استراتيجية", members: 9, decisions: 78, next: "15 مايو · 10:00", status: "active" },
    { letter: "ع", color: "var(--c-burgundy)", name: "لجنة العلاقات الدولية", chair: "معالي/ محمد بن عبدالرحمن", type: "لجنة سيادية", members: 7, decisions: 201, next: "20 مايو · 09:00", status: "active" },
    { letter: "ت", color: "var(--c-blue)",     name: "لجنة التعليم العالي",   chair: "سعادة/ بثينة النعيمي", type: "لجنة دائمة", members: 8, decisions: 142, next: "غير محدد", status: "paused" },
  ];

  return (
    <>
      <div className="crumbs">
        <a>الرئيسية</a><span className="sep">/</span><span className="here">اللجان</span>
      </div>

      <div className="list-toolbar">
        <div className="toolbar-filters">
          {filters.map(f => (
            <button key={f.id} className={`filter-chip ${f.active ? "is-active" : ""}`}>
              {f.label} <span className="num">{f.count}</span>
            </button>
          ))}
        </div>
        <div className="card-actions">
          <button className="btn btn-secondary"><Icon.Filter width="14" height="14"/> تصفية متقدمة</button>
          <button className="btn btn-secondary"><Icon.Download width="14" height="14"/> تصدير</button>
          <button className="btn btn-primary"><Icon.Plus width="14" height="14"/> لجنة جديدة</button>
        </div>
      </div>

      <div className="committees-list">
        {list.map((c, i) => (
          <div key={i} className="cl-row">
            <div className="cl-mark" style={{ background: c.color }}>{c.letter}</div>
            <div>
              <div className="cl-name">{c.name}</div>
              <div className="cl-chair"><Icon.User width="12" height="12"/> {c.chair}</div>
            </div>
            <div>
              <div className="cl-stat-lab">النوع</div>
              <span className={`pill ${c.type.includes("سيادية") ? "pill-burg" : c.type.includes("استراتيجية") ? "pill-blue" : "pill-gold"}`}>{c.type}</span>
            </div>
            <div>
              <div className="cl-stat-lab">الأعضاء · القرارات</div>
              <div className="cl-stat-val">{c.members} عضو · <span className="num">{c.decisions}</span> قرار</div>
            </div>
            <div>
              <div className="cl-stat-lab">الاجتماع القادم</div>
              <div className="cl-meeting">{c.next}</div>
            </div>
            <div>
              <span className={`pill ${c.status === "active" ? "pill-green" : "pill-amber"}`}>
                <span className={`dot dot-${c.status === "active" ? "green" : "amber"}`}/>
                {c.status === "active" ? "نشطة" : "متوقفة"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

window.CommitteesList = CommitteesList;
