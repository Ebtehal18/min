/* global React, Icon */

/* =========================================================
   MEETING / AGENDA SCREEN
   ========================================================= */

export default function MeetingDetail() {
  const agenda = [
    { num: 1, title: "افتتاح الجلسة وتلاوة محضر الاجتماع السابق", duration: "١٠ د", status: "done", presenter: "أمين السر" },
    { num: 2, title: "عرض التقرير المالي للربع الأول من العام ٢٠٢٦", duration: "٢٥ د", status: "done", presenter: "وزير المالية" },
    { num: 3, title: "مناقشة توصيات ديوان المحاسبة بشأن مراجعة العقود", duration: "٣٠ د", status: "done", presenter: "مدير الديوان" },
    { num: 4, title: "اعتماد توصيات تقرير ديوان المحاسبة", duration: "٢٠ د", status: "active", presenter: "اللجنة" },
    { num: 5, title: "مراجعة آلية التعاقد على المشاريع الإنشائية الكبرى", duration: "٣٠ د", status: "pending", presenter: "وزير المواصلات" },
    { num: 6, title: "إقرار البرنامج التحفيزي للقطاع الخاص للربع الثاني", duration: "٢٥ د", status: "pending", presenter: "وزير التجارة" },
    { num: 7, title: "ما يستجد من أعمال", duration: "١٥ د", status: "pending", presenter: "اللجنة" },
  ];

  return (
    <>
      <div className="crumbs">
        <a>الرئيسية</a><span className="sep">/</span>
        <a>الاجتماعات</a><span className="sep">/</span>
        <span className="here">اجتماع رقم ٣٤ — اللجنة المالية العليا</span>
      </div>

      {/* HEADER */}
      <section className="meeting-hero">
        <div className="mh-left">
          <div className="mh-status">
            <span className="live-pulse"><span className="live-pulse-dot"/></span>
            <span className="mh-status-text">جارٍ الآن · بدأ منذ ٤٢ دقيقة</span>
          </div>
          <h1 className="mh-title">اجتماع الربع الثاني — مراجعة الأداء المالي</h1>
          <div className="mh-sub">
            <span><Icon.Committees width="14" height="14"/> اللجنة المالية العليا</span>
            <span><Icon.Calendar width="14" height="14"/> الثلاثاء ٥ مايو ٢٠٢٦</span>
            <span><Icon.Clock width="14" height="14"/> ٠٩:٠٠ — ١١:٣٠</span>
            <span><Icon.Pin width="13" height="13"/> قاعة الوزراء — الدور الثالث</span>
          </div>
        </div>
        <div className="mh-right">
          <div className="mh-quorum-box">
            <span className="eyebrow">النصاب</span>
            <div className="mh-quorum-num">
              <span className="num">٩</span>
              <span className="mh-quorum-of">/ ١٢</span>
              <span className="pill pill-green">مكتمل</span>
            </div>
          </div>
          <button className="btn btn-burgundy"><Icon.Meetings width="14" height="14"/> الانضمام للجلسة</button>
        </div>
      </section>

      <div className="grid meeting-grid">
        {/* AGENDA */}
        <section className="card meeting-agenda">
          <header className="card-head">
            <div>
              <span className="eyebrow">جدول الأعمال</span>
              <h3 className="card-title-sm">٧ بنود · المدة الكلية ساعتان وثلاثون دقيقة</h3>
            </div>
            <div className="agenda-progress-mini">
              <span className="num">3 / 7</span>
              <div className="ap-track" style={{width: 100}}>
                {[0,1,2,3,4,5,6].map(i => (
                  <span key={i} className={`ap-dot ${i < 3 ? "done" : i === 3 ? "active" : ""}`}/>
                ))}
              </div>
            </div>
          </header>

          <ol className="agenda-items">
            {agenda.map(a => (
              <li key={a.num} className={`agenda-item agenda-${a.status}`}>
                <div className="ag-num num">{a.num}</div>
                <div className="ag-body">
                  <div className="ag-title">{a.title}</div>
                  <div className="ag-meta">
                    <span><Icon.User width="12" height="12"/> {a.presenter}</span>
                    <span><Icon.Clock width="12" height="12"/> {a.duration}</span>
                    {a.status === "active" && <span className="pill pill-burg"><span className="dot dot-red"/> النقاش الحالي</span>}
                    {a.status === "done"   && <span className="pill pill-green">منجز</span>}
                  </div>
                </div>
                <div className="ag-side">
                  {a.status === "active" && (
                    <div className="vote-mini">
                      <span className="eyebrow">جلسة التصويت</span>
                      <div className="vote-bars">
                        <div className="vote-bar"><span style={{width:"67%", background:"var(--c-green)"}}/><span className="vote-lab">موافق <b className="num">٦</b></span></div>
                        <div className="vote-bar"><span style={{width:"22%", background:"var(--c-amber)"}}/><span className="vote-lab">ممتنع <b className="num">٢</b></span></div>
                        <div className="vote-bar"><span style={{width:"11%", background:"var(--c-red)"}}/><span className="vote-lab">معارض <b className="num">١</b></span></div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SIDE */}
        <aside className="meeting-side">
          {/* Attendees */}
          <div className="card">
            <header className="side-head">
              <span className="eyebrow">الحضور</span>
              <span className="num side-count">٩ من ١٢</span>
            </header>
            <h3 className="card-title-sm">قائمة الحضور</h3>
            <div className="attendee-list">
              {[
                { name: "خالد بن خليفة", role: "رئيس", status: "online", inroom: true },
                { name: "محمد بن عبدالله", role: "نائب", status: "online", inroom: true },
                { name: "فهد بن جاسم", role: "عضو", status: "online", inroom: true },
                { name: "نورة الكواري", role: "عضو", status: "online", inroom: false },
                { name: "عبدالعزيز السبيعي", role: "عضو", status: "online", inroom: false },
                { name: "راشد المري", role: "أمين سر", status: "online", inroom: true },
                { name: "حمد العطية", role: "عضو", status: "absent", inroom: false },
                { name: "علي بن سعيد", role: "عضو", status: "absent", inroom: false },
              ].map((a, i) => (
                <div key={i} className="attendee">
                  <div className="avatar avatar-sm">
                    {a.name.split(" ").slice(-1)[0][0]}
                    <span className={`presence presence-${a.status === "online" ? "online" : "offline"}`}/>
                  </div>
                  <div className="att-info">
                    <div className="att-name">{a.name}</div>
                    <div className="att-role">{a.role} · {a.inroom ? "في القاعة" : a.status === "online" ? "بث مباشر" : "غائب"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="card">
            <header className="side-head">
              <span className="eyebrow">المرفقات</span>
              <a className="see-all-sm">رفع جديد</a>
            </header>
            <h3 className="card-title-sm">وثائق الجلسة</h3>
            <ul className="doc-list">
              <li>
                <div className="doc-icon doc-pdf">PDF</div>
                <div className="doc-body">
                  <div className="doc-name">التقرير المالي للربع الأول</div>
                  <div className="doc-meta">٤.٢ ميغابايت · حُدّث صباح اليوم</div>
                </div>
                <button className="iconbtn iconbtn-sm"><Icon.Download width="14" height="14"/></button>
              </li>
              <li>
                <div className="doc-icon doc-pdf">PDF</div>
                <div className="doc-body">
                  <div className="doc-name">توصيات ديوان المحاسبة</div>
                  <div className="doc-meta">١.٨ ميغابايت · أمس</div>
                </div>
                <button className="iconbtn iconbtn-sm"><Icon.Download width="14" height="14"/></button>
              </li>
              <li>
                <div className="doc-icon doc-doc">DOC</div>
                <div className="doc-body">
                  <div className="doc-name">مسودة محضر الاجتماع السابق</div>
                  <div className="doc-meta">٣١٠ كيلوبايت</div>
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

window.MeetingDetail = MeetingDetail;
