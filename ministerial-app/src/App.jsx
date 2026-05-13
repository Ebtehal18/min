import { useState, useEffect } from "react";

// Import useTweaks
// import { useTweaks } from "./useTweaks";

// Import all needed components
import Sidebar from "./shell";           // أو "./Sidebar" حسب اسم الملف
import Topbar from "./shell";
import Login from "./screen-login";
import Dashboard from "./screen-dashboard";
import CommitteesList from "./screen-list";
import CommitteeDetail from "./screen-committee";
import MeetingDetail from "./screen-meeting";

// ====================== AppShell ======================
function AppShell({ active, title, subtitle, children, lead }) {
  return (
    <div className="app" data-lead={lead}>
      <Sidebar active={active} lead={lead} />
      <main className="main">
        <Topbar title={title} subtitle={subtitle} />
        <div className="page">{children}</div>
      </main>
    </div>
  );
}

// ====================== LeadStyles ======================
function LeadStyles({ lead }) {
  const map = {
    blue:     { primary: "var(--c-blue)",     accent: "var(--c-gold)" },
    burgundy: { primary: "var(--c-burgundy)", accent: "var(--c-gold)" },
    gold:     { primary: "var(--c-gold-700)", accent: "var(--c-burgundy)" },
  };
  const c = map[lead] || map.blue;

  return (
    <style>{`
      [data-lead="${lead}"] .btn-primary { background: ${c.primary}; }
      [data-lead="${lead}"] .btn-primary:hover { background: ${c.primary}; filter: brightness(0.92); }
      [data-lead="${lead}"] .navitem.is-active { color: ${c.primary}; background: color-mix(in oklch, ${c.primary} 8%, white); }
      [data-lead="${lead}"] .navitem.is-active::before { background: ${c.primary}; }
      [data-lead="${lead}"] .topbar::after { background: ${c.accent}; }
      [data-lead="${lead}"] .tab.is-active { color: ${c.primary}; border-bottom-color: ${c.accent}; }
      [data-lead="${lead}"] .brand-ar { color: ${c.primary}; }
    `}</style>
  );
}

// ====================== DemoNav ======================
const SCREENS = [
  { id: "login",            label: "تسجيل الدخول",     icon: "🔐" },
  { id: "dashboard",        label: "لوحة التحكم",       icon: "📊" },
  { id: "committees",       label: "اللجان",            icon: "🏛️" },
  { id: "committee-detail", label: "ملف لجنة",          icon: "📋" },
  { id: "meeting",          label: "إدارة الاجتماع",   icon: "🎙️" },
];

function DemoNav({ current, onChange }) {
  return (
    <div className="demo-nav">
      <div className="demo-nav-brand">
        <img src="assets/logo-mark.png" alt="" />
        <div>
          <div className="demo-nav-title">منظومة اللجان الوزارية</div>
          <div className="demo-nav-sub">عرض تجريبي — اختر شاشة للعرض</div>
        </div>
      </div>
      <div className="demo-nav-tabs">
        {SCREENS.map(s => (
          <button 
            key={s.id}
            className={`demo-tab ${current === s.id ? "is-active" : ""}`}
            onClick={() => onChange(s.id)}
          >
            <span className="demo-tab-icon">{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ====================== Root ======================
function App() {
  // const [tw, setTw] = useTweaks({ lead: "blue" });

  const [current, setCurrent] = useState("login");

  const goTo = (id) => {
    setCurrent(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto advance from login
  useEffect(() => {
    if (current !== "login") return;

    const timer = setTimeout(() => {
      document.querySelectorAll(".login-page button").forEach(b => {
        if (b.classList.contains("login-eye")) return;

        b.style.cursor = "pointer";
        b.addEventListener("click", (e) => {
          e.preventDefault();
          goTo("dashboard");
        }, { once: true });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [current]);

  const renderScreen = () => {
    switch (current) {
      case "login":
        return <Login />;
      case "dashboard":
        return (
          <AppShell active="dashboard"  title="لوحة التحكم" subtitle="نظرة شاملة على مؤشرات اللجان والقرارات والاجتماعات">
            <Dashboard />
          </AppShell>
        );
      case "committees":
        return (
          <AppShell active="committees"  title="اللجان الوزارية" subtitle="إدارة اللجان وربطها بقرارات التشكيل">
            <CommitteesList />
          </AppShell>
        );
      case "committee-detail":
        return (
          <AppShell active="committees"  title="ملف اللجنة" subtitle="التفاصيل والاختصاصات والأعضاء والقرارات">
            <CommitteeDetail />
          </AppShell>
        );
      case "meeting":
        return (
          <AppShell active="live"  title="إدارة أعمال الاجتماع" subtitle="جلسة جارية — جدول الأعمال والحضور والتصويت اللحظي">
            <MeetingDetail />
          </AppShell>
        );
      default:
        return <div>الشاشة غير موجودة</div>;
    }
  };

  return (
    <>
      <LeadStyles />
      <DemoNav current={current} onChange={goTo} />
      <div className="demo-stage">
        {renderScreen()}
      </div>

      {/* <TweaksPanel title="إعدادات التصميم">
        <TweakSection title="اللون القائد">
          <TweakRadio
            label="اختر اللون الأساسي للنظام"
            value={tw.lead}
            onChange={v => setTw("lead", v)}
            options={[
              { value: "blue",     label: "الأزرق (مؤسسي)" },
              { value: "burgundy", label: "العنابي (رسمي)" },
              { value: "gold",     label: "الذهبي (احتفالي)" },
            ]}
          />
        </TweakSection>
      </TweaksPanel> */}
    </>
  );
}

export default App;