import Pusher from "pusher-js/react-native";
import { Response } from "../models/Pusher";

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


export const subscribe = async (session: string, callback: (data: Response) => void) => {
    const channel = getPusher().subscribe(session);
    channel.bind('dataflow', callback);
};
