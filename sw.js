forceLocal = ['youtube.com', 'twitch.tv']

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Install');
})

self.addEventListener('fetch', (event) => {
    console.log('Fetch!', event.request)
    eventUrl = new URL(event.request.url)
    clearedUrl = eventUrl.hostname.replace('www.', '')
    if (forceLocal.includes(clearedUrl)) {
        event.respondWith(
            async function() {
                return fetch(
                    new Request(event.request, {
                        mode: 'cors',
                        headers: {
                            'sec-fetch-site': 'same-origin'
                        }
                    })
                )
            }()
        )
    } else {
        event.respondWith(fetch(event.request))
    }
})
