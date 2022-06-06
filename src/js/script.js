if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then(res => console.log("Service Worker Registered!"))
            .catch(err => console.log(err))
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    chatFrames = document.querySelector("#chat-frames")

    console.log(chatFrames);

    youtubeChat = chatFrames.querySelector(".youtube-chat")
    twitchChat = chatFrames.querySelector(".twitch-chat")

    const query_args = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    //youtubeChat.setAttribute("src", `https://www.youtube.com/live_chat?is_popout=1&v=${query_args.yt_chat}`)
    youtubeChat.setAttribute("src", `https://www.youtube.com/live_chat?continuation=0ofMyAN0GlhDaWtxSndvWVZVTlVlamhZV0Y5WVoyNW1aMEV4WjBWUFl6VnNlWEYzRWd0TWNsWjNSbTA1UldoTE5Cb1Q2cWpkdVFFTkNndE1jbFozUm0wNVJXaExOQ0FCMAGCAQIIBIgBAaAByLjH0qWW-AKoAQCyAQA%253D`)
})