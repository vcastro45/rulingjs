export default function (v: any) {
  return (v !== undefined && v !== null) || 'Ce champ est obligatoire'
}
