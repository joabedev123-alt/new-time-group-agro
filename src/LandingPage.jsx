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
  const darkBg = "bg-[#060a08]"; 
  
  return (
    <div className={`min-h-screen ${darkBg} font-sans text-gray-300`}>
      
      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="New Time Group Logo" className="h-12 w-auto scale-[2.5] origin-left drop-shadow-sm" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium text-white hover:text-nt-gold transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-medium text-white hover:text-nt-gold transition-colors">O que fazemos</a>
            <a href="#processo" className="text-sm font-medium text-white hover:text-nt-gold transition-colors">Diferenciais</a>
            <a href="#produtos" className="text-sm font-medium text-white hover:text-nt-gold transition-colors">Produtos</a>
            <a href="#contato" className="text-sm font-medium text-white hover:text-nt-gold transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:block">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nt-gold hover:bg-yellow-500 text-[#060a08] px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <i className="bi bi-whatsapp"></i> Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-2xl text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden absolute top-full left-0 w-full bg-[#060a08] shadow-xl py-4 flex flex-col items-center gap-4 border-t border-white/10">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white hover:text-nt-gold">Início</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white hover:text-nt-gold">O que fazemos</a>
              <a href="#processo" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white hover:text-nt-gold">Diferenciais</a>
              <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white hover:text-nt-gold">Produtos</a>
              <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="font-medium text-white hover:text-nt-gold">Contato</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video src="/images/04.mp4" autoPlay loop muted playsInline poster="/images/21.jpeg" className="w-full h-full object-cover"></video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a08]/95 via-[#060a08]/80 to-[#060a08]/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl text-center md:text-left">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              A base forte para a sua <br className="md:hidden" /><span className="text-nt-gold italic">lavoura.</span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light mx-auto md:mx-0">
              Revenda especializada de fertilizantes NPK, Ureia, KCL, Super Simples e Triplo. Garantimos a logística eficiente e a mistura exata que o seu solo exige.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#produtos" className="bg-nt-gold hover:bg-yellow-500 text-[#060a08] px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg text-center flex items-center justify-center gap-2">
                Ver Portfólio <i className="bi bi-arrow-right"></i>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white"><i className="bi bi-whatsapp text-sm"></i></div> Fale Conosco
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Testimonial Banner */}
      <div className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#112317] border border-[#1d3527] rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-[#112317] bg-gray-600 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" /></div>)}
            </div>
            <div>
              <div className="flex text-nt-gold text-sm"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
              <p className="text-white text-sm mt-1">Produtores Nacionais</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-lg italic border-t md:border-t-0 md:border-l border-[#1d3527] pt-6 md:pt-0 pl-0 md:pl-6 text-center md:text-left">
            "A New Time Group transformou nossa operação. Entrega no prazo e fertilizantes com qualidade impecável."
          </p>
        </motion.div>
      </div>

      {/* 3. POR QUE NOS ESCOLHER */}
      <section id="processo" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Carousel (Left Side) */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex justify-center lg:justify-start w-full">
              <div className="relative rounded-3xl overflow-hidden border border-[#16291e] w-full max-w-[320px] mx-auto lg:mx-0 shadow-2xl aspect-[4/5]">
                <div className="w-full h-full flex transition-transform duration-700 ease-in-out items-center" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {carouselImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover block opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060a08]/90 via-[#060a08]/20 to-transparent"></div>
                      <div className="absolute bottom-12 left-0 w-full text-center px-4">
                        <span className="text-white font-bold text-sm tracking-wider drop-shadow-md">{img.alt}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Navigation dots */}
                <div className="absolute bottom-4 right-0 w-full flex justify-center gap-2">
                  {carouselImages.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-colors shadow-sm ${currentSlide === idx ? 'bg-nt-gold scale-125' : 'bg-white/50 hover:bg-white'}`} />
                  ))}
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 right-0 lg:-right-6 bg-[#0f1f14] border border-[#1a3322] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[140px] z-10 backdrop-blur-md">
                <span className="text-4xl font-serif text-nt-gold mb-1">10+</span>
                <span className="text-white text-xs text-center font-medium uppercase tracking-wider">Anos de<br/>Experiência</span>
              </div>
            </motion.div>

            {/* Text Content (Right Side) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">Onde a Produtividade<br className="hidden md:block"/> Encontra o Campo.</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                Com atuação nacional, nós garantimos não apenas a entrega do insumo, mas a qualidade e a segurança que a sua safra precisa. Processo sem burocracia, do orçamento ao fechamento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#112317] flex items-center justify-center text-nt-gold flex-shrink-0"><i className="bi bi-truck text-xl"></i></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Atendimento Nacional</h4>
                    <p className="text-sm text-gray-500">Logística eficiente para todo o Brasil.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#112317] flex items-center justify-center text-nt-gold flex-shrink-0"><i className="bi bi-cash-coin text-xl"></i></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Custo-Benefício</h4>
                    <p className="text-sm text-gray-500">Preços competitivos para seu orçamento.</p>
                  </div>
                </div>
              </div>

              <a href="#contato" className="inline-block bg-nt-gold hover:bg-yellow-500 text-[#060a08] px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                Saiba Mais
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PRODUTOS */}
      <section id="produtos" className="py-24 bg-[#0a110d] border-y border-[#16291e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 px-2">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Nosso Portfólio de Produtos</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light">A mistura exata que a análise do seu solo exige. Insumos de alta performance para o produtor exigente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "MAP 11 52 00", media: "/images/03.mp4", desc: "Fórmulas ideais para o plantio, ricas em fósforo." },
              { name: "NPK 20 05 20", media: "/images/05.mp4", desc: "Aplicações em cobertura, com alto teor de nitrogênio." },
              { name: "04 30 10", media: "/images/06.mp4", desc: "Sacaria 50kg" },
              { name: "KCL", media: "/images/07.mp4", desc: "Fosfato fonte de Fósforo, Cálcio e Enxofre." },
              { name: "SSP 18%", media: "/images/11.mp4", desc: "Alta concentração de Fósforo (P2O5)." },
              { name: "NPK 20 15 20", media: "/images/37.mp4", desc: "Alta concentração de fósforo para arranque inicial." },
            ].map((prod, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className={`rounded-3xl overflow-hidden border border-[#1a3022] flex flex-col h-full mx-auto w-full max-w-sm ${index === 1 ? 'bg-gradient-to-b from-[#112317] to-[#0a110d] shadow-2xl shadow-[#112317]/20 scale-105 z-10' : 'bg-[#0c1611]'}`}>
                <div className="overflow-hidden relative flex-shrink-0 bg-black">
                  <video src={prod.media} autoPlay loop muted playsInline controls className="w-full h-auto block opacity-90 hover:opacity-100 transition-opacity" />
                  {index === 1 && (
                    <div className="absolute top-4 left-4 bg-[#060a08]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1 border border-white/10">
                      <i className="bi bi-star-fill text-nt-gold"></i> Mais Pedido
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <h3 className="text-2xl font-serif text-white mb-2">{prod.name}</h3>
                  <p className="text-gray-400 text-sm mb-8 flex-grow font-light">{prod.desc}</p>
                  
                  <div className="mt-auto">
                    <a href={`${WHATSAPP_LINK}?text=Olá, gostaria de solicitar uma cotação para o produto: ${prod.name}`} target="_blank" rel="noreferrer" className={`block w-full text-center text-sm font-semibold py-3 rounded-xl transition-all border ${index === 1 ? 'bg-nt-gold text-[#060a08] border-nt-gold hover:bg-yellow-500' : 'bg-[#16291e] hover:bg-nt-gold text-nt-gold hover:text-[#060a08] border-[#213f2d]'}`}>
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
      <div className="w-full bg-nt-gold py-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center px-4">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="flex items-center gap-2 text-[#060a08] opacity-80 font-bold uppercase tracking-widest text-sm">
            <i className="bi bi-shield-check text-xl"></i> Qualidade Garantida
          </div>
        ))}
      </div>

      {/* 5. O QUE FAZEMOS */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 px-2">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Serviços que Oferecemos</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light">Especialistas em nutrir o seu solo. Conheça as nossas categorias.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'bi-box-seam', title: "Mistura NPK", desc: "Fórmulas equilibradas e sob medida para o seu solo." },
              { icon: 'bi-droplet', title: "Ureia", desc: "Alto teor de nitrogênio para rápida absorção." },
              { icon: 'bi-recycle', title: "Avariados", desc: "Nutrição excelente com custo-benefício atrativo." },
              { icon: 'bi-truck', title: "Logística", desc: "Entrega ágil e segura em todo o território nacional." }
            ].map((serv, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-[#112317] to-[#0c1611] p-8 rounded-3xl border border-[#1a3022] text-center group shadow-xl">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#060a08] border border-[#1d3527] flex items-center justify-center text-nt-gold text-2xl mb-6 group-hover:bg-nt-gold group-hover:text-[#060a08] transition-colors">
                  <i className={`bi ${serv.icon}`}></i>
                </div>
                <h3 className="text-white font-serif text-xl mb-3">{serv.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{serv.desc}</p>
                <a href="#contato" className="inline-block mt-4 text-xs font-bold text-nt-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Saiba Mais &rarr;</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-[#16291e] bg-[#0a110d]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row justify-between items-center gap-10">
          <h2 className="text-2xl md:text-4xl font-serif text-white max-w-md text-center lg:text-left leading-tight">
            Conquistamos o melhor da <br className="hidden md:block"/><span className="text-nt-gold italic">Agricultura</span>
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-serif text-nt-gold mb-1">500+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Produtores</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-serif text-nt-gold mb-1">100%</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Satisfação</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-serif text-nt-gold mb-1">20k+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Ton. Entregues</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTATO E FAQ */}
      <section id="contato" className="py-24 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nt-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-[#0c1611] border border-[#16291e] rounded-[3rem] p-8 md:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contato Left */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Pronto para fechar negócio?</h2>
                <div className="mb-8 rounded-3xl overflow-hidden border border-[#1a3022] w-full max-w-[320px] mx-auto md:mx-0 shadow-xl">
                  <img src="/images/10.jpeg" alt="Atendimento New Time Group" className="w-full h-auto object-cover block opacity-90" />
                </div>
                <p className="text-gray-400 text-base md:text-lg mb-10 font-light max-w-md mx-auto md:mx-0">
                  Nossa equipe responderá em poucos minutos com as melhores cotações do mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nt-gold hover:bg-yellow-500 text-[#060a08] px-8 py-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2 shadow-lg">
                    <i className="bi bi-whatsapp"></i> (48) 98832-4762
                  </a>
                </div>
              </div>

              {/* FAQ Right */}
              <div id="faq">
                <h3 className="text-3xl font-serif text-white mb-8">Dúvidas Frequentes</h3>
                <div className="space-y-4">
                  {[
                    { q: "Quais regiões vocês atendem?", a: "Atendemos todo o território nacional com uma logística otimizada." },
                    { q: "Trabalham com NPK Avariado?", a: "Sim. Oferecemos opções de NPK avariado com excelente custo-benefício." },
                    { q: "Qual o pedido mínimo?", a: "Entre em contato via WhatsApp para avaliarmos a sua demanda e passarmos as condições." },
                    { q: "Como solicitar uma cotação?", a: "Basta clicar em qualquer botão do WhatsApp no site e nos informar sua necessidade." }
                  ].map((faq, index) => (
                    <div key={index} className="border border-[#1a3022] rounded-2xl bg-[#0f1d15] overflow-hidden">
                      <button 
                        className="w-full px-6 py-5 text-left flex justify-between items-center text-white font-medium hover:text-nt-gold transition-colors"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        {faq.q}
                        <i className={`bi bi-chevron-down transition-transform text-nt-gold ${openFaq === index ? 'rotate-180' : ''}`}></i>
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                            <p className="px-6 pb-5 text-gray-400 text-sm font-light leading-relaxed">{faq.a}</p>
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
              <p className="text-gray-500 max-w-sm mb-6 leading-relaxed font-light">
                Revenda especializada de fertilizantes e insumos agrícolas. Foco em qualidade, logística rápida e melhores resultados para o agronegócio brasileiro.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/newtimegroup.oficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#112317] text-white flex items-center justify-center hover:bg-nt-gold hover:text-[#060a08] transition-colors border border-[#1a3022]">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-gray-500 hover:text-nt-gold transition-colors text-sm">Início</a></li>
                <li><a href="#sobre" className="text-gray-500 hover:text-nt-gold transition-colors text-sm">O que fazemos</a></li>
                <li><a href="#produtos" className="text-gray-500 hover:text-nt-gold transition-colors text-sm">Produtos</a></li>
                <li><a href="#contato" className="text-gray-500 hover:text-nt-gold transition-colors text-sm">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-500 text-sm">
                  <i className="bi bi-whatsapp text-nt-gold mt-0.5"></i>
                  <span>(48) 98832-4762</span>
                </li>
                <li className="flex items-start gap-3 text-gray-500 text-sm">
                  <i className="bi bi-instagram text-nt-gold mt-0.5"></i>
                  <span>@newtimegroup.oficial</span>
                </li>
                <li className="flex items-start gap-3 text-gray-500 text-sm">
                  <i className="bi bi-geo-alt text-nt-gold mt-0.5"></i>
                  <span>Atendimento nacional</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 pb-24 md:pb-0 md:pr-28 border-t border-[#112317] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
            <p>&copy; {new Date().getFullYear()} New Time Group Agro & Logística. Todos os direitos reservados.</p>
            <p className="flex items-center text-sm">
              Produzida com <span className="inline-block animate-pulse mx-1 drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]">💚</span> por 
              <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="font-bold ml-1 text-gray-400 hover:text-nt-gold transition-colors">
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

    </div>
  );
}
