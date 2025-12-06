import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.idea': 'Ideia',
    'nav.timeline': 'Linha do Tempo',
    'nav.comparison': 'Comparação',
    'nav.extinction': 'Sexta Extinção',
    'nav.method': 'Método',
    'nav.end': 'Fim',
    
    // Hero
    'hero.title': 'Holy Lies',
    'hero.subtitle': 'Um registro visual das mortes justificadas pela fé, pelo poder e pela crença — enquanto o planeta morre em silêncio.',
    'hero.cta': 'Explorar as Evidências',
    'hero.micro': 'Baseado em dados. Historicamente fundamentado. Desconfortável por natureza.',
    
    // Core Idea
    'idea.title': 'A Ideia Central',
    'idea.p1': 'Deus é descrito como amor absoluto, fonte de toda compaixão e bondade.',
    'idea.p2': 'Mas, historicamente, em seu nome ocorreram massacres em escala massiva — cruzadas, inquisições, guerras santas, terrorismo.',
    'idea.p3': 'A responsabilidade é exclusivamente humana, não sobrenatural. Nenhuma entidade divina empunhou uma espada.',
    'idea.stat1.label': 'Extinções em massa naturais',
    'idea.stat1.value': '5',
    'idea.stat2.label': 'Guerras religiosas registradas',
    'idea.stat2.value': '100+',
    'idea.stat3.label': 'Mortes em conflitos humanos',
    'idea.stat3.value': 'Dezenas de milhões+',
    
    // Timeline
    'timeline.title': 'Linha do Tempo da Morte',
    'timeline.event1.title': 'Extinção Ordoviciano-Siluriano',
    'timeline.event1.year': '~445 milhões de anos',
    'timeline.event1.desc': 'Primeira grande extinção. 85% das espécies marinhas desapareceram devido a mudanças climáticas.',
    'timeline.event2.title': 'Extinção Permiano-Triássico',
    'timeline.event2.year': '~252 milhões de anos',
    'timeline.event2.desc': 'A "Grande Morte". 96% das espécies marinhas e 70% das terrestres extintas.',
    'timeline.event3.title': 'As Cruzadas',
    'timeline.event3.year': '1095–1291',
    'timeline.event3.desc': 'Guerras religiosas que mataram milhões em nome da fé cristã. Massacres, pilhagens, destruição.',
    'timeline.event4.title': 'Inquisição',
    'timeline.event4.year': '1184–1834',
    'timeline.event4.desc': 'Séculos de tortura, perseguição e execuções em nome da pureza religiosa.',
    'timeline.event5.title': 'Terrorismo Religioso Moderno',
    'timeline.event5.year': '1979–presente',
    'timeline.event5.desc': 'Ataques em nome de diversas religiões mataram milhares em todo o mundo.',
    'timeline.event6.title': 'Colapso Ambiental',
    'timeline.event6.year': '1950–presente',
    'timeline.event6.desc': 'A sexta extinção em andamento. Causada exclusivamente por ações humanas.',
    
    // Comparison
    'comparison.title': 'Quem Mata Mais: A Natureza ou Nós?',
    'comparison.nature.title': 'Extinções Naturais',
    'comparison.nature.value': '~4.5 bilhões de anos',
    'comparison.nature.desc': '5 grandes extinções em massa',
    'comparison.god.title': 'Em Nome de Deus',
    'comparison.god.value': '~2.000 anos',
    'comparison.god.desc': 'Milhões de mortes documentadas',
    'comparison.industrial.title': 'Colapso Industrial',
    'comparison.industrial.value': '~200 anos',
    'comparison.industrial.desc': 'Aceleração exponencial da destruição',
    'comparison.conclusion': 'A natureza levou bilhões de anos. Nós estamos fazendo em décadas.',
    
    // Sixth Extinction
    'extinction.title': 'A Sexta Extinção Pode Ser Causada Pelo Homem',
    'extinction.intro': 'As cinco grandes extinções passadas foram causadas por eventos naturais cataclísmicos — vulcanismo, asteroides, mudanças climáticas naturais.',
    'extinction.current': 'Hoje, cientistas alertam que estamos no início da sexta grande extinção. Mas desta vez, a causa somos nós:',
    'extinction.cause1': 'Mudanças climáticas aceleradas',
    'extinction.cause2': 'Desmatamento em escala industrial',
    'extinction.cause3': 'Poluição de oceanos e atmosfera',
    'extinction.cause4': 'Guerras e conflitos armados',
    'extinction.cause5': 'Consumo extremo e insustentável',
    'extinction.quote': 'Desta vez não há asteroide. Há apenas decisões humanas.',
    
    // Method
    'method.title': 'Como Estes Dados Devem Ser Interpretados',
    'method.p1': 'Os números apresentados são estimativas baseadas em consenso científico e registros históricos. Muitos são aproximações, pois dados precisos de eventos antigos são impossíveis.',
    'method.p2': 'O objetivo deste projeto é educacional: provocar reflexão sobre a responsabilidade humana em atrocidades históricas e na crise ambiental atual.',
    'method.p3': 'Esta é uma crítica a sistemas de poder e ideologias que usaram a religião como justificativa, não às pessoas de fé ou às religiões em si.',
    'method.sources': 'Fontes e Referências',
    'method.source1': 'IPCC - Painel Intergovernamental sobre Mudanças Climáticas',
    'method.source2': 'Registros históricos de conflitos religiosos',
    'method.source3': 'Estudos paleontológicos sobre extinções em massa',
    'method.source4': 'Relatórios da ONU sobre biodiversidade',
    
    // Final
    'final.title': 'O Que Você Faz Com Essa Verdade É Sua Escolha',
    'final.p1': 'Não pedimos que você abandone sua fé. Não pedimos que você culpe qualquer religião.',
    'final.p2': 'Pedimos apenas que você reconheça: a responsabilidade é humana. Sempre foi. E o futuro também está em nossas mãos.',
    'final.p3': 'O que você faz com essa informação — ignorar, refletir, agir — é sua escolha.',
    'final.cta': 'Voltar ao Topo',
    
    // Footer
    'footer.tagline': 'Holy Lies — Um projeto não religioso, baseado em dados.',
    'footer.contact': 'Contato',
    'footer.sources': 'Fontes',
    'footer.project': 'Projeto',
  },
  en: {
    // Navigation
    'nav.idea': 'Idea',
    'nav.timeline': 'Timeline',
    'nav.comparison': 'Comparison',
    'nav.extinction': 'Sixth Extinction',
    'nav.method': 'Method',
    'nav.end': 'End',
    
    // Hero
    'hero.title': 'Holy Lies',
    'hero.subtitle': 'A visual record of deaths justified by faith, power, and belief — while the planet dies in silence.',
    'hero.cta': 'Explore the Evidence',
    'hero.micro': 'Data-driven. Historically grounded. Uncomfortable by nature.',
    
    // Core Idea
    'idea.title': 'The Core Idea',
    'idea.p1': 'God is described as absolute love, the source of all compassion and kindness.',
    'idea.p2': 'But, historically, in His name occurred massacres on a massive scale — crusades, inquisitions, holy wars, terrorism.',
    'idea.p3': 'The responsibility is exclusively human, not supernatural. No divine entity ever wielded a sword.',
    'idea.stat1.label': 'Natural mass extinctions',
    'idea.stat1.value': '5',
    'idea.stat2.label': 'Recorded religious wars',
    'idea.stat2.value': '100+',
    'idea.stat3.label': 'Deaths in human conflicts',
    'idea.stat3.value': 'Tens of millions+',
    
    // Timeline
    'timeline.title': 'Timeline of Death',
    'timeline.event1.title': 'Ordovician-Silurian Extinction',
    'timeline.event1.year': '~445 million years ago',
    'timeline.event1.desc': 'First great extinction. 85% of marine species disappeared due to climate changes.',
    'timeline.event2.title': 'Permian-Triassic Extinction',
    'timeline.event2.year': '~252 million years ago',
    'timeline.event2.desc': 'The "Great Dying". 96% of marine species and 70% of terrestrial ones extinct.',
    'timeline.event3.title': 'The Crusades',
    'timeline.event3.year': '1095–1291',
    'timeline.event3.desc': 'Religious wars that killed millions in the name of Christian faith. Massacres, looting, destruction.',
    'timeline.event4.title': 'The Inquisition',
    'timeline.event4.year': '1184–1834',
    'timeline.event4.desc': 'Centuries of torture, persecution, and executions in the name of religious purity.',
    'timeline.event5.title': 'Modern Religious Terrorism',
    'timeline.event5.year': '1979–present',
    'timeline.event5.desc': 'Attacks in the name of various religions have killed thousands worldwide.',
    'timeline.event6.title': 'Environmental Collapse',
    'timeline.event6.year': '1950–present',
    'timeline.event6.desc': 'The sixth extinction in progress. Caused exclusively by human actions.',
    
    // Comparison
    'comparison.title': 'Who Kills More: Nature or Us?',
    'comparison.nature.title': 'Natural Extinctions',
    'comparison.nature.value': '~4.5 billion years',
    'comparison.nature.desc': '5 major mass extinctions',
    'comparison.god.title': 'In the Name of God',
    'comparison.god.value': '~2,000 years',
    'comparison.god.desc': 'Millions of documented deaths',
    'comparison.industrial.title': 'Industrial Collapse',
    'comparison.industrial.value': '~200 years',
    'comparison.industrial.desc': 'Exponential acceleration of destruction',
    'comparison.conclusion': 'Nature took billions of years. We are doing it in decades.',
    
    // Sixth Extinction
    'extinction.title': 'The Sixth Extinction May Be Caused by Humans',
    'extinction.intro': 'The five major past extinctions were caused by natural cataclysmic events — volcanism, asteroids, natural climate changes.',
    'extinction.current': 'Today, scientists warn that we are at the beginning of the sixth great extinction. But this time, the cause is us:',
    'extinction.cause1': 'Accelerated climate change',
    'extinction.cause2': 'Industrial-scale deforestation',
    'extinction.cause3': 'Pollution of oceans and atmosphere',
    'extinction.cause4': 'Wars and armed conflicts',
    'extinction.cause5': 'Extreme and unsustainable consumption',
    'extinction.quote': 'This time there is no asteroid. There are only human decisions.',
    
    // Method
    'method.title': 'How This Data Should Be Interpreted',
    'method.p1': 'The numbers presented are estimates based on scientific consensus and historical records. Many are approximations, as precise data from ancient events is impossible.',
    'method.p2': 'The goal of this project is educational: to provoke reflection on human responsibility in historical atrocities and the current environmental crisis.',
    'method.p3': 'This is a critique of power systems and ideologies that used religion as justification, not of people of faith or religions themselves.',
    'method.sources': 'Sources and References',
    'method.source1': 'IPCC - Intergovernmental Panel on Climate Change',
    'method.source2': 'Historical records of religious conflicts',
    'method.source3': 'Paleontological studies on mass extinctions',
    'method.source4': 'UN reports on biodiversity',
    
    // Final
    'final.title': 'What You Do With This Truth Is Your Choice',
    'final.p1': 'We do not ask you to abandon your faith. We do not ask you to blame any religion.',
    'final.p2': 'We only ask that you recognize: the responsibility is human. It always was. And the future is also in our hands.',
    'final.p3': 'What you do with this information — ignore, reflect, act — is your choice.',
    'final.cta': 'Back to Top',
    
    // Footer
    'footer.tagline': 'Holy Lies — A non-religious, data-driven project.',
    'footer.contact': 'Contact',
    'footer.sources': 'Sources',
    'footer.project': 'Project',
  },
  es: {
    // Navigation
    'nav.idea': 'Idea',
    'nav.timeline': 'Línea del Tiempo',
    'nav.comparison': 'Comparación',
    'nav.extinction': 'Sexta Extinción',
    'nav.method': 'Método',
    'nav.end': 'Fin',
    
    // Hero
    'hero.title': 'Holy Lies',
    'hero.subtitle': 'Un registro visual de las muertes justificadas por la fe, el poder y la creencia — mientras el planeta muere en silencio.',
    'hero.cta': 'Explorar las Evidencias',
    'hero.micro': 'Basado en datos. Históricamente fundamentado. Incómodo por naturaleza.',
    
    // Core Idea
    'idea.title': 'La Idea Central',
    'idea.p1': 'Dios es descrito como amor absoluto, fuente de toda compasión y bondad.',
    'idea.p2': 'Pero, históricamente, en su nombre ocurrieron masacres a escala masiva — cruzadas, inquisiciones, guerras santas, terrorismo.',
    'idea.p3': 'La responsabilidad es exclusivamente humana, no sobrenatural. Ninguna entidad divina empuñó una espada.',
    'idea.stat1.label': 'Extinciones en masa naturales',
    'idea.stat1.value': '5',
    'idea.stat2.label': 'Guerras religiosas registradas',
    'idea.stat2.value': '100+',
    'idea.stat3.label': 'Muertes en conflictos humanos',
    'idea.stat3.value': 'Decenas de millones+',
    
    // Timeline
    'timeline.title': 'Línea del Tiempo de la Muerte',
    'timeline.event1.title': 'Extinción Ordovícico-Silúrico',
    'timeline.event1.year': '~445 millones de años',
    'timeline.event1.desc': 'Primera gran extinción. 85% de las especies marinas desaparecieron debido a cambios climáticos.',
    'timeline.event2.title': 'Extinción Pérmico-Triásico',
    'timeline.event2.year': '~252 millones de años',
    'timeline.event2.desc': 'La "Gran Muerte". 96% de las especies marinas y 70% de las terrestres extintas.',
    'timeline.event3.title': 'Las Cruzadas',
    'timeline.event3.year': '1095–1291',
    'timeline.event3.desc': 'Guerras religiosas que mataron millones en nombre de la fe cristiana. Masacres, saqueos, destrucción.',
    'timeline.event4.title': 'La Inquisición',
    'timeline.event4.year': '1184–1834',
    'timeline.event4.desc': 'Siglos de tortura, persecución y ejecuciones en nombre de la pureza religiosa.',
    'timeline.event5.title': 'Terrorismo Religioso Moderno',
    'timeline.event5.year': '1979–presente',
    'timeline.event5.desc': 'Ataques en nombre de diversas religiones han matado miles en todo el mundo.',
    'timeline.event6.title': 'Colapso Ambiental',
    'timeline.event6.year': '1950–presente',
    'timeline.event6.desc': 'La sexta extinción en progreso. Causada exclusivamente por acciones humanas.',
    
    // Comparison
    'comparison.title': '¿Quién Mata Más: La Naturaleza o Nosotros?',
    'comparison.nature.title': 'Extinciones Naturales',
    'comparison.nature.value': '~4.5 mil millones de años',
    'comparison.nature.desc': '5 grandes extinciones en masa',
    'comparison.god.title': 'En Nombre de Dios',
    'comparison.god.value': '~2.000 años',
    'comparison.god.desc': 'Millones de muertes documentadas',
    'comparison.industrial.title': 'Colapso Industrial',
    'comparison.industrial.value': '~200 años',
    'comparison.industrial.desc': 'Aceleración exponencial de la destrucción',
    'comparison.conclusion': 'La naturaleza tardó miles de millones de años. Nosotros lo hacemos en décadas.',
    
    // Sixth Extinction
    'extinction.title': 'La Sexta Extinción Puede Ser Causada Por el Hombre',
    'extinction.intro': 'Las cinco grandes extinciones pasadas fueron causadas por eventos naturales cataclísmicos — vulcanismo, asteroides, cambios climáticos naturales.',
    'extinction.current': 'Hoy, los científicos advierten que estamos al inicio de la sexta gran extinción. Pero esta vez, la causa somos nosotros:',
    'extinction.cause1': 'Cambios climáticos acelerados',
    'extinction.cause2': 'Deforestación a escala industrial',
    'extinction.cause3': 'Contaminación de océanos y atmósfera',
    'extinction.cause4': 'Guerras y conflictos armados',
    'extinction.cause5': 'Consumo extremo e insostenible',
    'extinction.quote': 'Esta vez no hay asteroide. Solo hay decisiones humanas.',
    
    // Method
    'method.title': 'Cómo Deben Interpretarse Estos Datos',
    'method.p1': 'Los números presentados son estimaciones basadas en consenso científico y registros históricos. Muchos son aproximaciones, ya que datos precisos de eventos antiguos son imposibles.',
    'method.p2': 'El objetivo de este proyecto es educativo: provocar reflexión sobre la responsabilidad humana en atrocidades históricas y la crisis ambiental actual.',
    'method.p3': 'Esta es una crítica a sistemas de poder e ideologías que usaron la religión como justificación, no a las personas de fe ni a las religiones en sí.',
    'method.sources': 'Fuentes y Referencias',
    'method.source1': 'IPCC - Panel Intergubernamental sobre Cambio Climático',
    'method.source2': 'Registros históricos de conflictos religiosos',
    'method.source3': 'Estudios paleontológicos sobre extinciones en masa',
    'method.source4': 'Informes de la ONU sobre biodiversidad',
    
    // Final
    'final.title': 'Lo Que Hagas Con Esta Verdad Es Tu Elección',
    'final.p1': 'No pedimos que abandones tu fe. No pedimos que culpes a ninguna religión.',
    'final.p2': 'Solo pedimos que reconozcas: la responsabilidad es humana. Siempre lo fue. Y el futuro también está en nuestras manos.',
    'final.p3': 'Lo que hagas con esta información — ignorar, reflexionar, actuar — es tu elección.',
    'final.cta': 'Volver Arriba',
    
    // Footer
    'footer.tagline': 'Holy Lies — Un proyecto no religioso, basado en datos.',
    'footer.contact': 'Contacto',
    'footer.sources': 'Fuentes',
    'footer.project': 'Proyecto',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
