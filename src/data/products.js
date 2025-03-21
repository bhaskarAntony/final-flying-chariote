const allProducts = [
    {
        id:1,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+RED+red+240g/FYING.png+(4).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+RED+red+240g/IMG_6811+(2).PNG'],
        name:'T-SHIRT TOXICITY RED 240g',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"
    },
    {
        id:2,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+GREEN+240g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+GREEN+240g/IMG_6831+(2).PNG'],
        name:'T-SHIRT TOXICITY GREEN 240g',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"
        
    },
    {
        id:3,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/IMG_6796+(2).PNG', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
        name:'T-SHIRT TOXICITY CREAM 240g',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:4,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
        name:'T-SHIRT TOXICITY BLACK 240G',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:5,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SOULBOUND+RED+240g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SOULBOUND+RED+240g/IMG_6843+(2).PNG'],
        name:'T-SHIRT SOULBOUND RED 240g',
        price:'799',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:6,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SC+GREEN+250g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SC+GREEN+250g/IMG_6823+(1).WEBP'],
        name:'T-SHIRT SC GREEN 250g',
        price:'799',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:7,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+FC+BLACK+250g/FYING+(6).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+FC+BLACK+250g/IMG_6843+(2).PNG'],
        name:'T-SHIRT FC BLACK 250g',
        price:'799',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:8,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+RED+240g/FYING.png+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+RED+240g/IMG_6811+(3).PNG'],
        name:'T-SHIRT CREATOR RED 240g',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    // {
    //     images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
    //     name:'T-SHIRT CREATOR BLACK 240 g',
    //     price:'699',
    //     description:`
    //     Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
    //     We care about the environment: each print is made using eco-friendly materials and technologies.
    //     The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
    //     `,
    //     sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
    //     information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

    // },
    {
        id:10,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+CREAM+240g/IMG_6796+(2).PNG', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+CREAM+240g/pixelcut-export+4+(1).png'],
        name:'T-SHIRT CREATOR CREAM 240g',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    },
    {
        id:11,
        images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+GREEN/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+GREEN/IMG_6831+(2).PNG'],
        name:'T-SHIRT CREATOR GREEN',
        price:'699',
        description:`
        Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
        We care about the environment: each print is made using eco-friendly materials and technologies.
        The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
        `,
        sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
        information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.'],
        category:"mild"

    }
]

export default allProducts;