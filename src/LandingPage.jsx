import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '5548988324762';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const carouselImages = [
  { src: "/images/14.jpeg", alt: "Operação Agrícola" },
  { src: "/images/18.jpeg", alt: "Fertilizantes" },
  { src: "/images/19.jpeg", alt: "Lavoura Produtiva" }
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cores padronizadas para o tema dark-botanic da referência
  const darkBg = "bg-white"; 
  
  return (
    <div className={`min-h-screen ${darkBg} font-sans text-gray-600`}>
      
      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* Logo (Left) */}
          <div className="flex items-center justify-start">
            <img src="/logo.png" alt="New Time Group Logo" className="h-12 w-auto scale-[2.5] origin-left drop-shadow-sm" />
          </div>

          {/* Desktop Menu (Center) */}
          <div className="hidden lg:flex items-center justify-center">
            <nav className="flex gap-6">
              <a href="#inicio" className="text-sm font-medium text-black hover:text-green-700 transition-colors flex items-center gap-2 whitespace-nowrap"><i className="bi bi-house-door text-black"></i> Início</a>
              <a href="#sobre" className="text-sm font-medium text-black hover:text-green-700 transition-colors flex items-center gap-2 whitespace-nowrap"><i className="bi bi-info-circle text-black"></i> O que fazemos</a>
              <a href="#produtos" className="text-sm font-medium text-black hover:text-green-700 transition-colors flex items-center gap-2 whitespace-nowrap"><i className="bi bi-box-seam text-black"></i> Produtos</a>
              <a href="#contato" className="text-sm font-medium text-black hover:text-green-700 transition-colors flex items-center gap-2 whitespace-nowrap"><i className="bi bi-envelope text-black"></i> Contato</a>
            </nav>
          </div>

          {/* Mobile Menu Toggle (Right) */}
          <div className="flex justify-end lg:hidden">
            <button className="text-2xl text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-t border-gray-200">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="font-medium text-black hover:text-green-700 flex items-center gap-2 whitespace-nowrap"><i className="bi bi-house-door text-black"></i> Início</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="font-medium text-black hover:text-green-700 flex items-center gap-2 whitespace-nowrap"><i className="bi bi-info-circle text-black"></i> O que fazemos</a>
              <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="font-medium text-black hover:text-green-700 flex items-center gap-2 whitespace-nowrap"><i className="bi bi-box-seam text-black"></i> Produtos</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="font-medium text-black hover:text-green-700 flex items-center gap-2 whitespace-nowrap"><i className="bi bi-envelope text-black"></i> Contato</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[100svh] md:min-h-[90vh] flex items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-white">
          <img src="/images/hero mobile.png" alt="Plantação Mobile" className="absolute inset-x-0 top-24 w-full h-full object-cover opacity-100 block md:hidden" />
          <img src="/images/hero.jpeg" alt="Plantação" className="absolute inset-0 w-full h-full object-cover object-center opacity-100 hidden md:block" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center mt-16 sm:mt-24 md:mt-56">
          <div className="max-w-4xl text-center mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              A base forte para a sua <span className="text-black italic">lavoura.</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base md:text-lg text-gray-900 mb-10 max-w-4xl font-medium mx-auto bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/60">
              <strong className="text-gray-900 font-bold block mb-1">Onde o Campo Encontra sua Melhor Performance.</strong>
              Fertilizantes sólidos formulados para quem não aceita menos que a excelência. Qualidade em granel ou big bag, direto para o coração da sua lavoura.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-green-900/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-3">
                <i className="bi bi-whatsapp text-xl"></i> Fale com um Especialista
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INSTITUCIONAL (SOBRE) */}
      <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
              Como a New Time Group impacta o agronegócio
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              Acreditamos que uma agricultura forte começa com uma nutrição eficiente do solo. Trabalhamos para entregar fertilizantes de alta qualidade, soluções personalizadas e logística ágil, contribuindo para que produtores rurais de todo o Brasil alcancem mais produtividade, rentabilidade e sustentabilidade em suas lavouras.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-3"><i className="bi bi-bullseye text-green-700"></i> Missão</h3>
              <p className="text-gray-600 leading-relaxed">Fornecer fertilizantes e insumos agrícolas de alta qualidade, oferecendo soluções técnicas, atendimento especializado e logística eficiente para impulsionar a produtividade das lavouras e gerar resultados consistentes para o produtor rural em todo o Brasil.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-3"><i className="bi bi-eye text-green-700"></i> Visão</h3>
              <p className="text-gray-600 leading-relaxed">Ser reconhecida como uma das principais referências nacionais na comercialização e distribuição de fertilizantes, destacando-se pela qualidade dos produtos, excelência no atendimento, inovação, agilidade logística e compromisso com o desenvolvimento do agronegócio brasileiro.</p>
            </motion.div>
          </div>

          {/* Estatísticas - Faixa Verde */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1f5930] rounded-3xl py-10 md:py-12 px-2 md:px-6 mb-20 shadow-xl w-full border border-[#27663a]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-8 gap-x-2 text-center md:divide-x divide-green-500/30">
              <div className="px-1 md:px-2 border-r border-green-500/30 md:border-none">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-1 md:mb-2">640<span className="text-nt-gold">+</span></h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">Clientes<br/>Satisfeitos</p>
              </div>
              <div className="px-1 md:px-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-1 md:mb-2">33<span className="text-nt-gold">%</span></h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">Crescimento<br/>Ano a Ano</p>
              </div>
              <div className="px-1 md:px-2 border-r border-green-500/30 md:border-l md:border-none">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-1 md:mb-2">5</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">Anos de<br/>Experiência</p>
              </div>
              <div className="px-1 md:px-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-1 md:mb-2">17<span className="text-nt-gold">k</span></h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">Toneladas<br/>Entregues</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-serif text-gray-900 mb-10 text-center">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "bi-shield-check", title: "Compromisso com o Produtor", desc: "Construímos relações duradouras baseadas na confiança, no respeito e na entrega de resultados reais para nossos clientes." },
                { icon: "bi-graph-up-arrow", title: "Qualidade e Eficiência", desc: "Trabalhamos com fertilizantes selecionados e soluções que proporcionam alto desempenho, produtividade e melhor aproveitamento nutricional." },
                { icon: "bi-handshake", title: "Ética e Transparência", desc: "Atuamos com responsabilidade, honestidade e transparência em todas as negociações e parcerias." },
                { icon: "bi-truck", title: "Agilidade Logística", desc: "Garantimos processos eficientes e entregas rápidas para atender produtores em todo o território nacional." },
                { icon: "bi-lightbulb", title: "Inovação para o Campo", desc: "Buscamos constantemente novas tecnologias, produtos e soluções que contribuam para uma agricultura mais produtiva, moderna e sustentável." },
                { icon: "bi-cash-coin", title: "Foco em Resultados", desc: "Nosso compromisso é entregar valor ao produtor rural, ajudando a maximizar a produtividade, reduzir custos e aumentar a rentabilidade da lavoura." },
              ].map((val, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-700 text-xl mb-4">
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUTOS */}
      <section id="produtos" className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 px-2">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Nosso Portfólio de Produtos</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-light">A mistura exata que a análise do seu solo exige. Insumos de alta performance para o produtor exigente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "MAP 11 52 00", desc: "Fórmulas ideais para o plantio, ricas em fósforo.", img: "/images/11 52 00.jpeg" },
              { name: "NPK 20 05 20", desc: "Aplicações em cobertura, com alto teor de nitrogênio.", img: "/images/20 05 20.jpeg" },
              { name: "04 30 10", desc: "Sacaria 50kg", img: "/images/04 30 10.jpeg" },
              { name: "KCL", desc: "Fosfato fonte de Fósforo, Cálcio e Enxofre.", img: "/images/kcl.jpeg" },
              { name: "SSP 18% e 21%", desc: "Alta concentração de Fósforo (P2O5).", img: "/images/ssp 18.jpeg" },
              { name: "04 14 08", desc: "Alta concentração de fósforo para arranque inicial.", img: "/images/04 14 08.jpeg" },
            ].map((prod, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="rounded-2xl overflow-hidden border border-[#27663a] flex flex-col h-full mx-auto w-full max-w-sm shadow-xl p-8 bg-[#1d542e]">
                <div className="relative flex-shrink-0 flex justify-center mb-8 w-full h-48 rounded-2xl overflow-hidden">
                  <img src={prod.img || "/images/fertilizer_bag.png"} alt={`Saca de ${prod.name}`} className="w-full h-full rounded-2xl object-contain" />
                  {index === 1 && (
                    <div className="absolute -top-4 right-0 bg-nt-gold px-4 py-1 rounded-full text-xs text-gray-900 font-bold flex items-center gap-1 shadow-md z-10">
                      <i className="bi bi-star-fill text-gray-900"></i> Mais Pedido
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-grow text-center relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{prod.name}</h3>
                  <p className="text-white/90 text-sm mb-8 flex-grow font-medium leading-relaxed px-2">{prod.desc}</p>
                  
                  <div className="mt-auto pt-4">
                    <a href={`${WHATSAPP_LINK}?text=Olá, gostaria de solicitar uma cotação para o produto: ${prod.name}`} target="_blank" rel="noreferrer" className="inline-block w-full text-center text-sm font-bold py-3.5 px-6 rounded-lg transition-all bg-[#143d21] hover:bg-[#10301a] text-white border border-[#2b7842]">
                      Solicitar Cotação
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider Ribbon */}
      <div className="w-full bg-green-700 py-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center px-4">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex items-center gap-2 text-white opacity-80 font-bold uppercase tracking-widest text-sm">
            <i className="bi bi-shield-check text-xl"></i> Qualidade Garantida
          </div>
        ))}
      </div>

      {/* 5. O QUE OFERECEMOS (Categorias) */}
      <section id="categorias" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h4 className="text-gray-500 uppercase tracking-widest text-sm mb-4 font-medium">O Que Oferecemos</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Nossos Produtos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            
            {/* Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#1f5930] rounded-xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27663a]">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                <img src="/images/Materia prima.jpeg" alt="Saca de Matéria Prima" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-6">Matéria Prima</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                MAP 11.52 - Uréia 46% - TSP 45%<br/>
                SSP 18% - SSP 21% - SAM 21% - NP 10.46<br/>
                DAP 17.45 - KCL 60%
              </p>
            </motion.div>


            {/* Card 3 */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#1f5930] rounded-xl p-8 flex flex-col items-center text-center shadow-lg border border-[#27663a]">
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                <img src="/images/personalizados.jpeg" alt="Saca de NPK Personalizado" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-6">NPK Personalizado</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium mt-2">
                Oferecemos uma infinidade de formulações de NPK podendo personalizar conforme sua necessidade!
              </p>
            </motion.div>

          </div>

          <div className="text-center">
            <a href="#contato" className="inline-block bg-[#1f5930] hover:bg-[#164423] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md border border-[#27663a]">
              Ver mais!
            </a>
          </div>
        </div>
      </section>

      {/* COTAÇÃO DE FRETE / MATERIAL */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
              <img src="/images/cotação.jpeg" alt="Entrega de Material" className="w-full h-auto max-h-[450px] object-contain rounded-xl" />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-green-700 uppercase tracking-widest mb-2">Logística Eficiente</h3>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Cotação de Entrega de Material</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Garantimos a entrega ágil e segura dos seus fertilizantes. Temos a melhor estrutura logística para levar o material até a sua propriedade com eficiência e o melhor custo-benefício. Solicite agora a cotação do frete para esse produto!
              </p>
              <div>
                <a href={`${WHATSAPP_LINK}?text=Olá, gostaria de fazer uma cotação para entrega de material.`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1f5930] hover:bg-[#164423] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-900/20">
                  <i className="bi bi-truck text-xl"></i> Cotar Entrega Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTATO E FAQ */}
      <section id="contato" className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-700/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white border border-gray-200 rounded-[3rem] p-8 md:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Contato Left */}
              <div className="text-center md:text-left flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Pronto para fechar negócio?</h2>
                <p className="text-gray-800 text-base md:text-xl mb-8 md:mb-10 font-medium max-w-md mx-auto md:mx-0 leading-relaxed">
                  Nossa equipe responderá em poucos minutos com as melhores cotações do mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-green-900/20 text-white px-8 py-5 rounded-full font-bold text-xl transition-all text-center flex items-center justify-center gap-3">
                    <i className="bi bi-whatsapp text-2xl"></i> (48) 98832-4762
                  </a>
                </div>
              </div>

              {/* FAQ Right */}
              <div id="faq" className="flex flex-col justify-center mt-8 lg:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Dúvidas Frequentes</h3>
                <div className="space-y-4">
                  {[
                    { q: "Quais regiões vocês atendem?", a: "Atendemos todo o território nacional com uma logística otimizada." },
                    { q: "Trabalham com NPK Avariado?", a: "Sim. Oferecemos opções de NPK avariado com excelente custo-benefício." },
                    { q: "Qual o pedido mínimo?", a: "Entre em contato via WhatsApp para avaliarmos a sua demanda e passarmos as condições." },
                    { q: "Como solicitar uma cotação?", a: "Basta clicar em qualquer botão do WhatsApp no site e nos informar sua necessidade." }
                  ].map((faq, index) => (
                    <div key={index} className="border border-[#27663a] rounded-2xl bg-[#1f5930] overflow-hidden">
                      <button 
                        className="w-full px-6 py-5 text-left flex justify-between items-center text-white font-bold hover:text-green-300 transition-colors"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        {faq.q}
                        <i className={`bi bi-chevron-down transition-transform text-nt-gold ${openFaq === index ? 'rotate-180' : ''}`}></i>
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                            <p className="px-6 pb-5 text-white/90 text-sm font-medium leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040806] pt-16 pb-8 border-t border-[#112317]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img src="/logo.png" alt="New Time Group Logo" className="h-28 w-auto opacity-90 drop-shadow-lg" />
              </div>
              <p className="text-white/80 max-w-sm mb-6 leading-relaxed font-light">
                Revenda especializada de fertilizantes e insumos agrícolas. Foco em qualidade, logística rápida e melhores resultados para o agronegócio brasileiro.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/newtimegroup.oficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors border border-white/20">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-white/80 hover:text-green-500 transition-colors text-sm">Início</a></li>
                <li><a href="#sobre" className="text-white/80 hover:text-green-500 transition-colors text-sm">O que fazemos</a></li>
                <li><a href="#produtos" className="text-white/80 hover:text-green-500 transition-colors text-sm">Produtos</a></li>
                <li><a href="#contato" className="text-white/80 hover:text-green-500 transition-colors text-sm">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <i className="bi bi-whatsapp text-green-500 mt-0.5"></i>
                  <span>(48) 98832-4762</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <i className="bi bi-instagram text-green-500 mt-0.5"></i>
                  <span>@newtimegroup.oficial</span>
                </li>
                <li className="flex items-start gap-3 text-white/80 text-sm">
                  <i className="bi bi-geo-alt text-green-500 mt-0.5"></i>
                  <span>Atendimento nacional</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 pb-24 md:pb-0 md:pr-28 border-t border-[#112317] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 font-light">
            <p>&copy; {new Date().getFullYear()} New Time Group Agro & Logística. Todos os direitos reservados.</p>
            <p className="flex items-center text-sm">
              Produzida com <span className="inline-block animate-pulse mx-1 drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]">💚</span> por 
              <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="font-bold ml-1 text-white hover:text-green-500 transition-colors">
                CAMALY
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-gray-900 w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

    </div>
  );
}
