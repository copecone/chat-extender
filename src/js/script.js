

document.addEventListener("DOMContentLoaded", (event) => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register("./sw.js")
            .then(res => console.log("Service Worker Registered!"))
            .catch(err => console.log(err))
    }

    chatFrames = document.querySelector("#chat-frames")

    console.log(chatFrames);

    youtubeChat = chatFrames.querySelector(".youtube-chat")
    twitchChat = chatFrames.querySelector(".twitch-chat")

    const query_args = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    youtubeChat.src = `https://www.youtube.com/live_chat?is_popout=1&v=${query_args.youtube}&embed_domain=${window.location.host}`
    twitchChat.src = `https://www.twitch.tv/popout/${query_args.twitch}/chat?popout=`
})
