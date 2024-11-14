const dados = [
    {
        id: 1,
        titulo: "Sistema de Gestão Escolar",
        texto: "Um sistema para facilitar a gestão de informações escolares, como notas, frequência e turmas.",
        textoPequeno: "Um sistema para facilitar a gestão de informações escolares[...]",
        imagem: "https://images.unsplash.com/photo-1684987643742-97af60cf7dc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Carlos Silva, Marina Sousa, João Lima",
        data: "10/02/2023",
        tecnologias: "PHP, MySQL, CSS",
    },
    {
        id: 2,
        titulo: "Aplicativo de Clima",
        texto: "Aplicativo que mostra informações em tempo real sobre o clima e condições meteorológicas.",
        textoPequeno: "Aplicativo que mostra informações em tempo real sobre o clima[...]",
        imagem: "https://wallpapercave.com/wp/wp13752071.jpg",
        membros: "Beatriz Fernandes, Lucas Amaral, Fernanda Pinto",
        data: "15/05/2023",
        tecnologias: "React Native, API OpenWeather, JavaScript",
    },
    {
        id: 3,
        titulo: "Plataforma de E-commerce",
        texto: "Uma plataforma para vendas online com gerenciamento de produtos e integração com pagamentos.",
        textoPequeno: "Uma plataforma para vendas online com gerenciamento de produtos[...]",
        imagem: "https://wallpapercave.com/wp/wp3537543.jpg",
        membros: "André Melo, Patrícia Costa, Tiago Souza",
        data: "20/08/2023",
        tecnologias: "Node.js, Express, MongoDB",
    },
    {
        id: 4,
        titulo: "Gerenciador de Tarefas",
        texto: "Aplicativo para organização de tarefas pessoais e profissionais com notificações e status.",
        textoPequeno: "Aplicativo para organização de tarefas pessoais e profissionais[...]",
        imagem: "https://wallpapercave.com/wp/wp13054590.jpg",
        membros: "Rafaela Silva, Pedro Gonçalves, Vanessa Oliveira",
        data: "30/09/2023",
        tecnologias: "Vue.js, Firebase, Bootstrap",
    },
    {
        id: 5,
        titulo: "Portal de Notícias",
        texto: "Portal com publicações de notícias atualizadas, integrando API de conteúdo e layout responsivo.",
        textoPequeno: "Portal com publicações de notícias atualizadas[...]",
        imagem: "https://wallpapercave.com/wp/wp12182056.jpg",
        membros: "Júlia Nunes, Gabriel Ferreira, Daniel Mendes",
        data: "10/11/2023",
        tecnologias: "Django, PostgreSQL, Tailwind CSS",
    },
    {
        id: 6,
        titulo: "Sistema de Gestão de Estoque",
        texto: "Um sistema para gerenciar inventário, controlar entradas e saídas de produtos, e gerar relatórios em tempo real.",
        textoPequeno: "Gerenciamento de estoque com controle de entradas e saídas[...]",
        imagem:"https://media.istockphoto.com/id/2154841694/pt/foto/businessmen-or-manager-use-a-digital-tablet-to-check-the-stock-inventory-on-shelves-in-large.webp?a=1&b=1&s=612x612&w=0&k=20&c=thsKWd9ghwZxIeXB9JhgV90IY4q0KexziWhjW32BCPY=",
        membros: "Mariana Silva, João Ferreira, Luciana Almeida",
        data: "15/05/2023",
        tecnologias: "Python, Django, PostgreSQL"
    },

    {
        id: 7,
        titulo: "Aplicativo de Saúde e Bem-estar",
        texto: "Aplicativo móvel que oferece acompanhamento de hábitos saudáveis, monitoramento de atividades físicas, e suporte de metas personalizadas.",
        textoPequeno:  "Acompanhamento de saúde com monitoramento de atividades[...]",
        imagem: "https://plus.unsplash.com/premium_photo-1675808577247-2281dc17147a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Fernanda Moreira, Carlos Lima, Roberta Santos",
        data: "02/07/2023",
        tecnologias: "React Native, Firebase, Redux",
    },
    {
        id: 8,
        titulo: "Sistema de Reservas de Hotéis",
        texto: "Plataforma que permite reservas de hotéis, visualização de disponibilidade, e comparativo de preços em tempo real.",
        textoPequeno: "Sistema de reservas e visualização de disponibilidade[...]",
        imagem: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        membros: "Bruno Nunes, Sara Freitas, Miguel Amaral",
        data: "25/09/2023",
        tecnologias: "Java, Spring Boot, Oracle Database",
    },
    {
        id:9,
        titulo:  "Sistema de Atendimento ao Cliente com Chatbot",
        texto: "Sistema de atendimento automatizado para sites e redes sociais, com chatbot para respostas rápidas e encaminhamento a atendentes humanos quando necessário.",
        textoPequeno: "Sistema de atendimento com chatbot e encaminhamento[...]",
        imagem: "https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXRlbmRpbWVudG8lMjBhbyUyMGNsaWVudGV8ZW58MHx8MHx8fDA%3D",
        membros: "Sofia Lima, Pedro Teixeira, Amanda Borges",
        data:  "18/09/2023",
        tecnologias: "Python, TensorFlow, Twilio API",
    },
    {
        id: 10,
        titulo: "Plataforma de Gestão de Projetos Colaborativa",
        texto: "Uma plataforma para gerenciamento de projetos que permite colaboração entre equipes, acompanhamento de tarefas e monitoramento de progresso em tempo real.",
        textoPequeno: "Gestão de projetos com colaboração e acompanhamento de progresso[...]",
        imagem: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VzdGFvJTIwZGUlMjBwcm9qZXRvcyUyMGNvbGFib3JhdGl2YXxlbnwwfHwwfHx8MA%3D%3D",
        membros: "Beatriz Silva, Marcelo Santos, Renata Oliveira",
        data: "30/10/2023",
        tecnologias: "Angular, Node.js, PostgreSQL, Socket.io",
    },
    {
        id: 11,
        titulo: "Aplicativo de Tarefas com Autenticação",
        texto: "Um aplicativo de lista de tarefas onde os usuários podem se registrar, fazer login, adicionar, editar e excluir tarefas. Use autenticação JWT para proteger as rotas e armazenar as tarefas de cada usuário.",
        textoPequeno: "Um aplicativo de lista de tarefas onde os usuários podem[...]",
        imagem: "https://plus.unsplash.com/premium_vector-1731065128724-03f35bca9df7?q=80&w=2408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "João Ferreira, Gabriel da Silva, Caio de Sá",
        data: "03/06/2022",
        tecnologias: "Node.js, Express, MongoDB, React",
    },
    {
        id: 12,
        titulo: "Chat em Tempo Real",
        texto: "Um sistema de chat onde os usuários podem se comunicar em tempo real, com opção de criar salas de chat privadas e enviar mensagens diretas. Inclua notificações para mensagens novas.",
        textoPequeno: "Um sistema de chat onde os usuários podem se comunicar em tempo real[...]",
        imagem: "https://plus.unsplash.com/premium_photo-1718641527614-8edd0ca13235?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Gabriella Pereira, Juliana Souza, Carla Carvalho, Carol Cariello",
        data: "12/10/2023",
        tecnologias: "Node.js, Socket.io, Express, MongoDB, React",
    },
    {
        id: 13,
        titulo: "Calculadora Nutricional",
        texto: "Um aplicativo que permite que o usuário adicione alimentos e veja informações nutricionais detalhadas, podendo também sugerir refeições com base nos dados inseridos.",
        textoPequeno: "Um aplicativo que permite que o usuário adicione alimentos e veja informações[...]",
        imagem: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Guilherme Peixoto, Jéssica Nunes, Roberto Carlos, Amanda Pinho",
        data: "16/11/2023",
        tecnologias: "Python, Django, HTML, CSS, JavaScript",
    },
    {
        id: 14,
        titulo: "Dashboard de Análise de Dados de Vendas",
        texto: "Um dashboard que apresenta gráficos e tabelas interativas de dados de vendas de uma loja fictícia, exibindo métricas como total de vendas, produtos mais vendidos e análise de clientes.",
        textoPequeno: "Um dashboard que apresenta gráficos e tabelas interativas[...]",
        imagem: "https://plus.unsplash.com/premium_photo-1720091339077-d0f56397a0c9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Pedro Seixas, João Nascimento, João Carvalho, Pedro Costa",
        data: "23/04/2021",
        tecnologias: "Python, Django, Chart.js",
    },
    {
        id: 15,
        titulo: "Sistema de Notas para Estudantes",
        texto: "Uma aplicação onde estudantes e professores podem gerenciar notas. Professores podem adicionar notas para cada estudante e alunos podem ver seu desempenho.",
        textoPequeno: "Uma aplicação onde estudantes e professores podem gerenciar notas[...]",
        imagem: "https://plus.unsplash.com/premium_vector-1722917987960-6d87026961a9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Aloísio Chulapa, Sarah Moreira, Matheus Moreira, Eduardo Romualdo",
        data: "04/01/2024",
        tecnologias: "PHP, MySQL, HTML, CSS, JavaScript",
    },
    {
        id: 16,
        titulo: "Sistema de Monitoramento de Plantas",
        texto: "Sistema IoT que monitora a saúde das plantas, incluindo umidade do solo, luminosidade e temperatura, enviando alertas para cuidados necessários.",
        textoPequeno: "Sistema IoT que monitora a saúde das plantas, incluindo umidade[...]",
        imagem: "https://plus.unsplash.com/premium_photo-1711238064720-af60134e892f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Ricardo Flores, Ana Paula, Paulo Jardim",
        data: "15/03/2024",
        tecnologias: "Arduino, Raspberry Pi, Python, MQTT",
    },
    {
        id: 17,
        titulo: "Plataforma de Podcasts Educacionais",
        texto: "Sistema de hospedagem e distribuição de podcasts voltados para educação, com categorização por disciplinas e níveis de ensino.",
        textoPequeno: "Sistema de hospedagem e distribuição de podcasts voltados para educação[...]",
        imagem: "https://images.unsplash.com/photo-1559523275-98fb3c56faf6?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Mariana Santos, Felipe Gabriel, Renata Gomes",
        data: "22/07/2023",
        tecnologias: "AWS S3, React, Node.js, FFmpeg",
    },
    {
        id: 18,
        titulo: "Marketplace de Artesanato Local",
        texto: "Plataforma para conectar artesãos locais com compradores, facilitando a venda e divulgação de produtos artesanais.",
        textoPequeno: "Plataforma para conectar artesãos locais com compradores[...]",
        imagem: "https://images.unsplash.com/photo-1695747001618-ea0999a6f41f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Clara Martins, Roberto Pereira, Lucia Santos",
        data: "08/12/2023",
        tecnologias: "Ruby on Rails, PostgreSQL, Stripe API",
    },
    {
        id: 19,
        titulo: "Assistente Virtual para Idosos",
        texto: "Aplicativo com interface simplificada para auxiliar idosos em tarefas diárias, lembretes de medicamentos e chamadas de emergência.",
        textoPequeno: "Aplicativo com interface simplificada para auxiliar idosos[...]",
        imagem: "https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Teresa Lucas, Miguel Dos Anjos, Sandra Tavares",
        data: "19/01/2024",
        tecnologias: "Flutter, Firebase, TensorFlow Lite",
    },
    {
        id: 20,
        titulo: "Rede Social para Pets",
        texto: "Plataforma onde donos de pets podem criar perfis para seus animais, compartilhar fotos e encontrar outros pets para socialização.",
        textoPequeno: "Plataforma onde donos de pets podem criar perfis para seus animais[...]",
        imagem: "https://images.unsplash.com/photo-1601758063890-1167f394febb?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        membros: "Bruno Souza, Camila Silva, Diego Lisboa",
        data: "05/02/2024",
        tecnologias: "Kotlin, Spring Boot, Neo4j",
    },

]

export default dados