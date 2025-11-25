import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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
import { Switch } from "./ui/switch";
import {
  ArrowLeft,
  Camera,
  Trophy,
  Award,
  Target,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface PerfilProps {
  user: User;
  setUser: (user: User) => void;
}

export default function Perfil({ user, setUser }: PerfilProps) {
  const navigate = useNavigate();
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);

  const handleSalvar = () => {
    setUser({ ...user, nome, email });
    toast.success("Perfil atualizado com sucesso!");
  };

  const conquistas = [
    {
      id: "1",
      titulo: "Primeira Vitória",
      descricao: "Complete seu primeiro quiz",
      icone: "🎯",
      desbloqueado: true,
    },
    {
      id: "2",
      titulo: "Estudante Dedicado",
      descricao: "Complete 10 quizzes",
      icone: "📚",
      desbloqueado: true,
    },
    {
      id: "3",
      titulo: "Mestre do Conhecimento",
      descricao: "Atinja 90% de acerto",
      icone: "🧠",
      desbloqueado: true,
    },
    {
      id: "4",
      titulo: "Sequência de Fogo",
      descricao: "Estude por 7 dias seguidos",
      icone: "🔥",
      desbloqueado: false,
    },
    {
      id: "5",
      titulo: "Top 10",
      descricao: "Entre no top 10 do ranking",
      icone: "🏆",
      desbloqueado: true,
    },
    {
      id: "6",
      titulo: "Perfeccionista",
      descricao: "Tire 100% em 5 quizzes",
      icone: "⭐",
      desbloqueado: false,
    },
  ];

  const historico = [
    {
      data: "15/11/2024",
      atividade: "Quiz - Limites e Derivadas",
      nota: 92,
      pontos: 110,
    },
    {
      data: "14/11/2024",
      atividade: "Quiz - Integrais Definidas",
      nota: 85,
      pontos: 100,
    },
    {
      data: "13/11/2024",
      atividade: "Quiz - Séries e Sequências",
      nota: 78,
      pontos: 95,
    },
    {
      data: "12/11/2024",
      atividade: "Quiz - Cálculo Diferencial",
      nota: 88,
      pontos: 105,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Profile Header */}
        <Card className="bg-[#1a2332] border-gray-800 mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl">
                  {user.nome.charAt(0).toUpperCase()}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex-1">
                <h1 className="text-white mb-2">{user.nome}</h1>
                <p className="text-gray-400 mb-4">
                  {user.email}
                </p>
                {user.tipo === "aluno" && (
                  <div className="flex gap-4">
                    <div className="bg-[#0f1419] px-4 py-2 rounded-lg">
                      <p className="text-gray-400 text-sm">
                        Nível
                      </p>
                      <p className="text-white text-xl">
                        {user.nivel}
                      </p>
                    </div>
                    <div className="bg-[#0f1419] px-4 py-2 rounded-lg">
                      <p className="text-gray-400 text-sm">
                        Pontos XP
                      </p>
                      <p className="text-orange-400 text-xl">
                        {user.pontos}
                      </p>
                    </div>
                    <div className="bg-[#0f1419] px-4 py-2 rounded-lg">
                      <p className="text-gray-400 text-sm">
                        Ranking
                      </p>
                      <p className="text-blue-400 text-xl">
                        #8
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="perfil" className="w-full">
          <TabsList className="bg-[#1a2332] border border-gray-800 w-full justify-start mb-6">
            <TabsTrigger
              value="perfil"
              // AQUI A MUDANÇA
              className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Editar Perfil
            </TabsTrigger>
            {user.tipo === "aluno" && (
              <>
                <TabsTrigger
                  value="historico"
                  // AQUI A MUDANÇA
                  className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Histórico
                </TabsTrigger>
                <TabsTrigger
                  value="conquistas"
                  // AQUI A MUDANÇA
                  className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Conquistas
                </TabsTrigger>
              </>
            )}
            <TabsTrigger
              value="preferencias"
              // AQUI A MUDANÇA
              className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Preferências
            </TabsTrigger>
          </TabsList>

          <TabsContent value="perfil">
            <Card className="bg-[#1a2332] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Informações Pessoais
                </CardTitle>
                <CardDescription>
                  Atualize seus dados pessoais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="nome"
                    className="text-gray-300"
                  >
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="bg-[#0f1419] border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-300"
                  >
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0f1419] border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="senha"
                    className="text-gray-300"
                  >
                    Nova Senha
                  </Label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="Deixe em branco para manter a atual"
                    className="bg-[#0f1419] border-gray-700 text-white"
                  />
                </div>

                <Button
                  onClick={handleSalvar}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {user.tipo === "aluno" && (
            <>
              <TabsContent value="historico">
                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Histórico de Desempenho
                    </CardTitle>
                    <CardDescription>
                      Suas atividades recentes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {historico.map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#0f1419] p-4 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white">
                              {item.atividade}
                            </h4>
                            <span className="text-gray-400 text-sm">
                              {item.data}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`${
                                item.nota >= 85
                                  ? "text-green-400"
                                  : item.nota >= 70
                                    ? "text-blue-400"
                                    : "text-yellow-400"
                              }`}
                            >
                              Nota: {item.nota}%
                            </span>
                            <span className="text-orange-400">
                              +{item.pontos} XP
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conquistas">
                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      Suas Conquistas
                    </CardTitle>
                    <CardDescription>
                      {
                        conquistas.filter((c) => c.desbloqueado)
                          .length
                      }{" "}
                      de {conquistas.length} desbloqueadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {conquistas.map((conquista) => (
                        <div
                          key={conquista.id}
                          className={`p-4 rounded-lg border ${
                            conquista.desbloqueado
                              ? "bg-[#0f1419] border-yellow-500/30"
                              : "bg-[#0f1419] border-gray-800 opacity-50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-4xl">
                              {conquista.icone}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white mb-1">
                                {conquista.titulo}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {conquista.descricao}
                              </p>
                              {conquista.desbloqueado && (
                                <div className="mt-2">
                                  <span className="text-yellow-500 text-sm">
                                    ✓ Desbloqueado
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </>
          )}

          <TabsContent value="preferencias">
            <Card className="bg-[#1a2332] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Preferências de Notificação
                </CardTitle>
                <CardDescription>
                  Gerencie como você recebe notificações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">
                      Novas Atividades
                    </p>
                    <p className="text-gray-400 text-sm">
                      Receba notificações quando novas
                      atividades forem publicadas
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">
                      Lembretes de Estudo
                    </p>
                    <p className="text-gray-400 text-sm">
                      Receba lembretes diários para manter sua
                      sequência
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">
                      Atualizações do Ranking
                    </p>
                    <p className="text-gray-400 text-sm">
                      Seja notificado quando sua posição no
                      ranking mudar
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Conquistas</p>
                    <p className="text-gray-400 text-sm">
                      Receba notificações ao desbloquear novas
                      conquistas
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}