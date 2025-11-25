import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  Bell,
  Trophy,
  BookOpen,
  TrendingUp,
  Plus,
  ChevronRight,
  Flame,
  LogOut,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

interface AlunoDashboardProps {
  user: User;
}

export default function AlunoDashboard({
  user,
}: AlunoDashboardProps) {
  const navigate = useNavigate();
  const [codigoSala, setCodigoSala] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const salas = [
    {
      id: "1",
      nome: "Cálculo I",
      professor: "Prof. Ada Lovelace",
      progresso: 75,
      cor: "from-orange-500 to-red-500",
      badge: "orange",
      novasAtividades: 2,
    },
    {
      id: "2",
      nome: "Física Quântica",
      professor: "Prof. Albert Einstein",
      progresso: 90,
      cor: "from-green-500 to-emerald-500",
      badge: "green",
      novasAtividades: 0,
    },
    {
      id: "3",
      nome: "Algoritmos Avançados",
      professor: "Prof. Alan Turing",
      progresso: 40,
      cor: "from-purple-500 to-pink-500",
      badge: "purple",
      novasAtividades: 1,
    },
  ];

  const handleEntrarSala = () => {
    if (!codigoSala) {
      toast.error("Digite o código da sala");
      return;
    }
    toast.success("Você entrou na sala!");
    setOpenDialog(false);
    setCodigoSala("");
  };

  return (
    <div className="min-h-screen bg-[#0a0e13]">
      {/* Header */}
      <header className="bg-[#1f2937] border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">
                Plataforma Estudo
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <Bell className="w-5 h-5 text-gray-300 hover:text-white" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Sair</span>
              </button>
              <div
                onClick={() => navigate("/perfil")}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer flex items-center justify-center text-white"
              >
                {user.nome.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* <div className="flex items-center justify-between mb-8">
          <h1 className="text-white">Seu Painel</h1>
          <Dialog
            open={openDialog}
            onOpenChange={setOpenDialog}
          >
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Entrar em uma Sala
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1a2332] border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-white">
                  Entrar em uma Sala
                </DialogTitle>
                <DialogDescription className="text-gray-300">
                  Digite o código fornecido pelo professor
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="codigo"
                    className="text-gray-300"
                  >
                    Código da Sala
                  </Label>
                  <Input
                    id="codigo"
                    placeholder="Ex: ABC123"
                    value={codigoSala}
                    onChange={(e) =>
                      setCodigoSala(e.target.value)
                    }
                    className="bg-[#0f1419] border-gray-700 text-white"
                  />
                </div>
                <Button
                  onClick={handleEntrarSala}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Entrar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress Cards */}
          <div className="space-y-4">
            <h1 className="text-white h-[36px]">Seu Painel</h1>
            <Card className="bg-[#1a2332] border-gray-800 gap-2">
              <CardHeader className="gap-0">
                <CardTitle className="text-gray-300 text-sm">
                  Seu Progresso Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">
                        Pontos Totais (XP)
                      </span>
                      <Flame className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-white text-3xl">1,250</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800 gap-2">
              <CardHeader className="gap-0">
                <CardTitle className="text-gray-300 text-sm">
                  Quizzes Completos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white text-2xl">12/15</p>
                  <BookOpen className="w-5 h-5 text-green-500" />
                </div>
                <Progress
                  value={80}
                  className="h-2 bg-gray-700 mb-2"
                />
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800 gap-2">
              <CardHeader className="gap-0">
                <CardTitle className="text-gray-300 text-sm">
                  Ranking Global
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <p className="text-blue-400 text-3xl">#8</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Enrolled Rooms */}
          <div className="lg:col-span-2">
            <div className="flex justify-between mb-4">
              <h2 className="text-white">Salas Inscritas</h2>
              <Dialog
                open={openDialog}
                onOpenChange={setOpenDialog}
              >
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Entrar em uma Sala
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#1a2332] border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Entrar em uma Sala
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Digite o código fornecido pelo professor
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="codigo"
                        className="text-gray-300"
                      >
                        Código da Sala
                      </Label>
                      <Input
                        id="codigo"
                        placeholder="Ex: ABC123"
                        value={codigoSala}
                        onChange={(e) =>
                          setCodigoSala(e.target.value)
                        }
                        className="bg-[#0f1419] border-gray-700 text-white"
                      />
                    </div>
                    <Button
                      onClick={handleEntrarSala}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Entrar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-4">
              {salas.map((sala) => (
                <Card
                  key={sala.id}
                  className="bg-[#1a2332] border-gray-800 hover:border-gray-700 transition-all cursor-pointer group"
                  onClick={() =>
                    navigate(`/aluno/sala/${sala.id}`)
                  }
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${sala.cor} flex items-center justify-center flex-shrink-0`}
                        >
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white">
                              {sala.nome}
                            </h3>
                            <Badge
                              className={
                                sala.novasAtividades > 0
                                  ? `bg-${sala.badge}-500`
                                  : `bg-gray-500 text-gray-800`
                              }
                            >
                              {sala.novasAtividades}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">
                            {sala.professor}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">
                                Progresso: {sala.progresso}%
                              </span>
                            </div>
                            <Progress
                              value={sala.progresso}
                              className="h-2 bg-gray-700"
                            />
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-[#1a2332] border-gray-800 border-dashed">
                <CardContent className="p-12">
                  <div className="text-center">
                    <Plus className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-2">
                      Você ainda não está em nenhuma sala.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-900 hover:bg-[#0f1419] hover:text-white"
                      onClick={() => setOpenDialog(true)}
                    >
                      Entre em uma sala
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}