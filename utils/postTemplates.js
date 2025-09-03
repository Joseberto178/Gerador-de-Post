function getPostTemplates(category) {
  const templates = {
    mindset: [
      {
        category: 'Mindset',
        icon: 'brain',
        gradient: 'from-purple-500 to-pink-500',
        text: `🧠 A diferença entre ricos e pobres?

O MINDSET.

Enquanto uns reclamam da situação, outros CRIAM oportunidades.

Enquanto uns gastam, outros INVESTEM.

Enquanto uns desistem, outros PERSISTEM.

Sua mente é sua maior riqueza.
Invista nela todos os dias.

👇 Segue pra crescer comigo`,
        hashtags: ['#mentebilionaria', '#mindset', '#crescimento', '#sucesso', '#empreendedorismo']
      },
      {
        category: 'Mindset',
        icon: 'brain',
        gradient: 'from-blue-500 to-purple-500',
        text: `💭 REPROGRAME SUA MENTE:

❌ "Não tenho dinheiro"
✅ "Como posso gerar mais renda?"

❌ "É muito arriscado"
✅ "Quais são as oportunidades?"

❌ "Não sei por onde começar"
✅ "Vou aprender e começar pequeno"

Mude suas perguntas,
mude sua vida.

🚀 A jornada começa na mente`,
        hashtags: ['#mindsetbilionario', '#reprogramacao', '#mudanca', '#crescimento']
      }
    ],
    growth: [
      {
        category: 'Crescimento',
        icon: 'trending-up',
        gradient: 'from-green-500 to-emerald-500',
        text: `📈 MINHA EVOLUÇÃO EM TEMPO REAL:

Mês 1: Estudando 2h por dia
Mês 2: Primeiro resultado: R$ 500
Mês 3: Otimizando estratégias
Mês 4: R$ 2.000 em vendas
Mês 5: Escalando o negócio
Mês 6: R$ 8.000 de faturamento

A jornada continua...
E você pode acompanhar tudo aqui!

🔥 Transparência total no processo`,
        hashtags: ['#crescimento', '#jornada', '#resultados', '#transparencia', '#evolucao']
      },
      {
        category: 'Crescimento',
        icon: 'trending-up',
        gradient: 'from-orange-500 to-red-500',
        text: `🎯 3 PILARES DO MEU CRESCIMENTO:

1️⃣ EDUCAÇÃO FINANCEIRA
→ 1h de estudo por dia

2️⃣ NETWORKING ESTRATÉGICO  
→ Conectar com quem já chegou lá

3️⃣ AÇÃO CONSISTENTE
→ Pequenos passos todos os dias

Não existe fórmula mágica.
Existe DISCIPLINA.

📚 Qual pilar você vai fortalecer hoje?`,
        hashtags: ['#disciplina', '#educacaofinanceira', '#networking', '#acao', '#crescimento']
      }
    ],
    money: [
      {
        category: 'Dinheiro',
        icon: 'dollar-sign',
        gradient: 'from-yellow-500 to-orange-500',
        text: `💰 A VERDADE SOBRE DINHEIRO:

Dinheiro não é o objetivo final.
É uma FERRAMENTA.

Uma ferramenta para:
✅ Liberdade de escolha
✅ Segurança para a família
✅ Possibilidade de ajudar outros
✅ Tempo para o que importa

Pare de demonizar o dinheiro.
Aprenda a multiplicá-lo.

🎯 Foque na criação de valor`,
        hashtags: ['#dinheiro', '#liberdadefinanceira', '#valor', '#multiplicacao', '#ferramentas']
      }
    ],
    motivation: [
      {
        category: 'Motivação',
        icon: 'zap',
        gradient: 'from-red-500 to-pink-500',
        text: `🔥 SEGUNDA-FEIRA = NOVA OPORTUNIDADE

Enquanto outros reclamam da segunda,
eu celebro mais uma chance de:

📈 Crescer
💪 Evoluir  
🎯 Conquistar
🚀 Acelerar

Sua semana começa com que energia?

A diferença entre vencedores e perdedores está na ATITUDE com que encaram cada novo dia.

⚡ Vamos quebrar recordes essa semana!`,
        hashtags: ['#motivacao', '#segundafeira', '#energia', '#atitude', '#vencedores']
      }
    ],
    success: [
      {
        category: 'Sucesso',
        icon: 'trophy',
        gradient: 'from-amber-500 to-yellow-500',
        text: `🏆 O QUE APRENDI CHEGANDO AO TOPO:

1. Sucesso não é sorte, é SISTEMA
2. Falhas são dados, não fracassos  
3. Disciplina vence talento
4. Networking é TUDO
5. Mentalidade de abundância atrai abundância

O caminho é longo, mas cada passo vale a pena.

🚀 Em breve: o curso que virou a chave
Tudo que aprendi em uma jornada estruturada.

👇 Segue pra não perder`,
        hashtags: ['#sucesso', '#sistema', '#disciplina', '#abundancia', '#curso']
      }
    ]
  };

  return templates[category] || templates.mindset;
}