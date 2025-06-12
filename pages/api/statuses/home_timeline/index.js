const timeline = [
    {
        id:1,
        username: "user1",
        name: "User One",
        avatar: "https://example.com/avatar1.jpg",
        message: "This is the first post.",
    },
    {
        id:2,
        username: "user2",
        name: "User Two",
        avatar: "https://example.com/avatar2.jpg",
        message: "This is the second post.",
    },
    {
        id:3,
        username: "user3",
        name: "User Three",
        avatar: "https://example.com/avatar3.jpg",
        message: "This is the third post.",
    },
    {
        id:4,
        username: "user4",
        name: "User Four",
        avatar: "https://example.com/avatar4.jpg",
        message: "This is the fourth post.",
    },
    {
        id:4,
        username: "user4",
        name: "User Four",
        avatar: "https://example.com/avatar4.jpg",
        message: "This is the fourth post.",
    },
    {
        id:4,
        username: "user4",
        name: "User Four",
        avatar: "https://example.com/avatar4.jpg",
        message: "This is the fourth post.",
    },
    {
        id:4,
        username: "user4",
        name: "User Four",
        avatar: "https://example.com/avatar4.jpg",
        message: "This is the fourth post.",
    }
]



export default (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(timeline))
}