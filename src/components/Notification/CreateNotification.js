import notification from "./Notification";

const createNotification = (type, message, description) => {
    notification[type]({
        message,
        description,
    });
};
export default createNotification;