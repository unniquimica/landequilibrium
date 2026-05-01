import { motion } from 'motion/react';
import { 
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

const WHATSAPP_LINK = "https://wa.me/5515991241795?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20Massoterapia";
const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0ui5QYNAYQWgU5weuDe8F82TRFBOvjtS0u5pxv5PGptIpkf7lKAO5At099hsO_5JhhURZMQah8PYMivLXb3Pu5DFBUsC-OLJyITRu8iihj8OYMw1JT_lTFgkgfZSI_v39WwBgFJeQW8cCKgfE70EBIuaCpSYUeCoTGJn6GVgIg36BWsXoYyBoOpa5RtIkEN6jkYm1MYbwhhQ0STuN321cIRe6YxhuFS8cVlB41pEEI-dLOtm0nryDEj1Ra2vy9koFHmEOZeoyriyyV4";
const PORTRAIT_URL = "https://lh3.googleusercontent.com/aida/ADBb0uiJzUyywnNb8o4jltUhbgi4qSV0EJp43WqRAqetDzDKXZBsazqPBhyAhcI60SurB4JulG5O5wbv6kz_pTzn_XoHacbuZv4Py92uhJwCvMOKB9iYNE74zZRQbbhg28p6tALJBwENTS3dszbAfKrobIob-Q71wbbqKUgRVmBCPXj59lCm3eyZNcOSa1ePw2NSiGHZkulkLdBv_wjrq5hwfvttZaxXBe8YhEEFiR3Icrvj2clQ6f2IYSa6vx42YGSmzpFvUlT2WDIWUYQ";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.541 4.19 1.57 6.059L0 24l6.117-1.605a11.803 11.803 0 005.925 1.583h.005c6.635 0 12.032-5.391 12.036-12.03a11.83 11.83 0 00-3.483-8.514z"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-secondary-container hidden md:block transition-all duration-300">
        <div className="container-custom flex justify-between items-center h-24 lg:h-32">
          <a href="#home" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Equilibrium" className="h-14 lg:h-24 w-auto" />
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
      <section id="home" className="pt-4 md:pt-44 lg:pt-52 pb-6 md:pb-20 overflow-hidden relative">
        <div className="absolute top-40 right-0 w-96 h-96 bg-secondary-container/50 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-12 lg:items-end">
          <motion.div 
            className="lg:col-span-6 space-y-2 md:space-y-8 lg:mb-6 text-center lg:text-left"
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
                <WhatsAppIcon size={20} className="mr-1" />
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
                <WhatsAppIcon size={20} className="mr-1" />
                Agendar sua Sessão
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-24 bg-surface-container-low">
        <div className="container-custom">
          <div className="bg-white rounded-[40px] p-5 md:p-16 shadow-xl shadow-black/[0.03] relative overflow-hidden border border-[#E6E6DF]">
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
                  <a href={WHATSAPP_LINK} target="_blank" className="btn-outline">
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
      <section id="services" className="py-6 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-16 space-y-3 md:space-y-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Massagem Relaxante",
                tag: "Relaxamento",
                desc: "Reduz o estresse, alivia tensões musculares e promove o equilíbrio emocional. Estimula a circulação e libera endorfina, proporcionando relaxamento profundo e restaurando a harmonia entre corpo e mente.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0uhvnRlTyZnB5y3KJ3MyaC_njEplFt2QovKb_PYiCjL_Z1MB2do2KiGRKvk-Vh2xSg0wFZrUFvAnX6VLKLQ6bDpSRlLNnZr_O4inX3vUmQn352VKUo_sTO0YfPE7Lx_jn1ApxOMyreucfb0Y9Q-opqKJKeianH_gz-hsKCuO2hU6UYP6Yx-F2bOb2ZpNvtDb4I0iCw2GOJBhME0sMq093BGEcaFTpXfZsqp8kkeZIJVctBNJeO99sdXDB2h8clHdXx4G_fIjC1n42-E"
              },
              {
                title: "Massagem Terapêutica",
                tag: "Terapêutico",
                desc: "Focada no tratamento de dores e disfunções musculares, utilizando técnicas específicas para liberação miofascial e recuperação funcional.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0ujhTPqZiEPMtlijQ0Koxh2gyk_dDZ9VmA5dKuzDnG5g_ZsaAi5NYhTWWTOycR_yqeKEBlp9_OnYbeFmTCxaYKXE1Is2uxCncjbk2gnZZJrJfZY2D3LIb8a0xhjfFjwEREV1iuZ3pVKFbH1XDyTwiNIThoHSJkFuLwOtkJ8SbtR8h7CQMAn89OiXzdyt7xI4Ll-EIJjDF031OqH3B1Rx423WuSCASeLIWk0I29Jd2H4S4ENEOwCe88Zxit89bCuRUKpi4HkbTOQ_SXQ"
              },
              {
                title: "Drenagem Linfática",
                tag: "Estética & Saúde",
                desc: "Estimula o sistema linfático para eliminação de toxinas e redução de inchaços. Auxilia no combate à retenção de líquidos e acelera a recuperação pós-operatória.",
                img: "https://lh3.googleusercontent.com/aida/ADBb0uhPBqVnzYQoN3aMSRtocaEYw0kk3lBjOTMV6uQk5_lJmb56a06IWYKmKCDN271trdpomwNzRBAf9IgjJ5qGPZRkehPN_kRtRnpRY0lc9JZFL8463AUKNgIXkcuZ2iT4ZoGUCZgOaP7OvYddOxq2Zax-a2Cvndw_lga-SlUjK151y3ob1VOeREX7hRbFDV74j-TENxW9Vc3HS94RUA4AdjmKbOviDUeoOyvemLbCYw752_UV7izF2m0Afpf8uCR8V-WJK3DLFtRTRyE"
              },
              {
                title: "Cone Hindu",
                tag: "Equilíbrio & Limpeza",
                desc: "Relaxamento profundo e desobstrução de canais auditivos. Alivia dores de cabeça, reduz o estresse e promove equilíbrio energético através de técnica natural.",
                img: "https://i.pinimg.com/1200x/50/c8/54/50c854e56ef25e25e706f18b628c1b2b.jpg"
              },
              {
                title: "Shiatsu",
                tag: "Equilíbrio Energético",
                desc: "Terapia japonesa que promove equilíbrio físico e energético por meio de pressões em pontos específicos. Alivia tensões, melhora a circulação e reduz o estresse.",
                img: "https://i.pinimg.com/1200x/f1/5d/58/f15d58304ae598513e720962eddee91a.jpg"
              },
              {
                title: "Escalda Pés",
                tag: "Revitalização",
                desc: "Prática relaxante que alivia tensões e melhora a circulação sanguínea. Combinando água morna e ingredientes terapêuticos para suavizar dores e combater o cansaço.",
                img: "https://i.pinimg.com/1200x/c8/ab/8b/c8ab8bc79ba1070cb8742fbbddf8b6e0.jpg"
              },
              {
                title: "Cromoterapia",
                tag: "Energia das Cores",
                desc: "Utiliza cores para harmonizar corpo e mente. Auxilia no alívio do estresse, melhora do sono e fortalecimento do sistema imunológico, restaurando sua energia vital.",
                img: "https://i.pinimg.com/1200x/98/9c/76/989c762e569cc0a72712838cabb863b8.jpg"
              },
              {
                title: "Ventosaterapia",
                tag: "Circulação & Dor",
                desc: "Utiliza copos de sucção para melhorar a circulação e aliviar dores musculares. Promove relaxamento, desintoxicação e fortalecimento do sistema imunológico.",
                img: "https://i.pinimg.com/1200x/fa/20/60/fa206044fee8dd38cebed21c4d4f616d.jpg"
              },
              {
                title: "Bambuterapia",
                tag: "Estética & Alívio",
                desc: "Hastes de bambu que promovem relaxamento e melhoram a circulação. Estimula a drenagem linfática, reduz medidas e melhora a elasticidade da pele.",
                img: "https://i.pinimg.com/1200x/3a/7d/e1/3a7de137f0359c80dd1059cbca7f5005.jpg"
              },
              {
                title: "Pedras Quentes",
                tag: "Calor Terapêutico",
                desc: "Relaxamento profundo através do calor de pedras vulcânicas. Melhora a circulação, reduz o estresse e ajuda na desintoxicação do organismo de forma revigorante.",
                img: "https://i.pinimg.com/1200x/33/a9/c0/33a9c0f981a0aff7fd5da9e030fb893f.jpg"
              },
              {
                title: "Moxaterapia",
                tag: "Medicina Oriental",
                desc: "Técnica milenar que utiliza calor para estimular pontos energéticos. Promove alívio de dores, melhora a circulação e equilibra a energia vital do corpo.",
                img: "https://i.pinimg.com/736x/fd/81/3b/fd813b9569be61fbdaa60f4158ebb166.jpg"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="group bg-white rounded-[24px] overflow-hidden border border-[#E6E6DF] transition-all duration-500 active:shadow-inner"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="heading-md text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant line-clamp-3">
                    {service.desc}
                  </p>
                  <motion.a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-primary font-bold"
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 5 }}
                  >
                    Saiba mais <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-[#4a0a52] text-white text-center relative overflow-hidden">
        <div className="container-custom max-w-4xl space-y-6 relative z-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-none whitespace-nowrap tracking-wide px-2">Massagem não é luxo!</h2>
            <p className="font-sans text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white/95 max-w-4xl mx-auto leading-relaxed mb-12 px-4">
              É cura, autocuidado, qualidade de vida,<br />
              amor próprio, equilíbrio e investimento!
            </p>

            <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all text-xl md:text-2xl">
              <WhatsAppIcon size={28} />
              Fale Comigo Agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-16 bg-white border-t border-[#E6E6DF]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 text-center md:text-left">
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <img src={LOGO_URL} alt="Equilibrium" className="h-16 md:h-24 w-auto mx-auto md:mx-0 opacity-80" />
              <p className="text-on-surface-variant max-w-md">
                Dedicada a proporcionar saúde, equilíbrio e relaxamento através de técnicas manuais precisas e personalizadas.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Atendimento</h4>
              <ul className="space-y-2 text-on-surface-variant">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-primary" /> (15) 99124-1795
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} className="text-primary" /> Sorocaba, SP
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-on-surface uppercase tracking-widest text-xs">Conecte-se</h4>
              <div className="flex justify-center md:justify-start gap-4 text-on-surface-variant">
                <a href="https://www.instagram.com/adrianafat.massoterapeuta/" target="_blank" className="hover:text-primary transition-colors p-2 bg-surface rounded-full"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/adrianafat.massoterapeuta" target="_blank" className="hover:text-primary transition-colors p-2 bg-surface rounded-full"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 md:mt-16 md:pt-8 border-t border-[#E6E6DF] text-center text-[10px] uppercase tracking-widest text-on-surface-variant/60 leading-relaxed">
            © 2024 Adriana de Fátima Massoterapia <br className="md:hidden" /> Feito para o seu equilíbrio
          </div>
        </div>
      </footer>
    </div>
  );
}
