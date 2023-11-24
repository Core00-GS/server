OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "Der mangler kodeord for gendannelsesnøgle",
    "Please repeat the recovery key password" : "Gentag venligst kodeordet for gendannelsesnøglen",
    "Repeated recovery key password does not match the provided recovery key password" : "Det gentagne kodeord for gendannelsesnøglen stemmer ikke med det angivne kodeord for gendannelsesnøglen",
    "Recovery key successfully enabled" : "Gendannelsesnøgle aktiveret med succes",
    "Could not enable recovery key. Please check your recovery key password!" : "Kunne ikke aktivere gendannelsesnøgle. Kontroller venligst dit gendannelsesnøgle kodeord!",
    "Recovery key successfully disabled" : "Gendannelsesnøgle deaktiveret succesfuldt",
    "Could not disable recovery key. Please check your recovery key password!" : "Kunne ikke deaktivere gendannelsesnøgle. Kontroller din gendannelsesnøgle kodeord!",
    "Missing parameters" : "Manglende parametre",
    "Please provide the old recovery password" : "Angiv venligst det gamle kodeord for gendannelsesnøglen",
    "Please provide a new recovery password" : "Angiv venligst et nyt kodeord til gendannelse",
    "Please repeat the new recovery password" : "Gentag venligst det nye kodeord til gendannelse",
    "Password successfully changed." : "Kodeordet blev ændret succesfuldt",
    "Could not change the password. Maybe the old password was not correct." : "Kunne ikke ændre kodeordet. Måske var det gamle kodeord ikke korrekt.",
    "Recovery Key disabled" : "Gendannelsesnøgle er slået fra",
    "Recovery Key enabled" : "Gendannalsesnøgle aktiv",
    "Could not enable the recovery key, please try again or contact your administrator" : "Kunne ikke aktivere gendannelsesnøglen, venligst prøv igen eller kontakt din administrator",
    "Could not update the private key password." : "Kunne ikke opdatere kodeordet til den private nøgle.",
    "The old password was not correct, please try again." : "Det gamle kodeord var ikke korrekt, prøv venligst igen.",
    "The current log-in password was not correct, please try again." : "Det nuværende kodeord til log-in var ikke korrekt, prøv venligst igen.",
    "Private key password successfully updated." : "Privat nøgle kodeord succesfuldt opdateret.",
    "Invalid private key for encryption app. Please update your private key password in your personal settings to recover access to your encrypted files." : "Ugyldig privat nøgle til Krypteringsprogrammet. Venligst opdater din kode til privat nøgle i dine personlige indstillinger for at gendanne adgang til dine krypterede filer.",
    "Encryption App is enabled, but your keys are not initialized. Please log-out and log-in again." : "Krypteringsprogrammet er aktiveret, men dine nøgler er ikke indlæst. Log venligst ud og ind igen.",
    "Please enable server side encryption in the admin settings in order to use the encryption module." : "Venligst aktiver Server kryptering under administrationen hvis du vil anvende krypterings modulet.",
    "Encryption app is enabled and ready" : "Krypteringsprogrammet er aktiveret og klar",
    "Bad Signature" : "Ugyldig signatur",
    "Missing Signature" : "Signatur mangler",
    "one-time password for server-side-encryption" : "Engangs password for kryptering på serverdelen",
    "Cannot decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Kan ikke dekryptere denne fil, sandsynligvis er dette en delt fil. Bed filejeren om at videredele filen med dig.",
    "Cannot read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Kan ikke læse denne fil, sandsynligvis er dette en delt fil. Bed filejeren om at videredele filen med dig.",
    "Default encryption module" : "Standard krypterings modul",
    "Default encryption module for server-side encryption" : "Standard krypteringsmodul til kryptering på serveren",
    "Encryption app is enabled but your keys are not initialized, please log-out and log-in again" : "Krypteringsprogrammet er aktiveret men dine nøgler er ikke indlæst, log venligst ud og ind igen",
    "Encrypt the home storage" : "Krypter hjemmelageret",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "Ved at slå denne valgmulighed til krypteres alle filer i hovedlageret, ellers vil kun filer på eksternt lager blive krypteret",
    "Enable recovery key" : "Aktivér gendannelsesnøgle",
    "Disable recovery key" : "Deaktivér gendannelsesnøgle",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "Gendannelsesnøglen er en ekstra krypteringsnøgle, der bruges til at kryptere filer. Den tillader gendannelse af en brugers filer, hvis brugeren glemmer sin adgangskode.",
    "Recovery key password" : "Gendannelsesnøgle kodeord",
    "Repeat recovery key password" : "Gentag adgangskode for gendannelsesnøgle",
    "Change recovery key password:" : "Skift gendannelsesnøgle kodeord:",
    "Old recovery key password" : "Gammel adgangskode for gendannelsesnøgle",
    "New recovery key password" : "Ny adgangskode for gendannelsesnøgle",
    "Repeat new recovery key password" : "Gentag ny adgangskode for gendannelsesnøgle",
    "Change Password" : "Skift Kodeord",
    "Basic encryption module" : "Basis krypterings modul",
    "Your private key password no longer matches your log-in password." : "Dit private nøglekodeord stemmer ikke længere overens med dit login-kodeord.",
    "Set your old private key password to your current log-in password:" : "Sæt dit gamle, private nøglekodeord til at være dit nuværende login-kodeord. ",
    " If you don't remember your old password you can ask your administrator to recover your files." : "Hvis du ikke kan huske dit gamle kodeord kan du bede din administrator om at gendanne dine filer.",
    "Old log-in password" : "Gammel adgangskode",
    "Current log-in password" : "Nuværende adgangskode",
    "Update Private Key Password" : "Opdater Privat Nøgle Kodeord",
    "Enable password recovery:" : "Aktiver kodeord gendannelse:",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "Aktivering af denne valgmulighed tillader dig at generhverve adgang til dine krypterede filer i tilfælde af tab af kodeord",
    "Enabled" : "Aktiveret",
    "Disabled" : "Deaktiveret",
    "In order to use this encryption module you need to enable server-side\n\t\tencryption in the admin settings. Once enabled this module will encrypt\n\t\tall your files transparently. The encryption is based on AES 256 keys.\n\t\tThe module won't touch existing files, only new files will be encrypted\n\t\tafter server-side encryption was enabled. It is also not possible to\n\t\tdisable the encryption again and switch back to a unencrypted system.\n\t\tPlease read the documentation to know all implications before you decide\n\t\tto enable server-side encryption." : "For at anvende dette krypteringsmodul, skal du aktivere kryptering på server-siden under administrator-indstillinger. Når dette modul er aktieret, vil det kryptere alle dine filer transparent. Krypteringen er baseret på AES 256-nøgler. Modulet rører ikke eksisterende filer, kun nye filer vil blive krypteret, efter at kryptering på server-siden er aktiveret. Det er ikke muligt at aktivere kryptering igen og skifte tilbage til et ukrypteret system. Læs venligst dokumentationen, så du kender konsekvenserne, før du beslutter dig for at slå kryptering til på server-siden."
},
"nplurals=2; plural=(n != 1);");
