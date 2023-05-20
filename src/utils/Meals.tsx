import { DetailedMealCardProps } from "../pages/Meal";


export class Meals {
    meals:  Array<DetailedMealCardProps>;
    constructor() {
        this.meals = [
        {
            id: "70e4e12c-0f25-4a34-aa9e-34af44b32f7a",
            mealName: "pizza",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
            price: 25,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 5,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                },
                {
                    name: "eggs",
                    image: "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                },
                {
                    name: "sugar",
                    image: "https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800"
                },
                {
                    name: "butter",
                    image: "https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg"
                },
                {
                    name: "milk",
                    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=960,872"
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
            image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            price: 120,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                },
                {
                    name: "eggs",
                    image: "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                },
                {
                    name: "sugar",
                    image: "https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800"
                },
                {
                    name: "butter",
                    image: "https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg"
                },
                {
                    name: "milk",
                    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=960,872"
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
            image: "https://s2.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg",
            price: 180,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officiis praesentium repudiandae!",
            rating: 4,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                },
                {
                    name: "eggs",
                    image: "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                },
                {
                    name: "sugar",
                    image: "https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800"
                },
                {
                    name: "butter",
                    image: "https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg"
                },
                {
                    name: "milk",
                    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=960,872"
                }
            ]
            ,
            producer: {
                name: "celio",
                avatar: "https://media.licdn.com/dms/image/D4D03AQF8sUe7Cw03QA/profile-displayphoto-shrink_800_800/0/1678481879383?e=2147483647&v=beta&t=unnsVRyjrpVB_4Tv1iN_o5NixsQoiENUVatbqha1H0Y"
            }
        },
        {
            id: "e6fb1c4a-b2e8-42e3-a125-05a5b91d8256",
            mealName: "Bolo de chocolate",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1-500x500.png",
            price: 50,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto explicabo totam recusandae quae, dolorem odit voluptatem nobis quasi odio? Alias et totam sed voluptatem magni soluta officHere are some tips for improving your critical thinking skills",
            rating: 2,
            ingredients: [
                {
                    name: "flour",
                    image: "https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg"
                },
                {
                    name: "eggs",
                    image: "https://images.theconversation.com/files/372017/original/file-20201130-21-zuzh18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                },
                {
                    name: "sugar",
                    image: "https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800"
                },
                {
                    name: "butter",
                    image: "https://www.southernliving.com/thmb/JOV1II4ho49bEI50Drk4RDtDK1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Soften_Butter_013-2000-61e8b4e1ad9c431887472483ae714dbb.jpg"
                },
                {
                    name: "milk",
                    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=960,872"
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