type TypesRecipes = {
  content: {
    tags: readonly string[];
  };
}[];

export function setupTags(recipes: TypesRecipes) {
  const tagsObject: { [tag: string]: number } = {};

  recipes.forEach((recipe) => {
    return recipe.content.tags.forEach((singleTag) => {
      if (singleTag in tagsObject) {
        tagsObject[singleTag] += 1;
      } else {
        tagsObject[singleTag] = 1;
      }
      return tagsObject;
    });
  });

  const newTags = Object.entries(tagsObject).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });

  return newTags;
}
