/* global React, Icon */

/* =========================================================
   DASHBOARD — burgundy-led, mobile-inspired softness
   ========================================================= */

export default function DashHero() {
  const today = new Date();
  return (
    <div className="dash-hero">
      <div>
        <div className="dh-greeting">السلام عليكم سعادة السيد</div>
        <div className="dh-name">عبدالله بن حمد بن عبدالله العطية</div>
        <div className="dh-role">أمين عام · مجلس الوزراء</div>
        <div className="dh-quick">
          <button className="btn btn-primary"><Icon.Plus width="14" height="14" /> إنشاء اجتماع</button>
          <button className="btn btn-secondary"><Icon.Calendar width="14" height="14" /> عرض التقويم</button>
        </div>
      </div>
      <div className="dh-date">
        <div>{today.toLocaleDateString("ar-QA", { weekday: "long" })}</div>
        <div className="dh-date-num num">{today.getDate()}</div>
        <div className="dh-date-month">{today.toLocaleDateString("ar-QA", { month: "long", year: "numeric" })}</div>
      </div>
    </div>);

}

function Stat({ label, value, sub, icon, tone = "burg", trend, trendDir = "up" }) {
  return (
    <div className="stat-card">
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-value num">{value}</div>
        <div className="stat-sub">
          {trend && <span className={`stat-trend ${trendDir}`}>{trendDir === "up" ? "▲" : "▼"} {trend}</span>}
          <span>{sub}</span>
        </div>
      </div>
      <div className={`icon-circle icon-circle-${tone}`}>{icon}</div>
    </div>);

}

function MeetingRow({ time, title, committee, room, status, online }) {
  const statusMap = {
    upcoming: { cls: "pill pill-blue", txt: "قادم" },
    live: { cls: "pill pill-burg", txt: "جارٍ الآن" },
    closed: { cls: "pill pill-gray", txt: "منتهٍ" },
    pending: { cls: "pill pill-amber", txt: "بانتظار النصاب" }
  };
  const s = statusMap[status];
  return (
    <div className="meeting-row">
      <div className="meeting-time">
        <div className="time num">{time}</div>
        <div className="date">اليوم</div>
      </div>
      <div className="meeting-body">
        <div className="meeting-title">{title}</div>
        <div className="meeting-meta">
          <span><Icon.Committees width="13" height="13" /> {committee}</span>
          <span><Icon.Pin width="13" height="13" /> {room}</span>
          {online && <span className="online-tag">+ بث مباشر</span>}
        </div>
      </div>
      <span className={s.cls} style={{ color: "rgb(147, 119, 78)" }}>{status === "live" && <span className="dot dot-live"></span>}{s.txt}</span>
      <button className="iconbtn iconbtn-sm"><Icon.More width="16" height="16" /></button>
    </div>);

}

function QuorumBar({ present, total, color = "var(--c-burgundy)" }) {
  const pct = Math.round(present / total * 100);
  return (
    <>
      <div className="quorum-track">
        <div className="quorum-fill" style={{ width: `${pct}%`, background: color }} />
        <div className="quorum-threshold" style={{ insetInlineStart: "60%" }} title="حد النصاب 60%"></div>
      </div>
      <div className="quorum-meta">
        <span className="num">{present}/{total}</span>
        <span className="quorum-pct num">{pct}%</span>
      </div>
    </>);

}

function CommitteeMini({ name, members, nextMeeting, chair, color, type }) {
  return (
    <div className="committee-mini">
      <div className="cm-stripe" style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}>
        {name.split(" ").slice(-2, -1)[0]?.charAt(0) || "ل"}
      </div>
      <div className="cm-body">
        <span className="pill pill-outline" style={{ fontSize: 10.5 }}>{type}</span>
        <div className="cm-name" style={{ marginTop: 8 }}>{name}</div>
        <div className="cm-chair"><Icon.User width="12" height="12" /> {chair}</div>
        <div className="cm-foot">
          <div>
            <div className="cm-stat-label">الأعضاء</div>
            <div className="cm-stat-val num">{members}</div>
          </div>
          <div>
            <div className="cm-stat-label">الاجتماع القادم</div>
            <div className="cm-stat-val">{nextMeeting}</div>
          </div>
        </div>
      </div>
    </div>);

}

function DecisionStatus({ decisions }) {
  const total = decisions.reduce((s, d) => s + d.value, 0);
  return (
    <div className="dec-status">
      <div className="dec-bar">
        {decisions.map((d, i) =>
        <div key={i} className="dec-seg" style={{ width: `${d.value / total * 100}%`, background: d.color }} title={`${d.label}: ${d.value}`} />
        )}
      </div>
      <div className="dec-legend">
        {decisions.map((d, i) =>
        <div key={i} className="dec-leg-item">
            <span className="dot" style={{ background: d.color }} />
            <span className="dec-leg-label">{d.label}</span>
            <span className="dec-leg-val num">{d.value}</span>
          </div>
        )}
      </div>
    </div>);

}

function ActivityItem({ kind, who, what, target, when }) {
  const kindMap = {
    decision: { tone: "burg", Icon: Icon.Decisions },
    meeting: { tone: "blue", Icon: Icon.Meetings },
    member: { tone: "gold", Icon: Icon.Members },
    document: { tone: "gray", Icon: Icon.Documents }
  };
  const k = kindMap[kind] || kindMap.decision;
  return (
    <div className="activity-item">
      <div className={`activity-icon icon-circle icon-circle-${k.tone}`} style={{ width: 36, height: 36 }}>
        <k.Icon width="15" height="15" />
      </div>
      <div className="activity-body">
        <div className="activity-line">
          <strong>{who}</strong> {what} <a className="activity-target">{target}</a>
        </div>
        <div className="activity-when">{when}</div>
      </div>
    </div>);

}

function Dashboard() {
  return (
    <>
      <DashHero />

      {/* TOP STATS */}
      <div className="grid stats-grid">
        <Stat label="اللجان النشطة" value="12" sub="من أصل 18 لجنة"
        icon={<Icon.Committees width="22" height="22" />} tone="burg" trend="2 جديدة" trendDir="up" />
        <Stat label="اجتماعات هذا الشهر" value="34" sub="مقارنة بـ 28 الشهر الماضي"
        icon={<Icon.Meetings width="22" height="22" />} tone="blue" trend="21%" trendDir="up" />
        <Stat label="القرارات قيد التنفيذ" value="87" sub="منها 14 متأخرة"
        icon={<Icon.Decisions width="22" height="22" />} tone="gold" trend="14" trendDir="down" />
        <Stat label="مهام بانتظارك" value="07" sub="منها 3 ذات أولوية عالية"
        icon={<Icon.Tasks width="22" height="22" />} tone="green" />
      </div>

      {/* MAIN GRID */}
      <div className="grid main-grid">
        <section className="card dash-card">
          <header className="card-head">
            <div>
              <span className="eyebrow">جدول اليوم</span>
              <h2 className="card-title">اجتماعات اليوم</h2>
            </div>
            <div className="card-actions">
              <button className="btn btn-ghost btn-sm"><Icon.Calendar width="14" height="14" /> التقويم</button>
              <button className="btn btn-soft btn-sm"><Icon.Plus width="14" height="14" /> اجتماع جديد</button>
            </div>
          </header>

          <div className="meeting-list">
            <MeetingRow time="09:00" title="مراجعة الموازنة التشغيلية للربع الثاني"
            committee="اللجنة المالية العليا" room="قاعة الوزراء — الدور الثالث" status="live" online />
            <MeetingRow time="11:30" title="مناقشة مشروع قانون حماية البيانات الشخصية"
            committee="لجنة الشؤون القانونية" room="قاعة (ب) — الديوان الأميري" status="upcoming" online />
            <MeetingRow time="14:00" title="متابعة مبادرات التحول الرقمي 2026"
            committee="لجنة التحول الرقمي" room="عن بُعد — منصة Q-Connect" status="pending" />
            <MeetingRow time="16:30" title="إقرار خطة الاستجابة للطوارئ الوطنية"
            committee="لجنة الأمن الوطني" room="غرفة العمليات الموحدة" status="upcoming" />
          </div>
        </section>

        <aside className="dash-side">
          {/* QUORUM CARD */}
          <div className="card dash-card">
            <header className="card-head card-head-tight">
              <div>
                <span className="eyebrow">الجلسة الحالية</span>
                <h3 className="card-title-sm">اللجنة المالية العليا</h3>
              </div>
              <span className="pill pill-burg"><span className="dot dot-live"></span> جارٍ الآن</span>
            </header>
            <div className="quorum-block">
              <div className="quorum-row">
                <span className="qr-label"><Icon.Quorum width="14" height="14" /> النصاب القانوني</span>
                <span className="qr-state">مكتمل ✓</span>
              </div>
              <QuorumBar present={9} total={12} />
              <div className="quorum-foot">
                <span>الحاضرون: <strong className="num">9</strong></span>
                <span>عبر البث: <strong className="num">3</strong></span>
                <span>الغياب: <strong className="num">0</strong></span>
              </div>
            </div>
            <hr className="hr-soft" />
            <div className="agenda-progress">
              <div className="ap-head">
                <span>التقدم في جدول الأعمال</span>
                <span className="num">3 / 7</span>
              </div>
              <div className="ap-track">
                {[0, 1, 2, 3, 4, 5, 6].map((i) =>
                <span key={i} className={`ap-dot ${i < 3 ? "done" : i === 3 ? "active" : ""}`} />
                )}
              </div>
              <div className="ap-current">
                <span className="eyebrow">البند الحالي</span>
                <div className="ap-current-title">٤. اعتماد توصيات تقرير ديوان المحاسبة</div>
              </div>
            </div>
            <div style={{ padding: "16px 24px 22px" }}>
              <button className="btn btn-primary btn-block">الانضمام إلى الجلسة</button>
            </div>
          </div>

          {/* DECISIONS BREAKDOWN */}
          <div className="card dash-card">
            <header className="card-head card-head-tight">
              <div>
                <span className="eyebrow">آخر 30 يوماً</span>
                <h3 className="card-title-sm">حالة القرارات</h3>
              </div>
              <button className="btn btn-ghost btn-sm">تفاصيل</button>
            </header>
            <DecisionStatus decisions={[
            { label: "منفذة", value: 142, color: "var(--c-green)" },
            { label: "قيد التنفيذ", value: 87, color: "var(--c-burgundy)" },
            { label: "متأخرة", value: 14, color: "var(--c-amber)" },
            { label: "مرفوضة", value: 6, color: "var(--c-red)" }]
            } />
          </div>
        </aside>
      </div>

      {/* COMMITTEES STRIP */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="eyebrow">اللجان الرئيسية</span>
            <h2 className="section-title">اللجان التي تترأسها أو تشارك فيها</h2>
          </div>
          <a className="see-all">عرض جميع اللجان <Icon.ChevronStart width="14" height="14" /></a>
        </div>
        <div className="grid committees-grid">
          <CommitteeMini name="اللجنة المالية العليا" type="لجنة دائمة" color="var(--c-burgundy)"
          chair="معالي/ خالد بن خليفة" members={12} nextMeeting="غداً · 10:00" />
          <CommitteeMini name="لجنة التحول الرقمي" type="لجنة استراتيجية" color="var(--c-blue)"
          chair="معالي/ محمد بن عبدالله" members={9} nextMeeting="الخميس · 14:00" />
          <CommitteeMini name="لجنة الشؤون القانونية" type="لجنة دائمة" color="var(--c-gold-700)"
          chair="معالي/ فهد بن جاسم" members={8} nextMeeting="اليوم · 11:30" />
          <CommitteeMini name="لجنة الأمن الوطني" type="لجنة سيادية" color="var(--c-burgundy-900)"
          chair="سعادة/ عبدالعزيز السبيعي" members={11} nextMeeting="الأحد · 09:00" />
        </div>
      </section>

      {/* BOTTOM ROW */}
      <div className="grid bottom-grid">
        <section className="card dash-card">
          <header className="card-head">
            <div>
              <span className="eyebrow">آخر التحديثات</span>
              <h3 className="card-title-sm">سجل النشاط</h3>
            </div>
            <button className="btn btn-ghost btn-sm">عرض الكل</button>
          </header>
          <div className="activity-list">
            <ActivityItem kind="decision" who="معالي/ خالد بن خليفة" what="اعتمد القرار رقم"
            target="٢٠٢٦/١٤٧ — تعديل اللائحة المالية" when="منذ 12 دقيقة" />
            <ActivityItem kind="meeting" who="الأمانة العامة" what="جدولت اجتماعاً جديداً للجنة"
            target="التحول الرقمي · الخميس 14:00" when="منذ 45 دقيقة" />
            <ActivityItem kind="member" who="سعادة/ نورة الكواري" what="انضمت كعضو في"
            target="لجنة المرأة والطفل" when="منذ ساعة" />
            <ActivityItem kind="document" who="مكتب أمين السر" what="رفع محضر اجتماع"
            target="رقم ١٢ — اللجنة المالية" when="منذ 3 ساعات" />
            <ActivityItem kind="decision" who="معالي/ محمد بن عبدالله" what="رفض المقترح المقدم في"
            target="٢٠٢٦/١٤٢ — مراجعة العقود" when="منذ 5 ساعات" />
          </div>
        </section>

        <section className="card dash-card">
          <header className="card-head">
            <div>
              <span className="eyebrow">في انتظارك</span>
              <h3 className="card-title-sm">مهامي</h3>
            </div>
            <span className="pill pill-burg num">7 مهام</span>
          </header>
          <ul className="task-list">
            <li className="task task-high">
              <input type="checkbox" />
              <div>
                <div className="task-title">التصويت على مقترح تعديل سياسة المشتريات</div>
                <div className="task-meta">
                  <span className="pill pill-burg">عاجل</span>
                  <span><Icon.Clock width="12" height="12" /> ينتهي خلال ساعتين</span>
                </div>
              </div>
            </li>
            <li className="task">
              <input type="checkbox" />
              <div>
                <div className="task-title">مراجعة محضر الاجتماع رقم ١٤ والتوقيع</div>
                <div className="task-meta">
                  <span className="pill pill-amber">أولوية متوسطة</span>
                  <span><Icon.Clock width="12" height="12" /> غداً قبل 17:00</span>
                </div>
              </div>
            </li>
            <li className="task">
              <input type="checkbox" />
              <div>
                <div className="task-title">اعتماد جدول أعمال جلسة الخميس القادمة</div>
                <div className="task-meta">
                  <span className="pill pill-blue">اعتماد</span>
                  <span>لجنة التحول الرقمي</span>
                </div>
              </div>
            </li>
            <li className="task">
              <input type="checkbox" />
              <div>
                <div className="task-title">الإجابة على استفسار من ديوان المحاسبة</div>
                <div className="task-meta">
                  <span className="pill pill-gray">قراءة</span>
                  <span>هذا الأسبوع</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>);

}

window.Dashboard = Dashboard;