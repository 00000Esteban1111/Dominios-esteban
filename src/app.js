document.addEventListener("DOMContentLoaded", () => {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const domainList = document.getElementById("domainList");

  function generateDomains() {
    const domains = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          domains.push(`${p}${a}${n}.com`);
        }
      }
    }
    return domains;
  }

  function displayDomains(domains) {
    domainList.innerHTML = ""; // Clear any existing items
    domains.forEach(domain => {
      const li = document.createElement("li");
      li.textContent = domain;
      li.className = "list-group-item";
      domainList.appendChild(li);
    });
  }

  document
    .getElementById("generateDomainsButton")
    .addEventListener("click", () => {
      const domains = generateDomains();
      displayDomains(domains);
    });
});
