import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone,
  Sparkles,
  Heart,
  Zap
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WHATSAPP_LINK = "https://wa.me/5515991029607?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20Massoterapia";
const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0ui5QYNAYQWgU5weuDe8F82TRFBOvjtS0u5pxv5PGptIpkf7lKAO5At099hsO_5JhhURZMQah8PYMivLXb3Pu5DFBUsC-OLJyITRu8iihj8OYMw1JT_lTFgkgfZSI_v39WwBgFJeQW8cCKgfE70EBIuaCpSYUeCoTGJn6GVgIg36BWsXoYyBoOpa5RtIkEN6jkYm1MYbwhhQ0STuN321cIRe6YxhuFS8cVlB41pEEI-dLOtm0nryDEj1Ra2vy9koFHmEOZeoyriyyV4";
const PORTRAIT_URL = "https://lh3.googleusercontent.com/aida/ADBb0uiJzUyywnNb8o4jltUhbgi4qSV0EJp43WqRAqetDzDKXZBsazqPBhyAhcI60SurB4JulG5O5wbv6kz_pTzn_XoHacbuZv4Py92uhJwCvMOKB9iYNE74zZRQbbhg28p6tALJBwENTS3dszbAfKrobIob-Q71wbbqKUgRVmBCPXj59lCm3eyZNcOSa1ePw2NSiGHZkulkLdBv_wjrq5hwfvttZaxXBe8YhEEFiR3Icrvj2clQ6f2IYSa6vx42YGSmzpFvUlT2WDIWUYQ";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-secondary-container hidden md:block">
        <div className="container-custom flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Equilibrium" className="h-14 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-on-surface font-medium">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href={WHATSAPP_LINK} target="_blank" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-sm">
              Agendar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-2 md:pt-40 pb-10 md:pb-20 overflow-hidden relative">
        <div className="absolute top-40 right-0 w-96 h-96 bg-secondary-container/50 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end">
          <motion.div 
            className="lg:col-span-6 space-y-4 md:space-y-8 lg:mb-6 text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.img 
              src={LOGO_URL} 
              alt="Equilibrium Logo" 
              className="h-24 md:h-32 mb-4 md:mb-8 mx-auto lg:hidden" 
              variants={fadeIn}
            />
            <motion.h1 className="heading-display text-primary" variants={fadeIn}>
              <span className="font-black italic text-[1.15em] inline-block">Transforme</span> sua tensão em <span className="font-black italic text-[1.15em] inline-block">equilíbrio</span> e <span className="font-black italic text-[1.15em] inline-block">bem-estar</span>
            </motion.h1>
            <motion.p className="body-lg" variants={fadeIn}>
              Experimente o poder curativo das mãos. Técnicas de massoterapia especializadas por Adriana de Fátima para aliviar o estresse, reduzir dores e promover um relaxamento profundo.
            </motion.p>
            <motion.div className="hidden lg:flex flex-wrap gap-4" variants={fadeIn}>
              <a href={WHATSAPP_LINK} target="_blank" className="btn-primary">
                <MessageCircle size={20} />
                Agendar sua Sessão
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 w-full max-w-sm mx-auto lg:max-w-md">
              <div className="absolute inset-0 bg-secondary-container/30 rounded-full blur-3xl transform scale-110 -z-10" />
              <img 
                src={PORTRAIT_URL} 
                alt="Adriana de Fátima" 
                className="w-full h-auto drop-shadow-xl contrast-[1.02]"
              />
            </div>
            
            <motion.div 
              className="mt-4 md:mt-8 flex justify-center lg:hidden"
              variants={fadeIn}
            >
              <a href={WHATSAPP_LINK} target="_blank" className="btn-primary">
                <MessageCircle size={20} />
                Agendar sua Sessão
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-surface-container-low">
        <div className="container-custom">
          <div className="bg-white rounded-[40px] p-6 md:p-16 shadow-xl shadow-black/[0.03] relative overflow-hidden border border-[#E6E6DF]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-30" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-sm">
                  <img 
                    src="https://lh3.googleusercontent.com/aida/ADBb0uim2nT0QG78BrtDhbaIBbi-S6-hv_OC4fzJ4zwPwJwrWj1ivJLzJYYJjFgv_1XnbjouIllBuaHcbNg-vhHBfqsHF4_SCAmP6MHWguzpS0ipED7hNHhXqaykuZTj9o-zxgeP0EDn43RAnFnHLZHTcmB4sWJ-YLvBV189xpkn5W5K7ty5i3h9m9RC27mde_IBCiZxXp_Uj0T2KX1unswSTJm1K2QG_bkJFbuBczQZYAuibI3Y4K9GXQOVBdYd0hKvZbuVDsaUK6DGl2Y" 
                    alt="Processo de Massagem" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg text-primary">Sobre a Massoterapeuta</h2>
                <p className="body-lg">
                  Olá meu nome é Adriana de Fátima, sou formada massoterapeuta pela escola Senac de Sorocaba, possuo técnicas precisas e firmes para uma experiência relaxante e terapêutica.
                </p>
                <p className="body-lg">
                  Meu objetivo é proporcionar um ambiente de acolhimento onde você possa se desconectar do mundo exterior e focar na sua saúde física e mental. Cada sessão é única e personalizada para atender às suas necessidades específicas.
                </p>
                <div className="pt-6 flex justify-center lg:justify-start">
                  <a href={WHATSAPP_LINK} className="btn-outline">
                    <Calendar size={20} />
                    Agendar Avaliação
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-4">
            <motion.h2 
              className="heading-lg text-primary"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              Tratamentos Especializados
            </motion.h2>
            <motion.p 
              className="body-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              Descubra as técnicas ideais para restaurar seu equilíbrio físico e mental.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Massagem Relaxante",
                tag: "Relaxamento",
                desc: "Técnica suave e rítmica focada no alívio do estresse, promovendo relaxamento profundo e bem-estar geral.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0uhvnRlTyZnB5y3KJ3MyaC_njEplFt2QovKb_PYiCjL_Z1MB2do2KiGRKvk-Vh2xSg0wFZrUFvAnX6VLKLQ6bDpSRlLNnZr_O4inX3vUmQn352VKUo_sTO0YfPE7Lx_jn1ApxOMyreucfb0Y9Q-opqKJKeianH_gz-hsKCuO2hU6UYP6Yx-F2bOb2ZpNvtDb4I0iCw2GOJBhME0sMq093BGEcaFTpXfZsqp8kkeZIJVctBNJeO99sdXDB2h8clHdXx4G_fIjC1n42-E"
              },
              {
                title: "Massagem Terapêutica",
                tag: "Terapêutico",
                desc: "Focada no tratamento de dores e disfunções musculares, utilizando técnicas específicas para liberação miofascial.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0ujhTPqZiEPMtlijQ0Koxh2gyk_dDZ9VmA5dKuzDnG5g_ZsaAi5NYhTWWTOycR_yqeKEBlp9_OnYbeFmTCxaYKXE1Is2uxCncjbk2gnZZJrJfZY2D3LIb8a0xhjfFjwEREV1iuZ3pVKFbH1XDyTwiNIThoHSJkFuLwOtkJ8SbtR8h7CQMAn89OiXzdyt7xI4Ll-EIJjDF031OqH3B1Rx423WuSCASeLIWk0I29Jd2H4S4ENEOwCe88Zxit89bCuRUKpi4HkbTOQ_SXQ"
              },
              {
                title: "Drenagem Linfática",
                tag: "Estética & Saúde",
                desc: "Movimentos suaves que estimulam o sistema linfático, reduzindo o inchaço e melhorando a circulação sanguínea.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0uhPBqVnzYQoN3aMSRtocaEYw0kk3lBjOTMV6uQk5_lJmb56a06IWYKmKCDN271trdpomwNzRBAf9IgjJ5qGPZRkehPN_kRtRnpRY0lc9JZFL8463AUKNgIXkcuZ2iT4ZoGUCZgOaP7OvYddOxq2Zax-a2Cvndw_lga-SlUjK151y3ob1VOeREX7hRbFDV74j-TENxW9Vc3HS94RUA4AdjmKbOviDUeoOyvemLbCYw752_UV7izF2m0Afpf8uCR8V-WJK3DLFtRTRyE"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="group bg-white rounded-[24px] overflow-hidden border border-[#E6E6DF] hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-500"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="heading-md text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant line-clamp-3">
                    {service.desc}
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-2 text-primary font-bold transition-transform group-hover:translate-x-1">
                    Agendar agora <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-primary to-[#4a0a52] text-white text-center">
        <div className="container-custom max-w-4xl space-y-8">
          <motion.div
            whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-white">Permita-se um momento de paz</h2>
            <p className="font-display text-white text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed">
              O cuidado que seu corpo e mente merecem está a apenas uma mensagem de distância. Reserve seu horário hoje.
            </p>
            <div className="pt-6">
              <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-all text-lg">
                <MessageCircle size={24} />
                Fale Comigo Agora
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-[#E6E6DF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="md:col-span-2 space-y-6">
              <img src={LOGO_URL} alt="Equilibrium" className="h-16 w-auto mx-auto md:mx-0 opacity-80" />
              <p className="text-on-surface-variant max-w-md">
                Dedicada a proporcionar saúde, equilíbrio e relaxamento através de técnicas manuais precisas e personalizadas.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Atendimento</h4>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-primary" /> (15) 99102-9607
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} className="text-primary" /> Sorocaba, SP
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Conecte-se</h4>
              <div className="flex justify-center md:justify-start gap-4 text-on-surface-variant">
                <a href="https://www.instagram.com/adrianafat.massoterapeuta/" target="_blank" className="hover:text-primary transition-colors p-2 bg-surface rounded-full"><Instagram size={20} /></a>
                <a href="https://www.instagram.com/adrianafat.massoterapeuta/" target="_blank" className="hover:text-primary transition-colors p-2 bg-surface rounded-full"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-[#E6E6DF] text-center text-[10px] uppercase tracking-widest text-on-surface-variant/60 leading-relaxed">
            © 2024 Adriana de Fátima Massoterapia <br className="md:hidden" /> Feito para o seu equilíbrio
          </div>
        </div>
      </footer>
    </div>
  );
}
