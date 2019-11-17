exports.seed = function (knex, Promise) {
  return knex("products").insert([
    {
      name: "Acidophilus",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554590052/azdgztcyaeicbyzzvc6w.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12542356,
      shipping: true,
      price: 1099
    },
    {
      name: "Green Tea",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554586846/dteq3pfo34traszn2q7s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 22542356,
      shipping: false,
      price: 2199
    },
    {
      name: "2019-08-12T21:17:13.705Z",
      type: "ointment",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 32542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-16T21:17:13.705Z",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1553980808/lpefx9cwbhnymgkstdqk.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 42542356,
      shipping: true,
      price: 1099
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "book",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565402536/hn9xywffpjevo1iw70tq.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 52542356,
      shipping: false,
      price: 1099
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "spices",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565397974/aqcm8almg28vfw1fes4s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 62542356,
      shipping: true,
      price: 1799
    },
    {
      name: "2019-08-07T21:17:13.705Z",
      type: "bulk",
      category_id: 4,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 72542356,
      shipping: false,
      price: 3999
    },
    {
      name: "2019-07-30T21:17:13.705Z",
      type: "spice",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565284097/f9cd2s62ikmicky6l5yj.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 82542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565283238/ltwjdgdoqqawxfex1wz3.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 92542356,
      shipping: false,
      price: 1399
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565266420/afy01uai6clfhbuct6qe.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 13542356,
      shipping: true,
      price: 1999
    },
    {
      name: "Hemp cream",
      type: "ointment",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565061206/ww6igausqnoypmaz2vy6.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 14542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Olive skin oil",
      type: "bottle",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060627/vxy5ysdqfluss5kkzhni.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 15542356,
      shipping: false,
      price: 1299
    },
    {
      name: "Lycorice Root",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060501/syggn60hxhkilciwwisc.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 16542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Parsley Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565059820/ipo54amivqy9ktonirgy.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 17542356,
      shipping: true,
      price: 2899
    },
    {
      name: "Dried Cilantro",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057670/m3cl0sepffi9hgh0ykay.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 18542356,
      shipping: true,
      price: 2499
    },
    {
      name: "Palmetto Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565056830/bxsvvssrxsjpaieztqkj.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 19542356,
      shipping: false,
      price: 799
    },
    {
      name: "Sulfur",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057458/det0jeb7xuwqgced9hv6.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12642356,
      shipping: true,
      price: 899
    },
    {
      name: "Bay leaves",
      type: "bulk",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565051860/s4klrejrwfkkzdzjmlnh.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12742356,
      shipping: true,
      price: 1099
    },
    {
      name: "Burdock Root",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565050660/kyfqgu0h25zwhigxskuk.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 1282356,
      shipping: false,
      price: 1999
    },
    {
      name: "Acidophilus",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554590052/azdgztcyaeicbyzzvc6w.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12542356,
      shipping: true,
      price: 1099
    },
    {
      name: "Green Tea",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554586846/dteq3pfo34traszn2q7s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 22542356,
      shipping: false,
      price: 2199
    },
    {
      name: "2019-08-12T21:17:13.705Z",
      type: "ointment",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 32542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-16T21:17:13.705Z",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1553980808/lpefx9cwbhnymgkstdqk.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 42542356,
      shipping: true,
      price: 1099
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "book",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565402536/hn9xywffpjevo1iw70tq.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 52542356,
      shipping: false,
      price: 1099
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "spices",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565397974/aqcm8almg28vfw1fes4s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 62542356,
      shipping: true,
      price: 1799
    },
    {
      name: "2019-08-07T21:17:13.705Z",
      type: "bulk",
      category_id: 4,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 72542356,
      shipping: false,
      price: 3999
    },
    {
      name: "2019-07-30T21:17:13.705Z",
      type: "spice",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565284097/f9cd2s62ikmicky6l5yj.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 82542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565283238/ltwjdgdoqqawxfex1wz3.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 92542356,
      shipping: false,
      price: 1399
    },
    {
      name: "Hemp cream",
      type: "ointment",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565061206/ww6igausqnoypmaz2vy6.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 14542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Olive skin oil",
      type: "bottle",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060627/vxy5ysdqfluss5kkzhni.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 15542356,
      shipping: false,
      price: 1299
    },
    {
      name: "Lycorice Root",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060501/syggn60hxhkilciwwisc.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 16542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Parsley Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565059820/ipo54amivqy9ktonirgy.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 17542356,
      shipping: true,
      price: 2899
    },
    {
      name: "Dried Cilantro",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057670/m3cl0sepffi9hgh0ykay.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 18542356,
      shipping: true,
      price: 2499
    },
    {
      name: "Palmetto Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565056830/bxsvvssrxsjpaieztqkj.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 19542356,
      shipping: false,
      price: 799
    },
    {
      name: "Sulfur",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057458/det0jeb7xuwqgced9hv6.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12642356,
      shipping: true,
      price: 899
    },
    {
      name: "Bay leaves",
      type: "bulk",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565051860/s4klrejrwfkkzdzjmlnh.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12742356,
      shipping: true,
      price: 1099
    },
    {
      name: "Burdock Root",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565050660/kyfqgu0h25zwhigxskuk.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 1282356,
      shipping: false,
      price: 1999
    },
    {
      name: "Acidophilus",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554590052/azdgztcyaeicbyzzvc6w.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12542356,
      shipping: true,
      price: 1099
    },
    {
      name: "Green Tea",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554586846/dteq3pfo34traszn2q7s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 22542356,
      shipping: false,
      price: 2199
    },
    {
      name: "2019-08-12T21:17:13.705Z",
      type: "ointment",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 32542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-16T21:17:13.705Z",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1553980808/lpefx9cwbhnymgkstdqk.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 42542356,
      shipping: true,
      price: 1099
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "book",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565402536/hn9xywffpjevo1iw70tq.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 52542356,
      shipping: false,
      price: 1099
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "spices",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565397974/aqcm8almg28vfw1fes4s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 62542356,
      shipping: true,
      price: 1799
    },
    {
      name: "2019-08-07T21:17:13.705Z",
      type: "bulk",
      category_id: 4,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 72542356,
      shipping: false,
      price: 3999
    },
    {
      name: "2019-07-30T21:17:13.705Z",
      type: "spice",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565284097/f9cd2s62ikmicky6l5yj.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 82542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565283238/ltwjdgdoqqawxfex1wz3.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 92542356,
      shipping: false,
      price: 1399
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565266420/afy01uai6clfhbuct6qe.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 13542356,
      shipping: true,
      price: 1999
    },
    {
      name: "Hemp cream",
      type: "ointment",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565061206/ww6igausqnoypmaz2vy6.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 14542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Olive skin oil",
      type: "bottle",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060627/vxy5ysdqfluss5kkzhni.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 15542356,
      shipping: false,
      price: 1299
    },
    {
      name: "Lycorice Root",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060501/syggn60hxhkilciwwisc.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 16542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Parsley Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565059820/ipo54amivqy9ktonirgy.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 17542356,
      shipping: true,
      price: 2899
    },
    {
      name: "Dried Cilantro",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057670/m3cl0sepffi9hgh0ykay.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 18542356,
      shipping: true,
      price: 2499
    },
    {
      name: "Palmetto Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565056830/bxsvvssrxsjpaieztqkj.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 19542356,
      shipping: false,
      price: 799
    },
    {
      name: "Sulfur",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057458/det0jeb7xuwqgced9hv6.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12642356,
      shipping: true,
      price: 899
    },
    {
      name: "Bay leaves",
      type: "bulk",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565051860/s4klrejrwfkkzdzjmlnh.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12742356,
      shipping: true,
      price: 1099
    },
    {
      name: "Burdock Root",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565050660/kyfqgu0h25zwhigxskuk.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 1282356,
      shipping: false,
      price: 1999
    },
    {
      name: "Acidophilus",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554590052/azdgztcyaeicbyzzvc6w.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12542356,
      shipping: true,
      price: 1099
    },
    {
      name: "Green Tea",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1554586846/dteq3pfo34traszn2q7s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 22542356,
      shipping: false,
      price: 2199
    },
    {
      name: "2019-08-12T21:17:13.705Z",
      type: "ointment",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 32542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-16T21:17:13.705Z",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1553980808/lpefx9cwbhnymgkstdqk.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 42542356,
      shipping: true,
      price: 1099
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "book",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565402536/hn9xywffpjevo1iw70tq.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 52542356,
      shipping: false,
      price: 1099
    },
    {
      name: "2019-08-03T21:17:13.705Z",
      type: "spices",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565397974/aqcm8almg28vfw1fes4s.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 62542356,
      shipping: true,
      price: 1799
    },
    {
      name: "2019-08-07T21:17:13.705Z",
      type: "bulk",
      category_id: 4,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565285369/t4cq5lwsot8vdnlys7rp.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 72542356,
      shipping: false,
      price: 3999
    },
    {
      name: "2019-07-30T21:17:13.705Z",
      type: "spice",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565284097/f9cd2s62ikmicky6l5yj.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 82542356,
      shipping: true,
      price: 999
    },
    {
      name: "2019-08-05T21:17:13.705Z",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565283238/ltwjdgdoqqawxfex1wz3.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 92542356,
      shipping: false,
      price: 1399
    },
    {
      name: "Hemp cream",
      type: "ointment",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565061206/ww6igausqnoypmaz2vy6.jpg",
      description: "Celso and Sessegnon were not in the squad for the lagame.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 14542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Olive skin oil",
      type: "bottle",
      category_id: 5,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060627/vxy5ysdqfluss5kkzhni.jpg",
      description: "Declan Rice is one of the bright new stars in GareSouthgat?",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 15542356,
      shipping: false,
      price: 1299
    },
    {
      name: "Lycorice Root",
      type: "bottle",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565060501/syggn60hxhkilciwwisc.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 16542356,
      shipping: true,
      price: 2199
    },
    {
      name: "Parsley Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565059820/ipo54amivqy9ktonirgy.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 17542356,
      shipping: true,
      price: 2899
    },
    {
      name: "Dried Cilantro",
      type: "bulk",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057670/m3cl0sepffi9hgh0ykay.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 18542356,
      shipping: true,
      price: 2499
    },
    {
      name: "Palmetto Extract",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565056830/bxsvvssrxsjpaieztqkj.jpg",
      description: "Howdy, welcome to our blog.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 19542356,
      shipping: false,
      price: 799
    },
    {
      name: "Sulfur",
      type: "bottle",
      category_id: 3,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565057458/det0jeb7xuwqgced9hv6.jpg",
      description: "There is too much analytics nowadays.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12642356,
      shipping: true,
      price: 899
    },
    {
      name: "Bay leaves",
      type: "bulk",
      category_id: 1,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565051860/s4klrejrwfkkzdzjmlnh.jpg",
      description: "Blogin is the way to go. Especially football.",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 12742356,
      shipping: true,
      price: 1099
    },
    {
      name: "Burdock Root",
      type: "bottle",
      category_id: 2,
      image:
        "https://res.cloudinary.com/htg1iqq1p/image/upload/v1565050660/kyfqgu0h25zwhigxskuk.jpg",
      description: "Player nowadays. What's grinding my gears!",
      store_review: "Great Product, you should, like, totally try it.",
      sku: 1282356,
      shipping: false,
      price: 1999
    },
  ]);
};
