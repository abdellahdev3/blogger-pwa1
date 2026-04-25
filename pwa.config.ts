import { defineConfig } from "@/types/config";

export default defineConfig({
  manifest: {
    id: "/",
    name: "Bac Feljib",
    short_name: "Bac Feljib", // التعديل: استخدام short_name بدلاً من shortName
    description: "منصة تعليمية جزائرية لطلاب البكالوريا: دروس، ملخصات، تمارين وحساب المعدل.",
    dir: "rtl", // التعديل: استخدام dir بدلاً من direction
    lang: "ar-DZ", // التعديل: استخدام lang بدلاً من language
    background_color: "#f8fafc", // التعديل: استخدام background_color بدلاً من backgroundColor
    theme_color: "#2447c7", // التعديل: استخدام theme_color بدلاً من themeColor
    display: "standalone",
    orientation: "natural",
    scope: "/",
    start_url: "/?utm_source=homescreen",
    
    // ربط تطبيق جوجل بلاي
    prefer_related_applications: true,
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.bac.feljib.dz.education",
        id: "com.bac.feljib.dz.education",
      },
    ],

    shortcuts: [
      {
        name: "الدروس",
        short_name: "دروس",
        description: "دروس وملخصات البكالوريا",
        url: "/p/lessons-and-summaries-bac?utm_source=homescreen",
      },
      {
        name: "التمارين",
        short_name: "تمارين",
        description: "تمارين محلولة للبكالوريا",
        url: "/p/exercises-with-solution-bac?utm_source=homescreen",
      },
      {
        name: "العد التنازلي للبكالوريا",
        short_name: "العد التنازلي",
        description: "العد التنازلي للبكالوريا",
        url: "/p/bac-exam-countdown?utm_source=homescreen",
      },
    ],
  },

  pwa: {
    logs: true,
  },

  // إعدادات OneSignal (تأكد من تفعيلها بـ true إذا كنت تستخدم Cloudflare Workers)
  oneSignal: {
    enabled: false, 
    appId: "d9dd4395-8656-4f28-a0ef-e38f554b1c42",
    allowLocalhostAsSecureOrigin: true,
  },

  origin: "https://www.bac-feljib.com",
});
