import { useNavigate, useParams } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Target,
  Award,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface RelatoriosProps {
  user: User;
}

export default function Relatorios({ user }: RelatoriosProps) {
  const navigate = useNavigate();
  const { salaId } = useParams();

  const taxaAcertos = [
    { questao: "Q1", taxa: 85 },
    { questao: "Q2", taxa: 72 },
    { questao: "Q3", taxa: 90 },
    { questao: "Q4", taxa: 65 },
    { questao: "Q5", taxa: 78 },
    { questao: "Q6", taxa: 88 },
    { questao: "Q7", taxa: 70 },
    { questao: "Q8", taxa: 82 },
  ];

  const desempenhoTempo = [
    { semana: "Sem 1", media: 65 },
    { semana: "Sem 2", media: 70 },
    { semana: "Sem 3", media: 75 },
    { semana: "Sem 4", media: 82 },
    { semana: "Sem 5", media: 85 },
    { semana: "Sem 6", media: 88 },
  ];

  const distribuicaoNotas = [
    { faixa: "0-50%", alunos: 2 },
    { faixa: "50-70%", alunos: 8 },
    { faixa: "70-85%", alunos: 12 },
    { faixa: "85-100%", alunos: 10 },
  ];

  const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#22c55e"];

  const topAlunos = [
    { nome: "Maria Santos", media: 92, atividades: 15 },
    { nome: "João Silva", media: 88, atividades: 15 },
    { nome: "Ana Costa", media: 85, atividades: 14 },
    { nome: "Pedro Lima", media: 82, atividades: 15 },
    { nome: "Lucas Oliveira", media: 78, atividades: 13 },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/professor/sala/${salaId}`)}
          className="mb-6 text-gray-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="text-white mb-2">
            Relatórios e Análises
          </h1>
          <p className="text-gray-400">
            Acompanhe o desempenho da turma e identifique áreas
            de melhoria
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Média Geral
                  </p>
                  <p className="text-white text-3xl">82%</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Participação
                  </p>
                  <p className="text-white text-3xl">94%</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Crescimento
                  </p>
                  <p className="text-white text-3xl">+15%</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Top Performers
                  </p>
                  <p className="text-white text-3xl">10</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Taxa de Acertos por Questão */}
          <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">
                Taxa de Acertos por Questão
              </CardTitle>
              <CardDescription>
                Identifique questões com maior dificuldade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={taxaAcertos}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#374151"
                  />
                  <XAxis dataKey="questao" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2332",
                      border: "1px solid #374151",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Bar dataKey="taxa" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Evolução do Desempenho */}
          <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">
                Evolução do Desempenho
              </CardTitle>
              <CardDescription>
                Média da turma ao longo do tempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={desempenhoTempo}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#374151"
                  />
                  <XAxis dataKey="semana" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2332",
                      border: "1px solid #374151",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="media"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Distribuição de Notas */}
          <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">
                Distribuição de Notas
              </CardTitle>
              <CardDescription>
                Quantidade de alunos por faixa de nota
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distribuicaoNotas}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ faixa, percent }) =>
                      `${faixa}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="alunos"
                  >
                    {distribuicaoNotas.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2332",
                      border: "1px solid #374151",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Alunos */}
          <Card className="bg-[#1a2332] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">
                Desempenho Individual
              </CardTitle>
              <CardDescription>
                Top 5 alunos da turma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topAlunos.map((aluno, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          index === 0
                            ? "bg-yellow-500"
                            : index === 1
                              ? "bg-gray-400"
                              : index === 2
                                ? "bg-orange-600"
                                : "bg-gray-700"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white">
                          {aluno.nome}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {aluno.atividades} atividades
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400">
                        {aluno.media}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engajamento */}
        <Card className="bg-[#1a2332] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              Análise de Engajamento
            </CardTitle>
            <CardDescription>
              Atividades realizadas pelos alunos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Atividades Concluídas
                </p>
                <p className="text-white text-3xl mb-1">248</p>
                <p className="text-green-400 text-sm">
                  +12% vs semana passada
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Tempo Médio por Quiz
                </p>
                <p className="text-white text-3xl mb-1">
                  8 min
                </p>
                <p className="text-blue-400 text-sm">
                  Ideal: 10-15 min
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Taxa de Abandono
                </p>
                <p className="text-white text-3xl mb-1">6%</p>
                <p className="text-yellow-400 text-sm">
                  -3% vs mês passado
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}