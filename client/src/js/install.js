const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event


});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!window.deferredPrompt){
        return
    }
    window.deferredPrompt.prompt()

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

window.deferredPrompt=null
});
