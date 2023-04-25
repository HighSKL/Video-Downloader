let downloadButton = document.createElement("button")
downloadButton.id = "download-button"
downloadButton.innerText = "Download"

setTimeout(()=>{
    let element = document.getElementById("owner");
    element.appendChild(downloadButton)
},2000)

downloadButton.addEventListener('click', ()=>{
  const url = location.href
  chrome.runtime.sendMessage({greeting: "hello", sssrc: url})
})
