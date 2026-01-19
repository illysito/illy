const TRIGRAMS = [
  {
    name: `Ch'ien,  lo Creativo,  el Cielo`,
    bin: 0b111,
  },
  {
    name: `Kun,  lo Receptivo,  la Tierra`,
    bin: 0b000,
  },
  {
    name: `Chen,  lo Suscitativo,  el Trueno`,
    bin: 0b100,
  },
  {
    name: `K'an,  lo Abismal,  el Agua`,
    bin: 0b010,
  },
  {
    name: `Ken,  el Aquietamiento,  la Montaña`,
    bin: 0b001,
  },
  {
    name: `Sun,  lo Suave,  el Viento,  la Madera`,
    bin: 0b011,
  },
  {
    name: `Li,  lo Adherente,  el Fuego`,
    bin: 0b101,
  },
  {
    name: `Tui,  lo Sereno,  el Lago`,
    bin: 0b110,
  },
]

const triByBin = new Map(TRIGRAMS.map((t) => [t.bin, t]))

const HEXAGRAMS = [
  {
    order: 1,
    bin: 0b111111,
    name: `Ch'ien  /  Lo Creativo`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b111).name,
    mutable1: 'Al comienzo un nueve significa:\nDragón cubierto. No actúes.',
    mutable2:
      'Nueve en el segundo puesto significa:\nDragón que aparece sobre el campo.\nEs propicio ver al gran hombre.',
    mutable3:
      'Nueve en el tercer puesto significa:\nEl noble es creativamente activo todo el día.\nAun por la noche lo embarga la preocupación interior.\nPeligro. Ninguna tacha.',
    mutable4:
      'Nueve en el cuarto puesto significa:\nVacilante elevación sobre el precipicio. Ninguna tacha.',
    mutable5:
      'Nueve en el quinto puesto significa:\nDragón que vuela en el cielo.\nEs propicio ver al gran hombre.',
    mutable6:
      'Al tope un nueve significa:\nDragón soberbio tendrá que arrepentirse.',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia.',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%202.png',
  },
  {
    order: 2,
    bin: 0b000000,
    name: `K'un  /  Lo Receptivo`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa:\nCuando se pisa escarcha, se aproxima el hielo firme.',
    mutable2:
      'Seis en el segundo puesto significa:\nRectilíneo, rectangular, grande.\nSin propósito, y sin embargo nada queda que no se vea fomentado.',
    mutable3:
      'Seis en el tercer puesto significa:\nLíneas ocultas; se es capaz de permanecer perseverante.\nSi acaso sigues al servicio de un rey,\n¡no busques obras, sino llévalas a cabo!',
    mutable4:
      'Seis en el cuarto puesto significa:\nBolsa atada. Ninguna tacha; ningún elogio.',
    mutable5:
      'Seis en el quinto puesto significa:\nRopa interior amarilla trae elevada ventura.',
    mutable6:
      'Al tope un seis significa:\nDragones luchan en la pradera.\nSu sangre es negra y amarilla.',
    dictamen:
      'Lo Receptivo obra elevado éxito, propiciante por la perseverancia de una yegua. Cuando el noble ha de emprender algo y quiere avanzar, se extravía; mas si va en seguimiento encuentra conducción. Es propicio encontrar amigos al Oeste y al Sur, evitar los amigos al Este y al Norte. Una tranquila perseverancia trae ventura.',
    imagen:
      'El estado de la Tierra es la receptiva entrega. Así el noble, de naturaleza amplia, sostiene el mundo externo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%203.png',
  },
  {
    order: 3,
    bin: 0b100010,
    name: `Chun  /  La Dificultad Inicial`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b100).name,
    mutable1:
      'Al comienzo un nueve significa:\nVacilación y traba.\nEs propicio permanecer perseverante.\nEs propicio designar ayudantes.',
    mutable2:
      'Seis en el segundo puesto significa:\nSe apilan dificultades. Caballo y carro se separan.\nÉl no es un raptor,\nva a cortejar en el debido plazo.\nLa doncella es casta, no se promete.\nDiez años, luego promete.',
    mutable3:
      'Seis en el tercer puesto significa:\nEl que caza al ciervo sin guardamonte,\nlo único que logra es extraviarse en el bosque.\nEl noble capta los signos del tiempo\ny prefiere desistir.\nContinuar acarrea humillación.',
    mutable4:
      'Seis en el cuarto puesto significa:\nCaballo y carro se separan.\n¡Busca la unión!\nAcudir trae ventura.\nTodo obra de un modo propicio.',
    mutable5:
      'Nueve en el quito puesto significa:\nDificultades en bendecir.\nPequeña perseverancia trae ventura.\nGran perseverancia trae desventura.',
    mutable6:
      'Al tope un seis significa:\nCaballo y carro se separan.\nLágrimas de sangre se derraman.',
    dictamen:
      'Lo Dificultad Inicial obra elevado éxito. Propicio en virtud de la perseverancia. No debe emprenderse nada. Es propicio designar ayudantes.',
    imagen:
      'Nubes y trueno: la imagen de La Dificultad Inicial. Así el noble actúa desenmarañando y ordenando.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%204.png',
  },
  {
    order: 4,
    bin: 0b010001,
    name: `Meng  /  La Necedad Juvenil`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b010).name,
    mutable1:
      'Al comienzo un seis significa:\nCon el fin de desarrollar al necio\nes propicio disciplinar al hombre.\nDeben quitarse las trabas.\nContinuar así trae humillación.',
    mutable2:
      'Nueve en el segundo puesto significa:\nSoportar a los necios con benevolencia trae ventura.\nSaber tomar a las mujeres trae ventura.\nEl hijo es apto para administrar la casa.',
    mutable3:
      'Seis en el tercer puesto significa:\nNo has de tomar una muchacha\nque ve a un hombre de bronce\ny ya no es dueña de sí misma.\nNada es propicio.',
    mutable4:
      'Seis en el cuarto puesto significa:\nNecedad con cortedad trae humillación.',
    mutable5:
      'Seis en el quinto puesto significa:\nNecedad infantil aporta ventura.',
    mutable6:
      'Al tope un nueve significa:\nAl castigar la necedad no es propicio\ncometer abusos.\nSólo es propicio defenderse de abusos.',
    dictamen:
      'La Necedad Juvenil tiene éxito. No soy yo quien busca al joven necio, el joven necio me busca a mí. Al primer oráculo doy razón. Si pregunta dos, tres veces, es molestia. Cuando molesta no doy información. Es propicia la perseverancia.',
    imagen:
      'En lo bajo, al pie de la montaña, surge un manantial: la imagen de la juventud. Así el noble, mediante su actuación escrupulosa, sustenta su carácter.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%205.png',
  },
  {
    order: 5,
    bin: 0b111010,
    name: `Hsü  /  La Espera (La Alimentación)`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Esperar en la pradera. Es propicio permanecer en lo duradero. Ningún defecto.',
    mutable2:
      'Nueve en el segundo puesto significa: La espera en la arena. Hay alguna habladuría. El final aporta ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: La Espera en el fango da lugar a la llegada del enemigo.',
    mutable4:
      'Seis en el cuarto puesto significa: La Espera en la sangre. ¡Fuera del agujero!',
    mutable5:
      'Nueve en el quinto puesto significa: Esperar junto al vino y la comida. La perseverancia trae ventura.',
    mutable6:
      'Al tope un seis significa: Uno cae en el agujero. Arriban entonces tres huéspedes no convidados. Hónralos y al fin llegará la ventura.',
    dictamen:
      'La Espera. Si eres veraz, tendrás luz y éxito. La perseverancia trae ventura. Es propicio atravesar las grandes aguas.',
    imagen:
      'En el cielo se elevan nubes: la imagen de La Espera. Así come y bebe el noble y permanece sereno y de buen humor.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%206.png',
  },
  {
    order: 6,
    bin: 0b010111,
    name: `Sung  /  El Conflicto (El Pleito)`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b010).name,
    mutable1:
      'Al comienzo un seis significa: Si uno no perpetúa la cuestión habrá un poco de chismorreo. Al cabo llega la ventura.',
    mutable2:
      'Nueve en el segundo puesto significa: Uno no puede pleitear, retorna a su casa y lo elude. Las gentes de su ciudad, trescientas casas, quedan libres de culpa.',
    mutable3:
      'Seis en el tercer puesto significa: Nutrirse de antigua virtud da perseverancia. Peligro, al cabo llega la ventura. Si acaso sigues obediente al servicio de un rey, no busques obras.',
    mutable4:
      'Nueve en el cuarto puesto significa: Uno no puede pleitear, se vuelve y acata el destino, cambia, y encuentra paz en la perseverancia. ¡Ventura!',
    mutable5:
      'Nueve en el quinto puesto significa: Pleitear ante él trae elevada ventura.',
    mutable6:
      'Al tope un nueve significa: Aun cuando acaso a alguien se le otorgue un cinturón de cuero, al terminar la mañana le será arrancado tres veces.',
    dictamen:
      'El Conflicto: eres veraz y te frenan. Detenerse con cautela a mitad de camino trae ventura. Ir hasta el fin trae desventura.',
    imagen:
      'Cielo y agua se mueven en sentido contrario: la imagen del conflicto. Así el noble, en todos los negocios que realiza, reflexiona debidamente sobre su comienzo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%207.png',
  },
  {
    order: 7,
    bin: 0b010000,
    name: `Shih  /  El Ejército`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b010).name,
    mutable1:
      'Al comienzo un seis significa: Un ejército ha de partir en perfecto orden. Cuando es bueno el orden, amenaza la desventura.',
    mutable2:
      'Nueve en el segundo puesto significa: ¡En medio del ejército! ¡Ventura! ¡Ninguna falla! El rey confiere un triple galardón.',
    mutable3:
      'Seis en el tercer puesto significa: Acaso el ejército conduzca cadáveres en el carruaje. ¡Desventura!',
    mutable4:
      'Seis en el cuarto puesto significa: El ejército se retira. No hay falla.',
    mutable5:
      'Seis en el quinto puesto significa: En el campo hay un montaraz. Es propicio apresarlo. No hay falla. Conduzca el de más avanzada edad el ejército. El más jovenconduce cadáveres; así la perseverancia acarrea desventura.',
    mutable6:
      'Al tope un seis significa: El gran príncipe emite órdenes, funda Estados, otorga feudos a familias. Hombres vulgares no deben utilizarse.',
    dictamen:
      'El Ejército requiere perseverancia y un hombre fuerte. Ventura sin falla.',
    imagen:
      'En medio de la tierra hay agua: la imagen del ejército. Así el noble, en virtud de su magnanimidad para con el pueblo, acreciente sus multitudes.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%208.png',
  },
  {
    order: 8,
    bin: 0b000010,
    name: `Pi  /  La Solidaridad (El mantenerse unido)`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: Mantente solidario con él, de verdad y lealmente: no será una falla. Verdad como una colmada vasija de barro. Así por fin desde afuera llegará la ventura.',
    mutable2:
      'Seis en el segundo puesto significa: Mantente solidario con él en tu fuero interno. La perseverancia trae ventura.',
    mutable3:
      'Seis en el tercer puesto significa: Te solidarizas con gente que no es la que debe ser.',
    mutable4:
      'Seis en el cuarto puesto significa: También en lo externo mantente solidario con él. La perseverancia trae ventura.',
    mutable5:
      'Nueve en el quinto puesto significa: Manifestación de la solidaridad. El rey, durante la cacería, sólo permite la batida desde tres lados, y renuncia a los venados que se desvían hacia adelante. Los ciudadanos no requieren advertencia. ¡Ventura!',
    mutable6:
      'Al tope un seis significa: No encuentra cabeza para la solidaridad. Desventura.',
    dictamen:
      'La Solidaridad trae ventura. Indaga el oráculo una vez más, ve si tienes elevación, duración y perseverancia; si es así no habrá defecto. Los inseguros se allegan poco a poco. El que llega tarde tiene desventura.',
    imagen:
      'Sobre la tierra hay agua: la imagen de la solidaridad. Así los reyes de tiempos antiguos otorgaban en feudo los diferentes Estados y mantenían trato amistoso con los príncipes vasallos.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%209.png',
  },
  {
    order: 9,
    bin: 0b111011,
    name: `Hsiao Ch'u  /  La Fuerza Domesticadora de lo Pequeño`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Retorno al camino. ¡Cómo podría ser una falla! ¡Ventura!',
    mutable2:
      'Nueve en el segundo puesto significa: Se deja arrastrar hacia el retorno. ¡Ventura!',
    mutable3:
      'Nueve en el tercer puesto significa: Al carruaje se le saltan los rayos. El hombre y la mujer turcen los ojos.',
    mutable4:
      'Seis en el cuarto puesto significa: Si eres veraz, desaparece la sangre y retrocede la angustia.',
    mutable5:
      'Nueve en el quinto puesto significa: Si eres veraz y leal en la alianza, eres rico en tu prójimo.',
    mutable6:
      'Al tope un nueve significa: Llega la lluvia, llega el sosiego. Esto se debe a la permanente acción del carácter. La mujer cae en peligro debido a su perseverancia. La luna está casi llena. Si el noble prosigue, llegará la desventura.',
    dictamen:
      'La Fuerza Domesticadora de lo Pequeño tiene éxito. Densas nubes, ninguna lluvia de nuestra región del Oeste.',
    imagen:
      'El viento recorre el cielo: la imagen de La Fuerza Domesticadora de lo Pequeño. Así el noble va refinando la forma exterior de su naturaleza.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2010.png',
  },
  {
    order: 10,
    bin: 0b110111,
    name: `Lü  /  El Porte (La Pisada)`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b110).name,
    mutable1:
      'Al comienzo un nueve significa: Porte sencillo. Progreso sin defecto.',
    mutable2:
      'Nueve en el segundo puesto significa: Pisar en llana y sencilla vía. La perseverancia de un hombre oscuro trae ventura.',
    mutable3:
      'Seis en el tercer puesto significa: Un tuerto puede ver, un tullido puede pisar. Pisa la cola del tigre. Éste muerde al hombre. ¡Desventura! Un guerrero actúa así en bien de su gran príncipe.',
    mutable4:
      'Nueve en el cuarto puesto significa: Él pisa la cola del tigre. Cautela y circunspección conducen finalmente a la ventura.',
    mutable5:
      'Nueve en el quinto puesto significa: Porte decidido. Perseverancia, con conciencia el peligro.',
    mutable6:
      'Al tope un nueve significa: Contempla tu porte y examina las señales favorables. Si todo es perfecto, advendrá una elevada ventura.',
    dictamen: 'Pisar la cola del tigre. Este no muerde al hombre. Éxito.',
    imagen:
      'Arriba el cielo, abajo el lago: la imagen del Porte. Así distingue el noble entre lo alto y lo bajo y afirma con ello el sentido del pueblo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2011.png',
  },
  {
    order: 11,
    bin: 0b111000,
    name: `T'ai  /  La Paz`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Cuando se arranca faláridas, sale adherida la hierba del césped. Cada cual a su manera. Las empresas traen ventura.',
    mutable2:
      'Nueve en el segundo puesto significa: Soportar a los incultos con benevolencia, atravesar el río resueltamente, no descuidar lo lejano, no tomar en consideración a los compañeros: así tal vez se logre andar por el camino del medio.',
    mutable3:
      'Nueve en el tercer puesto significa: Ningún llano al que no siga un declive, ninguna ida a la que no siga el retorno. Sin defecto es quien se mantiene perseverante frente al peligro. No te lamentes de esta verdad, disfruta de la dicha que todavía posees.',
    mutable4:
      'Seis en el cuarto puesto significa: Él desciende aleteando, sin jactarse de su riqueza, en unión con su prójimo, sin malicia y veraz.',
    mutable5:
      'Seis en el quinto puesto significa: El soberano I concede a su hija en matrimonio. Esto trae bendición y elevada ventura.',
    mutable6:
      'Al tope un seis significa: La muralla se desploma de vualta al foso. Ahora no emplees ejércitos. En la propia ciudad proclama tus órdenes. La perseverancia trae humillación.',
    dictamen: 'La Paz. Lo pequeño se va, llega lo grande. ¡Ventura! ¡Éxito!',
    imagen:
      'Cielo y Tierra se unen: la imagen de La Paz. Así reparte y completa el soberano el curso de cielo y tierra, fomenta y ordena los dones de cielo y tierra, con lo cual asiste al pueblo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2012.png',
  },
  {
    order: 12,
    bin: 0b000111,
    name: `P'i  /  El Estancamiento`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: Cuando uno arranca faláridas, salen adheridas las hierbas del césped. Cada cual a su manera. La perseverancia trae ventura y éxito.',
    mutable2:
      'Seis en el segundo puesto significa: Ellos soportan y toleran, esto significa ventura para los vulgares. Al gran hombre el Estancamiento le sirve para el logro.',
    mutable3:
      'Seis en el tercer puesto significa: Ellos sobrellevan la vergüenza.',
    mutable4:
      'Nueve en el cuarto puesto significa: Quien obra obedeciendo el orden del Altísimo permanece sin falla. Los que congenian con él disfrutarán de la bendición.',
    mutable5:
      'Nueve en el quinto puesto significa: El Estancamiento cede. ¡Ventura para el gran hombre! "¡Y si se malograra, si se malograra!" De este modo lo ata a un haz de vástagos de morera.',
    mutable6:
      'Al tope un nueve significa: El estancamiento cesa. Primero estancamiento, luego ventura.',
    dictamen:
      'El Estancamiento. Hombres malignos no favorecen la perseverancia del noble. Lo grande se va, llega lo pequeño.',
    imagen:
      'Cielo y Tierra no se unen: la imagen del Estancamiento. Así el noble se retira, refugiándose en su valer interior, con el fin de eludir dificultades. No permite que le honren con ingresos.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2013.png',
  },
  {
    order: 13,
    bin: 0b101111,
    name: `T'ung Jen  /  Comunidad con los Hombres`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b101).name,
    mutable1:
      'Al comienzo un nueve significa: Comunidad con los hombres en el portal. Ningún defecto.',
    mutable2:
      'Seis en el segundo puesto significa: Comunidad con los hombres en el clan: humillación.',
    mutable3:
      'Nueve en el tercer puesto significa: Esconde armas en el matorral, sube a la alta colina que está delante. Durante tres años no se levanta.',
    mutable4:
      'Nueve en el cuarto puesto significa: Él sube a su muralla, no puede atacar. ¡Ventura!',
    mutable5:
      'Nueve en el quinto puesto significa: Los hombres en comunidad primero lloran y se lamentan, pero luego ríen. Después de grandes luchas logran encontrarse.',
    mutable6:
      'Al tope un nueve significa: Comunidad con hombres en la pradera: no hay arrepentimiento.',
    dictamen:
      'Comunidad con los Hombres en lo libre: éxito. Es propicio atravesar las grandes aguas. Propicia es la perseverancia del noble.',
    imagen:
      'Cielo junto con fuego: la imagen de La Comunidad con los Hombres. Así estructura el noble las tribus y discrimina las cosas.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2014.png',
  },
  {
    order: 14,
    bin: 0b111101,
    name: `Ta Yu  /  La Posesión de lo Grande`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Ninguna relación con lo dañino, esto no es un defecto. Si permanece uno consciente de la dificultad, quedará libre de defecto.',
    mutable2:
      'Nueve en el segundo puesto significa: Un gran carruaje para cargarlo. Se puede emprender algo. Ningún defecto.',
    mutable3:
      'Nueve en el tercer puesto significa: Un príncipe lo ofrenda al Hijo del Cielo. Un hombre pequeño no sabe hacerlo.',
    mutable4:
      'Nueve en el cuarto puesto significa: Establece una diferencia entre sí y su prójimo. No hay defecto.',
    mutable5:
      'Seis en el quinto puesto significa: Aquel cuya verdad es afable y sin embargo digna, tendrá ventura.',
    mutable6:
      'Al tope un nueve significa: Él es bendecido desde el Cielo. ¡Ventura! Nada que no fuese propicio.',
    dictamen: 'La Posesión de lo Grande: Elevado Logro.',
    imagen:
      'El Fuego en lo alto del Cielo: la imagen de La Posesión de lo Grande. Así el noble frena el mal y fomenta el bien, obedeciendo con ello la buena voluntad del Cielo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2015.png',
  },
  {
    order: 15,
    bin: 0b001000,
    name: `Ch'ien  /  La Modestia`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b001).name,
    mutable1:
      'Al comienzo un seis significa: Un noble modesto en su modestia bien puede atravesar las grandes aguas. ¡Ventura!',
    mutable2:
      'Seis en el segundo puesto significa: Modestia que se manifiesta. La perseverancia trae ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: Un noble meritorio por su modestia lleva a buen término. ¡Ventura!',
    mutable4:
      'Seis en el cuarto puesto significa: Nada que no sea propicio para la modestia en movimiento.',
    mutable5:
      'Seis en el quinto puesto significa: No hacer gala de riqueza frente a su prójimo. Es propicio atacara con violencia. Nada que no sea propicio.',
    mutable6:
      'Al tope un seis significa: Modestia que se manifiesta. Es propicio hacer que se pongan en marcha ejércitos, a fin de castigar la propia ciudad y el propio país.',
    dictamen: 'La Modestia va creando el éxito. El noble lleva a buen término.',
    imagen:
      'En medio de la tierra hay una montaña: la imagen de La Modestia. Así disminuye el noble lo que está de más y aumenta lo que está de menos. Sopesa las cosas y las iguala.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2016.png',
  },
  {
    order: 16,
    bin: 0b000100,
    name: `Yü  /  El Entusiasmo`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: Entusiasmo que se exterioriza trae desventura.',
    mutable2:
      'Seis en el segundo puesto significa: Firme como una roca. Ni un día entero. La perseverancia trae ventura.',
    mutable3:
      'Seis en el tercer puesto significa: Entusiasmo que mira hacia arriba engendra arrepentimiento. Vacilación trae arrepentimiento.',
    mutable4:
      'Nueve en el cuarto puesto significa: La fuente del origen del Entusiasmo; alcanza grandes cosas. No dudes. Los amigos se agrupan rodeándote, como una presilla para el pelo.',
    mutable5:
      'Seis en el quinto puesto significa: Perseverantemente enfermo y sin embargo nunca se muere.',
    mutable6:
      'Al tope un seis significa: Entusiasmo cegado. Pero si después del encandilamiento logra uno el cambio, eso no será una falla.',
    dictamen:
      'El Entusiasmo. Es propicio designar ayudantes y hacer marchar ejércitos.',
    imagen:
      'El trueno surge estruendoso de la tierra: la imagen del Entusiasmo. Así los reyes antiguos hacían música para honrar los méritos, y la ofrendaban con magnificencia al Dios supremo, invitando a sus antepasados a presenciarlo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2017.png',
  },
  {
    order: 17,
    bin: 0b100110,
    name: `Sui  /  El Seguimiento`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b100).name,
    mutable1:
      'Al comienzo un nueve significa: Lo decisivo se modifica. La perseverancia trae ventura. Salir de la puerta para el trato engendra obras.',
    mutable2:
      'Seis en el segundo puesto significa: Si uno adhiere al varoncito, perderá al hombre fuerte.',
    mutable3:
      'Seis en el tercer puesto significa: Si uno adhiere al hombre fuerte, pierde al varoncito. Mediante el seguimiento encuentra uno lo que busca. Es propicio mantenerse perseverante.',
    mutable4:
      'Nueve en el cuarto puesto significa: El Seguimiento crea éxito. La perseverancia acarrea desventura. Recorrer el camino con veracidad aporta claridad. ¿Cómo podría haber en ello una falla?',
    mutable5:
      'Nueve en el quinto puesto significa: Verdaderamente en el bien. ¡Ventura!',
    mutable6:
      'Al tope un seis significa: Él halla firme adhesión, y por añadidura se siente comprometido. El rey lo presenta a la Montaña Occidental.',
    dictamen:
      'El Seguimiento tiene elevado éxito. Es propicia la perseverancia. No hay defecto.',
    imagen:
      'En medio del lago está el trueno: la imagen del Seguimiento. Así el noble a la hora del atardecer se recoge para su recreo y descanso.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2018.png',
  },
  {
    order: 18,
    bin: 0b011001,
    name: `Ku  /  El Trabajo en lo Echado a Perder`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b011).name,
    mutable1:
      'Al comienzo un seis significa: Rectificar lo echado a perder por el padre. Cuando hay un hijo, no afecta falta alguna al padre difunto que retornó a su origen.',
    mutable2:
      'Nueve en el segundo puesto significa: Rectificar lo echado a perder por la madre. No se debe ser demasiado perseverante.',
    mutable3:
      'Nueve en el tercer puesto significa: Rectificar lo echado a perder por el padre. Habrá un poco de arrepentimiento. No hay falla grande.',
    mutable4:
      'Seis en el cuarto puesto significa: Tolerar lo echado a perder por el padre. Al continuar así se afrontará la humillación.',
    mutable5:
      'Seis en el quinto puesto significa: Rectificar lo echado a perder por el padre. Uno cosecha elogios.',
    mutable6:
      'Al tope un nueve significa: No está al servicio de reyes y príncipes. Se propone metas más elevadas.',
    dictamen:
      'El Trabajo en lo Echado a Perder tiene elevado éxito. Es propicio atravesar las grandes aguas. Antes del punto inicial tres días, después del punto inicial tres días.',
    imagen:
      'Abajo, al borde de la montaña, sopla viento: la imagen del Echarse a Perder. Así el noble sacude a las gentes y fortalece su espíritu.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2019.png',
  },
  {
    order: 19,
    bin: 0b110000,
    name: `Lin  /  El Acercamiento`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b110).name,
    mutable1:
      'Al comienzo un nueve significa: Acercamiento conjunto. La perseverancia trae ventura.',
    mutable2:
      'Nueve en el segundo puesto significa: Acercamiento conjunto. ¡Ventura! Todo es propicio.',
    mutable3:
      'Seis en el tercer puesto significa: Acercamiento confortable. Nada que fuese propicio. Si uno llega a entristecerse por ello, quedará exento de error.',
    mutable4:
      'Seis en el cuarto puesto significa: Acercamiento cabal. No hay defecto.',
    mutable5:
      'Seis en el quinto puesto significa: Acercamiento sabio. Es lo que corresponde a un gran príncipe. ¡Ventura!',
    mutable6:
      'Al tope un seis significa: Acercamiento magnánimo. Ventura. No hay falla.',
    dictamen:
      'El Acercamiento tiene elvado éxito. Es propicia la perseverancia. Al llegar el octavo mes habrá desventura.',
    imagen:
      'Por encima del lago está la tierra: la imagen del Acercamiento. Así el noble es inagotable en su intención de enseñar, y en soportar y proteger al pueblo no conoce límites.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2020.png',
  },
  {
    order: 20,
    bin: 0b000011,
    name: `Kuan  /  La Contemplación (La Vista)`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: Contemplación de párvulo. Para un hombre inferior no es defecto. Para un noble es humillante.',
    mutable2:
      'Seis en el segundo puesto significa: Contemplación a través del resquicio de la puerta. Propicio para la perseverancia de una mujer.',
    mutable3:
      'Seis en el tercer puesto significa: Contemplación de mi vida decide sobre progreso o retroceso.',
    mutable4:
      'Seis en el cuarto puesto significa: Contemplación de la luz del reino. Es propicio actuar como huésped de un rey.',
    mutable5:
      'Nueve en el quinto puesto significa: Contemplación de mi vida. El noble está libre de fallas.',
    mutable6:
      'Al tope un nueve significa: Contemplación de su vida. El noble está libre de tacha.',
    dictamen:
      'Se ha cumplido la ablución, pero aún no la ofrenda. Pleno de confianza levantan la mirada hacia él.',
    imagen:
      'El viento planea sobre la tierra: la imagen de La Contemplación. Así los antiguos reyes visitaban las regiones del mundo, contemplaban al pueblo y brindaban enseñanza.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2021.png',
  },
  {
    order: 21,
    bin: 0b100101,
    name: `Shih Ho  /  La Mordedura Tajante`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b100).name,
    mutable1:
      'Al comienzo un nueve significa: Tiene metido los pies en el cepo, al punto de desaparecer sus dedos. No hay defecto.',
    mutable2:
      'Seis en el segundo puesto significa: Muerde a través de carne blanda, al punto de desaparecerle la nariz. No hay defecto.',
    mutable3:
      'Seis en el tercer puesto significa: Muerde carne vieja desecada, y se topa con algo venenoso. Pequeña humillación. No hay defecto.',
    mutable4:
      'Nueve en el cuarto puesto significa: Muerde carne seca cartilaginosa. Obtiene flechas metálicas. Es propicio tener presente las dificultades y ser perseverante. ¡Ventura!',
    mutable5:
      'Seis en el quinto puesto significa: Muerde carne fibrosa desecada. Obtiene oro amarillo. Ser consciente del peligro, con perseverancia. No hay defecto.',
    mutable6:
      'Al tope un nueve significa: Tiene metido el cuello en el collar de madera al punto de desaparecer las orejas. ¡Desventura!',
    dictamen:
      'La Mordedura Tajante tiene éxito. Es propicio administrar justicia.',
    imagen:
      'Trueno y rayo: la imagen de La Mordedura Tajante. Así los reyes de antaño afirmaban las leyes mediante penalidades claramente establecidas.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2022.png',
  },
  {
    order: 22,
    bin: 0b101001,
    name: `Pi  /  La Gracia (Lo Agraciado)`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b101).name,
    mutable1:
      'Al comienzo un nueve significa: Confiere gracia a los dedos de sus pies, abandona el carruaje y camina.',
    mutable2: 'Seis en el segundo puesto significa: Confiere gracia a su pera.',
    mutable3:
      'Nueve en el tercer puesto significa: Agraciado y húmedo. Perseverancia duradera trae ventura.',
    mutable4:
      'Seis en el cuarto puesto significa: ¿Gracia o sencillez? Un caballo blanco llega como volando. Él no es un raptor, se propone cortejar en el plazo debido.',
    mutable5:
      'Seis en el quinto puesto significa: Gracia en colinas y jardines. La madeja de seda es pobre y pequeña. Humillación, mas finalmente ventura.',
    mutable6: 'Al tope un nueve significa: Gracia sencilla. Ningún defecto.',
    dictamen:
      'La Gracia tiene éxito. En lo pequeño es propicio emprender algo.',
    imagen:
      'Abajo, al pie de la montaña, está el fuego: la imagen de La Gracia. Así procede el noble al aclarar asuntos corrientes, mas no osa decidir de este modo los asuntos conflictuales.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2023.png',
  },
  {
    order: 23,
    bin: 0b000001,
    name: `Po  /  La Desintegración`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: El lecho se desintegra por la pata. Los perseverantes son aniquilados. Desventura.',
    mutable2:
      'Seis en el segundo puesto significa: El lecho se desintegra por el borde. Los perseverantes son aniquilados. Desventura.',
    mutable3:
      'Seis en el tercer puesto significa: Él desintegra su ligazón con ellos. No hay tacha.',
    mutable4:
      'Seis en el cuarto puesto significa: El lecho se desintegra hasta la piel. Desventura.',
    mutable5:
      'Seis en el quinto puesto significa: Un cardumen de peces. Por las damas de palacio llegan favores. Todo es propicio.',
    mutable6:
      'Al tope un nueve significa: Hay un gran futuro todavía no comido. El noble obtiene un carruaje. Al vulgar se le desintegra la casa.',
    dictamen: 'La Desintegración. No es propicio ir a parte alguna.',
    imagen:
      'La montaña descansa sobre la tierra: la imagen de La Desintegración. Así únicamente mediante ricas dádivas a los inferiores pueden los superiores asegurar su posición.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2024.png',
  },
  {
    order: 24,
    bin: 0b100000,
    name: `Fu  /  El Retorno (El Tiempo del Solsticio)`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b100).name,
    mutable1:
      'Al comienzo un nueve significa: Retorno desde poca distancia. No ha menester ningún arrepentimiento. ¡Gran Ventura!',
    mutable2:
      'Seis en el segundo puesto significa: Tranquilo retorno. ¡Ventura!',
    mutable3:
      'Seis en el tercer puesto significa: Reiterado retorno. Peligro. Ningún defecto.',
    mutable4:
      'Seis en el cuarto puesto significa: Deambulando en medio de los demás, uno retorna solo.',
    mutable5:
      'Seis en el quinto puesto significa: Magnánimo retorno. Ningún arrepentimiento.',
    mutable6:
      'Al tope un seis significa: Extravío en el retorno. Desventura. Desgracia desde fuera y desde adentro. Si de este modo hace uno marchar ejércitos, sufrirá finalmente una gran derrota, y esto será nefasto para el soberano del país. Durante diez años ya no estará uno en condiciones de atacar.',
    dictamen:
      'El Retorno. Éxito. Salida y entrada sin falla. Llegan amigos sin tacha. Va y viene el camino. Al séptimo día llega el retorno. Es propicio tener adonde ir.',
    imagen:
      'El trueno en medio de la tierra: la imagen del Tiempo del Solsticio. Así, durante el tiempo del retorno solar, los antiguos reyes clausuraban los pasos. Mercaderes y forasteros no se trasladaban, y el soberano no viajaba visitando las comarcas.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2025.png',
  },
  {
    order: 25,
    bin: 0b100111,
    name: `Wu Wang  /  La Inocencia (Lo Inesperado)`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b100).name,
    mutable1: 'Al comienzo un nueve significa: ¡Andanza inocente trae ventura!',
    mutable2:
      'Seis en el segundo puesto significa: Si cuando se ara no se piensa en cosechar ni en el uso del campo cuando se desmonta: entonces será propicio emprender algo.',
    mutable3:
      'Seis en el tercer puesto significa: Inmerecida desgracia: la vaca que alguien dejara estacada, es ganancia del andariego, pérdida del ciudadano.',
    mutable4:
      'Nueve en el cuarto puesto significa: El que es capaz de perseverar, permanecerá sin tacha.',
    mutable5:
      'Nueve en el quinto puesto significa: En caso de enfermedad sin culpa propia, no utilices medicamento alguno. Eso mejorará por sí solo.',
    mutable6:
      'Al tope un nueve significa: Actuación inocente trae desgracia. Nada es propicio.',
    dictamen:
      'La Inocencia. Elevado éxito. Es propicia la perseverancia. Si alguien no es recto tendrá desdicha, y no será propicio emprender algo.',
    imagen:
      'Bajo el cielo va el trueno: todas las cosas alcanzan el estado natural de La Inocencia. Así, ricos en virtud y en correspondencia con el tiempo, cultivaban y alimentaban los antiguos reyes a todos los seres.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2026.png',
  },
  {
    order: 26,
    bin: 0b111001,
    name: `Ta Ch'u  /  La Fuerza Domesticadora de lo Grande`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Hay peligro. Es propicio desistir.',
    mutable2:
      'Nueve en el segundo puesto significa: Al carruaje se le quitan los bujes del eje.',
    mutable3:
      'Nueve en el tercer puesto significa: Un buen caballo sigue a otros. Es propicio tener conciencia del peligro y perseverar. Día a día ejercítate en el gobierno del carruaje y la defensa armada. Es propicio tener a dónde ir.',
    mutable4:
      'Seis en el cuarto puesto significa: La tablilla protectora de un joven toro. ¡Gran Ventura!',
    mutable5:
      'Seis en el quinto puesto significa: El diente de un jabalí capón. ¡Ventura!',
    mutable6:
      'Al tope un nueve significa: Se alcanza el camino del cielo. Éxito.',
    dictamen:
      'La Fuerza Domesticadora de lo Grande. Es propicia la perseverancia. Trae ventura no comer en casa. Es propicio atravesar las grandes aguas.',
    imagen:
      'El cielo en medio de la montaña: la imagen de La Fuerza Domesticadora de lo Grande. Asó el noble se familiariza con multitud de dichos de tiempos remotos y de hechos del pasado, a fin de afirmar de esta suerte su carácter.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2027.png',
  },
  {
    order: 27,
    bin: 0b100001,
    name: `I  /  Las Comisuras de la Boca (La Nutrición)`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b100).name,
    mutable1:
      'Al comienzo un nueve significa: Dejas escapar a tu tortuga mágica y me miras a mí, caídas las comisuras de los labios. ¡Desventura!',
    mutable2:
      'Seis en el segundo puesto significa: Dirigirse hacia la cumbre en busca de alimento. Apartarse del camino para buscar alimento de la colina: continuar así traerá desventura.',
    mutable3:
      'Seis en el tercer puesto significa: Desviarse de la nutrición. La perseverancia trae desventura. Durante diez años no obres de este modo. Nada es propicio.',
    mutable4:
      'Seis en el cuarto puesto significa: Dirigirse hacia la cumbre en busca de alimento trae ventura. Espiar en torno como un tigre, con ojos aguzados e insaciable avidez. No hay defecto.',
    mutable5:
      'Seis en el quinto puesto significa: Desviarse del camino. Permanecer perseverante trae ventura. No debe atravesarse las grandes aguas.',
    mutable6:
      'Al tope un nueve significa: La fuente de la nutrición. Conciencia del peligro aporta ventura. Es propicio atravesar las grandes aguas.',
    dictamen:
      'Las Comisuras de la Boca. Perseverancia trae ventura. Presta atención a la nutrición, y a aquello con que trata de llenar su boca uno mismo.',
    imagen:
      'Abajo, junto a la montaña, está el trueno: la imagen de La Nutrición. Así el noble presta atención a sus palabras y es moderado en el comer y el beber.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2028.png',
  },
  {
    order: 28,
    bin: 0b011110,
    name: `Ta Kuo  /  La Preponderancia de lo Grande`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b011).name,
    mutable1:
      'Al comienzo un seis significa: Colocar debajo un lecho de blanco carrizo. No hay defecto.',
    mutable2:
      'Nueve en el segundo puesto significa: Un álamo seco hace brotar un retoño de raíz. Un hombre mayor obtiene una mujer joven. Todo es propicio.',
    mutable3:
      'Nueve en el tercer puesto significa: La viga maestra se dobla por el medio. Desventura.',
    mutable4:
      'Nueve en el cuarto puesto significa: La viga maestra recibe sostén. Ventura. Si hay segundas intenciones, es humillante.',
    mutable5:
      'Nueve en el quinto puesto significa: Un álamo reseco da flores. Una mujer entrada en años obtiene marido. No hay tacha. No hay elogio.',
    mutable6:
      'Al tope un seis significa: Hay que atravesar el agua. Ésta llega a cubrir la coronilla. Desventura. No hay tacha.',
    dictamen:
      'La Preponderancia de lo Grande. La viga maestra se dobla por el medio. Es propicio tener a dónde ir. Logro.',
    imagen:
      'El lago pasa por encima de los árboles: la imagen de La Preponderancia de lo Grande. Así el noble, cuando permanece solo, no se aflige, y si debe renunciar al mundo, no desespera.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2029.png',
  },
  {
    order: 29,
    bin: 0b010010,
    name: `K'an  /  Lo Abismal, El Agua`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b010).name,
    mutable1:
      'Al comienzo un seis significa: Repetición de Lo Abismal. Dentro del abismo se cae en un hoyo. Desventura.',
    mutable2:
      'Nueve en el segundo puesto significa: El abismo tiene peligro. Solo debe aspirarse a alcanzar cosas pequeñas.',
    mutable3:
      'Seis en el tercer puesto significa: Adelante y atrás, abismo sobre abismo. En semejante peligro primero detente, pues si no caerás en un hoyo dentro del abismo. No actúes así.',
    mutable4:
      'Seis en el cuarto puesto significa: Una jarra de vino, una escudilla de arroz por añadidura, vajilla de barro cocido, sencillamente alcanzados por la ventana. En modo alguno constituye esto una falla.',
    mutable5:
      'Nueve en el quinto puesto significa: El abismo no se llena hasta rebasar, solo se llena hasta el borde. No hay defecto.',
    mutable6:
      'Al tope un seis significa: Atado con sogas y maromas, encerrado entre muros carcelarios, cercados de espinas: durante tres años no logra uno orientarse. ¡Desventura!',
    dictamen:
      'Lo Abismal repetido. Si eres veraz, tendrás logro en tu corazón, y lo que hicieres tendrá éxito.',
    imagen:
      'El agua fluye ininterrumpidamente y llega a la meta: la imagen de Lo Abismal reiterado. Así el noble observa una conducta de constante virtud y ejerce el negocio de la enseñanza.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2030.png',
  },
  {
    order: 30,
    bin: 0b101101,
    name: `Li  /  Lo Adherente, El Fuego`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b101).name,
    mutable1:
      'Al comienzo un nueve significa: Las huellas de los pies corren entrecruzadas a troche y moche. Si al respecto uno se mantiene serio, no hay tacha.',
    mutable2:
      'Seis en el segundo puesto significa: Resplandor amarillo. Elevada ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: Al resplandor del sol poniente los hombres o bien golpean la olla y cantan, o bien suspiran ruidosamente porque se aproxima la senectud. Desventura.',
    mutable4:
      'Nueve en el cuarto puesto significa: Súbita es su llegada: se inflama, se extingue, es arrojado lejos.',
    mutable5:
      'Seis en el quinto puesto significa: Llorando a torrentes, suspirando y lamentando. ¡Ventura!',
    mutable6:
      'Al tope un nueve significa: El rey lo emplea para que se ponga en marcha y castigue. Lo mejor será entonces matar a los cabecillas y hacer priosioneros a los secuaces. No hay tacha.',
    dictamen:
      'Lo Adherente. Es propicia la perseverancia, pues aporta el éxito. Dedicarse al cuidado de la vaca trae ventura.',
    imagen:
      'La Claridad se eleva dos veces: la imagen del Fuego. Así el gran hombre alumbra, perpetuando esta claridad, las cuatro regiones cardinales del mundo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2031.png',
  },
  {
    order: 31,
    bin: 0b001110,
    name: `Hsien  /  El Influjo (El Cortejo)`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b001).name,
    mutable1:
      'Al comienzo un seis significa: El Influjo se manifiesta en el dedo gordo del pie.',
    mutable2:
      'Seis en el segundo puesto significa: El Influjo se manifiesta en las pantorrillas. ¡Desventura! Quedarse trae ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: El Influjo se manifiesta en los muslos. Se atiene a lo que le sigue. Proseguir es humillante.',
    mutable4:
      'Nueve en el cuarto puesto significa: La perseverancia trae ventura. Se desvanece el arrepentimiento. Cuando el pensamiento de uno se agita en inquieto vaivén, solo le seguirán aquellos amigos hacia quienes dirija pensamientos conscientes.',
    mutable5:
      'Nueve en el quinto puesto significa: El Influjo se manifiesta en la nuca. No hay arrepentimiento.',
    mutable6:
      'Al tope un seis significa: El Influjo se manifiesta en las mandíbulas, las mejillas y la lengua.',
    dictamen:
      'El Influjo. Logro. Es propicia la perseverancia. Tomar una muchacha trae ventura.',
    imagen:
      'Sobre la montaña hay un lago: la imagen del Influjo. Así el noble, en virtud de su disposición receptiva deja que los hombres se acerquen a él.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2032.png',
  },
  {
    order: 32,
    bin: 0b011100,
    name: `Heng  /  La Duración`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b011).name,
    mutable1:
      'Al comienzo un seis significa: Pretender la duración demasiado pronto acarrea persistente desventura. Nada que fuese propicio.',
    mutable2:
      'Nueve en el segundo puesto significa: El arrepentimiento se desvanece.',
    mutable3:
      'Nueve en el tercer puesto significa: Al que no confiere duración a su carácter lo cubren de vergüenza. Persistente humillación.',
    mutable4: 'Nueve en el cuarto puesto significa: Ningún venado en el campo.',
    mutable5:
      'Seis en el quinto puesto significa: Dar duración al propio carácter mediante la perseverancia es venturoso para una mujer; para un hombre es desventurado..',
    mutable6:
      'Al tope un seis significa: El desasosiego como estado duradero trae desventura.',
    dictamen:
      'Éxito. No hay falla. Es propicia la perseverancia. Es propicio que uno tenga a dónde ir.',
    imagen:
      'Trueno y viento: la imagen de La Duración. Así el noble permanece firme y no modifica su rumbo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2033.png',
  },
  {
    order: 33,
    bin: 0b001111,
    name: `Tun  /  La Retirada`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b001).name,
    mutable1:
      'Al comienzo un seis significa: durante la Retirada, en la cola: esto es peligroso. No debe pretenderse emprender algo.',
    mutable2:
      'Seis en el segundo puesto significa: Lo sujeta firmemente con cuero de buey amarillo. Nadie es capaz de arrancarlo.',
    mutable3:
      'Nueve en el tercer puesto significa: Una retirada con demora es penosa y arriesgada. Mantener a la gente en calidad de siervos y criadas, trae ventura.',
    mutable4:
      'Nueve en el cuarto puesto significa: Retirada voluntaria trae ventura al noble, ruina al vulgar.',
    mutable5:
      'Nueve en el quinto puesto significa: Retirada amistosa. La perseverancia trae ventura.',
    mutable6:
      'Al tope un nueve significa: Retirada alegremente serena. Todo es favorable.',
    dictamen: 'La Retirada. Éxito. En lo pequeño es propicia la perseverancia.',
    imagen:
      'Bajo el cielo está la montaña: la imagen de La Retirada. Así el noble mantiene a distancia al vulgar, no con ira, sino con mesura.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2034.png',
  },
  {
    order: 34,
    bin: 0b111100,
    name: `Ta Chuang  /  El Poder de lo Grande`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b111).name,
    mutable1:
      'Al comienzo un nueve significa: Poder en los dedos de los pies. Persistir trae desventura. Esto es sin duda cierto.',
    mutable2:
      'Nueve en el segundo puesto significa: La perseverancia trae ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: El hombre vulgar actúa usando el poder, el noble no actúa así. Persistir es peligroso. Un macho cabrío arremete contra una cerca y enreda sus cuernos.',
    mutable4:
      'Nueve en el cuarto puesto significa: La perseverancia trae ventura. Desaparece el arrepentimiento. La cerca se abre, no hay enredo. El poder reside en el eje de un gran carruaje.',
    mutable5:
      'Seis en el quinto puesto significa: Pierde el carnero en su ligereza. Ningún arrepentimiento.',
    mutable6:
      'Al tope un seis significa: Un carnero arremete contra una cerca. No puede retroceder, no puede avanzar. Nada es propicio. Si advierte uno la dificultad, eso traerá ventura.',
    dictamen: 'El Poder de lo Grande. Es propicia la perseverancia.',
    imagen:
      'El trueno se halla en lo alto del cielo: la imagen del Poder de lo Grande. Así el noble no pisa los caminos que no correspondan al orden.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2035.png',
  },
  {
    order: 35,
    bin: 0b000101,
    name: `Chin  /  El Progreso`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b000).name,
    mutable1:
      'Al comienzo un seis significa: Progresando, pero rechazado. La perseverancia trae ventura. Al no encontrar confianza, conserve uno su calma. Ninguna falta.',
    mutable2:
      'Seis en el segundo puesto significa: Progresando, pero con tristeza. La perseverancia trae ventura. Luego obtendrá uno gran felicidad de su antepasada.',
    mutable3:
      'Seis en el tercer puesto significa: Todos están de acuerdo. Se desvanece el arrepentimiento.',
    mutable4:
      'Nueve en el cuarto puesto significa: Progreso como el de un hámster acaparador. La perseverancia acarrea peligro.',
    mutable5:
      'Seis en el quinto puesto significa: Se desvanece el arrepentimiento. No tomes a pecho ganancia ni pérdida. Las empresas traen ventura. Todo es propicio.',
    mutable6:
      'Al tope un nueve significa: Progresar con los cuernos es lícito únicamente para castigar la propia comarca. Tener conciencia del peligro trae ventura. No hay tacha. La perseverancia trae humillación.',
    dictamen:
      'El Progreso: el fuerte príncipe es honrado con caballos en gran número. En un solo día se lo recibe tres veces.',
    imagen:
      'El sol se eleva por sobre la tierra: la imagen del Progreso. Así el noble ilumina por sí solo sus claros talentos.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2036.png',
  },
  {
    order: 36,
    bin: 0b101000,
    name: `Ming I  /  El Oscurecimiento de la Luz`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b101).name,
    mutable1:
      'Al comienzo un nueve significa: Oscurecimiento de la luz durante el vuelo. Él baja las alas. En su peregrinación el noble no come nada por tres días, mas tiene a dónde ir. El hostero tiene ocasión de chismear sobre él.',
    mutable2:
      'Seis en el segundo puesto significa: El oscurecimiento de la luz lo hiere en el muslo izquierdo. Él aporta ayuda con la fuerza de un caballo. Ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: Oscurecimiento de la luz durante la cacería en el Sur. Se captura a su cabecilla principal. No debe esperarse demasiado pronto la perseverancia.',
    mutable4:
      'Seis en el cuarto puesto significa: Él penetra en la cavidad izquierda del abdomen. Se obtiene el corazón del oscurecimiento de la luz, y se abandona el portón y el cortijo.',
    mutable5:
      'Seis en el quinto puesto significa: Oscurecimiento de la luz como en el caso del príncipe Chi. Es propicia la perseverancia.',
    mutable6:
      'Al tope un seis significa: No luz, sino oscuridad. Primero se elevó hacia el cielo, luego se precipitó a las simas de la tierra.',
    dictamen:
      'El Oscurecimiento de la Luz. Es propicio ser perseverante en la emergencia.',
    imagen:
      'La luz se ha sumergido en la tierra: la imagen del Oscurecimiento de la Luz. Así el noble convive con la gran muchedumbre; oculta su resplandor y permanece lúcido sin embargo.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2037.png',
  },
  {
    order: 37,
    bin: 0b101011,
    name: `Chia Jen  /  El Clan (La Familia)`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b101).name,
    mutable1:
      'Al comienzo un nueve significa: Firme acuerdo dentro del clan. Se desvanece el arrepentimiento.',
    mutable2:
      'Seis en el segundo puesto significa: No debe ella seguir su capricho. En el interior ha de velar por el alimento. La perseverancia trae ventura.',
    mutable3:
      'Nueve en el tercer puesto significa: Cuando en el clan se acaloran los ánimos se origina el arrepentimiento a causa de una excesiva severidad. Sin embargo: ¡Ventura! Cuando la mujer y el niño retozan y ríen esto conducirá finalmente a la humillación.',
    mutable4:
      'Seis en el cuarto puesto significa: Ella es la riqueza de la casa. ¡Gran Ventura!',
    mutable5:
      'Nueve en el quinto puesto significa: Como un rey él se acerca a su clan: no temáis. ¡Ventura!',
    mutable6:
      'Al tope un nueve significa: Su labor inspira respeto y veneración. Finalmente llega la ventura.',
    dictamen: 'El Clan. Es propicia la perseverancia de la mujer.',
    imagen:
      'El viento surge del fuego: la imagen del Clan. Así el noble tiene en sus palabras lo real, y en su conducta la duración.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2038.png',
  },
  {
    order: 38,
    bin: 0b110101,
    name: `K'uei  /  El Antagonismo (La Oposición)`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b110).name,
    mutable1:
      'Al comienzo un nueve significa: Desaparece el arrepentimiento. Si pierdes un caballo, no corras tras él. Volverá por sí mismo. Si ves mala gente cuídate de cometer faltas.',
    mutable2:
      'Nueve en el segundo puesto significa: Se topa uno con su amo y señor en un estrecho callejón. No hay defecto.',
    mutable3:
      'Seis en el tercer puesto significa: Se ve el carro arrastrado hacia atrás, los bueyes detenidos, cortados al hombre cabellos y nariz. No hay un buen comienzo, pero sí un buen final.',
    mutable4:
      'Nueve en el cuarto puesto significa: Aislado en soledad a causa del antagonismo, se encuentra uno con un hombre de espíritu afín, con el que podrá mantener un trato leal. A pesar del peligro, ninguna tacha.',
    mutable5:
      'Seis en el quinto puesto significa: Desaparece el arrepentimiento. Con los dientes se abre camino el compañero a través del cascarón. Si uno va hacia él, ¿cómo podría eso ser un error?',
    mutable6:
      'Al tope un nueve significa: Aislado por el antagonismo, uno ve a su compañero como un cerdo cubierto de roña, como un carro repleto de demonios. Primero se tiende el arco contra él, luego se deja el arco de lado. No es un bandido, él va a cortejar cumplido el plazo. Al acudir cae la lluvia, luego llega la ventura.',
    dictamen: 'El Antagonismo. En cosas pequeñas, ventura.',
    imagen:
      'Arriba el fuego, abajo el lago: la imagen del Antagonismo. Así el noble, sea como fuese la vida en comunidad, consurve su índole singular.',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2039.png',
  },
  {
    order: 39,
    bin: 0b001010,
    name: `Chien  /  El Impedimento`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b001).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2040.png',
  },
  {
    order: 40,
    bin: 0b010100,
    name: `Hsieh  /  La Liberación`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b010).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2041.png',
  },
  {
    order: 41,
    bin: 0b110001,
    name: `Sun  /  La Merma`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b110).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2042.png',
  },
  {
    order: 42,
    bin: 0b100011,
    name: `I  /  El Aumento`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b100).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2043.png',
  },
  {
    order: 43,
    bin: 0b111110,
    name: `Kuai  /  El Desbordamiento`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b111).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2044.png',
  },
  {
    order: 44,
    bin: 0b011111,
    name: `Kou  /  El Ir al Encuentro (La Complacencia)`,
    up: triByBin.get(0b111).name,
    down: triByBin.get(0b011).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2045.png',
  },
  {
    order: 45,
    bin: 0b000110,
    name: `Ts'ui  /  La Reunión (La Recolección)`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b000).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2046.png',
  },
  {
    order: 46,
    bin: 0b011000,
    name: `Sheng  /  La Subida (El Empuje hacia Arriba)`,
    up: triByBin.get(0b000).name,
    down: triByBin.get(0b011).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2047.png',
  },
  {
    order: 47,
    bin: 0b010110,
    name: `K'un  /  La Desazón (La Opresión, El Agotamiento)`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b010).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2048.png',
  },
  {
    order: 48,
    bin: 0b011010,
    name: `Ching  /  El Pozo de Agua`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b011).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2049.png',
  },
  {
    order: 49,
    bin: 0b101110,
    name: `Ko  /  La Revolución (La Muda)`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b101).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2050.png',
  },
  {
    order: 50,
    bin: 0b011101,
    name: `Ting  /  El Caldero`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b011).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2051.png',
  },
  {
    order: 51,
    bin: 0b100100,
    name: `Chen  /  Lo Suscitativo (La Conmoción, El Trueno)`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b100).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2052.png',
  },
  {
    order: 52,
    bin: 0b001001,
    name: `Ken  /  El Aquietamiento (La Montaña)`,
    up: triByBin.get(0b001).name,
    down: triByBin.get(0b001).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2053.png',
  },
  {
    order: 53,
    bin: 0b001011,
    name: `Chien  /  La Evolución (Progreso Paulatino)`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b001).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2054.png',
  },
  {
    order: 54,
    bin: 0b110100,
    name: `Kuei Mei  /  La Muchacha que se Casa (La Desposanda)`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b110).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2055.png',
  },
  {
    order: 55,
    bin: 0b101100,
    name: `Feng  /  La Plenitud`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b101).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2056.png',
  },
  {
    order: 56,
    bin: 0b001101,
    name: `Lü  /  El Andariego`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b001).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2057.png',
  },
  {
    order: 57,
    bin: 0b011011,
    name: `Sun  /  Lo Suave (Lo Penetrante, El Viento)`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b011).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2058.png',
  },
  {
    order: 58,
    bin: 0b110110,
    name: `Tui  /  Lo Sereno, El Lago`,
    up: triByBin.get(0b110).name,
    down: triByBin.get(0b110).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2059.png',
  },
  {
    order: 59,
    bin: 0b010011,
    name: `Huan  /  La Disolución (La Dispersión)`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b010).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2060.png',
  },
  {
    order: 60,
    bin: 0b110010,
    name: `Chieh  /  La Restricción`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b110).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2061.png',
  },
  {
    order: 61,
    bin: 0b110011,
    name: `Chung Fu  /  La Verdad Interior`,
    up: triByBin.get(0b011).name,
    down: triByBin.get(0b110).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2062.png',
  },
  {
    order: 62,
    bin: 0b001100,
    name: `Hsiao Kuo  /  La Preponderancia de lo Pequeño`,
    up: triByBin.get(0b100).name,
    down: triByBin.get(0b001).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2063.png',
  },
  {
    order: 63,
    bin: 0b101010,
    name: `Chi Chi  /  Después de la Consumación`,
    up: triByBin.get(0b010).name,
    down: triByBin.get(0b101).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2064.png',
  },
  {
    order: 64,
    bin: 0b010101,
    name: `Wei Chi  /  Antes de la Consumación`,
    up: triByBin.get(0b101).name,
    down: triByBin.get(0b010).name,
    mutable1: 'Al comienzo un nueve significa:',
    mutable2: 'Nueve en el segundo puesto significa:',
    mutable3: 'Nueve en el tercer puesto significa:',
    mutable4: 'Nueve en el cuarto puesto significa:',
    mutable5: 'Nueve en el quinto puesto significa:',
    mutable6: 'Al tope un nueve significa:',
    dictamen:
      'Lo Creativo obra elevado logro, propiciando por la perseverancia',
    imagen:
      'Pleno de fuerza es el movimiento del Cielo.\nAsí el noble se hace fuerte e infatigable',
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2065.png',
  },
]

export default HEXAGRAMS
