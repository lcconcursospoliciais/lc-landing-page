"use client";

import { useEffect, useState } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5586921405076";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const plans = [
  { name: "Essencial", price: "R$ 39,90", access: "2 meses", label: "Para começar", features: ["Banco de questões", "Filtros por concurso", "Comentários", "Desempenho"], message: "Olá! Tenho interesse no Plano Essencial da LC Concursos Policiais, no valor de R$ 39,90." },
  { name: "Estratégico", price: "R$ 69,90", access: "2 meses", label: "Mais vendido", popular: true, features: ["Tudo do Essencial", "Caderno de erros", "Revisões automáticas", "Pontos fracos"], message: "Olá! Tenho interesse no Plano Estratégico da LC Concursos Policiais, no valor de R$ 69,90." },
  { name: "Completo", price: "R$ 99,90", access: "3 meses", label: "Melhor custo-benefício", featured: true, features: ["Tudo do Estratégico", "Cronograma personalizado", "Plano de estudo", "Reorganização automática"], message: "Olá! Tenho interesse no Plano Completo da LC Concursos Policiais, no valor de R$ 99,90 e com 3 meses de acesso." },
];

const generalMessage = "Olá! Conheci a LC Concursos Policiais pela página e gostaria de saber qual plano é mais indicado para mim.";

function DemoFrame({ type }: { type: "questions" | "errors" | "schedule" | "analytics" | "mentor" }) {
  if (type === "questions") return <div className="screen-card questions-ui"><div className="screen-bar"><b>Banco de questões</b><span>1.248 disponíveis</span></div><div className="filter-row"><i>Concurso</i><i>Disciplina</i><i>Assunto</i></div><div className="question-box"><small>QUESTÃO 124</small><h4>Sobre os princípios aplicáveis à Administração Pública, assinale a alternativa correta.</h4><p>A) Legalidade, impessoalidade, moralidade, publicidade e eficiência.</p><p>B) Apenas legalidade e publicidade.</p><button>RESPONDER QUESTÃO</button></div></div>;
  if (type === "errors") return <div className="screen-card errors-ui"><div className="screen-bar"><b>Caderno de erros</b><span>Revisão automática</span></div><div className="error-stats"><div><strong>32</strong><small>Erros salvos</small></div><div><strong>18</strong><small>Revisados</small></div><div><strong>78%</strong><small>Evolução</small></div></div><div className="review-list"><p><span>Direito Penal</span><b>Revisar hoje</b></p><p><span>Constitucional</span><b>Em 2 dias</b></p><p><span>Legislação PM</span><b>Em 4 dias</b></p></div></div>;
  if (type === "schedule") return <div className="screen-card schedule-ui"><div className="screen-bar"><b>Cronograma da semana</b><span>Atualizado agora</span></div><div className="calendar"><div><b>SEG</b><span>Português</span><span>40 questões</span></div><div><b>TER</b><span>Direito Penal</span><span>Lei seca</span></div><div className="today"><b>QUA</b><span>Legislação</span><span>Revisão</span></div><div><b>QUI</b><span>RLM</span><span>30 questões</span></div><div><b>SEX</b><span>Simulado</span><span>1h30</span></div></div><button className="readapt">READAPTAR CRONOGRAMA</button></div>;
  if (type === "analytics") return <div className="screen-card analytics-ui"><div className="screen-bar"><b>Seu desempenho</b><span>Últimos 30 dias</span></div><div className="analytics-top"><div><small>Questões</small><strong>1.248</strong></div><div><small>Acertos</small><strong>82%</strong></div><div><small>Sequência</small><strong>12 dias</strong></div></div><div className="bars"><i style={{height:"42%"}}/><i style={{height:"55%"}}/><i style={{height:"48%"}}/><i style={{height:"68%"}}/><i style={{height:"73%"}}/><i style={{height:"88%"}}/><i style={{height:"82%"}}/></div></div>;
  return <div className="screen-card mentor-ui"><div className="mentor-avatar">LC</div><div><small>ACOMPANHAMENTO SEMANAL</small><h4>Orientação para corrigir sua rota e manter a constância.</h4><p>Metas, ajustes do cronograma e direcionamento de acordo com seu desempenho.</p><div className="mentor-tags"><span>Metas semanais</span><span>Análise individual</span><span>Suporte humano</span></div></div></div>;
}

function VisualDemo({ type }: { type: "questions" | "errors" | "schedule" | "analytics" }) {
  return <div className="visual-demo"><div className="demo-window"><div className="shot-browser"><i/><i/><i/><span>app.lcconcursos.com.br</span></div><DemoFrame type={type}/></div></div>;
}

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const direction = window.scrollY >= lastScrollY ? "down" : "up";
      document.documentElement.dataset.scrollDirection = direction;
      lastScrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      const direction = document.documentElement.dataset.scrollDirection || "down";
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        section.classList.toggle("from-up", direction === "up");
        section.classList.toggle("from-down", direction !== "up");
        section.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: [0.18, 0.42, 0.68], rootMargin: "-8% 0px -8% 0px" });

    sections.forEach((section) => {
      section.classList.add("reveal-section", "from-down");
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="snap-page">
      <div className="scroll-progress" style={{width: `${progress}%`}} />
      <header className="topbar"><a className="brand" href="#inicio"><span className="brand-mark">LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></a><a className="top-cta" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">QUERO CONHECER A PLATAFORMA</a></header>
      <nav className="scroll-dots" aria-label="Navegação entre seções"><a href="#inicio"/><a href="#numeros"/><a href="#questoes"/><a href="#erros"/><a href="#cronograma"/><a href="#desempenho"/><a href="#mentoria"/><a href="#planos"/><a href="#faq"/></nav>

      <section className="snap-section hero-screen" id="inicio"><div className="orb orb-one"/><div className="section-inner hero-layout"><div className="copy"><span className="kicker">PREPARAÇÃO PARA CONCURSOS POLICIAIS</span><h1>Mais que uma plataforma de questões.</h1><p>Um sistema completo com cronograma personalizado, banco de questões, caderno de erros e acompanhamento para você estudar com direção e conquistar sua vaga.</p><div className="actions"><a className="primary" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">COMEÇAR MINHA PREPARAÇÃO</a><a className="secondary" href="#questoes">VER COMO FUNCIONA ↓</a></div><div className="trust-inline"><span>✓ Acesso imediato</span><span>✓ 100% online</span><span>✓ Suporte humano</span></div></div><div className="hero-visual"><div className="hero-demo"><DemoFrame type="analytics"/></div></div></div></section>

      <section className="stats-section" id="numeros"><div className="section-inner stats-grid"><div><strong>+4.000</strong><span>questões</span></div><div><strong>100%</strong><span>online</span></div><div><strong>3</strong><span>planos de acesso</span></div><div><strong>1</strong><span>sistema completo</span></div></div></section>

      <section className="snap-section light-screen" id="questoes"><div className="section-number">01</div><div className="section-inner feature-layout"><div className="copy dark"><span className="kicker blue">QUESTÕES DIRECIONADAS</span><h2>Pratique exatamente o que pode cair na sua prova.</h2><p>Escolha concurso, disciplina, assunto e banca. Resolva questões comentadas e acompanhe seu rendimento sem perder tempo procurando material.</p><ul><li>Filtros inteligentes</li><li>Questões por concurso</li><li>Comentários didáticos</li></ul></div><VisualDemo type="questions"/></div></section>

      <section className="snap-section navy-screen" id="erros"><div className="section-number">02</div><div className="section-inner feature-layout reverse"><VisualDemo type="errors"/><div className="copy"><span className="kicker">CADERNO DE ERROS</span><h2>Seus erros viram um plano de revisão.</h2><p>A plataforma salva automaticamente as questões erradas e organiza as próximas revisões para você não repetir os mesmos erros na prova.</p><ul><li>Registro automático</li><li>Revisões programadas</li><li>Evolução por disciplina</li></ul></div></div></section>

      <section className="snap-section soft-screen" id="cronograma"><div className="section-number">03</div><div className="section-inner feature-layout"><div className="copy dark"><span className="kicker blue">CRONOGRAMA PERSONALIZADO</span><h2>Saiba o que estudar todos os dias.</h2><p>Seu tempo disponível vira um plano claro, com metas e reorganização automática quando a rotina mudar.</p><ul><li>Plano por data da prova</li><li>Metas diárias</li><li>Readaptação automática</li></ul></div><VisualDemo type="schedule"/></div></section>

      <section className="snap-section blue-screen" id="desempenho"><div className="section-number">04</div><div className="section-inner feature-layout reverse"><VisualDemo type="analytics"/><div className="copy"><span className="kicker">EVOLUÇÃO INDIVIDUAL</span><h2>Veja onde você está evoluindo e onde precisa reagir.</h2><p>Gráficos mostram questões, acertos, atividades, pontos fracos e aproveitamento por disciplina.</p><ul><li>Acertos e erros</li><li>Rendimento por disciplina</li><li>Progresso semanal</li></ul></div></div></section>

      <section className="snap-section dark-screen" id="mentoria"><div className="section-number">05</div><div className="section-inner feature-layout"><div className="copy"><span className="kicker">ACOMPANHAMENTO HUMANO</span><h2>Tecnologia para organizar. Orientação para não perder o rumo.</h2><p>Tenha metas, análise individual e contato com o mentor para ajustar sua preparação.</p><a className="primary gold" href={whatsappLink("Olá! Tenho interesse na Mentoria Premium da LC Concursos Policiais.")} target="_blank" rel="noreferrer">CONHECER A MENTORIA</a></div><div className="mentor-brand-visual"><div className="emblem">LC</div><DemoFrame type="mentor"/></div></div></section>

      <section className="snap-section plans-screen" id="planos"><div className="section-inner plans-inner"><div className="plans-heading"><span className="kicker blue">ESCOLHA SEU PLANO</span><h2>Comece agora.</h2><p>Escolha o nível de direção que você precisa para avançar.</p></div><div className="plans-grid">{plans.map(plan=><article className={`plan ${plan.featured?"featured":""}`} key={plan.name}>{(plan.popular||plan.featured)&&<span className="badge">{plan.label}</span>}<small className="plan-label">{plan.label}</small><h3>{plan.name}</h3><strong>{plan.price}</strong><small>{plan.access} de acesso</small><ul>{plan.features.map(item=><li key={item}>✓ {item}</li>)}</ul><a href={whatsappLink(plan.message)} target="_blank" rel="noreferrer">QUERO ESTE PLANO</a></article>)}</div><div className="guarantees"><span>✓ Acesso imediato</span><span>✓ Atualizações no período contratado</span><span>✓ Suporte da equipe</span><span>✓ Pagamento seguro</span></div><p className="plans-note">Pagamento único. Atendimento e contratação diretamente pelo WhatsApp.</p></div></section>

      <section className="faq-section" id="faq"><div className="section-inner faq-inner"><div><span className="kicker">PERGUNTAS FREQUENTES</span><h2>Tire suas dúvidas.</h2></div><div className="faq-list"><details><summary>O acesso é imediato?</summary><p>Sim. Após a confirmação da contratação, você recebe as orientações de acesso à plataforma.</p></details><details><summary>Posso acessar pelo celular?</summary><p>Sim. A plataforma funciona em celular, tablet, notebook e computador.</p></details><details><summary>O pagamento é mensal?</summary><p>Não. Os valores exibidos correspondem ao período completo de acesso de cada plano.</p></details><details><summary>Qual plano é mais indicado para mim?</summary><p>O plano Essencial é focado em questões; o Estratégico acrescenta caderno de erros e revisões; o Completo inclui também cronograma personalizado.</p></details></div></div></section>

      <footer><div className="section-inner footer-grid"><div><div className="brand"><span className="brand-mark">LC</span><b>LC CONCURSOS <em>POLICIAIS</em></b></div><p>Preparação inteligente para concursos policiais.</p></div><div><b>CONTATO</b><a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://instagram.com/lcconcursos01" target="_blank" rel="noreferrer">Instagram</a></div><div><b>INFORMAÇÕES</b><span>Termos de uso</span><span>Política de privacidade</span></div></div><div className="copyright">© 2026 LC Concursos Policiais. Todos os direitos reservados.</div></footer>

      <a className="back-top" href="#inicio" aria-label="Voltar ao topo">↑</a>
      <a className="whatsapp-float" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">WHATSAPP</a>
    </main>
  );
}
