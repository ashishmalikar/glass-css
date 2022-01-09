export function toast ({
  type,
  title,
  messages,
  values
}) {
  console.log('showing toast')

  let toastDiv = document.createElement("div")

  toastDiv.classList.add("gls-toast-container")

  console.log('Type: ', type)

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

  console.log('Class Type: ', classType)

  toastDiv.innerHTML = `
  <div class="gls-toast gls-is-active ${classType}">
      <div class="gls-header-content">
        ${title}
        <div class="gls-right-content">
          <i class="gls-icon gls-x" onclick="handleToastClose"></i>
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

  setTimeout(()=>{
    document.body.removeChild(toastDiv)
  }, 5000)
}