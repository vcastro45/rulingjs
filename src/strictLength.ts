export default function (len: number, err?: string) {
  return (v: any) => (!v || v.length === len) ? true : (err || 'La longueur du champ saisie est invalide')
}
