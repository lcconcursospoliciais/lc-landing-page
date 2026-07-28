"use client";

import { useEffect } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5586921405076";

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const plans = [
  { name: "Essencial", price: "R$ 39,90", access: "2 meses", features: ["Banco de questões", "Filtros por concurso", "Comentários", "Desempenho"], message: "Olá! Tenho interesse no Plano Essencial da LC Concursos Policiais, no valor de R$ 39,90." },
  { name: "Estratégico", price: "R$ 69,90", access: "2 meses", features: ["Tudo do Essencial", "Caderno de erros", "Revisões automáticas", "Pontos fracos"], message: "Olá! Tenho interesse no Plano Estratégico da LC Concursos Policiais, no valor de R$ 69,90." },
  { name: "Completo", price: "R$ 99,90", access: "3 meses", featured: true, features: ["Tudo do Estratégico", "Cronograma personalizado", "Plano de estudo", "Reorganização automática"], message: "Olá! Tenho interesse no Plano Completo da LC Concursos Policiais, no valor de R$ 99,90 e com 3 meses de acesso." },
];

const generalMessage = "Olá! Conheci a LC Concursos Policiais pela página e gostaria de saber qual plano é mais indicado para mim.";

function DemoFrame({ type }: { type: "questions" | "errors" | "schedule" | "analytics" | "mentor" }) {
  if (type === "questions") return <div className="screen-card questions-ui"><div className="screen-bar"><b>Banco de questões</b><span>1.248 disponíveis</span></div><div className="filter-row"><i>Concurso</i><i>Disciplina</i><i>Assunto</i></div><div className="question-box"><small>QUESTÃO 124</small><h4>Sobre os princípios aplicáveis à Administração Pública, assinale a alternativa correta.</h4><p>A) Legalidade, impessoalidade, moralidade, publicidade e eficiência.</p><p>B) Apenas legalidade e publicidade.</p><button>RESPONDER QUESTÃO</button></div></div>;
  if (type === "errors") return <div className="screen-card errors-ui"><div className="screen-bar"><b>Caderno de erros</b><span>Revisão automática</span></div><div className="error-stats"><div><strong>32</strong><small>Erros salvos</small></div><div><strong>18</strong><small>Revisados</small></div><div><strong>78%</strong><small>Evolução</small></div></div><div className="review-list"><p><span>Direito Penal</span><b>Revisar hoje</b></p><p><span>Constitucional</span><b>Em 2 dias</b></p><p><span>Legislação PM</span><b>Em 4 dias</b></p></div></div>;
  if (type === "schedule") return <div className="screen-card schedule-ui"><div className="screen-bar"><b>Cronograma da semana</b><span>Atualizado agora</span></div><div className="calendar"><div><b>SEG</b><span>Português</span><span>40 questões</span></div><div><b>TER</b><span>Direito Penal</span><span>Lei seca</span></div><div className="today"><b>QUA</b><span>Legislação</span><span>Revisão</span></div><div><b>QUI</b><span>RLM</span><span>30 questões</span></div><div><b>SEX</b><span>Simulado</span><span>1h30</span></div></div><button className="readapt">READAPTAR CRONOGRAMA</button></div>;
  if (type === "analytics") return <div className="screen-card analytics-ui"><div className="screen-bar"><b>Seu desempenho</b><span>Últimos 30 dias</span></div><div className="analytics-top"><div><small>Questões</small><strong>1.248</strong></div><div><small>Acertos</small><strong>82%</strong></div><div><small>Sequência</small><strong>12 dias</strong></div></div><div className="bars"><i style={{height:"42%"}}/><i style={{height:"55%"}}/><i style={{height:"48%"}}/><i style={{height:"68%"}}/><i style={{height:"73%"}}/><i style={{height:"88%"}}/><i style={{height:"82%"}}/></div></div>;
  return <div className="screen-card mentor-ui"><div className="mentor-avatar">LC</div><div><small>ACOMPANHAMENTO SEMANAL</small><h4>Orientação para corrigir sua rota e manter a constância.</h4><p>Metas, ajustes do cronograma e direcionamento de acordo com seu desempenho.</p><div className="mentor-tags"><span>Metas semanais</span><span>Análise individual</span><span>Suporte humano</span></div></div></div>;
}

function NotebookDemo() {
  return (
    <div className="notebook-wrap" aria-label="Vídeo demonstrativo da plataforma LC Concursos">
      <div className="notebook-camera" />
      <div className="notebook-screen">
        <video autoPlay muted loop playsInline poster="https://lc-landing-page-9jz3n24d9-lc-concursos-policiais.vercel.app/demo/questoes.png">
          <source src="https://lc-landing-page-9jz3n24d9-lc-concursos-policiais.vercel.app/demo/plataforma.mp4" type="video/mp4" />
        </video>
        <div className="video-label"><span className="live-dot" /> PLATAFORMA EM AÇÃO</div>
      </div>
      <div className="notebook-base"><span /></div>
      <div className="notebook-shadow" />
    </div>
  );
}

function PlatformShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="platform-shot">
      <div className="shot-browser"><i /><i /><i /><span>app.lcconcursos.com.br</span></div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const direction = window.scrollY >= lastScrollY ? "down" : "up";
      document.documentElement.dataset.scrollDirection = direction;
      lastScrollY = window.scrollY;
    };

    updateDirection();
    window.addEventListener("scroll", updateDirection, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const direction = document.documentElement.dataset.scrollDirection || "down";
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          section.classList.toggle("from-up", direction === "up");
          section.classList.toggle("from-down", direction !== "up");
          section.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: [0.18, 0.42, 0.68], rootMargin: "-8% 0px -8% 0px" }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-section", "from-down");
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", updateDirection);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="snap-page">
      <header className="topbar"><a className="brand brand-image" href="#inicio"><img src="https://lc-landing-page-seven.vercel.app/brand/logo-principal.png" alt="LC Concursos Policiais" /></a><a className="top-cta" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">FALAR NO WHATSAPP</a></header>
      <nav className="scroll-dots" aria-label="Navegação entre seções"><a href="#inicio"/><a href="#questoes"/><a href="#erros"/><a href="#cronograma"/><a href="#desempenho"/><a href="#mentoria"/><a href="#planos"/></nav>

      <section className="snap-section hero-screen" id="inicio"><div className="orb orb-one"/><div className="section-inner hero-layout"><div className="copy"><img className="hero-logo" src="https://lc-landing-page-seven.vercel.app/brand/logo-principal.png" alt="LC Concursos Policiais" /><span className="kicker">PREPARAÇÃO PARA CONCURSOS POLICIAIS</span><h1>Mais que uma plataforma de questões.</h1><p>Um sistema completo para organizar seus estudos, corrigir seus erros e mostrar exatamente onde você precisa evoluir.</p><div className="actions"><a className="primary" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">COMEÇAR MINHA PREPARAÇÃO</a><a className="secondary" href="#questoes">CONHECER A PLATAFORMA ↓</a></div></div><div className="hero-visual"><NotebookDemo /><img className="devices-image" src="https://lc-landing-page-seven.vercel.app/brand/dispositivos.jpg" alt="Plataforma acessível em computador, notebook, tablet e celular" /></div></div></section>

      <section className="snap-section light-screen" id="questoes"><div className="section-number">01</div><div className="section-inner feature-layout"><div className="copy dark"><span className="kicker blue">QUESTÕES DIRECIONADAS</span><h2>Pratique exatamente o que pode cair na sua prova.</h2><p>Escolha concurso, disciplina, assunto e banca. Resolva questões com comentários e acompanhe seu rendimento sem perder tempo procurando material.</p><ul><li>Filtros inteligentes</li><li>Questões por concurso</li><li>Comentários didáticos</li></ul></div><div className="visual-stack"><PlatformShot src="https://lc-landing-page-seven.vercel.app/brand/login.png" alt="Tela de acesso da plataforma LC Concursos Policiais" /><DemoFrame type="questions" /></div></div></section>

      <section className="snap-section navy-screen" id="erros"><div className="section-number">02</div><div className="section-inner feature-layout reverse"><div className="visual-stack"><PlatformShot src="https://lc-landing-page-9jz3n24d9-lc-concursos-policiais.vercel.app/demo/mentoria.png" alt="Demonstração do caderno de erros da plataforma" /><DemoFrame type="errors" /></div><div className="copy"><span className="kicker">CADERNO DE ERROS</span><h2>Seus erros viram um plano de revisão.</h2><p>A plataforma salva automaticamente as questões erradas e organiza as próximas revisões para você não repetir os mesmos erros na prova.</p><ul><li>Registro automático</li><li>Revisões programadas</li><li>Evolução por disciplina</li></ul></div></div></section>

      <section className="snap-section soft-screen" id="cronograma"><div className="section-number">03</div><div className="section-inner feature-layout"><div className="copy dark"><span className="kicker blue">CRONOGRAMA PERSONALIZADO</span><h2>Saiba o que estudar todos os dias.</h2><p>Seu tempo disponível é transformado em um plano claro. Perdeu um dia? O cronograma pode ser readaptado sem bagunçar toda a preparação.</p><ul><li>Plano por data da prova</li><li>Metas diárias</li><li>Readaptação automática</li></ul></div><div className="visual-stack"><PlatformShot src="https://lc-landing-page-9jz3n24d9-lc-concursos-policiais.vercel.app/demo/cronograma.png" alt="Demonstração do cronograma personalizado" /><DemoFrame type="schedule" /></div></div></section>

      <section className="snap-section blue-screen" id="desempenho"><div className="section-number">04</div><div className="section-inner feature-layout reverse"><div className="visual-stack"><PlatformShot src="https://lc-landing-page-9jz3n24d9-lc-concursos-policiais.vercel.app/demo/desempenho.png" alt="Demonstração dos gráficos de desempenho" /><DemoFrame type="analytics" /></div><div className="copy"><span className="kicker">ANÁLISE DE DESEMPENHO</span><h2>Veja sua evolução. Enxergue seus pontos fracos.</h2><p>Gráficos simples mostram quantas questões você respondeu, seu percentual de acertos e quais disciplinas precisam de mais atenção.</p><ul><li>Acertos e erros</li><li>Rendimento por disciplina</li><li>Progresso semanal</li></ul></div></div></section>

      <section className="snap-section dark-screen" id="mentoria"><div className="section-number">05</div><div className="section-inner feature-layout"><div className="copy"><span className="kicker">ACOMPANHAMENTO HUMANO</span><h2>Você estuda sozinho, mas não fica sem direção.</h2><p>Na Mentoria Premium, você recebe acompanhamento semanal para ajustar metas, corrigir sua estratégia e manter a constância até a prova.</p><a className="primary gold" href={whatsappLink("Olá! Tenho interesse na Mentoria Premium da LC Concursos Policiais.")} target="_blank" rel="noreferrer">CONHECER A MENTORIA</a></div><div className="mentor-brand-visual"><img src="https://lc-landing-page-seven.vercel.app/brand/emblema.png" alt="Emblema LC Concursos Policiais" /><DemoFrame type="mentor" /></div></div></section>

      <section className="snap-section plans-screen" id="planos"><div className="section-inner plans-inner"><div className="plans-heading"><span className="kicker blue">ESCOLHA SEU PLANO</span><h2>Comece no nível de direção que você precisa.</h2></div><div className="plans-grid">{plans.map(plan=><article className={`plan ${plan.featured?"featured":""}`} key={plan.name}>{plan.featured&&<span className="badge">MAIS ESCOLHIDO</span>}<h3>{plan.name}</h3><strong>{plan.price}</strong><small>{plan.access} de acesso</small><ul>{plan.features.map(item=><li key={item}>✓ {item}</li>)}</ul><a href={whatsappLink(plan.message)} target="_blank" rel="noreferrer">QUERO ESTE PLANO</a></article>)}</div><p className="plans-note">Pagamento único. Atendimento e contratação diretamente pelo WhatsApp.</p></div></section>

      <a className="whatsapp-float" href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">WhatsApp</a>
    </main>
  );
}
