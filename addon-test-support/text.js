export default selector => {
  let arrayLike;
  if (selector instanceof Element) {
    arrayLike = [selector];
  } else if (selector instanceof NodeList) {
    arrayLike = selector;
  } else {
    arrayLike = document.querySelectorAll(selector);
  }
  let text = Array.from(
    arrayLike,
    element => element.textContent
  ).join(' ');
  return text.trim().replace(/[\n ]+/g, ' ');
};
