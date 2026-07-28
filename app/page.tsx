"use client";

import { useEffect, useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5586921405076";
const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const platformPlans = [
  {
    name: "Plano Essencial",
    price: "R$ 39,90",
    access: "2 meses de acesso",
    tone: "green",
    intro: "Ideal para quem quer treinar através de questões.",
    features: ["Banco de questões", "Comentários", "Estatísticas", "Filtros por disciplina"],
  },
  {
    name: "Plano Estratégico",
    price: "R$ 69,90",
    access: "2 meses de acesso",
    tone: "blue",
    intro: "Tudo do Plano Essencial, com revisão inteligente.",
    features: ["Caderno de erros automático", "Revisões automáticas", "Histórico de revisões"],
  },
  {
    name: "Plano Completo",
    price: "R$ 99,90",
    access: "3 meses de acesso",
    tone: "gold",
    featured: true,
    intro: "Tudo do Plano Estratégico, com organização total.",
    features: ["Cronograma personalizado", "Plano de estudos", "Organização automática", "Ajuste do cronograma", "Controle da evolução"],
  },
];

const premiumPlans = [
  ["🥉 3 meses", "R$ 200,00"],
  ["🥈 4 meses", "R$ 300,00"],
  ["🥇 6 meses", "R$ 400,00", "Melhor custo-benefício"],
  ["🏆 1 ano", "R$ 600,00", "Melhor investimento"],
];

const faq = [
  ["Posso escolher qualquer concurso?", "Sim. Você escolhe entre os concursos disponíveis na plataforma."],
  ["Preciso instalar algum programa?", "Não. Basta acessar pela internet no computador, tablet ou celular."],
  ["O cronograma é personalizado?", "Sim. Ele é criado de acordo com o concurso escolhido, sua disponibilidade e a data da prova."],
  ["Posso alterar meu plano depois?", "Sim. Você poderá fazer upgrade para um plano superior quando desejar."],
  ["Como acontece a mentoria?", "Os encontros são realizados uma vez por semana, com orientação individualizada para acompanhar sua evolução."],
];

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className="topbar">
        <a className="brand" href="#inicio"><span>LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></a>
        <a className="top-cta" href="#planos">ESCOLHER MEU PLANO</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">PREPARAÇÃO PARA CONCURSOS POLICIAIS</span>
            <h1>PARE DE ESTUDAR SEM DIREÇÃO.</h1>
            <p className="hero-subtitle">A plataforma que monta seu plano de estudos, organiza sua rotina e acompanha sua evolução até a aprovação.</p>
            <p className="hero-line">Escolha seu concurso. A plataforma faz o planejamento. Você só precisa estudar.</p>
            <div className="check-grid">
              {['Cronograma personalizado','Banco de questões específico','Caderno de erros inteligente','Revisões automáticas','Estatísticas de desempenho','Mentoria semanal no Premium'].map(item => <span key={item}>✓ {item}</span>)}
            </div>
            <div className="hero-actions">
              <a className="primary" href="#planos">🚀 QUERO COMEÇAR AGORA</a>
              <small>✅ Acesso imediato • Computador • Tablet • Celular</small>
            </div>
          </div>
          <div className="dashboard-mockup">
            <div className="mockup-top"><i/><i/><i/><span>app.lcconcursos.com.br</span></div>
            <div className="mockup-body">
              <div className="mini-card"><small>QUESTÕES RESPONDIDAS</small><strong>1.248</strong><span>+18% esta semana</span></div>
              <div className="mini-card"><small>PERCENTUAL DE ACERTOS</small><strong>82%</strong><span>Seu desempenho está subindo</span></div>
              <div className="chart"><b>EVOLUÇÃO SEMANAL</b><div>{[42,55,48,68,73,88,82].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div>
              <div className="schedule"><b>PRÓXIMAS TAREFAS</b><p><span>Português</span><strong>40 questões</strong></p><p><span>Direito Penal</span><strong>Revisão</strong></p><p><span>Legislação</span><strong>Lei seca</strong></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning"><div className="container">🎯 <b>Mais de uma plataforma de questões.</b> Um sistema completo de preparação para concursos policiais.</div></section>

      <section className="section pain">
        <div className="container two-col">
          <div><span className="eyebrow dark">O PROBLEMA</span><h2>VOCÊ ESTUDA, MAS TEM A SENSAÇÃO DE QUE NÃO ESTÁ EVOLUINDO?</h2><p>A maioria dos candidatos reprova porque estuda sem método. A LC Concursos foi criada para mudar isso.</p></div>
          <div className="pain-list">{['Não sabe por onde começar.','Não consegue organizar um cronograma.','Esquece rapidamente o conteúdo estudado.','Erra as mesmas questões várias vezes.','Não sabe quais disciplinas precisam de mais atenção.'].map(item=><p key={item}>✕ {item}</p>)}</div>
        </div>
      </section>

      <section className="section features">
        <div className="container"><div className="section-heading"><span className="eyebrow">TUDO EM UM ÚNICO LUGAR</span><h2>UMA PLATAFORMA DESENVOLVIDA PARA APROVAÇÃO EM CONCURSOS POLICIAIS</h2></div>
          <div className="feature-grid">
            {[
              ['📅','Cronograma Inteligente','Plano conforme concurso, edital, data da prova e tempo disponível. Se você perder um dia, o cronograma pode ser reorganizado.'],
              ['📚','Banco de Questões Direcionado','Questões por disciplina, assunto, banca e nível de dificuldade, com comentários para facilitar a aprendizagem.'],
              ['📒','Caderno de Erros Inteligente','Cada questão errada é salva automaticamente para você revisar exatamente aquilo em que possui dificuldade.'],
              ['🔄','Revisões Automáticas','A plataforma agenda revisões dos conteúdos estudados para reduzir o esquecimento e aumentar a retenção.'],
              ['📈','Painel de Desempenho','Acompanhe acertos, evolução por disciplina, questões resolvidas, evolução semanal e assuntos que precisam de reforço.'],
              ['👨🏻‍🏫','Mentoria Semanal','No Plano Premium, receba orientação individual para ajustar cronograma, estratégia e constância até a prova.']
            ].map(([icon,title,text])=><article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="container"><div className="section-heading"><span className="eyebrow">ESCOLHA O PLANO IDEAL</span><h2>COMECE NO NÍVEL DE DIREÇÃO QUE VOCÊ PRECISA.</h2><p>Todos os valores são de pagamento único.</p></div>
          <div className="plans-grid">
            {platformPlans.map(plan=><article className={`plan ${plan.featured?'featured':''} ${plan.tone}`} key={plan.name}>{plan.featured&&<span className="badge">🔥 MAIS ESCOLHIDO</span>}<h3>{plan.name}</h3><strong>{plan.price}</strong><small>{plan.access}</small><p>{plan.intro}</p><ul>{plan.features.map(f=><li key={f}>✓ {f}</li>)}</ul><a href={whatsappLink(`Olá! Tenho interesse no ${plan.name}, no valor de ${plan.price}.`)} target="_blank" rel="noreferrer">QUERO ESTE PLANO</a></article>)}
          </div>

          <article className="premium-plan">
            <div><span className="eyebrow">👑 PLANO MENTORIA PREMIUM</span><h2>A PREPARAÇÃO MAIS COMPLETA DA LC CONCURSOS.</h2><p>Todos os recursos da plataforma, com mentoria individual, encontro semanal, ajustes no cronograma, análise personalizada e direcionamento até a prova.</p><ul><li>✓ Mentoria individual</li><li>✓ Encontro semanal</li><li>✓ Ajustes no cronograma</li><li>✓ Análise personalizada</li><li>✓ Direcionamento até a prova</li></ul></div>
            <div className="premium-options">{premiumPlans.map(([period,price,label])=><div key={period}><span>{period}</span><strong>{price}</strong>{label&&<small>{label}</small>}</div>)}<a href={whatsappLink('Olá! Tenho interesse no Plano Mentoria Premium da LC Concursos Policiais.')} target="_blank" rel="noreferrer">QUERO A MENTORIA PREMIUM</a></div>
          </article>
        </div>
      </section>

      <section className="section how"><div className="container"><div className="section-heading"><span className="eyebrow dark">PASSO A PASSO</span><h2>COMO FUNCIONA?</h2></div><div className="steps">{[['1','Escolha seu concurso','Selecione um dos concursos disponíveis.'],['2','Escolha seu plano','Defina o nível de acompanhamento desejado.'],['3','Receba acesso imediato','Entre na plataforma e comece a estudar.'],['4','Evolua todos os dias','Siga seu cronograma e acompanhe o desempenho.']].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section reasons"><div className="container two-col"><div><span className="eyebrow">POR QUE A LC CONCURSOS?</span><h2>ORGANIZAÇÃO COMPLETA PARA QUEM QUER ESTUDAR COM MÉTODO.</h2></div><div className="reason-list">{['Plataforma exclusiva para concursos policiais.','Cronograma inteligente.','Banco de questões direcionado.','Revisões automáticas.','Caderno de erros.','Gráficos de evolução.','Mentoria especializada.'].map(item=><span key={item}>✓ {item}</span>)}</div></div></section>

      <section className="section audience"><div className="container"><div className="section-heading"><span className="eyebrow dark">PARA QUEM É</span><h2>ESSA PLATAFORMA É PARA VOCÊ QUE...</h2></div><div className="audience-grid">{['Vai iniciar os estudos.','Já estuda, mas está desorganizado.','Trabalha e possui pouco tempo.','Quer estudar sozinho com método.','Deseja acompanhamento especializado.'].map(item=><div key={item}>✓ {item}</div>)}</div></div></section>

      <section className="section faq"><div className="container faq-grid"><div><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>TIRE SUAS DÚVIDAS.</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="container"><span className="eyebrow">SUA APROVAÇÃO COMEÇA COM UMA DECISÃO.</span><h2>PARE DE ESTUDAR SEM DIREÇÃO.</h2><p>Tenha um plano organizado, resolva questões específicas do seu concurso, acompanhe sua evolução e prepare-se com estratégia.</p><a className="primary" href="#planos">🚀 ESCOLHA SEU PLANO E COMECE HOJE!</a></div></section>

      <footer><div className="container footer-grid"><div className="brand"><span>LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></div><div><b>CONTATO</b><a href={whatsappLink('Olá! Gostaria de saber mais sobre a LC Concursos Policiais.')} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com/lcconcursos01" target="_blank" rel="noreferrer">Instagram</a></div><div><b>INFORMAÇÕES</b><span>Termos de uso</span><span>Política de privacidade</span></div></div><p>© 2026 LC Concursos Policiais. Todos os direitos reservados.</p></footer>

      <a className="whatsapp-float" href={whatsappLink('Olá! Gostaria de conhecer os planos da LC Concursos Policiais.')} target="_blank" rel="noreferrer">WHATSAPP</a>
      <a className="back-top" href="#inicio">↑</a>
    </main>
  );
}
