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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2018.png',
  },
  {
    order: 18,
    bin: 0b011001,
    name: `Ku  /  El Trabajo en lo Echado a Perder`,
    up: triByBin.get(0b001).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2019.png',
  },
  {
    order: 19,
    bin: 0b110000,
    name: `Lin  /  El Acercamiento`,
    up: triByBin.get(0b000).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2020.png',
  },
  {
    order: 20,
    bin: 0b000011,
    name: `Kuan  /  La Contemplación (La Vista)`,
    up: triByBin.get(0b011).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2021.png',
  },
  {
    order: 21,
    bin: 0b100101,
    name: `Shih Ho  /  La Mordedura Tajante`,
    up: triByBin.get(0b101).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2022.png',
  },
  {
    order: 22,
    bin: 0b101001,
    name: `Pi  /  La Gracia (Lo Agraciado)`,
    up: triByBin.get(0b001).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2023.png',
  },
  {
    order: 23,
    bin: 0b000001,
    name: `Po  /  La Desintegración`,
    up: triByBin.get(0b001).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2024.png',
  },
  {
    order: 24,
    bin: 0b100000,
    name: `Fu  /  El Retorno (El Tiempo del Solsticio)`,
    up: triByBin.get(0b000).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2025.png',
  },
  {
    order: 25,
    bin: 0b100111,
    name: `Wu Wang  /  La Inocencia (Lo Inesperado)`,
    up: triByBin.get(0b111).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2026.png',
  },
  {
    order: 26,
    bin: 0b111001,
    name: `Ta Ch'u  /  La Fuerza Domesticadora de lo Grande`,
    up: triByBin.get(0b001).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2027.png',
  },
  {
    order: 27,
    bin: 0b100001,
    name: `I  /  Las Comisuras de la Boca (La Nutrición)`,
    up: triByBin.get(0b001).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2028.png',
  },
  {
    order: 28,
    bin: 0b011110,
    name: `Ta Kuo  /  La Preponderancia de lo Grande`,
    up: triByBin.get(0b110).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2029.png',
  },
  {
    order: 29,
    bin: 0b010010,
    name: `K'an  /  Lo Abismal, El Agua`,
    up: triByBin.get(0b010).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2030.png',
  },
  {
    order: 30,
    bin: 0b101101,
    name: `Li  /  Lo Adherente, El Fuego`,
    up: triByBin.get(0b101).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2031.png',
  },
  {
    order: 31,
    bin: 0b001110,
    name: `Hsien  /  El Influjo (El Cortejo)`,
    up: triByBin.get(0b110).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2032.png',
  },
  {
    order: 32,
    bin: 0b011100,
    name: `Heng  /  La Duración`,
    up: triByBin.get(0b100).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2033.png',
  },
  {
    order: 33,
    bin: 0b001111,
    name: `Tun  /  La Retirada`,
    up: triByBin.get(0b111).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2034.png',
  },
  {
    order: 34,
    bin: 0b111100,
    name: `Ta Chuang  /  El Poder de lo Grande`,
    up: triByBin.get(0b100).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2035.png',
  },
  {
    order: 35,
    bin: 0b000101,
    name: `Chin  /  El Progreso`,
    up: triByBin.get(0b101).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2036.png',
  },
  {
    order: 36,
    bin: 0b101000,
    name: `Ming I  /  El Oscurecimiento de la Luz`,
    up: triByBin.get(0b000).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2037.png',
  },
  {
    order: 37,
    bin: 0b101011,
    name: `Chia Jen  /  El Clan (La Familia)`,
    up: triByBin.get(0b011).name,
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
    src: 'https://github.com/illysito/illy/blob/2cc878c55e3120fdb4e78a65143161f3a04985e1/public/imgs_cdn/characters/iChing_-%20copia%2038.png',
  },
  {
    order: 38,
    bin: 0b110101,
    name: `K'uei  /  El Antagonismo (La Oposición)`,
    up: triByBin.get(0b101).name,
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
