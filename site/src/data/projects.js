const ASSET_BASE = import.meta.env.BASE_URL

export const projects = [
  {
    slug: 'la-county-fair',
    title: 'LA County Fair',
    category: 'Campaign / Experience',
    cover: `${ASSET_BASE}portfolio/01-la-county-fair.jpg`,
    intro: 'Festival identity moments, signage clusters, and campaign rollout.',
    modules: [
      { type: 'full', widthMode: 'full', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/e3bd1b235159869.68d1c9a189085.jpg`, shape: 'landscape' },
      ] },
      { type: 'six-grid', widthMode: 'inset', gapMode: 'tight', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/5039ca235159869.68d1c9a7af8f1.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/da7a19235159869.68d1c9a7ade7e.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/90fb2c235159869.68d1c9a7ad9c3.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/d39a02235159869.68d1c9a7ae671.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/4b112a235159869.68d1c9a7ae290.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/6f3ca3235159869.68d1c9a7ad207.jpg`, shape: 'square' },
      ] },
      { type: 'asymmetric-left', widthMode: 'inset', gapMode: 'tight', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/e7637b235159869.68d1c9a22ee9c.jpg`, shape: 'landscape' },
        { src: `${ASSET_BASE}projects/la-county-fair/2fbe46235159869.68d1c9a22f98b.jpg`, shape: 'portrait' },
      ] },
      { type: 'split', widthMode: 'inset', gapMode: 'tight', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/ee25c3235159869.69657e57ee4ed.jpg`, shape: 'landscape' },
        { src: `${ASSET_BASE}projects/la-county-fair/397c89235159869.69657e57edec5.jpg`, shape: 'landscape' },
      ] },
      { type: 'full', widthMode: 'inset', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/319aae235159869.69657e58999e7.jpg`, shape: 'landscape' },
      ] },
      { type: 'asymmetric-left', widthMode: 'inset', gapMode: 'tight', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/80e211235159869.69657e59367d6.jpg`, shape: 'landscape' },
        { src: `${ASSET_BASE}projects/la-county-fair/b13027235159869.69657e59373d7.jpg`, shape: 'portrait' },
      ] },
      { type: 'eight-grid', widthMode: 'inset', gapMode: 'tight', items: [
        { src: `${ASSET_BASE}projects/la-county-fair/30bc76235159869.68d1c9a8e2038.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/620b38235159869.68d1c9a8dff17.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/aa70ad235159869.68d1c9a8e2b66.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/8a1159235159869.68d1c9a8e0643.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/e4d428235159869.68d1c9a8e2519.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/6084fb235159869.68d1c9a8e13a3.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/768186235159869.68d1c9a8e1b08.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/la-county-fair/2ac709235159869.68d1c9a8e0cc5.jpg`, shape: 'square' },
      ] },
    ]
  },
  {
    slug: 'imaginarium',
    title: 'Imaginarium',
    category: 'Brand / Campaign',
    cover: `${ASSET_BASE}portfolio/02-imaginarium.jpg`,
    intro: 'Event campaign sequence mixing neon scenes, banners, and social cutdowns.',
    modules: [
      { type: 'full', items: [
        { src: `${ASSET_BASE}projects/imaginarium/48c324241832025.6960510f0272a.jpg`, shape: 'square' },
      ] },
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/imaginarium/8b5d5a241832025.6960510f86de9.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/imaginarium/bc5719241832025.6960510f86901.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/imaginarium/753c41241832025.6960510f8620b.jpg`, shape: 'square' },
      ] },
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/imaginarium/1d8544241832025.696051105e263.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/imaginarium/21328c241832025.696051105e6e2.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/imaginarium/29a7ca241832025.696051105db3c.jpg`, shape: 'portrait' },
      ] },
    ]
  },
  {
    slug: 'justcbd',
    title: 'JustCBD',
    category: 'Brand / Packaging',
    cover: `${ASSET_BASE}portfolio/03-justcbd.jpg`,
    intro: 'Packaging-led rollout shown as one long hero followed by paired detail passes.',
    modules: [
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/justcbd/59134c235038001.696574841cba5.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/justcbd/d14787235038001.696574841ba29.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/justcbd/4400de235038001.696574841d5a5.jpg`, shape: 'portrait' },
      ] },
    ]
  },
  {
    slug: 'goodcook',
    title: 'GoodCook',
    category: 'Brand / Product',
    cover: `${ASSET_BASE}portfolio/04-goodcook.jpg`,
    intro: 'Kitchen product campaign with vertical storytelling and dense comparison clusters.',
    modules: [
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/goodcook/aa76ee241757217.695ee6ec37216.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/b0ca9e241757217.695ee6ec37b84.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/1b2294241757217.695ee6ec39255.jpg`, shape: 'portrait' },
      ] },
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/goodcook/4fa6e7241757217.695ee6ed2beaf.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/746992241757217.695ee6ed2b6ed.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/8e67ab241757217.695ee6ed2c3ac.jpg`, shape: 'portrait' },
      ] },
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/goodcook/fa8867241757217.695ee6ee15980.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/5550d5241757217.695ee6ee152d5.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/goodcook/6988ee241757217.695ee6ee14e1d.jpg`, shape: 'portrait' },
      ] },
    ]
  },
  {
    slug: 'clearstem-skincare',
    title: 'CLEARSTEM Skincare',
    category: 'Brand / Digital',
    cover: `${ASSET_BASE}portfolio/05-clearstem.jpg`,
    intro: 'Skincare launch visuals presented as clean stacked frames with soft pacing.',
    modules: [
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/clearstem-skincare/4a560a235038023.68d1c203af4cc.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/clearstem-skincare/903ee1235038023.68d1c203aee3b.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/clearstem-skincare/ebeef0235038023.68d1c203af8f7.jpg`, shape: 'portrait' },
      ] },
    ]
  },
  {
    slug: 'ucr-health',
    title: 'UCR Health',
    category: 'Healthcare / Digital',
    cover: `${ASSET_BASE}portfolio/06-ucr-health.jpg`,
    intro: 'Healthcare campaign sequence blending broad hero contexts with UI-focused modules.',
    modules: [
      { type: 'split', items: [
        { src: `${ASSET_BASE}projects/ucr-health/32dd7f241945529.6962ea40c21c8.png`, shape: 'landscape' },
        { src: `${ASSET_BASE}projects/ucr-health/941d57241945529.6962ea40c1269.png`, shape: 'landscape' },
      ] },
      { type: 'quad', items: [
        { src: `${ASSET_BASE}projects/ucr-health/08f6e5241945529.6965831a9031b.png`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/ucr-health/acefa4241945529.6965831a8fadf.png`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/ucr-health/53bf78241945529.6962ea423f6cf.png`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/ucr-health/0cfc82241945529.6962ea423ebc5.png`, shape: 'portrait' },
      ] },
    ]
  },
  {
    slug: 'international-mission-board',
    title: 'International Mission Board',
    category: 'Digital / Storytelling',
    cover: `${ASSET_BASE}portfolio/07-international-mission-board.jpg`,
    intro: 'Story-led identity and social assets grouped from logo/opening marks into campaign blocks.',
    modules: [
      { type: 'quad', items: [
        { src: `${ASSET_BASE}projects/international-mission-board/e50e50241684949.695d9a2700d76.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/bbc0a8241684949.695d9a270030e.png`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/9308dc241684949.695d9a26f3fa2.png`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/b3ed85241684949.695d9a2701272.jpg`, shape: 'square' },
      ] },
      { type: 'quad', items: [
        { src: `${ASSET_BASE}projects/international-mission-board/234c0e241684949.695d9a27d5e1c.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/fed7a8241684949.695d9a27d4d10.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/cc4a8d241684949.695d9a27d4433.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/3a2ef3241684949.695d9a27d5603.jpg`, shape: 'square' },
      ] },
      { type: 'quad', items: [
        { src: `${ASSET_BASE}projects/international-mission-board/65bc40241684949.695d9a29be25a.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/56af94241684949.695d9a29bcb3b.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/e219d6241684949.695d9a29bd8d2.png`, shape: 'square' },
        { src: `${ASSET_BASE}projects/international-mission-board/ceae0f241684949.695d9a29bd222.jpg`, shape: 'square' },
      ] },
    ]
  },
  {
    slug: 'nutrifusion',
    title: 'NutriFusion',
    category: 'Brand / Campaign',
    cover: `${ASSET_BASE}portfolio/08-nutrifusion.jpg`,
    intro: 'Nutrition brand campaign with even square rhythm and alternating pair/triptych beats.',
    modules: [
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/nutrifusion/dcb792235038133.69657a48243fa.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/nutrifusion/29f369235038133.69657a48248be.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/nutrifusion/f4bd91235038133.69657a4823d72.jpg`, shape: 'square' },
      ] },
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/nutrifusion/b8cf38235038133.69657a48e95db.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/nutrifusion/09ab90235038133.69657a48e903d.jpg`, shape: 'square' },
        { src: `${ASSET_BASE}projects/nutrifusion/1545de235038133.69657a48e9b61.jpg`, shape: 'square' },
      ] },
    ]
  },
  {
    slug: 'ecco-bella',
    title: 'Ecco Bella',
    category: 'Beauty / Brand',
    cover: `${ASSET_BASE}portfolio/09-ecco-bella.jpg`,
    intro: 'Beauty campaign shown in three stacked editorial frames.',
    modules: [
      { type: 'three', items: [
        { src: `${ASSET_BASE}projects/ecco-bella/a07ef9241887961.696173e7969ae.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/ecco-bella/70ef6b241887961.696173e79626e.jpg`, shape: 'portrait' },
        { src: `${ASSET_BASE}projects/ecco-bella/721329241887961.696173e795cf5.jpg`, shape: 'portrait' },
      ] },
    ]
  },
]

export const projectMap = Object.fromEntries(projects.map((p) => [p.slug, p]))
