/* eslint-disable */
const forceLocal = ['youtube.com', 'twitch.tv']

const enablePreload = async () => {
    if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable()
    }
}

const convertRequest = (event) => {
    return fetch(
        new Request(event.request.url, {
            mode: event.request.mode,
            headers: {
                'Sec-Fetch-Site': 'same-origin',
                'wasans': 'papyrus'
            }
        })
    )
}

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installed')
})

self.addEventListener('activate', (event) => {
    event.waitUntil(enablePreload)
    console.log('[Service Worker] Activated')
})

self.addEventListener('fetch', (event) => {
    console.log('Fetch!', event.request)
    eventUrl = new URL(event.request.url)
    clearedUrl = eventUrl.hostname.replace('www.', '')

    event.respondWith(convertRequest(event))
})
