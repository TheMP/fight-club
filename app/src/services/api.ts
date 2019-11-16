export const sendMessage = (text: string) => {
    fetch('http:///192.168.1.78:5000/message', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: text,
        }),
    });
}