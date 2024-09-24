import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface form_data {
    username: string
    password: string

}

export function Login() {
    const navigate = useNavigate()
    const {
        register, handleSubmit,
    } = useForm<form_data>();

    function sendData(body: form_data) {
        console.log(body)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-textBlue">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-bold mb-6 text-center text-textBlue">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(sendData)}>

                    <div className="my-2">
                        <label htmlFor="user" className="block text-sm font-medium text-subText mb-2">
                            Usuario
                        </label>
                        <input

                            type="user"
                            id="user"
                            className="w-full px-3 py-2 border border-subText rounded-md focus:outline-none focus:ring-2 focus:ring-buttonBlue"
                            required
                            autoComplete="off"
                            {...register('username')}
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="password" className="block text-sm font-medium text-subText mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-subText rounded-md focus:outline-none focus:ring-2 focus:ring-buttonBlue"
                            required
                            autoComplete="off"
                            {...register('password')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-buttonBlue text-white py-2 px-4 rounded-md hover:bg-[#3A7BC8] transition duration-300"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                {/*      <div className="mt-4 text-center">
                    <a href="#" className="text-buttonGreen hover:underline">¿Olvidaste tu contraseña?</a>
                </div> */}
                <div className="mt-4 text-center">
                    <a  /* href="#"  */ className="text-buttonGreen hover:underline">¿No tienes cuenta?</a>
                </div>
                <div className="mt-4">
                    <button onClick={() => navigate('/register')}
                        className="w-full bg-buttonGreen text-white py-2 px-4 rounded-md hover:bg-[#4D8B5E] transition duration-300"
                    >
                        Crear Cuenta
                    </button>
                </div>
            </div>
        </div>
    )
}