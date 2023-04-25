import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const videoDir = path.join(process.cwd(), 'public', 'videos');
  const videoPaths = fs.readdirSync(videoDir).map((fileName) => `/videos/${fileName}`);
  res.status(200).json({ videoPaths });
}
