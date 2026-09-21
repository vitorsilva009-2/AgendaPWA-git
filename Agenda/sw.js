const CACHE_NAME = "agenda-v1"

self.addEventListener("install", event =>{
    console.log("Service Worker instalado")
})
self.addEventListener("activate", event =>{
    console.log("Service Worker ativado")
})
self.addEventListener("fetch", event => {
    
    console.log(`URL: ${event.request.url}`)
    console.log(`Método: ${event.request.method}`)

    if(event.request.url.endsWith("/test")){
        event.respondWith(new Response("Resposta Criada pelo Service Worker"))
        return;
    }

})
