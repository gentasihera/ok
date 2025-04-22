fetch('data/trainee.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('trainee-list');
    data.forEach(member => {
      container.innerHTML += `
        <div class="trainee-card">
          <img src="img/${member.photo}" alt="${member.name}">
          <h3>${member.name}</h3>
          <a href="trainee-detail.html?id=${member.id}">Lihat Profil</a>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error("Gagal memuat data member:", err);
  });
