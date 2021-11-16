export default function (forbiddenCharacter) {
    return (v) => {
        let error = true;
        for (const character of forbiddenCharacter) {
            if (v.includes(character))
                error = `Le caractère ${character} n'est pas autorisé`;
        }
        return error;
    };
}
