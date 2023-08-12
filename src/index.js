window.onload = () => {
  // elements declaration
  const notificationTemplate = document.querySelector("#notification");
  const notificationContainer = document.getElementById("toast-notification-container");
  const showNotificationButton = document.getElementById("show-notification-button");
  const notificationSound = new Audio('/sound/notification.mp3')



  showNotificationButton.addEventListener("click", () => {
    // insert a new toast notification
    const newNotification = notificationTemplate.content.cloneNode(true);

    // variable which defines the if for the new dialog notification
    const newDialogId = `notification-${Date.now()}`;

    // set the id for the new toast notification
    const notificationDialog = newNotification.querySelector("dialog")
    notificationDialog.id = newDialogId
    // adds a remove event on the notification when the button Close is clicked
    notificationDialog.addEventListener("close", (event) => {
      setTimeout(() => {
        event.target.remove()
      }, 700)
    })

    // insert the new toast notification in the DOM
    notificationContainer.appendChild(newNotification)
    // play sound notification
    notificationSound.play()

    // when the toast are created, after 4 seconds, it's automatically removed from DOM
    setTimeout(() => {
      const dialogToClose = document.getElementById(newDialogId)
      if (dialogToClose) {
        dialogToClose.close()
      }
    }, 4000)
  })
}