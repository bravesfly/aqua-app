import CryptoJS from "crypto-js";
/**
 * 
 * @param {*} data encrypted data
 * @param {*} key encrypt key is app name
 * @returns 
 */
export function encryptData(data, key) {
  const completeKey = (key + "1234567890123456").slice(0, 16);
  const iv = CryptoJS.enc.Utf8.parse("1234567890123456");
  const encrypted = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(completeKey),
    {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString();
}