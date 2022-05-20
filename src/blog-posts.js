export const getPosts = () => {
  return [
    {
      title: "İyi bir mühendisin 10 özelliği",
      slug: "iyi-bir-muhendisin-10-ozelligi",
      short_details:
        "Uber’de engineering manager (mühendis müdürü) olarak çalışan Dan Heller’ın kendi blogunda ‘Ten Principles for Growth as an Engineer’… — Uber’de engineering manager (mühendis müdürü) olarak çalışan Dan...",
      details:
        "Uber’de engineering manager (mühendis müdürü) olarak çalışan Dan Heller’ın kendi blogunda ‘Ten Principles for Growth as an Engineer’ başlığıyla paylaştığı yazıyı çok etkili buldum. Kendim defalarca okudum, sizlerinde bundan faydalanmasını istiyorum. Eğer ingilizcenin yeteri seviyedeyse orjinalini okumanızı tavsiye ediyorum. Yazıyı beğendiğiniz ve faydalı bulduğunuz takdirde takım arkadaşlarınızla, sizinle çalışan mühendislerle paylaşmanızı öneririm. Bir mühendis çoğu zaman takımının ortalamasından daha ileriye gidemiyor. Etrafınızdakilerin gelişimine katkı sağlamak uzun vadede sizi de ileriye götürecek, bunu unutmamak lazım. Son olarak yazının aslına sadık kalmaya çalıştım, fakat bazı noktalarda kelime seçiminde insiyatif kullandım. İyi okumalar. Bir senedir müdürlük yaptığım mühendis geçen ay başka bir takıma geçiş yaptı. Birebir toplantılarımızdan birinde ona son zamanlarda projesini iyi yönettiğini söyledim. O da bana kendi kendini yönetme konusunda bir aydınlanma yaşadığını, çalıştığı projelerde başarıya ulaşmak için yaptığı işin her safhasını sahiplenmeye karar verdiğini, yalnızca kod yazmakla yetinmemeye başladığını söyledi. Bir yandan onun bu bakış açısından etkilendim, onun adına sevindim, bir yandan da kendime kızdım — uzun süredir genç mühendislerin yazılım işini öğrenebilmeleri için sahiplenmenin (ownership) en önemli şey olduğunu düşünüyorum fakat altımda çalışan mühendisin bu gerçeği kendine kendine, zor yoldan öğrenmesine sebep oldum. ",
      date: "19 Mayıs 2022",
      author: "Selman Kahya",
      author_link: "https://selmankahya.com/",
    },
    {
      title: "Senkron Ve Asenkron Programlama Nedir?",
      slug: "senkron-ve-asenkron-programlama-nedir",
      short_details:
        "Senkron Programlama Yazdığımız programların çoğu yazmış olduğumuz kodları yazılış sırasına göre yukarıdan aşağıya doğru işleyerek ilerler. Senkron programlamadaki her şeyi sırayla işlemesi ve her bir işlemin birbirini beklemesi yeri geldiğinde programımızı çok yavaşlatabilir... ",
      details:
        "Senkron Programlama Yazdığımız programların çoğu yazmış olduğumuz kodları yazılış sırasına göre yukarıdan aşağıya doğru işleyerek ilerler. Senkron programlamadaki her şeyi sırayla işlemesi ve her bir işlemin birbirini beklemesi yeri geldiğinde programımızı çok yavaşlatabilir... Örneğin yukarıdaki kodda 3. satır bir önceki satırı yani dosya okuma işlemini beklemek zorundadır. Dosya içeriği çok büyükse bu işlemler dakikalar bile alabilir. Ekrana “Program çalışıyor…” yazdırmak için bir önceki işlemin bitmesini beklemek pek akıllıca değil. İşte bu tip durumlar için asenkron fonksiyonlar kullanırız. Kod akışının sırayla işlemediği, işlemlerin birbirini beklemediği, kod akışının işlem durumlarına göre devam ettiği programlamaya Asenkron Programlama denir. Javascript Asenkron mu Yoksa Senkron mu Çalışır? Javascript single-thread ve asenkron yapıda çalışan bir programlama dilir. Aslında bu konu uzun uzun anlatılması gereken bir konu fakat kısaca şu şekilde açıklama yapalım. Javascript single-thread çalıştırma yaptığı için çalıştırdığı eventleri ve callback leri sıraya sokarak hepsini tek bir thread ile işler. Bahsedilen Event’lerin ve Callback’lerin sırada tutulduğu yapı, basit bir kuyruk (Queue) mekanizmasıdır. Thread’in her defasında kuyruktaki ilk Event’i işleyip yeni bir Event alması da Event Loop olarak adlandırılır. Javascript Run-to-Completion adı verilen, elindeki işi tamamlamadan başka bir işe geçmeyen bir mekanizmaya sahiptir.",
      date: "20 Mayıs 2022",
      author: "Ata Medya",
      author_link:
        "https://ata.com.tr/blog-detay/senkron-ve-asenkron-programlama-nedir-264",
    },
    {
      title: "Iron Man’e İlham Veren Mucit İşadamı: Elon Musk",
      slug: "iron-man-e-ilham-veren-mucit-isadamı-elon-musk",
      short_details:
        "Güney Afrika asıllı ABD’li işadamı Musk, Mars ile ilgili ‘çılgın’ planlarının ardından şimdi de ‘Cyborg projesi’yle konuşuluyor. Elon Musk, insan beynini bilgisayarlara bağlayarak insanlığı yeni bir boyuta taşımayı hedefleyen...",
      details:
        "Güney Afrika asıllı ABD’li işadamı Musk, Mars ile ilgili ‘çılgın’ planlarının ardından şimdi de ‘Cyborg projesi’yle konuşuluyor. Elon Musk, insan beynini bilgisayarlara bağlayarak insanlığı yeni bir boyuta taşımayı hedefleyen Neuralink adlı şirkete destek vereceğini açıkladı… Bilim kurgu filmlerinde tanık olduğumuz hani X-men ya da GORA’da olduğu gibi insan beynine türlü özelliklerin yüklenmesi ‘hadise’si! Çünkü Musk, yapay zekanın insanlığın sonunu getireceğine inanıyor ve onlarla mücadele etmek için de onların teknolojisi kadar yüksek bir teknolojiye erişmemiz gerektiğini savunuyor. Iron Man 2’de Rol Aldı Aynı zamanda Paypal’ın kurucu ortaklarından olan 1971 doğumlu ABD’li işadamı Elon Musk, ABD’nin en büyük güneş enerjisi sistemi sağlayıcısı SolarCity’nin de başkanı. Şirketlerinden SpaceX ise dünya tarihine adını yazdırdı. Şöyle ki tarihte ilk kez kullanılmış bir roket, bir kez daha uzaya gönderildi. Musk, 2002’de kurduğu SpaceX şirketiyle uzay yolculuğu konusunda tarihi bir adım atmış oldu Tüm bu özellikleri ona “Gerçek Iron Man” denmesine de neler oluyor. Bu lakap ise tesadüfi değil. Iron Man (Demir Adam) filminin yönetmeni Jon Favreau, Robert Downey jr.’ın hayat verdiği mucit işadamı Tony Stark karakteri için ünlü oyuncuya Elon Musk’ı örnek göstermiş. Favreau’nun Elon Musk ile görüştüğü de biliniyor. Tony Stark, Robert Downey jr.’ın muhteşem oyunculuğuyla birlikte beyazperdede de fırtınalar estiren bir süper kahraman oldu tabii… Hatta Musk, Iron Man 2’de küçük bir rol ile çıktı sinemaseverlerin karşısına...",
      date: "20 Mayıs 2022",
      author: "Elon Musk",
      author_link: "https://www.tesla.com/elon-musk",
    },
    {
      title:
        "Siber Güvenlik alanında kendimi nasıl geliştirebilirim? Nereden başlamalıyım?",
      slug: "siber-güvenlik-alaninda-kendimi-nasıl-gelistirebilirim-nereden-başlamaliyim",
      short_details:
        "Selamlar, Bugün kişisel mail kutumda birikmiş 157 e-mail’i tek tek okurken karar verdiğim, kuvvetle muhtemel bu blog adresi üzerinde uzunca bir süre son yazı olarak kalacak olan, tüm öğrencilerin ortak sorusuna dair kendi cevabımı hazırladığım yazıya hoş geldiniz.",
      details:
        "Yani siber güvenlik uzmanı olmak temelde; bol bol pratik tecrübe edinmek ve hemen hemen her şeyi öğrenmeye çalışmaktan geçmektedir. Bu iki temel konuya yazının kalan bölümlerinde sıkça değiniyor olacağım. Sizlere önerebileceğim hususları madde madde yazmaya gayret gösterdim. Hemde önem sırasına göre. 1 – İngilizce : Konu çok net. 2 – Linux :Linux’ü öğrenmek elzem ve bence tek yöntemi Linux haricinde kalan her şeyi ister sonsuza kadar ister bir süreliğine hayatınızdan çıkartmak. Kastettiğim şey, bu yazı yazılırkenki adı Kali Linux olan dağıtımı ve üzerindeki araç setlerini öğrenmek değil. Konu Linux’u bilmek! Ben zamanında her şeyi kişisel bilgisayarımda Archlinux, sunucu taraflı dünyada ise Centos ile öğrendim. 3 – Üniversite Eğitimi ve Bilgisayar Mühendisliği’ne Bakış Açısı Bu yazının konusu üniversitelerin mevcut durumu, eğitim kalitesi veya sistemi ile ilgili değildir. Bu konuları ne ben, ne de bu yazıyı okuyanlar önümüzdeki en az 10 sene içerisinde çözemeyeceğiz. Bu nedenle durumu şikayet etmek yerine işimize bakmalıyız. Zira ben üniversite yıllarımda da tam olarak bunu yaptım. Durumu olduğu şekilde kabul edip, işime baktım. Son 5 sene içerisinde 300’den fazla gönüllü kursiyere eğitim verme şerefine nâil olan bendeniz en çok şu cümleyi duymuşumdur.",
      date: "20 Mayıs 2022",
      author: "MDISEC",
      author_link: "https://www.mehmetince.net/",
    },
    {
      title: "Buğra Yavuzdoğan Kimdir?",
      slug: "hakkimda",
      short_details:
        "Adım Buğrahan Yavuzdoğan. 3 Ekim 2005'de İstanbul Gaziosmanpaşa'da doğdum. İlk ve orta öğrenimimi bitirdim şu anda ise İstanbulda bir lisede eğitimime devam ediyorum...",
      details:
        "Adım Buğrahan Yavuzdoğan. 3 Ekim 2005'de İstanbul Gaziosmanpaşa'da doğdum. İlk ve orta öğrenimimi bitirdim şu anda ise İstanbulda bir lisede eğitimime devam ediyorum. 14 yaşımda Web tasarım ve Yazılımla tanışıp bu alanda ilerleme kararı aldım. Hayatımdaki en mantıklı kararlarından birini almıştım çünkü bu alanda çalışmayı ve geliştirmeler yapmayı çok seviyordum. Yazılım geliştirirken en çok kullandığım diller C#, Nextjs, HTML-CSS'dir. Şu anda öğrenme çabasında olduğum diller ise Reactjs ve C Programlama dilidir. Bu dilleri öğrenince ilerki Yazılım hayatımda bana kolaylık sağlayacağını biliyorum. Bu yüzden çalışmalarıma ve geliştirmelerime tam gaz devam ediyorum. Diğer hobilerim arasında ise Yüzmek, Futbol oynamak ve Gitar çalmak vardır. Şu anda 17 yaşımdayım ve kariyerime Öğrenci/Web JR Developer olarak devam ettirmekteyim... ",
      date: "20 Mayıs 2005",
      author: "Buğrahan Yavuzdoğan",
      author_link: "https://github.com/Bqrayvzdgn",
    },
    {
      title: "Bilgi ve Beceriler",
      slug: "bilgi-ve-beceriler",
      short_details:
        "C# ile Geliştirmiş olduğum Bir Kütüphane Uygulması mevcuttur. Bu uygulama MSSQL ile desteklenmektedir. Bir Admin giriş paneli ve Kitap'ı veritabanına aktarma vardır.",
      details:
        "C# ile Geliştirmiş olduğum Bir Kütüphane Uygulması mevcuttur. Bu uygulama MSSQL ile desteklenmektedir. Bir Admin giriş paneli ve Kitap'ı veritabanına aktarma vardır. Nextjs ile geliştirdiğim fazla proje yoktur hatta ilk projem bu yapmış olduğum blog sitesidir. HTML-CSS ile yapmış olduğum bir sürü proje vardır. Bunlar; Kişisel siteler, Kurumsal siteler ve Blog siteleridir. Şu anda ise öğrenmeye çalıştığım dillerde (C,Reactjs) ise pek çalışmalarım yoktur ufak tefek algoritma ve basit siteler mevcuttur...",
      date: "20 Mayıs 2005",
      author: "Buğrahan Yavuzdoğan",
      author_link: "https://github.com/Bqrayvzdgn",
    },
  ];
};
