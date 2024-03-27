import QRCode from 'qrcode';
import { useState, useEffect } from 'react';

function QR() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [expiryTimeout, setExpiryTimeout] = useState(null);

  const generateQRCode = () => {
    if (expiryTimeout) {
      clearTimeout(expiryTimeout);
    }

    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#335383FF',
        light: '#EEEEEEFF',
      },
    }, (err, url) => {
      if (err) return console.error(err);

      setQr(url);
      const timeout = setTimeout(() => setQr(''), 5000);
      setExpiryTimeout(timeout);
    });
  };

  useEffect(() => {
    return () => {
      if (expiryTimeout) {
        clearTimeout(expiryTimeout);
      }
    };
  }, [expiryTimeout]);

  return (
    <div className="app max-w-md flex flex-col mx-auto text-center py-8">
      <h1 className="text-2xl font-bold mb-4">QR Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com"
        className="text-center py-2 px-4 border-2 border-gray-200 rounded-lg mb-4 w-full"
        value={url}
        onChange={e => setUrl(e.target.value)} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generateQRCode}>
        Generate
      </button>
      {qr && (
        <>
          <div className="mt-4">
            <img src={qr} alt="Generated QR Code" className="mx-auto" />
          </div>
          <h1 className="mt-4 text-sm text-gray-500">This QR code will expire after 5 seconds.</h1>
        </>
      )}
    </div>
  );
}

export default QR;
