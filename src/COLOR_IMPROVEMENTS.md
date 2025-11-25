# Melhorias de Contraste de Cores

## Paleta Atualizada para Melhor Contraste

### Substituições Globais Recomendadas:

**Backgrounds:**
- `bg-[#0f1419]` → `bg-[#111827]` (backgrounds terciários/inputs)
- `bg-[#1a2332]` → `bg-[#1f2937]` (cards e componentes)
- Background principal: `bg-[#0a0e13]`

**Bordas:**
- `border-gray-800` → `border-gray-700` (melhor contraste)
- `border-gray-700` → `border-gray-600` (bordas de inputs)

**Textos:**
- `text-gray-400` → `text-gray-300` (texto secundário)
- `text-gray-300` → `text-gray-200` (labels importantes)
- `text-gray-500` → `text-gray-400` (texto terciário)

**Placeholders:**
- Adicionar `placeholder:text-gray-400` em inputs

## Níveis de Contraste WCAG

### Cores de Fundo:
- **#0a0e13** - Background principal (mais escuro)
- **#111827** - Inputs e elementos internos (gray-900)
- **#1f2937** - Cards e containers (gray-800)
- **#374151** - Borders e divisores (gray-700)

### Cores de Texto:
- **#ffffff** - Texto principal (branco puro)
- **#e5e7eb** - Labels e texto secundário (gray-200)
- **#d1d5db** - Texto secundário (gray-300)
- **#9ca3af** - Texto terciário/mutado (gray-400)

## Aplicação em Componentes:

Todos os componentes foram atualizados para usar:
- Fundos mais escuros e distintos (#0a0e13 para app, #1f2937 para cards)
- Texto mais claro (gray-200/300 em vez de gray-400/500)
- Bordas mais visíveis (gray-700 em vez de gray-800)
- Placeholders apropriados (gray-400)

Isso garante ratio de contraste de pelo menos 4.5:1 conforme WCAG AA standards.
