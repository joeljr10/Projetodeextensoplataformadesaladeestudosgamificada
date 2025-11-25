import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../App";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface CriarSalaProps {
  user: User;
}

export default function CriarSala({ user }: CriarSalaProps) {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const handleCriarSala = () => {
    if (!nome || !disciplina) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    const salaId = Math.random().toString(36).substr(2, 9);
    toast.success("Sala criada com sucesso!");
    navigate(`/professor/sala/${salaId}`);
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/professor/dashboard")}
          className="mb-6 text-gray-400"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Dashboard
        </Button>

        <Card className="bg-[#1a2332] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-500" />
              Criar Nova Sala de Estudo
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configure sua sala virtual para começar a ensinar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-gray-300">
                Nome da Sala *
              </Label>
              <Input
                id="nome"
                placeholder="Ex: História do Brasil - 3º Ano"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-[#0f1419] border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="descricao"
                className="text-gray-300"
              >
                Descrição
              </Label>
              <Textarea
                id="descricao"
                placeholder="Descreva o conteúdo e objetivos da sala..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="bg-[#0f1419] border-gray-700 text-white min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="disciplina"
                className="text-gray-300"
              >
                Disciplina *
              </Label>
              <Select
                value={disciplina}
                onValueChange={setDisciplina}
              >
                <SelectTrigger className="bg-[#0f1419] border-gray-700 text-white">
                  <SelectValue placeholder="Selecione uma disciplina" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a2332] border-gray-700">
                  <SelectItem className="text-gray-300" value="matematica">
                    Matemática
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="portugues">
                    Português
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="historia">
                    História
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="geografia">
                    Geografia
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="fisica">Física</SelectItem>
                  <SelectItem className="text-gray-300" value="quimica">
                    Química
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="biologia">
                    Biologia
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="ingles">Inglês</SelectItem>
                  <SelectItem className="text-gray-300" value="programacao">
                    Programação
                  </SelectItem>
                  <SelectItem className="text-gray-300" value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-[#0f1419] border border-gray-800 rounded-lg p-4">
              <h3 className="text-white text-sm mb-2">
                💡 Dica
              </h3>
              <p className="text-gray-400 text-sm">
                Após criar a sala, você poderá enviar materiais
                e nossa IA irá gerar automaticamente questões
                personalizadas para seus alunos!
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => navigate("/professor/dashboard")}
                className="flex-1 border-gray-700 text-gray-900 hover:bg-[#0f1419] hover:text-white"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleCriarSala}
                className="flex-1 bg-cyan-600 hover:bg-cyan-700"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Criar Sala
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}