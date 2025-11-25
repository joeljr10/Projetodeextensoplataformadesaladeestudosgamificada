import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Check, X, Trophy, Star } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface QuizProps {
  user: User;
}

interface Questao {
  id: string;
  pergunta: string;
  alternativas: string[];
  respostaCorreta: number;
  explicacao: string;
}

export default function Quiz({ user }: QuizProps) {
  const navigate = useNavigate();
  const { atividadeId } = useParams();

  const questoes: Questao[] = [
    {
      id: "1",
      pergunta: "Qual é a derivada de x²?",
      alternativas: ["x", "2x", "x²", "2"],
      respostaCorreta: 1,
      explicacao:
        "A derivada de x² é 2x, aplicando a regra da potência: d/dx(xⁿ) = n·xⁿ⁻¹",
    },
    {
      id: "2",
      pergunta: "O que é um limite em cálculo?",
      alternativas: [
        "O valor máximo de uma função",
        "O valor que uma função se aproxima quando x tende a um valor",
        "O valor inicial de uma função",
        "A área sob uma curva",
      ],
      respostaCorreta: 1,
      explicacao:
        "Um limite descreve o comportamento de uma função quando a variável se aproxima de um determinado valor.",
    },
    {
      id: "3",
      pergunta: "Qual é a integral de 2x?",
      alternativas: ["x²", "x² + C", "2", "x"],
      respostaCorreta: 1,
      explicacao:
        "A integral de 2x é x² + C, onde C é a constante de integração.",
    },
  ];

  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] =
    useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const questao = questoes[questaoAtual];
  const progresso =
    ((questaoAtual + 1) / questoes.length) * 100;

  const verificarResposta = () => {
    if (respostaSelecionada === null) {
      toast.error("Selecione uma resposta");
      return;
    }

    setRespondida(true);
    if (respostaSelecionada === questao.respostaCorreta) {
      setRespostasCorretas(respostasCorretas + 1);
    }
  };

  const proximaQuestao = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setRespostaSelecionada(null);
      setRespondida(false);
    } else {
      setFinalizado(true);
    }
  };

  const nota = Math.round(
    (respostasCorretas / questoes.length) * 100,
  );
  const pontosGanhos = Math.round(nota * 1.2);

  if (finalizado) {
    return (
      <div className="min-h-screen bg-[#0f1419] flex items-center justify-center p-4">
        <Card className="bg-[#1a2332] border-gray-800 max-w-2xl w-full">
          <CardContent className="p-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>

              <h1 className="text-white mb-2">Parabéns!</h1>
              <p className="text-gray-400 mb-8">
                Você completou a atividade
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    Pontuação
                  </p>
                  <p className="text-white text-3xl">{nota}%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    Acertos
                  </p>
                  <p className="text-green-400 text-3xl">
                    {respostasCorretas}/{questoes.length}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    XP Ganho
                  </p>
                  <p className="text-orange-400 text-3xl">
                    +{pontosGanhos}
                  </p>
                </div>
              </div>

              {nota >= 70 && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                    <Star className="w-5 h-5" />
                    <span>Conquista Desbloqueada!</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Você ganhou a medalha "Estudante Dedicado"
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={() => navigate("/aluno/dashboard")}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Voltar ao Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-900 hover:bg-[#0f1419] hover:text-white"
                >
                  Ver Respostas
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1419] p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white">Limites e Derivadas</h2>
            <Badge className="bg-blue-600">
              Questão {questaoAtual + 1} de {questoes.length}
            </Badge>
          </div>
          <Progress
            value={progresso}
            className="h-3 bg-gray-700"
          />
        </div>

        {/* Question Card */}
        <Card className="bg-[#1a2332] border-gray-800 mb-6">
          <CardContent className="p-8">
            <h3 className="text-white text-xl mb-8">
              {questao.pergunta}
            </h3>

            <div className="space-y-4">
              {questao.alternativas.map(
                (alternativa, index) => {
                  const isCorreta =
                    index === questao.respostaCorreta;
                  const isSelecionada =
                    index === respostaSelecionada;
                  const mostrarResultado = respondida;

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        !respondida &&
                        setRespostaSelecionada(index)
                      }
                      disabled={respondida}
                      className={`w-full p-5 rounded-lg border-2 transition-all text-left ${
                        mostrarResultado && isCorreta
                          ? "bg-green-500/10 border-green-500"
                          : mostrarResultado &&
                              isSelecionada &&
                              !isCorreta
                            ? "bg-red-500/10 border-red-500"
                            : isSelecionada
                              ? "bg-blue-500/10 border-blue-500"
                              : "bg-[#0f1419] border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            mostrarResultado && isCorreta
                              ? "bg-green-500"
                              : mostrarResultado &&
                                  isSelecionada &&
                                  !isCorreta
                                ? "bg-red-500"
                                : isSelecionada
                                  ? "bg-blue-500"
                                  : "bg-gray-700"
                          }`}
                        >
                          {mostrarResultado && isCorreta ? (
                            <Check className="w-5 h-5 text-white" />
                          ) : mostrarResultado &&
                            isSelecionada &&
                            !isCorreta ? (
                            <X className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-white">
                              {String.fromCharCode(65 + index)}
                            </span>
                          )}
                        </div>
                        <span
                          className={
                            mostrarResultado && isCorreta
                              ? "text-green-400"
                              : mostrarResultado &&
                                  isSelecionada &&
                                  !isCorreta
                                ? "text-red-400"
                                : "text-white"
                          }
                        >
                          {alternativa}
                        </span>
                      </div>
                    </button>
                  );
                },
              )}
            </div>

            {/* Explicação */}
            {respondida && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  respostaSelecionada ===
                  questao.respostaCorreta
                    ? "bg-green-500/10 border border-green-500/30"
                    : "bg-red-500/10 border border-red-500/30"
                }`}
              >
                <p
                  className={`mb-2 ${
                    respostaSelecionada ===
                    questao.respostaCorreta
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {respostaSelecionada ===
                  questao.respostaCorreta
                    ? "✓ Correto!"
                    : "✗ Incorreto"}
                </p>
                <p className="text-gray-300 text-sm">
                  {questao.explicacao}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/aluno/dashboard")}
            className="border-gray-700 text-gray-900 hover:bg-[#0f1419] hover:text-white"
          >
            Sair do Quiz
          </Button>

          {!respondida ? (
            <Button
              onClick={verificarResposta}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={respostaSelecionada === null}
            >
              Verificar Resposta
            </Button>
          ) : (
            <Button
              onClick={proximaQuestao}
              className="bg-green-600 hover:bg-green-700"
            >
              {questaoAtual < questoes.length - 1
                ? "Próxima Questão"
                : "Finalizar"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}