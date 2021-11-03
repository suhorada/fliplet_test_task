const TEN_MINS_TO_MS = 600000;

export function setNewsLS(feed, url) {
  localStorage.setItem(url, JSON.stringify({ feed, time: Date.now() }));
}

export function getNewsLS(url) {
  const prevData = JSON.parse(localStorage.getItem(url));
  if (Date.now() - prevData?.time > TEN_MINS_TO_MS) {
    return false;
  }
  return prevData.feed;
}
