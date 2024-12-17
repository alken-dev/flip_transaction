export const formatToRpFromNumber = (amount: number): string => {
    return 'Rp' + amount.toLocaleString('id-ID');
};
