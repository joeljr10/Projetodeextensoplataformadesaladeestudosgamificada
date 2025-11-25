import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowLeft,
  Edit2,
  Trash2,
  Check,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface QuestoesGeradasProps {
  user: User;
}

interface Questao {
  id: string;
  pergunta: string;
  alternativas: string[];
  respostaCorreta: number;
  dificuldade: "Fácil" | "Médio" | "Difícil";
}

export default function QuestoesGeradas({
  user,
}: QuestoesGeradasProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questoes, setQuestoes] = useState<Questao[]>([
    {
      id: "1",
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      alternativas: [
        "Pedro Álvares Cabral",
        "Dom Pedro I",
        "Deodoro da Fonseca",
        "Getúlio Vargas",
      ],
      respostaCorreta: 2,
      dificuldade: "Fácil",
    },
    {
      id: "2",
      pergunta:
        "Em que ano o Brasil se tornou independente de Portugal?",
      alternativas: ["1500", "1822", "1889", "1930"],
      respostaCorreta: 1,
      dificuldade: "Médio",
    },
    {
      id: "3",
      pergunta:
        "Qual foi o principal motivo da Proclamação da República no Brasil?",
      alternativas: [
        "Abolição da escravatura",
        "Insatisfação militar e crise da monarquia",
        "Guerra do Paraguai",
        "Pressão popular",
      ],
      respostaCorreta: 1,
      dificuldade: "Difícil",
    },
  ]);

  const [filtro, setFiltro] = useState<string>("Todos");

  const questoesFiltradas =
    filtro === "Todos"
      ? questoes
      : questoes.filter((q) => q.dificuldade === filtro);

  const removerQuestao = (id: string) => {
    setQuestoes(questoes.filter((q) => q.id !== id));
    toast.success("Questão removida");
  };

  const publicarAtividade = () => {
    if (questoes.length === 0) {
      toast.error("Adicione pelo menos uma questão");
      return;
    }
    toast.success("Atividade publicada para os alunos!");
    navigate(`/professor/sala/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate(`/professor/sala/${id}`)}
          className="mb-6 text-gray-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2 text-gray" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="text-white mb-2">
            Revisar Perguntas para: História do Brasil
          </h1>
          <p className="text-gray-400">
            Ajuste, edite ou exclua as perguntas geradas pela IA
            antes de publicar.
          </p>
        </div>

        {/* Header with Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button
              variant={
                filtro === "Todos" ? "default" : "outline"
              }
              onClick={() => setFiltro("Todos")}
              className={
                filtro === "Todos"
                  ? "bg-blue-600"
                  : "border-gray-700 text-gray-900 hover:text-gray-800"
              }
            >
              Todos
            </Button>
            <Button
              variant={
                filtro === "Fácil" ? "default" : "outline"
              }
              onClick={() => setFiltro("Fácil")}
              className={
                filtro === "Fácil"
                  ? "bg-green-600"
                  : "border-gray-700 text-gray-900 hover:text-gray-800"
              }
            >
              Fácil
            </Button>
            <Button
              variant={
                filtro === "Médio" ? "default" : "outline"
              }
              onClick={() => setFiltro("Médio")}
              className={
                filtro === "Médio"
                  ? "bg-yellow-600"
                  : "border-gray-700 text-gray-900 hover:text-gray-800"
              }
            >
              Médio
            </Button>
            <Button
              variant={
                filtro === "Difícil" ? "default" : "outline"
              }
              onClick={() => setFiltro("Difícil")}
              className={
                filtro === "Difícil"
                  ? "bg-red-600"
                  : "border-gray-700 text-gray-900 hover:text-gray-800"
              }
            >
              Difícil
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-900 hover:bg-[#0f1419] hover:text-white"
            >
              + Adicionar Manualmente
            </Button>
          </div>

          <Button
            onClick={publicarAtividade}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            Publicar Atividade
          </Button>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questoesFiltradas.map((questao, index) => (
            <Card
              key={questao.id}
              className="bg-[#1a2332] border-gray-800"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        className={
                          questao.dificuldade === "Fácil"
                            ? "bg-green-600"
                            : questao.dificuldade === "Médio"
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        }
                      >
                        {questao.dificuldade}
                      </Badge>
                      <span className="text-gray-400 text-sm">
                        Questão {index + 1}
                      </span>
                    </div>
                    <h3 className="text-white text-lg mb-4">
                      {questao.pergunta}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Selecione a resposta correta abaixo.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white p-2">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removerQuestao(questao.id)}
                      className="text-gray-400 hover:text-red-400 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {questao.alternativas.map((alt, altIndex) => (
                    <div
                      key={altIndex}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        altIndex === questao.respostaCorreta
                          ? "bg-green-500/10 border-green-500"
                          : "bg-[#0f1419] border-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            altIndex === questao.respostaCorreta
                              ? "bg-green-500"
                              : "bg-gray-700"
                          }`}
                        >
                          {altIndex ===
                          questao.respostaCorreta ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-white text-sm">
                              {String.fromCharCode(
                                65 + altIndex,
                              )}
                            </span>
                          )}
                        </div>
                        <span
                          className={
                            altIndex === questao.respostaCorreta
                              ? "text-green-400"
                              : "text-white"
                          }
                        >
                          {alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {questoesFiltradas.length === 0 && (
          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-12">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">
                  Nenhuma questão encontrada com esse filtro
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}