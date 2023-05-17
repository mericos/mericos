import { DetailedMealCardProps } from "../pages/Meal";


class Meals {
    meals:  Array<DetailedMealCardProps>;
    constructor() {
        this.meals = [
        {
            id: "70e4e12c-0f25-4a34-aa9e-34af44b32f7a",
            mealName: "pizza",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            price: 25,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                }
            ],
            producer: {
                name: "celio",
                avatar: "https://media.licdn.com/dms/image/D4D03AQF8sUe7Cw03QA/profile-displayphoto-shrink_800_800/0/1678481879383?e=2147483647&v=beta&t=unnsVRyjrpVB_4Tv1iN_o5NixsQoiENUVatbqha1H0Y"
            }
        },
       {
            id: "f63d6d1a-77a8-4b8d-a6b9-99d312e1d827",
            mealName: "Shawarma",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Shawarma_chicken.jpg/800px-Shawarma_chicken.jpg",
            price: 25,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                }
            ],
            producer: {
                name: "celio",
                avatar: "https://media.licdn.com/dms/image/D4D03AQF8sUe7Cw03QA/profile-displayphoto-shrink_800_800/0/1678481879383?e=2147483647&v=beta&t=unnsVRyjrpVB_4Tv1iN_o5NixsQoiENUVatbqha1H0Y"
            }
        },
        {
            id: "34b9f63c-11e5-4e17-9ecf-4f7c7c9c5ba1",
            mealName: "Hamburguer",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hamburger_Steak.jpg/800px-Hamburger_Steak.jpg",
            price: 25,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                }
            ],
            producer: {
                name: "celio",
                avatar: "https://media.licdn.com/dms/image/D4D03AQF8sUe7Cw03QA/profile-displayphoto-shrink_800_800/0/1678481879383?e=2147483647&v=beta&t=unnsVRyjrpVB_4Tv1iN_o5NixsQoiENUVatbqha1H0Y"
            }
        },
        {
            id: "e6fb1c4a-b2e8-42e3-a125-05a5b91d8256",
            mealName: "Bolo de chocolate",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Chocolate_cake.jpg/800px-Chocolate_cake.jpg",
            price: 25,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officHere are some tips for improving your critical thinking skills",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                }
            ],
            producer: {
                name: "celio",
                avatar: "https://media.licdn.com/dms/image/D4D03AQF8sUe7Cw03QA/profile-displayphoto-shrink_800_800/0/1678481879383?e=2147483647&v=beta&t=unnsVRyjrpVB_4Tv1iN_o5NixsQoiENUVatbqha1H0Y"
        }
}
        ];
    }
    getMeal(id: string): DetailedMealCardProps | null {
        for( const meal  of this.meals) {
            if(meal.id === id) {
                return meal
            }
        }
        return null
    }
}