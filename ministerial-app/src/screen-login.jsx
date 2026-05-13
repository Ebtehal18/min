/* global React, Icon */

/* =========================================================
   LOGIN — split ceremonial layout
   Left: dark burgundy hero with brand · Right: clean form panel
   ========================================================= */

export default function Login() {
  return (
    <div className="login-page">
      {/* Decorative arabesque (subtle, ceremonial) */}
      <svg className="login-decor login-decor-tr" viewBox="0 0 320 320" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="0.7">
          <circle cx="160" cy="160" r="150"/>
          <circle cx="160" cy="160" r="120"/>
          <circle cx="160" cy="160" r="90"/>
          <circle cx="160" cy="160" r="60"/>
          <path d="M160 10 L310 160 L160 310 L10 160 Z"/>
          <path d="M160 40 L280 160 L160 280 L40 160 Z"/>
          <path d="M40 40 L280 280 M280 40 L40 280"/>
          <path d="M160 10 L160 310 M10 160 L310 160"/>
        </g>
      </svg>
      <svg className="login-decor login-decor-bl" viewBox="0 0 320 320" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="0.7">
          <circle cx="160" cy="160" r="150"/>
          <circle cx="160" cy="160" r="120"/>
          <circle cx="160" cy="160" r="90"/>
          <path d="M160 10 L310 160 L160 310 L10 160 Z"/>
        </g>
      </svg>

      {/* LEFT — ceremonial hero */}
      <div className="login-hero">
        <div className="login-hero-badge">
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--c-gold)" }}></span>
          دولة قطر · مجلس الوزراء
        </div>

        <img className="login-hero-emblem" src="assets/logo-mark.png" alt="Council of Ministers"/>

        <h1>
          منظومة <span className="gold">اللجان الوزارية</span>
        </h1>
        <p className="login-hero-tag">
          منصة موحّدة لإدارة اللجان والاجتماعات والقرارات والتوصيات على مستوى مجلس الوزراء — بإحكام، شفافية، وأمان.
        </p>

        <div className="login-hero-feats">
          <div className="login-hero-feat">
            <span className="login-hero-feat-icon"><Icon.Committees width="18" height="18"/></span>
            <span>إدارة دورة حياة اللجان من قرار التشكيل حتى إصدار التوصيات</span>
          </div>
          <div className="login-hero-feat">
            <span className="login-hero-feat-icon"><Icon.Meetings width="18" height="18"/></span>
            <span>إدارة الاجتماعات والنصاب والتصويت لحظياً</span>
          </div>
          <div className="login-hero-feat">
            <span className="login-hero-feat-icon"><Icon.Decisions width="18" height="18"/></span>
            <span>متابعة تنفيذ القرارات والتوصيات بمعايير الحوكمة</span>
          </div>
        </div>

        <div className="login-hero-foot">
          <span><Icon.Lock width="12" height="12"/> اتصال مُشفَّر · TLS 1.3</span>
          <span className="sep">·</span>
          <span>الإصدار 4.2.0 · مايو ٢٠٢٦</span>
        </div>
      </div>

      {/* RIGHT — clean form panel */}
      <div className="login-stage">
        <div className="login-top-right">
          <button className="iconbtn"><Icon.Globe width="16" height="16"/><span className="lang">EN</span></button>
        </div>

        <div className="login-card">
          <div className="login-head">
            <span className="eyebrow">تسجيل الدخول</span>
            <h1>أهلاً بعودتك</h1>
            <p>سجّل الدخول باستخدام النفاذ الوطني الموحّد، أو ببياناتك المؤسسية.</p>
          </div>

          <button className="btn-nas">
            <span className="nas-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="#fff" strokeWidth="1.6"/>
                <circle cx="9" cy="12" r="2" stroke="#fff" strokeWidth="1.6"/>
                <path d="M14 11h5M14 13h5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </span>
            <div className="nas-body">
              <div className="nas-title">الدخول عبر النفاذ الوطني</div>
              <div className="nas-sub">National Authentication System</div>
            </div>
            <Icon.ChevronStart width="18" height="18"/>
          </button>

          <div className="login-or"><span>أو الدخول ببياناتك المؤسسية</span></div>

          <div className="login-form">
            <div className="login-field">
              <label>اسم المستخدم</label>
              <div className="login-input">
                <Icon.User width="16" height="16"/>
                <input placeholder="ادخل اسم المستخدم" defaultValue="f.elsayed@cm.gov.qa"/>
              </div>
            </div>
            <div className="login-field">
              <label>كلمة المرور</label>
              <div className="login-input">
                <Icon.Lock width="16" height="16"/>
                <input type="password" placeholder="ادخل كلمة المرور" defaultValue="••••••••••••"/>
                <button className="login-eye" type="button" tabIndex="-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="login-row">
              <label className="login-check">
                <input type="checkbox" defaultChecked/>
                <span>تذكّرني على هذا الجهاز</span>
              </label>
              <a className="login-link">نسيت كلمة المرور؟</a>
            </div>
            <button className="btn btn-primary btn-block btn-lg">تسجيل الدخول</button>
          </div>

          <div className="login-microsoft">
            <button className="btn-microsoft">
              <svg width="18" height="18" viewBox="0 0 24 24"><rect x="2" y="2" width="9" height="9" fill="#F25022"/><rect x="13" y="2" width="9" height="9" fill="#7FBA00"/><rect x="2" y="13" width="9" height="9" fill="#00A4EF"/><rect x="13" y="13" width="9" height="9" fill="#FFB900"/></svg>
              <span>تسجيل الدخول بـ Microsoft</span>
            </button>
          </div>
        </div>

        <div className="login-foot">
          <a>دليل المستخدم</a>
          <span className="sep">·</span>
          <a>الدعم الفني</a>
          <span className="sep">·</span>
          <a>سياسة الخصوصية</a>
        </div>
      </div>
    </div>
  );
}

window.Login = Login;
