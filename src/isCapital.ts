export default function (v: string) {
  return (/^[A-Z]*$/.test(v)) || 'Ce champs ne peut contenir que des majuscules'
}
