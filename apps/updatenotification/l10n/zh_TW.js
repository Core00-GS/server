OC.L10N.register(
    "updatenotification",
    {
    "{version} is available. Get more information on how to update." : "{version} 釋出了。取得更多關於如何更新的資訊。",
    "Channel updated" : "頻道已更新",
    "Web updater is disabled" : "網頁更新程式已停用",
    "Update notifications" : "更新通知",
    "The update server could not be reached since %d days to check for new updates." : "更新伺服器在%d天前已經無法連線檢查更新",
    "Please check the Nextcloud and server log files for errors." : "請檢查伺服器紀錄檔以確認錯誤。",
    "Update to %1$s is available." : "更新版 %1$s 已經釋出",
    "Update to {serverAndVersion} is available." : "已可更新至 {serverAndVersion}。",
    "Update for {app} to version %s is available." : "{app} 已有 %s 版本的更新。",
    "Update notification" : "更新通知",
    "Displays update notifications for Nextcloud and provides the SSO for the updater." : "顯示 Nextcloud 的更新通知，並為更新程式提供 SSO。",
    "Update" : "更新",
    "The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible." : "您執行的版本已不再維護。請盡快更新到支援中的版本。",
    "Apps missing compatible version" : "應用程式缺少相容的版本",
    "View in store" : "在商店中檢視",
    "Apps with compatible version" : "有相容版本的應用程式",
    "Please note that the web updater is not recommended with more than 100 users! Please use the command line updater instead!" : "請注意，不建議超過 100 個使用者的站台使用網頁更新程式！請改用命令列更新程式！",
    "Open updater" : "打開更新程式",
    "Download now" : "現在下載",
    "Web updater is disabled. Please use the command line updater or the appropriate update mechanism for your installation method (e.g. Docker pull) to update." : "網頁更新程式已停用。請使用命令列更新程式或適合您安裝方式的適當更新機制（例如 Docker pull）進行更新。",
    "What's new?" : "有什麼新鮮事？",
    "View changelog" : "檢視版本更新紀錄",
    "The update check is not yet finished. Please refresh the page." : "更新檢查未完成。請重新整理此頁面。",
    "Your version is up to date." : "您的版本是最新版。",
    "A non-default update server is in use to be checked for updates:" : "使用非預設的更新伺服器檢查更新：",
    "Update channel" : "更新頻道",
    "Changing the update channel also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page." : "變更更新頻道也會影響應用程式管理頁面。舉例來說，切換到測試版頻道後，將會在應用程式管理頁面中向您提供測試版應用程式更新。",
    "Current update channel:" : "目前的更新頻道：",
    "You can always update to a newer version. But you can never downgrade to a more stable version." : "您始終可以更新到較新的版本。但您無法降級到較穩定的版本。",
    "Notify members of the following groups about available updates:" : "有可用更新時通知這些群組的成員：",
    "No groups" : "無群組",
    "Only notifications for app updates are available." : "僅適用於應用程式更新的通知。",
    "The selected update channel makes dedicated notifications for the server obsolete." : "選定的更新通道將會讓伺服器專用的通知過時。",
    "The selected update channel does not support updates of the server." : "選定的更新頻道不支援伺服器更新。",
    "A new version is available: <strong>{newVersionString}</strong>" : "新版本可用：<strong>{newVersionString}</strong>",
    "Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}" : "請注意，新版本釋出後，僅會在有第一個次要版本或更新的版本時顯示。我們會逐步向使用者推送新版本，並在發現問題時跳過特定版本。在 {link} 取得關於更新與釋出頻道的更多資訊",
    "Checking apps for compatible versions" : "正在檢查應用程式的相容版本",
    "Please make sure your config.php does not set <samp>appstoreenabled</samp> to false." : "請確定您的 config.php 中並沒有將 <samp>appstoreenabled</samp> 的值設定為 false。",
    "Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store." : "無法連線至應用程式商店，或是應用程式商店回傳無任何更新。請手動搜尋更新或確定您的伺服器的網際網路連線正常，並可連線至應用程式商店。",
    "<strong>All</strong> apps have a compatible version for this Nextcloud version available." : "<strong>所有</strong>應用程式都有適用於此 Nextcloud 版本的相容版本。",
    "Enterprise" : "企業",
    "For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package." : "企業用。一律提供最新的修補程式等級，但不會立刻更新到下一個主要版本。一旦 Nextcloud GmbH 完成對大規模與關鍵任務部署的額外強化與測試，才會進行更新。此頻道僅供客戶使用，並提供 Nextcloud Enterprise 軟體包。",
    "Stable" : "穩定",
    "The most recent stable version. It is suited for regular use and will always update to the latest major version." : "最新的穩定版本。適於一般使用，一律更新到最新主要版本。",
    "Beta" : "Beta 測試版",
    "A pre-release version only for testing new features, not for production environments." : "釋出前版本，僅供測試新功能使用，不適用於生產環境。",
    "_<strong>%n</strong> app has no compatible version for this Nextcloud version available._::_<strong>%n</strong> apps have no compatible version for this Nextcloud version available._" : ["<strong>%n</strong> 應用程式沒有與此 Nextcloud 版本相容的版本。"],
    "Please use the command line updater to update." : "請使用命令列更新程式來更新。",
    "You can change the update channel below which also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page." : "您可以變更下方的更新頻道，這也會影響應用程式管理頁面。例如，切換到測試版頻道後，在應用程式管理頁更新應用程式時也會提供測試版。",
    "Update channel:" : "更新頻道：",
    "Checked on {lastCheckedDate}" : "檢查於 {lastCheckedDate}"
},
"nplurals=1; plural=0;");
