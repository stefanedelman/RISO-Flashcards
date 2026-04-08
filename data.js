window.FLASHCARD_DATA = {
    "source_file": "pitanja.txt",
    "total_questions": 85,
    "categories": [
        {
            "name": "Cloud osnove i modeli",
            "count": 17,
            "questions": [
                {
                    "id": 1,
                    "question": "Koje su osnovne karakteristike Cloud servisa ?",
                    "answer": "Osnovne karakteristike su: on-demand pristup resursima, pristup preko mreže, deljenje resursa među korisnicima (resource pooling), brza elastičnost (lako povećanje/smanjenje kapaciteta), merenje potrošnje (pay-as-you-go) i visok stepen automatizacije kroz API-je i orkestraciju."
                },
                {
                    "id": 2,
                    "question": "Koji su osnovni Cloud servisi koji se mogu zakupiti kod Cloud provajdera ?",
                    "answer": "Najčešće se zakupljuju računarski resursi (VM, kontejneri), skladište podataka (object/block/file storage), mrežni servisi (VPC, load balancer, VPN, DNS), baze podataka kao servis i bezbednosni servisi (IAM, enkripcija, WAF). U širem smislu zakup obuhvata i IaaS, PaaS i SaaS modele."
                },
                {
                    "id": 3,
                    "question": "Definisati najmanje pet prednosti korišćenja Cloud infrastrukture i usluga.",
                    "answer": "Prednosti su: 1) niži početni troškovi (nema velike kupovine hardvera), 2) skalabilnost na zahtev, 3) brže puštanje servisa u rad, 4) visoka dostupnost i geografska redundantnost, 5) model plaćanja po potrošnji, 6) lakše održavanje jer provajder preuzima deo operativnih poslova."
                },
                {
                    "id": 4,
                    "question": "Definisati najmanje pet nedostataka korišćenja Cloud infrastrukture i usluga.",
                    "answer": "Nedostaci uključuju: 1) zavisnost od internet konekcije i provajdera, 2) rizik vendor lock-in efekta, 3) izazove usklađenosti sa regulativom i lokacijom podataka, 4) manju direktnu kontrolu nad infrastrukturom, 5) nepredvidive troškove bez dobrog monitoringa, 6) potencijalne bezbednosne i privatnosne rizike ako je konfiguracija loša."
                },
                {
                    "id": 5,
                    "question": "Kojoj klasi Informacionih sistema pripada Cloud ? Objasniti zašto ?",
                    "answer": " Cloud pripada klasi HTC (High Throughput Computing) sistema, jer je cilj obrada velikog broja korisničkih zahteva/transakcija u vremenu kroz distribuiranu i skalabilnu infrastrukturu."
                },
                {
                    "id": 6,
                    "question": "Definisati osnovne načine skaliranja Cloud infrastrukture i servisa.",
                    "answer": "Osnovni načini su: vertikalno skaliranje (scale-up/scale-down: jača ili slabija instanca), horizontalno skaliranje (scale-out/scale-in: više ili manje instanci) i automatsko skaliranje na osnovu metrika opterećenja, rasporeda ili događaja."
                },
                {
                    "id": 7,
                    "question": "Koje su ključne karakteristike Cloud-a? Ukratko objasnite svaku karakteristiku.",
                    "answer": "Ključne karakteristike: 1) on-demand self-service - korisnik sam brzo aktivira resurse; 2) broad network access - pristup preko standardnih mrežnih protokola; 3) resource pooling - deljeni resursi za više korisnika; 4) rapid elasticity - brzo prilagođavanje kapaciteta; 5) measured service - potrošnja se meri i naplaćuje po korišćenju."
                },
                {
                    "id": 8,
                    "question": "Koje su osnovne gradivne tehnologije Cloud okruženja.",
                    "answer": "Osnovne gradivne tehnologije su: virtuelizacija (compute/network/storage), distribuirani sistemi, kontejneri i orkestracija (npr. Kubernetes), automatizacija i Infrastructure as Code, API/web servisi, kao i softverski definisane mreže i skladište (SDN/SDS)."
                },
                {
                    "id": 9,
                    "question": "Navedite i objasnite Cloud servisne modele prema modelu usluga",
                    "answer": "Servisni modeli su: IaaS - provajder daje virtuelnu infrastrukturu, korisnik upravlja OS-om i aplikacijama; PaaS - provajder daje platformu za razvoj i izvršavanje aplikacija, korisnik upravlja kodom i podacima; SaaS - kompletna aplikacija kao usluga, korisnik je koristi bez upravljanja infrastrukturom."
                },
                {
                    "id": 10,
                    "question": "Navedite i objasnite načine implementacije Cloud infrastrukture i usluga.",
                    "answer": "Načini implementacije su: javni cloud (resursi provajdera dostupni preko interneta), privatni cloud (namenski cloud za jednu organizaciju), hibridni cloud (kombinacija javnog i privatnog sa integracijom), community cloud (više organizacija sa zajedničkim zahtevima) i multi-cloud pristup (korišćenje više javnih provajdera)."
                },
                {
                    "id": 11,
                    "question": "Objasnite IaaS (prednosti, nedostaci, primer)",
                    "answer": "IaaS je model u kome se zakupljuju virtuelni serveri, mreža i skladište. Prednosti: fleksibilnost, brza isporuka resursa, plaćanje po potrošnji. Nedostaci: korisnik i dalje održava OS, bezbednosne zakrpe i deo operacija. Primeri: AWS EC2, Azure Virtual Machines, Google Compute Engine."
                },
                {
                    "id": 12,
                    "question": "Objasnite PaaS (prednosti, nedostaci, primer)",
                    "answer": "PaaS pruža gotovu platformu za razvoj i pokretanje aplikacija (runtime, middleware, CI/CD integracije). Prednosti: brži razvoj, manje operativnog održavanja, standardizovano okruženje. Nedostaci: manja kontrola nad platformom i veći rizik lock-in-a. Primeri: Azure App Service, Google App Engine, Heroku."
                },
                {
                    "id": 13,
                    "question": "Objasnite SaaS (prednosti, nedostaci, primer)",
                    "answer": "SaaS je gotova aplikacija dostupna preko interneta. Prednosti: brzo korišćenje bez instalacije, automatska ažuriranja, niži operativni troškovi. Nedostaci: ograničena prilagodljivost, zavisnost od provajdera i interneta, pitanja privatnosti podataka. Primeri: Microsoft 365, Google Workspace, Salesforce."
                },
                {
                    "id": 14,
                    "question": "Objasni Javnu Cloud infrastrukturu",
                    "answer": "Javna cloud infrastruktura je okruženje u vlasništvu cloud provajdera gde se resursi dele među korisnicima (multi-tenant), a pristup je preko interneta. Prednosti su visoka skalabilnost i niža početna ulaganja, dok su izazovi kontrola i regulatorni zahtevi."
                },
                {
                    "id": 15,
                    "question": "Objasni Privatnu Cloud infrastrukturu",
                    "answer": "Privatna cloud infrastruktura je namenjena jednoj organizaciji, može biti on-premise ili hostovana. Donosi veću kontrolu, prilagođavanje i lakše usklađivanje sa bezbednosnim pravilima, ali je skuplja za uspostavljanje i održavanje od javnog cloud-a."
                },
                {
                    "id": 16,
                    "question": "Objasni Hibridnu Cloud infrastrukturu",
                    "answer": "Hibridni cloud kombinuje privatni i javni cloud tako da podaci i aplikacije mogu da rade u oba okruženja uz integraciju. Tipično se kritični sistemi drže privatno, a javni cloud se koristi za skaliranje, backup ili manje osetljiva opterećenja."
                },
                {
                    "id": 17,
                    "question": "Objasniti pojam Multi-Cloud infrastrukture",
                    "answer": "Multi-cloud znači istovremeno korišćenje usluga više cloud provajdera (npr. AWS + Azure + GCP). Ciljevi su smanjenje zavisnosti od jednog provajdera, optimizacija troška/performansi i veća otpornost, ali uz veću složenost upravljanja i bezbednosti."
                }
            ]
        },
        {
            "name": "Data centri (DC)",
            "count": 7,
            "questions": [
                {
                    "id": 18,
                    "question": "Koji tipovi DC postoje ? Ukratko objasniti svaki tip i razlike izmedju njih.",
                    "answer": "Osnovni tipovi su: enterprise/on-premise DC (u vlasništvu firme), colocation DC (firma iznajmljuje prostor, napajanje i mrežu), managed/hosted DC (provajder upravlja infrastrukturom), cloud data centri (resursi kao usluga) i edge/micro DC (manji centri blizu korisnika). Razlika je u vlasništvu, nivou kontrole, trošku i lokaciji resursa."
                },
                {
                    "id": 19,
                    "question": "Objasniti tier kategorizaciju DC ?",
                    "answer": "Tier kategorizacija je standard klasifikacije data centara po nivou redundanse, otpornosti i dostupnosti. Viši tier znači veću pouzdanost, više rezervnih komponenti i mogućnost održavanja sa manje ili bez prekida rada."
                },
                {
                    "id": 20,
                    "question": "Objasniti Tire 1, Tire 2, Tire 3.",
                    "answer": "Tier 1: osnovna infrastruktura bez redundanse, planirani i neplanirani prekidi su češći. Tier 2: delimična redundansa ključnih komponenti (npr. N+1 za deo sistema), bolja pouzdanost od Tier 1. Tier 3: concurrently maintainable, održavanje je moguće bez gašenja IT opterećenja, značajno viša dostupnost i otpornost."
                },
                {
                    "id": 21,
                    "question": "Objasni princip rangiranja data centara u pogledu pouzdanosti i raspoloživosti?",
                    "answer": "Rangiranje se zasniva na stepenu redundanse (napajanje, hlađenje, mreža), toleranciji na kvarove, mogućnosti održavanja bez prekida, kao i očekivanom procentu raspoloživosti (uptime). Što je više nezavisnih rezervnih puteva i komponenti, centar dobija viši rang i manji rizik prekida."
                },
                {
                    "id": 22,
                    "question": "Objasni Tier klasifikaciju data centara u pogledu pouzdanosti i raspoloživosti i ukaži na razlike između pojedinih nivoa.",
                    "answer": "Tier I ima minimalnu otpornost i jedan put napajanja/hlađenja. Tier II dodaje delimičnu redundantnost komponenti. Tier III uvodi više puteva i održavanje bez prekida rada servisa. Tier IV obezbeđuje najviši nivo fault tolerance sa punom redundansom i vrlo visokom raspoloživošću. Razlike su u količini redundanse, toleranciji na kvar i dozvoljenom vremenu zastoja."
                },
                {
                    "id": 23,
                    "question": "Koji su osnovni infrastrukturni resursi data centra i čemu služe?",
                    "answer": "Osnovni resursi su: compute (serveri/CPU/RAM za obradu), storage (čuvanje podataka), networking (povezivanje sistema i saobraćaj), napajanje (UPS, agregati), hlađenje (HVAC), bezbednost (fizička i logička) i monitoring/upravljanje (nadzor performansi i incidenata)."
                },
                {
                    "id": 24,
                    "question": "Koja je uloga Compute, Networking i Storage sloja u funkcionisanju data centra i kako oni međusobno sarađuju?",
                    "answer": "Compute sloj izvršava aplikacije i obradu podataka, storage sloj trajno čuva podatke, a networking sloj povezuje korisnike, servise i skladište. Zajedno rade tako što aplikacija na compute čita/piše podatke u storage preko mreže; performanse i dostupnost sistema zavise od usklađenosti sva tri sloja."
                }
            ]
        },
        {
            "name": "Virtuelizacija servera i klasteri",
            "count": 30,
            "questions": [
                {
                    "id": 25,
                    "question": "Objasniti pojam virtuelizacije i navesti koji se elementi infrastrukture data centra mogu virtuelizovati.",
                    "answer": "Virtuelizacija je apstrakcija fizičkih resursa (CPU, RAM, disk, mreža) u logičke, virtuelne resurse. U data centru mogu se virtuelizovati serveri, mreža (vSwitch/SDN), storage (SDS), desktop okruženja i delom bezbednosne funkcije (virtual firewall, segmentacija)."
                },
                {
                    "id": 26,
                    "question": "Objasniti pojam virtuelizacije i njenu osnovnu ulogu u savremenim data centrima.",
                    "answer": "U savremenim data centrima virtuelizacija omogućava pokretanje više izolovanih radnih opterećenja na istom hardveru. Time se povećava iskorišćenost resursa, ubrzava isporuka servisa, olakšava automatizacija i smanjuju operativni troškovi."
                },
                {
                    "id": 27,
                    "question": "Koje su tri osnovne komponente virtuelizacionog okruženja i koja je uloga svake od njih?",
                    "answer": "Tri osnovne komponente su: 1) fizički host (hardver), 2) hipervizor/virtualizacioni sloj (upravlja i raspodeljuje resurse), 3) virtuelne mašine/gosti (OS i aplikacije koje koriste dodeljene virtuelne resurse)."
                },
                {
                    "id": 28,
                    "question": "Objasniti ulogu virtuelizacionog sloja i njegov odnos prema fizičkom hardveru i virtuelnim resursima.",
                    "answer": "Virtuelizacioni sloj (hipervizor) je posrednik između fizičkog hardvera i VM-ova. On mapira fizičke resurse u virtuelne, obezbeđuje izolaciju među gostima i kontroliše pristup CPU-u, memoriji, disku i mreži."
                },
                {
                    "id": 29,
                    "question": "Kako virtuelizacioni sloj kontroliše i štiti pristup resursima host sistema?",
                    "answer": "Hipervizor uvodi kontrolisani pristup resursima kroz raspoređivanje CPU vremena, memorijske mape, virtuelne uređaje i I/O kontrolu. Bezbednost postiže izolacijom VM-ova, pravilima pristupa i ograničenjem privilegija da gost ne može direktno ugroziti host."
                },
                {
                    "id": 30,
                    "question": "Na koji način se fizički resursi pretvaraju u virtuelne? Objasniti pojmove: sharing, aggregation, emulation i isolation.",
                    "answer": "Fizički resursi postaju virtuelni kroz: sharing (deljenje jednog fizičkog resursa među više VM-ova), aggregation (udruživanje više resursa u logičku celinu), emulation (softversko oponašanje hardvera) i isolation (izolacija opterećenja da se međusobno ne ometaju)."
                },
                {
                    "id": 31,
                    "question": "Šta se podrazumeva pod „managed execution“ (kontrolisano izvršavanje) i zašto je važan?",
                    "answer": "Managed execution je model gde virtualizacioni sloj nadzire i kontroliše izvršavanje koda gosta. Važan je jer obezbeđuje stabilnost, izolaciju, sigurnost i pravednu raspodelu resursa između VM-ova."
                },
                {
                    "id": 32,
                    "question": "Objasniti glavne funkcije virtualizacije",
                    "answer": "Glavne funkcije virtualizacije su: apstrakcija hardvera, konsolidacija servera, izolacija opterećenja, dinamička raspodela resursa, migracija VM-ova, brzo provisioning okruženja i podrška visokoj dostupnosti/oporavku."
                },
                {
                    "id": 33,
                    "question": "Koji elementi infrastrukture data centra mogu biti virtuelizovani?",
                    "answer": "Mogu se virtuelizovati compute resursi (serveri), storage sistemi (volumeni/pool-ovi), mreža (switch/router/firewall funkcije), desktop okruženja, aplikacioni sloj i bezbednosne funkcije kroz mrežnu i servisnu virtualizaciju."
                },
                {
                    "id": 34,
                    "question": "Objasniti pojam serverske virtuelizacije.",
                    "answer": "Serverska virtuelizacija je tehnika u kojoj se jedan fizički server deli na više nezavisnih virtuelnih servera (VM). Svaki VM ima svoj OS i aplikacije, kao da je poseban računar."
                },
                {
                    "id": 35,
                    "question": "Objasniti ulogu hipervizora u serverskoj virtuelizaciji.",
                    "answer": "Hipervizor je ključna komponenta serverske virtuelizacije: kreira VM-ove, dodeljuje im resurse, prati opterećenje, obezbeđuje izolaciju i omogućava funkcije kao što su snapshot, live migration i HA."
                },
                {
                    "id": 36,
                    "question": "Uporediti hosted i bare-metal hipervizore.",
                    "answer": "Hosted (Type 2) hipervizor radi iznad host operativnog sistema, lakši je za desktop/test scenarije ali ima veći overhead. Bare-metal (Type 1) radi direktno na hardveru, daje bolje performanse, sigurnost i stabilnost za produkciju."
                },
                {
                    "id": 37,
                    "question": "Zašto bare-metal hipervizori imaju bolje performanse?",
                    "answer": "Bare-metal hipervizori imaju bolje performanse jer nemaju dodatni sloj host OS-a. Manje je kontekstnih prebacivanja i I/O posredovanja, pa je latencija niža, a iskorišćenost resursa veća."
                },
                {
                    "id": 38,
                    "question": "Kako serverska virtuelizacija utiče na efikasnost data centra?",
                    "answer": "Serverska virtuelizacija povećava efikasnost data centra kroz konsolidaciju opreme, bolju iskorišćenost CPU/RAM, brže puštanje servisa, manje potrošnje energije/prostora i jednostavnije održavanje."
                },
                {
                    "id": 39,
                    "question": "Definisati pojmove: računar domaćin, računar gost i hipervizor.",
                    "answer": "Računar domaćin (host) je fizička mašina koja obezbeđuje resurse. Računar gost (guest) je virtuelna mašina koja koristi te resurse. Hipervizor je softverski sloj koji upravlja host resursima i raspodelom ka guest sistemima."
                },
                {
                    "id": 40,
                    "question": "Koja je razlika između računara domaćina i računara gosta u virtuelizovanom okruženju?",
                    "answer": "Host je fizički sistem sa realnim hardverom i nosi virtualizacioni sloj. Guest je logički/virtuelni sistem sa sopstvenim OS-om i aplikacijama koji radi iznad hipervizora i vidi virtuelizovan hardver."
                },
                {
                    "id": 41,
                    "question": "Objasniti ulogu hipervizora u upravljanju resursima i virtuelnim mašinama.",
                    "answer": "Hipervizor upravlja VM životnim ciklusom (start/stop/migracija), planira CPU i memoriju, virtuelizuje I/O, sprovodi izolaciju i pravila pristupa, te omogućava balans opterećenja i HA mehanizme u klasteru."
                },
                {
                    "id": 42,
                    "question": "Koje su dve osnovne arhitekture hipervizora i po čemu se razlikuju?",
                    "answer": "Dve osnovne arhitekture su Type 1 (nativni/bare-metal) i Type 2 (hostovani). Type 1 radi direktno na hardveru, a Type 2 radi kao aplikacija iznad postojećeg OS-a; razlikuju se po performansama, sigurnosti i nameni."
                },
                {
                    "id": 43,
                    "question": "Zašto nativni hipervizori imaju bolje performanse u odnosu na hostovane?",
                    "answer": "Nativni hipervizori imaju bolje performanse jer direktno pristupaju hardveru bez posrednog host OS sloja. Time se smanjuje overhead i povećava predvidivost performansi, posebno pri velikom I/O opterećenju."
                },
                {
                    "id": 44,
                    "question": "Objasniti pojam Puna virtuelizacija (Full Virtualization)",
                    "answer": "Puna virtuelizacija (Full Virtualization) omogućava da neizmenjen gostujući OS radi kao da ima sopstveni hardver. Hipervizor emulira/posreduje hardverske resurse i omogućava kompatibilnost bez modifikacije OS-a gosta."
                },
                {
                    "id": 45,
                    "question": "Objasniti hardverski podržanu virtuelizaciju",
                    "answer": "Hardverski podržana virtuelizacija koristi CPU ekstenzije (Intel VT-x, AMD-V i sl.) da ubrza i osigura izvršavanje VM-ova. Time se smanjuje potreba za skupom softverskom emulacijom i poboljšavaju performanse i izolacija."
                },
                {
                    "id": 46,
                    "question": "Koji su osnovni ciljevi virtuelizacije?",
                    "answer": "Osnovni ciljevi virtuelizacije su: bolja iskorišćenost resursa, konsolidacija servera, izolacija aplikacija, fleksibilnost raspodele kapaciteta, smanjenje troškova, jednostavniji oporavak i brže skaliranje."
                },
                {
                    "id": 47,
                    "question": "Koje su ključne prednosti serverske virtuelizacije u klasterskom okruženju?",
                    "answer": "U klasteru, serverska virtuelizacija donosi HA, live migraciju bez prekida, balansiranje opterećenja, brži failover, centralizovano upravljanje i lakše održavanje zbog zajedničkog storage-a i orkestracije."
                },
                {
                    "id": 48,
                    "question": "Na koji način klaster serverske virtuelizacije doprinosi visokoj dostupnosti, skalabilnosti i oporavku sistema nakon kvara?",
                    "answer": "Klaster omogućava da se VM-ovi automatski premeste ili restartuju na zdravim hostovima pri kvaru. Dinamičkim rasporedom opterećenja postiže se skalabilnost, a redundansa hostova i storage-a podiže raspoloživost sistema."
                },
                {
                    "id": 49,
                    "question": "Objasniti arhitekturu klasterovanja hipervizora",
                    "answer": "Arhitektura klasterovanja hipervizora podrazumeva više hostova sa istim hipervizorom, zajednički management sloj, heartbeat mehanizme, zajednički ili distribuirani storage i HA/DRS politike za automatske odluke."
                },
                {
                    "id": 50,
                    "question": "Objasniti arhitekturu klasterovanja virtuelnih servera",
                    "answer": "Arhitektura klasterovanja virtuelnih servera fokusira se na VM nivo: VM instance su raspoređene kroz više hostova, koriste zajedničke mrežne i storage servise, a orkestracija prati zdravlje i obezbeđuje failover i skaliranje."
                },
                {
                    "id": 51,
                    "question": "Objasni arhitekturu instanci virtuelnih servera sa ravnomernim opterećenjem (Load Balanced Virtual Server Instances Architecture)",
                    "answer": "Load Balanced Virtual Server Instances Architecture koristi više VM instanci iste usluge iza load balancera. Balanser raspodeljuje zahteve po pravilima (round-robin, least connections itd.), čime se postižu veća dostupnost i horizontalna skalabilnost."
                },
                {
                    "id": 52,
                    "question": "Objasniti pojam VM migracije i navesti osnovne vrste migracije virtuelnih mašina.",
                    "answer": "VM migracija je premeštanje virtuelne mašine sa jednog hosta na drugi. Osnovne vrste su: live migration (uz minimalan ili bez prekida), cold migration (VM ugašen), storage migration (premeštanje diskova), i kombinovana compute+storage migracija."
                },
                {
                    "id": 53,
                    "question": "Kako VM migracija doprinosi fleksibilnosti, visokoj dostupnosti i održavanju sistema bez prekida rada?",
                    "answer": "Migracija VM-ova povećava fleksibilnost jer omogućava dinamično raspoređivanje opterećenja, održavanje hostova bez gašenja servisa i brži oporavak pri kvaru premestanjem ili restartom na drugom čvoru."
                },
                {
                    "id": 54,
                    "question": "Objasniti ulogu balansiranja opterećenja i High Availability (HA) mehanizama u klasteru serverske virtuelizacije.",
                    "answer": "Balansiranje opterećenja ravnomerno raspoređuje VM-ove i saobraćaj radi boljih performansi. HA mehanizmi detektuju kvar hosta i automatski pokreću VM-ove na preostalim čvorovima, čime se smanjuje zastoj i povećava raspoloživost."
                }
            ]
        },
        {
            "name": "Desktop, aplikacije i multitenancy",
            "count": 4,
            "questions": [
                {
                    "id": 55,
                    "question": "Objasniti koncept virtuelizacije desktop okruženja",
                    "answer": "Virtuelizacija desktop okruženja (VDI/DaaS) znači da desktop OS i korisničko radno okruženje rade centralno na serverima/data centru ili cloud-u, a korisnik pristupa preko mreže. Prednosti su centralizovana administracija, veća bezbednost, lakši backup i pristup sa različitih uređaja."
                },
                {
                    "id": 56,
                    "question": "Navesti i ukratko objasniti osnovne vrste virtuelizacije aplikacija.",
                    "answer": "Osnovne vrste su: 1) application streaming - aplikacija se izvršava lokalno, ali se komponente isporučuju po potrebi; 2) application encapsulation/isolation - aplikacija radi u izolovanom kontejneru bez konflikta sa sistemom; 3) remote application/hosted app - aplikacija radi na serveru, korisnik dobija samo prikaz interfejsa; 4) kontejnerizacija - aplikacija se pakuje sa zavisnostima radi prenosivosti."
                },
                {
                    "id": 57,
                    "question": "Navesti i objasniti ključne karakteristike multitenant aplikacija i objasniti zašto su važne za skalabilnost, bezbednost i naplatu u SaaS sistemima.",
                    "answer": "Ključne karakteristike su: deljena aplikaciona instanca za više tenant-a, logička izolacija podataka, tenant-aware autentikacija/autorizacija, konfigurabilnost po tenant-u, metering i praćenje potrošnje, centralna nadogradnja bez prekida za sve korisnike. Važne su jer omogućavaju horizontalnu skalabilnost, zaštitu podataka između korisnika i preciznu naplatu po korišćenju."
                },
                {
                    "id": 58,
                    "question": "Objasniti pojam multitenant tehnologije i navesti osnovne vrste multi-tenant arhitektura, uz kratko objašnjenje njihovih prednosti i mana.",
                    "answer": "Multitenant tehnologija podrazumeva da jedna platforma uslužuje više korisničkih organizacija (tenant-a) uz logičku izolaciju. Tipovi: 1) shared-everything (jedna app i jedna baza, razdvajanje preko tenant ID) - najjeftinije i najskalabilnije, ali najosetljivije na greške izolacije; 2) shared app, separate schema/database - bolja izolacija i fleksibilnost, uz veće troškove; 3) dedicated instance per tenant - najbolja izolacija i prilagođavanje, ali najskuplja i teža za operativno održavanje."
                }
            ]
        },
        {
            "name": "Storage osnove i RAID",
            "count": 9,
            "questions": [
                {
                    "id": 59,
                    "question": "Objasniti šta je SAN (Storage Area Network), a šta NAS (Network Attached Storage).",
                    "answer": "SAN (Storage Area Network) je namenska mreža za blokovski pristup skladištu (block level), dok je NAS (Network Attached Storage) mrežni uređaj/fajl servis koji daje pristup fajlovima (file level) preko protokola kao što su SMB/NFS."
                },
                {
                    "id": 60,
                    "question": "Navesti tipične primene SAN i NAS storage sistema i objasniti u kojim situacijama se koristi jedan, a u kojim drugi.",
                    "answer": "SAN se koristi za baze podataka, virtualizacione klastere i kritične aplikacije kojima treba nizak latency i visok IOPS. NAS je tipičan za deljenje fajlova, korisničke home foldere, arhive i backup repozitorijume. Ukratko: SAN za performanse na nivou blokova, NAS za jednostavno fajl-deljenje."
                },
                {
                    "id": 61,
                    "question": "Šta su RAID pool i LUN i kako se koriste u SAN storage arhitekturi?",
                    "answer": "RAID pool je skup fizičkih diskova organizovanih u RAID nivo radi performansi i/ili redundanse. LUN (Logical Unit Number) je logički volumen iz tog pool-a koji se prezentuje serveru kao disk uređaj preko SAN-a."
                },
                {
                    "id": 62,
                    "question": "Objasniti pojam Object Storage i navesti tipične oblasti njegove primene.",
                    "answer": "Object Storage čuva podatke kao objekte (podaci + metapodaci + jedinstveni ID) u ravnom namespace-u. Tipične primene su backup i arhiva, statički web sadržaj, multimedia, logovi, data lake i cloud-native aplikacije."
                },
                {
                    "id": 63,
                    "question": "Objasniti pojam Block Storage i navesti gde se najčešće koristi.",
                    "answer": "Block Storage deli prostor na blokove i serveru izgleda kao lokalni disk. Najčešće se koristi za baze podataka, VM diskove, transakcione sisteme i workload-e osetljive na performanse i latenciju."
                },
                {
                    "id": 64,
                    "question": "Objasniti pojam File Storage i navesti tipične slučajeve njegove primene.",
                    "answer": "File Storage organizuje podatke kroz fajlove i direktorijume i deli ih mrežnim protokolima (SMB/NFS). Tipično se koristi za timsko deljenje dokumenata, korisničke profile, zajedničke repozitorijume i sadržaj aplikacija koje traže fajl sistem."
                },
                {
                    "id": 65,
                    "question": "Navesti i objasniti osnovne vrste RAID konfiguracija",
                    "answer": "Osnovne RAID konfiguracije: RAID 0 (striping, bez zaštite), RAID 1 (mirroring), RAID 5 (striping + paritet, tolerancija na 1 disk), RAID 6 (dvostruki paritet, tolerancija na 2 diska), RAID 10/1+0 (mirroring + striping)."
                },
                {
                    "id": 66,
                    "question": "Objasniti RAID1, RAID5 i RAID1+0 konfiguracije.",
                    "answer": "RAID 1: kopiranje podataka na dva diska, visoka pouzdanost, efikasnost kapaciteta ~50%. RAID 5: striping sa distribuiranim paritetom, dobar balans kapaciteta i zaštite, preživljava kvar jednog diska. RAID 1+0: mirror parovi preko kojih se radi striping, vrlo dobre performanse i otpornost, ali veći trošak kapaciteta."
                },
                {
                    "id": 67,
                    "question": "Objasniti šta je virtualizacija skladišta podataka, kako se ostvaruje i koje prednosti donosi u pogledu upravljanja, migracije i skalabilnosti.",
                    "answer": "Virtualizacija skladišta podataka apstrahuje fizičke diskove/sisteme u jedinstven logički storage sloj. Ostvaruje se kroz storage virtualizacioni softver ili kontrolere koji agregiraju različite uređaje u pool. Prednosti su centralizovano upravljanje, jednostavnija migracija bez prekida, bolje iskorišćenje kapaciteta i lakše horizontalno skaliranje."
                }
            ]
        },
        {
            "name": "SDS, Ceph i vSAN",
            "count": 11,
            "questions": [
                {
                    "id": 68,
                    "question": "Šta je Software-Defined Storage (SDS) i koji ključni problem rešava u odnosu na tradicionalne storage sisteme?",
                    "answer": "Software-Defined Storage (SDS) je pristup u kome se upravljanje skladištem odvaja od fizičkog hardvera i realizuje softverski. Ključni problem koji rešava je zavisnost od vendor-specifičnih uređaja i kruta, teško skalabilna arhitektura tradicionalnih storage sistema."
                },
                {
                    "id": 69,
                    "question": "Objasni razliku između Control Plane i Data Plane u SDS arhitekturi i njihove uloge.",
                    "answer": "Control Plane upravlja politikama, konfiguracijom, raspodelom i nadzorom sistema, dok Data Plane izvršava stvarni tok podataka (čitanje/pisanje I/O). U SDS-u Control Plane donosi odluke, a Data Plane ih sprovodi nad podacima."
                },
                {
                    "id": 70,
                    "question": "Zašto je razdvajanje Control Plane i Data Plane važno za dostupnost i otpornost sistema?",
                    "answer": "Razdvajanje je važno jer kvar ili opterećenje jednog sloja manje utiče na drugi. Time se postižu bolja dostupnost, otpornost i skalabilnost: kontrola može ostati funkcionalna i kada pojedini data čvorovi imaju problem, i obrnuto."
                },
                {
                    "id": 71,
                    "question": "Kako SDS obezbeđuje visoku dostupnost podataka bez oslanjanja na klasični RAID?",
                    "answer": "SDS obezbeđuje visoku dostupnost putem distribuirane replikacije/erasure coding-a, samoisceljenja (self-healing), automatskog rebalansa i rasporeda kopija po različitim čvorovima/rack-ovima/zonama, umesto oslanjanja samo na lokalni RAID u jednom uređaju."
                },
                {
                    "id": 72,
                    "question": "Šta je storage pool u SDS-u i kako omogućava fleksibilno upravljanje resursima?",
                    "answer": "Storage pool u SDS-u je logički objedinjena grupa diskova/čvorova iz koje se dinamički dodeljuju kapacitet i performanse. Omogućava fleksibilno upravljanje jer se resursi dodaju ili oduzimaju bez rigidnih hardverskih granica."
                },
                {
                    "id": 73,
                    "question": "Na koji način SDS omogućava skaliranje sistema (scale-out) i koje su prednosti tog pristupa?",
                    "answer": "SDS se skaluje scale-out pristupom: dodavanjem novih čvorova raste i kapacitet i throughput. Prednosti su linearno skaliranje, manji vendor lock-in, bolja otpornost (nema jedne tačke otkaza) i mogućnost postepenog širenja sistema."
                },
                {
                    "id": 74,
                    "question": "Koja je uloga CRUSH algoritma u Ceph arhitekturi i kako se razlikuje od tradicionalnog pristupa sa centralnim metadata serverom?",
                    "answer": "CRUSH u Ceph-u deterministički računa gde će objekti biti smešteni, bez centralnog metadata servera za putanju podataka. Za razliku od tradicionalnog centralnog pristupa, ovo smanjuje uska grla i omogućava bolju horizontalnu skalabilnost."
                },
                {
                    "id": 75,
                    "question": "Kako Ceph obezbeđuje skalabilnost i otpornost na kvarove u distribuiranom okruženju?",
                    "answer": "Ceph postiže skalabilnost i otpornost kroz distribuiranu arhitekturu (MON, OSD, MDS), automatsku replikaciju ili erasure coding, CRUSH raspored podataka, self-healing i automatski rebalance kada se čvorovi dodaju ili otkažu."
                },
                {
                    "id": 76,
                    "question": "Šta je vSAN cluster i kako lokalni diskovi ESXi hostova postaju zajednički storage?",
                    "answer": "vSAN cluster je VMware distribuirani storage gde lokalni diskovi ESXi hostova (cache + capacity) formiraju zajednički datastore. vSAN softver agregira te diskove i izlaže ih kao jedinstven storage svim hostovima u klasteru."
                },
                {
                    "id": 77,
                    "question": "Objasni koncept Storage Policy Based Management (SPBM) i njegov značaj u vSAN-u.",
                    "answer": "Storage Policy Based Management (SPBM) u vSAN-u znači da se zahtevi aplikacije (npr. FTT, performanse, RAID nivo) definišu kroz politike na nivou VM objekata. Time se automatizuje usklađivanje storage ponašanja sa potrebama workload-a."
                },
                {
                    "id": 78,
                    "question": "Kako vSAN obezbeđuje fault tolerance (npr. FTT, RAID tipovi, witness komponenta)?",
                    "answer": "vSAN fault tolerance postiže kroz FTT politiku (npr. tolerancija na 1+ kvara), mehanizme RAID1 mirroring ili RAID5/6 erasure coding i witness komponentu koja učestvuje u quorum/metadata logici, kako bi podaci ostali dostupni pri kvaru čvorova."
                }
            ]
        },
        {
            "name": "Cloud storage virtualizacija",
            "count": 7,
            "questions": [
                {
                    "id": 79,
                    "question": "Šta je Cloud Storage Virtualization i koji problem rešava u multi-cloud i hibridnim okruženjima?",
                    "answer": "Cloud Storage Virtualization je sloj koji apstrahuje više storage sistema/provajdera u jedinstven logički pogled. Rešava problem fragmentacije podataka u hibridnim i multi-cloud okruženjima i pojednostavljuje pristup, migraciju i upravljanje."
                },
                {
                    "id": 80,
                    "question": "Kako Cloud Storage Virtualization omogućava korisnicima da vide jedinstven storage, iako su podaci raspoređeni na više cloud platformi?",
                    "answer": "Omogućava jedinstven storage kroz globalni namespace i kontrolni sloj koji mapira logičke putanje na fizičke lokacije kod različitih provajdera. Korisnik vidi jednu logičku strukturu, iako se podaci nalaze na više cloud platformi."
                },
                {
                    "id": 81,
                    "question": "Koja je razlika između Cloud Storage Virtualization i Software-Defined Storage (SDS)?",
                    "answer": "SDS primarno virtualizuje i upravlja storage resursima unutar jedne infrastrukture/data centra (često i cloud), dok Cloud Storage Virtualization fokus stavlja na objedinjavanje više cloud/on-prem lokacija u jedan namespace i sloj pristupa preko okruženja."
                },
                {
                    "id": 82,
                    "question": "Koja je uloga Cloud Gateway-a u povezivanju on-premise sistema i cloud storage-a?",
                    "answer": "Cloud Gateway povezuje on-premise sisteme sa cloud skladištem, prevodi protokole, kešira lokalno podatke, primenjuje bezbednosne politike i omogućava transparentan pristup cloud kapacitetima bez velikih promena aplikacija."
                },
                {
                    "id": 83,
                    "question": "Objasni koncept hibridnog cloud storage-a i način na koji se podaci raspoređuju između lokalnog i cloud skladišta.",
                    "answer": "Hibridni cloud storage kombinuje lokalni storage i cloud: kritični/često korišćeni podaci ostaju lokalno (nizak latency), a backup, arhiva i burst kapacitet idu u cloud. Raspoređivanje se radi kroz politike (tiering) po performansama, ceni i usklađenosti."
                },
                {
                    "id": 84,
                    "question": "Objasni kako multi-cloud storage omogućava jedinstven pristup podacima kroz više cloud provajdera i koja je uloga globalnog namespace-a.",
                    "answer": "Multi-cloud storage daje jedinstven pristup podacima preko više provajdera kroz globalni namespace. Taj namespace sakriva fizičku lokaciju podataka i omogućava konzistentne politike pristupa, replikacije i mobilnosti između cloud platformi."
                },
                {
                    "id": 85,
                    "question": "Koji su tipični use-case-ovi za Cloud Storage Virtualization ?",
                    "answer": "Tipični use-case-ovi su: centralizovan pristup podacima kroz više cloud-ova, disaster recovery i backup, migracije između provajdera bez velikog zastoja, data sovereignty/compliance scenariji, cloud bursting i optimizacija troškova performansi po workload-u."
                }
            ]
        }
    ]
};
