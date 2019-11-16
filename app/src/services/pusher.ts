import Pusher from "pusher-js/react-native";

Pusher.logToConsole = true;

const pusher = new Pusher('758a9c9ca125f8a1d2a6', {
    cluster: 'eu',
    forceTLS: true
});

const channel = pusher.subscribe('dataflow');

export const subscribe = (eventName: string, callback: (data: {message: string}) => void) => {
    channel.bind(eventName, callback);
};
