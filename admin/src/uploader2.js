import axios from "./axios";


var formData = new FormData();
formData.append("file", this.state.file);

console.log("a form Data:", formData);

// axios.post("/upload", formData).then(({data}) => {
//     this.state.unShow();
//     this.state.addPicture(data.picture);
//
// });
