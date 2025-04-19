import { Link, useLocation } from "react-router";

const pathNamesMap: Record<string, string> = {
    "": "Inicio",
    "enfermedades-corazon": "Enfermedades del Corazón",
    "arritmia": "Arritmia",
    "que-es": "¿Qué es?",
    "sintomas": "Síntomas",
    "tratamiento": "Tratamiento",
    "prevencion": "Prevención",
    "quiz": "Quiz",
    "about-us": "Sobre Nosotros",
};

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <nav aria-label="breadcrumb" className="text-gray-600 my-3 px-20 text-base">
            <ol className="flex flex-wrap items-center gap-1">
                <li>
                    <Link to="/" className="text-gray-600 hover:underline">
                        {pathNamesMap[""]}
                    </Link>
                </li>

                {paths.map((segment, index) => {
                    const fullPath = "/" + paths.slice(0, index + 1).join("/");
                    const isLast = index === paths.length - 1;

                    return (
                        <li key={fullPath} className="flex items-center gap-1">
                            <span>/</span>
                            {isLast ? (
                                <span className="text-[#3F72AF] font-bold">
                                    {pathNamesMap[segment] || segment}
                                </span>
                            ) : (
                                <Link to={fullPath} className="text-gray-600 hover:underline">
                                    {pathNamesMap[segment] || segment}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
