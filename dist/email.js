export default function (v) {
    return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || 'Veuillez saisir un E-mail valide';
}
