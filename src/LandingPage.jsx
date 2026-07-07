import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '5548988324762';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const carouselImages = [
  { src: "/images/17.jpeg", alt: "Operação Agrícola" },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* 1. HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="w-10 h-10 bg-nt-green-dark rounded-md flex items-center justify-center text-white font-bold text-xl">
              NT
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-nt-green-dark leading-none text-lg">NEW TIME</span>
              <span className="text-xs text-nt-green font-medium tracking-widest">GROUP</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-semibold hover:text-nt-green transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-semibold hover:text-nt-green transition-colors">O que fazemos</a>
            <a href="#produtos" className="text-sm font-semibold hover:text-nt-green transition-colors">Produtos</a>
            <a href="#processo" className="text-sm font-semibold hover:text-nt-green transition-colors">Processo</a>
            <a href="#faq" className="text-sm font-semibold hover:text-nt-green transition-colors">FAQ</a>
            <a href="#contato" className="text-sm font-semibold hover:text-nt-green transition-colors">Contato</a>
          </nav>

          <div className="hidden lg:block">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nt-green hover:bg-nt-green-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <i className="bi bi-whatsapp"></i> Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-2xl text-nt-green-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-t">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">Início</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">O que fazemos</a>
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">Produtos</a>
            <a href="#processo" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">Processo</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">FAQ</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-700">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nt-green text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 mt-2">
              <i className="bi bi-whatsapp"></i> Fale no WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <video src="/images/04.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/images/21.jpeg"></video>
          <div className="absolute inset-0 bg-gradient-to-r from-nt-green-dark/95 via-nt-green-dark/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <span className="inline-block py-1 px-3 rounded-full bg-nt-gold/20 text-nt-gold-light border border-nt-gold/30 text-sm font-semibold mb-6 tracking-wide">
                <i className="bi bi-truck mr-2"></i> Entrega para todo o Brasil
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Nutrição que transforma resultados no campo
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                Fertilizantes NPK, ureia, KCL e insumos agrícolas de alta qualidade com atendimento ágil e dedicado para todas as regiões do Brasil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-nt-gold hover:bg-yellow-500 text-nt-green-dark font-bold py-3.5 px-8 rounded-full text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <i className="bi bi-whatsapp"></i> Fale com um especialista
                </a>
                <a href="#produtos" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3.5 px-8 rounded-full text-center transition-all flex items-center justify-center">
                  Conheça nossos produtos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. O QUE FAZEMOS */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark mb-6">Soluções completas em fertilizantes agrícolas</h2>
            <p className="text-gray-600 text-lg">
              A New Time Group atua na revenda de fertilizantes e insumos agrícolas, oferecendo opções formuladas para diferentes necessidades de plantio, cobertura e produtividade máxima da sua lavoura.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "NPK Formulado", icon: "bi-layers-fill", desc: "Fórmulas balanceadas com Nitrogênio, Fósforo e Potássio para todas as culturas." },
              { title: "NPK Avariado", icon: "bi-recycle", desc: "Opção com excelente custo-benefício, mantendo os níveis de nutrientes necessários." },
              { title: "Ureia", icon: "bi-snow", desc: "Fonte concentrada de nitrogênio para rápido desenvolvimento vegetativo." },
              { title: "KCL", icon: "bi-heptagon-fill", desc: "Cloreto de Potássio para aumento de resistência e qualidade dos frutos." },
              { title: "Super Simples", icon: "bi-droplet-fill", desc: "Fornecimento de fósforo, cálcio e enxofre prontamente disponíveis." },
              { title: "Super Triplo", icon: "bi-droplet-half", desc: "Alta concentração de fósforo para o arranque inicial vigoroso." },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-nt-green-dark text-white rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-nt-green transition-colors">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. POR QUE NOS ESCOLHER */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark">Por que produtores escolhem a New Time Group?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Atendimento Nacional", text: "Logística eficiente para entregar em qualquer região do Brasil." },
                { title: "Variedade de Formulações", text: "Temos a mistura exata que a análise do seu solo exige." },
                { title: "Agilidade na Negociação", text: "Processo sem burocracia, do orçamento ao fechamento." },
                { title: "Foco em Produtividade", text: "Insumos de qualidade que refletem no final da safra." },
                { title: "Melhor Custo-benefício", text: "Preços competitivos com opções adequadas para seu orçamento." },
                { title: "Suporte Especializado", text: "Equipe pronta para tirar dúvidas e indicar a melhor solução." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                  <i className="bi bi-check-circle-fill text-nt-green text-2xl flex-shrink-0 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel */}
            <div className="flex justify-center items-center w-full h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-md group w-full max-w-[320px]">
                <div 
                  className="w-full flex transition-transform duration-700 ease-in-out items-center" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((img, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 relative">
                      <img src={img.src} alt={img.alt} className="w-full h-auto object-cover block" />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent pt-16 pb-6 px-4 text-center">
                        <span className="text-white font-bold text-sm">{img.alt}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-1 right-0 w-full flex justify-center gap-2 pb-2">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors shadow-sm ${currentSlide === idx ? 'bg-nt-gold scale-125' : 'bg-white/70 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOSSO PROCESSO */}
      <section id="processo" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark mb-4">Comprar conosco é simples e rápido</h2>
            <p className="text-gray-600">Entenda como funciona o nosso processo de ponta a ponta.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-nt-green/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { num: "01", title: "Entendimento", icon: "bi-chat-dots" },
                { num: "02", title: "Indicação", icon: "bi-clipboard-check" },
                { num: "03", title: "Cotação", icon: "bi-calculator" },
                { num: "04", title: "Logística", icon: "bi-truck" },
                { num: "05", title: "Entrega", icon: "bi-geo-alt-fill" },
              ].map((step, index) => (
                <div key={index} className="flex flex-row md:flex-col items-center gap-4 md:gap-6 relative">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-nt-green text-nt-green-dark flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <div className="md:text-center">
                    <span className="text-sm font-bold text-nt-gold block mb-1">Passo {step.num}</span>
                    <h4 className="font-bold text-gray-800">{step.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUTOS / PORTFÓLIO */}
      <section id="produtos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark mb-4">Nosso Portfólio de Produtos</h2>
              <p className="text-gray-600">Conheça nossa linha completa de fertilizantes para extrair o máximo potencial produtivo da sua área.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-nt-green font-bold hover:text-nt-green-dark transition-colors mt-4 md:mt-0">
              Ver tabela de preços <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "NPK Plantio", img: "/images/15.jpeg", desc: "Fórmulas ideais para o plantio, ricas em fósforo." },
              { name: "NPK Cobertura", img: "/images/16.jpeg", desc: "Aplicações em cobertura, com alto teor de nitrogênio." },
              { name: "Ureia Agrícola", img: "/images/02.jpeg", desc: "Sólido granulado com 46% de nitrogênio." },
              { name: "Cloreto de Potássio", img: "/images/12.jpeg", desc: "Principal fonte de potássio na agricultura." },
              { name: "Super Simples", img: "/images/13.jpeg", desc: "Fosfato fonte de Fósforo, Cálcio e Enxofre." },
              { name: "Super Triplo", img: "/images/14.jpeg", desc: "Alta concentração de Fósforo (P2O5)." },
            ].map((prod, index) => (
              <motion.div key={index} whileHover={{ y: -3 }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full mx-auto w-full max-w-sm">
                <div className="overflow-hidden relative flex-shrink-0">
                  <img src={prod.img} alt={prod.name} className="w-full h-auto block transition-transform duration-500 hover:scale-105" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }} />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{prod.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{prod.desc}</p>
                  <a href={`${WHATSAPP_LINK}?text=Olá, gostaria de solicitar uma cotação para o produto: ${prod.name}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-nt-green/10 hover:bg-nt-green text-nt-green hover:text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                    Solicitar Cotação
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BANNER INSTITUCIONAL */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/23.jpeg" alt="Lavoura" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'; }} />
          <div className="absolute inset-0 bg-nt-green-dark/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Mais produção, mais lucro, mais resultado para sua lavoura.
          </h2>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-nt-gold hover:bg-yellow-500 text-nt-green-dark font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <i className="bi bi-headset"></i> Falar com especialista
          </a>
        </div>
      </section>

      {/* 8. DEPOIMENTOS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark">O que dizem nossos parceiros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Compramos NPK com a New Time e a entrega foi muito rápida. O produto veio excelente, sem pó. Recomendo para outros produtores.", name: "Carlos Eduardo", role: "Produtor Rural - MT" },
              { text: "Fechamos uma carga de ureia no momento certo. O suporte deles durante a negociação nos deu muita segurança.", name: "Marcos Vinícius", role: "Fazenda Parceira - PR" },
              { text: "Somos uma revenda menor e conseguimos ótimas condições de NPK avariado. Excelente custo-benefício para nossos clientes finais.", name: "Agropecuária São José", role: "Revendedor Agrícola - MG" },
            ].map((dep, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                <i className="bi bi-quote text-5xl text-nt-green/20 absolute top-4 right-6"></i>
                <div className="flex text-nt-gold mb-4">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{dep.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-800">{dep.name}</h4>
                  <span className="text-sm text-nt-green font-medium">{dep.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nt-green-dark">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Vocês atendem todo o Brasil?", a: "Sim, possuímos uma rede logística estruturada para realizar entregas de forma segura e ágil em todas as regiões do território nacional." },
              { q: "Quais fertilizantes vocês trabalham?", a: "Trabalhamos com uma linha completa: NPK formulado, NPK avariado, Ureia, Cloreto de Potássio (KCL), Super Simples (SS), Super Triplo (TSP), entre outros insumos." },
              { q: "É possível solicitar cotação por WhatsApp?", a: "Com certeza. Nosso atendimento via WhatsApp é o canal mais rápido. Nossa equipe está pronta para enviar tabelas, cotações e tirar dúvidas em tempo real." },
              { q: "Vocês trabalham com diferentes formulações de NPK?", a: "Sim, trabalhamos com diversas formulações comerciais para plantio e cobertura, adequando à necessidade da análise de solo da sua área." },
              { q: "Como funciona a entrega?", a: "Após o fechamento do pedido, coordenamos o frete com transportadoras parceiras e agendamos a entrega diretamente na sua propriedade ou armazém." },
              { q: "Atendem grandes volumes?", a: "Sim, atendemos desde pequenas propriedades até grandes fazendas e grupos agrícolas, garantindo o volume necessário para a sua safra." },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all">
                <button 
                  className="w-full px-6 py-5 text-left font-bold text-gray-800 flex justify-between items-center hover:text-nt-green transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.q}
                  <i className={`bi bi-chevron-down transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-nt-green' : ''}`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FALE CONOSCO */}
      <section id="contato" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-nt-green font-bold tracking-wider uppercase text-sm mb-2 block">Contato</span>
              <h2 className="text-3xl md:text-5xl font-bold text-nt-green-dark mb-6">Pronto para fechar negócio?</h2>
              
              <div className="mb-8 rounded-2xl overflow-hidden shadow-sm w-full max-w-[320px]">
                <img src="/images/10.jpeg" alt="Atendimento New Time Group" className="w-full h-auto object-cover block" />
              </div>

              <p className="text-gray-600 text-lg mb-10">
                Preencha o formulário ou nos chame diretamente no WhatsApp. Nossa equipe responderá em poucos minutos com as melhores cotações do mercado.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-nt-green text-xl border border-gray-100">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">WhatsApp Comercial</span>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="font-bold text-xl text-gray-800 hover:text-nt-green">(48) 98832-4762</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-nt-green text-xl border border-gray-100">
                    <i className="bi bi-instagram"></i>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Instagram</span>
                    <a href="https://instagram.com/newtimegroup.oficial" target="_blank" rel="noreferrer" className="font-bold text-xl text-gray-800 hover:text-nt-green">@newtimegroup.oficial</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-nt-green text-xl border border-gray-100">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Atendimento</span>
                    <span className="font-bold text-xl text-gray-800">Todo o Brasil</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitar Cotação</h3>
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const text = `Olá, me chamo ${fd.get('nome')}. Meu telefone é ${fd.get('telefone')}. Tenho interesse no produto: ${fd.get('produto')}. Mensagem: ${fd.get('mensagem')}`;
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                  <input type="text" name="nome" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-nt-green focus:border-nt-green outline-none transition-all" placeholder="Como podemos te chamar?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input type="tel" name="telefone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-nt-green focus:border-nt-green outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Produto de Interesse</label>
                    <select name="produto" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-nt-green focus:border-nt-green outline-none transition-all bg-white">
                      <option value="NPK Formulado">NPK Formulado</option>
                      <option value="NPK Avariado">NPK Avariado</option>
                      <option value="Ureia">Ureia</option>
                      <option value="KCL">KCL</option>
                      <option value="Super Simples">Super Simples</option>
                      <option value="Super Triplo">Super Triplo</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                  <textarea name="mensagem" rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-nt-green focus:border-nt-green outline-none transition-all resize-none" placeholder="Detalhes como quantidade, destino, etc..."></textarea>
                </div>
                <button type="submit" className="w-full bg-nt-green hover:bg-nt-green-dark text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg">
                  <i className="bi bi-whatsapp"></i> Enviar pelo WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 11. RODAPÉ */}
      <footer className="bg-nt-green-dark pt-16 pb-8 border-t-[6px] border-nt-gold">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-nt-green-dark font-bold text-xl">
                  NT
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-none text-lg">NEW TIME</span>
                  <span className="text-xs text-nt-gold font-medium tracking-widest">GROUP</span>
                </div>
              </div>
              <p className="text-gray-300 max-w-sm mb-6 leading-relaxed">
                Revenda especializada de fertilizantes e insumos agrícolas. Foco em qualidade, logística rápida e melhores resultados para o agronegócio brasileiro.
              </p>
              <div className="flex gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-nt-green transition-colors">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://instagram.com/newtimegroup.oficial" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-nt-green transition-colors">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">O que fazemos</a></li>
                <li><a href="#produtos" className="text-gray-400 hover:text-white transition-colors">Portfólio de Produtos</a></li>
                <li><a href="#processo" className="text-gray-400 hover:text-white transition-colors">Nosso Processo</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <i className="bi bi-geo-alt mt-1 text-nt-gold"></i>
                  <span>Atendimento em<br/>Todo o Território Nacional</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <i className="bi bi-whatsapp text-nt-gold"></i>
                  <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">(48) 98832-4762</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <i className="bi bi-envelope text-nt-gold"></i>
                  <a href="#" className="hover:text-white transition-colors">contato@newtimegroup.com.br</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} New Time Group Agro & Logística LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Desenvolvido com excelência para o Agronegócio.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5a] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale conosco!
        </span>
      </a>

    </div>
  );
}
