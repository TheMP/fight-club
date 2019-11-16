export const sendMessage = (text: string) => {
    fetch('https://fight-club-junction.herokuapp.com/message', {
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