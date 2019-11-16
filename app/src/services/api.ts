export const sendMessage = (text: string) => {
    fetch('http://localhost:5000/message', {
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