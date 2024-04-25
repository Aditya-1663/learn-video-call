// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const upload=require('./midelware/fileupload')
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// const multer=require('multer')
// const {uploadOnCloudinary} =require('./midelware/cloudnarry')
// const {uploadFileToFirebaseStorage}=require('./midelware/fairbase')

// const storage=multer.diskStorage({
//     destination: (req,res,cb)=>{
//         cb(null,"data/")
//     },
//     filename:(req,file,cb)=>{cb(null, Date.now() + '-' + file.originalname);}
// },
// )
// const upload=multer({ storage })
app.post('/upload',upload.single('filetoupload'), async (req,res,next)=>{
  const h=req.file;
  console.log(req.body.textf) 
  console.log(h)
  console.log(h.path)
  // const clo=await  uploadOnCloudinary(h)
  // const fri=await uploadFileToFirebaseStorage(h);
res.send(h);
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });
// });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

// // Set up middleware to serve static files
// app.use(express.static('public'));

// // Set up middleware to parse request bodies
// app.use(express.urlencoded({ extended: true }));

// // Set up routes
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/upload', upload.single('file_input'), (req, res) => {
//   const textInput = req.body.text_input;
//   const uploadedFile = req.file;

//   let fileContent = null;
//   if (uploadedFile) {
//     fileContent = fs.readFileSync(uploadedFile.path, 'utf-8');
//     fs.unlinkSync(uploadedFile.path); // Delete the uploaded file after reading its content
//   }

//   res.render('display', { textInput: textInput, fileContent: fileContent });
// });

// // Set up view engine
// app.set('view engine', 'ejs');

// // Start server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

