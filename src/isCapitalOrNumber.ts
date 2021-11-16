export default function (v: string) {
  return (/^[A-Z\d]*$/.test(v)) || 'Ce champs ne peut contenir que des majuscules ou des chiffres'
}
