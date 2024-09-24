export function CardManagmentClient() {
    return (
        <div className="p-4 my-[2rem] shadow-lg rounded-sm">
            <div className="grid grid-cols-1 text-start mx-auto justify-center gap-4">
                <h1>Gestión de Vehiculos</h1>
                <div className="flex flex-col justify-center">
                    <label className="mr-auto">Vehiculo</label>
                    <input type="text" className="block w-full pl-1 pr-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm" placeholder="Jose C Paz" />
                </div>
                <div className="">
                    <label className="text-bage text-sm">Cliente</label>
                    <input type="text" className="block w-full pl-1 pr-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm" placeholder="Jose C Paz" />
                </div>
                <div className="">
                    <label className="text-bage text-sm">Vehiculo</label>



                </div>
                <div className="">
                    <label className=" text-bage text-sm font-medium mb-1 ">Monto</label>
                    <div className="relative flex items-center">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                        <input
                            /* {...register('fare')} */
                            required
                            autoComplete="off"
                            className="block w-full pl-8 pr-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bageDark sm:text-sm"
                            min={1}
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}