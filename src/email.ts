export default function (v: any) {
  return (!v || (typeof v === 'string' && /^.+@\S+\.\S+$/.test(v))) || 'Veuillez saisir un E-mail valide'
}
