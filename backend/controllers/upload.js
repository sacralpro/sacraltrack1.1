// controllers/upload.js
// Ваш код, использующий модуль Tracks
const Tracks = require('../models/Tracks');




module.exports.uploadTrack = async (req, res) => {

  const {title, artist, genre} = req.body;

  const track = new Track({
    title, 
    artist,
    genre,
    uploader: req.user._id, // id загрузившего пользователя
    audioFile: req.file.path // путь к загруженному аудио файлу
  });

  await track.save();

  res.send(track);

}

module.exports.getUserTracks = async (req, res) => {
  
  const tracks = await Track.find({
    uploader: req.user._id
  });

  res.send(tracks);

}


module.exports.uploadTrack = async (req, res) => {

    // получаем файл
    const audioFile = req.files.audio; 

    }


    module.exports.uploadTrack = (req, res) => {
        const file = req.file; 

    }
      