import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ArrowLeft, Trophy, Medal, Crown, Flame } from 'lucide-react';

interface RankingProps {
  user: User;
}

export default function Ranking({ user }: RankingProps) {
  const navigate = useNavigate();
  const { salaId } = useParams();

  const rankingSemanal = [
    { id: '1', nome: 'Maria Santos', pontos: 850, nivel: 12, avatar: 'M', conquistas: 8 },
    { id: '2', nome: 'João Silva', pontos: 720, nivel: 11, avatar: 'J', conquistas: 6 },
    { id: '3', nome: 'Ana Costa', pontos: 680, nivel: 10, avatar: 'A', conquistas: 7 },
    { id: '4', nome: 'Pedro Lima', pontos: 620, nivel: 10, avatar: 'P', conquistas: 5 },
    { id: '5', nome: 'Carla Souza', pontos: 580, nivel: 9, avatar: 'C', conquistas: 4 },
    { id: '6', nome: 'Lucas Oliveira', pontos: 550, nivel: 9, avatar: 'L', conquistas: 5 },
    { id: '7', nome: 'Julia Ramos', pontos: 520, nivel: 8, avatar: 'J', conquistas: 3 },
    { id: '8', nome: 'Bruno Costa', pontos: 480, nivel: 8, avatar: 'B', conquistas: 4 },
  ];

  const rankingMensal = [
    { id: '1', nome: 'Ana Costa', pontos: 2850, nivel: 15, avatar: 'A', conquistas: 12 },
    { id: '2', nome: 'Maria Santos', pontos: 2720, nivel: 14, avatar: 'M', conquistas: 11 },
    { id: '3', nome: 'Pedro Lima', pontos: 2680, nivel: 13, avatar: 'P', conquistas: 10 },
    { id: '4', nome: 'João Silva', pontos: 2620, nivel: 13, avatar: 'J', conquistas: 9 },
    { id: '5', nome: 'Lucas Oliveira', pontos: 2580, nivel: 12, avatar: 'L', conquistas: 8 },
    { id: '6', nome: 'Carla Souza', pontos: 2550, nivel: 12, avatar: 'C', conquistas: 7 },
    { id: '7', nome: 'Bruno Costa', pontos: 2520, nivel: 11, avatar: 'B', conquistas: 8 },
    { id: '8', nome: 'Julia Ramos', pontos: 2480, nivel: 11, avatar: 'J', conquistas: 6 },
  ];

  const rankingTotal = [
    { id: '1', nome: 'Maria Santos', pontos: 8850, nivel: 22, avatar: 'M', conquistas: 25 },
    { id: '2', nome: 'João Silva', pontos: 8120, nivel: 20, avatar: 'J', conquistas: 22 },
    { id: '3', nome: 'Ana Costa', pontos: 7680, nivel: 19, avatar: 'A', conquistas: 20 },
    { id: '4', nome: 'Pedro Lima', pontos: 7220, nivel: 18, avatar: 'P', conquistas: 18 },
    { id: '5', nome: 'Lucas Oliveira', pontos: 6850, nivel: 17, avatar: 'L', conquistas: 16 },
    { id: '6', nome: 'Carla Souza', pontos: 6580, nivel: 16, avatar: 'C', conquistas: 15 },
    { id: '7', nome: 'Bruno Costa', pontos: 6320, nivel: 16, avatar: 'B', conquistas: 14 },
    { id: '8', nome: 'Julia Ramos', pontos: 6180, nivel: 15, avatar: 'J', conquistas: 13 },
  ];

  const renderRanking = (dados: typeof rankingSemanal) => (
    <div className="space-y-4">
      {dados.map((aluno, index) => (
        <Card 
          key={aluno.id}
          className={`bg-[#1a2332] border-gray-800 ${
            index < 3 ? 'border-l-4' : ''
          } ${
            index === 0 ? 'border-l-yellow-500' :
            index === 1 ? 'border-l-gray-400' :
            index === 2 ? 'border-l-orange-600' : ''
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              {/* Posição */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                index === 0 ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' : 
                index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500' : 
                index === 2 ? 'bg-gradient-to-br from-orange-600 to-orange-700' : 
                'bg-gray-700'
              }`}>
                {index === 0 ? (
                  <Crown className="w-6 h-6" />
                ) : index === 1 || index === 2 ? (
                  <Medal className="w-6 h-6" />
                ) : (
                  <span className="text-lg">#{index + 1}</span>
                )}
              </div>

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl flex-shrink-0">
                {aluno.avatar}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white mb-1">{aluno.nome}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-orange-400">
                    <Flame className="w-4 h-4" />
                    <span>{aluno.pontos} XP</span>
                  </div>
                  <div className="text-gray-400">
                    Nível {aluno.nivel}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Trophy className="w-4 h-4" />
                    <span>{aluno.conquistas}</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              {index < 3 && (
                <Badge className={
                  index === 0 ? 'bg-yellow-500' :
                  index === 1 ? 'bg-gray-400' :
                  'bg-orange-600'
                }>
                  {index === 0 ? '🥇 1º Lugar' :
                   index === 1 ? '🥈 2º Lugar' :
                   '🥉 3º Lugar'}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="bg-[#1a2332] border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              Ranking da Turma
            </CardTitle>
            <CardDescription>
              Veja quem está se destacando e acompanhe sua evolução
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="semanal" className="w-full">
          <TabsList className="bg-[#1a2332] border border-gray-800 w-full justify-start mb-6">
            <TabsTrigger 
              value="semanal"
              className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              📅 Semanal
            </TabsTrigger>
            <TabsTrigger 
              value="mensal"
              className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              📆 Mensal
            </TabsTrigger>
            <TabsTrigger 
              value="total"
              className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              🏆 Total
            </TabsTrigger>
          </TabsList>

          <TabsContent value="semanal">
            {renderRanking(rankingSemanal)}
          </TabsContent>

          <TabsContent value="mensal">
            {renderRanking(rankingMensal)}
          </TabsContent>

          <TabsContent value="total">
            {renderRanking(rankingTotal)}
          </TabsContent>
        </Tabs>

        {/* Conquistas Destaques */}
        <Card className="bg-[#1a2332] border-gray-800 mt-8">
          <CardHeader>
            <CardTitle className="text-white">🌟 Conquistas em Destaque</CardTitle>
            <CardDescription>Medalhas e conquistas dos melhores alunos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#0f1419] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">👑</div>
                <p className="text-gray-400 text-sm mb-1">Campeão Semanal</p>
                <p className="text-white text-sm">Maria Santos</p>
              </div>
              <div className="bg-[#0f1419] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-gray-400 text-sm mb-1">Sequência de 7 dias</p>
                <p className="text-white text-sm">João Silva</p>
              </div>
              <div className="bg-[#0f1419] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">⚡</div>
                <p className="text-gray-400 text-sm mb-1">100% de Acertos</p>
                <p className="text-white text-sm">Ana Costa</p>
              </div>
              <div className="bg-[#0f1419] p-4 rounded-lg text-center">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-gray-400 text-sm mb-1">Completou 50 Quizzes</p>
                <p className="text-white text-sm">Pedro Lima</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}