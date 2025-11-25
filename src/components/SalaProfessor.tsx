import { useState } from "react";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Upload,
  FileText,
  Sparkles,
  Users,
  Trophy,
  BarChart3,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface SalaProfessorProps {
  user: User;
}

export default function SalaProfessor({
  user,
}: SalaProfessorProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [codigoCopiado, setCodigoCopiado] = useState(false);

  const sala = {
    id: id,
    nome: "História do Brasil",
    disciplina: "História",
    codigo: "HB2024",
    alunos: 32,
    materiais: 5,
    atividades: 8,
  };

  const materiais = [
    {
      id: "1",
      nome: "Introdução ao Brasil Colônia",
      tipo: "PDF",
      tamanho: "2.5 MB",
    },
    {
      id: "2",
      nome: "A Independência do Brasil",
      tipo: "DOCX",
      tamanho: "1.2 MB",
    },
    {
      id: "3",
      nome: "República Velha - Resumo",
      tipo: "PDF",
      tamanho: "3.1 MB",
    },
  ];

  const atividades = [
    {
      id: "1",
      titulo: "Quiz - Brasil Colônia",
      questoes: 10,
      completado: 28,
      total: 32,
    },
    {
      id: "2",
      titulo: "Quiz - Independência",
      questoes: 8,
      completado: 30,
      total: 32,
    },
    {
      id: "3",
      titulo: "Quiz - República",
      questoes: 12,
      completado: 15,
      total: 32,
    },
  ];

  const alunos = [
    {
      id: "1",
      nome: "Ana Silva",
      pontos: 1250,
      nivel: 12,
      avatar: "🎓",
    },
    {
      id: "2",
      nome: "Bruno Costa",
      pontos: 1180,
      nivel: 11,
      avatar: "📚",
    },
    {
      id: "3",
      nome: "Carla Santos",
      pontos: 1120,
      nivel: 11,
      avatar: "✏️",
    },
    {
      id: "4",
      nome: "Daniel Oliveira",
      pontos: 1050,
      nivel: 10,
      avatar: "🌟",
    },
    {
      id: "5",
      nome: "Eduarda Lima",
      pontos: 980,
      nivel: 9,
      avatar: "💡",
    },
  ];

  const copiarCodigo = () => {
    navigator.clipboard.writeText(sala.codigo);
    setCodigoCopiado(true);
    toast.success("Código copiado!");
    setTimeout(() => setCodigoCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/professor/dashboard")}
          className="mb-6 text-gray-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-white mb-2">{sala.nome}</h1>
              <p className="text-gray-400">{sala.disciplina}</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() =>
                  navigate(`/professor/sala/${id}/upload`)
                }
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Upload className="w-4 h-4 mr-2" />
                Enviar Material
              </Button>
              <Button
                onClick={() =>
                  navigate(`/professor/relatorios/${id}`)
                }
                variant="outline"
                className="border-gray-700 text-gray-900 hover:bg-[#1a2332] hover:text-gray-400"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Relatórios
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Card className="bg-[#1a2332] border-gray-800 inline-block">
              <CardContent className="p-4 flex items-center gap-3">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Código da Sala
                  </p>
                  <p className="text-white text-xl">
                    {sala.codigo}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copiarCodigo}
                  className="text-gray-400 hover:text-white"
                >
                  {codigoCopiado ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800 inline-block">
              <CardContent className="p-4">
                <p className="text-gray-400 text-sm mb-1">
                  Alunos Inscritos
                </p>
                <p className="text-white text-xl">
                  {sala.alunos}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800 inline-block">
              <CardContent className="p-4">
                <p className="text-gray-400 text-sm mb-1">
                  Materiais
                </p>
                <p className="text-white text-xl">
                  {sala.materiais}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800 inline-block">
              <CardContent className="p-4">
                <p className="text-gray-400 text-sm mb-1">
                  Atividades
                </p>
                <p className="text-white text-xl">
                  {sala.atividades}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="materiais" className="w-full">
          <TabsList className="bg-[#1a2332] border-b border-gray-800 w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="materiais"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Materiais
            </TabsTrigger>
            <TabsTrigger
              value="questoes"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Questões
            </TabsTrigger>
            <TabsTrigger
              value="atividades"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Atividades
            </TabsTrigger>
            <TabsTrigger
              value="alunos"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Alunos
            </TabsTrigger>
            <TabsTrigger
              value="ranking"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Ranking
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="materiais">
              <div className="space-y-4">
                {materiais.map((material) => (
                  <Card
                    key={material.id}
                    className="bg-[#1a2332] border-gray-800"
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-white">
                            {material.nome}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {material.tipo} • {material.tamanho}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() =>
                          navigate(
                            `/professor/sala/${id}/questoes`,
                          )
                        }
                        className="bg-cyan-600 hover:bg-cyan-700"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Gerar Questões
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-[#1a2332] border-gray-800 border-dashed">
                  <CardContent className="p-12">
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400 mb-2">
                        Nenhum material enviado ainda
                      </p>
                      <Button
                        variant="outline"
                        className="border-gray-700 text-blue-400 hover:bg-[#0f1419] hover:text-white"
                        onClick={() =>
                          navigate(
                            `/professor/sala/${id}/upload`,
                          )
                        }
                      >
                        Enviar primeiro material
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="questoes">
              <Card className="bg-[#1a2332] border-gray-800">
                <CardContent className="p-12">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                    <h3 className="text-white mb-2">
                      Gere questões com IA
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Envie materiais e nossa IA criará
                      automaticamente questões personalizadas
                    </p>
                    <Button
                      onClick={() =>
                        navigate(`/professor/sala/${id}/upload`)
                      }
                      className="bg-cyan-600 hover:bg-cyan-700"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Enviar Material
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="atividades">
              <div className="space-y-4">
                {atividades.map((atividade) => (
                  <Card
                    key={atividade.id}
                    className="bg-[#1a2332] border-gray-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-white mb-1">
                            {atividade.titulo}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {atividade.questoes} questões
                          </p>
                        </div>
                        <Badge className="bg-green-500">
                          Publicada
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">
                            Alunos que completaram
                          </span>
                          <span className="text-white">
                            {atividade.completado}/
                            {atividade.total}
                          </span>
                        </div>
                        <Progress
                          value={
                            (atividade.completado /
                              atividade.total) *
                            100
                          }
                          className="h-2 bg-gray-700"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alunos">
              <div className="space-y-4">
                {alunos.map((aluno, index) => (
                  <Card
                    key={aluno.id}
                    className="bg-[#1a2332] border-gray-800"
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                        {aluno.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          {aluno.nome}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Nível {aluno.nivel} • {aluno.pontos}{" "}
                          XP
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gray-700 text-gray-300"
                      >
                        #{index + 1}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ranking">
              <Card className="bg-[#1a2332] border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    Top 5 da Turma
                  </CardTitle>
                  <CardDescription>
                    Alunos com melhor desempenho
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alunos.slice(0, 5).map((aluno, index) => (
                      <div
                        key={aluno.id}
                        className="flex items-center gap-4"
                      >
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
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xl">
                          {aluno.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-white">
                            {aluno.nome}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {aluno.pontos} pontos
                          </p>
                        </div>
                        <Badge className="bg-blue-500">
                          Nível {aluno.nivel}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}