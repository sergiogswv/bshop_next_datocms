const { request } = require("../../lib/datocms");

//Actualmente no se usa, unicamente es ejemplo

export default async function handler(req, res) {
  const elementos = await request({
    query: `query{
      index{
        titulo
        slogan
        flyer {
          id
          url
        }
      }
      allItemscoleccions{
        item{
          slug
          imagen{
            url
            responsiveImage{
              webpSrcSet
            }
          }
          titulo
        }
      }
      promo{
        flyer{
          url
        }
        slogan
      }
    }`,
  });

  res.json(elementos);
}
