
setInterval(function() {
  if (typeof window.web3 !== "undefined") {
   
      window.addEventListener("message", receiveMessage, false);
   
  }
  else{
    window.location.reload();
  }
}, 3000);


function receiveMessage(event) {
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  if (event.data === "onboardingcomplete") {
    var string = window.location.href;
    if (string.includes("fwd.metamask.io/")) {
      var res = string.substring(24);
      window.open(res);
      window.close();
    }
  }
}
