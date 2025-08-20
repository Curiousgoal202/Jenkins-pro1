(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const banner = document.getElementById('build-banner');
  if (!banner) return;

  fetch('version.json', { cache: 'no-store' })
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      if (!j) return;
      const txt = `Build #${j.build_number} · commit ${j.git_commit} · ${j.branch} · ${j.built_at}`;
      banner.textContent = txt;
      banner.title = j.jenkins_url || '';
    })
    .catch(() => { /* ignore in dev */ });
})();
