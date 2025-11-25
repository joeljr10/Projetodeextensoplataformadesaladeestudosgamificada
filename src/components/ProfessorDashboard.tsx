import { useNavigate } from 'react-router-dom';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  GraduationCap, 
  Bell, 
  Plus, 
  Users, 
  BookOpen, 
  TrendingUp, 
  BarChart3,
  Settings,
  LogOut,
  Sparkles
} from 'lucide-react';

interface ProfessorDashboardProps {
  user: User;
}

export default function ProfessorDashboard({ user }: ProfessorDashboardProps) {
  const navigate = useNavigate();

  const salas = [
    {
      id: '1',
      nome: 'História do Brasil',
      disciplina: 'História',
      alunos: 32,
      atividades: 8,
      engajamento: 85,
      cor: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      nome: 'Matemática Avançada',
      disciplina: 'Matemática',
      alunos: 28,
      atividades: 12,
      engajamento: 92,
      cor: 'from-purple-500 to-pink-500'
    },
    {
      id: '3',
      nome: 'Física Moderna',
      disciplina: 'Física',
      alunos: 25,
      atividades: 6,
      engajamento: 78,
      cor: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#1a2332] border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <img 
                src={user.avatar} 
                alt={user.nome}
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-xs text-blue-400">Bem vindo,</p>
              <p className="text-white">{user.nome}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#2a3c50] text-white">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Salas</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors">
              <Sparkles className="w-5 h-5" />
              <span>Quizzes</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
              <span>Biblioteca</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>Progresso</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-800 space-y-2">
          <button 
            onClick={() => navigate('/perfil')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Configurações</span>
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#2a3c50] hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-[#1a2332] border-b border-gray-800">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white">Plataforma de Estudo</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative">
                  <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    5
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-[#1a2332] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total de Salas</p>
                    <p className="text-white text-3xl">{salas.length}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total de Alunos</p>
                    <p className="text-white text-3xl">{salas.reduce((acc, s) => acc + s.alunos, 0)}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Atividades</p>
                    <p className="text-white text-3xl">{salas.reduce((acc, s) => acc + s.atividades, 0)}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Engajamento Médio</p>
                    <p className="text-white text-3xl">
                      {Math.round(salas.reduce((acc, s) => acc + s.engajamento, 0) / salas.length)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white">Minhas Salas</h2>
            <Button 
              onClick={() => navigate('/professor/criar-sala')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Nova Sala
            </Button>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salas.map((sala) => (
              <Card 
                key={sala.id}
                className="bg-[#1a2332] border-gray-800 hover:border-gray-700 transition-all cursor-pointer group"
                onClick={() => navigate(`/professor/sala/${sala.id}`)}
              >
                <CardHeader>
                  <div className={`w-full h-32 rounded-lg bg-gradient-to-r ${sala.cor} mb-4 flex items-center justify-center`}>
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-white">{sala.nome}</CardTitle>
                  <CardDescription className="text-gray-400">{sala.disciplina}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Alunos</span>
                      <span className="text-white">{sala.alunos}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Atividades</span>
                      <span className="text-white">{sala.atividades}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Engajamento</span>
                      <span className="text-green-400">{sala.engajamento}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Create New Card */}
            <Card 
              className="bg-[#1a2332] border-gray-800 border-dashed hover:border-gray-700 transition-all cursor-pointer"
              onClick={() => navigate('/professor/criar-sala')}
            >
              <CardContent className="h-full flex flex-col items-center justify-center p-12">
                <Plus className="w-16 h-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-center">Criar Nova Sala</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}