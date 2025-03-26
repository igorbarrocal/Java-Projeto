// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Agendamento Médico',
  description: 'Selecione um horário para sua consulta',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f6f6f6] text-gray-900">{children}</body>
    </html>
  );
}
