import melodifyImage from "./Assests/melodifyImage.jpg";
import chatburyImage from "./Assests/chatburyImage.jpg";

const projectList = [
  {
    projectID: 1,
    projectTitle: "Melodify",
    projectImage: melodifyImage,
    projectLink: "https://melodify-abhigyan.vercel.app/",
    techUsed: "React js, Express js, MongoDB",
    projectDesc:
      "Melodify provides a dynamic and responsive music streaming experience, enabling users to add songs to their favorite playlists and seamlessly enjoy their favorite tunes across all devices.",
  },
  {
    projectID: 2,
    projectTitle: "Chatbury",
    projectImage: chatburyImage,
    projectLink: "https://chatbury.vercel.app/",
    techUsed: "React js, Socket.io, MongoDB",
    projectDesc:
      "Chatbury is a real-time chat application powered by MERN stack and Socket.IO. It enables users to engage in instant conversations and view their message history, facilitating seamless communication in a user-friendly interface.",
  },
];

export { projectList };
