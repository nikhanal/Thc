export default function handler(req, res) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    res.status(200).json({ date: formattedDate });
  }
  