navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
        registration.unregister();
        console.log('Unregistered.');
    }
    console.log('All unregistered.');
}).catch(function (err) {
    console.log('Service Worker registration failed: ', err);
});