export default function (v) {
    return (/^[A-Z]*$/.test(v)) || 'Ce champs ne peut contenir que des majuscules';
}
