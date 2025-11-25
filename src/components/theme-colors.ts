// Constantes de cor para melhor contraste e acessibilidade
export const colors = {
  // Backgrounds
  bgPrimary: 'bg-[#0a0e13]',        // Background principal - mais escuro
  bgSecondary: 'bg-[#1f2937]',       // Cards e componentes - cinza escuro com melhor contraste
  bgTertiary: 'bg-[#111827]',        // Inputs e elementos internos
  bgHover: 'hover:bg-[#374151]',     // Hover states
  
  // Borders
  borderPrimary: 'border-gray-700',  // Bordas principais - mais claras
  borderSecondary: 'border-gray-600', // Bordas de inputs
  borderHover: 'hover:border-gray-600',
  
  // Text
  textPrimary: 'text-white',         // Texto principal
  textSecondary: 'text-gray-200',    // Labels e textos importantes
  textTertiary: 'text-gray-300',     // Textos secundários
  textMuted: 'text-gray-400',        // Textos menos importantes
  textHover: 'hover:text-white',
  
  // Placeholders
  placeholder: 'placeholder:text-gray-400',
} as const;
