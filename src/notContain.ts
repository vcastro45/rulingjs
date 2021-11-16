export default function (forbiddenCharacter: []) {
  return (v: string) => {
    let error: string | boolean = true
    for (const character of forbiddenCharacter) {
      if (v.includes(character)) error = `Le caractère ${character} n'est pas autorisé`
    }
    return error
  }
}
