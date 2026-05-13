/* global React, Icon */

/* =========================================================
   EXECUTIVE ANALYTICS — KPI grid + charts
   ========================================================= */

function MiniBars({ data, color = "var(--c-burgundy)" }) {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 60 }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, height: `${(v/max)*100}%`, background: color, borderRadius: "3px 3px 0 0", opacity: i === data.length - 1 ? 1 : 0.5 + (i / data.length) * 0.5 }}/>
      ))}
    </div>
  );
}

function DonutChart({ segments, size = 160 }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let cumulative = 0;
  const cx = size/2, cy = size/2, r = size/2 - 14;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--c-bg-2)" strokeWidth="22"/>
      {segments.map((seg, i) => {
        const portion = seg.value / total;
        const dash = 2 * Math.PI * r * portion;
        const gap  = 2 * Math.PI * r - dash;
        const offset = -2 * Math.PI * r * cumulative;
        cumulative += portion;
        return (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none"
            stroke={seg.color} strokeWidth="22"
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${cx} ${cy})`}/>
        );
      })}
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--c-ink)" fontFamily="var(--font-display)">{total}</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="11" fill="var(--c-ink-3)">المجموع</text>
    </svg>
  );
}

function LineChart({ data, color = "var(--c-burgundy)", height = 180 }) {
  const w = 600, h = height;
  const max = Math.max(...data) * 1.15;
  const stepX = w / (data.length - 1);
  const points = data.map((v, i) => `${i * stepX},${h - (v/max) * (h - 30) - 10}`).join(" ");
  const areaPoints = `0,${h} ${points} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height }} preserveAspectRatio="none">
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line key={i} x1="0" x2={w} y1={h * p} y2={h * p} stroke="var(--c-border)" strokeDasharray="4 6"/>
      ))}
      <polygon points={areaPoints} fill={color} opacity="0.08"/>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      {data.map((v, i) => (
        <circle key={i} cx={i * stepX} cy={h - (v/max) * (h - 30) - 10} r="3.5" fill="#fff" stroke={color} strokeWidth="2"/>
      ))}
    </svg>
  );
}

function Analytics() {
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"];
  return (
    <>
      <div className="grid stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>اللجان النشطة</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, letterSpacing: "-0.02em" }}>18</div>
          <div style={{ marginTop: 14 }}><MiniBars data={[12, 14, 13, 15, 16, 17, 18]} color="var(--c-burgundy)"/></div>
          <div style={{ fontSize: 11.5, color: "var(--c-green)", marginTop: 8, fontWeight: 600 }}>▲ 50% خلال 7 أشهر</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>اجتماعات الشهر</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, letterSpacing: "-0.02em" }}>34</div>
          <div style={{ marginTop: 14 }}><MiniBars data={[18, 22, 25, 21, 28, 30, 34]} color="var(--c-blue)"/></div>
          <div style={{ fontSize: 11.5, color: "var(--c-green)", marginTop: 8, fontWeight: 600 }}>▲ 21% عن الشهر الماضي</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>قرارات صادرة</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, letterSpacing: "-0.02em" }}>247</div>
          <div style={{ marginTop: 14 }}><MiniBars data={[28, 35, 42, 38, 45, 40, 48]} color="var(--c-gold-700)"/></div>
          <div style={{ fontSize: 11.5, color: "var(--c-amber)", marginTop: 8, fontWeight: 600 }}>متوسط 35 قرار/شهر</div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: "var(--c-ink-3)" }}>معدل تنفيذ التوصيات</div>
          <div className="num" style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, marginTop: 6, letterSpacing: "-0.02em" }}>87<span style={{ fontSize: 22, color: "var(--c-ink-3)" }}>%</span></div>
          <div style={{ marginTop: 14 }}><MiniBars data={[68, 72, 75, 78, 80, 84, 87]} color="var(--c-green)"/></div>
          <div style={{ fontSize: 11.5, color: "var(--c-green)", marginTop: 8, fontWeight: 600 }}>▲ 19% منذ بداية العام</div>
        </div>
      </div>

      {/* Main charts */}
      <div className="grid" style={{ gridTemplateColumns: "1.6fr 1fr", gap: 20, marginBottom: 22 }}>
        <div className="card" style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
            <div>
              <span className="eyebrow">آخر 7 أشهر</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, margin: "6px 0 0", fontWeight: 700 }}>تطوّر القرارات والتوصيات</h3>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12.5 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="dot dot-burg"/> القرارات</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="dot dot-blue"/> التوصيات</span>
            </div>
          </div>
          <LineChart data={[28, 35, 42, 38, 45, 40, 48]} color="var(--c-burgundy)" height={200}/>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)`, fontSize: 11.5, color: "var(--c-ink-3)", marginTop: 8 }}>
            {months.map(m => <div key={m} style={{ textAlign: "center" }}>{m}</div>)}
          </div>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <span className="eyebrow">حالة التوصيات</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, margin: "6px 0 18px", fontWeight: 700 }}>توزيع الحالة</h3>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
            <DonutChart segments={[
              { value: 89, color: "var(--c-green)" },
              { value: 38, color: "var(--c-burgundy)" },
              { value: 15, color: "var(--c-amber)" },
            ]} size={180}/>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><span className="dot" style={{ background: "var(--c-green)" }}/> منفذة</span>
              <span className="num" style={{ fontWeight: 700 }}>89 · 63%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><span className="dot" style={{ background: "var(--c-burgundy)" }}/> قيد التنفيذ</span>
              <span className="num" style={{ fontWeight: 700 }}>38 · 27%</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}><span className="dot" style={{ background: "var(--c-amber)" }}/> متأخرة</span>
              <span className="num" style={{ fontWeight: 700 }}>15 · 10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance by committee */}
      <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 22 }}>
        <div style={{ padding: "22px 24px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <span className="eyebrow">أداء اللجان</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, margin: "6px 0 0", fontWeight: 700 }}>كفاءة التنفيذ حسب اللجنة</h3>
          </div>
          <button className="btn btn-ghost btn-sm">عرض التفاصيل</button>
        </div>
        <table className="gov-table">
          <thead>
            <tr>
              <th>اللجنة</th>
              <th style={{ width: 120 }}>الاجتماعات</th>
              <th style={{ width: 120 }}>القرارات</th>
              <th style={{ width: 120 }}>التوصيات</th>
              <th style={{ width: 240 }}>كفاءة التنفيذ</th>
              <th style={{ width: 100 }}>التقييم</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "اللجنة المالية العليا", m: 18, d: 42, r: 28, eff: 94, grade: "ممتاز", color: "var(--c-green)" },
              { name: "لجنة التحول الرقمي", m: 14, d: 35, r: 22, eff: 88, grade: "ممتاز", color: "var(--c-green)" },
              { name: "لجنة الشؤون القانونية", m: 16, d: 38, r: 19, eff: 82, grade: "جيد جداً", color: "var(--c-blue)" },
              { name: "لجنة الأمن الوطني", m: 12, d: 28, r: 15, eff: 76, grade: "جيد", color: "var(--c-blue)" },
              { name: "لجنة الموارد البشرية", m: 10, d: 18, r: 12, eff: 64, grade: "مقبول", color: "var(--c-amber)" },
            ].map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{row.name}</td>
                <td className="num">{row.m}</td>
                <td className="num">{row.d}</td>
                <td className="num">{row.r}</td>
                <td>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ flex: 1, height: 6, background: "var(--c-bg-2)", borderRadius: 999, overflow: "hidden" }}>
                      <div style={{ width: `${row.eff}%`, height: "100%", background: row.color, borderRadius: 999 }}/>
                    </div>
                    <span className="num" style={{ fontSize: 12.5, fontWeight: 700, minWidth: 38 }}>{row.eff}%</span>
                  </div>
                </td>
                <td><span className="pill" style={{ background: `${row.color}20`, color: row.color }}>{row.grade}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

window.Analytics = Analytics;
