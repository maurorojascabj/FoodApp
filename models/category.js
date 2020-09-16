//Definimos el modelo de los datos con los que trabajaremos
class Category{
    constructor(id, title, color, image){ //Color para usar en la cuadrícula propia para una categoria
        this.id = id;
        this.title = title;
        this.color = color;
        this.image = image;
    };
};

export default Category;