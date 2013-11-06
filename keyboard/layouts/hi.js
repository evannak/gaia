Keyboards.hi = {
    label: 'Hindi',
    menuLabel: 'हिन्दी',
    imEngine: 'latin',
    autoCorrectLanguage:'',
    keys: [
        [
         // ौ ै ा ी ू ब ह ग द ज ड ़ ॉ
         //औ ऐ आ ई ऊ भ ङ घ ध झ ढ ञ ऑ
          { value: 'ौ' }, { value: 'ै' }, { value: 'ा' }, { value: 'ी' },
          { value: 'ू' }, { value: 'ब' }, { value: 'ह' }, { value: 'ग' },
          { value: 'द' }, { value: 'ज' }, { value: 'ड' }, { value: '़'}
        ], [
        //  ो े ् ि ु प र क त च ट
        //  ओ ए अ इ उ फ ऱ ख थ छ ठ
          { value: 'ो' }, { value: 'े' }, { value: '्' }, { value: 'ि' },
          { value: 'ु' }, { value: 'प' }, { value: 'र' }, { value: 'क' },
          { value: 'त' }, { value: 'च' }, { value: 'ट' }
        ], [
       //  ॆ ं म न व ल स , . य
       //  ऎ ँ ण ऩ ऴ ळ श ष । य़
          { value: '⇪', keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
          { value: 'ं' }, { value: 'म' }, { value: 'न' }, { value: 'व' },
          { value: 'ल' }, { value: 'स' }, { value: 'ष' }, { value: '।' },
          { value: 'य' }, { value: '⌫', keyCode: KeyEvent.DOM_VK_BACK_SPACE }
        ], [
          { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
        ]
    ],
  upperCase: {
        'ौ':'औ',
        'ै':'ऐ',
        'ा':'आ',
        'ी':'ई',
        'ू':'ऊ',
        'ब':'भ',
        'ह':'ङ',
        'ग':'घ',
        'द':'ध',
        'ज':'झ',
        'ड':'ढ',
        '़':'ञ',
        'ो':'ओ',
        'े':'ए',
        '्':'अ',
        'ि':'इ',
        'ु':'उ',
        'प':'फ',
        'र':'ऱ',
        'क':'ख',
        'त':'थ',
        'च':'च',
        'ट':'ठ',
        'ं':'ँ',
        'म':'ण',
        'न':'ऩ',
        'व':'ऴ',
        'ल':'ळ',
        'स':'श',
        ',':',',
        '.':'.',
        '?':'य़',
        '=':'ृ',
        '+':'ऋ'
        }
  };