function solution(new_id) {
  const re1 = new_id.toLowerCase();
  const re2 = re1.replace(/[^0-9a-z_\.\-]/g, '');
  const re3 = re2.replace(/\.{2,}/g, '.');
  const re4 = re3.replace(/^\.|\.$/, '');
  const re5 = re4.length === 0 ? 'a' : re4; //.replace(/^$/, 'a')
  const re6 = re5.slice(0, 15).replace(/\.$/, '');

  let re7 = re6;

  while (re7.length < 3) {
    re7 += re7[re7.length - 1];
  }

  return re7;
}
