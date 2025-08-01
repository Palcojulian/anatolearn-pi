import { Link } from "react-router";
import "./Sitemap.css";

interface SitemapItem {
  title: string;
  path: string;
  children?: SitemapItem[];
}

const Sitemap = () => {
  const sitemapData: SitemapItem[] = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Enfermedades",
      path: "/enfermedades-corazon",
    },
    {
      title: "Quiz Interactivo",
      path: "/ranking-quiz",
    },
    {
      title: "Sobre Nosotros",
      path: "/about-us",
    },
  ];

  const renderSitemapItem = (item: SitemapItem) => {
    return (
      <div key={item.path} className="mb-3">
        <Link
          to={item.path}
          className="sitemap-link text-primary hover:text-[#2a5a8a] hover:underline transition-colors duration-200 text-lg font-medium"
        >
          {item.title}
        </Link>
        {item.title === "Inicio" && (
          <div className="mt-2 ml-4">
            <Link
              to="/enfermedades-corazon"
              className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block"
            >
              • Explora las enfermedades
            </Link>
          </div>
        )}
        {item.title === "Enfermedades" && (
          <div className="mt-2 ml-4 space-y-2">
            <div>
              <Link
                to="/enfermedades-corazon/arritmia"
                className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block font-medium"
              >
                • Arritmia
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/enfermedades-corazon/arritmia/que-es"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - ¿Qué es?
                </Link>
                <Link
                  to="/enfermedades-corazon/arritmia/sintomas"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Síntomas
                </Link>
                <Link
                  to="/enfermedades-corazon/arritmia/tratamiento"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Tratamiento
                </Link>
                <Link
                  to="/enfermedades-corazon/arritmia/prevencion"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Prevención
                </Link>
              </div>
            </div>

            <div>
              <Link
                to="/enfermedades-corazon/takotsubo"
                className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block font-medium"
              >
                • Takotsubo
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/enfermedades-corazon/takotsubo/que-es"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - ¿Qué es?
                </Link>
                <Link
                  to="/enfermedades-corazon/takotsubo/sintomas"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Síntomas
                </Link>
                <Link
                  to="/enfermedades-corazon/takotsubo/tratamiento"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Tratamiento
                </Link>
                <Link
                  to="/enfermedades-corazon/takotsubo/prevencion"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Prevención
                </Link>
              </div>
            </div>

            <div>
              <Link
                to="/enfermedades-corazon/stenosis"
                className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block font-medium"
              >
                • Estenosis
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/enfermedades-corazon/stenosis/que-es"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - ¿Qué es?
                </Link>
                <Link
                  to="/enfermedades-corazon/stenosis/sintomas"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Síntomas
                </Link>
                <Link
                  to="/enfermedades-corazon/stenosis/tratamiento"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Tratamiento
                </Link>
                <Link
                  to="/enfermedades-corazon/stenosis/prevencion"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Prevención
                </Link>
              </div>
            </div>

            <div>
              <Link
                to="/enfermedades-corazon/coronary-artery"
                className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block font-medium"
              >
                • Arteria Coronaria
              </Link>
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/enfermedades-corazon/coronary-artery/que-es"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - ¿Qué es?
                </Link>
                <Link
                  to="/enfermedades-corazon/coronary-artery/sintomas"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Síntomas
                </Link>
                <Link
                  to="/enfermedades-corazon/coronary-artery/tratamiento"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Tratamiento
                </Link>
                <Link
                  to="/enfermedades-corazon/coronary-artery/prevencion"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Prevención
                </Link>
                <Link
                  to="/enfermedades-corazon/coronary-artery/video"
                  className="sitemap-link text-gray-500 hover:text-primary hover:underline transition-colors duration-200 text-xs block"
                >
                  - Video 3D
                </Link>
              </div>
            </div>
          </div>
        )}
        {item.title === "Quiz Interactivo" && (
          <div className="mt-2 ml-4">
            <Link
              to="/iniciar-sesion"
              className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block"
            >
              • Iniciar sesión para hacer el quiz
            </Link>
          </div>
        )}
        {item.title === "Sobre Nosotros" && (
          <div className="mt-2 ml-4 space-y-1">
            <Link
              to="/about-us"
              className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block"
            >
              • Quiénes Somos
            </Link>
            <Link
              to="/about-us"
              className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block"
            >
              • Misión
            </Link>
            <Link
              to="/about-us"
              className="sitemap-link text-gray-600 hover:text-primary hover:underline transition-colors duration-200 text-sm block"
            >
              • Visión
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="sitemap-container w-full max-w-4xl mx-auto px-6 py-4">
      <div className="sitemap-card bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Mapa del Sitio
          </h1>
          <p className="text-gray-600">
            Explora todas las secciones y páginas disponibles en Anatolearn
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
            {sitemapData.map((item) => renderSitemapItem(item))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-gray-200">
          <div className="bg-primary rounded-lg p-4 text-white">
            <h3 className="text-lg font-semibold text-white mb-3">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-white mb-4 opacity-90">
              Explora las principales secciones de Anatolearn:
            </p>
            <ul className="list-disc list-inside text-white space-y-2 opacity-90">
              <li>
                <strong>Inicio:</strong> Página principal con información
                general
              </li>
              <li>
                <strong>Enfermedades:</strong> Información detallada sobre
                enfermedades del corazón
              </li>
              <li>
                <strong>Quiz:</strong> Pon a prueba tus conocimientos
              </li>
              <li>
                <strong>Nosotros:</strong> Conoce más sobre Anatolearn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
