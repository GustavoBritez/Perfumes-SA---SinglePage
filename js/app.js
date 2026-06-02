// ========================================
// DATOS DE PERFUMES - Catálogo Completo
// ========================================

const perfumeDatabase = [
    // MASCULINOS DE DISEÑADOR (80+)
    { name: 'XS PURE', brand: 'PACO RABANNE', price: 25000, emoji: '🌊', category: 'masculinos-diseñador' },
    { name: 'XS BLACK', brand: 'PACO RABANNE', price: 25000, emoji: '🖤', category: 'masculinos-diseñador' },
    { name: 'ONE MILLON', brand: 'PACO RABANNE', price: 25000, emoji: '💛', category: 'masculinos-diseñador' },
    { name: 'ONE MILLON LUCKY', brand: 'PACO RABANNE', price: 25000, emoji: '✨', category: 'masculinos-diseñador' },
    { name: 'INVICTUS', brand: 'PACO RABANNE', price: 25000, emoji: '⚡', category: 'masculinos-diseñador' },
    { name: 'INVICTUS LEGEND', brand: 'PACO RABANNE', price: 25000, emoji: '👑', category: 'masculinos-diseñador' },
    { name: 'INVICTUS VICTORY', brand: 'PACO RABANNE', price: 25000, emoji: '🏆', category: 'masculinos-diseñador' },
    { name: 'INVICTUS PLATINUM', brand: 'PACO RABANNE', price: 25000, emoji: '🔷', category: 'masculinos-diseñador' },
    { name: 'PHANTOM', brand: 'PACO RABANNE', price: 25000, emoji: '👻', category: 'masculinos-diseñador' },
    { name: 'VIP 212', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🎩', category: 'masculinos-diseñador' },
    { name: 'VIP 212 BLACK', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🖤', category: 'masculinos-diseñador' },
    { name: 'CH', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🌟', category: 'masculinos-diseñador' },
    { name: '212 MEN SEXY', brand: 'CAROLINA HERRERA', price: 25000, emoji: '😎', category: 'masculinos-diseñador' },
    { name: 'BAD BOY', brand: 'CAROLINA HERRERA', price: 25000, emoji: '😈', category: 'masculinos-diseñador' },
    { name: 'BAD BOY COBALTO', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🔵', category: 'masculinos-diseñador' },
    { name: 'HEROES', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🦸', category: 'masculinos-diseñador' },
    { name: 'POLO ROJO', brand: 'RALPH LAUREN', price: 25000, emoji: '🔴', category: 'masculinos-diseñador' },
    { name: 'POLO AZUL', brand: 'RALPH LAUREN', price: 25000, emoji: '🔵', category: 'masculinos-diseñador' },
    { name: 'POLO VERDE', brand: 'RALPH LAUREN', price: 25000, emoji: '💚', category: 'masculinos-diseñador' },
    { name: 'POLO BLACK', brand: 'RALPH LAUREN', price: 25000, emoji: '🖤', category: 'masculinos-diseñador' },
    { name: 'CREED AVENTUS', brand: 'CREED', price: 25000, emoji: '🎯', category: 'masculinos-diseñador' },
    { name: 'CREED ROYAL OUD', brand: 'CREED', price: 25000, emoji: '👑', category: 'masculinos-diseñador' },
    { name: 'CREED MILESIME 1849', brand: 'CREED', price: 25000, emoji: '📜', category: 'masculinos-diseñador' },
    { name: 'LAYTON', brand: 'MARLY', price: 25000, emoji: '🌸', category: 'masculinos-diseñador' },
    { name: 'BLEU', brand: 'CHANEL', price: 25000, emoji: '🔵', category: 'masculinos-diseñador' },
    { name: 'CODE', brand: 'ARMANI', price: 25000, emoji: '💻', category: 'masculinos-diseñador' },
    { name: 'ACQUA DI GIO', brand: 'ARMANI', price: 25000, emoji: '💧', category: 'masculinos-diseñador' },
    { name: 'ACQUA DI GIO PROFUMO', brand: 'ARMANI', price: 25000, emoji: '💦', category: 'masculinos-diseñador' },
    { name: 'STRONG WITH YOU', brand: 'ARMANI', price: 25000, emoji: '💪', category: 'masculinos-diseñador' },
    { name: 'SAUVAGE', brand: 'CRISTIAN DIOR', price: 25000, emoji: '🌵', category: 'masculinos-diseñador' },
    { name: 'SAUVAGE ELIXIR', brand: 'CRISTIAN DIOR', price: 25000, emoji: '🧪', category: 'masculinos-diseñador' },
    { name: 'FAHRENHEIT', brand: 'CRISTIAN DIOR', price: 25000, emoji: '🔥', category: 'masculinos-diseñador' },
    { name: 'DIOR HOMME SPORT', brand: 'CRISTIAN DIOR', price: 25000, emoji: '⚽', category: 'masculinos-diseñador' },
    { name: 'PLAY', brand: 'GIVENCHY', price: 25000, emoji: '🎮', category: 'masculinos-diseñador' },
    { name: 'PLAY INTENSE', brand: 'GIVENCHY', price: 25000, emoji: '🎯', category: 'masculinos-diseñador' },
    { name: 'GENTLEMAN', brand: 'GIVENCHY', price: 25000, emoji: '🎩', category: 'masculinos-diseñador' },
    { name: 'VERY IRRESISTIBLE', brand: 'GIVENCHY', price: 25000, emoji: '💕', category: 'masculinos-diseñador' },
    { name: 'HUGO BOSS', brand: 'HUGO BOSS', price: 25000, emoji: '✌️', category: 'masculinos-diseñador' },
    { name: 'HUGO BOSS BLACK', brand: 'HUGO BOSS', price: 25000, emoji: '🖤', category: 'masculinos-diseñador' },
    { name: 'MIYAKE', brand: 'ISSEY MIYAKI', price: 25000, emoji: '🌺', category: 'masculinos-diseñador' },
    { name: 'LAPIDUS', brand: 'POUR HOMME', price: 25000, emoji: '💎', category: 'masculinos-diseñador' },
    { name: 'SCANDAL', brand: 'JEAN PAUL', price: 25000, emoji: '😲', category: 'masculinos-diseñador' },
    { name: 'SCANDAL ABSOLUT', brand: 'JEAN PAUL', price: 25000, emoji: '🔥', category: 'masculinos-diseñador' },
    { name: 'LE MALE', brand: 'JEAN PAUL', price: 25000, emoji: '♂️', category: 'masculinos-diseñador' },
    { name: 'LE MALE ELIXIR', brand: 'JEAN PAUL', price: 25000, emoji: '🧪', category: 'masculinos-diseñador' },
    { name: 'LE BEAU GALTIER', brand: 'JEAN PAUL', price: 25000, emoji: '🌟', category: 'masculinos-diseñador' },
    { name: 'LE BEAU MALE', brand: 'JEAN PAUL', price: 25000, emoji: '😊', category: 'masculinos-diseñador' },
    { name: 'AZZARO', brand: 'AZZARO', price: 25000, emoji: '🌈', category: 'masculinos-diseñador' },
    { name: 'WANTED', brand: 'AZZARO', price: 25000, emoji: '🔍', category: 'masculinos-diseñador' },
    { name: 'KENZO', brand: 'KENZO', price: 25000, emoji: '🌸', category: 'masculinos-diseñador' },
    { name: 'BLUE SEDUCCION', brand: 'A. BANDERAS', price: 25000, emoji: '💙', category: 'masculinos-diseñador' },
    { name: 'KING SEDUCCION', brand: 'A. BANDERAS', price: 25000, emoji: '👑', category: 'masculinos-diseñador' },
    { name: 'THE ICON', brand: 'A. BANDERAS', price: 25000, emoji: '🎭', category: 'masculinos-diseñador' },
    { name: 'ANGEL', brand: 'THERRY MUGLER', price: 25000, emoji: '😇', category: 'masculinos-diseñador' },
    { name: 'OMBRE LEATHER', brand: 'TOM FORD', price: 25000, emoji: '🎒', category: 'masculinos-diseñador' },
    { name: 'COSTA AZZURRA', brand: 'TOM FORD', price: 25000, emoji: '🏖️', category: 'masculinos-diseñador' },
    { name: 'TOBACCO Y VAINILA', brand: 'TOM FORD', price: 25000, emoji: '🚬', category: 'masculinos-diseñador' },
    { name: 'EROS', brand: 'VERSACE', price: 25000, emoji: '💘', category: 'masculinos-diseñador' },
    { name: 'EROS FLAME', brand: 'VERSACE', price: 25000, emoji: '🔥', category: 'masculinos-diseñador' },
    { name: 'DYLAN BLUE', brand: 'VERSACE', price: 25000, emoji: '🔵', category: 'masculinos-diseñador' },
    { name: 'FOR HIM', brand: 'NARCISO', price: 25000, emoji: '🪞', category: 'masculinos-diseñador' },
    { name: 'THE ONE', brand: 'DOLCE GABBANA', price: 25000, emoji: '1️⃣', category: 'masculinos-diseñador' },
    { name: 'TOMMY', brand: 'HILFIGER', price: 25000, emoji: '🏴', category: 'masculinos-diseñador' },
    { name: 'MAN IN BLACK', brand: 'BULGARI', price: 25000, emoji: '🖤', category: 'masculinos-diseñador' },
    { name: 'YSL Men', brand: 'Y. S. LAURENT', price: 25000, emoji: '✨', category: 'masculinos-diseñador' },
    { name: 'SPICEBOM', brand: 'VICTOR ROLF', price: 25000, emoji: '🌶️', category: 'masculinos-diseñador' },
    { name: 'SANTAL 33', brand: 'LE LABO', price: 25000, emoji: '🪵', category: 'masculinos-diseñador' },
    { name: 'VALENTINO OUMO', brand: 'VALENTINO', price: 25000, emoji: '💜', category: 'masculinos-diseñador' },
    { name: 'VALENTINO BORN IN ROMA', brand: 'VALENTINO', price: 25000, emoji: '🇮🇹', category: 'masculinos-diseñador' },
    { name: 'VALENTINO BORN I.R. INTENS', brand: 'VALENTINO', price: 25000, emoji: '🔥', category: 'masculinos-diseñador' },
    { name: 'TOY BOY', brand: 'MOSCHINO', price: 25000, emoji: '🧸', category: 'masculinos-diseñador' },
    { name: 'COOL WATER', brand: 'DAVIDOFF', price: 25000, emoji: '❄️', category: 'masculinos-diseñador' },
    { name: 'HALLOWEEN MAN', brand: 'HALLOWEEN', price: 25000, emoji: '🎃', category: 'masculinos-diseñador' },

    // FEMENINOS DE DISEÑADOR
    { name: 'GOOD GIRL', brand: 'CAROLINA HERRERA', price: 25000, emoji: '😇', category: 'femeninos-diseñador' },
    { name: 'GOOD GIRL SUPREM', brand: 'CAROLINA HERRERA', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'GOOD GIRL BLUSH', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🌸', category: 'femeninos-diseñador' },
    { name: 'GOOD GIRL VERY', brand: 'CAROLINA HERRERA', price: 25000, emoji: '✨', category: 'femeninos-diseñador' },
    { name: '212 ROSE', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🌹', category: 'femeninos-diseñador' },
    { name: '212 SEXY', brand: 'CAROLINA HERRERA', price: 25000, emoji: '😎', category: 'femeninos-diseñador' },
    { name: '212 VIP', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🎩', category: 'femeninos-diseñador' },
    { name: '212 VIP NyC', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🗽', category: 'femeninos-diseñador' },
    { name: '212 HEROES', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🦸‍♀️', category: 'femeninos-diseñador' },
    { name: 'SUBLIME', brand: 'CAROLINA HERRERA', price: 25000, emoji: '⭐', category: 'femeninos-diseñador' },
    { name: 'INSIGNIA', brand: 'CAROLINA HERRERA', price: 25000, emoji: '🔱', category: 'femeninos-diseñador' },
    { name: 'CH', brand: 'CAROLINA HERRERA', price: 25000, emoji: '💃', category: 'femeninos-diseñador' },
    { name: 'LA BOMBA', brand: 'CAROLINA HERRERA', price: 25000, emoji: '💣', category: 'femeninos-diseñador' },
    { name: 'NINA', brand: 'NINA RICCI', price: 25000, emoji: '👧', category: 'femeninos-diseñador' },
    { name: 'NINA BELLA', brand: 'NINA RICCI', price: 25000, emoji: '😍', category: 'femeninos-diseñador' },
    { name: 'NINA LUNA', brand: 'NINA RICCI', price: 25000, emoji: '🌙', category: 'femeninos-diseñador' },
    { name: 'NINA ELIXIR', brand: 'NINA RICCI', price: 25000, emoji: '🧪', category: 'femeninos-diseñador' },
    { name: 'NINA ROSE', brand: 'NINA RICCI', price: 25000, emoji: '🌹', category: 'femeninos-diseñador' },
    { name: 'NINA ROUGE', brand: 'NINA RICCI', price: 25000, emoji: '❤️', category: 'femeninos-diseñador' },
    { name: 'LES DELICES', brand: 'NINA RICCI', price: 25000, emoji: '🍫', category: 'femeninos-diseñador' },
    { name: 'LA VIDA ES BELLA', brand: 'LANCONE', price: 25000, emoji: '😊', category: 'femeninos-diseñador' },
    { name: 'LA VIDA ES BELLA ROSE', brand: 'LANCONE', price: 25000, emoji: '🌹', category: 'femeninos-diseñador' },
    { name: 'LA VIDA ES BELLA L.EXTRAIT', brand: 'LANCONE', price: 25000, emoji: '💎', category: 'femeninos-diseñador' },
    { name: 'IDOLE', brand: 'LANCONE', price: 25000, emoji: '😍', category: 'femeninos-diseñador' },
    { name: 'LA NUIT TRESOR', brand: 'LANCONE', price: 25000, emoji: '💎', category: 'femeninos-diseñador' },
    { name: 'OLYMPEA', brand: 'PACO RABANNE', price: 25000, emoji: '🏛️', category: 'femeninos-diseñador' },
    { name: 'OLYMPEA BLOSSON', brand: 'PACO RABANNE', price: 25000, emoji: '🌸', category: 'femeninos-diseñador' },
    { name: 'OLYMPEA INTENS', brand: 'PACO RABANNE', price: 25000, emoji: '🔥', category: 'femeninos-diseñador' },
    { name: 'OLYMPEA LEGEND', brand: 'PACO RABANNE', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'LADY MILLION', brand: 'PACO RABANNE', price: 25000, emoji: '💰', category: 'femeninos-diseñador' },
    { name: 'LADY MILLION LUCKY', brand: 'PACO RABANNE', price: 25000, emoji: '🍀', category: 'femeninos-diseñador' },
    { name: 'LADY MILLION PRIVE', brand: 'PACO RABANNE', price: 25000, emoji: '🔐', category: 'femeninos-diseñador' },
    { name: 'FAME', brand: 'PACO RABANNE', price: 25000, emoji: '⭐', category: 'femeninos-diseñador' },
    { name: 'PURE XS', brand: 'PACO RABANNE', price: 25000, emoji: '🧊', category: 'femeninos-diseñador' },
    { name: 'BLACK XS FRODI', brand: 'PACO RABANNE', price: 25000, emoji: '🖤', category: 'femeninos-diseñador' },
    { name: 'BLACK XS', brand: 'PACO RABANNE', price: 25000, emoji: '🖤', category: 'femeninos-diseñador' },
    { name: 'MILLION GOLD FOR HER', brand: 'PACO RABANNE', price: 25000, emoji: '💛', category: 'femeninos-diseñador' },
    { name: 'ANGEL Y DEMONIO', brand: 'GIVENCHY', price: 25000, emoji: '😇😈', category: 'femeninos-diseñador' },
    { name: 'PLAY', brand: 'GIVENCHY', price: 25000, emoji: '🎮', category: 'femeninos-diseñador' },
    { name: 'PLAY INTENSE', brand: 'GIVENCHY', price: 25000, emoji: '🔥', category: 'femeninos-diseñador' },
    { name: 'IRRESISTIBLE', brand: 'GIVENCHY', price: 25000, emoji: '💕', category: 'femeninos-diseñador' },
    { name: 'IRRESISTIBLE VERY', brand: 'GIVENCHY', price: 25000, emoji: '❤️', category: 'femeninos-diseñador' },
    { name: 'AMARIGE', brand: 'GIVENCHY', price: 25000, emoji: '🌼', category: 'femeninos-diseñador' },
    { name: "L'INTERDIT", brand: 'GIVENCHY', price: 25000, emoji: '🚫', category: 'femeninos-diseñador' },
    { name: "L'INTERDIT ROUGE", brand: 'GIVENCHY', price: 25000, emoji: '🔴', category: 'femeninos-diseñador' },
    { name: 'EUPHORIA', brand: 'CALVIN KLEIN', price: 25000, emoji: '😍', category: 'femeninos-diseñador' },
    { name: 'ALIEN', brand: 'THERRY MUGLER', price: 25000, emoji: '👽', category: 'femeninos-diseñador' },
    { name: 'NOVA', brand: 'THERRY MUGLER', price: 25000, emoji: '⭐', category: 'femeninos-diseñador' },
    { name: 'KENZO AMOR', brand: 'KENZO', price: 25000, emoji: '💕', category: 'femeninos-diseñador' },
    { name: 'KENZO FLOWER', brand: 'KENZO', price: 25000, emoji: '🌸', category: 'femeninos-diseñador' },
    { name: 'KENZO MADLY', brand: 'KENZO', price: 25000, emoji: '😍', category: 'femeninos-diseñador' },
    { name: 'KENZO L\'EAD', brand: 'KENZO', price: 25000, emoji: '💧', category: 'femeninos-diseñador' },
    { name: 'Q BY DOLCE GABANA', brand: 'DOLCE GABANNA', price: 25000, emoji: '❓', category: 'femeninos-diseñador' },
    { name: 'DEVOTION', brand: 'DOLCE GABANNA', price: 25000, emoji: '💗', category: 'femeninos-diseñador' },
    { name: 'ROSE PRICK', brand: 'TOM FORD', price: 25000, emoji: '🌹', category: 'femeninos-diseñador' },
    { name: 'LOST CHERRY', brand: 'TOM FORD', price: 25000, emoji: '🍒', category: 'femeninos-diseñador' },
    { name: 'MY WAY', brand: 'ARMANI', price: 25000, emoji: '🛣️', category: 'femeninos-diseñador' },
    { name: 'SI', brand: 'ARMANI', price: 25000, emoji: '✅', category: 'femeninos-diseñador' },
    { name: 'ACQUA DE GIO', brand: 'ARMANI', price: 25000, emoji: '💧', category: 'femeninos-diseñador' },
    { name: 'CODE', brand: 'ARMANI', price: 25000, emoji: '💻', category: 'femeninos-diseñador' },
    { name: 'CARMINA', brand: 'CREED', price: 25000, emoji: '🎵', category: 'femeninos-diseñador' },
    { name: 'SCANDAL', brand: 'JEAN PAUL GAULTHER', price: 25000, emoji: '😲', category: 'femeninos-diseñador' },
    { name: 'DIVINE', brand: 'JEAN PAUL GAULTHER', price: 25000, emoji: '😇', category: 'femeninos-diseñador' },
    { name: 'LA BELLE', brand: 'JEAN PAUL GAULTHER', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'DAISY', brand: 'MARC JACOB', price: 25000, emoji: '🌼', category: 'femeninos-diseñador' },
    { name: 'BE DELICIOUS', brand: 'DONNA KARAN', price: 25000, emoji: '🍎', category: 'femeninos-diseñador' },
    { name: 'RED DELICIOUS', brand: 'DONNA KARAN', price: 25000, emoji: '❤️', category: 'femeninos-diseñador' },
    { name: 'DKNY women', brand: 'DONNA KARAN', price: 25000, emoji: '🗽', category: 'femeninos-diseñador' },
    { name: 'AMOR AMOR', brand: 'CACHAREL', price: 25000, emoji: '💕', category: 'femeninos-diseñador' },
    { name: 'HALLOWEEN', brand: 'HALLOWEEN', price: 25000, emoji: '🎃', category: 'femeninos-diseñador' },
    { name: 'HALLOWEEN BLOSSON', brand: 'HALLOWEEN', price: 25000, emoji: '🌸', category: 'femeninos-diseñador' },
    { name: 'OMNIA CORAL', brand: 'BVLGARI', price: 25000, emoji: '🪸', category: 'femeninos-diseñador' },
    { name: 'MIYAKE', brand: 'ISSEY', price: 25000, emoji: '🌺', category: 'femeninos-diseñador' },
    { name: 'SUTIL', brand: 'IVES DOGERVIL', price: 25000, emoji: '✨', category: 'femeninos-diseñador' },
    { name: 'BELIEVE', brand: 'BRITNEY SPEARS', price: 25000, emoji: '💫', category: 'femeninos-diseñador' },
    { name: 'POISON', brand: 'CRISTIAN DIOR', price: 25000, emoji: '☠️', category: 'femeninos-diseñador' },
    { name: 'MISS DIOR', brand: 'CRISTIAN DIOR', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'MISS DIOR BLOOMING', brand: 'CRISTIAN DIOR', price: 25000, emoji: '🌸', category: 'femeninos-diseñador' },
    { name: 'JADORE', brand: 'CRISTIAN DIOR', price: 25000, emoji: '💎', category: 'femeninos-diseñador' },
    { name: 'TOY 2 BLUBLE GUM', brand: 'MOSCHINO', price: 25000, emoji: '🧸', category: 'femeninos-diseñador' },
    { name: 'TOY 2', brand: 'MOSCHINO', price: 25000, emoji: '🧸', category: 'femeninos-diseñador' },
    { name: 'TOMMY GIRL', brand: 'HILFIGER', price: 25000, emoji: '👧', category: 'femeninos-diseñador' },
    { name: 'HEIRESS', brand: 'HILTON', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'COOL WATER', brand: 'DAVIDOFF', price: 25000, emoji: '❄️', category: 'femeninos-diseñador' },
    { name: 'PALOMA PICASSO', brand: 'PALOMA PICASSO', price: 25000, emoji: '🎨', category: 'femeninos-diseñador' },
    { name: 'FLOWERBOMB', brand: 'VIKTOR & ROLF', price: 25000, emoji: '💣', category: 'femeninos-diseñador' },
    { name: 'OPIUM BLACK', brand: 'YVES SAINT LAURENT', price: 25000, emoji: '🖤', category: 'femeninos-diseñador' },
    { name: 'LIBRE', brand: 'YVES SAINT LAURENT', price: 25000, emoji: '🦅', category: 'femeninos-diseñador' },
    { name: 'DELINA ESCLUSIF', brand: 'MARLY', price: 25000, emoji: '💎', category: 'femeninos-diseñador' },
    { name: 'CLUOD', brand: 'ARAINA GRANDE', price: 25000, emoji: '☁️', category: 'femeninos-diseñador' },
    { name: 'THANK U, NEXT', brand: 'ARAINA GRANDE', price: 25000, emoji: '🙏', category: 'femeninos-diseñador' },
    { name: 'BRIGHT CRISTAL', brand: 'VERSACE', price: 25000, emoji: '💎', category: 'femeninos-diseñador' },
    { name: 'EROS POURS FEMME', brand: 'VERSACE', price: 25000, emoji: '💘', category: 'femeninos-diseñador' },
    { name: 'CHANEL Nº 5', brand: 'CHANEL', price: 25000, emoji: '5️⃣', category: 'femeninos-diseñador' },
    { name: 'COCO MADEMOISELLE', brand: 'CHANEL', price: 25000, emoji: '👑', category: 'femeninos-diseñador' },
    { name: 'VALENTINO DONNA IN ROMA', brand: 'VALENTINO', price: 25000, emoji: '🇮🇹', category: 'femeninos-diseñador' },
    { name: 'GOODESS', brand: 'BURBERRY', price: 25000, emoji: '🦸‍♀️', category: 'femeninos-diseñador' },
    { name: 'HER', brand: 'BURBERRY', price: 25000, emoji: '👩', category: 'femeninos-diseñador' },

    // MASCULINOS ÁRABES (30+)
    { name: 'CLUB de NUIT', brand: 'ARMAF', price: 25000, emoji: '🌙', category: 'masculinos-arabes' },
    { name: 'CLUB DE NUIT LIONHEART', brand: 'ARMAF', price: 25000, emoji: '🦁', category: 'masculinos-arabes' },
    { name: 'CLUB DE NUIT BLUE ICONIC', brand: 'ARMAF', price: 25000, emoji: '🔵', category: 'masculinos-arabes' },
    { name: 'CLUB DE NUIT URBAN ELIXIR', brand: 'ARMAF', price: 25000, emoji: '🧪', category: 'masculinos-arabes' },
    { name: '9 PM', brand: 'AFNAN', price: 25000, emoji: '🕘', category: 'masculinos-arabes' },
    { name: '9 AM DIVE', brand: 'AFNAN', price: 25000, emoji: '💧', category: 'masculinos-arabes' },
    { name: '9 PM ELIXIR', brand: 'AFNAN', price: 25000, emoji: '🧪', category: 'masculinos-arabes' },
    { name: 'EXCELLUS', brand: 'ARMAF', price: 25000, emoji: '⭐', category: 'masculinos-arabes' },
    { name: 'RUGIR', brand: 'ARMAF', price: 25000, emoji: '🦁', category: 'masculinos-arabes' },
    { name: 'BLUE HOMME', brand: 'ARMAF', price: 25000, emoji: '💙', category: 'masculinos-arabes' },
    { name: 'ODYSSEY MEGA MAN', brand: 'ARMAF', price: 25000, emoji: '🚀', category: 'masculinos-arabes' },
    { name: 'ODYSSEY MANDARIN SKY', brand: 'ARMAF', price: 25000, emoji: '🌅', category: 'masculinos-arabes' },
    { name: 'ODYSSEY MANDARIN SKY ELIXIR', brand: 'ARMAF', price: 25000, emoji: '✨', category: 'masculinos-arabes' },
    { name: 'ODYSSEY HOMME WHITE ED.', brand: 'ARMAF', price: 25000, emoji: '🤍', category: 'masculinos-arabes' },
    { name: 'ODYSSEY AQUA ED.', brand: 'ARMAF', price: 25000, emoji: '💧', category: 'masculinos-arabes' },
    { name: 'ODYSSEY WILD ONE GOLD', brand: 'ARMAF', price: 25000, emoji: '🏆', category: 'masculinos-arabes' },
    { name: 'ODYSSEY AOUD', brand: 'ARMAF', price: 25000, emoji: '🌳', category: 'masculinos-arabes' },
    { name: 'BHARARA KING', brand: 'BHARARA', price: 25000, emoji: '👑', category: 'masculinos-arabes' },
    { name: 'AQUA DE DUBUAI', brand: 'HARAMAIN', price: 25000, emoji: '💧', category: 'masculinos-arabes' },
    { name: 'ASAD', brand: 'LATTAFA', price: 25000, emoji: '🦁', category: 'masculinos-arabes' },
    { name: 'ASAD ELIXIR', brand: 'LATTAFA', price: 25000, emoji: '🧪', category: 'masculinos-arabes' },
    { name: 'ASAD ZANZIBAR', brand: 'LATTAFA', price: 25000, emoji: '🏝️', category: 'masculinos-arabes' },
    { name: 'ASAD BOURBON', brand: 'LATTAFA', price: 25000, emoji: '🥃', category: 'masculinos-arabes' },
    { name: 'THE KINGDON', brand: 'LATTAFA', price: 25000, emoji: '👑', category: 'masculinos-arabes' },
    { name: 'BLUE SAPPHIRE', brand: 'LATTAFA', price: 25000, emoji: '💎', category: 'masculinos-arabes' },
    { name: 'FAKHAR BLACK', brand: 'LATTAFA', price: 25000, emoji: '🖤', category: 'masculinos-arabes' },
    { name: 'FAKHAR EXTRAIT', brand: 'LATTAFA', price: 25000, emoji: '✨', category: 'masculinos-arabes' },
    { name: 'WAJOOD', brand: 'LATTAFA', price: 25000, emoji: '🌟', category: 'masculinos-arabes' },
    { name: 'HAYAATI AL MALEKY', brand: 'LATTAFA', price: 25000, emoji: '🏰', category: 'masculinos-arabes' },
    { name: 'HIS CONFESSION', brand: 'LATTAFA', price: 25000, emoji: '💭', category: 'masculinos-arabes' },
    { name: 'ANSAAM SILVER', brand: 'LATTAFA', price: 25000, emoji: '🥈', category: 'masculinos-arabes' },
    { name: 'QAED AL FURSAN', brand: 'LATTAFA', price: 25000, emoji: '🐴', category: 'masculinos-arabes' },
    { name: 'QAED AL FURSAN UNLIMITED', brand: 'LATTAFA', price: 25000, emoji: '∞', category: 'masculinos-arabes' },
    { name: 'HAWAS', brand: 'RASASI', price: 25000, emoji: '❤️', category: 'masculinos-arabes' },

    // UNISEX ÁRABES (30+)
    { name: 'MORE THAN WORDS', brand: 'XERJOFF', price: 25000, emoji: '💬', category: 'unisex-arabes' },
    { name: 'ERBA PURA', brand: 'XERJOFF', price: 25000, emoji: '🌿', category: 'unisex-arabes' },
    { name: 'ERBA PURA GOLD', brand: 'XERJOFF', price: 25000, emoji: '🌿💛', category: 'unisex-arabes' },
    { name: 'MUSE', brand: 'XERJOFF', price: 25000, emoji: '🎨', category: 'unisex-arabes' },
    { name: 'TORINO 21', brand: 'XERJOFF', price: 25000, emoji: '🇮🇹', category: 'unisex-arabes' },
    { name: 'ALEXANDRIA II', brand: 'XERJOFF', price: 25000, emoji: '📚', category: 'unisex-arabes' },
    { name: 'NAXOS', brand: 'XERJOFF', price: 25000, emoji: '🏝️', category: 'unisex-arabes' },
    { name: 'AMBER OUD GOLD', brand: 'HARAMAIN', price: 25000, emoji: '🏆', category: 'unisex-arabes' },
    { name: 'AMBER OUD ROUGE', brand: 'HARAMAIN', price: 25000, emoji: '🔴', category: 'unisex-arabes' },
    { name: 'AMBER OUD ULTRA VIOLET', brand: 'HARAMAIN', price: 25000, emoji: '💜', category: 'unisex-arabes' },
    { name: 'AMBER OUD TOBACCO EDIT.', brand: 'HARAMAIN', price: 25000, emoji: '🚬', category: 'unisex-arabes' },
    { name: 'ANGEL&SHARE', brand: 'KILIAN', price: 25000, emoji: '😇', category: 'unisex-arabes' },
    { name: 'KHAMRAH', brand: 'LATTAFA', price: 25000, emoji: '🍷', category: 'unisex-arabes' },
    { name: 'KHAMRAH QAHWA', brand: 'LATTAFA', price: 25000, emoji: '☕', category: 'unisex-arabes' },
    { name: 'NEBRAS', brand: 'LATTAFA', price: 25000, emoji: '⭐', category: 'unisex-arabes' },
    { name: 'OUD FOR GLORY', brand: 'LATTAFA', price: 25000, emoji: '🏆', category: 'unisex-arabes' },
    { name: 'BADE\'E AL OUD SUBLIME', brand: 'LATTAFA', price: 25000, emoji: '👑', category: 'unisex-arabes' },
    { name: 'AMETHYST', brand: 'LATTAFA', price: 25000, emoji: '💜', category: 'unisex-arabes' },
    { name: 'AFEEF', brand: 'LATTAFA', price: 25000, emoji: '⚔️', category: 'unisex-arabes' },
    { name: 'ISHQ AL SHUYUKH SILVER', brand: 'LATTAFA', price: 25000, emoji: '🥈', category: 'unisex-arabes' },
    { name: 'ISHQ AL SHUYUKH GOLD', brand: 'LATTAFA', price: 25000, emoji: '🏆', category: 'unisex-arabes' },
    { name: 'OUD MOD', brand: 'LATTAFA', price: 25000, emoji: '🎵', category: 'unisex-arabes' },
    { name: 'VICTORIA', brand: 'LATTAFA', price: 25000, emoji: '👑', category: 'unisex-arabes' },
    { name: 'TERIAQ', brand: 'LATTAFA', price: 25000, emoji: '⚗️', category: 'unisex-arabes' },
    { name: 'ANGHAM', brand: 'LATTAFA', price: 25000, emoji: '🎤', category: 'unisex-arabes' },
    { name: 'AFFECTION', brand: 'LATTAFA', price: 25000, emoji: '💕', category: 'unisex-arabes' },
    { name: 'VIKING BEIRUT', brand: 'BHARARA', price: 25000, emoji: '🚢', category: 'unisex-arabes' },
    { name: 'VIKING KASHMIR', brand: 'BHARARA', price: 25000, emoji: '🏔️', category: 'unisex-arabes' },
    { name: 'VIKING RIO', brand: 'BHARARA', price: 25000, emoji: '🏖️', category: 'unisex-arabes' },
    { name: '9 PM REBEL', brand: 'AFNAN', price: 25000, emoji: '🎸', category: 'unisex-arabes' },
    { name: 'BADE\'E AL OUD HONOR & GLORY', brand: 'LATTAFA', price: 25000, emoji: '🎖️', category: 'unisex-arabes' },
    { name: 'AMBER ROUGE', brand: 'ORIENTICA', price: 25000, emoji: '🔴', category: 'unisex-arabes' },

    // FEMENINOS ÁRABES (30+)
    { name: 'ISLAND BLISS', brand: 'ARMAF', price: 25000, emoji: '🏝️', category: 'femeninos-arabes' },
    { name: 'YUM YUM', brand: 'ARMAF', price: 25000, emoji: '😋', category: 'femeninos-arabes' },
    { name: 'ODYSSEY CANDEE', brand: 'ARMAF', price: 25000, emoji: '🍬', category: 'femeninos-arabes' },
    { name: 'BHARARA ROSE', brand: 'BHARARA', price: 25000, emoji: '🌹', category: 'femeninos-arabes' },
    { name: 'LIRA', brand: 'XERJOFF', price: 25000, emoji: '🎼', category: 'femeninos-arabes' },
    { name: 'MADAWI', brand: 'ARABIAN OUD', price: 25000, emoji: '🌳', category: 'femeninos-arabes' },
    { name: 'BARAKKAT ROUGE 540', brand: 'MAISON KURRKDJIA', price: 25000, emoji: '💎', category: 'femeninos-arabes' },
    { name: 'FAKHAR ROSE', brand: 'LATTAFA', price: 25000, emoji: '🌹', category: 'femeninos-arabes' },
    { name: 'QIMMAH FOR WOMEN', brand: 'LATTAFA', price: 25000, emoji: '👑', category: 'femeninos-arabes' },
    { name: 'EMAAN', brand: 'LATTAFA', price: 25000, emoji: '💪', category: 'femeninos-arabes' },
    { name: 'SAKEENA', brand: 'LATTAFA', price: 25000, emoji: '😊', category: 'femeninos-arabes' },
    { name: 'HAYA', brand: 'LATTAFA', price: 25000, emoji: '🎨', category: 'femeninos-arabes' },
    { name: 'MAYAR rosa', brand: 'LATTAFA', price: 25000, emoji: '🌹', category: 'femeninos-arabes' },
    { name: 'MAYAR N Intense verde', brand: 'LATTAFA', price: 25000, emoji: '💚', category: 'femeninos-arabes' },
    { name: 'MAYRA CHERRY', brand: 'LATTAFA', price: 25000, emoji: '🍒', category: 'femeninos-arabes' },
    { name: 'YARA rosa', brand: 'LATTAFA', price: 25000, emoji: '🌹', category: 'femeninos-arabes' },
    { name: 'YARA rosa ELIXIR', brand: 'LATTAFA', price: 25000, emoji: '✨', category: 'femeninos-arabes' },
    { name: 'YARA TOUS', brand: 'LATTAFA', price: 25000, emoji: '👑', category: 'femeninos-arabes' },
    { name: 'YARA CANDY', brand: 'LATTAFA', price: 25000, emoji: '🍭', category: 'femeninos-arabes' },
    { name: 'YARA MOI', brand: 'LATTAFA', price: 25000, emoji: '👩', category: 'femeninos-arabes' },
    { name: 'HAYAATI FLORENCE', brand: 'LATTAFA', price: 25000, emoji: '🏛️', category: 'femeninos-arabes' },
    { name: 'THARWAH GOLD', brand: 'LATTAFA', price: 25000, emoji: '🏆', category: 'femeninos-arabes' },
    { name: 'NOBLE BLUSH', brand: 'LATTAFA', price: 25000, emoji: '🌸', category: 'femeninos-arabes' },
    { name: 'ÁNSAAM GOLD', brand: 'LATTAFA', price: 25000, emoji: '🥇', category: 'femeninos-arabes' },
    { name: 'ECLAIRE', brand: 'LATTAFA', price: 25000, emoji: '✨', category: 'femeninos-arabes' },
    { name: 'ATHEERI', brand: 'LATTAFA', price: 25000, emoji: '🌟', category: 'femeninos-arabes' },
    { name: 'KIAANA ANGEL', brand: 'AFNAN', price: 25000, emoji: '😇', category: 'femeninos-arabes' },
    { name: 'AMEERAT arab p rose', brand: 'ASDAAF', price: 25000, emoji: '👑', category: 'femeninos-arabes' },
    { name: 'AL ANDALEEB', brand: 'ASDAAF', price: 25000, emoji: '🎵', category: 'femeninos-arabes' },
    { name: 'WATANI', brand: 'AL WARTANIAH', price: 25000, emoji: '🇸🇦', category: 'femeninos-arabes' },
    { name: 'BILLIE EILISH', brand: 'BILLIE EILISH', price: 25000, emoji: '🎤', category: 'femeninos-arabes' },
    { name: 'OPULENT MUSK', brand: 'LATTAFA', price: 25000, emoji: '💎', category: 'femeninos-arabes' },
];

// ========================================
// APLICACIÓN - OBJETO PRINCIPAL
// ========================================

let currentPage = 0;
const itemsPerPage = 5; // ACTUALIZADO: Mostrar 5 perfumes por página
let selectedCategory = 'todas'; // Categoría seleccionada
let searchTerm = ''; // Término de búsqueda

const app = {
    init() {
        this.setupEventListeners();
        this.renderGrid();
        this.updatePageInfo();
    },

    setupEventListeners() {
        // Navegación principal
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateTo(page);
            });
        });

        // Botones de paginación
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.navigatePrevPage();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.navigateNextPage();
        });

        // BÚSQUEDA EN TIEMPO REAL
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchTerm = e.target.value.toLowerCase().trim();
                currentPage = 0; // Reiniciar a primera página
                this.renderGrid();
                this.updatePageInfo();
                this.updateSearchResults();
            });
        }

        // FILTRO DE CATEGORÍAS
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remover clase active de todos los botones
                categoryButtons.forEach(b => b.classList.remove('active'));
                // Agregar clase active al botón clickeado
                e.target.classList.add('active');

                selectedCategory = e.target.dataset.category;
                currentPage = 0; // Reiniciar a primera página
                this.renderGrid();
                this.updatePageInfo();
            });
        });

        // Teclas de flecha para navegar
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('catalogo').classList.contains('active')) {
                if (e.key === 'ArrowLeft') this.navigatePrevPage();
                if (e.key === 'ArrowRight') this.navigateNextPage();
            }
        });
    },

    getFilteredDatabase() {
        let filtered = perfumeDatabase;

        // Filtrar por categoría
        if (selectedCategory !== 'todas') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // Filtrar por búsqueda
        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.brand.toLowerCase().includes(searchTerm)
            );
        }

        return filtered;
    },

    updateSearchResults() {
        const filtered = this.getFilteredDatabase();
        const resultsSpan = document.getElementById('searchResults');
        if (resultsSpan) {
            if (searchTerm) {
                resultsSpan.textContent = `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
            } else {
                resultsSpan.textContent = '';
            }
        }
    },

    renderGrid() {
        const grid = document.getElementById('perfumesGrid');
        grid.innerHTML = '';

        const filtered = this.getFilteredDatabase();

        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No se encontraron perfumes</p>';
            return;
        }

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const perfumesInPage = filtered.slice(startIndex, endIndex);

        perfumesInPage.forEach((perfume) => {
            // Encontrar el índice real en la base de datos completa para addToCart
            const realIndex = perfumeDatabase.indexOf(perfume);
            const card = document.createElement('div');
            card.className = 'perfume-card';
            card.innerHTML = `
                <div class="perfume-emoji">${perfume.emoji}</div>
                <h4>${perfume.name}</h4>
                <p class="brand">${perfume.brand}</p>
                <p class="price">$${perfume.price.toLocaleString('es-AR')}</p>
                <button class="btn-add" onclick="cart.addToCart(${realIndex})">🛒 Agregar</button>
            `;
            grid.appendChild(card);
        });
    },

    updatePageInfo() {
        const filtered = this.getFilteredDatabase();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const pageIndicator = document.getElementById('pageIndicator');
        if (pageIndicator) {
            if (filtered.length === 0) {
                pageIndicator.textContent = 'Sin resultados';
            } else {
                pageIndicator.textContent = `Página ${currentPage + 1} de ${totalPages}`;
            }
        }
    },

    navigatePrevPage() {
        const filtered = this.getFilteredDatabase();
        const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        this.renderGrid();
        this.updatePageInfo();
    },

    navigateNextPage() {
        const filtered = this.getFilteredDatabase();
        const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
        currentPage = (currentPage + 1) % totalPages;
        this.renderGrid();
        this.updatePageInfo();
    },

    navigateTo(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
