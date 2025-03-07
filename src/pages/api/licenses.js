export default function handler(req, res) {
    const licenses = [
        { id: 1, name: "AI Image License" },
        { id: 2, name: "Music License" },
        { id: 3, name: "Video License" }
    ];

    res.status(200).json(licenses);

}