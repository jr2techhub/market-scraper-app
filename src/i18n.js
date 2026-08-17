import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Lista de países hispanohablantes
const spanishSpeakingCountries = [
  'ES', // España
  'MX', // México
  'AR', // Argentina
  'CO', // Colombia
  'PE', // Perú
  'VE', // Venezuela
  'CL', // Chile
  'EC', // Ecuador
  'GT', // Guatemala
  'CU', // Cuba
  'BO', // Bolivia
  'DO', // República Dominicana
  'HN', // Honduras
  'PY', // Paraguay
  'SV', // El Salvador
  'NI', // Nicaragua
  'CR', // Costa Rica
  'PA', // Panamá
  'UY', // Uruguay
  'PR', // Puerto Rico
];

// Función personalizada para detectar idioma basado en el país
const customLanguageDetector = {
  name: 'customLanguageDetector',
  detect(callback) {
    // Obtener el idioma del navegador
    const navigatorLanguage = navigator.language || navigator.userLanguage;
    
    if (navigatorLanguage) {
      const parts = navigatorLanguage.split('-');
      const language = parts[0].toLowerCase();
      const country = parts[1] ? parts[1].toUpperCase() : null;
      
      // Si el país está en la lista de países hispanohablantes, usar español
      if (country && spanishSpeakingCountries.includes(country)) {
        return 'es';
      }
      
      // Por defecto, usar el idioma detectado
      return language;
    }
    
    // Idioma por defecto
    return 'en';
  },
  cacheUserLanguage: (lng) => {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Landing Page
          "landing": {
            "title": "ScrapeHub",
            "subtitle": "Web Scraping Platform Dashboard",
            "description": "Powerful web scraping solution for modern businesses. Extract, analyze, and transform data with ease.",
            "getStarted": "Get Started",
            "login": "Login",
            "features": "Features",
            "feature1Title": "Real-time Data Extraction",
            "feature1Desc": "Extract data from multiple sources in real-time with our advanced scraping engine.",
            "feature2Title": "Advanced Analytics",
            "feature2Desc": "Gain insights from your data with powerful analytics and visualization tools.",
            "feature3Title": "Automated Workflows",
            "feature3Desc": "Set up automated scraping workflows and schedule regular data updates.",
            "footer": "© 2024 ScrapeHub. All rights reserved."
          },
          // Auth
          "auth": {
            "loginTitle": "Welcome Back",
            "registerTitle": "Create Account",
            "email": "Email",
            "password": "Password",
            "confirmPassword": "Confirm Password",
            "loginButton": "Login",
            "registerButton": "Register",
            "forgotPassword": "Forgot Password?",
            "noAccount": "Don't have an account?",
            "haveAccount": "Already have an account?",
            "registerHere": "Register here",
            "loginHere": "Login here"
          },
          // Dashboard
          "dashboard": {
            "welcome": "Welcome",
            "home": "Home",
            "targets": "Targets",
            "analytics": "Analytics",
            "settings": "Settings",
            "logout": "Logout",
            "scraping": "Scraping"
          },
          // Home
          "home": {
            "title": "Dashboard Overview",
            "totalTargets": "Total Targets",
            "activeScrapers": "Active Scrapers",
            "dataPoints": "Data Points",
            "successRate": "Success Rate",
            "recentActivity": "Recent Activity",
            "quickActions": "Quick Actions",
            "addTarget": "Add Target",
            "runScraper": "Run Scraper",
            "viewReports": "View Reports"
          },
          // Targets
          "targets": {
            "title": "Scraping Targets",
            "addTarget": "Add Target",
            "name": "Name",
            "url": "URL",
            "status": "Status",
            "lastRun": "Last Run",
            "actions": "Actions",
            "edit": "Edit",
            "delete": "Delete",
            "active": "Active",
            "inactive": "Inactive",
            "searchPlaceholder": "Search targets..."
          },
          // Analytics
          "analytics": {
            "title": "Analytics & Reports",
            "dataOverview": "Data Overview",
            "extractionTrends": "Extraction Trends",
            "performanceMetrics": "Performance Metrics",
            "exportData": "Export Data",
            "dateRange": "Date Range",
            "today": "Today",
            "week": "This Week",
            "month": "This Month",
            "year": "This Year"
          },
          // Settings
          "settings": {
            "title": "Settings",
            "profile": "Profile Settings",
            "notifications": "Notifications",
            "apiKeys": "API Keys",
            "language": "Language",
            "theme": "Theme",
            "saveChanges": "Save Changes",
            "currentPassword": "Current Password",
            "newPassword": "New Password",
            "changePassword": "Change Password"
          },
          // Common
          "common": {
            "loading": "Loading...",
            "error": "Error",
            "success": "Success",
            "cancel": "Cancel",
            "save": "Save",
            "delete": "Delete",
            "edit": "Edit",
            "add": "Add",
            "search": "Search",
            "filter": "Filter",
            "noData": "No data available"
          }
        }
      },
      es: {
        translation: {
          // Landing Page
          "landing": {
            "title": "ScrapeHub",
            "subtitle": "Panel de Plataforma de Web Scraping",
            "description": "Solución poderosa de web scraping para empresas modernas. Extrae, analiza y transforma datos con facilidad.",
            "getStarted": "Comenzar",
            "login": "Iniciar Sesión",
            "features": "Características",
            "feature1Title": "Extracción de Datos en Tiempo Real",
            "feature1Desc": "Extrae datos de múltiples fuentes en tiempo real con nuestro motor de scraping avanzado.",
            "feature2Title": "Analítica Avanzada",
            "feature2Desc": "Obtén información de tus datos con poderosas herramientas de análisis y visualización.",
            "feature3Title": "Flujos de Trabajo Automatizados",
            "feature3Desc": "Configura flujos de trabajo de scraping automatizados y programa actualizaciones regulares de datos.",
            "footer": "© 2024 ScrapeHub. Todos los derechos reservados."
          },
          // Auth
          "auth": {
            "loginTitle": "Bienvenido de Nuevo",
            "registerTitle": "Crear Cuenta",
            "email": "Correo Electrónico",
            "password": "Contraseña",
            "confirmPassword": "Confirmar Contraseña",
            "loginButton": "Iniciar Sesión",
            "registerButton": "Registrarse",
            "forgotPassword": "¿Olvidaste tu contraseña?",
            "noAccount": "¿No tienes una cuenta?",
            "haveAccount": "¿Ya tienes una cuenta?",
            "registerHere": "Regístrate aquí",
            "loginHere": "Inicia sesión aquí"
          },
          // Dashboard
          "dashboard": {
            "welcome": "Bienvenido",
            "home": "Inicio",
            "targets": "Objetivos",
            "analytics": "Analíticas",
            "settings": "Configuración",
            "logout": "Cerrar Sesión",
            "scraping": "Scraping"
          },
          // Home
          "home": {
            "title": "Resumen del Panel",
            "totalTargets": "Total de Objetivos",
            "activeScrapers": "Scrapers Activos",
            "dataPoints": "Puntos de Datos",
            "successRate": "Tasa de Éxito",
            "recentActivity": "Actividad Reciente",
            "quickActions": "Acciones Rápidas",
            "addTarget": "Agregar Objetivo",
            "runScraper": "Ejecutar Scraper",
            "viewReports": "Ver Reportes"
          },
          // Targets
          "targets": {
            "title": "Objetivos de Scraping",
            "addTarget": "Agregar Objetivo",
            "name": "Nombre",
            "url": "URL",
            "status": "Estado",
            "lastRun": "Última Ejecución",
            "actions": "Acciones",
            "edit": "Editar",
            "delete": "Eliminar",
            "active": "Activo",
            "inactive": "Inactivo",
            "searchPlaceholder": "Buscar objetivos..."
          },
          // Analytics
          "analytics": {
            "title": "Analíticas y Reportes",
            "dataOverview": "Resumen de Datos",
            "extractionTrends": "Tendencias de Extracción",
            "performanceMetrics": "Métricas de Rendimiento",
            "exportData": "Exportar Datos",
            "dateRange": "Rango de Fechas",
            "today": "Hoy",
            "week": "Esta Semana",
            "month": "Este Mes",
            "year": "Este Año"
          },
          // Settings
          "settings": {
            "title": "Configuración",
            "profile": "Configuración de Perfil",
            "notifications": "Notificaciones",
            "apiKeys": "Claves API",
            "language": "Idioma",
            "theme": "Tema",
            "saveChanges": "Guardar Cambios",
            "currentPassword": "Contraseña Actual",
            "newPassword": "Nueva Contraseña",
            "changePassword": "Cambiar Contraseña"
          },
          // Common
          "common": {
            "loading": "Cargando...",
            "error": "Error",
            "success": "Éxito",
            "cancel": "Cancelar",
            "save": "Guardar",
            "delete": "Eliminar",
            "edit": "Editar",
            "add": "Agregar",
            "search": "Buscar",
            "filter": "Filtrar",
            "noData": "No hay datos disponibles"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['customLanguageDetector', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
