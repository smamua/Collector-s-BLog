const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  author:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true,
    default: "all"
  },
  date:{
    type: String,
    required: true,
    default: new Date().toDateString()
  },
  image:{
    type: String,
    required: false,

  },
  text:{
    type: String,
    required: false
  }
});
var model = mongoose.model("posts",postSchema)
module.exports = model
//
// var data = {
//   posts:[
//     {
//       title:"First Post",
//       author: "Mr. author",
//       category: "clothing",
//       date:new Date(),
//       image:"https://i.imgur.com/PQwQD72.jpg",
//       text: "vjhnvkorvn jvnirojvkdfiofhjcodnvifjmv k[pkioehf8rhnjkvdfkvphv]"
//     },
//     {
//       title:"First Post",
//       author: "Mr. author",
//       category: "hunting",
//       date:new Date(),
//       image:"https://i.imgur.com/kGeJ0Mw.jpg",
//       text: "vjhnvkorvn jvnirojvkdfiofhjcodnvifjmv k[pkioehf8rhnjkvdfkvphv]"
//     },
//     {
//       title:"First Post",
//       author: "Mr. author",
//       category: "clothing",
//       date:new Date(),
//       image:"https://i.imgur.com/au9Sb99.jpg",
//       text: "vjhnvkorvn jvnirojvkdfiofhjcodnvifjmv k[pkioehf8rhnjkvdfkvphv]"
//     },
//     {
//       title:"First Post",
//       author: "Mr. author",
//       category: "comic books",
//       date:new Date(),
//       image:"https://i.imgur.com/kGeJ0Mw.jpg",
//       text: "vjhnvkorvn jvnirojvkdfiofhjcodnvifjmv k[pkioehf8rhnjkvdfkvphv]"
//     },
//     {
//       title:"First Post",
//       author: "Mr. author",
//       category: "clothing",
//       date:new Date(),
//       image:"https://i.imgur.com/kGeJ0Mw.jpg",
//       text: "vjhnvkorvn jvnirojvkdfiofhjcodnvifjmv k[pkioehf8rhnjkvdfkvphv]"
//     }
//   ],
// }
//
//
//
//
//
//
//
// module.exports = data;
