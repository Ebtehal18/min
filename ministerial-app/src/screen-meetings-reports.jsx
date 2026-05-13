/* global React, Icon */

/* =========================================================
   MEETINGS LIST + REPORTS
   ========================================================= */

function MeetingsList() {
  const meetings = [
    { date: "اليوم", time: "09:00", title: "مراجعة الموازنة التشغيلية للربع الثاني", committee: "اللجنة المالية العليا", room: "قاعة الوزراء — الدور الثالث", status: "live", attendees: 9, total: 12 },
    { date: "اليوم", time: "11:30", title: "مناقشة مشروع قانون حماية البيانات الشخصية", committee: "لجنة الشؤون القانونية", room: "قاعة (ب) — الديوان الأميري", status: "upcoming", attendees: 0, total: 8 },
    { date: "اليوم", time: "14:00", title: "متابعة مبادرات التحول الرقمي 2026", committee: "لجنة التحول الرقمي", room: "عن بُعد · Q-Connect", status: "upcoming", attendees: 0, total: 9 },
    { date: "غداً", time: "10:00", title: "اعتماد خطة الاستجابة للطوارئ الوطنية", committee: "لجنة الأمن الوطني", room: "غرفة العمليات الموحدة", status: "scheduled", attendees: 0, total: 11 },
    { date: "غداً", time: "13:00", title: "مراجعة لوائح المشتريات الحكومية", committee: "اللجنة المالية العليا", room: "قاعة الوزراء — الدور الثالث", status: "scheduled", attendees: 0, total: 12 },
    { date: "الخميس", time: "09:30", title: "تقييم أداء مبادرات التوظيف الوطني", committee: "لجنة الموارد البشرية", room: "قاعة (أ) — الديوان الأميري", status: "scheduled", attendees: 0, total: 10 },
    { date: "الأحد", time: "08:00", title: "اجتماع تنسيقي للجان الفرعية", committee: "اللجنة المالية العليا", room: "قاعة الاجتماعات الموسعة", status: "scheduled", attendees: 0, total: 24 },
    { date: "أمس", time: "14:30", title: "مراجعة العقود الاستراتيجية للربع الأول", committee: "اللجنة المالية العليا", room: "قاعة الوزراء", status: "closed", attendees: 11, total: 12 },
    { date: "أمس", time: "10:00", title: "إقرار اللائحة التنفيذية لقانون الاستثمار", committee: "لجنة الشؤون القانونية", room: "قاعة (ب)", status: "closed", attendees: 7, total: 8 },
  ];

  const statusMap = {
    live:      { cls: "pill-burg", txt: "جارٍ الآن", live: true },
    upcoming:  { cls: "pill-blue", txt: "قادم اليوم" },
    scheduled: { cls: "pill-gray", txt: "مجدول" },
    closed:    { cls: "pill-green", txt: "منتهٍ" },
  };

  return (
    <>
      <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>اجتماعات اليوم</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>04</div>
          <div style={{ fontSize: 12, color: "var(--c-burgundy)", marginTop: 6, fontWeight: 600 }}>1 جارٍ الآن · 3 قادمة</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>هذا الأسبوع</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>12</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>4 لجان مختلفة</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>هذا الشهر</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>34</div>
          <div style={{ fontSize: 12, color: "var(--c-green)", marginTop: 6, fontWeight: 600 }}>▲ 21% عن الشهر الماضي</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>متوسط النصاب</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, color: "var(--c-green)" }}>91<span style={{ fontSize: 22 }}>%</span></div>
          <div style={{ fontSize: 12, color: "var(--c-green)", marginTop: 6, fontWeight: 600 }}>أعلى من الحد الأدنى</div>
        </div>
      </div>

      <div className="card" style={{ padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "center", padding: "8px 16px", background: "var(--c-bg-2)", borderRadius: 999, minWidth: 280 }}>
          <Icon.Search width="16" height="16"/>
          <input style={{ flex: 1, border: 0, background: "transparent", outline: "none", fontSize: 14, fontFamily: "inherit" }}
            placeholder="ابحث في الاجتماعات…"/>
        </div>
        <button className="pill pill-burg" style={{ padding: "8px 16px", border: 0, fontWeight: 600 }}>الكل</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>اليوم</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>هذا الأسبوع</button>
        <button className="btn btn-soft btn-sm"><Icon.Calendar width="14" height="14"/> التقويم</button>
        <button className="btn btn-primary btn-sm"><Icon.Plus width="14" height="14"/> اجتماع جديد</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="gov-table">
          <thead>
            <tr>
              <th style={{ width: 110 }}>التاريخ</th>
              <th style={{ width: 80 }}>الوقت</th>
              <th>عنوان الاجتماع</th>
              <th style={{ width: 220 }}>اللجنة</th>
              <th style={{ width: 240 }}>المكان</th>
              <th style={{ width: 110 }}>الحضور</th>
              <th style={{ width: 130 }}>الحالة</th>
              <th style={{ width: 50 }}></th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((m, i) => {
              const s = statusMap[m.status];
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{m.date}</td>
                  <td className="num" style={{ fontWeight: 700, color: "var(--c-burgundy)" }}>{m.time}</td>
                  <td style={{ fontWeight: 600, maxWidth: 360 }}>{m.title}</td>
                  <td style={{ fontSize: 13, color: "var(--c-ink-2)" }}>{m.committee}</td>
                  <td style={{ fontSize: 13, color: "var(--c-ink-3)" }}>{m.room}</td>
                  <td className="num" style={{ fontSize: 13 }}>{m.attendees > 0 ? `${m.attendees}/${m.total}` : `— /${m.total}`}</td>
                  <td><span className={`pill ${s.cls}`}>{s.live && <span className="dot dot-live"/>}{s.txt}</span></td>
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

function Reports() {
  const reports = [
    { title: "التقرير الشهري — مايو 2026", type: "تقرير دوري", committee: "جميع اللجان", date: "01 يونيو 2026", size: "4.2 MB", format: "PDF" },
    { title: "محضر اجتماع رقم ١٤ — اللجنة المالية", type: "محضر اجتماع", committee: "اللجنة المالية العليا", date: "28 مايو 2026", size: "1.8 MB", format: "PDF" },
    { title: "تقرير أداء توصيات الربع الأول 2026", type: "تقرير أداء", committee: "جميع اللجان", date: "15 أبريل 2026", size: "6.5 MB", format: "PDF" },
    { title: "تقرير حضور الأعضاء — الربع الأول", type: "تقرير إحصائي", committee: "جميع اللجان", date: "12 أبريل 2026", size: "2.1 MB", format: "XLSX" },
    { title: "محضر اجتماع رقم ٠٩ — التحول الرقمي", type: "محضر اجتماع", committee: "لجنة التحول الرقمي", date: "08 أبريل 2026", size: "1.4 MB", format: "PDF" },
    { title: "التقرير السنوي 2025", type: "تقرير سنوي", committee: "مجلس الوزراء", date: "31 يناير 2026", size: "12.8 MB", format: "PDF" },
  ];
  const formatColor = { PDF: "var(--c-red)", XLSX: "var(--c-green)", DOCX: "var(--c-blue)" };

  return (
    <>
      <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>إجمالي التقارير</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>284</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>منذ بداية العام</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>محاضر اجتماعات</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>196</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>موثقة ومؤرشفة</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>تقارير دورية</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>62</div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>شهرية وربع سنوية</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>المساحة المستخدمة</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6 }}>1.2<span style={{ fontSize: 22, color: "var(--c-ink-3)" }}> GB</span></div>
          <div style={{ fontSize: 12, color: "var(--c-ink-3)", marginTop: 6 }}>من 50 GB متاحة</div>
        </div>
      </div>

      <div className="card" style={{ padding: "16px 20px", marginBottom: 20, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, display: "flex", gap: 8, alignItems: "center", padding: "8px 16px", background: "var(--c-bg-2)", borderRadius: 999, minWidth: 280 }}>
          <Icon.Search width="16" height="16"/>
          <input style={{ flex: 1, border: 0, background: "transparent", outline: "none", fontSize: 14, fontFamily: "inherit" }}
            placeholder="ابحث في التقارير والأرشيف…"/>
        </div>
        <button className="pill pill-burg" style={{ padding: "8px 16px", border: 0, fontWeight: 600 }}>الكل</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>محاضر</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>دورية</button>
        <button className="pill pill-outline" style={{ padding: "8px 16px" }}>أداء</button>
        <button className="btn btn-soft btn-sm"><Icon.Filter width="14" height="14"/> فلاتر</button>
        <button className="btn btn-primary btn-sm"><Icon.Plus width="14" height="14"/> توليد تقرير</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table className="gov-table">
          <thead>
            <tr>
              <th style={{ width: 80 }}>الصيغة</th>
              <th>عنوان التقرير</th>
              <th style={{ width: 160 }}>النوع</th>
              <th style={{ width: 220 }}>اللجنة / النطاق</th>
              <th style={{ width: 140 }}>التاريخ</th>
              <th style={{ width: 100 }}>الحجم</th>
              <th style={{ width: 130 }}></th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, i) => (
              <tr key={i}>
                <td>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 44, height: 44, borderRadius: 8,
                    background: `${formatColor[r.format]}18`,
                    color: formatColor[r.format],
                    fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700,
                  }}>{r.format}</span>
                </td>
                <td style={{ fontWeight: 600 }}>{r.title}</td>
                <td><span className="pill pill-outline">{r.type}</span></td>
                <td style={{ fontSize: 13, color: "var(--c-ink-2)" }}>{r.committee}</td>
                <td className="num" style={{ fontSize: 13 }}>{r.date}</td>
                <td className="num" style={{ fontSize: 12.5, color: "var(--c-ink-3)" }}>{r.size}</td>
                <td>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button className="btn btn-ghost btn-sm"><Icon.Download width="14" height="14"/></button>
                    <button className="iconbtn iconbtn-sm"><Icon.More width="16" height="16"/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

window.MeetingsList = MeetingsList;
window.Reports = Reports;
