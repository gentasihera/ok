const params = new URLSearchParams(window.location.search);
const memberId = params.get("id");

fetch('data/trainee.json')
  .then(res => res.json())
  .then(data => {
    const member = data.find(m => m.id === memberId);
    const container = document.getElementById('trainee-detail');

    if (member) {
      container.innerHTML = `
        <div class="trainee-detail">
          <img src="img/${member.photo}" alt="${member.name}">
          <h2>${member.name}</h2>
          <p>Generasi ke-${member.generation}</p>
          <p>
            <a href="${member.socials.instagram}" target="_blank">Instagram</a> |
            <a href="${member.socials.tiktok}" target="_blank">TikTok</a>
          </p>
        </div>
      `;
    } else {
      container.innerHTML = `<p>Member tidak ditemukan.</p>`;
    }
  });
