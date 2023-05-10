export const hideCardNumber = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/[\s-]/g, '');
    const numStars = Math.max(cleanedNumber.length - 4, 0);
    const hiddenNumber = '*'.repeat(numStars) + cleanedNumber.slice(numStars);
    const spacedNumber = hiddenNumber.replace(/(.{4})/g, '$1 ');

    return spacedNumber;
}

export const cardNumberSpace = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/[\s-]/g, '');
    const spacedNumber = cleanedNumber.replace(/(.{4})/g, '$1 ');

    return spacedNumber;
}


export const formatDate = (date) => {
    let parts = date.split("/");
    let month = parts[1].padStart(2, "0");
    let year = parts[2].slice(2);
    return `${month}/${year}`;
}