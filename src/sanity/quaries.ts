import { defineQuery } from "next-sanity";



export const allProductsdata = defineQuery(
    `*[_type == "product" ] {
            productName,
            discription,
            price,
            category,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url
}`)

