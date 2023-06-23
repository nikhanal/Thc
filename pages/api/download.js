import axios from 'axios';

export default async (req, res) => {
  const { fileUrl, fileName } = req.query;

  try {
    const fileResponse = await axios.get(fileUrl, { responseType: 'arraybuffer' });

    const encodedFileName = encodeURIComponent(fileName);
    res.setHeader('Content-Disposition', `attachment; filename="${encodedFileName}"`);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(fileResponse.data);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).send('Error downloading file: ' + error.message);
  }
};