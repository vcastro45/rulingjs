export default function (len: number, err?: string) {
  return (v: any) => (!v || v.length >= len) ? true : (err || `Vous devez saisir au moins ${len} caractère(s)`)
}
