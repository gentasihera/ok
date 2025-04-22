fetch('data/members.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('members-list');
    data.forEach(member => {
      container.innerHTML += `
        <div class="member-card">
          <img src="img/${member.photo}" alt="${member.name}">
          <h3>${member.name}</h3>
          <a href="member-detail.html?id=${member.id}">Lihat Profil</a>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error("Gagal memuat data member:", err);
  });
