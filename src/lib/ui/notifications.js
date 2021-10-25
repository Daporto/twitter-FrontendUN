import { store } from 'react-notifications-component';

const successNotification = (message) => {
    store.addNotification({
        title: "Success!",
        message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}

export { successNotification }