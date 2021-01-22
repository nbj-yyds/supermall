export default function debounce(fn, time) {
  clearTimeout(debounce.timer);
  debounce.timer = setTimeout(fn, time);
}
