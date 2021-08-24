import { Router } from 'express';
const router = Router();

const posts = [
    {
        id: 1,
        text: 'test text',
    },
    {
        id: 2,
        text: 'test text',
    },
    {
        id: 3,
        text: 'test text',
    },
    {
        id: 4,
        text: 'test text',
    },
    {
        id: 5,
        text: 'test text',
    },
];

router.get('/', (req, res) => {
    res.send(posts);
});

export default router;
