import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import ProfessorDashboard from './components/ProfessorDashboard';
import AlunoDashboard from './components/AlunoDashboard';
import CriarSala from './components/CriarSala';
import SalaProfessor from './components/SalaProfessor';
import SalaAluno from './components/SalaAluno';
import UploadConteudo from './components/UploadConteudo';
import QuestoesGeradas from './components/QuestoesGeradas';
import Quiz from './components/Quiz';
import Ranking from './components/Ranking';
import Relatorios from './components/Relatorios';
import Perfil from './components/Perfil';
import { Toaster } from 'sonner@2.0.3';

export type UserType = 'professor' | 'aluno' | null;

export interface User {
  id: string;
  nome: string;
  email: string;
  tipo: UserType;
  avatar?: string;
  pontos?: number;
  nivel?: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0e13]">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route 
            path="/professor/dashboard" 
            element={user?.tipo === 'professor' ? <ProfessorDashboard user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/aluno/dashboard" 
            element={user?.tipo === 'aluno' ? <AlunoDashboard user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/professor/criar-sala" 
            element={user?.tipo === 'professor' ? <CriarSala user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/professor/sala/:id" 
            element={user?.tipo === 'professor' ? <SalaProfessor user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/aluno/sala/:id" 
            element={user?.tipo === 'aluno' ? <SalaAluno user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/professor/sala/:id/upload" 
            element={user?.tipo === 'professor' ? <UploadConteudo user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/professor/sala/:id/questoes" 
            element={user?.tipo === 'professor' ? <QuestoesGeradas user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/aluno/quiz/:atividadeId" 
            element={user?.tipo === 'aluno' ? <Quiz user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/ranking/:salaId" 
            element={user ? <Ranking user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/professor/relatorios/:salaId" 
            element={user?.tipo === 'professor' ? <Relatorios user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/perfil" 
            element={user ? <Perfil user={user} setUser={setUser} /> : <Navigate to="/" />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
