import { useEffect, useState } from "react";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export function NavBarMobile() {
    const [tab, setTab] = useState<boolean>(false);
    const [maxHeight, setMaxHeight] = useState<string>('400px'); // Ajusta el valor predeterminado según lo que necesites
    const navigate = useNavigate();
    const options = [
        {
            name: 'inicio',
            route: '/home'
        },
        {
            name: 'Clientes',
            route: '/clients'
        },
        {
            name: 'Conductores',
            route: '/drivers'
        },
        {
            name: 'Vehiculos',
            route: '/vehicles'
        },
        {
            name: 'Viajes',
            route: '/trips'
        },
        {
            name: 'Pagos',
            route: '/payments'
        },
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");
        const handleOrientationChange = (mediaQueryList: MediaQueryListEvent | MediaQueryList) => {
            setMaxHeight(mediaQueryList.matches ? '400px' : '300px');
        };
        handleOrientationChange(mediaQuery);
        const listener = (event: MediaQueryListEvent) => {
            handleOrientationChange(event);
        };
        mediaQuery.addEventListener('change', listener);
        return () => {
            mediaQuery.removeEventListener('change', listener);
        };
    }, []);

    return (
        <div className="relative bg-main_orange  flex flex-col ">
            <header className=" shadow-md p-2 text-black relative z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl">Remiseria</h1>
                    <div className="flex justify-between items-center gap-4">
                        <button
                            onClick={() => setTab(!tab)}
                            className="bg-main_blue_hover shadow-sm text-main_orange  p-2 rounded-md"
                        >
                            {tab ? (
                                <CiSquareChevUp size={24} />
                            ) : (

                                <CiSquareChevDown size={24} />
                            )}
                        </button>
                    </div>
                </div>
                <div
                    style={{ maxHeight: maxHeight, overflowY: 'auto', overflowX: "auto" }}
                    className={`absolute  left-0 top-full w-full transition-all duration-500 ease-in-out ${tab ? 'opacity-100' : 'opacity-100'} ${tab ? 'h-96' : 'h-0'} overflow-hidden`}
                >
                    <div className="bg-gradient-to-b from-main_orange to-main_orange_hover  shadow-lg   p-4">
                        {options.map((option, index) => (
                            <div key={index} className="py-2">
                                <h1
                                    onClick={() => { setTab(false), navigate(`${option.route}`) }}
                                    className="cursor-pointer hover:text-main_cyan text-black"
                                >
                                    {option.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}