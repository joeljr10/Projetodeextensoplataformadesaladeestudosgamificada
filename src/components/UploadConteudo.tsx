import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, Upload, FileText, Image as ImageIcon, X, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface UploadConteudoProps {
  user: User;
}

interface ArquivoUpload {
  id: string;
  nome: string;
  tamanho: string;
  progresso: number;
  tipo: string;
}

export default function UploadConteudo({ user }: UploadConteudoProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [arquivos, setArquivos] = useState<ArquivoUpload[]>([]);
  const [gerandoQuestoes, setGerandoQuestoes] = useState(false);
  const [progressoIA, setProgressoIA] = useState(0);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const novosArquivos: ArquivoUpload[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      nome: file.name,
      tamanho: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      progresso: 0,
      tipo: file.type.includes('pdf') ? 'PDF' : 'DOCX'
    }));

    setArquivos([...arquivos, ...novosArquivos]);

    // Simular upload
    novosArquivos.forEach((arquivo) => {
      let progresso = 0;
      const intervalo = setInterval(() => {
        progresso += 10;
        setArquivos(prev => prev.map(a => 
          a.id === arquivo.id ? { ...a, progresso } : a
        ));
        if (progresso >= 100) {
          clearInterval(intervalo);
          toast.success(`${arquivo.nome} enviado com sucesso!`);
        }
      }, 200);
    });
  };

  const removerArquivo = (id: string) => {
    setArquivos(arquivos.filter(a => a.id !== id));
  };

  const gerarQuestoes = () => {
    if (arquivos.length === 0) {
      toast.error('Envie pelo menos um arquivo');
      return;
    }

    setGerandoQuestoes(true);
    setProgressoIA(0);

    // Simular geração de questões
    const intervalo = setInterval(() => {
      setProgressoIA(prev => {
        if (prev >= 100) {
          clearInterval(intervalo);
          setTimeout(() => {
            toast.success('Questões geradas com sucesso!');
            navigate(`/professor/sala/${id}/questoes`);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/professor/sala/${id}`)}
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="bg-[#1a2332] border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Criar Novo Quiz</CardTitle>
            <CardDescription>
              Faça o upload dos seus materiais de estudo e deixe nossa IA criar perguntas para você.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center hover:border-gray-600 transition-colors">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                accept=".pdf,.docx,.txt"
                onChange={handleFileSelect}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-white mb-2">Arraste e solte seus arquivos aqui ou clique para selecionar</p>
                <p className="text-gray-400 text-sm">Formatos aceitos: PDF, DOCX, TXT. Tamanho máximo: 10MB</p>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Arquivos Carregados */}
        {arquivos.length > 0 && (
          <Card className="bg-[#1a2332] border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white">Arquivos Carregados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {arquivos.map((arquivo) => (
                  <div key={arquivo.id} className="bg-[#0f1419] rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-white truncate">{arquivo.nome}</p>
                            <p className="text-gray-400 text-sm">{arquivo.tamanho}</p>
                          </div>
                          {arquivo.progresso === 100 && (
                            <button
                              onClick={() => removerArquivo(arquivo.id)}
                              className="text-gray-400 hover:text-white ml-2"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                        {arquivo.progresso < 100 ? (
                          <>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-400">Upload em progresso...</span>
                              <span className="text-white">{arquivo.progresso}%</span>
                            </div>
                            <Progress value={arquivo.progresso} className="h-2 bg-gray-700" />
                          </>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-green-400">
                            ✓ Upload concluído
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Botão Gerar Questões */}
        {arquivos.some(a => a.progresso === 100) && !gerandoQuestoes && (
          <Button 
            onClick={gerarQuestoes}
            className="w-full bg-cyan-600 hover:bg-cyan-700 h-14"
            size="lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Gerar Questões com IA
          </Button>
        )}

        {/* Loader de Geração */}
        {gerandoQuestoes && (
          <Card className="bg-[#1a2332] border-gray-800">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <Loader2 className="w-16 h-16 text-cyan-500 animate-spin" />
                </div>
                <h3 className="text-white text-xl mb-2">Nossa IA está trabalhando...</h3>
                <p className="text-gray-400 mb-6">Analisando conteúdo</p>
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Progresso</span>
                    <span className="text-cyan-400">{progressoIA}%</span>
                  </div>
                  <Progress value={progressoIA} className="h-3 bg-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
