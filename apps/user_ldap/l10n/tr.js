OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Eşleştirmeler temizlenemedi.",
    "Failed to delete the server configuration" : "Sunucu yapılandırması silinemedi",
    "Invalid configuration: Anonymous binding is not allowed." : "Yapılandırma geçersiz: Adsız bağlantı kurulmasına izin verilmiyor.",
    "Valid configuration, connection established!" : "Yapılandırma geçerli, bağlantı kuruldu.",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Yapılandırma geçerli ancak bağlantı kurulamadı. Lütfen sunucu ayarları ve kimlik doğrulama bilgilerini denetleyin.",
    "Invalid configuration. Please have a look at the logs for further details." : "Yapılandırma geçersiz. Lütfen ayrıntılı bilgi almak için günlük dosyasına bakın.",
    "No action specified" : "Hehrangi bir işlem belirtilmemiş",
    "No configuration specified" : "Henüz bir yapılandırma belirtilmemiş",
    "No data specified" : "Henüz bir veri belirtilmemiş",
    "Invalid data specified" : "Belirtilen veriler geçersiz",
    " Could not set configuration %s" : "%s yapılandırması ayarlanamadı",
    "Action does not exist" : "İşlem bulunamadı",
    "Renewing …" : "Yenileniyor …",
    "Very weak password" : "Parola çok zayıf",
    "Weak password" : "Parola zayıf",
    "So-so password" : "Parola idare eder",
    "Good password" : "Parola iyi",
    "Strong password" : "Parola güçlü",
    "The Base DN appears to be wrong" : "Base DN yanlış gibi görünüyor",
    "Testing configuration…" : "Yapılandırma sınanıyor …",
    "Configuration incorrect" : "Yapılandırma yanlış",
    "Configuration incomplete" : "Yapılandırma tamamlanmamış",
    "Configuration OK" : "Yapılandırma tamamlanmış",
    "Select groups" : "Grupları seçin",
    "Select object classes" : "Nesne sınıflarını seçin",
    "Please check the credentials, they seem to be wrong." : "Lütfen kimlik doğrulama bilgilerini denetleyin, yanlış görünüyor.",
    "Please specify the port, it could not be auto-detected." : "Lütfen bağlantı noktasını belirtin. Otomatik olarak algılanamadı.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN otomatik olarak algılanamadı. Lütfen kimlik doğrulama bilgilerini, sunucu ve bağlantı noktasını gözden geçirin.",
    "Could not detect Base DN, please enter it manually." : "Base DN algılanamadı. Lütfen el ile yazın.",
    "{nthServer}. Server" : "{nthServer}. Sunucu",
    "No object found in the given Base DN. Please revise." : "Belirtilen Base DN içerisinde herhangi bir nesne bulunamadı. Lütfen gözden geçirin.",
    "More than 1,000 directory entries available." : "Kullanılabilecek dizin sayısı 1000 üzerinde.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["Belirtilen Base DN üzerinde {objectsFound} kayıt var","Belirtilen Base DN üzerinde {objectsFound} kayıt var"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Bir sorun çıktı. Lütfen Base DN ile birlikte bağlantı ayarlarını ve kimlik doğrulama bilgilerini denetleyin.",
    "Do you really want to delete the current Server Configuration?" : "Geçerli sunucu yapılandırmasını silmek istediğinize emin misiniz?",
    "Confirm Deletion" : "Silmeyi onaylıyorum",
    "Mappings cleared successfully!" : "Eşleştirmeler temizlendi!",
    "Error while clearing the mappings." : "Eşleştirmeler temizlenirken sorun çıktı.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonim atamaya izin verilmiyor. Lütfen bir Kullanıcı DN ve parola belirtin.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP işleminde sorun çıktı. Anonim bağlamaya izin verilmiyor.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Kaydedilemedi. Veri tabanının çalışıyor olduğundan emin olun. İlerlemeden önce yeniden yükleyin.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Kipi değiştirmek otomatik LDAP sorgularını etkinleştirir. LDAP sisteminizin boyutlarına göre bu işlem uzun sürebilir. Kipi yine de değiştirmek istiyor musunuz?",
    "Mode switch" : "Kip değişimi",
    "Select attributes" : "Öznitelikleri seçin",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Kullanıcı bulunamadı. Lütfen oturum açma özniteliklerini ve kullanıcı adını denetleyin. Etkin süzgeç (komut satırı doğrulamasında kullanmak için kopyalayıp yapıştırın): <br/>",
    "User found and settings verified." : "Kullanıcı bulundu ve ayarlar doğrulandı.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Çok sayıda kullanıcı bulunduğundan ve yalnızca birinci kullanıcı oturum açabileceğinden arama ölçütlerinizi sıkılaştırmayı deneyin.",
    "An unspecified error occurred. Please check log and settings." : "Bilinmeyen bir sorun çıktı. Lütfen günlüğü ve ayarları denetleyin.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Arama süzgeci, açılmış ve kapatılmış parantez sayılarının eşit olmaması gibi bir söz dizimi sorunu nedeniyle geçersiz. Lütfen gözden geçirin.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Bir LDAP/AD bağlantı sorunu çıktı. Lütfen istemci, bağlantı noktası ve kimlik doğrulama bilgilerini denetleyin.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "LDAP/AD sorgularında kullanıcı adı ile değiştirilecek \"%uid\" yer belirleyicisi eksik. ",
    "Please provide a login name to test against" : "Lütfen deneme için kullanılacak bir kullanıcı adı yazın",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "LDAP/AD sunucusu memberOf parametresini desteklemediğinden grup kutusu devre dışı.",
    "Password change rejected. Hint: " : "Parola değişimi reddedildi. İpucu:",
    "Please login with the new password" : "Lütfen yeni parolanız ile oturum açın",
    "LDAP User backend" : "LDAP kullanıcı arka yüzü",
    "Your password will expire tomorrow." : "Parolanızın geçerlilik süresi yarın dolacak.",
    "Your password will expire today." : "Parolanızın geçerlilik süresi bugün dolacak.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Parolanızın süresi %n gün içinde dolacak.","Parolanızın geçerlilik süresi %n gün içinde dolacak."],
    "LDAP/AD integration" : "LDAP/AD bütünleştirmesi",
    "Invalid LDAP UUIDs" : "LDAP UUID değerleri geçersiz",
    "None found" : "Herhangi bir şey bulunamadı",
    "_%n group found_::_%n groups found_" : ["%n grup bulundu","%n grup bulundu"],
    "> 1000 groups found" : "> 1000 grup bulundu",
    "> 1000 users found" : "> 1000 kullanıcı bulundu",
    "_%n user found_::_%n users found_" : ["%n kullanıcı bulundu","%n kullanıcı bulundu"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Görüntülenecek kullanıcı adı özniteliği algılanamadı. Lütfen gelişmiş LDAP ayarları bölümünden siz belirtin.",
    "Could not find the desired feature" : "İstenilen özellik bulunamadı",
    "Invalid Host" : "Sunucu geçersiz",
    "LDAP user and group backend" : "LDAP kullanıcı ve grup arka yüzü",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Bu uygulama BT yöneticilerinin Nextcloud sunucusu ile bir LDAP temelli kullanıcı dizini arasında bağlantı kurmasını sağlar.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Bu uygulama, yöneticilerin kimlik doğrulamak, kullanıcı ve grup oluşturmak ve kullanıcı öznitelikleri atamak için Nextcloud sunucusu ile LDAP temelli bir kullanıcı dizini arasında bağlantı kurmasını sağlar. Yöneticiler LDAP arayüzünden bu uygulamayı birden fazla LDAP dizini ya da Aktif Dizine bağlanacak şekilde yapılandırabilir. Kullanıcı kotası, e-posta, avatar görselleri, grup üyelikleri gibi kullanıcı öznitelikleri uygun sorgu ve süzgeçler kullanılarak dizin üzerinden Nextcloud üzerine çekilebilir.\n\nKullanıcılar Nextcloud oturumunu açmak için LDAP ya da AD kimlik doğrulama bilgilerini kullanır ve LDAP ya da AD sunucusunun vereceği onay ve izinlere göre erişim iznine sahip olur. Nextcloud üzerinde LDAP ya da AD parolaları depolanmaz. Bunun yerine bir kullanıcının kimliğini doğrulamak için kimlik doğrulama bilgileri kullanılır ve Nextcloud kullanıcı kimliği için bir oturum kullanır. Ayrıntılı bilgi almak için LDAP Kullanıcı ve Grup Arka Yüzü belgelerine bakabilirsiniz.",
    "Test Configuration" : "Yapılandırmayı sına",
    "Help" : "Yardım",
    "Groups meeting these criteria are available in %s:" : "%s içinde bu ölçüte uygun gruplar var:",
    "Only these object classes:" : "Yalnızca şu nesne sınıflarına:",
    "Only from these groups:" : "Yalnızca şu gruplardan:",
    "Search groups" : "Grup arama",
    "Available groups" : "Kullanılabilecek gruplar",
    "Selected groups" : "Seçilmiş gruplar",
    "Edit LDAP Query" : "LDAP sorgusunu düzenle",
    "LDAP Filter:" : "LDAP süzgeci:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Süzgeçte %s kopyasına erişebilecek LDAP grupları belirtilir.",
    "Verify settings and count the groups" : "Ayarları doğrula ve grupları say",
    "When logging in, %s will find the user based on the following attributes:" : "Oturum açılırken, %s, aşağıdaki özniteliklere bağlı kullanıcıyı bulur:",
    "LDAP/AD Username:" : "LDAP/AD kullanıcı adı:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "LDAP/AD kullanıcı adı ile oturum açılmasını sağlar. Kullanıcı adı \"uid\" ya da \"sAMAccountName\" olabilir ve algılanır.",
    "LDAP/AD Email Address:" : "LDAP/AD e-posta adresi:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "E-posta adresi ile oturum açılmasını sağlar. \"mail\" ve \"mailPrimaryAddress\" kullanılabilir.",
    "Other Attributes:" : "Diğer öznitelikler:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Oturum açma girişiminde uygulanacak süzgeci tanımlar. Oturum açma işleminde \"%%uid\" kullanıcı adı ile değiştirilir. Örnek: \"uid=%%uid\"",
    "Test Loginname" : "Kullanıcı adını sına",
    "Attempts to receive a DN for the given loginname and the current login filter" : "Belirtilen oturum açma adı ve geçerli oturum açma süzgeci için bir etki alanı adı almayı dener",
    "Verify settings" : "Ayarları doğrula",
    "%s. Server:" : "%s. sunucu:",
    "Add a new configuration" : "Yeni bir yapılandırma ekle",
    "Copy current configuration into new directory binding" : "Geçerli yapılandırmayı yeni dizin bağlamasına kopyala",
    "Delete the current configuration" : "Geçerli yapılandırmayı sil",
    "Host" : "Sunucu",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "SSL gerekmiyorsa iletişim kuralı belirtilmeyebilir. Gerekiyorsa ldaps:// ile başlayın",
    "Port" : "Bağlantı noktası",
    "Detect Port" : "Bağlantı noktasını algıla",
    "User DN" : "Kullanıcı DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Yapılacak bağlama için iİstemci kullanıcısının DN değeri. Örnek: uid=agent,dc=ornek,dc=com. Anonim erişim için DN ve Parolayı boş bırakın.",
    "Password" : "Parola",
    "For anonymous access, leave DN and Password empty." : "Anonim erişim için DN ve parolayı boş bırakın.",
    "Save Credentials" : "Kimlik doğrulama bilgilerini kaydet",
    "One Base DN per line" : "Her satıra bir Base DN yazın",
    "You can specify Base DN for users and groups in the Advanced tab" : "Gelişmiş sekmesinde, kullanıcı ve gruplar için Base DN belirtilebilir",
    "Detect Base DN" : "Base DN algıla",
    "Test Base DN" : "Base DN sına",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Otomatik LDAP isteklerinden kaçınılsın. Büyük kurulumlar için daha iyidir ancak LDAP bilgisi gerektirir.",
    "Manually enter LDAP filters (recommended for large directories)" : "LDAP süzgeçlerini el ile yazın (büyük dizinler için önerilir)",
    "Listing and searching for users is constrained by these criteria:" : "Kullanıcı listeleme ve arama şu ölçütü göre kısıtlanmış:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Kullanıcılar için ortak olarak en çok organizationalPerson, person, user ve inetOrgPerson nesne sınıfları kullanılır. Hangi nesne sınıfını seçeceğinizden emin değilseniz lütfen dizin yöneticinize danışın.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Süzgeç, %s kopyasına erişmesi gereken LDAP kullanıcılarını belirtir.",
    "Verify settings and count users" : "Ayarları doğrula ve kullanıcıları say",
    "Saving" : "Kaydediliyor",
    "Back" : "Geri",
    "Continue" : "Sürdür",
    "Please renew your password." : "Lütfen parolanızı yenileyin.",
    "An internal error occurred." : "İçeride bir sorun çıktı.",
    "Please try again or contact your administrator." : "Lütfen yeniden deneyin ya da yöneticinizle görüşün.",
    "Current password" : "Geçerli parola",
    "New password" : "Yeni parola",
    "Renew password" : "Parolayı yenile",
    "Wrong password." : "Parola yanlış.",
    "Cancel" : "İptal",
    "Server" : "Sunucu",
    "Users" : "Kullanıcılar",
    "Login Attributes" : "Oturum Açma Öznitelikleri",
    "Groups" : "Gruplar",
    "Expert" : "Uzman",
    "Advanced" : "Gelişmiş",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Uyarı:</b> PHP LDAP modülü kurulmamış, arka uç çalışmayacak. Lütfen kurması için BT yöneticinizle görüşün.",
    "Connection Settings" : "Bağlantı Ayarları",
    "Configuration Active" : "Yapılandırma Etkin",
    "When unchecked, this configuration will be skipped." : "Bu seçenek işaretli değilse, bu yapılandırma atlanır.",
    "Backup (Replica) Host" : "Yedek (Replika) Sunucu",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "İsteğe bağlı olarak bir yedekleme sunucusu belirtin. Ana LDAP/AD sunucusunun kopyası olmalıdır.",
    "Backup (Replica) Port" : "Yedek (Replika) bağlantı noktası",
    "Disable Main Server" : "Ana Sunucuyu Devre Dışı Bırak",
    "Only connect to the replica server." : "Yalnızca yedek sunucu ile bağlantı kurulsun.",
    "Turn off SSL certificate validation." : "SSL sertifika doğrulaması kullanılmasın.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Önerilmez, yalnızca deneme amacıyla kullanın! Bağlantı yalnız bu seçenek etkinleştirildiğinde çalışıyorsa LDAP sunucusunun SSL sertifikasını %s sunucuzun içine aktarın.",
    "Cache Time-To-Live" : "Ön Bellek Time-To-Live Değeri",
    "in seconds. A change empties the cache." : "saniye cinsinden. Değişiklik ön belleği temizler.",
    "Directory Settings" : "Dizin Ayarları",
    "User Display Name Field" : "Görüntülenecek Kullanıcı Adı Alanı",
    "The LDAP attribute to use to generate the user's display name." : "Görüntülenecek kullanıcı adını üretmek için kullanılacak LDAP özniteliği.",
    "2nd User Display Name Field" : "2. Görüntülenecek Kullanıcı Adı Alanı",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "İsteğe bağlı. Görüntülenecek ada parantez içinde eklenecek LDAP özniteliği. Örnek sonuç: »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Temel Kullanıcı Ağacı",
    "One User Base DN per line" : "Her Satıra Bir Kullanıcı Base DN",
    "User Search Attributes" : "Kullanıcı arama öznitelikleri",
    "Optional; one attribute per line" : "İsteğe bağlı; her satıra bir öznitelik",
    "Disable users missing from LDAP" : "LDAP üzerinde bulunmayan kullanıcılar devre dışı bırakılsın",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "Bu seçenek etkinleştirildiğinde, LDAP üzerinden içe aktarılmış ancak daha sonra kaybolmuş kullanıcılar devre dışı bırakılır",
    "Group Display Name Field" : "Görüntülenecek Grup Adı Alanı",
    "The LDAP attribute to use to generate the groups's display name." : "Görüntülenecek grup adını üretmek için kullanılacak LDAP özniteliği.",
    "Base Group Tree" : "Temel Grup Ağacı",
    "One Group Base DN per line" : "Her Satıra Bir Grup Base DN",
    "Group Search Attributes" : "Grup Arama Öznitelikleri",
    "Group-Member association" : "Grup-Üye İlişkisi",
    "Dynamic Group Member URL" : "Devingen Grup Üye Adresi",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Bu grup nesneleri üzerindeki LDAP özniteliği, grupa hangi nesnelerin ait olduğunu bulan bir LDAP arama adresi içeriyor (Seçenek boş bırakıldığında dinamik grup üyeliği özelliği devre dışı kalır).",
    "Nested Groups" : "İç İçe Gruplar",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Bu seçenek etkinleştirildiğinde, gruplar içinde gruplar desteklenir (Yalnızca grup üyesi özniteliği DN içeriyorsa çalışır).",
    "Paging chunksize" : "Sayfalandırma yığın boyutu",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Yığın boyutu, kullanıcı ya da grup listeleri gibi, çok sayıda sonuç verebilen sayfalandırılmış LDAP aramaları için kullanılır (0 olarak ayarlandığında bu durumlarda sayfalandırılmış LDAP aramaları devre dışı kalır).",
    "Enable LDAP password changes per user" : "Kullanıcılar LDAP parolalarını değiştirebilsin",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : " Bu seçenek etkinleştirildiğinde, LDAP kullanıcıları kendi parolalarını değiştirebilir ve Süper Yöneticiler ile Grup Yöneticileri kendi LDAP kullanıcılarının parolalarını değiştirebilir. Yalnızca erişim denetimi ilkeleri LDAP sunucuya uygun olarak yapılandırılmış ise çalışır. Parolalar LDAP sunucuya düz metin biçiminde aktarıldığından, LDAP sunucu üzerinde aktarım şifrelemesi ve parola karması kullanılmalıdır.",
    "(New password is sent as plain text to LDAP)" : "(Yeni parola LDAP üzerine düz metin olarak gönderildi)",
    "Default password policy DN" : "Varsayılan parola ilkesi DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Parola geçerlilik süresinin sona erme işlemleri için kullanılacak varsayılan parola ilkesi için DN. Yalnızca her kullanıcı için LDAP parola değişikliği etkinleştirilmiş ise çalışır ve yalnızca OpenLDAP tarafından desteklenir. Parola süresi sona erme işlemlerini devre dışı bırakmak için boş bırakın.",
    "Special Attributes" : "Özel Öznitelikler",
    "Quota Field" : "Kota Alanı",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Kullanıcının varsayılan kotasının kullanılması için boş bırakın ya da bir LDAP/AD özniteliği belirtin.",
    "Quota Default" : "Varsayılan Kota",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Kota Alanına bir kota değeri yazılmamış olan LDAP kullanıcıları için kullanılacak varsayılan kota değerini yazın.",
    "Email Field" : "E-posta Alanı",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Kullanıcı varsayılan e-posta adresinin kullanılması için boş bırakın ya da bir LDAP/AD özniteliği belirtin.",
    "User Home Folder Naming Rule" : "Kullanıcı Ana Klasörünü Adlandırma Kuralı",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Kullanıcı adının kullanılması için boş bırakın (varsayılan) ya da bir LDAP/AD özniteliği belirtin.",
    "\"$home\" Placeholder Field" : "\"$home\" Yer Belirleyici Alanı",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "Bir dış depolama yapılandırmasında $home yerine belirtilen öznitelik konulur",
    "User Profile Attributes" : "Kullanıcı profili öznitelikleri",
    "Phone Field" : "Telefon alanı",
    "User profile Phone will be set from the specified attribute" : "Kullanıcı profilindeki telefon alanının değeri belirtilen öznitelikten alınır",
    "Website Field" : "Site alanı",
    "User profile Website will be set from the specified attribute" : "Kullanıcı profilindeki site alanının değeri belirtilen öznitelikten alınır",
    "Address Field" : "Adres alanı",
    "User profile Address will be set from the specified attribute" : "Kullanıcı profilindeki adres alanının değeri belirtilen öznitelikten alınır",
    "Twitter Field" : "Twitter alanı",
    "User profile Twitter will be set from the specified attribute" : "Kullanıcı profilindeki Twitter alanının değeri belirtilen öznitelikten alınır",
    "Fediverse Field" : "Fediverse alanı",
    "User profile Fediverse will be set from the specified attribute" : "Kullanıcı profilindeki Fediverse alanının değeri belirtilen öznitelikten alınır",
    "Organisation Field" : "Kuruluş alanı",
    "User profile Organisation will be set from the specified attribute" : "Kullanıcı profilindeki kuruluş alanının değeri belirtilen öznitelikten alınır",
    "Role Field" : "Rol alanı",
    "User profile Role will be set from the specified attribute" : "Kullanıcı profilindeki rol alanının değeri belirtilen öznitelikten alınır",
    "Headline Field" : "Başlık alanı",
    "User profile Headline will be set from the specified attribute" : "Kullanıcı profilindeki başlık alanının değeri belirtilen öznitelikten alınır",
    "Biography Field" : "Özgeçmiş alanı",
    "User profile Biography will be set from the specified attribute" : "Kullanıcı profilindeki özgeçmiş alanının değeri belirtilen öznitelikten alınır",
    "Internal Username" : "İç kullanıcı adı",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "Varsayılan olarak, iç kullanıcı adı UUID özniteliğinden oluşturulur. Böylece kullanıcı adının eşsiz olması ve dönüştürülmesi gereken karakterler içermediğinden emin olunur. İç kullanıcı adında kısıtlaması yalnızca şu karakterleri kullanılabilir: [ a-zA-Z0-9_.@-]. Diğer karakterler ASCII karşılıklarına dönüştürülür ya da yok sayılır. Çakışmalarda ada bir sayı eklenir. İç kullanıcı adı bir kullanıcıyı içsel olarak belirlemeye yarar. Aynı zamanda kullanıcı ana klasörünün varsayılan adı olarak da kullanılır. İnternet adreslerinin, örneğin DAV hizmetlerinin bir parçasıdır. Bu seçenek ile varsayılan davranış değiştirilebilir. Değişiklikler yalnızca yeni eşleştirilecek (eklenecek) LDAP kullanıcılarını etkiler. Varsayılan davranışın kullanılması için boş bırakın.",
    "Internal Username Attribute:" : "İç kullanıcı adı özniteliği:",
    "Override UUID detection" : "UUID algılaması değiştirilsin",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Varsayılan olarak, UUID özniteliği otomatik olarak algılanır. UUID özniteliği LDAP kullanıcı ve gruplarını kesin olarak belirlemek için kullanılır. Yukarıda başka türlü belirtilmemişse, bu UUID için bir iç kullanıcı adı oluşturulur. Bu ayarı değiştirerek istenilen bir öznitelik belirtilebilir. Ancak istenilen özniteliğin eşsiz olduğundan ve hem kullanıcı hem de gruplar tarafından kullanıldığından emin olunmalıdır. Varsayılan davranış için boş bırakın. Değişiklikler yalnızca yeni eşleştirilen (eklenen) LDAP kullanıcı ve gruplarını etkiler.",
    "UUID Attribute for Users:" : "Kullanıcılar için UUID Özniteliği:",
    "UUID Attribute for Groups:" : "Gruplar için UUID Özniteliği:",
    "Username-LDAP User Mapping" : "Kullanıcı Adı-LDAP Kullanıcısı Eşleştirme",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Kullanıcı adları, üst veri depolaması ve ataması için kullanılır. Kullanıcıları kesin olarak belirlemek ve algılamak için, her LDAP kullanıcısına bir iç kullanıcı verilir. Bu kullanıcı adı ile LDAP kullanıcısının eşleştirilmesi gerekir. Oluşturulan kullanıcı adı LDAP kullanıcısının UUID değeri ile eşleştirilir. Bunun yanında LDAP etkileşimini azaltmak için DN ön belleğe alınır ancak bu işlem kimlik belirleme için kullanılmaz. DN üzerinde yapılan değişiklikler aktarılır. İç kullanıcı her yerde kullanıldığından, bir eşleştirmeyi kaldırmak pek çok yerde kalıntılar bırakır. Eşleştirmeleri kaldırmak yalnızca yapılandırmaya bağlı değildir, tüm LDAP yapılandırmalarını etkiler! Üretim ortamında eşleştirmeleri asla kaldırmayın, yalnızca sınama ya da deney aşamalarında kullanın.",
    "Clear Username-LDAP User Mapping" : "Kullanıcı Adı-LDAP Kullanıcısı Eşleştirmesini Kaldır",
    "Clear Groupname-LDAP Group Mapping" : "Grup Adı-LDAP Grubu Eşleştirmesini Kaldır",
    "Invalid UUIDs of LDAP users or groups have been found. Please review your \"Override UUID detection\" settings in the Expert part of the LDAP configuration and use \"occ ldap:update-uuid\" to update them." : "LDAP kullanıcıları ya da grupları için geçersiz UUID değerleri bulundu. Lütfen LDAP yapılandırmasının Uzman bölümündeki \"UUID algılaması değiştirilsin\" seçeneğini gözden geçirin ve bunları güncellemek için \"occ ldap:update-uuid\" komutunu kullanın."
},
"nplurals=2; plural=(n > 1);");
