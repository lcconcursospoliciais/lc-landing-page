"use client";

import { useEffect, useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5586921405076";
const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const platformPlans = [
  { name: "Plano Essencial", price: "R$ 39,90", access: "2 meses de acesso", tone: "green", intro: "Ideal para quem quer treinar através de questões.", features: ["Banco de questões", "Comentários", "Estatísticas", "Filtros por disciplina"] },
  { name: "Plano Estratégico", price: "R$ 69,90", access: "2 meses de acesso", tone: "blue", intro: "Tudo do Plano Essencial, com revisão inteligente.", features: ["Caderno de erros automático", "Revisões automáticas", "Histórico de revisões"] },
  { name: "Plano Completo", price: "R$ 99,90", access: "3 meses de acesso", tone: "gold", featured: true, intro: "Tudo do Plano Estratégico, com organização total.", features: ["Cronograma personalizado", "Plano de estudos", "Organização automática", "Ajuste do cronograma", "Controle da evolução"] },
];

const premiumPlans = [["🥉 3 meses", "R$ 275,00"], ["🥈 4 meses", "R$ 325,00"], ["🥇 6 meses", "R$ 400,00", "Melhor custo-benefício"], ["🏆 1 ano", "R$ 600,00", "Melhor investimento"]];
const faq = [["Posso escolher qualquer concurso?", "Sim. Você escolhe entre os concursos disponíveis na plataforma."], ["Preciso instalar algum programa?", "Não. Basta acessar pela internet no computador, tablet ou celular."], ["O cronograma é personalizado?", "Sim. Ele é criado de acordo com o concurso escolhido, sua disponibilidade e a data da prova."], ["Posso alterar meu plano depois?", "Sim. Você poderá fazer upgrade para um plano superior quando desejar."], ["Como acontece a mentoria?", "Os encontros são realizados uma vez por semana, com orientação individualizada para acompanhar sua evolução."]];

const screens = {
  login: "/platform/login.png",
  desempenho: "/platform/desempenho.png",
  erros: "/platform/caderno-erros.png",
  cronograma: "/platform/cronograma.png",
  questoes: "/platform/resolver-questoes.png",
  errosDetalhe: "/platform/caderno-erros-detalhe.png",
};

function BrowserShot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`real-browser ${className}`}><div className="real-browser-bar"><i/><i/><i/><span>app.lcconcursos.com.br</span></div><img src={src} alt={alt} /></div>;
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => { const total = document.documentElement.scrollHeight - window.innerHeight; setProgress(total > 0 ? (window.scrollY / total) * 100 : 0); };
    updateProgress(); window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return <main>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className="topbar"><a className="brand" href="#inicio"><span>LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></a><a className="top-cta" href="#planos">ESCOLHER MEU PLANO</a></header>

    <section className="hero" id="inicio"><div className="hero-glow"/><div className="container hero-grid">
      <div><span className="eyebrow">PREPARAÇÃO PARA CONCURSOS POLICIAIS</span><h1>PARE DE ESTUDAR SEM DIREÇÃO.</h1><p className="hero-subtitle">A plataforma que monta seu plano de estudos, organiza sua rotina e acompanha sua evolução até a aprovação.</p><p className="hero-line">Escolha seu concurso. A plataforma faz o planejamento. Você só precisa estudar.</p><div className="check-grid">{["Cronograma personalizado","Banco de questões específico","Caderno de erros inteligente","Revisões automáticas","Estatísticas de desempenho","Mentoria semanal no Premium"].map(item => <span key={item}>✓ {item}</span>)}</div><div className="hero-actions"><a className="primary" href="#planos">🚀 QUERO COMEÇAR AGORA</a><small>✅ Acesso imediato • Computador • Tablet • Celular</small></div></div>
      <div className="real-hero-showcase"><BrowserShot src={screens.questoes} alt="Tela real do banco de questões da LC Concursos" className="hero-main-shot"/><BrowserShot src={screens.cronograma} alt="Tela real do cronograma personalizado" className="hero-float hero-cronograma"/><BrowserShot src={screens.desempenho} alt="Tela real do painel de desempenho" className="hero-float hero-desempenho"/><span className="real-badge">PLATAFORMA REAL EM AÇÃO</span></div>
    </div></section>

    <section className="positioning"><div className="container">🎯 <b>Mais de uma plataforma de questões.</b> Um sistema completo de preparação para concursos policiais.</div></section>

    <section className="section pain"><div className="container two-col"><div><span className="eyebrow dark">O PROBLEMA</span><h2>VOCÊ ESTUDA, MAS TEM A SENSAÇÃO DE QUE NÃO ESTÁ EVOLUINDO?</h2><p>A maioria dos candidatos reprova porque estuda sem método. A LC Concursos foi criada para mudar isso.</p></div><div className="pain-list">{["Não sabe por onde começar.","Não consegue organizar um cronograma.","Esquece rapidamente o conteúdo estudado.","Erra as mesmas questões várias vezes.","Não sabe quais disciplinas precisam de mais atenção."].map(item=><p key={item}>✕ {item}</p>)}</div></div></section>

    <section className="section platform-tour"><div className="container"><div className="section-heading"><span className="eyebrow">VEJA A PLATAFORMA POR DENTRO</span><h2>RECURSOS REAIS PARA ORGANIZAR TODA A SUA PREPARAÇÃO.</h2></div>
      <div className="tour-row"><div className="tour-copy"><span className="eyebrow">📅 CRONOGRAMA INTELIGENTE</span><h2>SAIBA EXATAMENTE O QUE ESTUDAR TODOS OS DIAS.</h2><p>O cronograma considera o concurso, o edital, a data da prova e o tempo disponível. As tarefas aparecem com prioridade, duração e meta diária.</p><ul><li>✓ Planejamento por data da prova</li><li>✓ Metas e prioridades</li><li>✓ Reorganização da rotina</li></ul></div><BrowserShot src={screens.cronograma} alt="Cronograma personalizado real da plataforma"/></div>
      <div className="tour-row reverse"><div className="tour-copy"><span className="eyebrow">📚 QUESTÕES DIRECIONADAS</span><h2>RESOLVA QUESTÕES DO EDITAL QUE VOCÊ ESCOLHEU.</h2><p>O aluno navega pela estrutura do edital e monta baterias personalizadas por disciplina, assunto e subassunto.</p><ul><li>✓ Questões por edital</li><li>✓ Filtros inteligentes</li><li>✓ Bateria personalizada</li></ul></div><BrowserShot src={screens.questoes} alt="Banco de questões real da plataforma"/></div>
      <div className="tour-row"><div className="tour-copy"><span className="eyebrow">📒 CADERNO DE ERROS</span><h2>CADA ERRO VIRA UMA REVISÃO INTELIGENTE.</h2><p>A plataforma salva os erros e agenda novas revisões. Ao acertar, o intervalo aumenta; ao errar novamente, a questão volta para o dia seguinte.</p><ul><li>✓ Método 24 horas, 7 dias e 30 dias</li><li>✓ Revisões automáticas</li><li>✓ Fila de revisão organizada</li></ul></div><BrowserShot src={screens.errosDetalhe} alt="Caderno de erros real da plataforma"/></div>
      <div className="tour-row reverse"><div className="tour-copy"><span className="eyebrow">📈 DESEMPENHO</span><h2>VEJA ONDE VOCÊ ESTÁ EVOLUINDO.</h2><p>O painel mostra acertos, aproveitamento, atividades concluídas, evolução recente e pontos que precisam de reforço.</p><ul><li>✓ Percentual de acertos</li><li>✓ Evolução em 7, 15 e 30 dias</li><li>✓ Status do cronograma</li></ul></div><BrowserShot src={screens.desempenho} alt="Painel real de desempenho da plataforma"/></div>
    </div></section>

    <section className="section access-section"><div className="container two-col"><BrowserShot src={screens.login} alt="Tela de login real da plataforma"/><div><span className="eyebrow">ACESSO SIMPLES E IMEDIATO</span><h2>ESTUDE NO COMPUTADOR, TABLET OU CELULAR.</h2><p>Não precisa instalar nenhum programa. Basta entrar com seu e-mail e senha para acessar sua preparação de qualquer lugar.</p><a className="primary" href="#planos">QUERO ACESSAR A PLATAFORMA</a></div></div></section>

    <section className="section plans-section" id="planos"><div className="container"><div className="section-heading"><span className="eyebrow">ESCOLHA O PLANO IDEAL</span><h2>COMECE NO NÍVEL DE DIREÇÃO QUE VOCÊ PRECISA.</h2><p>Todos os valores são de pagamento único.</p></div><div className="plans-grid">{platformPlans.map(plan=><article className={`plan ${plan.featured?"featured":""} ${plan.tone}`} key={plan.name}>{plan.featured&&<span className="badge">🔥 MAIS ESCOLHIDO</span>}<h3>{plan.name}</h3><strong>{plan.price}</strong><small>{plan.access}</small><p>{plan.intro}</p><ul>{plan.features.map(f=><li key={f}>✓ {f}</li>)}</ul><a href={whatsappLink(`Olá! Tenho interesse no ${plan.name}, no valor de ${plan.price}.`)} target="_blank" rel="noreferrer">QUERO ESTE PLANO</a></article>)}</div>
      <article className="premium-plan"><div><span className="eyebrow">👑 PLANO MENTORIA PREMIUM</span><h2>A PREPARAÇÃO MAIS COMPLETA DA LC CONCURSOS.</h2><p>Todos os recursos da plataforma, com mentoria individual, encontro semanal, ajustes no cronograma, análise personalizada e direcionamento até a prova.</p><ul><li>✓ Mentoria individual</li><li>✓ Encontro semanal</li><li>✓ Ajustes no cronograma</li><li>✓ Análise personalizada</li><li>✓ Direcionamento até a prova</li></ul></div><div className="premium-options">{premiumPlans.map(([period,price,label])=><div key={period}><span>{period}</span><strong>{price}</strong>{label&&<small>{label}</small>}</div>)}<a href={whatsappLink("Olá! Tenho interesse no Plano Mentoria Premium da LC Concursos Policiais.")} target="_blank" rel="noreferrer">QUERO A MENTORIA PREMIUM</a></div></article>
    </div></section>

    <section className="section how"><div className="container"><div className="section-heading"><span className="eyebrow dark">PASSO A PASSO</span><h2>COMO FUNCIONA?</h2></div><div className="steps">{[["1","Escolha seu concurso","Selecione um dos concursos disponíveis."],["2","Escolha seu plano","Defina o nível de acompanhamento desejado."],["3","Receba acesso imediato","Entre na plataforma e comece a estudar."],["4","Evolua todos os dias","Siga seu cronograma e acompanhe o desempenho."]].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="section faq"><div className="container faq-grid"><div><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>TIRE SUAS DÚVIDAS.</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="container"><span className="eyebrow">SUA APROVAÇÃO COMEÇA COM UMA DECISÃO.</span><h2>PARE DE ESTUDAR SEM DIREÇÃO.</h2><p>Tenha um plano organizado, resolva questões específicas do seu concurso, acompanhe sua evolução e prepare-se com estratégia.</p><a className="primary" href="#planos">🚀 ESCOLHA SEU PLANO E COMECE HOJE!</a></div></section>
    <footer><div className="container footer-grid"><div className="brand"><span>LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></div><div><b>CONTATO</b><a href={whatsappLink("Olá! Gostaria de saber mais sobre a LC Concursos Policiais.")} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com/lcconcursos01" target="_blank" rel="noreferrer">Instagram</a></div><div><b>INFORMAÇÕES</b><span>Termos de uso</span><span>Política de privacidade</span></div></div><p>© 2026 LC Concursos Policiais. Todos os direitos reservados.</p></footer>
    <a className="whatsapp-float" href={whatsappLink("Olá! Gostaria de conhecer os planos da LC Concursos Policiais.")} target="_blank" rel="noreferrer">WHATSAPP</a><a className="back-top" href="#inicio">↑</a>
  </main>;
}