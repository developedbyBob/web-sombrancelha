# Design de Sobrancelhas - Website Profissional

## Visão Geral

Site profissional para Giselle Silva, designer de sobrancelhas especializada, desenvolvido com Next.js e Tailwind CSS.

**Site ao vivo:** [https://web-sombrancelha.vercel.app/](https://web-sombrancelha.vercel.app/)

## Sobre o Projeto

Este é um site moderno e responsivo criado para uma designer de sobrancelhas. O objetivo do projeto é oferecer uma presença online profissional que apresente os serviços oferecidos, demonstre o portfolio de trabalhos e facilite o agendamento de consultas.

## Características

- **Design Moderno**: Interface contemporânea com animações suaves e elementos visuais atrativos
- **Layout Responsivo**: Experiência otimizada em dispositivos móveis, tablets e desktops
- **Navegação Intuitiva**: Estrutura clara que facilita o acesso às informações
- **Formulário de Agendamento**: Sistema interativo para marcação de horários
- **Integração com WhatsApp**: Comunicação direta via WhatsApp para confirmação de agendamentos
- **Galeria de Trabalhos**: Demonstração visual dos resultados com exemplos de antes e depois
- **Seção de Depoimentos**: Feedback de clientes para construção de credibilidade
- **FAQ Interativo**: Perguntas frequentes com respostas expansíveis
- **Otimização SEO**: Estrutura semântica para melhor indexação nos motores de busca

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para renderização híbrida (SSR/CSR)
- [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces de usuário
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida
- [React DatePicker](https://reactdatepicker.com/) - Componente para seleção de datas no agendamento
- [date-fns](https://date-fns.org/) - Biblioteca para manipulação de datas
- [Vercel](https://vercel.com/) - Plataforma para hospedagem e deployment

## Instalação e Uso

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/web-sombrancelha.git
   cd web-sombrancelha
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
# ou
yarn build
```

## Estrutura do Projeto

```
web-sombrancelha/
├── app/                    # Diretório principal da aplicação
│   ├── components/         # Componentes React reutilizáveis
│   ├── globals.css         # Estilos globais da aplicação
│   ├── layout.js           # Layout principal
│   ├── page.js             # Página inicial
│   ├── privacidade/        # Página de política de privacidade
│   └── termos/             # Página de termos de serviço
├── public/                 # Arquivos estáticos (imagens, etc.)
├── .eslintrc.json          # Configurações do ESLint
├── next.config.mjs         # Configurações do Next.js
├── package.json            # Dependências e scripts
├── postcss.config.js       # Configurações do PostCSS
└── tailwind.config.js      # Configurações do Tailwind CSS
```

## Implantação

O projeto está implantado na Vercel, que oferece:
- Implantação contínua a partir do GitHub
- Certificados SSL automáticos
- CDN global para entrega rápida
- Monitoramento de performance

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

- Desenvolvedor: [Bob](https://github.com/developedbyBob)
- Designer de Sobrancelhas: [Giselle Silva](https://www.instagram.com/giih_silv44/)

---

Projeto desenvolvido com ❤️ para proporcionar uma presença online de qualidade para profissionais da beleza.