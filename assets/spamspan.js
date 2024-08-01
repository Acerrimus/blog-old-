Array.from(document.getElementsByClassName("spamspan")).forEach((e) => {
    const email = atob(e.getAttribute("base64"));
    const a = document.createElement("a");
    a.innerHTML = email;
    a.setAttribute("href", "mailto:" + email);
    e.replaceWith(a);
});
