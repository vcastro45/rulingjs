export default function (len, err) {
    return (v) => (!v || v.length >= len) ? true : (err || `Vous devez saisir au moins ${len} caractère(s)`);
}
