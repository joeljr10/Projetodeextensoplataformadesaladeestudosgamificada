import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { User, UserType } from '../App';
import { toast } from 'sonner@2.0.3';

interface LoginProps {
  setUser: (user: User) => void;
}

export default function Login({ setUser }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (tipo: UserType) => {
    if (!email || !senha) {
      toast.error('Preencha todos os campos');
      return;
    }

    // Mock login
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      nome: nome || email.split('@')[0],
      email,
      tipo: tipo!,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      pontos: tipo === 'aluno' ? 1250 : undefined,
      nivel: tipo === 'aluno' ? 8 : undefined,
    };

    setUser(mockUser);
    toast.success(`Bem-vindo, ${mockUser.nome}!`);
    
    if (tipo === 'professor') {
      navigate('/professor/dashboard');
    } else {
      navigate('/aluno/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#0a0e13] via-[#111827] to-[#0a0e13]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white">Plataforma Estudo</h1>
          </div>
          <p className="text-gray-300">Aprenda de forma gamificada e interativa</p>
        </div>

        <Tabs defaultValue="aluno" className="w-full">
          <TabsList className="flex w-full grid-cols-2 bg-[#1f2937] border border-gray-700">
            <TabsTrigger value="aluno" className="text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Aluno
            </TabsTrigger>
            <TabsTrigger value="professor" className="text-gray-400 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              Professor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="aluno">
            <Card className="bg-[#1f2937] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Entrar como Aluno</CardTitle>
                <CardDescription className="text-gray-300">Acesse suas salas e atividades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isRegistering && (
                  <div className="space-y-2">
                    <Label htmlFor="nome-aluno" className="text-gray-200">Nome</Label>
                    <Input
                      id="nome-aluno"
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email-aluno" className="text-gray-200">E-mail</Label>
                  <Input
                    id="email-aluno"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha-aluno" className="text-gray-200">Senha</Label>
                  <Input
                    id="senha-aluno"
                    type="password"
                    placeholder="••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  onClick={() => handleLogin('aluno')} 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isRegistering ? 'Cadastrar' : 'Entrar'}
                </Button>
                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="w-full text-sm text-gray-300 hover:text-white"
                >
                  {isRegistering ? 'Já tenho conta' : 'Criar nova conta'}
                </button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professor">
            <Card className="bg-[#1f2937] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Entrar como Professor</CardTitle>
                <CardDescription className="text-gray-300">Gerencie suas salas e atividades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isRegistering && (
                  <div className="space-y-2">
                    <Label htmlFor="nome-prof" className="text-gray-200">Nome</Label>
                    <Input
                      id="nome-prof"
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email-prof" className="text-gray-200">E-mail</Label>
                  <Input
                    id="email-prof"
                    type="email"
                    placeholder="professor@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha-prof" className="text-gray-200">Senha</Label>
                  <Input
                    id="senha-prof"
                    type="password"
                    placeholder="••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="bg-[#111827] border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  onClick={() => handleLogin('professor')} 
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {isRegistering ? 'Cadastrar' : 'Entrar'}
                </Button>
                <button
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="w-full text-sm text-gray-300 hover:text-white"
                >
                  {isRegistering ? 'Já tenho conta' : 'Criar nova conta'}
                </button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Demonstração - Use qualquer e-mail para acessar
          </p>
        </div>
      </div>
    </div>
  );
}