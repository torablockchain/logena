import { useState } from "react";

const AssistantModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [lectura, setLectura] = useState("");

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => {
    setShowModal(false);
    setStep(1);
    setName("");
    setBirthdate("");
    setLectura("");
    setLoading(false);
  };

  const calcularCaminoVida = (fecha: string): number => {
    const soloNumeros = fecha.replace(/-/g, "");
    let suma = soloNumeros.split("").reduce((acc, val) => acc + parseInt(val), 0);
    while (suma > 9 && suma !== 11 && suma !== 22 && suma !== 33) {
      suma = suma.toString().split("").reduce((acc, val) => acc + parseInt(val), 0);
    }
    return suma;
  };

  const generarLectura = async (nombre: string, numeroCamino: number) => {
    try {
      const response = await fetch('/api/generar-lectura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, numeroCamino }),
      });

      const data = await response.json();
      if (data.lectura) setLectura(data.lectura);
      else setLectura("No se pudo generar la lectura.");
    } catch (error) {
      console.error("Error:", error);
      setLectura("Error al conectar con el asistente.");
    }
  };

  const iniciarPago = async (tipo: 'lectura' | 'suscripcion') => {
    try {
      const response = await fetch('/api/pago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo }),
      });

      const data = await response.json();
      if (data.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
    }
  };

  const handleCalcular = () => {
    setLoading(true);
    const camino = calcularCaminoVida(birthdate);
    setTimeout(() => {
      generarLectura(name.trim(), camino);
      setLoading(false);
      setStep(3);
    }, 1800);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={abrirModal}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Iniciar tu lectura
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={cerrarModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-zinc-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl max-w-lg w-full space-y-6 relative"
          >
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              ✕
            </button>

            {step === 1 && (
              <>
                <h2 className="text-xl font-bold">¡Hola! Soy Logena</h2>
                <p>Para comenzar tu lectura numerológica necesito tu nombre completo.</p>
                <input
                  type="text"
                  placeholder="Ej: Carla María Torazzi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  onClick={() => name.trim() && setStep(2)}
                  className={`w-full mt-4 py-3 rounded-xl font-semibold ${
                    name.trim()
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:opacity-90"
                      : "bg-gray-300 text-white cursor-not-allowed"
                  }`}
                  disabled={!name.trim()}
                >
                  Continuar
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold">¡Gracias, {name.split(" ")[0]}!</h2>
                <p>Ahora necesito tu fecha de nacimiento para continuar.</p>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  onClick={handleCalcular}
                  className={`w-full mt-4 py-3 rounded-xl font-semibold ${
                    birthdate
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:opacity-90"
                      : "bg-gray-300 text-white cursor-not-allowed"
                  }`}
                  disabled={!birthdate}
                >
                  Generar lectura
                </button>
              </>
            )}

            {step === 3 && (
              <>
                {loading ? (
                  <div className="text-center py-8">
                    <p className="text-lg font-medium mb-4">🔮 Calculando tu número...</p>
                    <div className="w-12 h-12 mx-auto border-4 border-violet-500 border-dashed rounded-full animate-spin" />
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold">Tu lectura está lista</h2>
                    <pre className="whitespace-pre-wrap text-sm bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl border dark:border-zinc-700">
                      {lectura}
                    </pre>
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      <button
                        onClick={() => iniciarPago('lectura')}
                        className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:opacity-90"
                      >
                        Descargar lectura completa
                      </button>
                      <button
                        onClick={() => iniciarPago('suscripcion')}
                        className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:opacity-90"
                      >
                        Ver planes de suscripción
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantModal;
