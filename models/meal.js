//Modelo de comidas
class Meal{
    constructor(
        id,
        categoryIds, //Una comida puede pertenecer a varias categorias
        title,
        affordability, //Cuan caro o barato es
        complexity,   //Complejidad de realización de la comida
        imageUrl,    //Imagen de la comida
        duration,
        ingredients,
        steps,
        isGlutenFree, //Indica si es o no, libre de gluten
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id,
        this.categoryIds = categoryIds,
        this.title = title,
        this.affordability = affordability,
        this.complexity = complexity,
        this.imageUrl = imageUrl,
        this.duration = duration,
        this.ingredients = ingredients,
        this.steps = steps,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isVegetarian = isVegetarian,
        this.isLactoseFree = isLactoseFree
    };
};

export default Meal;