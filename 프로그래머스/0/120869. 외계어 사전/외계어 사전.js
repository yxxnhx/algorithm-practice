const solution = (spell, dic) => dic.filter((d) => spell.every((s) => d.includes(s))).length ? 1 : 2;
