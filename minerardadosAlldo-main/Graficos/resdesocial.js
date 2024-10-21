const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"


async function UtilizadoresRedesSociais() {
    const res1 = await fetch(url1)
    const dados1 = await res1.json()

    const Facebook = (dados1.Facebook)
    const Youtube = (dados1.Youtube)
    const WhatsApp = (dados1.WhatsApp)
    const Instagram = (dados1.Instagram)
    const Tiktok = (dados1.Tiktok)
    const WeChat = (dados1.WeChat)

    const paragrafo1 = document.createElement('p')
    paragrafo1.classList.add('graficos-container__texto')

    paragrafo1.innerHTML = `
    
    Você sabia que o facebook tem <span> ${Facebook} bilhões </span> de usuarios <br>
    Você sabia que o Youtube tem <span> ${Youtube} bilhões </span> de usuarios <br>
    Você sabia que o WhatsApp tem <span> ${WhatsApp} bilhões </span> de usuarios <br>
    Você sabia que o Instagram tem <span> ${Instagram} bilhões </span> de usuarios <br>
    Você sabia que o Tiktok tem <span> ${Tiktok} bilhões </span> de usuarios <br>
    Você sabia que o WeChat tem <span> ${WeChat} bilhões </span> de usuarios


    .`
    console.log(paragrafo1)

    const container1 = document.getElementById("graficos-container")
    container1.appendChild(paragrafo1)
}

UtilizadoresRedesSociais();