fetch('data/shows.json')
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById('show-table-body');
    data.forEach(show => {
      const memberList = show.members.join(', ');
      tbody.innerHTML += `
        <tr>
          <td>${show.date}</td>
          <td>${show.setlist}</td>
          <td>${memberList}</td>
        </tr>
      `;
    });
  })
  .catch(err => {
    console.error("Gagal memuat data show:", err);
  });
