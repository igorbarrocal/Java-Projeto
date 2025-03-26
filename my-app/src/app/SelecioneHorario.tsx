import React from "react";
import { ArrowLeft } from "lucide-react";

export default function SelecioneHorario() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col items-center p-4">
      <div className="text-sm text-gray-400 self-start mb-2">Tela de pesquisa de consulta</div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4">
        {/* Cabeçalho com botão de voltar */}
        <div className="flex items-center gap-2 mb-4">
          <ArrowLeft size={20} className="text-gray-700" />
          <h1 className="text-lg font-semibold text-gray-800">Selecione o horário</h1>
        </div>

        {/* Cartão do profissional */}
        <Card className="flex items-center gap-4 p-4 mb-6">
          <img
            src="https://via.placeholder.com/60"
            alt="Dra."
            className="rounded-full w-16 h-16 object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">Dr. ....................</p>
            <p className="text-sm text-gray-500">Clínica Odontológica</p>
          </div>
        </Card>

        {/* Botões de datas */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 border border-gray-300 rounded-lg py-2 px-3 text-left">
            <p className="font-medium text-sm text-gray-700">Hoje, 23 / fev</p>
            <p className="text-xs text-gray-400">Sem horários disponíveis</p>
          </div>

          <div className="flex-1 bg-green-500 text-white rounded-lg py-2 px-3 text-left">
            <p className="font-medium text-sm">Amanhã, 24 / fev</p>
            <p className="text-xs">9 horários disponíveis</p>
          </div>
        </div>

        {/* Mensagem central */}
        <div className="text-center mb-6">
          <p className="font-medium text-gray-800">Hoje, 23 / fev</p>
          <p className="text-sm text-gray-500">Sem horários disponíveis</p>
        </div>

        {/* Botão de disponibilidade */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 mb-4">
          Próxima disponibilidade na quarta, 24 / fev
        </Button>

        {/* Separador */}
        <div className="text-center text-gray-500 text-sm mb-4">OU</div>

        {/* Botão de contato */}
        <button className="w-full border border-green-500 text-green-500 rounded-lg py-3 font-medium hover:bg-green-50">
          Entre em contato com a clínica
        </button>
      </div>
    </div>
  );
}