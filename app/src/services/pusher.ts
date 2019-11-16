import Pusher from "pusher-js/react-native";

Pusher.logToConsole = true;

let pusher: Pusher = null;

const getPusher = () => {
    if (pusher == null) {
        pusher = new Pusher('758a9c9ca125f8a1d2a6', {
            cluster: 'eu',
            forceTLS: true
        });
    }

    return pusher;
}


export const subscribe = async (eventName: string, callback: (data: {message: string}) => void) => {
    const channel = getPusher().subscribe('dataflow');
    channel.bind(eventName, callback);
};
