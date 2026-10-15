/* ==========================================================================
   SPITI SHOPKEEPER - CORE JAVASCRIPT APPLICATION CONTROLLER
   ========================================================================== */

// 1. Configuration & Initial State Preset
const CURRENCY = '€';
// Built-in starting inventory (merged from owner's inventory exports).
// New installs / cleared storage will start pre-loaded with these products.
const DEFAULT_PRODUCTS = [
  { id: '1784106249855', name: 'Strandrauber Natur Radler (Zitrone and Keller Bier)', category: 'Drinks', barcode: '4014807211206', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784106390882', name: 'Strandrauber Natur Radler (Mango and Atlantik Ale)', category: 'Drinks', barcode: '4014807222820', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108139552', name: 'Stortebeker Bernsteinweizen', category: 'Drinks', barcode: '4014807202044', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108197777', name: 'Stortebeker Baltik Lager', category: 'Drinks', barcode: '4014807207650', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108272509', name: 'Stortebeker Keller Bier 1402', category: 'Drinks', barcode: '4014807001029', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108316591', name: 'Stortebeker Sommer wit', category: 'Drinks', barcode: '4014807212586', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108386140', name: 'Stortebeker Schwarz Bier', category: 'Drinks', barcode: '4014807364025', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108458952', name: 'Stortebeker Pilsener Bier', category: 'Drinks', barcode: '4014807364001', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108550130', name: 'Stortebeker Nordisch hell', category: 'Drinks', barcode: '4014807219592', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108691050', name: 'Stortebeker Atlantik Ale', category: 'Drinks', barcode: '4014807204840', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108778732', name: 'Stortebeker Wild Coast Ale', category: 'Drinks', barcode: '4014807224060', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784108839881', name: 'Stortebeker New England IPA', category: 'Drinks', barcode: '4014807221403', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784109560952', name: 'Stortebeker Pazifik Ale', category: 'Drinks', barcode: '4014807218212', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784110702525', name: 'Stortebeker Altantik Ale (Alkohol Frei)', category: 'Drinks', barcode: '4014807210896', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111332761', name: 'Pilsner Urquell', category: 'Drinks', barcode: '8594404110110', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111433610', name: 'Budweiser Budvar Original Czech Lager', category: 'Drinks', barcode: '8594403110111', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111532278', name: 'Rothaus Pils (Big Bottle)', category: 'Drinks', barcode: '41051818', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111617237', name: 'Bier Geschmack Braucht Keinen Namen', category: 'Drinks', barcode: '42271406', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111758172', name: 'Schultheiss Pilsener', category: 'Drinks', barcode: '4004160005093', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111828058', name: 'Carlsberg Premium Lager Beer', category: 'Drinks', barcode: '5740600514143', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784111906214', name: 'Carlsberg Elephant Strong Beer', category: 'Drinks', barcode: '5740600510008', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112039761', name: 'Schofferhofer Weizen Dunkel', category: 'Drinks', barcode: '4053400001944', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112127720', name: 'Schofferhofer Weizen 0.0 Alkohol Frei', category: 'Drinks', barcode: '4053400201597', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112182898', name: 'Schofferhofer Weizen Kristall', category: 'Drinks', barcode: '4053400001166', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112342464', name: 'Schofferhofer Weizen Naturtrub', category: 'Drinks', barcode: '4053400001159', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112418882', name: 'Gosser NaturRadler', category: 'Drinks', barcode: '90288104', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112490257', name: 'Bitburger Premium Pils', category: 'Drinks', barcode: '4102430015008', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112620023', name: 'Veltins Pilsener 0.0 Alkohol Frei', category: 'Drinks', barcode: '4005249002569', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112668457', name: 'Veltins Pilsener', category: 'Drinks', barcode: '4005249000565', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112726756', name: 'Krombacher Pils', category: 'Drinks', barcode: '4008287054026', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112795354', name: 'Krombacher Natur Radler', category: 'Drinks', barcode: '4008287940947', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112849013', name: 'Krombacher Natur Radler 0.0 Alkohol Frei', category: 'Drinks', barcode: '4008287956245', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112936058', name: 'Krombacher 0.0 Pils Isotonisch Alkohol Frei', category: 'Drinks', barcode: '4008287914368', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784112992505', name: 'Tyskie Poland', category: 'Drinks', barcode: '5901359062013', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113039613', name: 'Zywiec Premium Beer', category: 'Drinks', barcode: '5901559130000', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113133690', name: 'Franziskaner Weissbier Premium Weissbier', category: 'Drinks', barcode: '4072700001072', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113235744', name: 'Paulaner Munchen Hefe Weissbier Naturtrub', category: 'Drinks', barcode: '4066600641964', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113314076', name: 'Paulaner Munchen Weissbier Kristallklar', category: 'Drinks', barcode: '4066600641902', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113397310', name: 'Berliner Kindl Natur Radler Grapefruit', category: 'Drinks', barcode: '4053400201931', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113481777', name: 'Berliner Kindl Natur Radler Zitrone', category: 'Drinks', barcode: '4053400287355', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113548420', name: 'Flensburger Pilsener', category: 'Drinks', barcode: '41030837', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113643398', name: 'Berliner Kindl Jubilaums Pilsener Premium', category: 'Drinks', barcode: '4100080000931', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113708845', name: 'Berliner Pilsner', category: 'Drinks', barcode: '4004160005338', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113753005', name: 'Berliner Natur Radler', category: 'Drinks', barcode: '4053400209937', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l4053400209937' },
  { id: '1784113854416', name: 'Berliner Kindl Bock Hell', category: 'Drinks', barcode: '4100080000528', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113898990', name: 'Berliner Kindl Bock Dunkel', category: 'Drinks', barcode: '4100080000542', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784113941872', name: 'Berliner Pranke', category: 'Drinks', barcode: '4053400208749', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114003378', name: 'Erdinger Kristall', category: 'Drinks', barcode: '4002103000020', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114075315', name: 'Andechs Kloster Green', category: 'Drinks', barcode: '4013024000013', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114124003', name: 'Andechs Kloster Red', category: 'Drinks', barcode: '4013024000211', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114183586', name: 'Andechs Kloster Yellow', category: 'Drinks', barcode: '4013024001317', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114252094', name: 'Porter Lausitzer', category: 'Drinks', barcode: '4018588003302', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114310623', name: 'Warsteiner Pilsener', category: 'Drinks', barcode: '4000856005446', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114351648', name: 'Lech Premium', category: 'Drinks', barcode: '5901359162010', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114412724', name: 'Jever Fun Alkoholfrei Pilsener', category: 'Drinks', barcode: '4008948194016', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114466758', name: 'Jever Pilsener', category: 'Drinks', barcode: '4008948027000', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114521276', name: 'Becks Gold', category: 'Drinks', barcode: '42111719', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114591195', name: 'Becks Blue Alkoholfrei', category: 'Drinks', barcode: '42021322', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114665223', name: 'Becks Red Original', category: 'Drinks', barcode: '41001318', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114717567', name: 'Sternburg Export', category: 'Drinks', barcode: '41057759', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114760786', name: 'Sternburg Radler', category: 'Drinks', barcode: '4105760121661', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114804044', name: 'Pilsator Pilsener', category: 'Drinks', barcode: '4042269121207', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784114964738', name: 'Wernesgruner Pils Legende', category: 'Drinks', barcode: '4015444000017', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115043623', name: 'Benediktiner Weissbier Alkoholfrei', category: 'Drinks', barcode: '4052197001205', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115098416', name: 'Schnieder Weisse Kristall', category: 'Drinks', barcode: '4003669016500', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115180973', name: 'Schneider Weisse Alkoholfrei', category: 'Drinks', barcode: '4003669016906', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115257508', name: 'Honigbier Odin Trunk', category: 'Drinks', barcode: '41060568', price: 1.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115323591', name: 'Blumers Original Number 9 Recipe', category: 'Drinks', barcode: '5411718910973', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115398570', name: 'Blumers Crushed Red Berries and Lime Number 17 Recipe', category: 'Drinks', barcode: '5411718910997', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115444739', name: 'Blumers Pear Number 10 Recipe', category: 'Drinks', barcode: '5411718911017', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784115534427', name: 'Christinen Spritzig Naturliches Mineralwasser', category: 'Drinks', barcode: '4042600366083', price: 1.7, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784116478644', name: 'Christinen Multivitamin', category: 'Drinks', barcode: '4042600366489', price: 1.7, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784116551284', name: 'Astra Urtyp', category: 'Drinks', barcode: '42278153', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784116694718', name: 'Astra Rotlicht', category: 'Drinks', barcode: '42140962', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784116766506', name: 'Grevensteiner', category: 'Drinks', barcode: '4005249002019', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784116831155', name: 'Heineken Can', category: 'Drinks', barcode: '87120462', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784116888446', name: 'Desperados Can', category: 'Drinks', barcode: '3119780251889', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784117018576', name: 'Berliner Can', category: 'Drinks', barcode: '4053400257624', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784117105164', name: 'Schultheiss Pilsener Can', category: 'Drinks', barcode: '4053400257648', price: 3.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784117247174', name: 'Heineken Original Small', category: 'Drinks', barcode: '8712000900205', price: 1.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.25l' },
  { id: '1784117311928', name: 'Heineken Original Medium', category: 'Drinks', barcode: '8712000900663', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784117412873', name: 'Heineken 0.0 Alkoholfrei', category: 'Drinks', barcode: '8712000050139', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784117459866', name: 'Tiger Asian Lager', category: 'Drinks', barcode: '086428260332', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784117511878', name: 'Desperados Bottle', category: 'Drinks', barcode: '9028800148952', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784117578532', name: 'Corona Extra', category: 'Drinks', barcode: '75033927', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '355ml' },
  { id: '1784119561541', name: 'Corona Cera 0.0 Alkoholfrie', category: 'Drinks', barcode: '5410228292876', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '355ml' },
  { id: '1784119648557', name: 'Peroni Nastro Azzurro', category: 'Drinks', barcode: '8008440042743', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784119733483', name: 'Peroni Nastro Azzurro 0.0 Alkoholfrei', category: 'Drinks', barcode: '8594404023298', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784119805966', name: 'BRLO Helles', category: 'Drinks', barcode: '4260402630014', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784119882191', name: 'BRLO German Ipa', category: 'Drinks', barcode: '4260402631073', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784119914011', name: 'BRLO Pale ale', category: 'Drinks', barcode: '4260402630021', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784119984137', name: 'BRLO Naked Alkoholfrei', category: 'Drinks', barcode: '4260402630588', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784120053621', name: 'Salitos Blue', category: 'Drinks', barcode: '4025127096077', price: 3.2, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120110374', name: 'Salitos Pink', category: 'Drinks', barcode: '4025127085071', price: 3.2, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120165806', name: 'Salitos Ice', category: 'Drinks', barcode: '4025127016938', price: 3.2, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120210977', name: 'Salitos Mojito', category: 'Drinks', barcode: '4025127085354', price: 3.2, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120276356', name: 'Salitos Original', category: 'Drinks', barcode: '4025127014972', price: 3.2, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120385732', name: 'Lammsbrau Neumarkter Bio Alkoholfrei', category: 'Drinks', barcode: '4012852001650', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784120452114', name: 'San Miguel Especial', category: 'Drinks', barcode: '8410655000553', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120592282', name: 'Budweiser Budvar Original Czech Lager (Small Bottle)', category: 'Drinks', barcode: '8594403410129', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784120678443', name: 'Anheuser Busch Bud', category: 'Drinks', barcode: '4100130022081', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '300ml' },
  { id: '1784120766335', name: 'Warsteiner Pilsener', category: 'Drinks', barcode: '4000856005422', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784120845200', name: 'Becks Red Original (Small Bottle)', category: 'Drinks', barcode: '41001301', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784120955861', name: 'Becks Blue Alkoholfrei (Small Bottle)', category: 'Drinks', barcode: '42021315', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121126074', name: 'Becks Green Lemon (Small Bottle)', category: 'Drinks', barcode: '42111702', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121192944', name: 'Becks Gold (Small Bottle)', category: 'Drinks', barcode: '42077442', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121279326', name: 'Jever Fun Alkoholfrei (Small Bottle)', category: 'Drinks', barcode: '4008948191015', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121340712', name: 'Jever Pilsener (Small Bottle)', category: 'Drinks', barcode: '4008948023019', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121460110', name: 'Berliner Kindl Weisse Himbeere', category: 'Drinks', barcode: '4053400257372', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121712590', name: 'Berliner Kindl Weisse Waldmeister', category: 'Drinks', barcode: '4053400257389', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784121781010', name: 'Berliner Pilsener (Small Bottle)', category: 'Drinks', barcode: '4004160019410', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122035134', name: 'Berliner Kindl Jubilaums Pilsener (Small Bottle)', category: 'Drinks', barcode: '4100080000368', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122256351', name: 'Rothaus Natur Radler Zitronen Zapfle 0.0 Alkoholfrei', category: 'Drinks', barcode: '42425670', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122315908', name: 'Rothaus Alkoholfrei Tannen Zapfle', category: 'Drinks', barcode: '41051801', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122457267', name: 'Rothaus Pils Tannen Zapfle', category: 'Drinks', barcode: '41051825', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122538937', name: 'Rothaus Brau Schwarzwald Zapfle Naturtrub', category: 'Drinks', barcode: '42313830', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122665726', name: 'Rothaus Natur Radler Limetten Zapfle Naturtrub', category: 'Drinks', barcode: '41051887', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784122820107', name: 'Tucher Original Nurnberger Rotbier Naturtrub', category: 'Drinks', barcode: '4006298013704', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784122882811', name: 'Weihenstephaner Helles', category: 'Drinks', barcode: '4105120003057', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784122981717', name: 'Edelstoff Exportbier', category: 'Drinks', barcode: '4105250024007', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784123055290', name: 'Gruner Vollbier Hell', category: 'Drinks', barcode: '4076300001524', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000000', name: 'Red Bull Sea Blue Edition', category: 'Drinks', barcode: '90453885', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000001', name: 'Red Bull Blue Edition', category: 'Drinks', barcode: '90376603', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000002', name: 'Red Bull Yellow Edition', category: 'Drinks', barcode: '90415722', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000003', name: 'Red Bull Peach Edition', category: 'Drinks', barcode: '90474514', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000004', name: 'Red Bull Sugar Free', category: 'Drinks', barcode: '90162480', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000005', name: 'Red Bull Zero', category: 'Drinks', barcode: '90415296', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000006', name: 'Red Bull Original', category: 'Drinks', barcode: '90162565', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000007', name: 'Red Bull White Edition', category: 'Drinks', barcode: '90433627', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000008', name: 'Red Bull Apricot Edition', category: 'Drinks', barcode: '90448638', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000009', name: 'Red Bull Summer Edition', category: 'Drinks', barcode: '90493119', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000010', name: 'Red Bull Green Edition', category: 'Drinks', barcode: '90446832', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000011', name: '28 Black Acai Zero', category: 'Drinks', barcode: '4260160952014', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000012', name: '28 Black Acai', category: 'Drinks', barcode: '4260160950010', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000013', name: '28 Black Sour Cherry', category: 'Drinks', barcode: '4260160950874', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '250ml' },
  { id: '1784200000014', name: 'Organics Black Orange By Red Bull', category: 'Drinks', barcode: '9002490278960', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784200000015', name: 'Monster Energy Green Original', category: 'Drinks', barcode: '506033563528', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000016', name: 'Monster Energy White Edition', category: 'Drinks', barcode: '5060337500401', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000017', name: 'Monster Energy Juiced Edition5060517888510', category: 'Drinks', barcode: '5060520000000', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000018', name: 'Red Bull Original (Big)', category: 'Drinks', barcode: '9002490206840', price: 3.0, costPrice: 0.0, stock: 10, limit: 5, unit: '355ml' },
  { id: '1784200000019', name: 'Fuze Tea (all Flovours)', category: 'Drinks', barcode: '42116417', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.4l' },
  { id: '1784200000020', name: 'Vio Bio Limo Orange', category: 'Drinks', barcode: '5449000146571', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000021', name: 'Vio Bio Limo Zitrone and Limette', category: 'Drinks', barcode: '5449000147097', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000022', name: 'Power Ade Red', category: 'Drinks', barcode: '90357367', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000023', name: 'Power Ade Blue', category: 'Drinks', barcode: '90357350', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000024', name: 'Mountain Dew (Small Bottle)', category: 'Drinks', barcode: '4062139002337', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000025', name: 'Volvic Still Wasser (Small)', category: 'Drinks', barcode: '30640240188', price: 2.5, costPrice: 0.0, stock: 10, limit: 5, unit: '0.75l' },
  { id: '1784200000026', name: 'Vio Still Wasser', category: 'Drinks', barcode: '41005958', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000027', name: 'Vio Spritzig Wasser', category: 'Drinks', barcode: '41005965', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000028', name: 'Vio Medium Wasser', category: 'Drinks', barcode: '41005941', price: 1.8, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000029', name: 'Capri Sun (Multi Vitamin)', category: 'Drinks', barcode: '4000177032695', price: 0.8, costPrice: 0.0, stock: 10, limit: 5, unit: '200ml' },
  { id: '1784200000030', name: 'Capri Sun (Kirsche Cerise)', category: 'Drinks', barcode: '4000177996003', price: 0.8, costPrice: 0.0, stock: 10, limit: 5, unit: '200ml' },
  { id: '1784200000031', name: 'Bravo Zitrone', category: 'Drinks', barcode: '9008700241014', price: 1.5, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000032', name: 'Bravo Mangos Ananas', category: 'Drinks', barcode: '9008700241052', price: 1.5, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000033', name: 'Bravo Pfirsich', category: 'Drinks', barcode: '9008700240956', price: 1.5, costPrice: 0.0, stock: 10, limit: 5, unit: '500ml' },
  { id: '1784200000034', name: 'Fanta Original Can', category: 'Drinks', barcode: '5000112604726', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784200000035', name: 'Coco Cola Original Taste Can', category: 'Drinks', barcode: '5000112602029', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784200000036', name: 'Sprite Can', category: 'Drinks', barcode: '5000112604740', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784200000037', name: 'Liptone Pfirsich can', category: 'Drinks', barcode: '4062139025039', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784200000038', name: 'Coca Cola Zero Sugar can', category: 'Drinks', barcode: '5000112604450', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784200000039', name: 'Lipton Zitrone Can', category: 'Drinks', barcode: '4062139025015', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '330ml' },
  { id: '1784200000040', name: 'Coco Cola Zero Suger (Small Bottle)', category: 'Drinks', barcode: '5000112552232', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000041', name: 'Coca Cola Original Taste ( Small Bottle)', category: 'Drinks', barcode: '5000112548068', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000042', name: 'Fanta (Small Bottle)', category: 'Drinks', barcode: '5000112548082', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000043', name: 'Sprite (Small Bottle)', category: 'Drinks', barcode: '5000112548129', price: 2.2, costPrice: 0.0, stock: 10, limit: 5, unit: '0.5l' },
  { id: '1784200000044', name: 'Coca Cola Zero Sugar, Koffien, Kalorien', category: 'Drinks', barcode: '5000112668872', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' },
  { id: '1784200000045', name: 'Cola Orange Remix Lemonades', category: 'Drinks', barcode: '42516002', price: 2.0, costPrice: 0.0, stock: 10, limit: 5, unit: '0.33l' }
];

// Shop-wide product categories. This is the single source of truth used to
// populate the "Add/Edit Product" category dropdown, the Inventory category
// filter, and the POS category tabs - update this list and every part of the
// UI that references categories stays in sync automatically.
const CATEGORIES = [
  { value: 'Cigarette / Tobacco', label: 'Cigarette / Tobacco', icon: '🚬', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.14)', border: 'rgba(245, 158, 11, 0.35)' },
  { value: 'Drinks',              label: 'Drinks',              icon: '🥤', color: '#4facfe', bg: 'rgba(79, 172, 254, 0.14)',  border: 'rgba(79, 172, 254, 0.35)' },
  { value: 'Snacks / Ice Cream',  label: 'Snacks / Ice Cream',  icon: '🍫', color: '#10b981', bg: 'rgba(16, 185, 129, 0.14)',  border: 'rgba(16, 185, 129, 0.35)' },
  { value: 'Vapes',                label: 'Vapes',               icon: '💨', color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.14)', border: 'rgba(167, 139, 250, 0.35)' }
];

function getCategoryMeta(categoryValue) {
  return CATEGORIES.find(c => c.value === categoryValue) || null;
}

// Assign a starting "cost price" (what the shop paid per unit) to preset products.
// This is only a rough default estimate (~55% of the sale price) so the Finance
// tab has something sensible to show out of the box - the owner should correct
// each product's real purchase cost in the Inventory tab or via Restock.
DEFAULT_PRODUCTS.forEach(p => {
  if (p.costPrice === undefined) {
    p.costPrice = Math.round(p.price * 0.55 * 100) / 100;
  }
});

// App State
let state = {
  inventory: [],
  transactions: [],
  purchases: [], // Stock restock/investment records: { id, timestamp, productId, productName, quantity, costPerUnit, totalCost, note }
  cart: [], // Format: { barcode: string, quantity: number }
  posCategoryFilter: 'all' // Currently selected category tab on the POS screen
};

// DOM Cache
const DOM = {
  // Navigation & Views
  navItems: document.querySelectorAll('.nav-item'),
  views: document.querySelectorAll('.content-view'),
  pageTitle: document.getElementById('page-title'),
  pageSubtitle: document.getElementById('page-subtitle'),
  liveClock: document.getElementById('live-clock'),
  
  // Dashboard Elements
  statRevenue: document.getElementById('stat-revenue'),
  statTransactions: document.getElementById('stat-transactions'),
  statSplit: document.getElementById('stat-split'),
  statSplitDetails: document.getElementById('stat-split-details'),
  statLowStock: document.getElementById('stat-low-stock'),
  statStockAlertCard: document.getElementById('stat-stock-alert-card'),
  soldTodayList: document.getElementById('sold-today-list'),
  chartBarsGroup: document.getElementById('chart-bars-group'),
  chartXLabelsGroup: document.getElementById('chart-x-labels-group'),
  
  // POS Elements
  posBarcodeInput: document.getElementById('pos-barcode-input'),
  btnManualScan: document.getElementById('btn-manual-scan'),
  presetSimulatorList: document.getElementById('preset-simulator-list'),
  cartItemsList: document.getElementById('cart-items-list'),
  cartBadgeCount: document.getElementById('cart-badge-count'),
  btnClearCart: document.getElementById('btn-clear-cart'),
  btnCheckout: document.getElementById('btn-checkout'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTotal: document.getElementById('cart-total'),
  paymentPillCash: document.getElementById('pill-cash'),
  paymentPillCard: document.getElementById('pill-card'),
  paymentRadios: document.getElementsByName('payment_method'),
  
  // Inventory Elements
  inventorySearchInput: document.getElementById('inventory-search-input'),
  inventoryFilterStock: document.getElementById('inventory-filter-stock'),
  inventoryFilterCategory: document.getElementById('inventory-filter-category'),
  inventoryItemsTbody: document.getElementById('inventory-items-tbody'),
  btnAddProduct: document.getElementById('btn-add-product'),

  // POS Category Tabs
  posCategoryTabs: document.getElementById('pos-category-tabs'),
  
  // Transactions Elements
  transactionsSearchInput: document.getElementById('transactions-search-input'),
  transactionsFilterMethod: document.getElementById('transactions-filter-method'),
  transactionsListTbody: document.getElementById('transactions-list-tbody'),
  totalTxLedgerBadge: document.getElementById('total-tx-ledger-badge'),
  btnResetHistory: document.getElementById('btn-reset-history'),
  
  // Product Modal
  productModal: document.getElementById('product-modal'),
  modalTitle: document.getElementById('modal-title'),
  productForm: document.getElementById('product-form'),
  editProductId: document.getElementById('edit-product-id'),
  prodName: document.getElementById('prod-name'),
  prodCategory: document.getElementById('prod-category'),
  prodBarcode: document.getElementById('prod-barcode'),
  prodPrice: document.getElementById('prod-price'),
  prodCostPrice: document.getElementById('prod-cost-price'),
  prodStock: document.getElementById('prod-stock'),
  prodLimit: document.getElementById('prod-limit'),
  prodUnit: document.getElementById('prod-unit'),
  modalBtnCancel: document.getElementById('modal-btn-cancel'),
  modalBtnClose: document.getElementById('modal-btn-close'),
  btnGenerateBarcode: document.getElementById('btn-generate-barcode'),
  
  // Success Modal
  checkoutSuccessModal: document.getElementById('checkout-success-modal'),
  receiptDetails: document.getElementById('receipt-details'),
  btnSuccessClose: document.getElementById('btn-success-close'),

  // Restock Modal
  restockModal: document.getElementById('restock-modal'),
  restockForm: document.getElementById('restock-form'),
  restockProductId: document.getElementById('restock-product-id'),
  restockProductName: document.getElementById('restock-product-name'),
  restockQty: document.getElementById('restock-qty'),
  restockCostPerUnit: document.getElementById('restock-cost-per-unit'),
  restockTotalCost: document.getElementById('restock-total-cost'),
  restockModalBtnCancel: document.getElementById('restock-modal-btn-cancel'),
  restockModalBtnClose: document.getElementById('restock-modal-btn-close'),

  // Finance View Elements
  financePeriodTabs: document.querySelectorAll('.period-tab'),
  financeStatInvested: document.getElementById('finance-stat-invested'),
  financeStatRevenue: document.getElementById('finance-stat-revenue'),
  financeStatProfit: document.getElementById('finance-stat-profit'),
  financeStatMargin: document.getElementById('finance-stat-margin'),
  financeBreakdownTbody: document.getElementById('finance-breakdown-tbody'),
  financeBreakdownHeaderLabel: document.getElementById('finance-breakdown-header-label'),
  btnExportFinanceCsv: document.getElementById('btn-export-finance-csv'),
  btnExportBackup: document.getElementById('btn-export-backup'),
  btnImportBackup: document.getElementById('btn-import-backup'),
  importBackupFileInput: document.getElementById('import-backup-file-input'),
  btnExportInventoryCsv: document.getElementById('btn-export-inventory-csv'),
  btnExportTransactionsCsv: document.getElementById('btn-export-transactions-csv'),
  
  // Toasts
  toastContainer: document.getElementById('toast-container')
};

// ==========================================================================
// 2. Core Initialisation & Storage Functions
// ==========================================================================

function init() {
  loadState();
  populateCategoryUI();
  setupEventHandlers();
  startClock();
  
  // Switch to initial hash view or default to dashboard
  handleHashChange();
  
  // Update rendering for active view
  renderPresetSimulator();
  
  // PWA Service Worker Registration
  registerServiceWorker();
}

// Populates the "Add/Edit Product" category select, the Inventory category
// filter, and builds the POS category tabs, all from the CATEGORIES config.
function populateCategoryUI() {
  // Add/Edit Product modal dropdown
  if (DOM.prodCategory) {
    DOM.prodCategory.innerHTML = CATEGORIES.map(c =>
      `<option value="${escapeHtml(c.value)}">${c.icon} ${escapeHtml(c.label)}</option>`
    ).join('');
  }

  // Inventory tab category filter (keep "All Categories" first)
  if (DOM.inventoryFilterCategory) {
    DOM.inventoryFilterCategory.innerHTML =
      `<option value="all">All Categories</option>` +
      CATEGORIES.map(c =>
        `<option value="${escapeHtml(c.value)}">${c.icon} ${escapeHtml(c.label)}</option>`
      ).join('');
  }

  // POS category tabs (quick filter for the barcode scanner simulator list)
  if (DOM.posCategoryTabs) {
    DOM.posCategoryTabs.innerHTML =
      `<button type="button" class="category-tab active" data-category="all">All Items</button>` +
      CATEGORIES.map(c =>
        `<button type="button" class="category-tab" data-category="${escapeHtml(c.value)}">${c.icon} ${escapeHtml(c.label)}</button>`
      ).join('');

    DOM.posCategoryTabs.querySelectorAll('.category-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.posCategoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.posCategoryFilter = tab.dataset.category;
        renderPresetSimulator();
      });
    });
  }
}

function loadState() {
  try {
    const savedInventory = localStorage.getItem('spiti_inventory');
    const savedTransactions = localStorage.getItem('spiti_transactions');
    const savedPurchases = localStorage.getItem('spiti_purchases');
    
    if (savedInventory) {
      // Always trust whatever is already saved on this device - never
      // auto-replace a shop's real inventory with the preset catalog.
      state.inventory = JSON.parse(savedInventory);
    } else {
      state.inventory = [...DEFAULT_PRODUCTS];
      localStorage.setItem('spiti_inventory', JSON.stringify(state.inventory));
    }
    
    if (savedTransactions) {
      state.transactions = JSON.parse(savedTransactions);
    } else {
      state.transactions = [];
    }

    if (savedPurchases) {
      state.purchases = JSON.parse(savedPurchases);
    } else {
      state.purchases = [];
    }
  } catch (e) {
    console.error('Error loading state from localStorage:', e);
    state.inventory = [...DEFAULT_PRODUCTS];
    state.transactions = [];
    state.purchases = [];
  }
}

function saveState() {
  try {
    localStorage.setItem('spiti_inventory', JSON.stringify(state.inventory));
    localStorage.setItem('spiti_transactions', JSON.stringify(state.transactions));
    localStorage.setItem('spiti_purchases', JSON.stringify(state.purchases));
  } catch (e) {
    console.error('Error saving state to localStorage:', e);
    showToast('Failed to save data. Storage quota exceeded.', 'danger');
  }
}

// ==========================================================================
// 3. Navigation & Routing (SPA)
// ==========================================================================

function setupEventHandlers() {
  // Navigation Tabs Links
  DOM.navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Allow standard link behavior, hash change is handled separately
      // but ensure POS focus is applied if entering POS
    });
  });
  
  window.addEventListener('hashchange', handleHashChange);
  
  // Live POS barcode scanning input handles
  DOM.posBarcodeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      triggerScan();
    }
  });
  
  DOM.btnManualScan.addEventListener('click', triggerScan);
  DOM.btnClearCart.addEventListener('click', clearCart);
  DOM.btnCheckout.addEventListener('click', handleCheckout);
  
  // POS payment pills visual update
  DOM.paymentPillCash.addEventListener('click', () => selectPaymentMethod('Cash'));
  DOM.paymentPillCard.addEventListener('click', () => selectPaymentMethod('Card'));
  
  // Inventory Filtering & Search
  DOM.inventorySearchInput.addEventListener('input', renderInventoryGrid);
  DOM.inventoryFilterStock.addEventListener('change', renderInventoryGrid);
  if (DOM.inventoryFilterCategory) {
    DOM.inventoryFilterCategory.addEventListener('change', renderInventoryGrid);
  }
  DOM.btnAddProduct.addEventListener('click', () => openProductModal());
  
  // Modal controllers
  DOM.modalBtnCancel.addEventListener('click', closeProductModal);
  DOM.modalBtnClose.addEventListener('click', closeProductModal);
  DOM.productForm.addEventListener('submit', handleProductFormSubmit);
  DOM.btnGenerateBarcode.addEventListener('click', handleBarcodeGeneration);
  
  // Transactions Controllers
  DOM.transactionsSearchInput.addEventListener('input', renderTransactionsList);
  DOM.transactionsFilterMethod.addEventListener('change', renderTransactionsList);
  DOM.btnResetHistory.addEventListener('click', handleResetHistory);

  // Restock Modal Controllers
  DOM.restockModalBtnCancel.addEventListener('click', closeRestockModal);
  DOM.restockModalBtnClose.addEventListener('click', closeRestockModal);
  DOM.restockForm.addEventListener('submit', handleRestockFormSubmit);
  DOM.restockQty.addEventListener('input', updateRestockTotalCost);
  DOM.restockCostPerUnit.addEventListener('input', updateRestockTotalCost);

  // Finance View Controllers
  DOM.financePeriodTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.financePeriodTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFinance();
    });
  });
  DOM.btnExportFinanceCsv.addEventListener('click', exportFinanceCsv);
  DOM.btnExportBackup.addEventListener('click', exportFullBackup);
  DOM.btnImportBackup.addEventListener('click', () => DOM.importBackupFileInput.click());
  DOM.importBackupFileInput.addEventListener('change', handleImportBackupFile);
  DOM.btnExportInventoryCsv.addEventListener('click', exportInventoryCsv);
  DOM.btnExportTransactionsCsv.addEventListener('click', exportTransactionsCsv);
  
  // Success Celebration Closing
  DOM.btnSuccessClose.addEventListener('click', () => {
    DOM.checkoutSuccessModal.classList.remove('active');
    // Set focus back to barcode input for next sale
    setTimeout(() => DOM.posBarcodeInput.focus(), 150);
  });

  // Global document keydown handler to intercept hardware barcode scanners on the POS screen
  document.addEventListener('keydown', (e) => {
    // Only activate focus intercept if we are on the POS view and a modal is not open
    if (window.location.hash !== '#pos') return;
    if (DOM.productModal.classList.contains('active') || DOM.checkoutSuccessModal.classList.contains('active')) return;
    
    // If they are actively focusing on another input/select element, do not hijack
    if (document.activeElement && (
      document.activeElement.tagName === 'INPUT' || 
      document.activeElement.tagName === 'SELECT' || 
      document.activeElement.tagName === 'TEXTAREA'
    )) {
      return;
    }
    
    // If the key is a printable digit, focus the scanner input automatically!
    // Hardware scanner injects numbers rapidly, triggering keydown.
    if (e.key >= '0' && e.key <= '9') {
      DOM.posBarcodeInput.focus();
      // Browser automatically appends the pressed character to the input when it receives focus!
    }
  });
}

function handleHashChange() {
  const hash = window.location.hash || '#dashboard';
  
  // Remove active state from all items and views
  DOM.navItems.forEach(item => item.classList.remove('active'));
  DOM.views.forEach(view => view.classList.remove('active'));
  
  // Match view elements
  const targetViewId = `view-${hash.replace('#', '')}`;
  const targetBtnId = `tab-btn-${hash.replace('#', '')}`;
  
  const targetView = document.getElementById(targetViewId);
  const targetBtn = document.getElementById(targetBtnId);
  
  if (targetView && targetBtn) {
    targetView.classList.add('active');
    targetBtn.classList.add('active');
    
    // Update headers
    updateHeaderDetails(hash);
  }
  
  // View specific triggers
  if (hash === '#dashboard') {
    renderDashboard();
  } else if (hash === '#pos') {
    renderCart();
    setTimeout(() => DOM.posBarcodeInput.focus(), 100);
  } else if (hash === '#inventory') {
    renderInventoryGrid();
  } else if (hash === '#transactions') {
    renderTransactionsList();
  } else if (hash === '#finance') {
    renderFinance();
  }
}

function updateHeaderDetails(hash) {
  let title = 'Dashboard Overview';
  let subtitle = 'Real-time store performance & metrics';
  
  switch (hash) {
    case '#dashboard':
      title = 'Dashboard Overview';
      subtitle = 'Real-time store performance & metrics';
      break;
    case '#pos':
      title = 'Checkout Register';
      subtitle = 'Scan barcodes or select simulated products to fill cart';
      break;
    case '#inventory':
      title = 'Inventory Details';
      subtitle = 'Manage retail stock products, pricing, and barcodes';
      break;
    case '#transactions':
      title = 'Transaction Logs';
      subtitle = 'Historical records of all shopping checkouts registered';
      break;
    case '#finance':
      title = 'Finance & Profit';
      subtitle = 'Track stock investment, revenue, and profit over time';
      break;
  }
  
  DOM.pageTitle.textContent = title;
  DOM.pageSubtitle.textContent = subtitle;
}

// Live Clock UI
function startClock() {
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    DOM.liveClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
}

// ==========================================================================
// 4. Barcode Simulator & POS Cart System
// ==========================================================================

function renderPresetSimulator() {
  DOM.presetSimulatorList.innerHTML = '';

  const activeCategory = state.posCategoryFilter || 'all';
  const products = activeCategory === 'all'
    ? state.inventory
    : state.inventory.filter(p => p.category === activeCategory);

  if (products.length === 0) {
    DOM.presetSimulatorList.innerHTML = `
      <div class="simulator-empty-state">
        ${state.inventory.length === 0
          ? 'No products in inventory yet. Add some from the Inventory tab.'
          : 'No products in this category yet.'}
      </div>
    `;
    return;
  }

  products.forEach(product => {
    const meta = getCategoryMeta(product.category);
    const btn = document.createElement('button');
    btn.className = 'simulator-btn';
    btn.title = `Simulate scan of ${product.name}`;
    if (meta) {
      btn.style.setProperty('--cat-color', meta.color);
      btn.style.setProperty('--cat-bg', meta.bg);
      btn.style.setProperty('--cat-border', meta.border);
    }
    btn.innerHTML = `
      ${meta ? `<span class="sim-category">${meta.icon} ${escapeHtml(meta.label)}</span>` : ''}
      <span class="sim-name">${escapeHtml(product.name)}${product.unit ? ` (${escapeHtml(product.unit)})` : ''}</span>
      <span class="sim-barcode">⚡ ${product.barcode}</span>
      <span class="sim-price">${CURRENCY}${product.price.toFixed(2)}</span>
    `;
    
    btn.addEventListener('click', () => {
      addToCart(product.barcode);
    });
    
    DOM.presetSimulatorList.appendChild(btn);
  });
}

function triggerScan() {
  const code = DOM.posBarcodeInput.value.trim();
  if (!code) return;
  
  addToCart(code);
  DOM.posBarcodeInput.value = '';
  DOM.posBarcodeInput.focus();
}

function addToCart(barcode) {
  // Find product
  const product = state.inventory.find(p => p.barcode === barcode);
  
  if (!product) {
    showToast(`Barcode "${barcode}" not recognized. Check inventory registry.`, 'danger');
    return;
  }
  
  // Verify overall product stock availability
  if (product.stock <= 0) {
    showToast(`"${product.name}" is completely out of stock. Cannot add to cart.`, 'danger');
    return;
  }
  
  // Find existing in cart
  const cartIndex = state.cart.findIndex(item => item.barcode === barcode);
  
  if (cartIndex > -1) {
    const nextQty = state.cart[cartIndex].quantity + 1;
    if (nextQty > product.stock) {
      showToast(`Cannot add more. Limit reached. Total stock of "${product.name}" is only ${product.stock}.`, 'warning');
      return;
    }
    state.cart[cartIndex].quantity = nextQty;
  } else {
    state.cart.push({ barcode: barcode, quantity: 1 });
  }
  
  showToast(`Scanned: ${product.name} (${CURRENCY}${product.price.toFixed(2)})`, 'success');
  renderCart();
saveState();
  
  // Flash effect on scanning card
  const scanCard = document.querySelector('.scanning-card');
  if (scanCard) {
    scanCard.style.borderColor = 'var(--color-accent)';
    scanCard.style.boxShadow = '0 0 35px var(--color-accent-glow)';
    setTimeout(() => {
      scanCard.style.borderColor = '';
      scanCard.style.boxShadow = '';
    }, 300);
  }
}

function updateCartQuantity(barcode, delta) {
  const cartIndex = state.cart.findIndex(item => item.barcode === barcode);
  if (cartIndex === -1) return;
  
  const product = state.inventory.find(p => p.barcode === barcode);
  if (!product) return;
  
  const currentItem = state.cart[cartIndex];
  const newQty = currentItem.quantity + delta;
  
  if (newQty <= 0) {
    removeFromCart(barcode);
    return;
  }
  
  if (newQty > product.stock) {
    showToast(`Stock limit reached. Only ${product.stock} units of "${product.name}" available.`, 'warning');
    return;
  }
  
  currentItem.quantity = newQty;
  renderCart();
}

function removeFromCart(barcode) {
  state.cart = state.cart.filter(item => item.barcode !== barcode);
  showToast(`Item removed from cart.`, 'warning');
  renderCart();
}

function clearCart() {
  state.cart = [];
  renderCart();
  showToast('Shopping cart cleared.', 'warning');
}

function selectPaymentMethod(method) {
  // Update state radio inputs
  DOM.paymentRadios.forEach(radio => {
    if (radio.value === method) {
      radio.checked = true;
    }
  });
  
  // Update UI indicators
  if (method === 'Cash') {
    DOM.paymentPillCash.classList.add('active');
    DOM.paymentPillCard.classList.remove('active');
  } else {
    DOM.paymentPillCard.classList.add('active');
    DOM.paymentPillCash.classList.remove('active');
  }
}

function getSelectedPaymentMethod() {
  let selected = 'Cash';
  DOM.paymentRadios.forEach(radio => {
    if (radio.checked) selected = radio.value;
  });
  return selected;
}

function renderCart() {
  const container = DOM.cartItemsList;
  container.innerHTML = '';
  
  let subtotal = 0;
  let totalItemsCount = 0;
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </div>
        <p class="main-text">Cart is Empty</p>
        <p class="sub-text">Scan a barcode or click simulation buttons to add items to the cart.</p>
      </div>
    `;
    DOM.btnCheckout.disabled = true;
    DOM.btnClearCart.disabled = true;
    DOM.cartBadgeCount.style.display = 'none';
  } else {
    DOM.btnCheckout.disabled = false;
    DOM.btnClearCart.disabled = false;
    
    state.cart.forEach(cartItem => {
      const product = state.inventory.find(p => p.barcode === cartItem.barcode);
      if (!product) return;
      
      const itemSubtotal = product.price * cartItem.quantity;
      subtotal += itemSubtotal;
      totalItemsCount += cartItem.quantity;
      
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-details">
          <span class="cart-item-name">${escapeHtml(product.name)}${product.unit ? ` (${escapeHtml(product.unit)})` : ''}</span>
          <span class="cart-item-barcode">Code: ${product.barcode}</span>
          <span class="cart-item-pricing">${CURRENCY}${product.price.toFixed(2)} each</span>
        </div>
        
        <div class="cart-qty-control">
          <button class="qty-btn" onclick="updateCartQuantity('${product.barcode}', -1)">−</button>
          <span class="qty-value">${cartItem.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${product.barcode}', 1)">+</button>
        </div>
        
        <span class="cart-item-total">${CURRENCY}${itemSubtotal.toFixed(2)}</span>
        
        <button class="btn-remove-item" onclick="removeFromCart('${product.barcode}')" title="Remove Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      `;
      
      container.appendChild(div);
    });
    
    DOM.cartBadgeCount.textContent = totalItemsCount;
    DOM.cartBadgeCount.style.display = 'block';
  }
  
  DOM.cartSubtotal.textContent = `${CURRENCY}${subtotal.toFixed(2)}`;
  DOM.cartTotal.textContent = `${CURRENCY}${subtotal.toFixed(2)}`;
}

// Add these to window so standard inline onclick works correctly
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

// ==========================================================================
// 5. Checkout & Transaction Logs
// ==========================================================================

function handleCheckout() {
  if (state.cart.length === 0) return;
  
  const paymentMethod = getSelectedPaymentMethod();
  const txTime = new Date();
  
  // double check inventory levels are sufficient before submitting
  let hasStockError = false;
  
  state.cart.forEach(cartItem => {
    const product = state.inventory.find(p => p.barcode === cartItem.barcode);
    if (!product || product.stock < cartItem.quantity) {
      showToast(`Stock levels shifted! "${product ? product.name : 'Unknown Product'}" has insufficient stock.`, 'danger');
      hasStockError = true;
    }
  });
  
  if (hasStockError) return;
  
  // Deduct stock and assemble receipt items
  const receiptItems = [];
  let txTotal = 0;
  let txCost = 0;
  
  state.cart.forEach(cartItem => {
    const product = state.inventory.find(p => p.barcode === cartItem.barcode);
    
    // deduct stock
    product.stock -= cartItem.quantity;
    
    const rowCost = product.price * cartItem.quantity;
    const unitCostPrice = typeof product.costPrice === 'number' ? product.costPrice : 0;
    const rowCostBasis = unitCostPrice * cartItem.quantity;
    txTotal += rowCost;
    txCost += rowCostBasis;
    
    receiptItems.push({
      barcode: product.barcode,
      name: product.name,
      price: product.price,
      costPrice: unitCostPrice,
      unit: product.unit || '',
      quantity: cartItem.quantity,
      total: rowCost,
      costTotal: rowCostBasis
    });
  });
  
  // Create Transaction Record
  const txId = `TX-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
  const newTransaction = {
    id: txId,
    timestamp: txTime.toISOString(),
    items: receiptItems,
    total: txTotal,
    costTotal: txCost,
    profitTotal: txTotal - txCost,
    paymentMethod: paymentMethod
  };
  
  // Prepend to transaction array
  state.transactions.unshift(newTransaction);
  
  // Save State
  saveState();
  
  // Populate Celebration Receipt Modal
  populateReceiptDetails(newTransaction);
  
  // Reset Cart
  state.cart = [];
  
  // Re-render views
  renderCart();
  renderPresetSimulator(); // In case stock numbers displayed or items shift
  
  // Trigger successful animation overlay
  DOM.checkoutSuccessModal.classList.add('active');
  showToast('Checkout Complete! Ledger recorded.', 'success');
}

function populateReceiptDetails(tx) {
  let itemsHtml = '';
  
  tx.items.forEach(item => {
    itemsHtml += `
      <div class="receipt-row">
        <span>${escapeHtml(item.name)}${item.unit ? ` (${escapeHtml(item.unit)})` : ''} (x${item.quantity})</span>
        <span>${CURRENCY}${item.total.toFixed(2)}</span>
      </div>
    `;
  });
  
  DOM.receiptDetails.innerHTML = `
    <div class="receipt-row">
      <strong>Receipt ID:</strong>
      <strong class="tx-id-badge">${tx.id}</strong>
    </div>
    <div class="receipt-row">
      <span>Date & Time:</span>
      <span>${formatDate(new Date(tx.timestamp))}</span>
    </div>
    <div class="receipt-row">
      <span>Payment Ledger:</span>
      <span class="badge-tx-method ${tx.paymentMethod}">${tx.paymentMethod}</span>
    </div>
    <hr style="border: 0; border-top: 1px dashed var(--border-glass); margin: 8px 0;">
    ${itemsHtml}
    <div class="receipt-row receipt-total">
      <span>Grand Total:</span>
      <span>${CURRENCY}${tx.total.toFixed(2)}</span>
    </div>
  `;
}

function renderTransactionsList() {
  const tbody = DOM.transactionsListTbody;
  tbody.innerHTML = '';
  
  const searchVal = DOM.transactionsSearchInput.value.toLowerCase().trim();
  const methodFilter = DOM.transactionsFilterMethod.value;
  
  let filtered = state.transactions;
  
  // Search filter
  if (searchVal) {
    filtered = filtered.filter(tx => {
      const matchId = tx.id.toLowerCase().includes(searchVal);
      const matchItems = tx.items.some(item => item.name.toLowerCase().includes(searchVal) || item.barcode.includes(searchVal));
      return matchId || matchItems;
    });
  }
  
  // Method Filter
  if (methodFilter !== 'all') {
    filtered = filtered.filter(tx => tx.paymentMethod === methodFilter);
  }
  
  DOM.totalTxLedgerBadge.textContent = `${filtered.length} Record${filtered.length === 1 ? '' : 's'}`;
  
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-5">No matching transactions found in database ledger.</td>
      </tr>
    `;
    return;
  }
  
  filtered.forEach(tx => {
    const date = new Date(tx.timestamp);
    const itemsDescription = tx.items.map(item => `${item.name} (x${item.quantity})`).join(', ');
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="tx-id-badge">${tx.id}</span></td>
      <td>${formatDate(date)}</td>
      <td>
        <div class="tx-items-cell" title="${escapeHtml(itemsDescription)}">
          ${escapeHtml(itemsDescription)}
        </div>
      </td>
      <td class="text-center"><span class="badge-tx-method ${tx.paymentMethod}">${tx.paymentMethod}</span></td>
      <td class="text-right font-bold text-success">${CURRENCY}${tx.total.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function handleResetHistory() {
  if (confirm('CAUTION: Are you sure you want to completely wipe all past transaction logs? This does not reset inventory levels.')) {
    state.transactions = [];
    saveState();
    renderTransactionsList();
    showToast('Transaction log history fully cleared.', 'warning');
  }
}

// ==========================================================================
// 6. Inventory CRUD Operations
// ==========================================================================

function renderCategoryPill(categoryValue) {
  const meta = getCategoryMeta(categoryValue);
  if (!meta) {
    return `<span class="category-pill">${escapeHtml(categoryValue || 'Uncategorized')}</span>`;
  }
  return `<span class="category-pill" style="--cat-color: ${meta.color}; --cat-bg: ${meta.bg}; --cat-border: ${meta.border};">${meta.icon} ${escapeHtml(meta.label)}</span>`;
}

function renderInventoryGrid() {
  const tbody = DOM.inventoryItemsTbody;
  tbody.innerHTML = '';
  
  const searchVal = DOM.inventorySearchInput.value.toLowerCase().trim();
  const stockFilter = DOM.inventoryFilterStock.value;
  const categoryFilter = DOM.inventoryFilterCategory ? DOM.inventoryFilterCategory.value : 'all';
  
  let filtered = state.inventory;
  
  // Apply Search
  if (searchVal) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchVal) || 
      p.category.toLowerCase().includes(searchVal) || 
      p.barcode.includes(searchVal)
    );
  }

  // Apply Category Filter
  if (categoryFilter && categoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  
  // Apply Stock Filters
  if (stockFilter !== 'all') {
    filtered = filtered.filter(p => {
      if (stockFilter === 'out') return p.stock === 0;
      if (stockFilter === 'low') return p.stock > 0 && p.stock <= p.limit;
      if (stockFilter === 'normal') return p.stock > p.limit;
    });
  }
  
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted py-5">No matching products found in inventory.</td>
      </tr>
    `;
    return;
  }
  
  filtered.forEach(product => {
    // Determine stock level pill color & text
    let statusText = `${product.stock} Stk`;
    
    if (product.stock === 0) {
      statusText = '0 (Out of Stock)';
    } else if (product.stock <= product.limit) {
      statusText = `${product.stock} (Low Stock)`;
    }
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700; color: #fff;">
        ${escapeHtml(product.name)}
        ${product.unit ? `<span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal; margin-left: 4px;">(${escapeHtml(product.unit)})</span>` : ''}
      </td>
      <td><span class="tx-id-badge">${product.barcode}</span></td>
      <td>${renderCategoryPill(product.category)}</td>
      <td class="text-center">
        <span class="${product.stock === 0 ? 'text-danger' : (product.stock <= product.limit ? 'text-warning' : 'text-success')}" style="font-weight: 700;">
          ${statusText}
        </span>
      </td>
      <td class="text-right font-bold text-success">${CURRENCY}${product.price.toFixed(2)}</td>
      <td class="text-right text-muted">${CURRENCY}${(product.costPrice || 0).toFixed(2)}</td>
      <td class="text-right" style="padding-right: 20px;">
        <div class="card-actions" style="justify-content: flex-end; gap: 8px;">
          <button class="action-icon-btn restock-btn" onclick="openRestockModal('${product.id}')" title="Restock (log stock purchase / investment)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>
          </button>
          <button class="action-icon-btn edit-btn" onclick="openProductModal('${product.id}')" title="Edit Product">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="action-icon-btn delete-btn" onclick="deleteProduct('${product.id}')" title="Delete Product">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add these to window so standard inline onclick works correctly
window.openProductModal = openProductModal;
window.deleteProduct = deleteProduct;
window.openRestockModal = openRestockModal;

function openProductModal(productId = null) {
  DOM.productForm.reset();
  
  if (productId) {
    // Editing existing product
    const product = state.inventory.find(p => p.id === productId);
    if (!product) return;
    
    DOM.modalTitle.textContent = 'Edit Product Details';
    DOM.editProductId.value = product.id;
    DOM.prodName.value = product.name;
    DOM.prodCategory.value = product.category;
    DOM.prodBarcode.value = product.barcode;
    DOM.prodPrice.value = product.price;
    DOM.prodCostPrice.value = typeof product.costPrice === 'number' ? product.costPrice : '';
    DOM.prodStock.value = product.stock;
    DOM.prodLimit.value = product.limit;
    DOM.prodUnit.value = product.unit || '';
  } else {
    // Adding new product
    DOM.modalTitle.textContent = 'Add New Product';
    DOM.editProductId.value = '';
  }
  
  DOM.productModal.classList.add('active');
  setTimeout(() => DOM.prodName.focus(), 150);
}

function closeProductModal() {
  DOM.productModal.classList.remove('active');
}

function handleBarcodeGeneration() {
  // Generate EAN-13 structure: country prefix + manufacturer + product + check
  const randomSuffix = Math.floor(100000000 + Math.random() * 900000000).toString();
  DOM.prodBarcode.value = '500' + randomSuffix; // '500' is UK prefix, looks highly authentic
  showToast('Standard retail EAN-13 barcode generated.', 'success');
}

function handleProductFormSubmit(e) {
  e.preventDefault();
  
  const id = DOM.editProductId.value;
  const name = DOM.prodName.value.trim();
  const category = DOM.prodCategory.value;
  const barcode = DOM.prodBarcode.value.trim();
  const price = parseFloat(DOM.prodPrice.value);
  const costPriceRaw = DOM.prodCostPrice.value.trim();
  const costPrice = costPriceRaw === '' ? 0 : parseFloat(costPriceRaw);
  const stock = parseInt(DOM.prodStock.value);
  const limit = parseInt(DOM.prodLimit.value);
  const unit = DOM.prodUnit.value.trim();
  
  if (!name || !barcode || isNaN(price) || isNaN(stock) || isNaN(limit) || isNaN(costPrice)) {
    showToast('Please fill in all required inputs correctly.', 'danger');
    return;
  }
  
  // Check for duplicate barcode in OTHER products
  const barcodeConflict = state.inventory.find(p => p.barcode === barcode && p.id !== id);
  if (barcodeConflict) {
    showToast(`Barcode "${barcode}" is already registered to "${barcodeConflict.name}". Barcodes must be unique.`, 'danger');
    return;
  }
  
  if (id) {
    // Edit existing product
    const product = state.inventory.find(p => p.id === id);
    if (product) {
      product.name = name;
      product.category = category;
      product.barcode = barcode;
      product.price = price;
      product.costPrice = costPrice;
      product.stock = stock;
      product.limit = limit;
      product.unit = unit;
      showToast(`Product "${name}" updated successfully.`, 'success');
    }
  } else {
    // Add new product
    const newProduct = {
      id: Date.now().toString(),
      name,
      category,
      barcode,
      price,
      costPrice,
      stock,
      limit,
      unit
    };
    state.inventory.push(newProduct);

    // Log the initial stock as an investment/purchase record, so it shows up
    // in the Finance tab right away, instead of only counting future restocks.
    if (stock > 0 && costPrice > 0) {
      state.purchases.push({
        id: `PUR-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
        timestamp: new Date().toISOString(),
        productId: newProduct.id,
        productName: name,
        quantity: stock,
        costPerUnit: costPrice,
        totalCost: stock * costPrice,
        note: 'Initial stock'
      });
    }

    showToast(`New product "${name}" added to inventory.`, 'success');
  }
  
  saveState();
  closeProductModal();
  renderInventoryGrid();
  renderPresetSimulator(); // Keep register simulator matches synced!
}

function deleteProduct(productId) {
  const product = state.inventory.find(p => p.id === productId);
  if (!product) return;
  
  if (confirm(`Are you absolutely sure you want to delete "${product.name}" from the inventory register?`)) {
    // Also remove from active shopping cart if there
    state.cart = state.cart.filter(item => item.barcode !== product.barcode);
    
    state.inventory = state.inventory.filter(p => p.id !== productId);
    
    saveState();
    renderInventoryGrid();
    renderPresetSimulator();
    renderCart();
    showToast(`"${product.name}" deleted from register.`, 'warning');
  }
}

// ==========================================================================
// 6b. Restock Modal (logs stock purchases as investment records)
// ==========================================================================

function openRestockModal(productId) {
  const product = state.inventory.find(p => p.id === productId);
  if (!product) return;

  DOM.restockForm.reset();
  DOM.restockProductId.value = product.id;
  DOM.restockProductName.textContent = `${product.name}${product.unit ? ` (${product.unit})` : ''}`;
  DOM.restockCostPerUnit.value = typeof product.costPrice === 'number' && product.costPrice > 0 ? product.costPrice : '';
  DOM.restockQty.value = '';
  updateRestockTotalCost();

  DOM.restockModal.classList.add('active');
  setTimeout(() => DOM.restockQty.focus(), 150);
}

function closeRestockModal() {
  DOM.restockModal.classList.remove('active');
}

function updateRestockTotalCost() {
  const qty = parseFloat(DOM.restockQty.value) || 0;
  const cost = parseFloat(DOM.restockCostPerUnit.value) || 0;
  DOM.restockTotalCost.textContent = `${CURRENCY}${(qty * cost).toFixed(2)}`;
}

function handleRestockFormSubmit(e) {
  e.preventDefault();

  const productId = DOM.restockProductId.value;
  const product = state.inventory.find(p => p.id === productId);
  if (!product) {
    closeRestockModal();
    return;
  }

  const qty = parseInt(DOM.restockQty.value);
  const costPerUnit = parseFloat(DOM.restockCostPerUnit.value);

  if (isNaN(qty) || qty <= 0 || isNaN(costPerUnit) || costPerUnit < 0) {
    showToast('Please enter a valid quantity and cost per unit.', 'danger');
    return;
  }

  // Increase stock and remember this as the product's latest purchase cost
  product.stock += qty;
  product.costPrice = costPerUnit;

  // Log the purchase as an investment record
  state.purchases.push({
    id: `PUR-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
    timestamp: new Date().toISOString(),
    productId: product.id,
    productName: product.name,
    quantity: qty,
    costPerUnit: costPerUnit,
    totalCost: qty * costPerUnit,
    note: 'Restock'
  });

  saveState();
  closeRestockModal();
  renderInventoryGrid();
  renderPresetSimulator();
  showToast(`Restocked ${qty}x "${product.name}" for ${CURRENCY}${(qty * costPerUnit).toFixed(2)}.`, 'success');
}

// ==========================================================================
// 7. Dashboard Computations & SVG Chart Rendering
// ==========================================================================

function renderDashboard() {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  
  let revenueToday = 0;
  let txTodayCount = 0;
  let cashTotal = 0;
  let cardTotal = 0;
  
  const todayTransactions = state.transactions.filter(tx => {
    const txDate = new Date(tx.timestamp);
    return txDate >= todayStart;
  });
  
  txTodayCount = todayTransactions.length;
  
  todayTransactions.forEach(tx => {
    revenueToday += tx.total;
    if (tx.paymentMethod === 'Cash') {
      cashTotal += tx.total;
    } else {
      cardTotal += tx.total;
    }
  });
  
  // Update Overview statistics card values
  DOM.statRevenue.textContent = `${CURRENCY}${revenueToday.toFixed(2)}`;
  DOM.statTransactions.textContent = txTodayCount;
  
  // Payment split display
  if (revenueToday === 0) {
    DOM.statSplit.textContent = '0% Cash / 0% Card';
  } else {
    const cashPct = Math.round((cashTotal / revenueToday) * 100);
    const cardPct = 100 - cashPct;
    DOM.statSplit.textContent = `${cashPct}% Cash / ${cardPct}% Card`;
  }
  DOM.statSplitDetails.textContent = `Cash: ${CURRENCY}${cashTotal.toFixed(2)} | Card: ${CURRENCY}${cardTotal.toFixed(2)}`;
  
  // Low Stock alerting calculation
  const lowStockProducts = state.inventory.filter(p => p.stock <= p.limit);
  DOM.statLowStock.textContent = lowStockProducts.length;
  
  if (lowStockProducts.length > 0) {
    DOM.statStockAlertCard.classList.add('active-alert');
    DOM.statStockAlertCard.style.cursor = 'pointer';
    // Clicking takes user to inventory filtered by low stock
    DOM.statStockAlertCard.onclick = () => {
      window.location.hash = '#inventory';
      DOM.inventoryFilterStock.value = 'low';
      renderInventoryGrid();
    };
  } else {
    DOM.statStockAlertCard.classList.remove('active-alert');
    DOM.statStockAlertCard.style.cursor = 'default';
    DOM.statStockAlertCard.onclick = null;
  }
  
  // Products Sold Today Aggregation table rendering
  renderProductsSoldTodayTable(todayTransactions);
  
  // SVG Hourly Sales Trend Chart rendering
  renderSvgHourlySalesChart(todayTransactions);
}

function renderProductsSoldTodayTable(transactions) {
  const container = DOM.soldTodayList;
  container.innerHTML = '';
  
  const soldProducts = {}; // key: barcode, val: { name, quantity, revenue }
  
  transactions.forEach(tx => {
    tx.items.forEach(item => {
      if (soldProducts[item.barcode]) {
        soldProducts[item.barcode].quantity += item.quantity;
        soldProducts[item.barcode].revenue += item.total;
      } else {
        soldProducts[item.barcode] = {
          name: item.name,
          quantity: item.quantity,
          revenue: item.total
        };
      }
    });
  });
  
  const soldArray = Object.values(soldProducts).sort((a, b) => b.quantity - a.quantity);
  
  if (soldArray.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="3" class="text-center text-muted py-4">No products sold today. Run checkouts to populate dashboard metrics.</td>
      </tr>
    `;
    return;
  }
  
  soldArray.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-bold">${escapeHtml(item.name)}</td>
      <td class="text-right font-bold">${item.quantity}</td>
      <td class="text-right text-success font-bold">${CURRENCY}${item.revenue.toFixed(2)}</td>
    `;
    container.appendChild(tr);
  });
}

function renderSvgHourlySalesChart(transactions) {
  const barsGroup = DOM.chartBarsGroup;
  const labelsGroup = DOM.chartXLabelsGroup;
  
  barsGroup.innerHTML = '';
  labelsGroup.innerHTML = '';
  
  // Define time slots for the bar chart: 9am to 8pm
  const hoursConfig = [
    { label: '09:00', start: 9, end: 10, total: 0 },
    { label: '10:00', start: 10, end: 11, total: 0 },
    { label: '11:00', start: 11, end: 12, total: 0 },
    { label: '12:00', start: 12, end: 13, total: 0 },
    { label: '13:00', start: 13, end: 14, total: 0 },
    { label: '14:00', start: 14, end: 15, total: 0 },
    { label: '15:00', start: 15, end: 16, total: 0 },
    { label: '16:00', start: 16, end: 17, total: 0 },
    { label: '17:00', start: 17, end: 18, total: 0 },
    { label: '18:00', start: 18, end: 19, total: 0 },
    { label: '19:00', start: 19, end: 20, total: 0 },
    { label: '20:00', start: 20, end: 21, total: 0 }
  ];
  
  // Allocate transactions to hourly slots
  transactions.forEach(tx => {
    const txTime = new Date(tx.timestamp);
    const txHour = txTime.getHours();
    
    const slot = hoursConfig.find(h => txHour >= h.start && txHour < h.end);
    if (slot) {
      slot.total += tx.total;
    }
  });
  
  // Find max total to scale the chart dynamically
  const maxTotal = Math.max(10, ...hoursConfig.map(h => h.total));
  
  // Defs block for gradient stroke support
  barsGroup.innerHTML = `
    <defs>
      <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="var(--color-accent)"/>
        <stop offset="100%" stop-color="var(--color-primary)"/>
      </linearGradient>
    </defs>
  `;
  
  // Chart dimensions in SVG coordinates: width 500, height 200
  // Left margin 40, Right margin 20 (content width 440)
  // Bottom line at Y = 170. Top line at Y = 20. Bar height space = 150
  
  const chartWidth = 440;
  const startX = 45;
  const bottomY = 170;
  const maxBarHeight = 140;
  
  const slotCount = hoursConfig.length;
  const slotWidth = chartWidth / slotCount;
  const barWidth = Math.min(22, slotWidth * 0.6);
  
  hoursConfig.forEach((slot, index) => {
    const centerX = startX + (index * slotWidth) + (slotWidth / 2);
    const barX = centerX - (barWidth / 2);
    
    // Scale bar height based on transactions
    const barHeight = Math.round((slot.total / maxTotal) * maxBarHeight);
    const barY = bottomY - barHeight;
    
    // 1. Draw glowing bar
    if (barHeight > 0) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', barX);
      rect.setAttribute('y', barY);
      rect.setAttribute('width', barWidth);
      rect.setAttribute('height', barHeight);
      rect.setAttribute('class', 'chart-bar');
      
      // Floating title on hover
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = `${slot.label} Sales: ${CURRENCY}${slot.total.toFixed(2)}`;
      rect.appendChild(title);
      
      barsGroup.appendChild(rect);
    }
    
    // 2. Add X-Axis hourly label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', centerX);
    text.setAttribute('y', 188);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'chart-text');
    text.textContent = slot.label.split(':')[0] + 'h'; // shorten label to '9h', '10h'
    labelsGroup.appendChild(text);
  });
}

// ==========================================================================
// 7b. Finance & Profit Tracking (Investment / Revenue / Profit)
// ==========================================================================

function getSelectedFinancePeriod() {
  const activeTab = document.querySelector('.period-tab.active');
  return activeTab ? activeTab.dataset.period : 'day';
}

// Returns a grouping key for a given date, based on granularity ('day' | 'month' | 'year')
function getPeriodKey(date, granularity) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (granularity === 'year') return `${year}`;
  if (granularity === 'month') return `${year}-${month}`;
  return `${year}-${month}-${day}`;
}

function formatPeriodKeyLabel(key, granularity) {
  if (granularity === 'year') return key;
  if (granularity === 'month') {
    const [y, m] = key.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(m) - 1]} ${y}`;
  }
  // day: key is YYYY-MM-DD -> DD/MM/YYYY
  const [y, m, d] = key.split('-');
  return `${d}/${m}/${y}`;
}

// Aggregates all purchases (investment) & transactions (revenue/profit) into
// per-period buckets. Returns a Map sorted from most recent to oldest.
function aggregateFinanceByPeriod(granularity) {
  const buckets = new Map(); // key -> { invested, revenue, cost, profit }

  function ensureBucket(key) {
    if (!buckets.has(key)) {
      buckets.set(key, { invested: 0, revenue: 0, cost: 0, profit: 0 });
    }
    return buckets.get(key);
  }

  state.purchases.forEach(purchase => {
    const key = getPeriodKey(new Date(purchase.timestamp), granularity);
    const bucket = ensureBucket(key);
    bucket.invested += purchase.totalCost;
  });

  state.transactions.forEach(tx => {
    const key = getPeriodKey(new Date(tx.timestamp), granularity);
    const bucket = ensureBucket(key);
    bucket.revenue += tx.total;
    // Older transactions recorded before cost tracking was added won't have
    // costTotal/profitTotal - in that case we simply can't know their cost.
    const cost = typeof tx.costTotal === 'number' ? tx.costTotal : 0;
    const profit = typeof tx.profitTotal === 'number' ? tx.profitTotal : tx.total;
    bucket.cost += cost;
    bucket.profit += profit;
  });

  // Sort keys descending (most recent period first)
  const sortedKeys = Array.from(buckets.keys()).sort().reverse();
  const sortedMap = new Map();
  sortedKeys.forEach(key => sortedMap.set(key, buckets.get(key)));
  return sortedMap;
}

function renderFinance() {
  const granularity = getSelectedFinancePeriod();
  const buckets = aggregateFinanceByPeriod(granularity);

  // Overall totals across everything currently recorded
  let totalInvested = 0;
  let totalRevenue = 0;
  let totalProfit = 0;

  buckets.forEach(bucket => {
    totalInvested += bucket.invested;
    totalRevenue += bucket.revenue;
    totalProfit += bucket.profit;
  });

  DOM.financeStatInvested.textContent = `${CURRENCY}${totalInvested.toFixed(2)}`;
  DOM.financeStatRevenue.textContent = `${CURRENCY}${totalRevenue.toFixed(2)}`;
  DOM.financeStatProfit.textContent = `${CURRENCY}${totalProfit.toFixed(2)}`;

  const margin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;
  DOM.financeStatMargin.textContent = `${margin.toFixed(1)}%`;

  // Update the breakdown table header label to match granularity
  const headerLabels = { day: 'Day', month: 'Month', year: 'Year' };
  DOM.financeBreakdownHeaderLabel.textContent = headerLabels[granularity] || 'Period';

  // Render breakdown rows
  const tbody = DOM.financeBreakdownTbody;
  tbody.innerHTML = '';

  if (buckets.size === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-5">No financial activity recorded yet. Restock products and complete sales to see data here.</td>
      </tr>
    `;
    return;
  }

  buckets.forEach((bucket, key) => {
    const bucketMargin = bucket.revenue > 0 ? (bucket.profit / bucket.revenue) * 100 : 0;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700; color: #fff;">${formatPeriodKeyLabel(key, granularity)}</td>
      <td class="text-right text-warning">${CURRENCY}${bucket.invested.toFixed(2)}</td>
      <td class="text-right text-success">${CURRENCY}${bucket.revenue.toFixed(2)}</td>
      <td class="text-right ${bucket.profit >= 0 ? 'text-success' : 'text-danger'}" style="font-weight: 700;">${CURRENCY}${bucket.profit.toFixed(2)}</td>
      <td class="text-right text-muted">${bucketMargin.toFixed(1)}%</td>
    `;
    tbody.appendChild(tr);
  });
}

// ---- Export & Backup ----

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Exports a day-by-day financial ledger as a CSV file that opens directly in
// Excel / Google Sheets / Numbers - this file lives on the device's disk, so
// it survives even if the app's local storage is ever cleared or reset.
function exportFinanceCsv() {
  const buckets = aggregateFinanceByPeriod('day');

  if (buckets.size === 0) {
    showToast('No financial data to export yet.', 'warning');
    return;
  }

  const rows = [['Date', 'Invested (Stock Purchases)', 'Revenue (Sales)', 'Profit', 'Profit Margin %']];

  // Export oldest -> newest for a natural reading ledger
  const keys = Array.from(buckets.keys()).sort();
  keys.forEach(key => {
    const bucket = buckets.get(key);
    const margin = bucket.revenue > 0 ? (bucket.profit / bucket.revenue) * 100 : 0;
    rows.push([
      formatPeriodKeyLabel(key, 'day'),
      bucket.invested.toFixed(2),
      bucket.revenue.toFixed(2),
      bucket.profit.toFixed(2),
      margin.toFixed(1)
    ]);
  });

  const csvContent = rows.map(row => row.map(csvEscape).join(',')).join('\n');
  const dateStamp = new Date().toISOString().slice(0, 10);
  downloadFile(`spiti-finance-report-${dateStamp}.csv`, csvContent, 'text/csv;charset=utf-8;');
  showToast('Finance report exported. Open it with Excel, Numbers, or Google Sheets.', 'success');
}

// Exports every product currently in Inventory (barcode, name, category,
// price, unit, stock, limit, cost price) as a CSV file. This is the file to
// send back to Claude later if you want your real inventory turned into the
// app's new permanent default catalog - it has every field needed to rebuild
// the product list exactly.
function exportInventoryCsv() {
  if (!state.inventory || state.inventory.length === 0) {
    showToast('No inventory data to export yet.', 'warning');
    return;
  }

  const rows = [['ID', 'Barcode', 'Name', 'Category', 'Price', 'Unit', 'Stock', 'Low Stock Limit', 'Cost Price']];

  state.inventory.forEach(p => {
    rows.push([
      p.id != null ? p.id : '',
      p.barcode || '',
      p.name || '',
      p.category || '',
      typeof p.price === 'number' ? p.price.toFixed(2) : '',
      p.unit || '',
      typeof p.stock === 'number' ? p.stock : '',
      typeof p.limit === 'number' ? p.limit : '',
      typeof p.costPrice === 'number' ? p.costPrice.toFixed(2) : ''
    ]);
  });

  const csvContent = rows.map(row => row.map(csvEscape).join(',')).join('\n');
  const dateStamp = new Date().toISOString().slice(0, 10);
  downloadFile(`spiti-inventory-${dateStamp}.csv`, csvContent, 'text/csv;charset=utf-8;');
  showToast('Inventory exported. Open it with Excel, Numbers, or Google Sheets.', 'success');
}

// Exports every individual sale (one row per item sold) with date/time,
// transaction ID, payment method, quantity, price, and profit. This is the
// detailed day-by-day transaction log, as opposed to the aggregated summary
// in the Finance CSV export above.
function exportTransactionsCsv() {
  if (!state.transactions || state.transactions.length === 0) {
    showToast('No transactions to export yet.', 'warning');
    return;
  }

  const rows = [[
    'Date/Time', 'Transaction ID', 'Payment Method', 'Product Barcode', 'Product Name',
    'Quantity', 'Unit Price', 'Line Total', 'Line Cost', 'Line Profit'
  ]];

  // Oldest -> newest for a natural reading ledger
  const sorted = [...state.transactions].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  sorted.forEach(tx => {
    const when = formatDate(new Date(tx.timestamp));
    (tx.items || []).forEach(item => {
      const lineProfit = (item.total || 0) - (item.costTotal || 0);
      rows.push([
        when,
        tx.id || '',
        tx.paymentMethod || '',
        item.barcode || '',
        item.name || '',
        item.quantity != null ? item.quantity : '',
        typeof item.price === 'number' ? item.price.toFixed(2) : '',
        typeof item.total === 'number' ? item.total.toFixed(2) : '',
        typeof item.costTotal === 'number' ? item.costTotal.toFixed(2) : '',
        lineProfit.toFixed(2)
      ]);
    });
  });

  const csvContent = rows.map(row => row.map(csvEscape).join(',')).join('\n');
  const dateStamp = new Date().toISOString().slice(0, 10);
  downloadFile(`spiti-transactions-${dateStamp}.csv`, csvContent, 'text/csv;charset=utf-8;');
  showToast('Transactions exported. Open it with Excel, Numbers, or Google Sheets.', 'success');
}


// backup file the owner can save anywhere on the device (cloud drive, email,
// USB stick, etc). This is the safety net: even if the app / browser storage
// is wiped, cleared, or the app is reinstalled, this file can restore everything.
function exportFullBackup() {
  const backup = {
    type: 'spiti-pos-backup',
    version: 1,
    exportedAt: new Date().toISOString(),
    inventory: state.inventory,
    transactions: state.transactions,
    purchases: state.purchases
  };

  const dateStamp = new Date().toISOString().slice(0, 10);
  downloadFile(`spiti-pos-backup-${dateStamp}.json`, JSON.stringify(backup, null, 2), 'application/json');
  showToast('Full data backup downloaded. Keep this file somewhere safe.', 'success');
}

function handleImportBackupFile(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);

      if (!data || !Array.isArray(data.inventory) || !Array.isArray(data.transactions)) {
        showToast('This file does not look like a valid Spiti POS backup.', 'danger');
        return;
      }

      if (!confirm('Restoring this backup will REPLACE all current inventory, transactions, and purchase records on this device. Continue?')) {
        return;
      }

      state.inventory = data.inventory;
      state.transactions = data.transactions;
      state.purchases = Array.isArray(data.purchases) ? data.purchases : [];

      saveState();
      renderInventoryGrid();
      renderPresetSimulator();
      renderTransactionsList();
      renderDashboard();
      renderFinance();

      showToast('Backup restored successfully.', 'success');
    } catch (err) {
      console.error('Error restoring backup:', err);
      showToast('Failed to read backup file. It may be corrupted.', 'danger');
    } finally {
      // Reset the file input so the same file can be re-selected later if needed
      e.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// 8. Utility & Notification Functions
// ==========================================================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
  } else if (type === 'warning') {
    iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  } else if (type === 'danger') {
    iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
  }
  
  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-message">${escapeHtml(message)}</div>
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  // Animate Entrance
  setTimeout(() => toast.classList.add('show'), 50);
  
  // Auto dismiss
  setTimeout(() => {
    toast.classList.remove('show');
    // Remove from DOM when fade complete
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registered successfully, scope:', reg.scope);
        })
        .catch((err) => {
          console.error('[PWA] Service Worker registration failed:', err);
        });
    });
  }
}

// Kickoff
window.addEventListener('DOMContentLoaded', init);

