export function randomString(size: number) {
  const charPool = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const length = charPool.length;
  let hash = "";
  for (let i = 0; i < size; i++) {
    hash += charPool[Math.floor(Math.random() * length)];
  }
  return hash;
}
