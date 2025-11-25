import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  FileText, 
  Trophy,
  Play,
  CheckCircle,
  Clock
} from 'lucide-react';

interface SalaAlunoProps {
  user: User;
}

export default function SalaAluno({ user }: SalaAlunoProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const sala = {
    id: id,
    nome: 'Cálculo I',
    professor: 'Prof. Ada Lovelace',
    progresso: 75
  };

  const atividades = [
    { 
      id: '1', 
      titulo: 'Limites e Derivadas', 
      questoes: 10, 
      pontos: 100, 
      status: 'pendente',
      dificuldade: 'Médio'
    },
    { 
      id: '2', 
      titulo: 'Integrais Definidas', 
      questoes: 8, 
      pontos: 80, 
      status: 'completado',
      dificuldade: 'Fácil',
      nota: 85
    },
    { 
      id: '3', 
      titulo: 'Séries e Sequências', 
      questoes: 12, 
      pontos: 120, 
      status: 'completado',
      dificuldade: 'Difícil',
      nota: 92
    },
  ];

  const materiais = [
    { id: '1', nome: 'Apostila - Limites', tipo: 'PDF' },
    { id: '2', nome: 'Exercícios Resolvidos', tipo: 'PDF' },
    { id: '3', nome: 'Fórmulas Essenciais', tipo: 'PDF' },
  ];

  const ranking = [
    { id: '1', nome: 'Você', pontos: 1250, posicao: 8, avatar: user.nome.charAt(0) },
    { id: '2', nome: 'Maria Santos', pontos: 1480, posicao: 1, avatar: 'M' },
    { id: '3', nome: 'João Silva', pontos: 1350, posicao: 3, avatar: 'J' },
    { id: '4', nome: 'Ana Costa', pontos: 1280, posicao: 5, avatar: 'A' },
    { id: '5', nome: 'Pedro Lima', pontos: 1220, posicao: 9, avatar: 'P' },
  ];

  const meuDesempenho = {
    atividadesCompletas: 12,
    atividadesTotal: 15,
    mediaNotas: 88,
    pontosGanhos: 1250,
    ranking: 8
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/aluno/dashboard')}
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-white mb-2">{sala.nome}</h1>
              <p className="text-gray-400">{sala.professor}</p>
            </div>
            <Badge className="bg-orange-500">2 Novas Atividades</Badge>
          </div>

          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Seu Progresso na Sala</span>
                <span className="text-white">{sala.progresso}%</span>
              </div>
              <Progress value={sala.progresso} className="h-3 bg-gray-700" />
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="atividades" className="w-full">
          <TabsList className="bg-[#1a2332] border-b border-gray-800 w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger 
              value="atividades"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Atividades
            </TabsTrigger>
            <TabsTrigger 
              value="materiais"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Materiais
            </TabsTrigger>
            <TabsTrigger 
              value="ranking"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Ranking
            </TabsTrigger>
            <TabsTrigger 
              value="desempenho"
              className="text-gray-400 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-white rounded-none px-6 py-3"
            >
              Meu Desempenho
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="atividades">
              <div className="space-y-4">
                {atividades.map((atividade) => (
                  <Card 
                    key={atividade.id} 
                    className={`bg-[#1a2332] border-gray-800 ${
                      atividade.status === 'pendente' ? 'border-l-4 border-l-orange-500' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white">{atividade.titulo}</h3>
                            {atividade.status === 'pendente' ? (
                              <Badge className="bg-orange-500">Pendente</Badge>
                            ) : (
                              <Badge className="bg-green-500">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Concluído
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{atividade.questoes} questões</span>
                            <span>•</span>
                            <span>{atividade.pontos} pontos</span>
                            <span>•</span>
                            <span className={
                              atividade.dificuldade === 'Fácil' ? 'text-green-400' :
                              atividade.dificuldade === 'Médio' ? 'text-yellow-400' :
                              'text-red-400'
                            }>
                              {atividade.dificuldade}
                            </span>
                          </div>
                          {atividade.status === 'completado' && atividade.nota && (
                            <div className="mt-3">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-sm">Sua nota:</span>
                                <span className="text-green-400">{atividade.nota}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                        {atividade.status === 'pendente' ? (
                          <Button 
                            onClick={() => navigate(`/aluno/quiz/${atividade.id}`)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Responder Agora
                          </Button>
                        ) : (
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            Ver Respostas
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materiais">
              <div className="space-y-4">
                {materiais.map((material) => (
                  <Card key={material.id} className="bg-[#1a2332] border-gray-800">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-white">{material.nome}</p>
                          <p className="text-gray-400 text-sm">{material.tipo}</p>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Baixar
                      </Button>
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
                    Ranking da Turma
                  </CardTitle>
                  <CardDescription>Sua posição e top alunos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ranking.sort((a, b) => a.posicao - b.posicao).map((aluno) => (
                      <div 
                        key={aluno.id} 
                        className={`flex items-center gap-4 p-4 rounded-lg ${
                          aluno.nome === 'Você' ? 'bg-blue-500/10 border border-blue-500/30' : ''
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          aluno.posicao === 1 ? 'bg-yellow-500' : 
                          aluno.posicao === 2 ? 'bg-gray-400' : 
                          aluno.posicao === 3 ? 'bg-orange-600' : 'bg-gray-700'
                        }`}>
                          {aluno.posicao}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                          {aluno.avatar}
                        </div>
                        <div className="flex-1">
                          <p className={`${aluno.nome === 'Você' ? 'text-blue-400' : 'text-white'}`}>
                            {aluno.nome}
                          </p>
                          <p className="text-gray-400 text-sm">{aluno.pontos} pontos</p>
                        </div>
                        {aluno.posicao <= 3 && (
                          <Trophy className={`w-5 h-5 ${
                            aluno.posicao === 1 ? 'text-yellow-500' :
                            aluno.posicao === 2 ? 'text-gray-400' :
                            'text-orange-600'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="desempenho">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Atividades Completas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-white text-4xl mb-2">
                        {meuDesempenho.atividadesCompletas}/{meuDesempenho.atividadesTotal}
                      </p>
                    </div>
                    <Progress 
                      value={(meuDesempenho.atividadesCompletas / meuDesempenho.atividadesTotal) * 100} 
                      className="h-3 bg-gray-700" 
                    />
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Média das Notas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-green-400 text-4xl">{meuDesempenho.mediaNotas}%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Pontos Ganhos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-orange-400 text-4xl">{meuDesempenho.pontosGanhos} XP</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2332] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Posição no Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center flex items-center justify-center gap-2">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                      <p className="text-blue-400 text-4xl">#{meuDesempenho.ranking}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}