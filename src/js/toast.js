export const toast = {
  show,
  hide () {}
}

export function show ({
  type,
  title,
  messages,
  values,
  timeout
}) {

  let toastDiv = document.createElement("div")

  toastDiv.classList.add("gls-toast-container")

  let classType = '';

  switch (type) {
    case "success":
      classType = 'gls-is-success'
      break;
    case "error":
      classType = 'gls-is-error'
      break;
    case "info":
      classType = 'gls-is-info'
      break;
    case "warning":
      classType = 'gls-is-warning'
      break;
  
    default:
      break;
  }

  toastDiv.innerHTML = `
  <div class="gls-toast gls-is-active ${classType}">
      <div class="gls-header-content">
        ${title}
        <div class="gls-right-content">
          <div style="cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
      <div class="gls-body-content">
        ${messages}
      </div>
      <!--div class="gls-progress-bar">
        <div class="gls-progress"></div>
      </div-->
  </div>
  `

  document.body.appendChild(toastDiv)

  function removeToast () {
    document.body.removeChild(toastDiv)
  }

  setTimeout(()=>{
    removeToast()
  }, 5000)
}