export default function (len, err) {
    return (v) => (!v || v.length === len) ? true : (err || 'La longueur du champ saisie est invalide');
}
