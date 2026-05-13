/* global React, Icon */

/* =========================================================
   COMMITTEE DETAIL SCREEN
   ========================================================= */

export default function CommitteeDetail() {
  const members = [
    { name: "معالي/ خالد بن خليفة آل ثاني", role: "رئيس اللجنة", title: "وزير المالية", attendance: 96, status: "online" },
    { name: "معالي/ محمد بن عبدالله السادة", role: "نائب الرئيس", title: "وزير المواصلات", attendance: 92, status: "online" },
    { name: "معالي/ فهد بن جاسم آل ثاني", role: "عضو", title: "وزير العدل", attendance: 88, status: "offline" },
    { name: "سعادة/ نورة الكواري", role: "عضو", title: "أمين عام مساعد", attendance: 100, status: "online" },
    { name: "سعادة/ عبدالعزيز السبيعي", role: "عضو", title: "محافظ المصرف المركزي", attendance: 84, status: "busy" },
    { name: "سعادة/ راشد المري", role: "أمين السر", title: "مدير الشؤون الإدارية", attendance: 100, status: "online" },
  ];

  return (
    <>
      <div className="crumbs">
        <a>الرئيسية</a><span className="sep">/</span>
        <a>اللجان</a><span className="sep">/</span>
        <span className="here">اللجنة المالية العليا</span>
      </div>

      {/* HERO */}
      <section className="committee-hero">
        <div className="hero-stripe-bg"/>
        <div className="hero-content">
          <div className="hero-mark">
            <span className="hero-mark-letter">م</span>
          </div>
          <div className="hero-info">
            <span className="eyebrow">لجنة دائمة · مرسوم أميري رقم ٢٢ لسنة ٢٠٢٢</span>
            <h1 className="hero-title">اللجنة المالية العليا</h1>
            <p className="hero-tag">تختص بمراجعة السياسات المالية للدولة، ومراقبة تنفيذ الموازنة العامة، وإقرار التقارير الدورية المرفوعة لمجلس الوزراء.</p>
            <div className="hero-meta">
              <span><Icon.Members width="14" height="14"/> ١٢ عضواً</span>
              <span><Icon.Calendar width="14" height="14"/> أُسست في ١٤ مارس ٢٠٢٢</span>
              <span><Icon.Decisions width="14" height="14"/> ٢٤٧ قراراً</span>
              <span className="pill pill-green"><span className="dot dot-green"/> نشطة</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn btn-secondary"><Icon.Download width="14" height="14"/> ميثاق اللجنة</button>
            <button className="btn btn-primary"><Icon.Plus width="14" height="14"/> دعوة لاجتماع</button>
          </div>
        </div>
      </section>

      {/* TABS */}
      <nav className="tabs">
        {["نظرة عامة","الأعضاء","الاجتماعات","القرارات","الوثائق","التقارير","الصلاحيات"].map((t, i) => (
          <a key={i} className={`tab ${i === 0 ? "is-active" : ""}`}>{t}</a>
        ))}
      </nav>

      {/* GRID */}
      <div className="grid detail-grid">
        {/* LEFT: KPIs + Members */}
        <div className="detail-main">
          <div className="grid kpi-grid">
            <div className="kpi">
              <span className="kpi-icon" style={{background:"var(--c-blue-100)", color:"var(--c-blue)"}}><Icon.Meetings width="18" height="18"/></span>
              <div>
                <div className="kpi-val num">٣٤</div>
                <div className="kpi-lab">اجتماعاً هذا العام</div>
              </div>
            </div>
            <div className="kpi">
              <span className="kpi-icon" style={{background:"var(--c-burgundy-100)", color:"var(--c-burgundy)"}}><Icon.Decisions width="18" height="18"/></span>
              <div>
                <div className="kpi-val num">٨٧%</div>
                <div className="kpi-lab">معدل تنفيذ القرارات</div>
              </div>
            </div>
            <div className="kpi">
              <span className="kpi-icon" style={{background:"var(--c-gold-100)", color:"var(--c-gold-700)"}}><Icon.Quorum width="18" height="18"/></span>
              <div>
                <div className="kpi-val num">٩١%</div>
                <div className="kpi-lab">متوسط الحضور</div>
              </div>
            </div>
            <div className="kpi">
              <span className="kpi-icon" style={{background:"var(--c-green-100)", color:"var(--c-green)"}}><Icon.Tasks width="18" height="18"/></span>
              <div>
                <div className="kpi-val num">١٤</div>
                <div className="kpi-lab">مهام مفتوحة</div>
              </div>
            </div>
          </div>

          {/* MEMBERS */}
          <section className="card">
            <header className="card-head">
              <div>
                <span className="eyebrow">تشكيل اللجنة</span>
                <h3 className="card-title-sm">الأعضاء ({members.length})</h3>
              </div>
              <div className="card-actions">
                <button className="btn btn-ghost btn-sm"><Icon.Filter width="13" height="13"/> تصفية</button>
                <button className="btn btn-secondary btn-sm"><Icon.Plus width="13" height="13"/> إضافة عضو</button>
              </div>
            </header>
            <table className="gov-table">
              <thead>
                <tr>
                  <th>العضو</th>
                  <th>الصفة</th>
                  <th>المنصب</th>
                  <th>الحضور</th>
                  <th>الحالة</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i}>
                    <td>
                      <div className="member-cell">
                        <div className="avatar avatar-sm">
                          {m.name.split(" ").slice(-2).map(s => s[0]).join("")}
                          <span className={`presence presence-${m.status}`}/>
                        </div>
                        <div className="member-name">{m.name}</div>
                      </div>
                    </td>
                    <td>
                      <span className={`pill ${m.role.includes("رئيس") && !m.role.includes("نائب") ? "pill-burg" : m.role.includes("نائب") ? "pill-blue" : m.role.includes("سر") ? "pill-gold" : "pill-gray"}`}>{m.role}</span>
                    </td>
                    <td className="ink-2">{m.title}</td>
                    <td>
                      <div className="att-cell">
                        <div className="att-track"><div className="att-fill" style={{width:`${m.attendance}%`}}/></div>
                        <span className="num att-pct">{m.attendance}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`pill ${m.status === "online" ? "pill-green" : m.status === "busy" ? "pill-amber" : "pill-gray"}`}>
                        <span className={`dot dot-${m.status === "online" ? "green" : m.status === "busy" ? "amber" : "blue"}`}/>
                        {m.status === "online" ? "متصل" : m.status === "busy" ? "في اجتماع" : "غير متصل"}
                      </span>
                    </td>
                    <td><button className="iconbtn iconbtn-sm"><Icon.More width="14" height="14"/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* RECENT DECISIONS */}
          <section className="card">
            <header className="card-head">
              <div>
                <span className="eyebrow">السجل</span>
                <h3 className="card-title-sm">آخر القرارات</h3>
              </div>
              <button className="btn btn-ghost btn-sm">كل القرارات ({247})</button>
            </header>
            <div className="decisions-list">
              {[
                { num: "٢٠٢٦/١٤٧", title: "اعتماد تعديلات اللائحة المالية للوزارات والهيئات الحكومية", date: "اليوم", status: "approved" },
                { num: "٢٠٢٦/١٤٢", title: "مراجعة آلية التعاقد على المشاريع الإنشائية الكبرى", date: "أمس", status: "rejected" },
                { num: "٢٠٢٦/١٣٨", title: "إقرار البرنامج التحفيزي للقطاع الخاص للربع الثاني", date: "منذ ٣ أيام", status: "approved" },
                { num: "٢٠٢٦/١٣٤", title: "تأجيل البت في توسعة الميزانية التشغيلية لقطاع الصحة", date: "منذ أسبوع", status: "deferred" },
              ].map((d, i) => (
                <div key={i} className="decision-row">
                  <div className="dec-num num">{d.num}</div>
                  <div className="dec-title">{d.title}</div>
                  <div className="dec-date">{d.date}</div>
                  <span className={`pill ${d.status === "approved" ? "pill-green" : d.status === "rejected" ? "pill-red" : "pill-amber"}`}>
                    {d.status === "approved" ? "معتمد" : d.status === "rejected" ? "مرفوض" : "مؤجل"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT: Side info */}
        <aside className="detail-side">
          {/* Next meeting */}
          <div className="card card-accent-burg next-meet">
            <span className="eyebrow">الاجتماع القادم</span>
            <div className="nm-day">
              <span className="nm-day-num num">١٢</span>
              <div>
                <div className="nm-month">مايو ٢٠٢٦</div>
                <div className="nm-weekday">الثلاثاء · ١٠:٠٠ صباحاً</div>
              </div>
            </div>
            <div className="nm-title">جلسة الربع الثاني — مراجعة الأداء المالي</div>
            <div className="nm-loc"><Icon.Pin width="13" height="13"/> قاعة الوزراء — الدور الثالث</div>
            <div className="nm-foot">
              <button className="btn btn-secondary btn-block">عرض جدول الأعمال</button>
            </div>
          </div>

          {/* Mandate */}
          <div className="card">
            <span className="eyebrow">الاختصاصات</span>
            <h3 className="card-title-sm">المهام المنوطة باللجنة</h3>
            <ul className="mandate-list">
              <li><Icon.Check width="14" height="14"/> مراجعة الموازنة العامة للدولة قبل رفعها لمجلس الوزراء</li>
              <li><Icon.Check width="14" height="14"/> اعتماد التقارير الدورية لديوان المحاسبة والاستجابة لها</li>
              <li><Icon.Check width="14" height="14"/> دراسة المقترحات المتعلقة بالسياسة المالية والنقدية</li>
              <li><Icon.Check width="14" height="14"/> مراقبة التزام الجهات الحكومية بالأنظمة واللوائح المالية</li>
              <li><Icon.Check width="14" height="14"/> رفع التوصيات لمجلس الوزراء حول المشاريع الاستراتيجية</li>
            </ul>
          </div>

          {/* Documents */}
          <div className="card">
            <header className="side-head">
              <h3 className="card-title-sm">وثائق مرجعية</h3>
              <a className="see-all-sm">الكل</a>
            </header>
            <ul className="doc-list">
              <li>
                <div className="doc-icon doc-pdf">PDF</div>
                <div className="doc-body">
                  <div className="doc-name">ميثاق اللجنة المالية العليا — النسخة المحدّثة</div>
                  <div className="doc-meta">٢.٤ ميغابايت · مارس ٢٠٢٦</div>
                </div>
                <button className="iconbtn iconbtn-sm"><Icon.Download width="14" height="14"/></button>
              </li>
              <li>
                <div className="doc-icon doc-doc">DOC</div>
                <div className="doc-body">
                  <div className="doc-name">اللائحة الداخلية لإجراءات التصويت</div>
                  <div className="doc-meta">٧٢٠ كيلوبايت · فبراير ٢٠٢٦</div>
                </div>
                <button className="iconbtn iconbtn-sm"><Icon.Download width="14" height="14"/></button>
              </li>
              <li>
                <div className="doc-icon doc-xls">XLS</div>
                <div className="doc-body">
                  <div className="doc-name">جدول الاجتماعات السنوي ٢٠٢٦</div>
                  <div className="doc-meta">١٤٠ كيلوبايت · يناير ٢٠٢٦</div>
                </div>
                <button className="iconbtn iconbtn-sm"><Icon.Download width="14" height="14"/></button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

window.CommitteeDetail = CommitteeDetail;
