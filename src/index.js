window.onload = () => {
  const notificationTemplate = document.getElementById("toast-notification-component");
  const notificationContainer = document.getElementById("toast-notification-container");
  const showNotificationButton = document.getElementById("show-notification-button");

  showNotificationButton.addEventListener("click", () => {
    
    console.log(notificationTemplate)
    const newNotification = notificationTemplate.content.cloneNode(true);
    notificationContainer.appendChild(newNotification)
  })
}